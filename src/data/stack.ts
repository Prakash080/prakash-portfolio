import { TechItem } from "@/types";

export const techStack: TechItem[] = [
  // Frontend
  { name: "React.js", category: "frontend", level: "expert", color: "#61dafb" },
  { name: "Next.js", category: "frontend", level: "expert", color: "#ffffff" },
  { name: "TypeScript", category: "frontend", level: "expert", color: "#3178c6" },
  { name: "TailwindCSS", category: "frontend", level: "expert", color: "#38bdf8" },
  { name: "ShadCN UI", category: "frontend", level: "advanced", color: "#ffffff" },
  { name: "Framer Motion", category: "frontend", level: "advanced", color: "#ff0055" },
  { name: "JavaScript (ES6+)", category: "frontend", level: "expert", color: "#f7df1e" },
  { name: "HTML5 / CSS3", category: "frontend", level: "expert", color: "#e34f26" },
  // Mobile
  { name: "React Native", category: "mobile", level: "expert", color: "#61dafb" },
  { name: "Flutter", category: "mobile", level: "advanced", color: "#54c5f8" },
  { name: "Dart", category: "mobile", level: "advanced", color: "#00b4ab" },
  // Web3
  { name: "Ethers.js", category: "web3", level: "advanced", color: "#6340bc" },
  { name: "MetaMask SDK", category: "web3", level: "advanced", color: "#f5841f" },
  { name: "WalletConnect", category: "web3", level: "advanced", color: "#3b99fc" },
  { name: "NFT Systems", category: "web3", level: "proficient", color: "#a78bfa" },
  { name: "DeFi / Staking UI", category: "web3", level: "advanced", color: "#34d399" },
  // State
  { name: "Zustand", category: "state", level: "expert", color: "#ff8b3e" },
  { name: "RiverPod", category: "state", level: "advanced", color: "#54c5f8" },
  { name: "Provider", category: "state", level: "proficient", color: "#54c5f8" },
  // Tooling
  { name: "Figma", category: "tooling", level: "advanced", color: "#f24e1e" },
  { name: "Storybook", category: "tooling", level: "advanced", color: "#ff4785" },
  { name: "Git / GitHub", category: "tooling", level: "expert", color: "#f05032" },
  { name: "Vercel", category: "tooling", level: "advanced", color: "#ffffff" },
  { name: "Postman", category: "tooling", level: "advanced", color: "#ef5b25" },
  { name: "Circle-CI", category: "tooling", level: "proficient", color: "#343434" },
  // Backend
  { name: "Firebase", category: "backend", level: "advanced", color: "#ffca28" },
  { name: "Node.js", category: "backend", level: "proficient", color: "#68a063" },
  { name: "REST APIs", category: "backend", level: "expert", color: "#6ee7f7" },
  { name: "Cloud Functions", category: "backend", level: "proficient", color: "#ffca28" },
];

export const categoryLabels: Record<TechItem["category"], string> = {
  frontend: "Frontend",
  mobile: "Mobile",
  web3: "Web3 & Blockchain",
  state: "State Management",
  tooling: "Design & Tooling",
  backend: "Backend & Cloud",
};

export const categoryOrder: TechItem["category"][] = [
  "frontend",
  "mobile",
  "web3",
  "state",
  "tooling",
  "backend",
];
