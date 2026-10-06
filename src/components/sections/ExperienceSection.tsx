"use client";
import React from "react";
import FadeIn from "../FadeIn";
import { GraduationCap, GitPullRequest, Trophy, Bot } from "lucide-react";

const timeline = [
  {
    icon: Bot,
    period: "2024 — Now",
    title: "AI Automation Builder",
    org: "Self-driven · SIDDHI",
    desc: "Engineering AI agents & LLM pipelines. Leading AI on SIDDHI for the Karnataka State Police. Building toward founding an AI automation startup.",
  },
  {
    icon: Trophy,
    period: "2024 — 2025",
    title: "Hackathon Winner",
    org: "Multiple Hackathons",
    desc: "Shipped MediExpiry AI & Kisan Platform under pressure — Kisan Platform secured 3rd Prize.",
  },
  {
    icon: GitPullRequest,
    period: "2024",
    title: "Open-Source Contributor",
    org: "GirlScript Summer of Code",
    desc: "10+ merged PRs across real repos — SecDev, StorySpark AI, reframe. UI modules, bug fixes, system integrations.",
  },
  {
    icon: GraduationCap,
    period: "2022 — 2026",
    title: "B.Tech Computer Science",
    org: "REVA University, Bengaluru",
    desc: "Strong foundations in DSA & algorithms, shipping real projects on the side.",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative w-full bg-panel border-y border-line py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <FadeIn delay={0} y={20}>
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-lime">04 / Journey</span>
            <span className="h-px flex-grow bg-line" />
          </div>
        </FadeIn>

        <FadeIn delay={0.1} y={30}>
          <h2 className="display text-5xl sm:text-6xl lg:text-7xl text-ink mb-14 leading-[0.95]">
            The road so <span className="text-lime">far</span>
          </h2>
        </FadeIn>

        <div className="relative max-w-5xl">
          <div className="absolute left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-lime via-lime/40 to-transparent" />
          <div className="space-y-10">
            {timeline.map((t, i) => (
              <FadeIn key={t.title} delay={0.15 + i * 0.08} y={25}>
                <div className="relative flex gap-6 sm:gap-8">
                  <div className="relative z-10 w-14 h-14 flex-shrink-0 rounded-2xl bg-lime text-black flex items-center justify-center shadow-lg shadow-lime/20">
                    <t.icon size={22} strokeWidth={2.2} />
                  </div>
                  <div className="border border-line rounded-2xl bg-black p-6 sm:p-7 flex-grow hover:border-lime/40 transition-colors">
                    <div className="flex flex-wrap items-center gap-3 mb-2.5">
                      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                        {t.period}
                      </span>
                      <span className="text-xs text-lime font-semibold">{t.org}</span>
                    </div>
                    <h3 className="display text-2xl sm:text-3xl text-ink mb-2 tracking-wide">{t.title}</h3>
                    <p className="text-base text-ink/70 leading-relaxed max-w-2xl">{t.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
