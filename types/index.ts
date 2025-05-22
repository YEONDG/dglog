export interface TechStack {
  name: string;
  level: number;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface SkillCategory {
  title: string;
  color: "blue" | "purple" | "green";
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  highlights?: string[];
  github: string;
  demo: string;
}

export interface NotionTag {
  name: string;
  color?: string;
}
