"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Lock, Eye, X, ArrowRight, Layers, Store } from "lucide-react";
import { staggerContainer, scaleIn } from "@/animations/variants";
import { SectionHeader } from "@/components/common/SectionHeader";
import { projects } from "@/data/projects";
import { Project } from "@/types";
import { cn } from "@/lib/utils";

// ─── Status badge ─────────────────────────────────────────────────────────────

const STATUS_MAP: Record<
  Project["status"],
  { label: string; color: string; bg: string; border: string }
> = {
  live:          { label: "Live",        color: "text-green-400", bg: "bg-green-500/10",  border: "border-green-500/20"  },
  private:       { label: "Private",     color: "text-zinc-400",  bg: "bg-zinc-500/10",   border: "border-zinc-500/20"   },
  "in-progress": { label: "In Progress", color: "text-amber-400", bg: "bg-amber-500/10",  border: "border-amber-500/20"  },
};

function StatusBadge({ status }: { status: Project["status"] }) {
  const s = STATUS_MAP[status];
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium border ${s.color} ${s.bg} ${s.border}`}
    >
      {status === "live" && <span className="w-1 h-1 rounded-full bg-green-400" />}
      {status === "private" && <Lock size={9} />}
      {s.label}
    </span>
  );
}

// ─── Project modal ────────────────────────────────────────────────────────────

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const isPlayStore = project.liveUrl?.includes("play.google.com");

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="absolute inset-0 bg-black/70 backdrop-blur-md"
          onClick={onClose}
        />
        <motion.div
          className="relative z-10 w-full max-w-2xl glass-strong border border-white/10 rounded-2xl overflow-y-auto max-h-[90vh]"
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Header */}
          <div className={`relative p-8 bg-linear-to-br ${project.gradient}`}>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-lg glass text-zinc-400 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X size={16} />
            </button>
            <div className="flex items-start gap-4">
              <div className="text-4xl">{project.icon}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <StatusBadge status={project.status} />
                  <span className="text-xs text-zinc-500 font-mono">{project.category}</span>
                </div>
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="p-8 flex flex-col gap-6">
            <div>
              <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">Overview</p>
              <p className="text-zinc-300 leading-relaxed">{project.description}</p>
            </div>

            <div>
              <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-3">Contribution</p>
              <p className="text-zinc-400 leading-relaxed text-sm">{project.contribution}</p>
            </div>

            <div>
              <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-3">Outcome</p>
              <div className="glass rounded-xl p-4 border border-white/5">
                <p className="text-zinc-300 text-sm leading-relaxed">{project.outcome}</p>
              </div>
            </div>

            <div>
              <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-3">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((t) => (
                  <span key={t} className="tag text-xs">{t}</span>
                ))}
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium hover:bg-cyan-500/20 transition-all"
                >
                  {isPlayStore ? <Store size={14} /> : <ExternalLink size={14} />}
                  {isPlayStore ? "View on Play Store" : "View Live"}
                </a>
              ) : project.status === "private" ? (
                <span className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass border border-white/10 text-zinc-500 text-sm">
                  <Lock size={14} />
                  Private / NDA
                </span>
              ) : null}

              <button
                onClick={onClose}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass border border-white/10 text-zinc-400 text-sm font-medium hover:text-white transition-colors ml-auto"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── Project card ─────────────────────────────────────────────────────────────

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <motion.div
      variants={scaleIn}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative rounded-2xl glass border border-white/5 hover:border-white/10 overflow-hidden cursor-pointer transition-all duration-300"
      onClick={onClick}
    >
      {/* Gradient banner */}
      <div className={`h-28 bg-linear-to-br ${project.gradient} relative overflow-hidden`}>
        <div className="absolute inset-0 grid-overlay opacity-30" />
        <div className="absolute bottom-4 left-5 text-3xl">{project.icon}</div>
        <div className="absolute top-4 right-4">
          <StatusBadge status={project.status} />
        </div>
        {project.featured && (
          <div className="absolute top-4 left-4 flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-500/15 border border-yellow-500/25 text-yellow-400">
            <Layers size={9} />
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-xs font-mono text-zinc-600 mb-1">{project.category}</p>
        <h3 className="text-base font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-zinc-500 leading-relaxed mb-4 line-clamp-2">{project.summary}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-zinc-500 border border-white/5"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 text-xs text-zinc-600 group-hover:text-cyan-400 transition-colors">
          <Eye size={12} />
          <span>View Case Study</span>
          <ArrowRight size={12} className="ml-auto group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

type FilterValue = "all" | "featured";

const FILTERS: { value: FilterValue; label: string }[] = [
  { value: "all",      label: "All"      },
  { value: "featured", label: "Featured" },
];

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<FilterValue>("all");

  const displayed = filter === "featured" ? projects.filter((p) => p.featured) : projects;

  return (
    <section id="projects" className="section-padding max-w-7xl mx-auto">
      {/* Header row — label/title on left, filter pills on right */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-12">
        <SectionHeader
          label="// 02 — featured work"
          title="What I've Shipped"
          subtitle="Production products across ride-hailing, Web3, fintech, and mobile."
        />

        {/* Filter pills — aligned to first line of title */}
        <div className="flex items-center gap-2 shrink-0 sm:mt-10">
          {FILTERS.map(({ value, label }) => (
            <button
              key={value}
              onClick={() => setFilter(value)}
              className={cn(
                "px-3 py-1.5 rounded-lg text-xs font-medium transition-all",
                filter === value
                  ? "bg-cyan-500/10 border border-cyan-500/20 text-cyan-400"
                  : "glass border border-white/5 text-zinc-500 hover:text-white hover:border-white/10"
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <motion.div
        key={filter}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {displayed.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </motion.div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
