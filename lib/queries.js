export const SKILLS_QUERY = `
  *[_type == "skillCategory"] | order(order asc) {
    _id,
    title,
    "skills": skills[]->{
      _id,
      name,
      proficiency
    }
  }
`;

export const PROJECTS_QUERY = `
  *[_type == "project"] | order(order asc) {
    _id,
    title,
    description,
    techStack,
    githubUrl,
    liveUrl,
    image,
    order
  }
`;

export const EXPERIENCE_QUERY = `
  *[_type == "experience"] | order(startDate desc) {
    _id,
    company,
    role,
    duration,
    responsibilities,
    startDate,
    endDate
  }
`;

export const CONTACT_INFO_QUERY = `
  *[_type == "contactInfo"][0] {
    _id,
    email,
    phone,
    location,
    linkedin,
    github,
    twitter,
    enableContactForm
  }
`;
