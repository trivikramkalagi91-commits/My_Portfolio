"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Phone, Copy, Check, ExternalLink } from "lucide-react";

const LinkedinIcon = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const GithubIcon = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const handleCopy = (text: string, type: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const rows = [
    { key: "email", icon: Mail, label: "Email", value: "trivikramkalagi91@gmail.com", href: "mailto:trivikramkalagi91@gmail.com" },
    { key: "phone", icon: Phone, label: "Phone", value: "+91 63610 08605", href: "tel:6361008605" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm cursor-pointer"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
            className="relative z-10 w-full max-w-lg rounded-[28px] bg-panel border border-line p-7 shadow-2xl"
          >
            <div className="absolute -top-16 -right-10 w-48 h-48 rounded-full bg-lime/15 blur-3xl pointer-events-none" />
            <button
              onClick={onClose}
              className="absolute right-5 top-5 rounded-full p-2 text-muted hover:bg-ink/10 hover:text-ink transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <div className="mb-6 relative">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-lime block mb-2">
                Let&apos;s connect
              </span>
              <h3 className="display text-3xl text-ink">
                Say <span className="text-lime">hello</span>.
              </h3>
              <p className="text-sm text-muted mt-2">
                Projects, collaborations, internships — or just a chat about AI.
              </p>
            </div>

            <div className="space-y-3 mb-7 relative">
              {rows.map((row) => (
                <div
                  key={row.key}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-2xl border border-line bg-black p-4 hover:border-lime/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-lime text-black p-2.5">
                      <row.icon size={17} strokeWidth={2.2} />
                    </div>
                    <div>
                      <span className="block font-mono text-[9px] uppercase tracking-[0.25em] text-muted">
                        {row.label}
                      </span>
                      <span className="text-sm font-semibold text-ink break-all">{row.value}</span>
                    </div>
                  </div>
                  <div className="flex gap-2 self-end sm:self-auto">
                    <button
                      onClick={() => handleCopy(row.value.replace("+91 ", "").replace(" ", ""), row.key)}
                      className="flex items-center gap-1.5 rounded-lg border border-line bg-panel px-3 py-1.5 text-[11px] font-mono text-ink/70 hover:border-lime hover:text-lime transition-colors cursor-pointer"
                    >
                      {copiedType === row.key ? (
                        <>
                          <Check size={13} className="text-lime" />
                          <span className="text-lime">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy size={13} /> Copy
                        </>
                      )}
                    </button>
                    <a
                      href={row.href}
                      className="rounded-lg border border-line bg-panel p-1.5 text-ink/70 hover:border-lime hover:text-lime transition-colors"
                      aria-label={`Open ${row.label}`}
                    >
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <span className="block font-mono text-[10px] uppercase tracking-[0.3em] text-muted mb-3 text-center">
                Find me online
              </span>
              <div className="grid grid-cols-3 gap-2">
                <a href="https://www.linkedin.com/in/trivikram-kalagi-571289371" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center rounded-2xl border border-line bg-black py-4 hover:border-lime hover:bg-lime/5 transition-all">
                  <LinkedinIcon size={20} className="text-ink/80 mb-1.5" />
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted">LinkedIn</span>
                </a>
                <a href="https://github.com/trivikramkalagi91-commits" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center rounded-2xl border border-line bg-black py-4 hover:border-lime hover:bg-lime/5 transition-all">
                  <GithubIcon size={20} className="text-ink/80 mb-1.5" />
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted">GitHub</span>
                </a>
                <a href="https://leetcode.com/u/Trivikram17/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center rounded-2xl border border-line bg-black py-4 hover:border-lime hover:bg-lime/5 transition-all">
                  <span className="text-ink/80 font-bold mb-1.5 text-base leading-none">LC</span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted">LeetCode</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
