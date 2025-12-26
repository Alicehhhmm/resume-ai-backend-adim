const basics_default_Data = {
    name: null,
    phone: null,
    email: null,
    address: null,
    jobTitle: null,
    avatarUrl: null,
    dob: null,
    website: null,
    customFields: [],
}

const REQUIRED = [
    {
        __component: 'dynamic-zone.section-summary',
        sectionId: 'summary',
        name: 'Professional_Summary',
        layout: 'main',
        visible: true,
        disabled: false,
        content: null,
        contentx: null,
    },
    {
        __component: 'dynamic-zone.section-education',
        sectionId: 'education',
        name: 'Education',
        layout: 'main',
        visible: true,
        disabled: false,
        items: [],
    },
    {
        __component: 'dynamic-zone.section-experience',
        sectionId: 'experience',
        name: 'Experience',
        layout: 'main',
        visible: true,
        disabled: false,
        items: [],
    },
    {
        __component: 'dynamic-zone.section-projects',
        sectionId: 'projects',
        name: 'Projects',
        layout: 'main',
        visible: true,
        disabled: false,
        items: [],
    },
    {
        __component: 'dynamic-zone.section-certifications',
        sectionId: 'certifications',
        name: 'Certifications',
        layout: 'sidebar',
        visible: true,
        disabled: false,
        items: [],
    },
    {
        __component: 'dynamic-zone.section-awards',
        sectionId: 'awards',
        name: 'Awards',
        layout: 'sidebar',
        visible: true,
        disabled: false,
        items: [],
    },
]

const OPTIONAL = [
    {
        __component: 'dynamic-zone.section-awards',
        sectionId: 'awards',
        name: 'Awards',
        layout: 'sidebar',
        visible: true,
        disabled: false,
        items: [],
    },
    {
        __component: 'dynamic-zone.section-skills',
        sectionId: 'skills',
        name: 'Skills',
        layout: 'main',
        visible: true,
        disabled: false,
        items: [],
    },
    {
        __component: 'dynamic-zone.section-interests',
        sectionId: 'interests',
        name: 'Interests',
        layout: 'sidebar',
        visible: true,
        disabled: false,
        items: [],
    },
    {
        __component: 'dynamic-zone.section-volunteer',
        sectionId: 'volunteer',
        name: 'Volunteer',
        layout: 'main',
        visible: true,
        disabled: false,
        items: [],
    },
    {
        __component: 'dynamic-zone.section-internships',
        sectionId: 'internships',
        name: 'Internships',
        layout: 'main',
        visible: true,
        disabled: false,
        items: [],
    },
    {
        __component: 'dynamic-zone.section-portfolio',
        sectionId: 'portfolio',
        name: 'Portfolio',
        layout: 'main',
        visible: true,
        disabled: false,
        items: [],
    },
]

const CUSTOM = [
    {
        __component: 'dynamic-zone.section-custom',
        sectionId: 'custom',
        name: 'custom',
        layout: 'main',
        visible: true,
        disabled: false,
        items: [],
    },
]

const editormeta_default_Data = JSON.stringify({})

module.exports = {
    required_sections: REQUIRED,
    optional_sections: OPTIONAL,
    custom_sections: CUSTOM,
    basics_default_Data,
    section_default_Data: [...REQUIRED, ...OPTIONAL, ...CUSTOM],
    editormeta_default_Data,
}
