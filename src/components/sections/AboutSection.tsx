"use client";
import React from "react";
import FadeIn from "../FadeIn";
import { MapPin, GraduationCap, Code2, BookOpen, Layers } from "lucide-react";

interface AboutSectionProps {
  onContactClick: () => void;
}

const skillCategories = [
  {
    category: "PROGRAMMING",
    skills: ["Python", "C", "C++"],
  },
  {
    category: "PYTHON MASTERY",
    skills: ["Python Fundamentals", "Advanced Python", "OOP", "File Handling", "Exception Handling"],
  },
  {
    category: "DATA & ANALYTICS",
    skills: ["NumPy", "Pandas (Currently Learning)"],
  },
  {
    category: "DSA & PROBLEM SOLVING",
    skills: [
      "Arrays & Manipulation",
      "Searching",
      "Binary Search",
      "Sorting",
      "Recursion Basics",
      "Prefix-Sum Concepts",
      "Kadane's Algorithm",
      "Problem-Solving Patterns",
    ],
  },
];

const facts = [
  { icon: MapPin, label: "Location", value: "Bengaluru, India" },
  { icon: GraduationCap, label: "Education", value: "B.Tech CSE · REVA University" },
  { icon: Code2, label: "Open Source", value: "GSSOC 2026 · 10+ Merged PRs" },
  { icon: BookOpen, label: "Current Focus", value: "DSA & Problem Solving (Placement)" },
];

export default function AboutSection({ onContactClick }: AboutSectionProps) {
  return (
    <section id="about" className="relative w-full bg-black py-24 md:py-32 overflow-hidden">
      <div className="absolute w-[360px] h-[360px] rounded-full bg-lime/8 blur-[100px] top-20 -left-32 pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <FadeIn delay={0} y={20}>
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-lime">01 / About &amp; Skills</span>
            <span className="h-px flex-grow bg-line" />
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Bio & Skills */}
          <div className="lg:col-span-7">
            <FadeIn delay={0.1} y={30}>
              <h2 className="display text-5xl sm:text-6xl lg:text-7xl text-ink leading-[0.95]">
                Focused on <span className="text-lime">DSA</span>, Python &amp; product building.
              </h2>
            </FadeIn>
            <FadeIn delay={0.2} y={20}>
              <p className="mt-6 text-ink/70 leading-relaxed text-base sm:text-lg max-w-2xl">
                Computer Science student at REVA University with a strong foundation in Python programming,
                data structures, algorithms, and software development. I build practical AI-powered software projects,
                compete in hackathons (securing 3rd place in Litigo at the YC Fall 2026 × Moss Sprint), and contribute to open-source through GSSOC 2026.
              </p>
            </FadeIn>

            {/* Categorized Skills Section */}
            <FadeIn delay={0.3} y={20}>
              <div className="mt-10 space-y-6 border-t border-line pt-8">
                <div className="flex items-center gap-2 mb-2">
                  <Layers size={16} className="text-lime" />
                  <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-lime font-bold">
                    My Actual Learned Skills
                  </h3>
                </div>

                {skillCategories.map((sc) => (
                  <div key={sc.category} className="space-y-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted block">
                      {sc.category}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {sc.skills.map((s) => {
                        const isLearning = s.includes("Learning");
                        return (
                          <span
                            key={s}
                            className={`px-3.5 py-1.5 border rounded-full font-mono text-[11px] transition-colors cursor-default ${
                              isLearning
                                ? "border-lime/60 bg-lime/10 text-lime font-medium"
                                : "border-line text-ink/80 hover:border-lime hover:text-lime"
                            }`}
                          >
                            {s}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                ))}

                {/* Transparency Note */}
                <div className="mt-6 p-4 rounded-xl border border-line bg-panel/60 text-xs text-muted leading-relaxed font-mono">
                  💡 <span className="text-ink font-semibold">Note:</span> Frameworks and tools used in specific projects (e.g. Chrome Extensions, WebAssembly, LiveKit, Next.js, etc.) are listed under project stacks to maintain strict accuracy regarding my core learned skills.
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4} y={20}>
              <button
                onClick={onContactClick}
                className="btn-lime mt-8 rounded-full px-7 py-3.5 text-xs font-bold uppercase tracking-wider cursor-pointer inline-flex items-center gap-2"
              >
                Let&apos;s connect →
              </button>
            </FadeIn>
          </div>

          {/* Right Column: Quick Facts */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 content-start">
            {facts.map((f, i) => (
              <FadeIn key={f.label} delay={0.25 + i * 0.08} y={20}>
                <div className="border border-line rounded-2xl p-5 bg-panel hover:border-lime/50 transition-colors h-full">
                  <div className="w-10 h-10 rounded-xl bg-lime/10 border border-lime/20 flex items-center justify-center text-lime mb-4">
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
        </div>
      </div>
    </section>
  );
}
