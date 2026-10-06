"use client";
import React from "react";
import FadeIn from "../FadeIn";
import { Brain, Code2, Bot, Database, GitPullRequest, Trophy } from "lucide-react";

const capabilities = [
  {
    icon: Bot,
    title: "AI Agents & Automation",
    desc: "Designing agentic workflows, terminal agents, and LLM pipelines that execute real tasks end-to-end.",
    tag: "Core Focus",
  },
  {
    icon: Brain,
    title: "NLP & Data Analytics",
    desc: "Turning unstructured data and natural-language queries into actionable intelligence and patterns.",
    tag: "SIDDHI",
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    desc: "Shipping production web apps with Next.js, React, Node.js — from whiteboard to deployment.",
    tag: "Web",
  },
  {
    icon: Database,
    title: "Data & Backend",
    desc: "Building robust APIs, databases, and analytics layers that scale with the product.",
    tag: "Backend",
  },
  {
    icon: GitPullRequest,
    title: "Open-Source Contribution",
    desc: "10+ merged PRs through GSSOC — UI modules, bug fixes, and system integrations in real repos.",
    tag: "GSSOC",
  },
  {
    icon: Trophy,
    title: "Hackathon Delivery",
    desc: "Thriving under pressure — ideate, build, and ship polished solutions in 48 hours (3rd-prize winner).",
    tag: "Winner",
  },
];

export default function ServicesSection() {
  return (
    <section id="focus" className="relative w-full bg-surface border-y border-line py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <FadeIn delay={0} y={20}>
          <div className="flex items-center gap-4 mb-6">
            <span className="eyebrow">02 / Capabilities</span>
            <span className="h-px flex-grow bg-line" />
          </div>
        </FadeIn>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <FadeIn delay={0.1} y={30}>
            <h2 className="display text-4xl sm:text-5xl lg:text-6xl text-ink max-w-2xl leading-[1.05]">
              What I bring to <span className="grad-text">your team</span>.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2} y={20}>
            <p className="text-ink-soft max-w-sm text-sm leading-relaxed">
              Six areas where I add immediate value — blending AI engineering with full-stack
              shipping speed.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {capabilities.map((c, i) => (
            <FadeIn key={c.title} delay={0.15 + i * 0.07} y={25}>
              <div className="card p-7 h-full flex flex-col group">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo to-violet flex items-center justify-center text-white shadow-lg shadow-indigo/30 group-hover:scale-110 transition-transform duration-300">
                    <c.icon size={22} />
                  </div>
                  <span className="chip !text-[10px] !py-1 !px-3">{c.tag}</span>
                </div>
                <h3 className="display text-xl text-ink mb-2">{c.title}</h3>
                <p className="text-sm text-ink-soft leading-relaxed flex-grow">{c.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
