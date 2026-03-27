import {
  siReact,
  siNextdotjs,
  siTypescript,
  siTailwindcss,
  siFramer,
  siJavascript,
  siHtml5,
  siFlutter,
  siDart,
  siEthers,
  siWalletconnect,
  siWeb3dotjs,
  siFigma,
  siStorybook,
  siGit,
  siVercel,
  siPostman,
  siCircleci,
  siFirebase,
  siNodedotjs,
  siGooglecloud,
} from "simple-icons";

type SimpleIcon = { path: string; title: string };

const ICON_MAP: Record<string, SimpleIcon> = {
  "React.js":           siReact,
  "React Native":       siReact,
  "Next.js":            siNextdotjs,
  "TypeScript":         siTypescript,
  "TailwindCSS":        siTailwindcss,
  "Framer Motion":      siFramer,
  "JavaScript (ES6+)":  siJavascript,
  "HTML5 / CSS3":       siHtml5,
  "Flutter":            siFlutter,
  "Dart":               siDart,
  "Ethers.js":          siEthers,
  "WalletConnect":      siWalletconnect,
  "Web3.js":            siWeb3dotjs,
  "Figma":              siFigma,
  "Storybook":          siStorybook,
  "Git / GitHub":       siGit,
  "Vercel":             siVercel,
  "Postman":            siPostman,
  "Circle-CI":          siCircleci,
  "Firebase":           siFirebase,
  "Node.js":            siNodedotjs,
  "Cloud Functions":    siFirebase,
  "REST APIs":          siNodedotjs,
};

interface Props {
  name: string;
  color: string;
  size?: number;
}

export function TechIcon({ name, color, size = 16 }: Props) {
  const icon = ICON_MAP[name];

  if (!icon) {
    // Fallback: colored square with first letter
    return (
      <span
        className="flex items-center justify-center rounded text-[10px] font-bold shrink-0"
        style={{
          width: size,
          height: size,
          background: `${color}20`,
          color,
          border: `1px solid ${color}40`,
        }}
      >
        {name[0]}
      </span>
    );
  }

  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={color}
      aria-label={icon.title}
      className="shrink-0"
    >
      <path d={icon.path} />
    </svg>
  );
}
