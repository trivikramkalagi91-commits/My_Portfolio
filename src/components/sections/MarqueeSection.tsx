"use client";
import React from "react";

const row1 = [
  "AI Agents",
  "Automation",
  "Full-Stack",
  "NLP & Analytics",
  "Open Source",
  "DSA",
  "Hackathons",
  "Python",
  "LLM Orchestration",
];
const row2 = [
  "Next.js",
  "TypeScript",
  "React",
  "Node.js",
  "Tailwind",
  "Git & GitHub",
  "Framer Motion",
  "Vercel",
  "Prompt Engineering",
];

const Ticker = ({ items, reverse = false }: { items: string[]; reverse?: boolean }) => {
  const doubled = [...items, ...items];
  return (
    <div className="w-full overflow-hidden py-3 select-none">
      <div className={`marquee-track ${reverse ? "reverse" : ""} items-center gap-8 pr-8`}>
        {doubled.map((word, i) => (
          <div key={i} className="flex items-center gap-8 flex-shrink-0">
            <span className="display text-5xl sm:text-6xl md:text-7xl text-bone/90 whitespace-nowrap">
              {word}
            </span>
            <span className="text-accent text-4xl sm:text-5xl font-light">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function MarqueeSection() {
  return (
    <section className="w-full bg-ink py-10 border-y border-bone/10 overflow-hidden relative">
      <div className="opacity-90 -rotate-1">
        <Ticker items={row1} />
      </div>
      <div className="opacity-50 rotate-1">
        <Ticker items={row2} reverse />
      </div>
    </section>
  );
}
