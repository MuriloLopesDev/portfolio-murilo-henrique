export interface ProjectGalleryItem {
  screenTitle: string;
  description: string;
}

export interface Project {
  id: string;
  name: string;
  category: string;
  shortDescription: string;
  context: string;
  problemSolved: string[];
  participation: string;
  mainFeatures: string[];
  technologies: string[];
  technicalChallenges: string[];
  result: string;
  status: string;
  gallery: ProjectGalleryItem[];
  demoLink?: string;
  repoLink?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  isCurrent?: boolean;
  responsibilities: string[];
  technologies: string[];
}

export interface TechCategory {
  title: string;
  description: string;
  items: {
    name: string;
    icon?: string;
  }[];
}

export interface Differentiator {
  title: string;
  description: string;
  iconName: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  experienceYears: string;
  experienceYearsShort: string;
  location: string;
  locationShort: string;
  availability: string;
  bio: string;
  heroSubtitle: string;
  heroDescription: string;
  linkedin: string;
  linkedinLabel: string;
  github: string;
  githubLabel: string;
  email: string;
}
