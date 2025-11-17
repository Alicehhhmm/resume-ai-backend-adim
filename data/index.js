const basics_default_Data = {
    name: null,
    phone: null,
    email: null,
    address: null,
    jobTitle: null,
    avatarUrl: null,
    dob: null,
    website: null,
    tags: null,
    contacts: {
        github: null,
    },
    customFields: [],
}

const section_default_Data = [
    {
        __component: 'dynamic-zone.section-summary',
        sectionId: 'summary',
        name: 'Professional_Summary',
        defaultLayout: 'main',
        isVisible: true,
        disabled: false,
        content: null,
    },
    {
        __component: 'dynamic-zone.section-education',
        sectionId: 'education',
        name: 'Education',
    },
]

const editormeta_default_Data = JSON.stringify({})

module.exports = {
    basics_default_Data,
    section_default_Data,
    editormeta_default_Data,
}
