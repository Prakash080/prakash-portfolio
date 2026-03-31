"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { Menu, X, Terminal, Download } from "lucide-react";
import Image from "next/image";
import { useUIStore } from "@/store";
import { SectionId } from "@/types";
import { cn } from "@/lib/utils";

const NAV_ITEMS: { label: string; id: SectionId }[] = [
  { label: "Experience", id: "experience" },
  { label: "Projects",   id: "projects"   },
  { label: "Stack",      id: "stack"      },
  { label: "About",      id: "about"      },
  { label: "Contact",    id: "contact"    },
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

/** Thin animated progress bar at the very top of the viewport */
function ScrollProgressBar() {
  const raw     = useMotionValue(0);
  const progress = useSpring(raw, { stiffness: 200, damping: 30 });

  useEffect(() => {
    function update() {
      const scrolled = window.scrollY;
      const total    = document.documentElement.scrollHeight - window.innerHeight;
      raw.set(total > 0 ? scrolled / total : 0);
    }
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [raw]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 z-60 origin-left bg-linear-to-r from-cyan-400 via-indigo-400 to-violet-500"
      style={{ scaleX: progress }}
    />
  );
}

export function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const activeSection             = useUIStore((s) => s.activeSection);
  const mobileNavOpen             = useUIStore((s) => s.mobileNavOpen);
  const toggleMobileNav           = useUIStore((s) => s.toggleMobileNav);
  const setMobileNavOpen          = useUIStore((s) => s.setMobileNavOpen);
  const toggleCommandPalette      = useUIStore((s) => s.toggleCommandPalette);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <ScrollProgressBar />

      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-55 transition-all duration-300",
          scrolled ? "py-3 glass border-b border-white/5" : "py-5 bg-transparent"
        )}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      >
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-8 h-8 rounded-lg border border-cyan-500/40 overflow-hidden group-hover:border-cyan-500/80 transition-colors">
              <Image
                src="/icon.svg"
                alt="Prakash H"
                width={32}
                height={32}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <span className="text-sm font-semibold text-white/70 group-hover:text-white transition-colors hidden sm:block">
              Prakash H
            </span>
          </motion.button>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const active = activeSection === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={cn(
                      "relative px-3 py-1.5 rounded-lg text-sm transition-colors duration-200",
                      active ? "text-cyan-400" : "text-zinc-400 hover:text-white"
                    )}
                  >
                    {/* Animated background pill */}
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-lg bg-cyan-500/10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleCommandPalette}
              className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg glass text-zinc-500 hover:text-zinc-300 text-xs transition-colors"
              title="Open command palette (⌘K)"
            >
              <Terminal size={12} />
              <span className="font-mono">⌘K</span>
            </button>

            <a
              href="/Prakash_H_Resume_2026.pdf"
              download
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/20 text-xs font-medium transition-all"
            >
              <Download size={12} />
              Resume
            </a>

            <button
              onClick={toggleMobileNav}
              className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors relative z-60"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={mobileNavOpen ? "close" : "open"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0,   opacity: 1 }}
                  exit={{   rotate:  90,  opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="block"
                >
                  {mobileNavOpen ? <X size={20} /> : <Menu size={20} />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile nav drawer */}
      <AnimatePresence>
        {mobileNavOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileNavOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 bottom-0 z-50 w-72 glass-strong border-l border-white/10 flex flex-col pt-20 pb-8 px-6 md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
            >
              <ul className="flex flex-col gap-2 flex-1">
                {NAV_ITEMS.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => { scrollToSection(item.id); setMobileNavOpen(false); }}
                      className={cn(
                        "w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all",
                        activeSection === item.id
                          ? "text-cyan-400 bg-cyan-500/10 border border-cyan-500/20"
                          : "text-zinc-400 hover:text-white hover:bg-white/5"
                      )}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>

              <a
                href="/Prakash_H_Resume_2026.pdf"
                download
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium"
              >
                <Download size={14} />
                Download Resume
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
