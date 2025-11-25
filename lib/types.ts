export interface Project {
  id: string;
  title: string;
  category: 'Réseau' | 'DevOps' | 'Cybersécurité' | 'Web/App';
  status: 'Terminé' | 'En cours';
  description: string;
  fullDescription?: string;
  technologies: string[];
  thumbnail: string;
  images?: string[];
  githubUrl?: string;
  demoUrl?: string;
  highlights?: string[];
  context?: string;
  challenges?: string;
  architecture?: string;
  outcomes?: string[];
  tags?: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  period: string;
  details: string;
}

export interface SkillData {
  subject: string;
  A: number;
  fullMark: number;
}

export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  medium: string;
  bio: string;
}

export type Category = 'Tous' | 'Réseau' | 'DevOps' | 'Cybersécurité' | 'Web/App';
