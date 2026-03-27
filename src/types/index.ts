export interface Project {
  id: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  techStack: string[];
  contribution: string;
  outcome: string;
  featured: boolean;
  status: "live" | "private" | "in-progress";
  gradient: string;
  icon: string;
  tags: string[];
  liveUrl?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: "full-time" | "remote" | "internship";
  current: boolean;
  summary: string;
  bullets: string[];
  techStack: string[];
  projects: string[];
  color: string;
}

export interface TechItem {
  name: string;
  category: "frontend" | "mobile" | "web3" | "state" | "tooling" | "backend";
  level: "expert" | "advanced" | "proficient";
  icon?: string;
  color: string;
}

export type SectionId =
  | "hero"
  | "experience"
  | "projects"
  | "stack"
  | "about"
  | "contact";
