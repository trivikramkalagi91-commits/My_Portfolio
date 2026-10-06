"use client";
import React from "react";
import FadeIn from "../FadeIn";
import { ArrowUpRight } from "lucide-react";

const buildingItems = [
  { num: "01", name: "DSA & Problem Solving", desc: "Sharpening algorithmic thinking through daily LeetCode practice and structured DSA study." },
  { num: "02", name: "Open-Source Contributions", desc: "Shipping real code in public repos — 10+ merged PRs through GSSOC and beyond." },
  { num: "03", name: "AI Agents & Automation", desc: "Designing agentic workflows, terminal agents, and LLM pipelines that do real work." },
  { num: "04", name: "Software Projects", desc: "Taking ideas from whiteboard to production across web, AI, and data platforms." },
  { num: "05", name: "Hackathons", desc: "Building and shipping under pressure — including a 3rd-prize winning agri-tech platform." },
  { num: "06", name: "Future Startup Vision", desc: "Working toward impactful AI automation products — and founding my own company." },
];

export default function ServicesSection() {
  return (
    <section
      id="focus"
      className="relative w-full bg-cream text-cream-ink rounded-t-[40px] sm:rounded-t-[60px] md:rounded-t-[80px] -mt-6 pt-20 md:pt-28 pb-24 md:pb-32 overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-10">
        <FadeIn delay={0} y={20}>
          <div className="flex items-center gap-4 mb-10">
            <span className="font-mono text-xs uppercase tracking-[0.35em] text-accent" style={{ color: "#ff5a1f" }}>
              02 / Focus
            </span>
            <span className="h-px flex-grow bg-cream-ink/15" />
          </div>
        </FadeIn>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 md:mb-20">
          <FadeIn delay={0.1} y={30}>
            <h2 className="display text-6xl sm:text-7xl md:text-8xl leading-[0.9]">
              What I&apos;m
              <br />
              <span className="italic font-light" style={{ color: "#ff5a1f" }}>
                building
              </span>{" "}
              now.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2} y={20}>
            <p className="max-w-xs text-sm text-cream-ink/60 leading-relaxed font-light">
              Six areas where I invest my time today — each one compounds toward
              building intelligent, automated products.
            </p>
          </FadeIn>
        </div>

        {/* Numbered list */}
        <div className="border-t border-cream-ink/15">
          {buildingItems.map((item, idx) => (
            <FadeIn key={item.num} delay={idx * 0.06} y={20}>
              <div className="focus-row group flex items-center gap-6 sm:gap-10 py-7 sm:py-9 border-b border-cream-ink/15 px-2 sm:px-4 cursor-default">
                <span className="font-mono text-sm sm:text-base text-cream-ink/40 group-hover:text-accent transition-colors flex-shrink-0 w-10">
                  {item.num}
                </span>
                <h3 className="display text-2xl sm:text-3xl md:text-4xl flex-grow tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                  {item.name}
                </h3>
                <p className="hidden md:block max-w-xs text-sm text-cream-ink/55 group-hover:text-bone/70 leading-relaxed font-light">
                  {item.desc}
                </p>
                <ArrowUpRight
                  size={22}
                  className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  style={{ color: "#ff5a1f" }}
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
