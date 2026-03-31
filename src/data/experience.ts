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
      "Building and maintaining production-grade web and mobile applications using React, Next.js, and React Native",
      "Contributing to consumer-facing mobility platforms serving users across Singapore, USA, and Cambodia",
      "Developing shared and reusable UI patterns using TailwindCSS and Zustand for consistent web and mobile experiences",
      "Working on key product workflows across TADA Rider and TADA Driver — booking, ride management, payments, and user interaction flows",
      "Contributing to Musubi, a Japanese fintech / Web3 platform involving lending, token-related experiences, and NFT-oriented interfaces",
      "Supporting modular frontend development for TADA Mini and DePIN-focused decentralized infrastructure interfaces",
      "Collaborating with product, backend, and design teams to deliver scalable, high-quality frontend features",
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
      "Built Web3 dashboards, validator platforms, and node sale interfaces using React, Next.js, TypeScript, and TailwindCSS",
      "Integrated wallets including MetaMask, Coinbase Wallet, RainbowKit, and Ethers.js for staking and transaction flows",
      "Developed and shipped Flutter mobile applications for blockchain infrastructure and monitoring use cases (App Store & Play Store)",
      "Improved conversion rates by ~20% through UX optimizations on core staking and node sale flows",
      "Created reusable UI components and internal design systems using Storybook, improving design consistency and development speed",
      "Refactored legacy frontend modules to improve maintainability, usability, and performance across products",
    ],
    techStack: ["React", "Next.js", "TypeScript", "Flutter", "Dart", "Ethers.js", "RainbowKit", "TailwindCSS", "Storybook"],
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
