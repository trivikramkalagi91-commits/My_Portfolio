"use client";
import React from "react";
import FadeIn from "../FadeIn";
import { MapPin, GraduationCap, Rocket, GitPullRequest } from "lucide-react";

interface AboutSectionProps {
  onContactClick: () => void;
}

const skillGroups = [
  { label: "Languages", tags: ["Python", "JavaScript", "TypeScript", "C++", "SQL"] },
  { label: "AI / ML", tags: ["LLMs", "NLP", "Agentic AI", "Prompt Eng.", "Data Analytics"] },
  { label: "Web", tags: ["Next.js", "React", "Node.js", "Tailwind", "Vercel"] },
  { label: "Tools", tags: ["Git", "GitHub", "Docker", "Framer Motion", "REST APIs"] },
];

const facts = [
  { icon: MapPin, label: "Location", value: "Bengaluru, India" },
  { icon: GraduationCap, label: "Education", value: "B.Tech CSE · REVA University" },
  { icon: GitPullRequest, label: "Open Source", value: "GSSOC · 10+ merged PRs" },
  { icon: Rocket, label: "Goal", value: "Found an AI automation startup" },
];

export default function AboutSection({ onContactClick }: AboutSectionProps) {
  return (
    <section id="about" className="relative w-full bg-bg py-24 md:py-32 overflow-hidden">
      <div className="orb w-[360px] h-[360px] bg-violet/15 top-20 -right-32" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <FadeIn delay={0} y={20}>
          <div className="flex items-center gap-4 mb-12">
            <span className="eyebrow">01 / About</span>
            <span className="h-px flex-grow bg-line" />
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: heading + bio */}
          <div className="lg:col-span-7">
            <FadeIn delay={0.1} y={30}>
              <h2 className="display text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.05]">
                A developer obsessed with making machines{" "}
                <span className="grad-text">think &amp; act</span>.
              </h2>
            </FadeIn>
            <FadeIn delay={0.2} y={20}>
              <p className="mt-6 text-ink-soft leading-relaxed text-base sm:text-lg">
                I&apos;m a Computer Science student at REVA University who turns ideas into real
                software. My world revolves around DSA, open-source, hackathons, and AI agents.
                I&apos;ve led AI engineering on <span className="font-semibold text-ink">SIDDHI</span> —
                a crime-analytics platform for the Karnataka State Police — shipped{" "}
                <span className="font-semibold text-ink">MediExpiry AI</span> and the{" "}
                <span className="font-semibold text-ink">Kisan Platform</span> (3rd prize), and
                contributed 10+ merged PRs through GSSOC. Every project is a step toward building
                impactful AI automation products — and eventually, my own company.
              </p>
            </FadeIn>

            {/* Skill groups */}
            <div className="mt-10 space-y-5">
              {skillGroups.map((g, i) => (
                <FadeIn key={g.label} delay={0.3 + i * 0.08} y={15}>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted w-28 flex-shrink-0">
                      {g.label}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {g.tags.map((t) => (
                        <span key={t} className="chip">{t}</span>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Right: fact cards */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {facts.map((f, i) => (
                <FadeIn key={f.label} delay={0.25 + i * 0.08} y={20}>
                  <div className="card p-5 h-full">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo/10 to-violet/10 border border-indigo/15 flex items-center justify-center text-indigo mb-4">
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

            <FadeIn delay={0.6} y={20}>
              <button
                onClick={onContactClick}
                className="btn-primary mt-6 w-full rounded-2xl px-6 py-4 text-sm font-semibold cursor-pointer inline-flex items-center justify-center gap-2"
              >
                Let&apos;s build something together →
              </button>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
