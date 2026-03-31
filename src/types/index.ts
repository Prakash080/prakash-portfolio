export interface ProjectMetadata {
  role: string;
  platform: string;
  status: string;
  extra?: string; // e.g. "Regions: Singapore, USA, Cambodia" or "Market: Japan"
}

export interface Project {
  id: string;
  title: string;
  category: string;
  summary: string;
  techStack: string[];
  featured: boolean;
  status: "live" | "private" | "in-progress";
  gradient: string;
  icon: string; // lucide icon name or emoji fallback
  tags: string[];
  liveUrl?: string;
  // Modal content
  metadata: ProjectMetadata;
  whatItIs: string;
  whatIBuilt: string;
  keyWork: string[];
  engineeringHighlights: string[];
  impact: string;
  ctaLabel: string;
  ctaType: "link" | "label"; // "link" = opens liveUrl, "label" = display-only text
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
