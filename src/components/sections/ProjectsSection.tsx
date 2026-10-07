"use client";
import React from "react";
import FadeIn from "../FadeIn";
import { ArrowUpRight, Award, CheckCircle2, ShieldCheck } from "lucide-react";

const GithubIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const projects = [
  {
    num: "01",
    category: "Hackathon Winner · 3rd Place",
    title: "Litigo",
    status: "3rd Place — ₹9,500 Prize",
    achievement: "3rd Place — YC Fall 2026 × Moss: The Zero-Latency Builder Sprint",
    role: "Team Leader — Core Backend / Product Building",
    desc: "Built during the YC Fall 2026 × Moss Zero-Latency Builder Sprint. Led team in architecting zero-latency logic and core backend workflows.",
    tech: ["Chrome Extension", "Manifest V3", "Next.js", "WebAssembly", "LiveKit", "IndexedDB"],
    github: "https://github.com/trivikramkalagi91-commits/Litigo",
    live: "https://litigo-ai.vercel.app",
    certificateText: "Certificate available",
    certificatePath: null, // No public asset URL in repo; displaying honest verified badge
  },
  {
    num: "02",
    category: "IoT Expo Winner · 1st Prize",
    title: "IoT Multi-Parameter Health Tracking System",
    status: "1st Prize Winner",
    achievement: "1st Prize — CSIT Department IoT Expo",
    role: "Lead Developer — Hardware & Software Integration",
    desc: "Multi-parameter IoT health monitoring system tracking vital health parameters in real-time with automated alert thresholds.",
    tech: ["Python", "IoT Sensors", "Microcontroller", "Data Analytics"],
    github: "https://github.com/trivikramkalagi91-commits",
    live: null,
    certificateText: "Certificate available",
    certificatePath: null,
  },
  {
    num: "03",
    category: "Hackathon · 2nd Place",
    title: "College 3-Hour Rapid Sprint",
    status: "2nd Place",
    achievement: "2nd Place — College 3-Hour Hackathon",
    role: "Team Member / Prototyping Developer",
    desc: "Rapid prototyping challenge — built and demonstrated a functioning software solution under strict 3-hour time constraints.",
    tech: ["Python", "Web Stack", "Rapid Prototyping"],
    github: "https://github.com/trivikramkalagi91-commits",
    live: null,
    certificateText: "Certificate available",
    certificatePath: null,
  },
  {
    num: "04",
    category: "Hackathon · Top 50",
    title: "Tathya (Scrape-Verse)",
    status: "Top 50 Selection",
    achievement: "Selected in Top 50 — Scrape-Verse Hackathon 2026",
    role: "Core Developer",
    desc: "Data extraction and intelligence platform built for Scrape-Verse Hackathon 2026, selected among the Top 50 projects overall.",
    tech: ["Python", "Data Scraping", "Data Parsing"],
    github: "https://github.com/trivikramkalagi91-commits",
    live: null,
    certificateText: "Certificate available",
    certificatePath: null,
  },
  {
    num: "05",
    category: "Open Source",
    title: "GirlScript Summer of Code 2026",
    status: "10+ Merged PRs",
    achievement: "GSSOC 2026 Open-Source Participation",
    role: "Open Source Contributor",
    desc: "Merged 10+ pull requests across open-source repositories — implemented UI components, resolved system bugs, and added automated code validation.",
    tech: ["Git", "GitHub", "Python", "Open Source"],
    github: "https://github.com/trivikramkalagi91-commits",
    live: null,
    certificateText: "Participation Certificate Available",
    certificatePath: null,
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative w-full bg-black py-28 md:py-36 overflow-hidden">
      <div className="absolute w-[380px] h-[380px] rounded-full bg-lime/10 blur-[100px] bottom-20 -right-32 pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <FadeIn delay={0} y={20}>
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-lime">03 / Projects &amp; Proofs</span>
            <span className="h-px flex-grow bg-line" />
          </div>
        </FadeIn>

        <FadeIn delay={0.1} y={30}>
          <h2 className="display text-5xl sm:text-6xl lg:text-7xl text-ink mb-14 leading-[0.95]">
            Projects &amp; <span className="text-lime">Achievements</span>
          </h2>
        </FadeIn>

        <div className="space-y-8">
          {projects.map((p, i) => (
            <FadeIn key={p.num} delay={0.15 + i * 0.07} y={20}>
              <div className="border border-line rounded-2xl bg-panel p-6 sm:p-8 hover:border-lime/50 transition-colors">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Left Column: Number & Title Details */}
                  <div className="lg:col-span-8 space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-mono text-sm text-lime font-bold">
                        {p.num}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
                        {p.category}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full border border-lime/40 bg-lime/10 font-mono text-[10px] text-lime font-semibold">
                        {p.status}
                      </span>
                    </div>

                    <div>
                      <h3 className="display text-3xl sm:text-4xl text-ink tracking-wide">
                        {p.title}
                      </h3>
                      <div className="font-mono text-xs text-lime/90 mt-1 flex items-center gap-1.5">
                        <Award size={14} /> {p.achievement}
                      </div>
                      <div className="font-mono text-xs text-muted mt-1">
                        <span className="text-ink/80 font-semibold">Role:</span> {p.role}
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-ink/70 leading-relaxed max-w-2xl">
                      {p.desc}
                    </p>

                    {/* Project Stack (Specific to project, not transferred to personal skills) */}
                    <div className="space-y-1.5 pt-2">
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted block">
                        Project Stack:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {p.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded-full border border-line bg-black font-mono text-[10px] text-ink/80"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Actions & Verified Proof */}
                  <div className="lg:col-span-4 flex flex-col justify-between items-start lg:items-end gap-4 h-full border-t lg:border-t-0 lg:border-l border-line pt-4 lg:pt-0 lg:pl-6">
                    {/* Certificate / Proof Status */}
                    {p.certificateText && (
                      <div className="w-full lg:w-auto">
                        {p.certificatePath ? (
                          <a
                            href={p.certificatePath}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-lime bg-lime/10 text-lime font-mono text-[11px] font-semibold hover:bg-lime hover:text-black transition-colors"
                          >
                            <ShieldCheck size={14} /> View Certificate <ArrowUpRight size={12} />
                          </a>
                        ) : (
                          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-line bg-black text-ink/80 font-mono text-[11px]">
                            <CheckCircle2 size={13} className="text-lime" />
                            <span>{p.certificateText}</span>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Code & Live Demo Links */}
                    <div className="flex flex-wrap items-center gap-3 mt-auto pt-2">
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-outline rounded-full px-4 py-2 text-xs font-mono uppercase tracking-wider inline-flex items-center gap-1.5"
                        >
                          <GithubIcon size={13} /> Code <ArrowUpRight size={11} />
                        </a>
                      )}
                      {p.live && (
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-lime rounded-full px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider inline-flex items-center gap-1.5"
                        >
                          Live Demo <ArrowUpRight size={12} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
