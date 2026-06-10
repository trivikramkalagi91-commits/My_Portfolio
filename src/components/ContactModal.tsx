"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Phone, Copy, Check, ExternalLink } from "lucide-react";

const LinkedinIcon = ({ size = 22, className = "" }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = ({ size = 22, className = "" }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
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
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => {
      setCopiedType(null);
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#0C0C0C]/80 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative z-10 w-full max-w-lg overflow-hidden rounded-[32px] border border-[#D7E2EA]/15 bg-[#0C0C0C]/90 p-6 md:p-8 shadow-2xl glass"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-6 top-6 rounded-full p-2 text-[#D7E2EA]/60 transition-colors hover:bg-white/10 hover:text-white"
            >
              <X size={20} />
            </button>

            {/* Title */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold uppercase tracking-wider text-white">
                Let&apos;s Connect
              </h3>
              <p className="text-sm text-[#D7E2EA]/60">
                Reach out for projects, collaborations, or inquiries.
              </p>
            </div>

            {/* Contact Details List */}
            <div className="space-y-4 mb-8">
              {/* Email */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 rounded-2xl border border-white/5 bg-white/[0.02] p-4 transition-colors hover:border-white/10">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-[#B600A8]/20 p-2.5 text-[#B600A8]">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-widest text-[#D7E2EA]/40">Email</span>
                    <span className="text-sm font-medium text-white break-all">trivikramkalagi91@gmail.com</span>
                  </div>
                </div>
                <div className="flex gap-2 self-end sm:self-auto">
                  <button
                    onClick={() => handleCopy("trivikramkalagi91@gmail.com", "email")}
                    className="flex items-center gap-1.5 rounded-lg bg-white/5 px-3 py-1.5 text-xs text-[#D7E2EA]/80 transition-colors hover:bg-white/10"
                  >
                    {copiedType === "email" ? (
                      <>
                        <Check size={14} className="text-green-400" />
                        <span className="text-green-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                  <a
                    href="mailto:trivikramkalagi91@gmail.com"
                    className="rounded-lg bg-white/5 p-1.5 text-[#D7E2EA]/80 transition-colors hover:bg-white/10"
                  >
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 rounded-2xl border border-white/5 bg-white/[0.02] p-4 transition-colors hover:border-white/10">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-[#7621B0]/20 p-2.5 text-[#7621B0]">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-widest text-[#D7E2EA]/40">Phone</span>
                    <span className="text-sm font-medium text-white">+91 6361008605</span>
                  </div>
                </div>
                <div className="flex gap-2 self-end sm:self-auto">
                  <button
                    onClick={() => handleCopy("6361008605", "phone")}
                    className="flex items-center gap-1.5 rounded-lg bg-white/5 px-3 py-1.5 text-xs text-[#D7E2EA]/80 transition-colors hover:bg-white/10"
                  >
                    {copiedType === "phone" ? (
                      <>
                        <Check size={14} className="text-green-400" />
                        <span className="text-green-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                  <a
                    href="tel:6361008605"
                    className="rounded-lg bg-white/5 p-1.5 text-[#D7E2EA]/80 transition-colors hover:bg-white/10"
                  >
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <span className="block text-xs uppercase tracking-widest text-[#D7E2EA]/40 mb-3 text-center">
                Digital Presence
              </span>
              <div className="grid grid-cols-3 gap-2">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/trivikram-kalagi-571289371"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center rounded-2xl border border-white/5 bg-white/[0.02] py-4 transition-all duration-200 hover:border-[#D7E2EA]/20 hover:bg-white/[0.05] hover:scale-[1.02]"
                >
                  <LinkedinIcon size={22} className="text-[#D7E2EA]/80 mb-1" />
                  <span className="text-[10px] uppercase tracking-wider text-[#D7E2EA]/60">LinkedIn</span>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/trivikramkalagi91-commits"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center rounded-2xl border border-white/5 bg-white/[0.02] py-4 transition-all duration-200 hover:border-[#D7E2EA]/20 hover:bg-white/[0.05] hover:scale-[1.02]"
                >
                  <GithubIcon size={22} className="text-[#D7E2EA]/80 mb-1" />
                  <span className="text-[10px] uppercase tracking-wider text-[#D7E2EA]/60">GitHub</span>
                </a>

                {/* LeetCode */}
                <a
                  href="https://leetcode.com/u/Trivikram17/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center rounded-2xl border border-white/5 bg-white/[0.02] py-4 transition-all duration-200 hover:border-[#D7E2EA]/20 hover:bg-white/[0.05] hover:scale-[1.02]"
                >
                  <span className="text-[#D7E2EA]/80 font-bold mb-1 select-none text-lg leading-none">LC</span>
                  <span className="text-[10px] uppercase tracking-wider text-[#D7E2EA]/60">LeetCode</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
