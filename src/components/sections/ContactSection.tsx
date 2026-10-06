"use client";
import React from "react";
import FadeIn from "../FadeIn";
import confetti from "canvas-confetti";
import { ArrowUpRight, Mail } from "lucide-react";

interface ContactSectionProps {
  onContactClick: () => void;
}

export default function ContactSection({ onContactClick }: ContactSectionProps) {
  const fire = () => {
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.7 },
      colors: ["#6366f1", "#8b5cf6", "#06b6d4"],
    });
    onContactClick();
  };

  return (
    <section className="relative w-full bg-bg py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <FadeIn delay={0} y={20}>
          <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-br from-indigo-600 via-violet-600 to-cyan-500 px-8 py-16 md:px-16 md:py-24 text-center">
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="orb w-[300px] h-[300px] bg-white/20 -top-20 -right-10" />
            <div className="orb w-[260px] h-[260px] bg-cyan-300/30 -bottom-20 -left-10" />

            <div className="relative z-10 flex flex-col items-center">
              <span className="font-mono text-[11px] uppercase tracking-[0.35em] text-white/80 mb-6 block">
                05 / Contact
              </span>
              <h2 className="display text-4xl sm:text-5xl lg:text-7xl text-white max-w-3xl leading-[1.05]">
                Have an idea? Let&apos;s build it with <span className="text-cyan-200">AI</span>.
              </h2>
              <p className="mt-6 max-w-lg text-white/80 text-base sm:text-lg">
                Open to internships, freelance builds, hackathon teams, and conversations about
                AI automation. My inbox is always open.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={fire}
                  className="bg-white text-indigo-600 rounded-full px-8 py-4 text-sm font-bold cursor-pointer inline-flex items-center gap-2 hover:scale-105 transition-transform shadow-xl"
                >
                  Start a project →
                </button>
                <a
                  href="mailto:trivikramkalagi91@gmail.com"
                  className="inline-flex items-center gap-2 text-white/90 hover:text-white font-medium text-sm border border-white/40 rounded-full px-8 py-4 hover:bg-white/10 transition-colors"
                >
                  <Mail size={15} /> trivikramkalagi91@gmail.com <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
