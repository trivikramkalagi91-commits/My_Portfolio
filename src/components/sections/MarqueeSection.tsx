"use client";
import React from "react";

const items = [
  "AI Agents", "LLM Orchestration", "Automation", "Full-Stack", "NLP",
  "Python", "Next.js", "TypeScript", "Open Source", "Data Analytics",
  "Prompt Engineering", "Hackathons",
];

export default function MarqueeSection() {
  const doubled = [...items, ...items];
  return (
    <section className="w-full bg-surface border-y border-line py-5 overflow-hidden relative">
      <div className="marquee-track items-center gap-10 pr-10">
        {doubled.map((w, i) => (
          <div key={i} className="flex items-center gap-10 flex-shrink-0">
            <span className="display text-2xl sm:text-3xl text-ink/80 whitespace-nowrap">{w}</span>
            <span className="grad-text text-xl font-bold">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
}
