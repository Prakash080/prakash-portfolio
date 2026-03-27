import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "tada",
    role: "Frontend Engineer",
    company: "TADA Mobility",
    period: "Aug 2025 – Present",
    location: "Bengaluru, India",
    type: "full-time",
    current: true,
    summary:
      "Building scalable ride-hailing platforms serving real users across Singapore, USA, and Cambodia.",
    bullets: [
      "Working on production ride-hailing platforms across Singapore, USA, and Cambodia",
      "Developed and maintained TADA Rider & Driver apps using React Native for cross-platform performance",
      "Built shared UI architecture using TailwindCSS + Zustand for consistent design and state management",
      "Contributed to Next.js and React-based consumer-facing platforms, improving performance and maintainability",
      "Optimized critical user flows: booking, ride tracking, and payments — enhancing UX at scale",
      "Collaborated with product and backend teams delivering high-impact features in fast-paced release cycles",
    ],
    techStack: ["React Native", "Next.js", "React", "TailwindCSS", "Zustand", "TypeScript"],
    projects: ["TADA Rider & Driver Apps", "Musubi", "TADA Mini / DePIN"],
    color: "#6ee7f7",
  },
  {
    id: "zeeve",
    role: "Frontend & Flutter Developer",
    company: "Zeeve",
    period: "Jun 2021 – Jul 2025",
    location: "Bengaluru, India (Remote)",
    type: "remote",
    current: false,
    summary:
      "Built Web3 dashboards, staking platforms, and node infrastructure UIs for blockchain developers worldwide.",
    bullets: [
      "Built Web3 dashboards, staking platforms, and node sale interfaces using React, Next.js, and TypeScript",
      "Integrated MetaMask, Coinbase, and WalletConnect — enabling secure transactions and staking flows",
      "Developed Flutter mobile apps for blockchain infrastructure monitoring (App Store & Play Store)",
      "Improved conversion rates by ~20% through UX optimizations on core staking flows",
      "Created reusable component libraries with Storybook, improving development speed and consistency",
      "Led UI refactoring efforts to enhance performance and maintainability across products",
    ],
    techStack: ["React", "Next.js", "TypeScript", "Flutter", "Dart", "Ethers.js", "TailwindCSS", "Storybook"],
    projects: ["Validator Dashboards", "Zeeve Mobile App", "Multi-Chain Wallet App", "Node Sale UI"],
    color: "#818cf8",
  },
  {
    id: "vidyutthantra",
    role: "Mobile Developer Intern",
    company: "Vidyutthantra OPC Pvt Ltd",
    period: "2020 – 2021",
    location: "Bengaluru, India",
    type: "internship",
    current: false,
    summary:
      "Cross-platform mobile development with Flutter, building reusable components and Firebase integrations.",
    bullets: [
      "Built cross-platform mobile applications using Flutter",
      "Implemented reusable UI components and improved UI responsiveness across the app",
      "Worked with Firebase for backend integration, analytics, and push notifications",
    ],
    techStack: ["Flutter", "Dart", "Firebase"],
    projects: [],
    color: "#34d399",
  },
];
