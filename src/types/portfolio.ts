export interface Project {
  id: string;
  title: string;
  category: 'ai' | 'fullstack' | 'ml';
  categoryLabel: string;
  tagline: string;
  description: string;
  bullets: string[];
  techStack: string[];
  date: string;
  simulationType: 'ai-summarizer' | 'wifi-sensing' | 'churn-analysis';
  highlights: { label: string; value: string }[];
  architecture: {
    frontend: string;
    backend: string;
    model: string;
    pipeline: string[];
  };
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  type: string;
  location: string;
  bullets: string[];
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
  description: string;
  coursework: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  credentialBadge: string;
  skillsCovered: string[];
  verificationNote: string;
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: number; note: string }[];
}
