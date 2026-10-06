"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "../FadeIn";
import { ExternalLink, Star } from "lucide-react";

const GithubIcon = ({ size = 13 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const projectsData = [
  {
    num: "01",
    category: "Client Project",
    title: "SIDDHI",
    status: "In Progress",
    desc: "An AI-powered crime-analytics platform for the Karnataka State Police. SIDDHI turns natural-language queries into actionable investigative intelligence through layered analytics — pattern detection, case investigation, and insight generation.",
    tech: ["Python", "NLP", "AI", "Data Analytics"],
    github: "https://github.com/trivikramkalagi91-commits/SIDDHI.git",
    liveDemo: null,
    infoList: [
      { label: "Role", value: "Lead AI Engineer" },
      { label: "Client", value: "Karnataka State Police" },
      { label: "Focus", value: "Pattern Analytics & NLP" },
      { label: "Scope", value: "Actionable Intel Layers" },
    ],
  },
  {
    num: "02",
    category: "Hackathon Project",
    title: "MediExpiry AI",
    status: "Shipped",
    desc: "A healthcare platform that tracks medicine expiry dates and sends intelligent alerts and reminders. Built to reduce medical waste and keep patients safe from expired prescriptions — deployed on Vercel.",
    tech: ["JavaScript", "AI", "Web App"],
    github: "https://github.com/trivikramkalagi91-commits/MediExpiry.git",
    liveDemo: "https://medi-expiry.vercel.app",
    infoList: [
      { label: "Role", value: "Full-Stack Developer" },
      { label: "Event", value: "Healthcare Hackathon" },
      { label: "Key Feature", value: "Intelligent Expiry Alerts" },
      { label: "Deployment", value: "Vercel Serverless" },
    ],
  },
  {
    num: "03",
    category: "Hackathon Winner",
    title: "Kisan Platform",
    status: "3rd Prize",
    desc: "A tech platform supporting farmers with digital agricultural workflows — yield estimation, weather-based guidance, and crop insights. Secured 3rd Prize in a competitive hackathon.",
    tech: ["JavaScript", "Web App", "AgriTech"],
    github: "https://github.com/trivikramkalagi91-commits/Kisan_Platform.git",
    liveDemo: "https://kisan-platform-nu.vercel.app",
    infoList: [
      { label: "Role", value: "Frontend Lead" },
      { label: "Achievement", value: "3rd Place Winner" },
      { label: "Focus", value: "Yield & Weather Analytics" },
      { label: "User", value: "Local Farmers" },
    ],
  },
  {
    num: "04",
    category: "Open Source",
    title: "GSSOC Contributions",
    status: "10+ Merged PRs",
    desc: "Contributed to real-world repositories through GirlScript Summer of Code — building UI modules, fixing bugs, and integrating systems across projects like SecDev, StorySpark AI, and reframe.",
    tech: ["Git", "GitHub", "SecDev", "StorySpark AI", "reframe"],
    github: "https://github.com/trivikramkalagi91-commits",
    liveDemo: null,
    infoList: [
      { label: "Role", value: "Open-Source Contributor" },
      { label: "Program", value: "GirlScript Summer of Code" },
      { label: "Total PRs", value: "10+ Merged" },
      { label: "Focus", value: "UI & Automation Modules" },
    ],
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative w-full bg-ink rounded-t-[40px] sm:rounded-t-[60px] md:rounded-t-[80px] -mt-6 pt-20 md:pt-28 pb-32 z-20 border-t border-bone/10"
    >
      <div className="w-full flex flex-col items-center">
        <div className="w-full max-w-6xl px-6 md:px-10 mb-16 md:mb-24">
          <FadeIn delay={0} y={20}>
            <div className="flex items-center gap-4 mb-10">
              <span className="font-mono text-xs uppercase tracking-[0.35em] text-accent">03 / Selected Work</span>
              <span className="h-px flex-grow bg-bone/15" />
            </div>
          </FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <FadeIn delay={0.1} y={30}>
              <h2 className="display text-6xl sm:text-7xl md:text-8xl text-bone leading-[0.9]">
                Things I&apos;ve
                <br />
                <span className="display-italic">shipped</span>.
              </h2>
            </FadeIn>
            <FadeIn delay={0.2} y={20}>
              <p className="max-w-xs text-sm text-bone/55 leading-relaxed font-light">
                A mix of client work, hackathon builds, and open-source — each
                one solved a real problem for real people.
              </p>
            </FadeIn>
          </div>
        </div>

        <div className="w-full flex flex-col items-center relative">
          {projectsData.map((project, idx) => (
            <CardWrapper key={project.num} project={project} index={idx} totalCards={projectsData.length} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface CardWrapperProps {
  project: (typeof projectsData)[0];
  index: number;
  totalCards: number;
}

function CardWrapper({ project, index, totalCards }: CardWrapperProps) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const targetScale = 1 - (totalCards - 1 - index) * 0.035;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={container}
      className="sticky w-full flex items-start justify-center px-6 md:px-10"
      style={{ top: `calc(${90 + index * 30}px)` }}
    >
      <motion.div
        style={{ scale }}
        className="project-card w-full max-w-5xl rounded-[32px] sm:rounded-[40px] border border-bone/15 bg-ink-soft p-6 sm:p-8 md:p-10 pb-10 sm:pb-12 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col gap-6"
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-bone/10 pb-6">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="display text-5xl sm:text-6xl md:text-7xl text-stroke leading-none select-none">
              {project.num}
            </span>
            <div>
              <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-bone-dim">
                  {project.category}
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-accent-soft border border-accent/30 text-accent">
                  <Star size={10} />
                  {project.status}
                </span>
              </div>
              <h3 className="display text-2xl sm:text-3xl md:text-4xl text-bone mt-1.5 tracking-tight">
                {project.title}
              </h3>
            </div>
          </div>
        </div>

        {/* Body */}
        <p className="text-bone/70 text-sm sm:text-base leading-relaxed max-w-3xl font-light">
          {project.desc}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 border-t border-bone/10 pt-6">
          {project.infoList.map((info) => (
            <div key={info.label} className="flex flex-col gap-1">
              <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-bone-dim">
                {info.label}
              </span>
              <span className="text-xs sm:text-sm text-bone/90 font-medium leading-tight">
                {info.value}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 border-t border-bone/10 pt-6">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-bone/5 border border-bone/10 rounded-full text-[11px] font-mono text-bone/80 uppercase tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost rounded-full px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.15em] inline-flex items-center gap-2"
            >
              <GithubIcon size={13} /> Code
            </a>
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary rounded-full px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.15em] font-semibold inline-flex items-center gap-2"
              >
                Live <ExternalLink size={12} />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
