"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Copy, Check, ExternalLink, MessageSquare, Download } from "lucide-react";
import { GitHubIcon } from "@/components/common/GitHubIcon";
import { LinkedInIcon } from "@/components/common/LinkedInIcon";
import { SectionHeader } from "@/components/common/SectionHeader";
import { staggerContainer, fadeUp } from "@/animations/variants";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      onClick={handleCopy}
      className="p-1.5 rounded-lg glass text-zinc-500 hover:text-white transition-colors"
      title="Copy to clipboard"
    >
      {copied ? (
        <Check size={20} className="text-green-400" />
      ) : (
        <Copy size={20} />
      )}
    </button>
  );
}

const CONTACT_LINKS = [
  {
    id: "email",
    label: "Email",
    value: "hprakash080@gmail.com",
    href: "mailto:hprakash080@gmail.com",
    icon: Mail,
    iconClass: "text-cyan-400",
    bgClass: "bg-cyan-500/10",
    borderClass: "border-cyan-500/20",
    copyable: true,
  },
  {
    id: "github",
    label: "GitHub",
    value: "@Prakash080",
    href: "https://github.com/Prakash080",
    icon: GitHubIcon,
    iconClass: "text-zinc-300",
    bgClass: "bg-zinc-500/10",
    borderClass: "border-zinc-500/20",
    copyable: false,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "/in/prakash080",
    href: "https://linkedin.com/in/prakash080",
    icon: LinkedInIcon,
    iconClass: "text-[#0a66c2]",
    bgClass: "bg-blue-500/10",
    borderClass: "border-blue-500/20",
    copyable: false,
  },
] as const;

export function ContactSection() {
  return (
    <section id="contact" className="section-padding max-w-7xl mx-auto">
      <SectionHeader
        label="// 05 — contact"
        title="Let's Build Together"
        subtitle="Open to full-time roles, contracts, and product collaborations."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left — collaboration card */}
        <motion.div
          className="glass-strong rounded-3xl border border-white/10 p-8 flex flex-col gap-6 relative overflow-hidden"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Ambient glow */}
          <div className="absolute top-0 right-0 w-60 h-60 bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none" />

          <div className="flex items-center gap-2 w-fit px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-green-400 font-medium">Open to opportunities</span>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Hire me or <span className="text-cyan-400">collaborate</span>
            </h3>
            <p className="text-zinc-500 leading-relaxed">
              Whether you&apos;re building a new product, scaling an existing platform, or looking
              for a frontend specialist with Web3 and mobile experience — I&apos;d love to hear
              from you.
            </p>
          </div>

          <ul className="flex flex-col gap-2">
            {[
              "React / Next.js web applications",
              "React Native & Flutter mobile apps",
              "Web3 / DeFi UI development",
              "UI system architecture & design systems",
              "Performance optimization & audits",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm text-zinc-400">
                <span className="w-1 h-1 rounded-full bg-cyan-400 shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="mailto:hprakash080@gmail.com"
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-500 text-black font-semibold text-sm hover:bg-cyan-400 transition-all"
            >
              <Mail size={14} />
              Send Email
            </a>
            <a
              href="/Prakash_H_Resume_2026.pdf"
              download
              className="flex items-center gap-2 px-5 py-3 rounded-xl glass border border-white/10 text-zinc-300 text-sm font-medium hover:text-white transition-all"
            >
              <Download size={14} />
              Resume
            </a>
          </div>
        </motion.div>

        {/* Right — contact links */}
        <motion.div
          className="flex flex-col gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {CONTACT_LINKS.map((link) => (
            <motion.div
              key={link.id}
              variants={fadeUp}
              className="glass rounded-2xl border border-white/5 p-5 flex items-center gap-4 hover:border-white/10 transition-all"
            >
              <div
                className={`w-11 h-11 rounded-xl ${link.bgClass} border ${link.borderClass} flex items-center justify-center shrink-0`}
              >
                <link.icon
                  className={`${link.iconClass}`}
                  {...(link.icon === Mail
                    ? { size: 20 }
                    : { style: { width: 20, height: 20 } })}
                />
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-xs text-zinc-600 mb-0.5">{link.label}</p>
                <p className="text-sm font-medium text-white truncate">{link.value}</p>
              </div>

              <div className="flex items-center gap-1">
                {link.copyable && <CopyButton text={link.value} />}
                <a
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="p-1.5 rounded-lg glass text-zinc-500 hover:text-white transition-colors"
                  aria-label={`Open ${link.label}`}
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </motion.div>
          ))}

          {/* Response time */}
          <motion.div
            variants={fadeUp}
            className="glass rounded-2xl border border-white/5 p-5 flex items-center gap-4"
          >
            <div className="w-11 h-11 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center shrink-0">
              <MessageSquare size={20} className="text-green-400" />
            </div>
            <div>
              <p className="text-xs text-zinc-600 mb-0.5">Response time</p>
              <p className="text-sm font-medium text-white">Usually within 24 hours</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
