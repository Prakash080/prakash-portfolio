"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Download, Sparkles, MapPin, Zap, Globe } from "lucide-react";
import { staggerContainer, fadeUp, textReveal } from "@/animations/variants";

const SKILLS = ["React", "Next.js", "React Native", "Flutter", "Web3", "UI Systems", "TypeScript", "TailwindCSS"];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function SpotlightCursor() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 80, damping: 20 });
  const springY = useSpring(y, { stiffness: 80, damping: 20 });

  useEffect(() => {
    const move = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY); };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      className="pointer-events-none fixed z-0 w-[500px] h-[500px] rounded-full opacity-[0.07]"
      style={{
        left: springX,
        top: springY,
        translateX: "-50%",
        translateY: "-50%",
        background: "radial-gradient(circle, #6ee7f7 0%, transparent 70%)",
      }}
    />
  );
}

function AnimatedGrid() {
  return (
    <div className="absolute inset-0 grid-overlay opacity-100 pointer-events-none" />
  );
}

function FloatingStatusCard({
  icon,
  label,
  value,
  delay,
  className,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  delay: number;
  className?: string;
}) {
  return (
    <motion.div
      className={`glass rounded-xl px-4 py-3 flex items-center gap-3 border border-white/5 ${className}`}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -2, borderColor: "rgba(110, 231, 247, 0.2)" }}
    >
      <div className="text-cyan-400 shrink-0">{icon}</div>
      <div>
        <p className="text-xs text-zinc-500">{label}</p>
        <p className="text-sm font-medium text-white">{value}</p>
      </div>
    </motion.div>
  );
}

function ProfileImage() {
  return (
    <motion.div
      className="relative flex items-center justify-center"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute inset-0 bg-indigo-500/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative">
        {/* Animated outer glow ring */}
        <motion.div
          className="absolute -inset-0.75 rounded-3xl"
          animate={{
            boxShadow: [
              "0 0 0px rgba(110,231,247,0)",
              "0 0 40px rgba(110,231,247,0.2)",
              "0 0 0px rgba(110,231,247,0)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Animated border ring */}
        <motion.div
          className="absolute -inset-px rounded-3xl border border-cyan-500/40 pointer-events-none"
          animate={{ borderColor: ["rgba(110,231,247,0.2)", "rgba(110,231,247,0.6)", "rgba(110,231,247,0.2)"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Image */}
        <div className="relative w-70 h-90 sm:w-85 sm:h-105 lg:w-95 lg:h-120 rounded-3xl overflow-hidden border border-white/8">
          <Image
            src="/profile.png"
            alt="Prakash H"
            fill
            className="object-cover object-top"
            priority
          />
          {/* Bottom fade */}
          <div className="absolute bottom-0 inset-x-0 h-28 bg-linear-to-t from-[#080a0f] via-[#080a0f]/50 to-transparent pointer-events-none" />
        </div>

        {/* Floating badge — top right, inside image */}
        <motion.div
          className="absolute top-3 right-3 flex items-center gap-2 px-3 py-1.5 rounded-lg border border-green-500/25 shadow-md shadow-black/30"
          style={{ background: "rgba(8, 10, 15, 0.1)", backdropFilter: "blur(10px)" }}
          initial={{ opacity: 0, x: 12, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 1.0, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -2 }}
        >
          <div className="relative shrink-0">
            <span className="block w-2 h-2 rounded-full bg-green-400" />
            <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-60" />
          </div>
          <span className="text-xs font-semibold text-white tracking-wide">Open to work</span>
        </motion.div>

        {/* Floating badge — bottom left, inside image */}
        <motion.div
          className="absolute bottom-3 left-3 px-4 py-3 rounded-xl border border-cyan-500/25 shadow-lg shadow-black/40"
          style={{ background: "rgba(8, 10, 15, 0.3)", backdropFilter: "blur(12px)" }}
          initial={{ opacity: 0, x: -12, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -2 }}
        >
          <p className="text-[10px] uppercase tracking-widest text-white mb-1">Experience</p>
          <p className="text-lg font-bold text-white leading-none">5+ <span className="text-cyan-400">Years</span></p>
          <p className="text-[10px] text-white mt-0.5">Frontend Engineering</p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function HeroSection() {
  const [skillIndex, setSkillIndex] = useState(0);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setSkillIndex((i) => (i + 1) % SKILLS.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      <SpotlightCursor />
      <AnimatedGrid />

      {/* Ambient glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-8"
          >
            {/* Status badge */}
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-green-500/20 text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400">Available for opportunities</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-zinc-600">
                <MapPin size={11} />
                Bengaluru, India
              </div>
            </motion.div>

            {/* Main headline */}
            <div className="overflow-hidden">
              <motion.h1
                className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-none"
                variants={textReveal}
              >
                <span className="gradient-text-white">Prakash</span>
                <span className="text-glow"> H</span>
              </motion.h1>
            </div>

            {/* Subtitle */}
            <motion.div variants={fadeUp}>
              <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed font-light">
                Frontend Engineer building{" "}
                <span className="text-white font-medium">high-performance</span> web &amp; mobile
                products — from{" "}
                <span className="text-cyan-400">ride-hailing platforms</span> to{" "}
                <span className="text-indigo-400">Web3 ecosystems</span>.
              </p>
            </motion.div>

            {/* Animated skill rotator */}
            <motion.div variants={fadeUp} className="flex items-center gap-3 flex-wrap">
              <span className="text-zinc-600 text-sm">Currently working with</span>
              <div className="relative overflow-hidden h-7 w-32">
                <motion.span
                  key={skillIndex}
                  className="absolute inset-0 flex items-center text-sm font-mono font-medium text-cyan-400"
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  {SKILLS[skillIndex]}
                </motion.span>
              </div>
            </motion.div>

            {/* Skill tags */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
              {SKILLS.map((skill, i) => (
                <motion.span
                  key={skill}
                  className="tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.06, duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <button
                onClick={() => scrollToSection("projects")}
                className="group flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-500 text-black font-semibold text-sm hover:bg-cyan-400 transition-all hover:shadow-lg hover:shadow-cyan-500/25"
              >
                View Projects
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="flex items-center gap-2 px-5 py-3 rounded-xl glass border border-white/10 text-sm font-medium text-zinc-300 hover:text-white hover:border-white/20 transition-all"
              >
                <Sparkles size={14} />
                Explore Experience
              </button>
              <a
                href="/Prakash_H_Resume_2026.pdf"
                download
                className="flex items-center gap-2 px-5 py-3 rounded-xl glass border border-white/10 text-sm font-medium text-zinc-300 hover:text-white hover:border-white/20 transition-all"
              >
                <Download size={14} />
                Resume
              </a>
            </motion.div>

            {/* Floating status cards */}
            <div className="flex flex-wrap gap-3">
              <FloatingStatusCard
                icon={<Zap size={16} />}
                label="Currently building"
                value="@ TADA Mobility"
                delay={1.0}
              />
              <FloatingStatusCard
                icon={<Globe size={16} />}
                label="Products shipped"
                value="Global scale"
                delay={1.1}
              />
            </div>
          </motion.div>

          {/* Right — profile image */}
          <div className="flex justify-center lg:justify-end order-first lg:order-last">
            <ProfileImage />
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <span className="text-xs text-zinc-600 font-mono tracking-widest uppercase">scroll</span>
        <motion.div
          className="w-[1px] h-10 bg-linear-to-b from-zinc-600 to-transparent"
          animate={{ scaleY: [1, 0.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}
