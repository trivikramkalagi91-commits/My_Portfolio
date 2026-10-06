"use client";
import React from "react";
import FadeIn from "../FadeIn";
import confetti from "canvas-confetti";
import { ArrowUpRight } from "lucide-react";

interface ContactSectionProps {
  onContactClick: () => void;
}

export default function ContactSection({ onContactClick }: ContactSectionProps) {
  const fireConfetti = () => {
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.7 },
      colors: ["#ff5a1f", "#ece8df", "#7621B0"],
    });
    onContactClick();
  };

  return (
    <section className="relative w-full bg-ink py-24 md:py-36 overflow-hidden border-t border-bone/10">
      <div className="orb w-[500px] h-[500px] bg-accent/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-10 text-center flex flex-col items-center">
        <FadeIn delay={0} y={20}>
          <span className="font-mono text-xs uppercase tracking-[0.35em] text-accent mb-8 block">
            04 / Contact
          </span>
        </FadeIn>
        <FadeIn delay={0.1} y={30}>
          <h2 className="display text-[13vw] sm:text-[10vw] md:text-[7rem] lg:text-[8rem] text-bone leading-[0.9]">
            Got an
            <br />
            <span className="display-italic">idea</span>? Let&apos;s
            <br />
            build it.
          </h2>
        </FadeIn>
        <FadeIn delay={0.25} y={20}>
          <p className="mt-8 max-w-lg text-bone/60 text-base sm:text-lg font-light leading-relaxed">
            Open to internships, freelance builds, hackathon teams, and
            conversations about AI automation. My inbox is always open.
          </p>
        </FadeIn>
        <FadeIn delay={0.35} y={20}>
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={fireConfetti}
              className="btn-primary rounded-full px-10 py-4 font-mono text-xs uppercase tracking-[0.2em] font-semibold cursor-pointer inline-flex items-center gap-2"
            >
              Start a project →
            </button>
            <a
              href="mailto:trivikramkalagi91@gmail.com"
              className="link-underline font-mono text-xs uppercase tracking-[0.2em] text-bone/70 hover:text-accent transition-colors inline-flex items-center gap-1.5"
            >
              trivikramkalagi91@gmail.com <ArrowUpRight size={13} />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
