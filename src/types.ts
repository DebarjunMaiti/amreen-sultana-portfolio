export interface PersonalInfo {
  name: string;
  title: string;
  currentCompany: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  yearsOfExperience: number;
  bio: string;
  summary: string;
  avatarUrl: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  location: string;
  type: string;
  domain: string;
  description: string;
  achievements: string[];
  skills: string[];
  featuredMetrics?: string;
}

export interface SkillCategory {
  categoryName: string;
  iconName: string;
  skills: {
    name: string;
    level: number; // 1-100
    experience: string;
    isTopSkill?: boolean;
  }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Voice & Accent' | 'Corporate Training' | 'L&D & Behavioural' | 'Communications';
  description: string;
  architectureDetails: string[];
  impactMetrics: string[];
  technologies: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  isFeatured?: boolean;
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  period: string;
  location: string;
  highlights: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
  credentialId?: string;
  badgeColor?: string;
}

export interface PublicationItem {
  title: string;
  journalOrConference: string;
  year: string;
  description: string;
  authors: string[];
  link?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export interface JobMatchResult {
  matchScore: number;
  matchingSkills: string[];
  gapsOrNotes: string[];
  pitchCoverLetter: string;
}
