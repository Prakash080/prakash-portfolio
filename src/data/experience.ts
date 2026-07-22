import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "tada",
    role: "Frontend Engineer",
    company: "TADA Mobility",
    period: "Aug 2025 – July 2026",
    location: "Bengaluru, India",
    type: "full-time",
    current: true,
    summary:
      "Frontend Engineer building scalable fintech, Web3, and mobility products using React, Next.js, React Native, and TypeScript. Leading frontend delivery for production applications serving users across Asia and North America.",
    bullets: [
      "Led frontend development for AR Service, a Japan-focused Real World Asset (RWA) platform, owning frontend architecture, implementation, and production release.",
      "Served as the primary frontend owner for AR Service by reviewing pull requests, driving technical decisions, and collaborating closely with backend and product teams.",
      "Developed production features for Musubi, implementing lending workflows, tokenized asset management, NFT ownership, wallet authentication, and marketplace experiences.",
      "Built scalable web and mobile applications using React, Next.js, React Native, and TypeScript across fintech and mobility platforms.",
      "Implemented reusable component architecture using Tailwind CSS, Zustand, and Storybook to improve consistency and accelerate feature development.",
      "Optimized frontend performance through code splitting, lazy loading, memoization, and efficient state management.",
      "Built applications using the Next.js App Router with SSR, SSG, ISR, nested layouts, and Server Components to improve scalability, SEO, and performance.",
      "Delivered customer-facing features supporting ride booking, payments, and engagement workflows across Singapore, Japan, South Korea, Cambodia, and the United States."
    ],
    techStack: [
      "React",
      "Next.js",
      "React Native",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "Storybook",
      "SSR",
      "SSG",
      "ISR"
    ],
    projects: [
      "AR Service",
      "Musubi",
      "TADA Rider",
      "TADA Driver",
      "TADA Mini",
      "DePIN"
    ],
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
      "Developed production-grade Web3 dashboards, validator platforms, mobile applications, and blockchain infrastructure products using React, Next.js, Flutter, and TypeScript.",
    bullets: [
      "Delivered frontend solutions across validator management dashboards, blockchain explorers, node sale platforms, and Web3 administration portals.",
      "Integrated blockchain wallets including MetaMask, Coinbase Wallet, WalletConnect, RainbowKit, Wagmi, and Ethers.js for staking, governance, and transaction workflows.",
      "Developed and shipped Flutter applications supporting blockchain infrastructure monitoring, validator management, and wallet operations.",
      "Built and maintained a reusable Storybook-based design system, improving UI consistency and accelerating frontend development across products.",
      "Modernized legacy React applications by refactoring frontend modules, reducing technical debt, and improving maintainability.",
      "Improved application accessibility through semantic HTML, keyboard navigation, ARIA attributes, and responsive design principles.",
      "Optimized rendering performance using memoization, lazy loading, code splitting, and efficient API integration.",
      "Collaborated with cross-functional Agile teams to deliver production-ready blockchain products."
    ],
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "GraphQL",
      "REST APIs",
      "Flutter",
      "Dart",
      "Tailwind CSS",
      "Storybook",
      "MetaMask",
      "RainbowKit",
      "WalletConnect",
      "Wagmi",
      "Ethers.js"
    ],
    projects: [
      "Validator Dashboard",
      "Node Sale Platform",
      "Blockchain Explorer",
      "Bitcoin Latinum Wallet",
      "Zeeve Mobile App"
    ],
    color: "#818cf8",
  },
  {
    id: "vidyutthantra",
    role: "Developer Intern",
    company: "Vidyutthantra OPC Pvt Ltd",
    period: "Oct 2020 – May 2021",
    location: "Bengaluru, India",
    type: "internship",
    current: false,
    summary:
      "Started my professional journey building cross-platform mobile applications with Flutter and Firebase.",
    bullets: [
      "Developed Flutter application modules for Android and iOS using reusable widget architecture.",
      "Designed reusable UI components to improve consistency and accelerate feature implementation.",
      "Integrated Firebase Authentication, Cloud Firestore, Analytics, and REST APIs for backend communication and user management."
    ],
    techStack: [
      "Flutter",
      "Dart",
      "Firebase",
      "Cloud Firestore",
      "Firebase Authentication",
      "REST APIs"
    ],
    projects: [],
    color: "#34d399",
  }
];
