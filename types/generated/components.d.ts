import type { Schema, Struct } from '@strapi/strapi';

export interface DynamicZoneSectionAwards extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_section_awards';
  info: {
    displayName: 'section-awards';
  };
  attributes: {
    disabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    items: Schema.Attribute.Component<'resume.awards-items', true>;
    layout: Schema.Attribute.Enumeration<['main', 'sidebar']> &
      Schema.Attribute.DefaultTo<'sidebar'>;
    name: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Awards'>;
    sectionId: Schema.Attribute.String & Schema.Attribute.DefaultTo<'awards'>;
    visible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface DynamicZoneSectionCertifications
  extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_section_certifications';
  info: {
    displayName: 'section-certifications';
  };
  attributes: {
    disabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    items: Schema.Attribute.Component<'resume.certifications-items', true>;
    layout: Schema.Attribute.Enumeration<['main', 'sidebar']> &
      Schema.Attribute.DefaultTo<'sidebar'>;
    name: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Certifications'>;
    sectionId: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'certifications'>;
    visible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface DynamicZoneSectionCustom extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_section_customs';
  info: {
    displayName: 'section-custom';
  };
  attributes: {
    disabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    items: Schema.Attribute.Component<'resume.custom-items', true>;
    layout: Schema.Attribute.Enumeration<['main', 'sidebar']> &
      Schema.Attribute.DefaultTo<'main'>;
    name: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Custom'>;
    sectionId: Schema.Attribute.String & Schema.Attribute.DefaultTo<'custom'>;
    visible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface DynamicZoneSectionEducation extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_section_educations';
  info: {
    displayName: 'section-education';
  };
  attributes: {
    disabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    items: Schema.Attribute.Component<'resume.education-items', true>;
    layout: Schema.Attribute.Enumeration<['main', 'sidebar']> &
      Schema.Attribute.DefaultTo<'main'>;
    name: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Education'>;
    sectionId: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'education'>;
    visible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface DynamicZoneSectionExperience extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_section_experiences';
  info: {
    displayName: 'section-experience';
  };
  attributes: {
    disabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    items: Schema.Attribute.Component<'resume.experience-items', false>;
    layout: Schema.Attribute.Enumeration<['main', 'sidebar']> &
      Schema.Attribute.DefaultTo<'main'>;
    name: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Experience'>;
    sectionId: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'experience'>;
    visible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface DynamicZoneSectionInterests extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_section_interests';
  info: {
    displayName: 'section-interests';
  };
  attributes: {
    disabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    items: Schema.Attribute.Component<'resume.interests-items', true>;
    layout: Schema.Attribute.Enumeration<['main', 'sidebar']> &
      Schema.Attribute.DefaultTo<'sidebar'>;
    name: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Interests'>;
    sectionId: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'interests'>;
    visible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface DynamicZoneSectionInternships extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_section_internships';
  info: {
    displayName: 'section-internships';
  };
  attributes: {
    disabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    items: Schema.Attribute.Component<'resume.internships-items', true>;
    layout: Schema.Attribute.Enumeration<['main', 'sidebar']> &
      Schema.Attribute.DefaultTo<'main'>;
    name: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Internships'>;
    sectionId: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'internships'>;
    visible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
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
  attributes: {
    disabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    items: Schema.Attribute.Component<'resume.portfolio-items', true>;
    layout: Schema.Attribute.Enumeration<['main', 'sidebar']> &
      Schema.Attribute.DefaultTo<'main'>;
    name: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Portfolio'>;
    sectionId: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'portfolio'>;
    visible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface DynamicZoneSectionProjects extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_section_projects';
  info: {
    displayName: 'section-projects';
  };
  attributes: {
    disabled: Schema.Attribute.Boolean;
    items: Schema.Attribute.Component<'resume.projects-items', false>;
    layout: Schema.Attribute.Enumeration<['main', 'sidebar']> &
      Schema.Attribute.DefaultTo<'main'>;
    name: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Projects'>;
    sectionId: Schema.Attribute.String & Schema.Attribute.DefaultTo<'projects'>;
    visible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface DynamicZoneSectionSkills extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_section_skills';
  info: {
    displayName: 'section-skills';
  };
  attributes: {
    disabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    items: Schema.Attribute.Component<'resume.skills-items', true>;
    layout: Schema.Attribute.Enumeration<['main', 'sidebar']> &
      Schema.Attribute.DefaultTo<'main'>;
    name: Schema.Attribute.String;
    sectionId: Schema.Attribute.String & Schema.Attribute.DefaultTo<'skills'>;
    visible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface DynamicZoneSectionSummary extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_section_summaries';
  info: {
    displayName: 'section-summary';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    contentx: Schema.Attribute.Text;
    disabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    layout: Schema.Attribute.Enumeration<['main', 'sidebar']> &
      Schema.Attribute.DefaultTo<'main'>;
    name: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Professional_Summary'>;
    sectionId: Schema.Attribute.String & Schema.Attribute.DefaultTo<'summary'>;
    visible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface DynamicZoneSectionVolunteer extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_section_volunteers';
  info: {
    displayName: 'section-volunteer';
  };
  attributes: {
    disabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    items: Schema.Attribute.Component<'resume.volunteer-items', true>;
    layout: Schema.Attribute.Enumeration<['main', 'sidebar']> &
      Schema.Attribute.DefaultTo<'main'>;
    name: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Volunteer'>;
    sectionId: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'volunteer'>;
    visible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface ResumeAwardsItems extends Struct.ComponentSchema {
  collectionName: 'components_resume_awards_items';
  info: {
    displayName: 'awards-items';
  };
  attributes: {
    date: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    disabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    issuer: Schema.Attribute.String;
    title: Schema.Attribute.String;
    visible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
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

export interface ResumeCertificationsItems extends Struct.ComponentSchema {
  collectionName: 'components_resume_certifications_items';
  info: {
    displayName: 'certifications-items';
  };
  attributes: {
    issuer: Schema.Attribute.String;
    link: Schema.Attribute.Component<'shared.link', false>;
    title: Schema.Attribute.String;
    validDate: Schema.Attribute.String;
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

export interface ResumeCustomItems extends Struct.ComponentSchema {
  collectionName: 'components_resume_custom_items';
  info: {
    displayName: 'custom-items';
  };
  attributes: {
    description: Schema.Attribute.Text;
    endDateStr: Schema.Attribute.String;
    link: Schema.Attribute.Component<'shared.link', false>;
    startDateStr: Schema.Attribute.String;
    summary: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ResumeEducationItems extends Struct.ComponentSchema {
  collectionName: 'components_resume_education_items';
  info: {
    displayName: 'education-items';
  };
  attributes: {
    degree: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    disabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    endDate: Schema.Attribute.String;
    major: Schema.Attribute.String;
    startDate: Schema.Attribute.String;
    universityName: Schema.Attribute.String;
    visible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface ResumeExperienceItems extends Struct.ComponentSchema {
  collectionName: 'components_resume_experience_items';
  info: {
    displayName: 'experience-items';
  };
  attributes: {
    companyName: Schema.Attribute.String;
    disabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    endDate: Schema.Attribute.String;
    location: Schema.Attribute.String;
    position: Schema.Attribute.String;
    startDate: Schema.Attribute.String;
    summary: Schema.Attribute.Text;
    visible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface ResumeInterestsItems extends Struct.ComponentSchema {
  collectionName: 'components_resume_interests_items';
  info: {
    displayName: 'interests-items';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

export interface ResumeInternshipsItems extends Struct.ComponentSchema {
  collectionName: 'components_resume_internships_items';
  info: {
    displayName: 'internships-items';
  };
  attributes: {
    companyname: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    endDate: Schema.Attribute.String;
    position: Schema.Attribute.String;
    startDate: Schema.Attribute.String;
  };
}

export interface ResumePortfolioItems extends Struct.ComponentSchema {
  collectionName: 'components_resume_portfolio_items';
  info: {
    displayName: 'portfolio-items';
  };
  attributes: {
    date: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    link: Schema.Attribute.Component<'shared.link', true>;
    publisher: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ResumeProjectsItems extends Struct.ComponentSchema {
  collectionName: 'components_resume_projects_items';
  info: {
    displayName: 'projects-items';
  };
  attributes: {
    description: Schema.Attribute.Text;
    disabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    endDate: Schema.Attribute.String;
    link: Schema.Attribute.Component<'shared.link', false>;
    position: Schema.Attribute.String;
    projectName: Schema.Attribute.String;
    startDate: Schema.Attribute.String;
    summary: Schema.Attribute.Text;
    visible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface ResumeSkillsItems extends Struct.ComponentSchema {
  collectionName: 'components_resume_skills_items';
  info: {
    displayName: 'skills-items';
  };
  attributes: {
    category: Schema.Attribute.Enumeration<['technical', 'learn']> &
      Schema.Attribute.DefaultTo<'technical'>;
    disabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    level: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<1>;
    name: Schema.Attribute.String;
    ratio: Schema.Attribute.BigInteger & Schema.Attribute.DefaultTo<'0'>;
    visible: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface ResumeVolunteerItems extends Struct.ComponentSchema {
  collectionName: 'components_resume_volunteer_items';
  info: {
    displayName: 'volunteer-items';
  };
  attributes: {
    description: Schema.Attribute.Text;
    endDate: Schema.Attribute.String;
    organization: Schema.Attribute.String;
    role: Schema.Attribute.String;
    startDate: Schema.Attribute.String;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
    target: Schema.Attribute.Enumeration<
      ['_blank', '_self', '_parent', '_top']
    >;
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
      'dynamic-zone.section-skills': DynamicZoneSectionSkills;
      'dynamic-zone.section-summary': DynamicZoneSectionSummary;
      'dynamic-zone.section-volunteer': DynamicZoneSectionVolunteer;
      'resume.awards-items': ResumeAwardsItems;
      'resume.basics': ResumeBasics;
      'resume.certifications-items': ResumeCertificationsItems;
      'resume.contacts': ResumeContacts;
      'resume.custom-fields': ResumeCustomFields;
      'resume.custom-items': ResumeCustomItems;
      'resume.education-items': ResumeEducationItems;
      'resume.experience-items': ResumeExperienceItems;
      'resume.interests-items': ResumeInterestsItems;
      'resume.internships-items': ResumeInternshipsItems;
      'resume.portfolio-items': ResumePortfolioItems;
      'resume.projects-items': ResumeProjectsItems;
      'resume.skills-items': ResumeSkillsItems;
      'resume.volunteer-items': ResumeVolunteerItems;
      'shared.link': SharedLink;
    }
  }
}
