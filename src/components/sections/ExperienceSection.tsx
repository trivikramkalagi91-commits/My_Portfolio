"use client";
import React from "react";
import FadeIn from "../FadeIn";
import { GraduationCap, GitPullRequest, Trophy, Terminal, Award } from "lucide-react";

const timeline = [
  {
    icon: Trophy,
    period: "2026",
    title: "3rd Place Winner — YC Fall 2026 × Moss Sprint",
    org: "Litigo · ₹9,500 Prize",
    desc: "Led core backend & product building for Litigo during the YC Fall 2026 × Moss Zero-Latency Builder Sprint, securing 3rd Place overall.",
  },
  {
    icon: Award,
    period: "2026",
    title: "1st Prize Winner — CSIT IoT Expo",
    org: "IoT Health Tracker Project",
    desc: "Developed an IoT Multi-Parameter Health Tracking System monitoring vital parameters in real-time, securing 1st Prize at the CSIT Department IoT Expo.",
  },
  {
    icon: Trophy,
    period: "2026",
    title: "2nd Place — College 3-Hour Hackathon",
    org: "Rapid Prototyping Sprint",
    desc: "Built and demonstrated a working software solution under a strict 3-hour constraint to win 2nd Place.",
  },
  {
    icon: GitPullRequest,
    period: "2026",
    title: "GirlScript Summer of Code 2026 (GSSOC)",
    org: "Open-Source Contributor",
    desc: "Merged 10+ pull requests across open-source repositories — added UI components, fixed system bugs, and added automated code formatting scripts.",
  },
  {
    icon: Terminal,
    period: "2026",
    title: "Top 50 Selection — Scrape-Verse Hackathon 2026",
    org: "Tathya Project",
    desc: "Core developer on Tathya, a data extraction platform selected in the Top 50 of Scrape-Verse Hackathon 2026.",
  },
  {
    icon: GraduationCap,
    period: "2022 — 2026",
    title: "B.Tech Computer Science",
    org: "REVA University, Bengaluru",
    desc: "Building foundations in Python, Data Structures & Algorithms (arrays, binary search, sorting, recursion), and software development.",
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

        <div className="relative max-w-7xl">
          <div className="absolute left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-lime via-lime/40 to-transparent" />
          <div className="space-y-12">
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
