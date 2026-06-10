"use client";

import React, { useEffect, useRef } from "react";
import { Terminal, GitBranch, Cpu, Database, CheckCircle, Award } from "lucide-react";

// Row 1 AI Tech Stack Modules
const row1Modules = [
  {
    icon: <Terminal size={18} className="text-green-400" />,
    title: "tvk-agent ~ init",
    body: (
      <div className="font-mono text-xs text-green-400/80 mt-2 space-y-1">
        <div>$ python -m siddhi --detect-crime</div>
        <div className="text-white/40">&gt; Loading police analytics layer...</div>
        <div className="text-green-500/90">&gt; Pattern matched in Zone 4.</div>
      </div>
    ),
    tag: "Crime Analytics",
  },
  {
    icon: <Cpu size={18} className="text-purple-400" />,
    title: "LLM Orchestrator",
    body: (
      <div className="flex items-center gap-2 mt-4 text-xs font-mono text-[#D7E2EA]/70">
        <span className="px-2 py-1 bg-white/5 border border-white/10 rounded">Query</span>
        <span className="text-[#D7E2EA]/30">&rarr;</span>
        <span className="px-2 py-1 bg-purple-500/10 border border-purple-500/20 text-purple-300 rounded font-bold">AgentLoop</span>
        <span className="text-[#D7E2EA]/30">&rarr;</span>
        <span className="px-2 py-1 bg-white/5 border border-white/10 rounded">ToolCall</span>
      </div>
    ),
    tag: "Agentic AI",
  },
  {
    icon: <Database size={18} className="text-[#B600A8]" />,
    title: "AI Cost Analyzer",
    body: (
      <div className="mt-2 space-y-2">
        <div className="flex justify-between items-center text-xs">
          <span className="text-[#D7E2EA]/60">Token Savings</span>
          <span className="text-green-400 font-bold font-mono">+42.8%</span>
        </div>
        <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
          <div className="bg-gradient-to-r from-[#B600A8] to-[#7621B0] h-full w-[85%]" />
        </div>
      </div>
    ),
    tag: "Optimization",
  },
  {
    icon: <GitBranch size={18} className="text-blue-400" />,
    title: "GSSOC Contribution",
    body: (
      <div className="mt-2 space-y-1 text-xs">
        <div className="flex justify-between text-[#D7E2EA]/60 font-mono">
          <span>PR #1402 [SecDev]</span>
          <span className="text-green-400">Merged</span>
        </div>
        <p className="text-[#D7E2EA]/50 truncate text-[11px]">Added automated code formatting validation.</p>
      </div>
    ),
    tag: "Open Source",
  },
];

// Row 2 AI Tech Stack Modules
const row2Modules = [
  {
    icon: <CheckCircle size={18} className="text-[#BE4C00]" />,
    title: "MediExpiry AI",
    body: (
      <div className="mt-2 space-y-1 font-mono text-xs">
        <div className="text-[#BE4C00]/80">reminders.schedule()</div>
        <div className="text-[#D7E2EA]/40">cron = &quot;0 9 * * *&quot;</div>
        <div className="text-green-400">&gt; Status: Reminders Active</div>
      </div>
    ),
    tag: "HealthTech",
  },
  {
    icon: <Award size={18} className="text-yellow-400" />,
    title: "Kisan Platform",
    body: (
      <div className="mt-2 flex items-center gap-3">
        <div className="h-8 w-8 rounded-lg bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 font-bold text-sm">
          3rd
        </div>
        <div>
          <div className="text-xs font-semibold text-white">Hackathon Winner</div>
          <p className="text-[10px] text-[#D7E2EA]/50">Secured 3rd Prize overall</p>
        </div>
      </div>
    ),
    tag: "Smart Agri",
  },
  {
    icon: <Cpu size={18} className="text-emerald-400" />,
    title: "BST Visualizer",
    body: (
      <div className="mt-3 flex items-center justify-center gap-4 text-[10px] font-mono">
        <div className="h-6 w-6 rounded-full border border-white/20 flex items-center justify-center bg-white/5">50</div>
        <div className="text-white/30">/ \</div>
        <div className="h-6 w-6 rounded-full border border-emerald-400/40 flex items-center justify-center bg-emerald-500/10 text-emerald-300">25</div>
        <div className="h-6 w-6 rounded-full border border-white/20 flex items-center justify-center bg-white/5">75</div>
      </div>
    ),
    tag: "DSA Practice",
  },
  {
    icon: <Database size={18} className="text-[#7621B0]" />,
    title: "Civic Pulse BBMP",
    body: (
      <div className="mt-2 font-mono text-[11px] text-[#D7E2EA]/70">
        <div className="flex justify-between">
          <span>Complaints Analyzed</span>
          <span className="text-white font-bold">1.2k</span>
        </div>
        <div className="text-green-400 mt-1">&gt; Processing BBMP datasets...</div>
      </div>
    ),
    tag: "Big Data",
  },
];

// Tripling arrays for seamless infinite horizontal scrolling
const row1Tripled = [...row1Modules, ...row1Modules, ...row1Modules];
const row2Tripled = [...row2Modules, ...row2Modules, ...row2Modules];

export default function MarqueeSection() {
  return (
    <section
      className="w-full bg-[#0C0C0C] pt-20 pb-12 overflow-hidden flex flex-col gap-4 border-b border-white/5"
    >
      <style>{`
        @keyframes marquee-right {
          0% {
            transform: translate3d(-33.3333%, 0, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }
        @keyframes marquee-left {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-33.3333%, 0, 0);
          }
        }
        .animate-marquee-right {
          animation: marquee-right 32s linear infinite;
        }
        .animate-marquee-left {
          animation: marquee-left 32s linear infinite;
        }
        .animate-marquee-right:hover,
        .animate-marquee-left:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Row 1: Moves Right */}
      <div className="w-full overflow-hidden select-none">
        <div
          className="flex gap-4 w-max pr-4 animate-marquee-right"
        >
          {row1Tripled.map((module, idx) => (
            <div
              key={`row1-${idx}`}
              className="w-[280px] h-[155px] sm:w-[340px] sm:h-[180px] md:w-[380px] md:h-[190px] flex-shrink-0 rounded-2xl p-5 border border-white/5 bg-white/[0.01] flex flex-col justify-between shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-white/10 hover:bg-white/[0.03] group"
            >
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-white/5 rounded-xl group-hover:scale-105 transition-transform duration-300">
                    {module.icon}
                  </div>
                  <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white/90">
                    {module.title}
                  </span>
                </div>
                <span className="text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/50">
                  {module.tag}
                </span>
              </div>

              {/* Dynamic Body */}
              <div className="flex-grow flex flex-col justify-center">
                {module.body}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Moves Left */}
      <div className="w-full overflow-hidden select-none">
        <div
          className="flex gap-4 w-max pr-4 animate-marquee-left"
        >
          {row2Tripled.map((module, idx) => (
            <div
              key={`row2-${idx}`}
              className="w-[280px] h-[155px] sm:w-[340px] sm:h-[180px] md:w-[380px] md:h-[190px] flex-shrink-0 rounded-2xl p-5 border border-white/5 bg-white/[0.01] flex flex-col justify-between shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-white/10 hover:bg-white/[0.03] group"
            >
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-white/5 rounded-xl group-hover:scale-105 transition-transform duration-300">
                    {module.icon}
                  </div>
                  <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white/90">
                    {module.title}
                  </span>
                </div>
                <span className="text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/50">
                  {module.tag}
                </span>
              </div>

              {/* Dynamic Body */}
              <div className="flex-grow flex flex-col justify-center">
                {module.body}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
