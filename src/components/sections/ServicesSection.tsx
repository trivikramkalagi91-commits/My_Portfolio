"use client";
import React from "react";
import FadeIn from "../FadeIn";
import { ChevronDown } from "lucide-react";

const services = [
  {
    num: "01",
    title: "Full-Stack Development",
    desc: "End-to-end web apps with Next.js, React, Node.js — from database to deployed UI. I ship production-ready products fast.",
    tags: ["Next.js", "React", "Node.js", "TypeScript"],
  },
  {
    num: "02",
    title: "AI Agents & Automation",
    desc: "Designing agentic workflows, LLM pipelines, and terminal agents that automate real tasks — with tool-use and orchestration.",
    tags: ["LLMs", "Agentic AI", "Prompt Eng.", "Automation"],
  },
  {
    num: "03",
    title: "Backend & API Development",
    desc: "Robust APIs, databases, and data pipelines that scale. Clean architecture, real integrations, and monitoring.",
    tags: ["Python", "REST APIs", "SQL", "Data"],
  },
  {
    num: "04",
    title: "AI & Automation Consulting",
    desc: "Helping teams identify what to automate, prototype AI features, and integrate LLMs into existing products.",
    tags: ["Prototyping", "LLM Integration", "Workflow"],
  },
];

export default function ServicesSection() {
  return (
    <section id="focus" className="relative w-full bg-panel border-y border-line py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <FadeIn delay={0} y={20}>
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-lime">02 / What I can do</span>
            <span className="h-px flex-grow bg-line" />
          </div>
        </FadeIn>

        <FadeIn delay={0.1} y={30}>
          <h2 className="display text-5xl sm:text-6xl lg:text-7xl text-ink mb-14 leading-[0.95]">
            What I can <span className="text-lime">do</span> for you
          </h2>
        </FadeIn>

        <div>
          {services.map((s, i) => (
            <FadeIn key={s.num} delay={0.15 + i * 0.07} y={20}>
              <div className={`acc-row group ${i === 0 ? "is-open" : ""}`}>
                <div className="flex items-center gap-5 sm:gap-8 py-7 sm:py-9 px-2 cursor-default">
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
