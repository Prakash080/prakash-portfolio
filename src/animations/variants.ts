import { Variants } from "framer-motion";

// ─── Spring preset ────────────────────────────────────────────────────────────
export const spring = { type: "spring", stiffness: 380, damping: 30 } as const;
export const smoothEase = [0.22, 1, 0.36, 1] as const;

// ─── Fade & slide variants ────────────────────────────────────────────────────
export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: smoothEase } },
};

export const fadeDown: Variants = {
  hidden:  { opacity: 0, y: -24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: smoothEase } },
};

export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.45, ease: "easeOut" } },
};

export const slideInLeft: Variants = {
  hidden:  { opacity: 0, x: -36 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: smoothEase } },
};

export const slideInRight: Variants = {
  hidden:  { opacity: 0, x: 36 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: smoothEase } },
};

// ─── Scale variants ───────────────────────────────────────────────────────────
export const scaleIn: Variants = {
  hidden:  { opacity: 0, scale: 0.93 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: smoothEase } },
};

export const scaleInSpring: Variants = {
  hidden:  { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 24 } },
};

// ─── Text reveal (clips from below) ──────────────────────────────────────────
export const textReveal: Variants = {
  hidden:  { opacity: 0, y: "100%" },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: smoothEase } },
};

// ─── Stagger containers ───────────────────────────────────────────────────────
export const staggerContainer: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

export const staggerFast: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.045 } },
};

export const staggerSlow: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

// ─── Hover helpers (used with whileHover / whileTap directly) ─────────────────
export const hoverLift = {
  whileHover: { y: -3, transition: { duration: 0.2, ease: "easeOut" } },
  whileTap:   { scale: 0.97 },
};

export const hoverGlow = {
  whileHover: { boxShadow: "0 0 24px rgba(110, 231, 247, 0.18)" },
};
