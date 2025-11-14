import type { Schema, Struct } from '@strapi/strapi';

export interface DynamicZoneSectionAwards extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_section_awards';
  info: {
    displayName: 'section-awards';
  };
  attributes: {};
}

export interface DynamicZoneSectionCertifications
  extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_section_certifications';
  info: {
    displayName: 'section-certifications';
  };
  attributes: {};
}

export interface DynamicZoneSectionCustom extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_section_customs';
  info: {
    displayName: 'section-custom';
  };
  attributes: {};
}

export interface DynamicZoneSectionEducation extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_section_educations';
  info: {
    displayName: 'section-education';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Education'>;
    sectionId: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'education'>;
  };
}

export interface DynamicZoneSectionExperience extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_section_experiences';
  info: {
    displayName: 'section-experience';
  };
  attributes: {};
}

export interface DynamicZoneSectionInterests extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_section_interests';
  info: {
    displayName: 'section-interests';
  };
  attributes: {};
}

export interface DynamicZoneSectionInternships extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_section_internships';
  info: {
    displayName: 'section-internships';
  };
  attributes: {};
}

export interface DynamicZoneSectionLanguages extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_section_languages';
  info: {
    displayName: 'section-languages';
  };
  attributes: {};
}

export interface DynamicZoneSectionPortfolio extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_section_portfolios';
  info: {
    displayName: 'section-portfolio';
  };
  attributes: {};
}

export interface DynamicZoneSectionProjects extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_section_projects';
  info: {
    displayName: 'section-projects';
  };
  attributes: {};
}

export interface DynamicZoneSectionPublications extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_section_publications';
  info: {
    displayName: 'section-publications';
  };
  attributes: {};
}

export interface DynamicZoneSectionReferences extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_section_references';
  info: {
    displayName: 'section-references';
  };
  attributes: {};
}

export interface DynamicZoneSectionSkills extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_section_skills';
  info: {
    displayName: 'section-skills';
  };
  attributes: {};
}

export interface DynamicZoneSectionSummary extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_section_summaries';
  info: {
    displayName: 'section-summary';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    defaultLayout: Schema.Attribute.Enumeration<['main', 'sidebar']> &
      Schema.Attribute.DefaultTo<'main'>;
    disabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isVisible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    name: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Professional_Summary'>;
    sectionId: Schema.Attribute.String & Schema.Attribute.DefaultTo<'summary'>;
  };
}

export interface DynamicZoneSectionVolunteer extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_section_volunteers';
  info: {
    displayName: 'section-volunteer';
  };
  attributes: {};
}

export interface ResumeBasics extends Struct.ComponentSchema {
  collectionName: 'components_resume_basics';
  info: {
    displayName: 'basics';
    icon: 'calendar';
  };
  attributes: {
    address: Schema.Attribute.String;
    avatarUrl: Schema.Attribute.String;
    contacts: Schema.Attribute.Component<'resume.contacts', false>;
    customFields: Schema.Attribute.Component<'resume.custom-fields', true>;
    dob: Schema.Attribute.String;
    email: Schema.Attribute.Email;
    jobTitle: Schema.Attribute.String;
    name: Schema.Attribute.String;
    phone: Schema.Attribute.String;
    tags: Schema.Attribute.JSON;
    website: Schema.Attribute.String;
  };
}

export interface ResumeContacts extends Struct.ComponentSchema {
  collectionName: 'components_resume_contacts';
  info: {
    displayName: 'basics-contacts';
    icon: 'hashtag';
  };
  attributes: {
    github: Schema.Attribute.String;
  };
}

export interface ResumeCustomFields extends Struct.ComponentSchema {
  collectionName: 'components_resume_custom_fields';
  info: {
    displayName: 'basics-customFields';
    icon: 'brush';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    target: Schema.Attribute.Enumeration<
      ['_blank', '_self', '_parent', '_top']
    >;
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'dynamic-zone.section-awards': DynamicZoneSectionAwards;
      'dynamic-zone.section-certifications': DynamicZoneSectionCertifications;
      'dynamic-zone.section-custom': DynamicZoneSectionCustom;
      'dynamic-zone.section-education': DynamicZoneSectionEducation;
      'dynamic-zone.section-experience': DynamicZoneSectionExperience;
      'dynamic-zone.section-interests': DynamicZoneSectionInterests;
      'dynamic-zone.section-internships': DynamicZoneSectionInternships;
      'dynamic-zone.section-languages': DynamicZoneSectionLanguages;
      'dynamic-zone.section-portfolio': DynamicZoneSectionPortfolio;
      'dynamic-zone.section-projects': DynamicZoneSectionProjects;
      'dynamic-zone.section-publications': DynamicZoneSectionPublications;
      'dynamic-zone.section-references': DynamicZoneSectionReferences;
      'dynamic-zone.section-skills': DynamicZoneSectionSkills;
      'dynamic-zone.section-summary': DynamicZoneSectionSummary;
      'dynamic-zone.section-volunteer': DynamicZoneSectionVolunteer;
      'resume.basics': ResumeBasics;
      'resume.contacts': ResumeContacts;
      'resume.custom-fields': ResumeCustomFields;
      'shared.link': SharedLink;
    }
  }
}
