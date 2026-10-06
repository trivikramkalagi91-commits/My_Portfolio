"use client";
import React from "react";
import FadeIn from "../FadeIn";
import { ArrowUpRight } from "lucide-react";

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
    desc: "AI crime-analytics platform for the Karnataka State Police — natural-language queries → actionable investigative intelligence.",
    tech: ["Python", "NLP", "AI", "Data Analytics"],
    github: "https://github.com/trivikramkalagi91-commits/SIDDHI.git",
    live: null,
  },
  {
    num: "02",
    category: "Hackathon",
    title: "MediExpiry AI",
    status: "Shipped",
    desc: "Healthcare platform tracking medicine expiry with intelligent alerts — reduces medical waste, deployed on Vercel.",
    tech: ["JavaScript", "AI", "Web App"],
    github: "https://github.com/trivikramkalagi91-commits/MediExpiry.git",
    live: "https://medi-expiry.vercel.app",
  },
  {
    num: "03",
    category: "Hackathon Winner",
    title: "Kisan Platform",
    status: "3rd Prize",
    desc: "Agri-tech platform for farmers — yield estimation, weather guidance, crop insights. 3rd Prize winner.",
    tech: ["JavaScript", "Web", "AgriTech"],
    github: "https://github.com/trivikramkalagi91-commits/Kisan_Platform.git",
    live: "https://kisan-platform-nu.vercel.app",
  },
  {
    num: "04",
    category: "Open Source",
    title: "GSSOC Contributions",
    status: "10+ PRs",
    desc: "10+ merged PRs through GirlScript Summer of Code — UI modules, bug fixes, system integrations.",
    tech: ["Git", "GitHub", "UI", "Automation"],
    github: "https://github.com/trivikramkalagi91-commits",
    live: null,
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative w-full bg-black py-28 md:py-36 overflow-hidden">
      <div className="absolute w-[380px] h-[380px] rounded-full bg-lime/10 blur-[100px] bottom-20 -right-32 pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <FadeIn delay={0} y={20}>
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-lime">03 / Selected Work</span>
            <span className="h-px flex-grow bg-line" />
          </div>
        </FadeIn>

        <FadeIn delay={0.1} y={30}>
          <h2 className="display text-5xl sm:text-6xl lg:text-7xl text-ink mb-14 leading-[0.95]">
            Things I&apos;ve <span className="text-lime">shipped</span>
          </h2>
        </FadeIn>

        <div>
          {projects.map((p, i) => (
            <FadeIn key={p.num} delay={0.15 + i * 0.07} y={20}>
              <a
                href={p.live || p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="proj-row group block px-2 py-10 sm:py-12 cursor-pointer"
              >
                <div className="grid grid-cols-12 gap-4 sm:gap-6 items-center">
                  <span className="col-span-2 sm:col-span-1 font-mono text-sm text-current opacity-50">
                    {p.num}
                  </span>

                  <div className="col-span-10 sm:col-span-6 min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="font-mono text-[10px] uppercase tracking-[0.25em] opacity-60">
                        {p.category}
                      </span>
                      <span className="px-2.5 py-1 rounded-full border border-current/30 font-mono text-[9px] uppercase tracking-wider">
                        {p.status}
                      </span>
                    </div>
                    <h3 className="display text-3xl sm:text-4xl md:text-5xl tracking-wide leading-none">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm sm:text-base opacity-70 leading-relaxed max-w-xl">
                      {p.desc}
                    </p>
                  </div>

                  <div className="col-span-8 sm:col-span-3 flex flex-wrap gap-1.5 sm:justify-end">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-full border border-current/25 font-mono text-[9px] uppercase tracking-wider opacity-80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="col-span-4 sm:col-span-2 flex items-center justify-end gap-3">
                    <span className="hidden md:inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider opacity-70">
                      <GithubIcon size={13} /> Code
                    </span>
                    <ArrowUpRight
                      size={28}
                      className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 flex-shrink-0"
                    />
                  </div>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
