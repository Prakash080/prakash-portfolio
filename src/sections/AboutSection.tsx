"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/common/SectionHeader";
import { staggerContainer, fadeUp } from "@/animations/variants";
import { Layers, Zap, Users, Code2, GraduationCap, Trophy, BookOpen } from "lucide-react";

const PRINCIPLES = [
  {
    icon: Layers,
    title: "System Thinking",
    body: "I build components like infrastructure — composable, predictable, and easy to reason about at scale.",
    color: "#6ee7f7",
  },
  {
    icon: Zap,
    title: "Performance First",
    body: "Every millisecond matters. I obsess over Core Web Vitals, bundle size, and runtime efficiency.",
    color: "#818cf8",
  },
  {
    icon: Users,
    title: "User-Led Design",
    body: "Great UI is invisible. I prototype fast, validate early, and polish the edges that most engineers skip.",
    color: "#34d399",
  },
  {
    icon: Code2,
    title: "Clean Architecture",
    body: "Code should read like a story. I keep state flat, dependencies minimal, and abstractions honest.",
    color: "#f59e0b",
  },
];

const LEADERSHIP = [
  "Mentored junior developers via code reviews and technical guidance",
  "Improved onboarding process, reducing ramp-up time by ~30%",
  "Drove UI/UX improvements across multiple products",
  "Ensured on-time delivery and high-quality releases in agile teams",
];

const LEARNING = [
  "Active learner — building mini UI challenges using TailwindCSS, Next.js, and animations",
  "Exploring TypeScript patterns and backend workflows with Node.js and Express",
  "Continuously shipping personal projects to sharpen frontend and system-design skills",
];

export function AboutSection() {
  return (
    <section id="about" className="section-padding max-w-7xl mx-auto">
      <SectionHeader
        label="// 04 — philosophy"
        title="How I Think About UI"
      />

      {/* Row 1: Bio + Principles */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
        {/* Left — copy */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <motion.p variants={fadeUp} className="text-zinc-300 text-lg leading-relaxed">
            I&apos;m <span className="text-white font-semibold">Prakash H</span>, a Frontend
            Engineer with 5+ years of experience building{" "}
            <span className="text-cyan-400">scalable, high-performance</span> web and mobile
            products used by real people across the globe.
          </motion.p>

          <motion.p variants={fadeUp} className="text-zinc-500 leading-relaxed">
            I&apos;ve shipped production apps for{" "}
            <span className="text-white">ride-hailing platforms</span> in Singapore, USA, and
            Cambodia; built <span className="text-indigo-400">Web3 dashboards</span> and wallet
            UIs for blockchain infrastructure; and developed{" "}
            <span className="text-white">cross-platform mobile apps</span> with Flutter and React
            Native.
          </motion.p>

          <motion.p variants={fadeUp} className="text-zinc-500 leading-relaxed">
            My approach is product-first — I care about the{" "}
            <span className="text-white">user experience as much as the code quality</span>.
            Whether it&apos;s a loading skeleton or a multi-chain staking flow, every detail
            matters.
          </motion.p>

          {/* Quick facts */}
          <motion.div variants={fadeUp} className="grid grid-cols-2 gap-3">
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
          className="flex flex-col gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {PRINCIPLES.map((p) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              className="group glass rounded-2xl p-5 border border-white/5 hover:border-white/10 flex items-start gap-4 transition-all"
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
            <p className="text-xs text-zinc-500">
              Seshadripuram First Grade College
            </p>
            <p className="text-xs text-zinc-600">Bengaluru University · 2016 – 2019</p>
          </div>
        </motion.div>

        {/* Leadership */}
        <motion.div
          variants={fadeUp}
          className="glass rounded-2xl border border-white/5 p-6 flex flex-col gap-4 hover:border-white/10 transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
              <Trophy size={16} className="text-indigo-400" />
            </div>
            <p className="text-sm font-semibold text-white">Leadership &amp; Impact</p>
          </div>
          <ul className="flex flex-col gap-2">
            {LEADERSHIP.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-xs text-zinc-500 leading-relaxed">
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
            <p className="text-sm font-semibold text-white">Continuous Learning</p>
          </div>
          <ul className="flex flex-col gap-2">
            {LEARNING.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-xs text-zinc-500 leading-relaxed">
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
