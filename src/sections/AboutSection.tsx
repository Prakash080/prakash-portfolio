"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/common/SectionHeader";
import { staggerContainer, fadeUp } from "@/animations/variants";
import { Layers, Zap, MonitorSmartphone, BrainCircuit, GraduationCap, Trophy, BookOpen } from "lucide-react";

const PRINCIPLES = [
  {
    icon: BrainCircuit,
    title: "Product Thinking",
    body: "Building interfaces that solve user problems, not just look polished.",
    color: "#6ee7f7",
  },
  {
    icon: Zap,
    title: "Performance First",
    body: "Optimizing frontend experiences for speed, responsiveness, and scale.",
    color: "#818cf8",
  },
  {
    icon: Layers,
    title: "Design-Led Engineering",
    body: "Turning product and design intent into clean, maintainable UI systems.",
    color: "#34d399",
  },
  {
    icon: MonitorSmartphone,
    title: "Cross-Platform Delivery",
    body: "Shipping consistent experiences across web and mobile products.",
    color: "#f59e0b",
  },
];

const LEADERSHIP = [
  "Mentored junior developers through code reviews, debugging support, and implementation guidance",
  "Took ownership of key frontend features from planning to delivery",
  "Improved onboarding workflows and internal documentation for faster team ramp-up",
  "Drove UI/UX improvements across products with a strong focus on consistency and usability",
  "Collaborated closely with design and backend teams to ship reliable product experiences"
];

const LEARNING = [
  "Frontend product experiences at TADA Mobility across web and mobile",
  "UI experiments, motion systems, and polished interaction patterns with Next.js",
  "Stronger TypeScript architecture and scalable frontend workflows",
  "Personal portfolio systems that blend clean engineering with premium UX"
];

export function AboutSection() {
  return (
    <section id="about" className="section-padding max-w-7xl mx-auto">
      <SectionHeader
        label="// 04 — philosophy"
        title="How I Think About Product & UI"
      />

      {/* Row 1: Bio + Principles */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch mb-16">
        {/* Left — copy */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-6 h-full"
        >
          <motion.p variants={fadeUp} className="text-zinc-300 text-lg leading-relaxed">
            I&apos;m a <span className="text-white font-semibold">Frontend Engineer</span> focused
            on building <span className="text-cyan-400">clean, scalable, and user-centric</span>{" "}
            digital products.
          </motion.p>

          <motion.p variants={fadeUp} className="text-zinc-500 leading-relaxed">
            Over the last <span className="text-white">5+ years</span>, I&apos;ve worked across{" "}
            <span className="text-white">mobility, Web3, and platform-based products</span> -
            building web and mobile experiences using React, Next.js, React Native, Flutter,
            TailwindCSS, and Zustand.
          </motion.p>

          <motion.p variants={fadeUp} className="text-zinc-500 leading-relaxed">
            I enjoy creating interfaces that balance{" "}
            <span className="text-indigo-400">product clarity, performance, and thoughtful user
            experience</span> - with systems that are maintainable as products grow.
          </motion.p>

          {/* Quick facts */}
          <motion.div variants={fadeUp} className="grid grid-cols-2 gap-3 mt-auto">
            {[
              { label: "Based in",       value: "Bengaluru, India"     },
              { label: "Current role",   value: "TADA Mobility"        },
              { label: "Specialization", value: "Next, React & React Native" },
              { label: "Education",      value: "B.Sc in CS"           },
            ].map((fact) => (
              <div key={fact.label} className="glass rounded-xl p-4 border border-white/5">
                <p className="text-xs text-zinc-600 mb-1">{fact.label}</p>
                <p className="text-sm font-medium text-white">{fact.value}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — principles */}
        <motion.div
          className="flex flex-col gap-4 h-full justify-between"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {PRINCIPLES.map((p) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              className="group glass rounded-2xl p-5 border border-white/5 hover:border-white/10 flex items-start gap-4 transition-all cursor-default"
              whileHover={{ x: 4 }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: `${p.color}15`, border: `1px solid ${p.color}30` }}
              >
                <p.icon size={18} style={{ color: p.color }} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white mb-1">{p.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{p.body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Row 2: Education + Leadership + Continuous Learning */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-5"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {/* Education */}
        <motion.div
          variants={fadeUp}
          className="glass rounded-2xl border border-white/5 p-6 flex flex-col gap-4 hover:border-white/10 transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
              <GraduationCap size={16} className="text-cyan-400" />
            </div>
            <p className="text-sm font-semibold text-white">Education</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium text-zinc-200">
              B.Sc in Electronics, Mathematics &amp; Computer Science
            </p>
            <p className="text-xs text-zinc-300">
              Seshadripuram First Grade College
            </p>
            <p className="text-xs text-zinc-400">Bengaluru University · 2016 – 2019</p>
            <ul className="flex flex-col gap-2">
              <li className="flex items-start gap-2.5 text-xs text-zinc-400 leading-relaxed">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-cyan-400 shrink-0" />
                Built a strong foundation in analytical thinking, systems, and problem-solving - which continues to shape my frontend and product engineering approach.
              </li>
          </ul>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="glass rounded-2xl border border-white/5 p-6 flex flex-col gap-4 hover:border-white/10 transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
              <Trophy size={16} className="text-indigo-400" />
            </div>
            <p className="text-sm font-semibold text-white">Leadership &amp; Ownership</p>
          </div>
          <ul className="flex flex-col gap-2">
            {LEADERSHIP.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-xs text-zinc-400 leading-relaxed">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-indigo-400 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Continuous Learning */}
        <motion.div
          variants={fadeUp}
          className="glass rounded-2xl border border-white/5 p-6 flex flex-col gap-4 hover:border-white/10 transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
              <BookOpen size={16} className="text-emerald-400" />
            </div>
            <p className="text-sm font-semibold text-white">Currently Building</p>
          </div>
          <ul className="flex flex-col gap-2">
            {LEARNING.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-xs text-zinc-400 leading-relaxed">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-emerald-400 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
