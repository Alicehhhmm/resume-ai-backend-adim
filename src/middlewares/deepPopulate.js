/**
 * `deepPopulate` middleware
 */
'use strict'

const { contentTypes } = require('@strapi/utils')
const pluralize = require('pluralize')

const extractPathSegment = url => {
    const match = url.match(/\/([^/?]+)(?:\?|$)/)
    return match ? match[1] : ''
}

const getDeepPopulate = (uid, opts = {}) => {
    const model = strapi.getModel(uid)

    const attributes = Object.entries(model.attributes)

    return attributes.reduce((acc, [attributeName, attribute]) => {
        switch (attribute.type) {
            case 'relation': {
                const isMorphRelation = attribute.relation.toLowerCase().startsWith('morph')
                if (isMorphRelation) {
                    break
                }

                const isVisible = contentTypes.isVisibleAttribute(model, attributeName)

                if (isVisible) {
                    if (attributeName === 'testimonials') {
                        acc[attributeName] = { populate: 'user.image' }
                    } else {
                        acc[attributeName] = { populate: '*' }
                    }
                }

                break
            }

            case 'media': {
                acc[attributeName] = { populate: '*' }
                break
            }

            case 'component': {
                const populate = getDeepPopulate(attribute.component, opts)
                acc[attributeName] = { populate }
                break
            }

            case 'dynamiczone': {
                const populatedComponents = (attribute.components || []).reduce((acc, componentUID) => {
                    acc[componentUID] = {
                        populate: getDeepPopulate(componentUID, opts),
                    }
                    return acc
                }, {})

                acc[attributeName] = { on: populatedComponents }
                break
            }
            default:
                break
        }

        return acc
    }, {})
}

module.exports = (config, { strapi }) => {
    return async (ctx, next) => {
        if (
            ctx.request.url.startsWith('/api/') &&
            ctx.request.method === 'GET' &&
            ctx.query.populate &&
            !ctx.request.url.includes('/api/users') &&
            !ctx.request.url.includes('/api/seo')
        ) {
            strapi.log.info('Using custom Dynamic-Zone population Middleware...')

            const contentType = extractPathSegment(ctx.request.url)
            const singular = pluralize.singular(contentType)
            const uid = `api::${singular}.${singular}`

            // 添加模型存在性检查
            const model = strapi.getModel(uid)

            if (!model) {
                strapi.log.warn(`🧶Model not found for UID: ${uid}`)
                await next()
                return
            }

            ctx.query.populate = {
                ...getDeepPopulate(uid),
                ...(!ctx.request.url.includes('products') && {
                    localizations: { populate: {} },
                }),
            }
        }
        await next()
    }
}
