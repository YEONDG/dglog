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
  color: 'blue' | 'purple' | 'green';
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

export interface NotionPost {
  id: string;
  properties: {
    제목: {
      title: Array<{
        plain_text: string;
      }>;
    };
    태그: {
      multi_select: NotionTag[];
    };
    생성일: {
      created_time: string;
    };
  };
}
