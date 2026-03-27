"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MapPin, Calendar } from "lucide-react";
import { staggerContainer, fadeUp } from "@/animations/variants";
import { SectionHeader } from "@/components/common/SectionHeader";
import { experiences } from "@/data/experience";
import { cn } from "@/lib/utils";

function ExperienceCard({
  exp,
  isOpen,
  onToggle,
}: {
  exp: (typeof experiences)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div variants={fadeUp} className="md:ml-16">
      {/* Unified card wrapper — corners managed from here */}
      <div
        className={cn(
          "border transition-all duration-300",
          isOpen
            ? "glass-strong border-white/10 rounded-2xl"
            : "glass border-white/5 hover:border-white/10 rounded-2xl"
        )}
      >
        {/* Header — always visible */}
        <button
          onClick={onToggle}
          className="w-full text-left p-6"
          aria-expanded={isOpen}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              {/* Badges */}
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                {exp.current && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/10 border border-green-500/20 text-green-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    Current
                  </span>
                )}
                <span
                  className="text-xs font-mono px-2.5 py-0.5 rounded-full border capitalize"
                  style={{
                    color: exp.color,
                    backgroundColor: `${exp.color}15`,
                    borderColor: `${exp.color}30`,
                  }}
                >
                  {exp.type}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-white leading-tight">{exp.role}</h3>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1.5">
                <span className="text-base font-medium" style={{ color: exp.color }}>
                  {exp.company}
                </span>
                <span className="flex items-center gap-1 text-xs text-zinc-500">
                  <Calendar size={11} />
                  {exp.period}
                </span>
                <span className="flex items-center gap-1 text-xs text-zinc-500">
                  <MapPin size={11} />
                  {exp.location}
                </span>
              </div>

              <p className="text-sm text-zinc-500 mt-2 leading-relaxed">{exp.summary}</p>
            </div>

            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="shrink-0 mt-1"
            >
              <ChevronDown size={18} className="text-zinc-500" />
            </motion.div>
          </div>
        </button>

        {/* Expanded content — shares the same card */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              {/* Divider inside the same card */}
              <div className="h-px mx-6 bg-white/5" />

              <div className="px-6 pt-5 pb-6 flex flex-col gap-5">
                {/* Key Contributions */}
                <div>
                  <p className="text-xs font-mono text-zinc-600 uppercase tracking-[0.15em] mb-3">
                    Key Contributions
                  </p>
                  <ul className="flex flex-col gap-2.5">
                    {exp.bullets.map((bullet, bi) => (
                      <motion.li
                        key={bi}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: bi * 0.04, duration: 0.3 }}
                        className="flex items-start gap-3 text-sm text-zinc-400 leading-relaxed"
                      >
                        <span
                          className="mt-2 w-1 h-1 rounded-full shrink-0"
                          style={{ background: exp.color }}
                        />
                        {bullet}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Tech Used */}
                <div>
                  <p className="text-xs font-mono text-zinc-600 uppercase tracking-[0.15em] mb-3">
                    Tech Used
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech, ti) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: ti * 0.03, duration: 0.25 }}
                        className="tag text-xs"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Projects Shipped */}
                {exp.projects.length > 0 && (
                  <div>
                    <p className="text-xs font-mono text-zinc-600 uppercase tracking-[0.15em] mb-3">
                      Projects Shipped
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.projects.map((proj) => (
                        <span key={proj} className="tag tag-indigo text-xs">
                          {proj}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export function ExperienceSection() {
  const [openId, setOpenId] = useState<string | null>("tada");

  return (
    <section id="experience" className="section-padding max-w-7xl mx-auto">
      <SectionHeader
        label="// 01 — work history"
        title="Where I've Built"
        subtitle="5+ years of shipping global products across ride-hailing, Web3, and mobile platforms."
      />

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-linear-to-b from-cyan-500/40 via-indigo-500/20 to-transparent hidden md:block" />

        <motion.div
          className="flex flex-col gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {experiences.map((exp) => (
            <div key={exp.id} className="relative">
              {/* Timeline dot */}
              <div
                className="hidden md:block absolute -left-10.75 top-8.5 w-3 h-3 rounded-full border-2 z-10"
                style={{
                  color: exp.color,
                  borderColor: exp.color,
                  background: exp.current ? exp.color : "#080a0f",
                  boxShadow: exp.current ? `0 0 8px ${exp.color}60` : "none",
                }}
              />

              <ExperienceCard
                exp={exp}
                isOpen={openId === exp.id}
                onToggle={() => setOpenId(openId === exp.id ? null : exp.id)}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
