"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer, scaleIn } from "@/animations/variants";
import { SectionHeader } from "@/components/common/SectionHeader";
import { TechIcon } from "@/components/common/TechIcon";
import { techStack, categoryLabels, categoryOrder } from "@/data/stack";
import { TechItem } from "@/types";
import { cn } from "@/lib/utils";

const levelMap = {
  expert: { label: "Expert", bars: 3, color: "bg-cyan-400" },
  advanced: { label: "Advanced", bars: 2, color: "bg-indigo-400" },
  proficient: { label: "Proficient", bars: 1, color: "bg-zinc-500" },
};

function TechCard({ item }: { item: TechItem }) {
  const level = levelMap[item.level];
  return (
    <motion.div
      variants={scaleIn}
      whileHover={{ y: -2, transition: { duration: 0.15 } }}
      className="group flex items-center gap-3 p-3 rounded-xl glass border border-white/5 hover:border-white/10 transition-all"
    >
      <TechIcon name={item.name} color={item.color} size={16} />
      <span className="text-sm text-zinc-300 flex-1 group-hover:text-white transition-colors">
        {item.name}
      </span>
      {/* Proficiency bars */}
      <div className="flex items-center gap-0.5">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className={cn(
              "w-1 h-3 rounded-sm transition-all",
              i <= level.bars ? level.color : "bg-white/10"
            )}
          />
        ))}
      </div>
    </motion.div>
  );
}

export function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState<TechItem["category"] | "all">("all");

  const filtered =
    activeCategory === "all"
      ? techStack
      : techStack.filter((t) => t.category === activeCategory);

  const grouped = categoryOrder.reduce<Record<string, TechItem[]>>((acc, cat) => {
    const items = filtered.filter((t) => t.category === cat);
    if (items.length) acc[cat] = items;
    return acc;
  }, {});

  return (
    <section id="stack" className="section-padding max-w-7xl mx-auto">
      <SectionHeader
        label="// 03 — tech command center"
        title="Engineering Toolkit"
        subtitle="Technologies I use to build scalable, performant, and beautiful products."
      />

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        {(["all", ...categoryOrder] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-all",
              activeCategory === cat
                ? "bg-cyan-500/10 border border-cyan-500/20 text-cyan-400"
                : "glass border border-white/5 text-zinc-500 hover:text-white"
            )}
          >
            {cat === "all" ? "All" : categoryLabels[cat]}
          </button>
        ))}
      </div>

      {/* Proficiency legend */}
      <div className="flex items-center gap-4 mb-8 text-xs text-zinc-600">
        {Object.entries(levelMap).map(([key, val]) => (
          <div key={key} className="flex items-center gap-1.5">
            <div className="flex gap-0.5">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={cn("w-1 h-3 rounded-sm", i <= val.bars ? val.color : "bg-white/10")}
                />
              ))}
            </div>
            <span>{val.label}</span>
          </div>
        ))}
      </div>

      {activeCategory === "all" ? (
        /* Grouped view */
        <div className="flex flex-col gap-10">
          {Object.entries(grouped).map(([cat, items]) => (
            <div key={cat}>
              <p className="text-xs font-mono text-zinc-600 uppercase tracking-[0.2em] mb-4">
                {categoryLabels[cat as TechItem["category"]]}
              </p>
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
              >
                {items.map((item) => (
                  <TechCard key={item.name} item={item} />
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      ) : (
        /* Flat filtered view */
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {filtered.map((item) => (
            <TechCard key={item.name} item={item} />
          ))}
        </motion.div>
      )}

      {/* Stats bento */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-14">
        {[
          { value: "5+", label: "Years experience", color: "#6ee7f7" },
          { value: "10+", label: "Tech mastered", color: "#818cf8" },
          { value: "5+", label: "Countries served", color: "#34d399" },
          { value: "∞", label: "UI patterns shipped", color: "#f59e0b" },
        ].map((stat) => (
          <motion.div
            key={stat.label}
            className="glass rounded-2xl p-5 border border-white/5 text-center"
            whileInView={{ opacity: [0, 1], y: [20, 0] }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-3xl font-bold mb-1" style={{ color: stat.color }}>
              {stat.value}
            </p>
            <p className="text-xs text-zinc-600">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
