"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Lock,
  X,
  Store,
  ChevronRight,
} from "lucide-react";
import { staggerContainer, scaleIn, fadeUp } from "@/animations/variants";
import { SectionHeader } from "@/components/common/SectionHeader";
import { projects, otherWork } from "@/data/projects";
import { Project } from "@/types";

function ProjectIcon({ name }: { name: string }) {
  return <span className="text-2xl leading-none">{name}</span>;
}

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
      {status === "live" && <span className="w-1 h-1 rounded-full bg-green-400 animate-pulse" />}
      {status === "private" && <Lock size={9} />}
      {s.label}
    </span>
  );
}

// ─── Metadata chip ────────────────────────────────────────────────────────────

function MetaChip({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5 px-3 py-2 rounded-xl bg-white/3 border border-white/6">
      <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-wider">{label}</span>
      <span className="text-xs font-medium text-zinc-300">{value}</span>
    </div>
  );
}

// ─── Project modal ────────────────────────────────────────────────────────────

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const isPlayStore = project.liveUrl?.includes("play.google.com");

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const prevHtml = html.style.overflow;
    const prevBody = body.style.overflow;
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    return () => {
      html.style.overflow = prevHtml;
      body.style.overflow = prevBody;
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 pt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="absolute inset-0 bg-black/70 backdrop-blur-md"
          onClick={onClose}
          onWheel={(e) => e.preventDefault()}
        />
        <motion.div
          className="relative z-10 w-full max-w-2xl glass-strong border border-white/10 rounded-2xl overflow-y-auto overscroll-contain max-h-[calc(100vh-88px)] flex flex-col"
          onWheel={(e) => e.stopPropagation()}
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Header */}
          <div className={`relative shrink-0 p-6 bg-linear-to-br ${project.gradient}`}>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-lg glass text-zinc-400 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X size={16} />
            </button>
            <div className="flex items-start gap-4 pr-10">
              <div className="w-12 h-12 rounded-xl glass border border-white/10 flex items-center justify-center text-zinc-300 shrink-0">
                <ProjectIcon name={project.icon} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <StatusBadge status={project.status} />
                  <span className="text-xs text-zinc-500 font-mono">{project.category}</span>
                </div>
                <h3 className="text-xl font-bold text-white leading-tight">{project.title}</h3>
              </div>
            </div>
          </div>

          {/* Metadata row */}
          <div className="shrink-0 px-6 py-4 border-b border-white/5">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <MetaChip label="Role" value={project.metadata.role} />
              <MetaChip label="Platform" value={project.metadata.platform} />
              <MetaChip label="Status" value={project.metadata.status} />
              {project.metadata.extra && (
                <MetaChip
                  label={project.metadata.extra.split(":")[0].trim()}
                  value={project.metadata.extra.split(":").slice(1).join(":").trim()}
                />
              )}
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain">
            <div className="p-6 flex flex-col gap-6">
              {/* What it is */}
              <div>
                <p className="text-xs font-mono text-zinc-600 uppercase tracking-wider mb-2">What it is</p>
                <p className="text-zinc-300 leading-relaxed text-sm">{project.whatItIs}</p>
              </div>

              {/* What I built */}
              <div>
                <p className="text-xs font-mono text-zinc-600 uppercase tracking-wider mb-2">What I built</p>
                <p className="text-zinc-400 leading-relaxed text-sm">{project.whatIBuilt}</p>
              </div>

              {/* Key work */}
              <div>
                <p className="text-xs font-mono text-zinc-600 uppercase tracking-wider mb-3">Key work</p>
                <ul className="flex flex-col gap-2">
                  {project.keyWork.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-400 leading-relaxed">
                      <ChevronRight size={13} className="shrink-0 mt-0.5 text-cyan-500/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Engineering highlights */}
              <div>
                <p className="text-xs font-mono text-zinc-600 uppercase tracking-wider mb-3">Engineering highlights</p>
                <ul className="flex flex-col gap-2">
                  {project.engineeringHighlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-400 leading-relaxed">
                      <span className="mt-2 w-1 h-1 rounded-full bg-indigo-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Impact */}
              <div>
                <p className="text-xs font-mono text-zinc-600 uppercase tracking-wider mb-2">Impact</p>
                <div className="glass rounded-xl p-4 border border-white/5">
                  <p className="text-zinc-300 text-sm leading-relaxed">{project.impact}</p>
                </div>
              </div>

              {/* Tech stack */}
              <div>
                <p className="text-xs font-mono text-zinc-600 uppercase tracking-wider mb-3">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((t) => (
                    <span key={t} className="tag text-xs">{t}</span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex gap-3 pt-1">
                {project.ctaType === "link" && project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium hover:bg-cyan-500/20 transition-all"
                  >
                    {isPlayStore ? <Store size={14} /> : <ExternalLink size={14} />}
                    {project.ctaLabel}
                  </a>
                ) : (
                  <span className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass border border-white/10 text-zinc-500 text-sm">
                    <Lock size={14} />
                    {project.ctaLabel}
                  </span>
                )}

                <button
                  onClick={onClose}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass border border-white/10 text-zinc-400 text-sm font-medium hover:text-white transition-colors ml-auto"
                >
                  Close
                </button>
              </div>
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
        <div className="absolute bottom-4 left-5 w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-zinc-300">
          <ProjectIcon name={project.icon} />
        </div>
        <div className="absolute top-4 right-4">
          <StatusBadge status={project.status} />
        </div>
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
          <span>View Case Study</span>
          <ChevronRight size={12} className="ml-auto group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
}

// ─── Other work item ──────────────────────────────────────────────────────────

function OtherWorkItem({ item }: { item: typeof otherWork[0] }) {
  return (
    <motion.div
      variants={fadeUp}
      className="glass rounded-xl border border-white/5 p-4 flex items-start gap-4 hover:border-white/10 transition-all"
    >
      <div className={`w-9 h-9 rounded-lg bg-linear-to-br ${item.gradient} flex items-center justify-center shrink-0 text-lg leading-none`}>
        {item.icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2 flex-wrap">
          <div>
            <p className="text-sm font-semibold text-white">{item.title}</p>
            <p className="text-xs text-zinc-500 mt-0.5">{item.category}</p>
          </div>
        </div>
        <p className="text-xs text-zinc-500 mt-1.5 leading-relaxed">{item.description}</p>
        <div className="flex flex-wrap gap-1.5 mt-2">
          {item.tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-zinc-600 border border-white/5">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="section-padding max-w-7xl mx-auto">
      <SectionHeader
        label="// 02 — featured work"
        title="What I've Shipped"
        subtitle="Production products across ride-hailing, Web3, fintech, and mobile."
      />

      {/* Main grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </motion.div>

      {/* Other Work */}
      <motion.div
        className="mt-16"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
      >
        <div className="flex items-center gap-3 mb-6">
          <p className="text-xs font-mono text-zinc-600 uppercase tracking-widest">Additional Work</p>
          <div className="flex-1 h-px bg-white/5" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {otherWork.map((item) => (
            <OtherWorkItem key={item.id} item={item} />
          ))}
        </div>
      </motion.div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
