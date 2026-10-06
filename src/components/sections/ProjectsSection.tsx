"use client";
import React from "react";
import FadeIn from "../FadeIn";
import { ExternalLink, Star } from "lucide-react";

const GithubIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const projects = [
  {
    num: "01",
    category: "Client Project",
    title: "SIDDHI",
    status: "In Progress",
    desc: "AI-powered crime-analytics platform for the Karnataka State Police. Transforms natural-language queries into actionable investigative intelligence through layered analytics.",
    tech: ["Python", "NLP", "AI", "Data Analytics"],
    github: "https://github.com/trivikramkalagi91-commits/SIDDHI.git",
    live: null,
    role: "Lead AI Engineer",
    gradient: "from-indigo-500 via-violet-500 to-purple-600",
  },
  {
    num: "02",
    category: "Hackathon Project",
    title: "MediExpiry AI",
    status: "Shipped",
    desc: "Healthcare platform tracking medicine expiry with intelligent alerts and reminders. Reduces medical waste and keeps patients safe from expired prescriptions.",
    tech: ["JavaScript", "AI", "Web App"],
    github: "https://github.com/trivikramkalagi91-commits/MediExpiry.git",
    live: "https://medi-expiry.vercel.app",
    role: "Full-Stack Developer",
    gradient: "from-cyan-500 via-sky-500 to-blue-600",
  },
  {
    num: "03",
    category: "Hackathon Winner",
    title: "Kisan Platform",
    status: "3rd Prize",
    desc: "Agri-tech platform supporting farmers with yield estimation, weather-based guidance, and crop insights. Secured 3rd Prize in a competitive hackathon.",
    tech: ["JavaScript", "Web App", "AgriTech"],
    github: "https://github.com/trivikramkalagi91-commits/Kisan_Platform.git",
    live: "https://kisan-platform-nu.vercel.app",
    role: "Frontend Lead",
    gradient: "from-emerald-500 via-teal-500 to-cyan-600",
  },
  {
    num: "04",
    category: "Open Source",
    title: "GSSOC Contributions",
    status: "10+ Merged PRs",
    desc: "Contributed to real-world repos through GirlScript Summer of Code — UI modules, bug fixes, and system integrations across SecDev, StorySpark AI, and reframe.",
    tech: ["Git", "GitHub", "UI", "Automation"],
    github: "https://github.com/trivikramkalagi91-commits",
    live: null,
    role: "Open-Source Contributor",
    gradient: "from-amber-500 via-orange-500 to-rose-500",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative w-full bg-bg py-24 md:py-32 overflow-hidden">
      <div className="orb w-[380px] h-[380px] bg-cyan/15 bottom-20 -left-32" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <FadeIn delay={0} y={20}>
          <div className="flex items-center gap-4 mb-6">
            <span className="eyebrow">03 / Selected Work</span>
            <span className="h-px flex-grow bg-line" />
          </div>
        </FadeIn>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <FadeIn delay={0.1} y={30}>
            <h2 className="display text-4xl sm:text-5xl lg:text-6xl text-ink max-w-2xl leading-[1.05]">
              Projects that <span className="grad-text">solved real problems</span>.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2} y={20}>
            <p className="text-ink-soft max-w-sm text-sm leading-relaxed">
              Client work, hackathon builds, and open-source — each shipped and serving real users.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <FadeIn key={p.num} delay={0.15 + i * 0.08} y={30}>
              <div className="card overflow-hidden h-full flex flex-col group">
                {/* Gradient banner */}
                <div className={`relative h-36 bg-gradient-to-br ${p.gradient} overflow-hidden`}>
                  <div className="absolute inset-0 bg-grid opacity-30" />
                  <div className="absolute top-4 left-5 font-mono text-[11px] uppercase tracking-[0.2em] text-white/80">
                    {p.category}
                  </div>
                  <div className="absolute bottom-4 left-5 display text-5xl text-white/25 font-bold select-none">
                    {p.num}
                  </div>
                  <div className="absolute top-4 right-5 inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-3 py-1">
                    <Star size={11} className="text-white" />
                    <span className="text-[10px] font-semibold text-white uppercase tracking-wider">
                      {p.status}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="display text-2xl text-ink mb-2 group-hover:text-indigo transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-ink-soft leading-relaxed flex-grow">{p.desc}</p>

                  <div className="mt-4 flex items-center gap-2 text-xs text-muted">
                    <span className="font-mono uppercase tracking-wider">Role:</span>
                    <span className="font-semibold text-ink-soft">{p.role}</span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span key={t} className="chip !text-[10px] !py-1 !px-2.5">{t}</span>
                    ))}
                  </div>

                  <div className="mt-5 pt-4 border-t border-line flex items-center gap-3">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost rounded-full px-4 py-2 text-xs font-semibold inline-flex items-center gap-1.5"
                    >
                      <GithubIcon size={13} /> Code
                    </a>
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary rounded-full px-4 py-2 text-xs font-semibold inline-flex items-center gap-1.5"
                      >
                        Live Demo <ExternalLink size={12} />
                      </a>
                    )}
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
