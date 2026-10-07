"use client";
import React from "react";
import FadeIn from "../FadeIn";
import { ChevronDown } from "lucide-react";

const focusAreas = [
  {
    num: "01",
    title: "DSA & Problem Solving",
    desc: "Practicing core data structures & algorithms — arrays, searching, binary search, sorting, recursion, prefix-sum concepts, and Kadane's algorithm for placement preparation.",
    tags: ["Python", "C++", "DSA", "Problem Solving"],
  },
  {
    num: "02",
    title: "Python & Data Foundations",
    desc: "Solid mastery in Python fundamentals, advanced Python concepts, OOP, file handling, and exception handling. Working with NumPy and currently learning Pandas.",
    tags: ["Python", "OOP", "File Handling", "NumPy", "Pandas (Learning)"],
  },
  {
    num: "03",
    title: "Building AI-Powered Products",
    desc: "Developing backend software and practical AI applications — such as Litigo (3rd Place YC x Moss Sprint), crime analytics solutions, and healthcare tools.",
    tags: ["Python", "AI Products", "Backend Logic", "Software Projects"],
  },
  {
    num: "04",
    title: "Open Source & Hackathons",
    desc: "Active open-source participant in GirlScript Summer of Code 2026 (10+ merged PRs) and competitive hackathon builder across sprint challenges and IoT expos.",
    tags: ["GSSOC 2026", "Git", "GitHub", "Open Source", "Hackathons"],
  },
];

export default function ServicesSection() {
  return (
    <section id="focus" className="relative w-full bg-panel border-y border-line py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <FadeIn delay={0} y={20}>
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-lime">02 / Focus &amp; Capabilities</span>
            <span className="h-px flex-grow bg-line" />
          </div>
        </FadeIn>

        <FadeIn delay={0.1} y={30}>
          <h2 className="display text-5xl sm:text-6xl lg:text-7xl text-ink mb-14 leading-[0.95]">
            What I <span className="text-lime">focus</span> on &amp; build
          </h2>
        </FadeIn>

        <div>
          {focusAreas.map((s, i) => (
            <FadeIn key={s.num} delay={0.15 + i * 0.07} y={20}>
              <div className={`acc-row group ${i === 0 ? "is-open" : ""}`}>
                <div className="flex items-center gap-5 sm:gap-8 py-9 sm:py-11 px-2 cursor-default">
                  <span className="font-mono text-sm text-current opacity-60 w-8 flex-shrink-0">
                    {s.num}
                  </span>
                  <h3 className="display text-2xl sm:text-3xl md:text-4xl flex-grow tracking-wide">
                    {s.title}
                  </h3>
                  <ChevronDown size={22} className="acc-chevron flex-shrink-0 opacity-70" />
                </div>
                <div className="acc-body px-2 sm:pl-16">
                  <p className="text-sm sm:text-base leading-relaxed max-w-2xl opacity-80 pb-4">
                    {s.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full border border-current/30 font-mono text-[10px] uppercase tracking-wider opacity-80"
                      >
                        {t}
                      </span>
                    ))}
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
