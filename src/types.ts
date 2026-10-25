export interface ProjectMetric {
  label: string;
  value: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Machine Learning' | 'Data Analytics & BI' | 'Full-Stack & Web';
  summary: string;
  problemStatement: string;
  technologies: string[];
  contributions: string[];
  resultsAndImpact: string[];
  metrics: ProjectMetric[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  previewType: 'ecommerce-bi' | 'food-delivery' | 'road-accident' | 'portfolio';
}

export interface SkillItem {
  name: string;
  category: string;
  badge?: string;
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
  type: 'Volunteering' | 'Work Experience' | 'Leadership';
  description: string;
  responsibilities: string[];
  highlights: string[];
  badge: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  stream?: string;
  period: string;
  location?: string;
  score: string;
  scoreType: 'CGPA' | 'Percentage';
  scoreMax: string;
  status: 'In Progress' | 'Completed';
  keyCourses?: string[];
  highlights?: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  category: 'Machine Learning' | 'Cloud Computing' | 'Generative AI';
  badgeUrl?: string;
  skills: string[];
  verificationNote?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  issuer: string;
  category: 'Academic' | 'Leadership' | 'Extracurricular';
  description: string;
  metric?: string;
}

export interface PersonalInfo {
  name: string;
  preferredName: string;
  headline: string;
  tagline: string;
  institution: string;
  degree: string;
  specialization: string;
  cgpa: string;
  cgpaMax: string;
  expectedGraduation: string;
  email: string;
  linkedin: string;
  github: string;
  location: string;
  status: string;
  aboutText: string[];
  resumeFileName: string;
  resumeDownloadUrl: string;
}
