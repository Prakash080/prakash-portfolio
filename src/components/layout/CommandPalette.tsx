"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Terminal, ArrowRight, User, Briefcase, Code2, Mail, Download } from "lucide-react";
import { GitHubIcon } from "@/components/common/GitHubIcon";
import { LinkedInIcon } from "@/components/common/LinkedInIcon";
import { useUIStore } from "@/store";
import { scrollToSection, RESUME_PATH } from "@/lib/utils";
import { useScrollLock } from "@/hooks/useScrollLock";

interface Command {
  id: string;
  label: string;
  icon: ReactNode;
  section: string | null;
  type: "navigation" | "link";
  href?: string;
  download?: boolean;
}

const iconCls = "shrink-0 text-cyan-500/70";
const svgSize = { width: 14, height: 14 } as const;

const COMMANDS: Command[] = [
  { id: "hero",       label: "Go to Hero",      icon: <Terminal  size={14} className={iconCls} />, section: "hero",       type: "navigation" },
  { id: "experience", label: "View Experience", icon: <Briefcase size={14} className={iconCls} />, section: "experience", type: "navigation" },
  { id: "projects",   label: "View Projects",   icon: <Code2     size={14} className={iconCls} />, section: "projects",   type: "navigation" },
  { id: "stack",      label: "Tech Stack",      icon: <Terminal  size={14} className={iconCls} />, section: "stack",      type: "navigation" },
  { id: "about",      label: "About Prakash",   icon: <User      size={14} className={iconCls} />, section: "about",      type: "navigation" },
  { id: "contact",    label: "Contact / Hire",  icon: <Mail      size={14} className={iconCls} />, section: "contact",    type: "navigation" },
  { id: "resume",     label: "Download Resume", icon: <Download  size={14} className={iconCls} />, section: null, type: "link", href: RESUME_PATH, download: true },
  { id: "github",     label: "View GitHub",     icon: <GitHubIcon   className={iconCls} style={svgSize} />, section: null, type: "link", href: "https://github.com/Prakash080"        },
  { id: "linkedin",   label: "View LinkedIn",   icon: <LinkedInIcon className={iconCls} style={svgSize} />, section: null, type: "link", href: "https://linkedin.com/in/prakash080"  },
];

export function CommandPalette() {
  const open           = useUIStore((s) => s.commandPaletteOpen);
  const setOpen        = useUIStore((s) => s.setCommandPaletteOpen);
  const togglePalette  = useUIStore((s) => s.toggleCommandPalette);
  const [query,    setQuery]    = useState("");
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = COMMANDS.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase())
  );

  useScrollLock(open);

  // Focus and reset on open
  useEffect(() => {
    if (!open) return;
    setTimeout(() => inputRef.current?.focus(), 50);
    setQuery("");
    setSelected(0);
  }, [open]);

  // Global ⌘K / Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") { e.preventDefault(); togglePalette(); }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [togglePalette, setOpen]);

  // Arrow navigation + Enter
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") { e.preventDefault(); setSelected((s) => Math.min(s + 1, filtered.length - 1)); }
      if (e.key === "ArrowUp")   { e.preventDefault(); setSelected((s) => Math.max(s - 1, 0)); }
      if (e.key === "Enter" && filtered[selected]) executeCommand(filtered[selected]);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, filtered, selected]);

  function executeCommand(cmd: Command) {
    if (cmd.type === "navigation" && cmd.section) {
      scrollToSection(cmd.section);
    } else if (cmd.type === "link" && cmd.href) {
      if (cmd.download) {
        const a = document.createElement("a");
        a.href = cmd.href;
        a.download = "";
        a.click();
      } else {
        window.open(cmd.href, "_blank");
      }
    }
    setOpen(false);
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-100 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            onWheel={(e) => e.preventDefault()}
          />
          <motion.div
            className="fixed top-[20%] left-1/2 -translate-x-1/2 z-101 w-full max-w-xl mx-auto px-4"
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            onWheel={(e) => e.stopPropagation()}
          >
            <div className="glass-strong rounded-2xl border border-white/10 shadow-2xl flex flex-col overflow-hidden" style={{ maxHeight: "min(480px, 75vh)" }}>
              {/* Search input */}
              <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/5 shrink-0">
                <Search size={16} className="text-zinc-500 shrink-0" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => { setQuery(e.target.value); setSelected(0); }}
                  placeholder="Search commands..."
                  className="flex-1 bg-transparent text-white placeholder-zinc-600 text-sm outline-none"
                />
                <kbd className="text-xs text-zinc-600 font-mono bg-white/5 px-2 py-0.5 rounded">ESC</kbd>
              </div>

              {/* Results — flex-1 min-h-0 is required for overflow-y-auto to work in a flex child */}
              <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain py-2">
                {filtered.length === 0 ? (
                  <p className="text-center text-zinc-600 text-sm py-6">No results</p>
                ) : (
                  filtered.map((cmd, i) => (
                    <button
                      key={cmd.id}
                      onClick={() => executeCommand(cmd)}
                      onMouseEnter={() => setSelected(i)}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                        i === selected ? "bg-white/5 text-white" : "text-zinc-400 hover:text-white"
                      }`}
                    >
                      {cmd.icon}
                      <span className="flex-1 text-left">{cmd.label}</span>
                      {i === selected && <ArrowRight size={12} className="text-zinc-600" />}
                    </button>
                  ))
                )}
              </div>

              <div className="px-4 py-2 border-t border-white/5 flex items-center gap-3 text-xs text-zinc-700 shrink-0">
                <span>↑↓ navigate</span>
                <span>↵ select</span>
                <span>esc close</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
