'use strict'

const { createCoreController } = require('@strapi/strapi').factories
const deepmerge = require('deepmerge')
const { basics_default_Data, section_default_Data, editormeta_default_Data } = require('../../../../data')

/**
 * 深度过滤对象/数组中的指定字段（支持字符串或正则），安全处理环引用，不修改原数据。
 *
 * @param {any} value - 任意值（object/array/primitive）
 * @param {(string|RegExp)[]} fields - 要过滤的字段名数组（字符串或正则）
 * @param {object} [options]
 * @param {string[]} [options.keepKeysDeep] - 可选：在递归子对象级别保留的 key（即使在 fields 中也不删除）
 * @param {Object} [options.keepNestedKeys] - 可选：保留指定对象的，某个字段（即使在 fields 中也不删除）
 * @returns {any} - 过滤后新对象（原始值不变）
 */
function filterFieldsDeep(value, fields = [], options = {}) {
    if (!value) return value
    const { keepKeysDeep = [], keepNestedKeys = {} } = options

    // 规范化 matcher
    const matchers = (fields || []).map(f => {
        if (f instanceof RegExp) return key => f.test(key)
        if (typeof f === 'string') return key => key === f
        throw new TypeError('fields must be array of string or RegExp')
    })

    const keyMatches = key => {
        for (const m of matchers) if (m(key)) return true
        return false
    }

    const seen = new WeakMap()

    function _cloneAndFilter(val, depth = 0, parentKey = null) {
        // primitives / functions / null
        if (val === null || typeof val !== 'object') return val

        // handle Date
        if (val instanceof Date) return new Date(val.getTime())
        // handle RegExp
        if (val instanceof RegExp) return new RegExp(val)

        // If already cloned, return the clone (handles循环引用)
        if (seen.has(val)) return seen.get(val)

        // Arrays
        if (Array.isArray(val)) {
            const arrClone = []
            seen.set(val, arrClone)
            for (let i = 0; i < val.length; i++) {
                arrClone[i] = _cloneAndFilter(val[i], depth + 1, parentKey)
            }
            return arrClone
        }

        // Plain object (only enumerate own enumerable keys)
        // For non-plain objects (Map, Set, class instances), we try to shallow-copy their enumerable props.
        const objClone = {}
        seen.set(val, objClone)
        const parentWhitelist = keepNestedKeys[parentKey] || null

        for (const key of Object.keys(val)) {
            // if key is in keepKeysDeep -> always keep
            if (keepKeysDeep.includes(key)) {
                objClone[key] = _cloneAndFilter(val[key], depth + 1, key)
                continue
            }

            // if key is in keepNestedKeys -> nest keep
            if (parentWhitelist?.includes(key)) {
                objClone[key] = _cloneAndFilter(val[key], depth + 1, key)
                continue
            }

            // if matches filter -> skip
            if (keyMatches(key)) continue

            objClone[key] = _cloneAndFilter(val[key], depth + 1, key)
        }

        return objClone
    }

    return _cloneAndFilter(value, 0)
}

//------------------------------------------------------
// 工具：sections 数组 ↔ 对象
//------------------------------------------------------
function arrayToObject(arr) {
    if (!Array.isArray(arr)) return {}
    const obj = {}
    for (const section of arr) {
        obj[section.sectionId] = section
    }
    return obj
}

function objectToArray(obj) {
    if (!obj || typeof obj !== 'object') return []
    return Object.values(obj)
}

//------------------------------------------------------
// 工具：前端传入数据 → Strapi 可存储格式
//------------------------------------------------------
const createNormalizeInput = payload => {
    if (!payload) return payload

    // basics 默认
    if (!payload.basics) {
        payload.basics = deepmerge({}, basics_default_Data)
    }

    // editormeta 默认
    if (!payload.editormeta) {
        // payload.editormeta = deepmerge({}, editormeta_default_Data)
    }

    // sections：如果是对象 → 数组
    if (!payload.sections) {
        payload.sections = deepmerge([], section_default_Data)
    } else if (!Array.isArray(payload.sections)) {
        payload.sections = objectToArray(payload.sections)
    }

    // console.log('[DEBUG📝] normalizeInput', payload)

    return payload
}

