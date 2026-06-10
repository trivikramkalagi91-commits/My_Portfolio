"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import LiveProjectButton from "../LiveProjectButton";
import FadeIn from "../FadeIn";

const projectsData = [
  {
    num: "01",
    category: "Client Project",
    title: "SIDDHI",
    status: "🚧 Currently Building",
    desc: "SIDDHI is an AI-powered crime analytics platform designed for the Karnataka State Police. The platform transforms natural language queries into actionable investigative intelligence through multiple intelligence layers, helping law enforcement analyze patterns, investigate cases, and generate insights more efficiently.",
    tech: ["Python", "AI", "Data Analytics", "NLP"],
    github: "https://github.com/trivikramkalagi91-commits/SIDDHI.git",
    liveDemo: null,
    infoList: [
      { label: "Role", value: "Lead AI Engineer" },
      { label: "Client", value: "Karnataka State Police" },
      { label: "Focus", value: "Pattern Analytics & NLP" },
      { label: "Scope", value: "Actionable Intel Layers" }
    ],
    images: {
      leftTop: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
      leftBottom: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
      right: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85",
    },
  },
  {
    num: "02",
    category: "Hackathon Project",
    title: "MediExpiry AI",
    status: "✅ Completed",
    desc: "MediExpiry AI is a healthcare-focused platform that helps users track medicine expiry dates and receive intelligent alerts and reminders. It was built as a hackathon project to solve medical waste and alert patients about expiring prescriptions.",
    tech: ["JavaScript", "AI", "Web Development"],
    github: "https://github.com/trivikramkalagi91-commits/MediExpiry.git",
    liveDemo: "https://medi-expiry.vercel.app",
    infoList: [
      { label: "Role", value: "Fullstack Developer" },
      { label: "Event", value: "Healthcare Hackathon" },
      { label: "Key Feature", value: "Intelligent Expiry Alerts" },
      { label: "Deployment", value: "Vercel Serverless" }
    ],
    images: {
      leftTop: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
      leftBottom: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
      right: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85",
    },
  },
  {
    num: "03",
    category: "Hackathon Winner",
    title: "Kisan Platform",
    status: "🏆 3rd Prize Winner",
    desc: "Kisan Platform is a technology solution built to support farmers through digital tools and services, assisting them in agricultural workflows, yield estimation, and weather-based suggestions. This project secured 3rd Prize in a competitive Hackathon.",
    tech: ["JavaScript", "Web Development"],
    github: "https://github.com/trivikramkalagi91-commits/Kisan_Platform.git",
    liveDemo: "https://kisan-platform-nu.vercel.app",
    infoList: [
      { label: "Role", value: "Frontend Lead" },
      { label: "Achievement", value: "3rd Place Winner" },
      { label: "Focus", value: "Yield & Weather Analytics" },
      { label: "Target User", value: "Local Farmers" }
    ],
    images: {
      leftTop: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
      leftBottom: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
      right: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85",
    },
  },
  {
    num: "04",
    category: "Open Source Contributions",
    title: "GSSOC Showcase",
    status: "✨ 10+ Merged PRs",
    desc: "Contributed to multiple real-world repositories through GSSOC, achieving 10+ merged pull requests. Key contributions include building UI modules, fixing bugs, and integrating systems. Actively contributing to community projects.",
    tech: ["Git", "GitHub", "SecDev", "StorySpark AI", "reframe"],
    github: "https://github.com/trivikramkalagi91-commits",
    liveDemo: null,
    isOpenSource: true,
    infoList: [
      { label: "Role", value: "Open Source Contributor" },
      { label: "Program", value: "GirlScript Summer of Code" },
      { label: "Total PRs", value: "10+ Merged" },
      { label: "Focus", value: "UI & Automation Modules" }
    ],
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative w-full bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 pt-24 pb-32 z-20 border-t border-white/5"
    >
      <div className="w-full flex flex-col items-center">
        {/* Section Heading */}
        <div className="mb-20 text-center select-none w-full max-w-5xl px-6 md:px-10">
          <FadeIn delay={0} y={40}>
            <h2
              className="hero-heading font-black uppercase tracking-tight text-center"
              style={{ fontSize: "clamp(2rem, 6.5vw, 80px)", lineHeight: "0.9" }}
            >
              Projects
            </h2>
          </FadeIn>
        </div>

        {/* Stacking Cards Track */}
        <div className="w-full flex flex-col gap-24 relative items-center">
          {projectsData.map((project, idx) => (
            <CardWrapper
              key={project.num}
              project={project}
              index={idx}
              totalCards={projectsData.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface CardWrapperProps {
  project: typeof projectsData[0];
  index: number;
  totalCards: number;
}

function CardWrapper({ project, index, totalCards }: CardWrapperProps) {
  const container = useRef<HTMLDivElement>(null);
  
  // Calculate useScroll targeting this specific card container to scale it down as it scrolls past
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={container}
      className="sticky top-20 sm:top-28 md:top-32 w-full flex items-start justify-center py-4 sm:py-8 px-6 md:px-10"
      style={{
        // Stack cards on top of each other with a top offset
        top: `calc(${80 + index * 28}px)`,
      }}
    >
      <motion.div
        style={{ scale }}
        className="w-full max-w-5xl rounded-[30px] sm:rounded-[40px] md:rounded-[50px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-6 sm:p-8 md:p-10 pb-12 sm:pb-16 md:pb-20 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col gap-6"
      >
        {/* Top Header Row */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6">
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Project Number */}
            <span
              className="font-black text-[#D7E2EA] leading-none select-none"
              style={{ fontSize: "clamp(2rem, 6vw, 72px)" }}
            >
              {project.num}
            </span>

            {/* Title / Category / Status */}
            <div>
              <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                <span className="text-xs sm:text-sm uppercase tracking-widest text-[#D7E2EA]/50 font-bold">
                  {project.category}
                </span>
                {/* Glowing Badge */}
                <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-white/10 border border-white/20 text-[#D7E2EA] shadow-[0_0_10px_rgba(255,255,255,0.05)] animate-pulse">
                  {project.status}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold uppercase text-[#D7E2EA] tracking-wide mt-1">
                {project.title}
              </h3>
            </div>
          </div>
        </div>

        {/* Card Body - Conditional Layout */}
        {project.isOpenSource ? (
          /* Custom open source dashboard split layout */
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 mt-2 w-full items-stretch">
            {/* Left Column: Stats, Graph, Tags & Actions (6 cols) */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <p className="text-[#D7E2EA]/80 text-sm sm:text-base leading-relaxed">
                {project.desc}
              </p>

              {/* Stats & Graph Row */}
              <div className="flex flex-col sm:flex-row gap-4 border-t border-white/5 pt-6">
                {/* Stats Card */}
                <div className="bg-white/[0.02] border border-white/5 rounded-[20px] p-5 flex flex-col justify-between flex-grow sm:w-1/2 min-h-[110px]">
                  <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#D7E2EA]/40 font-semibold">Contribution Stats</span>
                  <div className="flex items-baseline gap-2 my-2">
                    <span className="text-3xl sm:text-4xl font-black text-white">10+</span>
                    <span className="text-xs text-[#D7E2EA]/60 uppercase tracking-widest">Merged PRs</span>
                  </div>
                  <div className="text-[10px] sm:text-xs text-[#D7E2EA]/50 font-mono">
                    GSSOC Contributor &middot; 5+ Issues Resolved
                  </div>
                </div>

                {/* Grid Mini-Graph */}
                <div className="bg-white/[0.02] border border-white/5 rounded-[20px] p-5 flex flex-col justify-between flex-grow sm:w-1/2 min-h-[110px] overflow-hidden">
                  <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#D7E2EA]/40 font-semibold">Activity Graph</span>
                  <div className="grid grid-cols-7 gap-1 my-2 w-full max-w-[200px]">
                    {Array.from({ length: 28 }).map((_, i) => {
                      const intensities = ["bg-white/5", "bg-[#7621B0]/30", "bg-[#B600A8]/45", "bg-[#B600A8]/70"];
                      const color = intensities[Math.floor((i + index) % intensities.length)];
                      return (
                        <div
                          key={i}
                          className={`aspect-square rounded-sm ${color} w-full`}
                        />
                      );
                    })}
                  </div>
                  <span className="text-[9px] text-[#D7E2EA]/40 uppercase tracking-widest font-mono">
                    Active Commits &middot; LeetCode DSA
                  </span>
                </div>
              </div>

              {/* Tech Tags & Action Buttons Row */}
              <div className="flex flex-col gap-5 border-t border-white/5 pt-5 items-center">
                <div className="flex flex-wrap gap-2 justify-center">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-[#D7E2EA]/85 font-mono uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 justify-center">
                  <LiveProjectButton
                    href={project.github}
                    label="GitHub Code"
                    className="text-xs sm:text-sm py-2 px-5 sm:py-2.5 sm:px-6"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Target Repositories List (4 cols) */}
            <div className="lg:col-span-4 flex">
              <div className="w-full bg-white/[0.02] border border-white/5 rounded-[24px] p-5 flex flex-col justify-between h-full min-h-[300px]">
                <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/40 mb-4 block font-semibold">
                  Target Repositories
                </span>
                
                <div className="space-y-4 flex-grow flex flex-col justify-center">
                  {[
                    { name: "SecDev", desc: "Security and developers automation utilities" },
                    { name: "StorySpark AI", desc: "Generative storytelling with prompt templates" },
                    { name: "reframe", desc: "UI engineering framework optimizations" },
                    { name: "Civic Pulse BBMP 2026", desc: "Citizen metrics aggregation platform" },
                  ].map((repo, rIdx) => (
                    <div key={rIdx} className="flex items-start justify-between border-b border-white/5 pb-3 last:border-0 last:pb-0">
                      <div className="pr-2">
                        <span className="text-sm sm:text-base font-semibold text-white uppercase tracking-wide">
                          {repo.name}
                        </span>
                        <p className="text-xs text-[#D7E2EA]/50 mt-0.5 leading-tight">{repo.desc}</p>
                      </div>
                      <span className="px-2.5 py-0.5 text-[10px] sm:text-xs font-mono text-green-400 bg-green-500/10 rounded-full flex-shrink-0">
                        Merged
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Card Body - Full Width Layout for Standard Projects (No Images) */
          <div className="flex flex-col gap-6 w-full mt-2">
            {/* Description */}
            <p className="text-[#D7E2EA]/80 text-sm sm:text-base leading-relaxed max-w-4xl">
              {project.desc}
            </p>

            {/* Structured Project Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/5 pt-6">
              {project.infoList && project.infoList.map((info) => (
                <div key={info.label} className="flex flex-col gap-1">
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#D7E2EA]/40 font-semibold">
                    {info.label}
                  </span>
                  <span className="text-xs sm:text-sm text-[#D7E2EA]/95 font-medium leading-tight">
                    {info.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Tech Tags & CTA Buttons Stack */}
            <div className="flex flex-col gap-6 border-t border-white/5 pt-6 items-center">
              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 justify-center">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-[#D7E2EA]/85 font-mono uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-4 justify-center">
                {project.github && (
                  <LiveProjectButton
                    href={project.github}
                    label="GitHub Code"
                    className="text-xs sm:text-sm py-2 px-5 sm:py-2.5 sm:px-6"
                  />
                )}
                {project.liveDemo && (
                  <LiveProjectButton
                    href={project.liveDemo}
                    label="Live Demo"
                    className="text-xs sm:text-sm py-2 px-5 sm:py-2.5 sm:px-6"
                  />
                )}
                {!project.github && !project.liveDemo && (
                  <LiveProjectButton
                    href={project.github}
                    label="View Profile"
                    className="text-xs sm:text-sm py-2 px-5 sm:py-2.5 sm:px-6"
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
