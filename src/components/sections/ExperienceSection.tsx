"use client";
import React from "react";
import FadeIn from "../FadeIn";
import { GraduationCap, GitPullRequest, Trophy, Bot, Briefcase } from "lucide-react";

const timeline = [
  {
    icon: Bot,
    period: "2024 — Present",
    title: "AI Automation Builder",
    org: "Self-driven · Projects",
    desc: "Engineering AI agents, LLM pipelines, and automation tools. Building toward founding an AI automation startup. Currently leading AI on SIDDHI for the Karnataka State Police.",
    color: "from-indigo to-violet",
  },
  {
    icon: Trophy,
    period: "2024 — 2025",
    title: "Hackathon Winner",
    org: "Multiple Hackathons",
    desc: "Built and shipped MediExpiry AI and the Kisan Platform under pressure — Kisan Platform secured 3rd Prize among competing teams.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: GitPullRequest,
    period: "2024",
    title: "Open-Source Contributor",
    org: "GirlScript Summer of Code (GSSOC)",
    desc: "Shipped 10+ merged pull requests across real-world repositories — UI modules, bug fixes, and system integrations in SecDev, StorySpark AI, and reframe.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: GraduationCap,
    period: "2022 — 2026",
    title: "B.Tech in Computer Science",
    org: "REVA University, Bengaluru",
    desc: "Building strong foundations in DSA, algorithms, and software engineering while shipping real-world projects on the side.",
    color: "from-cyan-500 to-blue-500",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative w-full bg-surface border-y border-line py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <FadeIn delay={0} y={20}>
          <div className="flex items-center gap-4 mb-6">
            <span className="eyebrow">04 / Journey</span>
            <span className="h-px flex-grow bg-line" />
          </div>
        </FadeIn>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <FadeIn delay={0.1} y={30}>
            <h2 className="display text-4xl sm:text-5xl lg:text-6xl text-ink max-w-2xl leading-[1.05]">
              The road so <span className="grad-text">far</span>.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2} y={20}>
            <p className="text-ink-soft max-w-sm text-sm leading-relaxed">
              Education, open-source, hackathons, and AI — each chapter compounding into the
              builder I am today.
            </p>
          </FadeIn>
        </div>

        <div className="relative max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-indigo via-violet to-cyan opacity-40" />

          <div className="space-y-8">
            {timeline.map((t, i) => (
              <FadeIn key={t.title} delay={0.15 + i * 0.08} y={25}>
                <div className="relative flex gap-6">
                  <div className={`relative z-10 w-14 h-14 flex-shrink-0 rounded-2xl bg-gradient-to-br ${t.color} flex items-center justify-center text-white shadow-lg`}>
                    <t.icon size={22} />
                  </div>
                  <div className="card flex-grow p-6">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                        {t.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[11px] text-indigo font-semibold">
                        <Briefcase size={12} /> {t.org}
                      </span>
                    </div>
                    <h3 className="display text-xl text-ink mb-1.5">{t.title}</h3>
                    <p className="text-sm text-ink-soft leading-relaxed">{t.desc}</p>
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
