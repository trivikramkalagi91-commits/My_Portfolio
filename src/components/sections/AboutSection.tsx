"use client";
import React from "react";
import FadeIn from "../FadeIn";
import { MapPin, GraduationCap, Rocket, GitPullRequest } from "lucide-react";

interface AboutSectionProps {
  onContactClick: () => void;
}

const skills = ["Python", "JavaScript", "TypeScript", "Next.js", "React", "Node.js", "LLMs", "NLP", "Agentic AI", "Git", "Tailwind", "SQL"];

const facts = [
  { icon: MapPin, label: "Location", value: "Bengaluru, India" },
  { icon: GraduationCap, label: "Education", value: "B.Tech CSE · REVA University" },
  { icon: GitPullRequest, label: "Open Source", value: "GSSOC · 10+ merged PRs" },
  { icon: Rocket, label: "Goal", value: "Found an AI automation startup" },
];

export default function AboutSection({ onContactClick }: AboutSectionProps) {
  return (
    <section id="about" className="relative w-full bg-black py-24 md:py-32 overflow-hidden">
      <div className="absolute w-[360px] h-[360px] rounded-full bg-lime/8 blur-[100px] top-20 -left-32 pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <FadeIn delay={0} y={20}>
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-lime">01 / About</span>
            <span className="h-px flex-grow bg-line" />
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <FadeIn delay={0.1} y={30}>
              <h2 className="display text-5xl sm:text-6xl lg:text-7xl text-ink leading-[0.95]">
                I turn ideas into <span className="text-lime">intelligent</span> software.
              </h2>
            </FadeIn>
            <FadeIn delay={0.2} y={20}>
              <p className="mt-6 text-ink/70 leading-relaxed text-base sm:text-lg max-w-2xl">
                CS student at REVA University, obsessed with DSA, open-source, hackathons, and AI
                agents. I led AI engineering on <span className="text-ink font-semibold">SIDDHI</span> —
                a crime-analytics platform for the Karnataka State Police — shipped{" "}
                <span className="text-ink font-semibold">MediExpiry AI</span> and the{" "}
                <span className="text-ink font-semibold">Kisan Platform</span> (3rd prize), and
                merged 10+ PRs through GSSOC. Every build is a step toward my own AI automation company.
              </p>
            </FadeIn>

            <FadeIn delay={0.3} y={20}>
              <div className="mt-8 flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="px-3.5 py-1.5 border border-line rounded-full font-mono text-[11px] text-ink/70 hover:border-lime hover:text-lime transition-colors cursor-default"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.4} y={20}>
              <button
                onClick={onContactClick}
                className="btn-lime mt-8 rounded-full px-7 py-3.5 text-xs font-bold uppercase tracking-wider cursor-pointer inline-flex items-center gap-2"
              >
                Let&apos;s work together →
              </button>
            </FadeIn>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 content-start">
            {facts.map((f, i) => (
              <FadeIn key={f.label} delay={0.25 + i * 0.08} y={20}>
                <div className="border border-line rounded-2xl p-5 bg-panel hover:border-lime/50 transition-colors h-full">
                  <div className="w-10 h-10 rounded-xl bg-lime/10 border border-lime/20 flex items-center justify-center text-lime mb-4">
                    <f.icon size={18} />
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted mb-1">
                    {f.label}
                  </div>
                  <div className="text-sm font-semibold text-ink leading-snug">{f.value}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