function updateNormalizeInput(payload = {}) {
    if (!payload?.data) return payload

    const { data, ...rest } = payload
    let normalizedSections = []

    if (data.sections) {
        normalizedSections = Object.keys(data.sections).map(key => {
            const section = { ...data.sections[key] }

            // 处理自定义 section 的组件标识（必须将 __component 放在首位）
            if (
                section.sectionId &&
                typeof section.sectionId === 'string' &&
                section.sectionId.startsWith('custom-') &&
                !section.__component
            ) {
                return {
                    __component: 'dynamic-zone.section-custom',
                    ...section,
                }
            }

            return section
        })
    }

    const result = {
        ...rest,
        basics: data.basics ?? {},
        sections: normalizedSections,
        // editormeta: data.editormeta ?? JSON.parse(JSON.stringify(editormeta_default_Data)),
    }

    // console.log('[DEBUG📝] UpdateNormalizeInput1', data.sections)

    return result
}

//------------------------------------------------------
// 工具：Strapi 返回数据 → 前端需要的格式
//------------------------------------------------------
const normalizeOutput = (item = {}) => {
    const { basics, sections, editormeta, ...rest } = item

    return {
        ...rest,
        data: {
            basics: basics ?? {},
            sections: arrayToObject(sections ?? []),
            editormeta: editormeta ?? JSON.parse(JSON.stringify(editormeta_default_Data)),
        },
    }
}

module.exports = createCoreController('api::resume.resume', ({ strapi }) => ({
    //------------------------------------------------------
    // ✔ Create
    //------------------------------------------------------
    async create(ctx) {
        const contentType = strapi.contentType('api::resume.resume')
        const strapiPrivateAttributes = contentType.options.privateAttributes || []
        const customPrivateAttributes = ['publishedAt', 'id', '__component']

        ctx.request.body.data = createNormalizeInput(ctx.request.body.data)

        const response = await super.create(ctx)
        const result = filterFieldsDeep(response.data, [...strapiPrivateAttributes, ...customPrivateAttributes])

        // console.log('[DEBUG📝] filterFieldsDeep output create', result)

        return {
            data: normalizeOutput(result),
            meta: response.meta,
        }
    },

    //------------------------------------------------------
    // ✔ Find many
    //------------------------------------------------------
    async find(ctx) {
        const response = await super.find(ctx)
        // const items = response.data.map(normalizeOutput)

        // return {
        //     data: items,
        //     meta: response.meta,
        // }
        return response
    },

    //------------------------------------------------------
    // ✔ Find one
    //------------------------------------------------------
    async findOne(ctx) {
        const contentType = strapi.contentType('api::resume.resume')
        const strapiPrivateAttributes = contentType.options.privateAttributes || []
        const customPrivateAttributes = ['createdAt', 'updatedAt', 'publishedAt']

        // sanitize
        const sanitizedData = await this.sanitizeInput(ctx.request.body.data, ctx)
        ctx.request.body.data = sanitizedData
        // console.log('[DEBUG📝] filterFieldsDeep ctx.query', ctx.query)

        const response = await super.findOne(ctx)
        const result = filterFieldsDeep(response.data, [...strapiPrivateAttributes, ...customPrivateAttributes], {
            keepNestedKeys: {
                items: ['id'],
            },
        })

        // console.log('[DEBUG📝] filterFieldsDeep output', response)

        return {
            data: normalizeOutput(result),
            meta: response.meta,
        }
    },

    //------------------------------------------------------
    // ✔ Update
    //------------------------------------------------------
    async update(ctx) {
        const contentType = strapi.contentType('api::resume.resume')
        const strapiPrivateAttributes = contentType.options.privateAttributes || []
        const customPrivateAttributes = ['createdAt', 'updatedAt', 'publishedAt', 'id', '__component']
        // console.log('[DEBUG📝] update body.data', ctx.request.body.data)

        // sanitize
        const sanitizedData = await this.sanitizeInput(ctx.request.body.data, ctx)
        const filteredData = filterFieldsDeep(sanitizedData, ['id'])
        ctx.request.body.data = updateNormalizeInput(filteredData)

        console.log('[DEBUG📝] sanitize update body.data', ctx.request.body.data)

        const response = await super.update(ctx)
        const result = filterFieldsDeep(response.data, [...strapiPrivateAttributes, ...customPrivateAttributes])

        // console.log('[DEBUG📝] update filterFieldsDeep result', result)

        return {
            data: normalizeOutput(result),
            meta: response.meta,
        }
    },

    //------------------------------------------------------
    // ✔ Delete
    //------------------------------------------------------
    async delete(ctx) {
        await super.delete(ctx)
        ctx.status = 200

        return {
            code: 200,
            message: 'Delete successful',
        }
    },
}))
