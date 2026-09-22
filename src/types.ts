export interface PersonalInfo {
  name: string;
  role: string;
  eyebrow: string;
  location: string;
  phone: string;
  email: string;
  github: string;
  linkedin: string;
  shortDescription: string;
  aboutText1: string;
  aboutText2: string;
  aboutText3: string;
}

export interface AboutHighlight {
  id: string;
  title: string;
  description: string;
  iconName: 'Cpu' | 'Database' | 'Sparkles' | 'Code2';
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Project {
  id: string;
  name: string;
  status: 'Completed' | 'In Progress';
  year: string;
  badge?: 'Live' | 'In Progress' | 'Completed';
  technologies: string[];
  description: string;
  capabilities: string[];
  githubUrl: string | null;
  demoUrl: string | null;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  status: string;
  current: boolean;
  focus?: string;
}

export interface CertificationItem {
  provider: string;
  title: string;
  year: string;
  tag: string;
}
