import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "tada-rider-driver",
    title: "TADA Rider & Driver Apps",
    category: "Ride-Hailing Platform",
    summary:
      "Core ride-booking platforms serving real users across Singapore, USA, and Cambodia with real-time tracking and payments.",
    description:
      "Production-grade React Native applications powering the TADA ride-hailing ecosystem across multiple regions. Built for scale, reliability, and seamless cross-platform performance — handling millions of ride events daily.",
    techStack: ["React Native", "Next.js", "TailwindCSS", "Zustand", "REST APIs", "Firebase"],
    contribution:
      "Led development of critical user flows including real-time ride tracking, driver allocation algorithm UI, in-app payment integration, and cross-region configuration.",
    outcome:
      "Serving real-world users across 5+ countries. Reduced booking flow drop-off by optimizing critical path interactions.",
    featured: true,
    status: "live",
    gradient: "from-cyan-500/20 to-blue-600/20",
    icon: "🚗",
    tags: ["React Native", "Production", "Global Scale"],
    liveUrl: "https://play.google.com/store/apps/details?id=io.mvlchain.tada&hl=en_IN",
  },
  {
    id: "tada-driver",
    title: "TADA Driver App",
    category: "Ride-Hailing Platform",
    summary:
      "Driver-side application for TADA's ride-hailing ecosystem — real-time dispatch, navigation, earnings, and trip management.",
    description:
      "The TADA Driver app is the production-grade companion to the rider platform, enabling drivers to manage bookings, track earnings, navigate in real time, and handle multi-region configurations from a single codebase.",
    techStack: ["React Native", "TailwindCSS", "Zustand", "REST APIs", "Firebase"],
    contribution:
      "Built driver allocation UI, earnings dashboard, trip history, and real-time map interaction features — ensuring sub-second response times across all supported regions.",
    outcome:
      "Active in production across Singapore, USA, and Cambodia with thousands of daily active drivers.",
    featured: true,
    status: "live",
    gradient: "from-sky-500/20 to-cyan-600/20",
    icon: "🚕",
    tags: ["React Native", "Driver UX", "Real-time"],
    liveUrl: "https://play.google.com/store/apps/details?id=io.mvlchain.tada.driver&hl=en_IN",
  },
  {
    id: "musubi",
    title: "Musubi",
    category: "Fintech + Web3 Platform",
    summary:
      "A Japan-market fintech platform combining lending workflows, token-based interactions, and NFT integrations.",
    description:
      "A next-generation fintech and Web3 platform designed for the Japanese market. Musubi enables users to engage with digital assets, NFTs, and DeFi lending workflows through an elegant, secure interface built for trust and compliance.",
    techStack: ["Next.js", "React", "TypeScript", "Ethers.js", "TailwindCSS", "Zustand"],
    contribution:
      "Designed and implemented the full UI layer for digital asset flows, NFT display systems, lending dashboards, and user onboarding — ensuring WCAG compliance and mobile-first responsiveness.",
    outcome:
      "Launched to the Japanese market with secure wallet integrations and NFT transaction flows. Zero critical security incidents post-launch.",
    featured: true,
    status: "live",
    gradient: "from-indigo-500/20 to-purple-600/20",
    icon: "🔗",
    tags: ["Web3", "NFTs", "Fintech", "Japan"],
    liveUrl: "https://musubi.fi/",
  },
  {
    id: "tada-mini-depin",
    title: "TADA Mini / DePIN",
    category: "Decentralized Infrastructure UI",
    summary:
      "Lightweight apps and decentralized physical infrastructure (DePIN) interfaces with modular UI architecture.",
    description:
      "TADA Mini is a lightweight ride product alongside DePIN (Decentralized Physical Infrastructure Network) interfaces — a cutting-edge initiative connecting real-world mobility infrastructure to blockchain-based incentive systems.",
    techStack: ["React", "Next.js", "TailwindCSS", "TypeScript", "Web3.js"],
    contribution:
      "Built modular UI components for DePIN interfaces, optimized bundle size for lightweight delivery, and created reusable interaction patterns for decentralized node management.",
    outcome:
      "Delivered modular, performant UI for emerging DePIN use cases — enabling rapid iteration and deployment across new markets.",
    featured: false,
    status: "in-progress",
    gradient: "from-emerald-500/20 to-teal-600/20",
    icon: "⚡",
    tags: ["DePIN", "Web3", "Modular UI"],
  },
  {
    id: "validator-dashboards",
    title: "Validator Dashboards",
    category: "Web3 Infrastructure",
    summary:
      "Multi-chain staking and validator management dashboards across Polygon and Arbitrum with real-time node monitoring.",
    description:
      "Professional-grade Web3 dashboards for blockchain validators and stakers. Providing real-time node health, staking analytics, reward tracking, and governance participation across multiple EVM-compatible chains.",
    techStack: ["React", "Next.js", "TypeScript", "Ethers.js", "MetaMask SDK", "TailwindCSS"],
    contribution:
      "Built multi-chain validator status panels, staking flow UI, delegation widgets, and wallet connection flows supporting MetaMask, Coinbase Wallet, and WalletConnect.",
    outcome:
      "Improved conversion rates ~20% through UX optimizations on core staking flows. Supported 10+ blockchain networks.",
    featured: true,
    status: "live",
    gradient: "from-violet-500/20 to-purple-600/20",
    icon: "🛡️",
    tags: ["Staking", "Multi-chain", "Polygon", "Arbitrum"],
    liveUrl: "https://www.zeeve.io/",
  },
  {
    id: "zeeve-mobile",
    title: "Zeeve Mobile App",
    category: "Blockchain Infrastructure",
    summary:
      "Flutter mobile app for blockchain node monitoring with real-time alerts, health metrics, and infrastructure management.",
    description:
      "A production Flutter application enabling blockchain node operators to monitor their infrastructure on the go — with real-time health dashboards, alert systems, log streaming, and node management controls.",
    techStack: ["Flutter", "Dart", "Firebase", "RiverPod", "REST APIs"],
    contribution:
      "Architected the complete Flutter application from scratch — state management with RiverPod, real-time Firebase listeners, push notification system, and multi-chain node support.",
    outcome:
      "Published to App Store and Play Store. Active users across multiple blockchain networks with <1s latency on status updates.",
    featured: false,
    status: "live",
    gradient: "from-blue-500/20 to-cyan-600/20",
    icon: "📱",
    tags: ["Flutter", "Mobile", "Real-time", "Firebase"],
  },
  {
    id: "multi-chain-wallet",
    title: "Multi-Chain Wallet App",
    category: "Web3 Wallet",
    summary:
      "Full-featured Web3 wallet with token management, staking flows, governance participation, and multi-chain support.",
    description:
      "A comprehensive Web3 wallet interface supporting token management, cross-chain swaps, staking delegation, and governance voting. Designed for both crypto-native and mainstream users with a focus on clarity and security.",
    techStack: ["React", "TypeScript", "Ethers.js", "WalletConnect", "TailwindCSS", "Zustand"],
    contribution:
      "Implemented wallet connection flows, token balance aggregation, staking UI, governance voting interface, and transaction confirmation flows with hardware wallet support.",
    outcome:
      "Supported 5+ EVM chains with seamless wallet switching. Integrated MetaMask, Coinbase Wallet, and WalletConnect protocols.",
    featured: false,
    status: "private",
    gradient: "from-orange-500/20 to-amber-600/20",
    icon: "💎",
    tags: ["Wallet", "DeFi", "Multi-chain", "Web3"],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
