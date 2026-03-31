import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "tada-rider",
    title: "TADA Rider App",
    category: "Ride-Hailing Platform",
    summary:
      "Built and shipped core rider experiences for a production ride-hailing platform used across Singapore, USA, and Cambodia.",
    featured: true,
    status: "live",
    gradient: "from-cyan-500/20 to-blue-600/20",
    icon: "🚗",
    tags: ["React Native", "Production", "Mobility", "Multi-region"],
    liveUrl: "https://play.google.com/store/apps/details?id=io.mvlchain.tada&hl=en_IN",
    metadata: {
      role: "Front-end Engineer",
      platform: "Mobile",
      status: "Live",
      extra: "Regions: Singapore, USA, Cambodia",
    },
    whatItIs:
      "A production ride-hailing application built for real users across multiple regions, enabling booking, ride tracking, payments, and real-time trip experiences at scale.",
    whatIBuilt:
      "Worked on booking-critical user flows including ride request UX, live ride tracking, region-specific configurations, and payment-related interactions across shared product surfaces.",
    keyWork: [
      "Built rider-side booking and trip lifecycle interfaces",
      "Worked on ride request, payment, and live tracking flows",
      "Supported region-based feature behavior and product rollout needs",
      "Contributed to reusable UI and shared state patterns",
    ],
    engineeringHighlights: [
      "Built scalable React Native UI flows used across multiple markets",
      "Worked with shared state and reusable UI patterns using Zustand",
      "Improved responsiveness and interaction quality across booking-critical screens",
      "Helped support multi-region production requirements",
    ],
    impact:
      "Shipped production-ready rider experiences for a live mobility product serving active users across Singapore, USA, and Cambodia.",
    techStack: ["React Native", "TailwindCSS", "Zustand", "REST APIs", "Firebase"],
    ctaLabel: "View on Play Store",
    ctaType: "link",
  },
  {
    id: "tada-driver",
    title: "TADA Driver App",
    category: "Driver Operations Platform",
    summary:
      "Built high-usage driver workflows for trip management, earnings visibility, and real-time mobility operations.",
    featured: true,
    status: "live",
    gradient: "from-sky-500/20 to-cyan-600/20",
    icon: "🚕",
    tags: ["React Native", "Driver UX", "Real-time", "Production"],
    liveUrl: "https://play.google.com/store/apps/details?id=io.mvlchain.tada.driver&hl=en_IN",
    metadata: {
      role: "Front-end Engineer",
      platform: "Mobile",
      status: "Live",
      extra: "Regions: Singapore, USA, Cambodia",
    },
    whatItIs:
      "A driver-facing production application that helps drivers accept bookings, manage trips, track earnings, and operate efficiently across supported regions.",
    whatIBuilt:
      "Contributed to driver-side product flows including trip lifecycle interactions, earnings-related screens, map-based experiences, and operational UI built for real-time usage.",
    keyWork: [
      "Built trip lifecycle and driver activity interfaces",
      "Worked on earnings and operational visibility screens",
      "Supported real-time map-based and booking-related flows",
      "Maintained consistent multi-region experience from a shared codebase",
    ],
    engineeringHighlights: [
      "Developed UI for driver workflows with speed and clarity in mind",
      "Built real-time interaction surfaces for trip and activity management",
      "Helped maintain a consistent cross-region product experience",
      "Focused on usability for high-frequency product flows",
    ],
    impact:
      "Delivered reliable production interfaces supporting day-to-day driver operations across active ride-hailing markets.",
    techStack: ["React Native", "TailwindCSS", "Zustand", "REST APIs", "Firebase"],
    ctaLabel: "View on Play Store",
    ctaType: "link",
  },
  {
    id: "musubi",
    title: "Musubi",
    category: "Fintech + Web3 Platform",
    summary:
      "Built frontend experiences for a Japan-focused fintech and Web3 platform involving lending, digital assets, and token-enabled user journeys.",
    featured: true,
    status: "live",
    gradient: "from-indigo-500/20 to-purple-600/20",
    icon: "🔗",
    tags: ["Next.js", "Web3", "Fintech", "Japan"],
    liveUrl: "https://musubi.fi/",
    metadata: {
      role: "Front-end Engineer",
      platform: "Web",
      status: "Live",
      extra: "Market: Japan",
    },
    whatItIs:
      "A Japan-focused fintech and Web3 product combining modern financial workflows with tokenized experiences, digital asset interactions, and secure user onboarding.",
    whatIBuilt:
      "Built and refined frontend experiences for lending-related workflows, digital asset views, token/NFT interactions, and responsive onboarding flows designed for trust and usability.",
    keyWork: [
      "Built lending and onboarding user flows",
      "Worked on token-aware and wallet-connected UI interactions",
      "Developed responsive interfaces for finance-oriented workflows",
      "Improved trust-focused UX for digital asset users",
    ],
    engineeringHighlights: [
      "Developed product UI using React / Next.js for complex finance-oriented flows",
      "Worked on wallet-connected and token-aware user interfaces",
      "Built responsive, structured UI systems for multi-step workflows",
      "Focused on usability, accessibility, and clean interaction design",
    ],
    impact:
      "Helped shape a production-ready fintech + Web3 experience tailored for the Japanese market with strong focus on usability and interface reliability.",
    techStack: ["Next.js", "React", "TypeScript", "Ethers.js", "TailwindCSS", "Zustand"],
    ctaLabel: "View Live",
    ctaType: "link",
  },
  {
    id: "tada-mini-depin",
    title: "TADA Mini / DePIN",
    category: "DePIN / Lightweight Product UI",
    summary:
      "Explored lightweight product interfaces and decentralized infrastructure-related user flows for modular, mobile-first experiences.",
    featured: true,
    status: "in-progress",
    gradient: "from-emerald-500/20 to-teal-600/20",
    icon: "⚡",
    tags: ["DePIN", "Web3", "Modular UI", "Experimental"],
    metadata: {
      role: "Front-end Engineer",
      platform: "Web / Mobile-first",
      status: "In Progress",
      extra: "Internal / Experimental",
    },
    whatItIs:
      "A lightweight product surface built around modular interaction flows, optimized for emerging decentralized infrastructure and mobile-first use cases.",
    whatIBuilt:
      "Worked on compact, responsive frontend interfaces for simplified user interactions, modular product states, and scalable UI behavior across lightweight app surfaces.",
    keyWork: [
      "Built mobile-first modular product interfaces",
      "Worked on lightweight state-driven user flows",
      "Designed reusable UI patterns for evolving product requirements",
      "Focused on fast-loading and flexible frontend architecture",
    ],
    engineeringHighlights: [
      "Built reusable frontend patterns for small-footprint product experiences",
      "Focused on performance, responsiveness, and component flexibility",
      "Structured UI for fast iteration across changing requirements",
      "Designed for extensibility and mobile usability",
    ],
    impact:
      "Contributed to an adaptable frontend foundation for emerging decentralized product experiences.",
    techStack: ["Next.js", "React", "TailwindCSS", "Zustand", "TypeScript"],
    ctaLabel: "Internal Product",
    ctaType: "label",
  },
  {
    id: "validator-dashboards",
    title: "Validator Dashboards",
    category: "Web3 Infrastructure",
    summary:
      "Built dashboards for blockchain node and validator operations across multi-chain ecosystems like Polygon, Arbitrum, and Optimism.",
    featured: true,
    status: "live",
    gradient: "from-violet-500/20 to-purple-600/20",
    icon: "🛡️",
    tags: ["Web3 Infra", "Multi-chain", "Dashboards", "Staking"],
    metadata: {
      role: "Front-end Engineer",
      platform: "Web",
      status: "Production",
      extra: "Ecosystems: Polygon, Arbitrum, Optimism",
    },
    whatItIs:
      "A suite of dashboards built for blockchain infrastructure products, enabling users to monitor validators, staking systems, and chain operations across multiple ecosystems.",
    whatIBuilt:
      "Built monitoring-focused UI for validator health, staking workflows, node operations, and multi-chain product experiences used by infrastructure users.",
    keyWork: [
      "Built monitoring dashboards for validator and node visibility",
      "Worked on staking and infrastructure-related product flows",
      "Handled complex UI states across technical operational screens",
      "Improved readability and usability for data-heavy interfaces",
    ],
    engineeringHighlights: [
      "Built data-heavy dashboards with clean, readable UX",
      "Worked on wallet-connected and blockchain-aware product interfaces",
      "Handled complex product states for infrastructure workflows",
      "Improved usability for technical users through structured UI systems",
    ],
    impact:
      "Shipped production-facing Web3 infrastructure interfaces used across ecosystems such as Polygon, Arbitrum, and Optimism.",
    techStack: ["React", "Next.js", "TailwindCSS", "RainbowKit", "Wallet Integrations", "REST APIs"],
    ctaLabel: "Available on request",
    ctaType: "label",
  },
];

export const otherWork = [
  {
    id: "zeeve-mobile",
    title: "Zeeve Mobile App",
    category: "Blockchain Infrastructure",
    description:
      "Flutter-based mobile app for blockchain node monitoring, health metrics, and operational visibility.",
    tags: ["Flutter", "Mobile", "Blockchain", "Monitoring"],
    gradient: "from-blue-500/20 to-cyan-600/20",
    icon: "📱",
  },
  {
    id: "multi-chain-wallet",
    title: "Multi-Chain Wallet App",
    category: "Web3 Wallet",
    description:
      "Full-featured Web3 wallet interface with token management, staking flows, governance participation, and multi-chain support.",
    tags: ["Wallet", "DeFi", "Multi-chain", "Web3"],
    gradient: "from-orange-500/20 to-amber-600/20",
    icon: "💎",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
