"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/animations/variants";

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
}

export function SectionHeader({ label, title, subtitle }: SectionHeaderProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="mb-16"
    >
      <motion.p
        variants={fadeUp}
        className="text-xs font-mono text-cyan-400 tracking-[0.2em] uppercase mb-3"
      >
        {label}
      </motion.p>
      <motion.h2
        variants={fadeUp}
        className="text-3xl sm:text-4xl font-bold text-white mb-4"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p variants={fadeUp} className="text-zinc-500 max-w-xl leading-relaxed">
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
