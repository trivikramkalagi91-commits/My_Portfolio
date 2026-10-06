"use client";
import React from "react";
import FadeIn from "../FadeIn";
import confetti from "canvas-confetti";
import { Mail, ArrowUpRight } from "lucide-react";

interface ContactSectionProps {
  onContactClick: () => void;
}

export default function ContactSection({ onContactClick }: ContactSectionProps) {
  const fire = () => {
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.7 },
      colors: ["#ccff00", "#f2f2ed", "#8a8a85"],
    });
    onContactClick();
  };

  return (
    <section className="relative w-full bg-black py-24 md:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <FadeIn delay={0} y={20}>
          <div className="relative bg-lime text-black rounded-[32px] px-8 py-16 md:px-16 md:py-24 overflow-hidden">
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />
            <div className="relative z-10 flex flex-col items-center text-center">
              <span className="font-mono text-[11px] uppercase tracking-[0.35em] text-black/70 mb-6 block">
                05 / Contact
              </span>
              <h2 className="display text-4xl sm:text-5xl lg:text-7xl max-w-3xl leading-[0.95]">
                Got a project? Let&apos;s build it.
              </h2>
              <p className="mt-6 max-w-lg text-black/70 text-base sm:text-lg">
                Internships, freelance, hackathon teams, or AI automation ideas — my inbox is open.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={fire}
                  className="bg-black text-lime rounded-full px-8 py-4 text-sm font-bold uppercase tracking-wider cursor-pointer inline-flex items-center gap-2 hover:scale-105 transition-transform shadow-xl"
                >
                  Start a project →
                </button>
                <a
                  href="mailto:trivikramkalagi91@gmail.com"
                  className="inline-flex items-center gap-2 text-black/80 hover:text-black font-semibold text-sm border-2 border-black/30 rounded-full px-8 py-4 hover:border-black transition-colors"
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
