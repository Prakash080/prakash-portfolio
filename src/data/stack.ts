import { TechItem } from "@/types";

export const techStack: TechItem[] = [
  // Frontend
  { name: "React.js", category: "frontend", color: "#61dafb" },
  { name: "Next.js", category: "frontend", color: "#ffffff" },
  { name: "TypeScript", category: "frontend", color: "#3178c6" },
  { name: "TailwindCSS", category: "frontend", color: "#38bdf8" },
  { name: "ShadCN UI", category: "frontend", color: "#ffffff" },
  { name: "Framer Motion", category: "frontend", color: "#ff0055" },
  { name: "JavaScript (ES6+)", category: "frontend", color: "#f7df1e" },
  { name: "HTML5 / CSS3", category: "frontend", color: "#e34f26" },
  // Mobile
  { name: "React Native", category: "mobile", color: "#61dafb" },
  { name: "Flutter", category: "mobile", color: "#54c5f8" },
  { name: "Dart", category: "mobile", color: "#00b4ab" },
  // Web3
  { name: "Ethers.js", category: "web3", color: "#6340bc" },
  { name: "Wagmi", category: "web3", color: "#8b5cf6" },
  { name: "MetaMask SDK", category: "web3", color: "#f5841f" },
  { name: "Coinbase Wallet", category: "web3", color: "#0052ff" },
  { name: "WalletConnect", category: "web3", color: "#3b99fc" },
  { name: "RainbowKit", category: "web3", color: "#7c3aed" },
  { name: "NFT Systems", category: "web3", color: "#a78bfa" },
  { name: "DeFi / Staking UI", category: "web3", color: "#34d399" },
  // State
  { name: "Zustand", category: "state", color: "#ff8b3e" },
  { name: "RiverPod", category: "state", color: "#54c5f8" },
  { name: "Provider", category: "state", color: "#54c5f8" },
  // Tooling
  { name: "Figma", category: "tooling", color: "#f24e1e" },
  { name: "Storybook", category: "tooling", color: "#ff4785" },
  { name: "Git / GitHub", category: "tooling", color: "#f05032" },
  { name: "Vercel", category: "tooling", color: "#ffffff" },
  { name: "Postman", category: "tooling", color: "#ef5b25" },
  { name: "GitLab", category: "tooling", color: "#fc6d26" },
  { name: "Jira", category: "tooling", color: "#0052cc" },
  { name: "Circle-CI", category: "tooling", color: "#343434" },
  // Backend
  { name: "Firebase", category: "backend", color: "#ffca28" },
  { name: "Node.js", category: "backend", color: "#68a063" },
  { name: "REST APIs", category: "backend", color: "#6ee7f7" },
  { name: "Cloud Functions", category: "backend", color: "#ffca28" },
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
