"use client";

import Image from "next/image";
import { Mail, ArrowUp } from "lucide-react";
import { GitHubIcon } from "@/components/common/GitHubIcon";
import { LinkedInIcon } from "@/components/common/LinkedInIcon";

function scrollTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg border border-cyan-500/30 overflow-hidden">
            <Image
              src="/ph.png"
              alt="Prakash H"
              width={28}
              height={28}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-sm text-zinc-600">
            © {new Date().getFullYear()} Prakash H
          </span>
        </div>

        <p className="text-xs text-zinc-700 font-mono">
          Built with Next.js · Framer Motion · TailwindCSS
        </p>

        <div className="flex items-center gap-1">
          <a
            href="https://github.com/Prakash080"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-zinc-600 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <GitHubIcon className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/prakash080"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-zinc-600 hover:text-[#0a66c2] transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="w-4 h-4" />
          </a>
          <a
            href="mailto:hprakash080@gmail.com"
            className="p-2 text-zinc-600 hover:text-cyan-400 transition-colors"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
          <button
            onClick={scrollTop}
            className="p-2 text-zinc-600 hover:text-cyan-400 transition-colors ml-2"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
