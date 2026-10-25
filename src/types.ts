export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Machine Learning' | 'Data Analytics & BI';
  summary: string;
  problemStatement: string;
  technologies: string[];
  contributions: string[];
  keyHighlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  previewType: 'ecommerce-bi' | 'road-accident' | 'food-delivery';
}

export interface SkillItem {
  name: string;
  category: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  icon: string;
  description: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  division?: string;
  period: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  stream?: string;
  period: string;
  location?: string;
  score: string;
  scoreType: string;
  status: string;
  coursework?: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year?: string;
  category: string;
  skills: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  issuer: string;
  description: string;
}

export interface PersonalInfo {
  name: string;
  preferredName: string;
  headline: string;
  institution: string;
  degree: string;
  specialization: string;
  cgpa: string;
  cgpaMax: string;
  email: string;
  linkedin: string;
  github: string;
  location: string;
  status: string;
  bio: string[];
  resumeDownloadUrl: string;
}
