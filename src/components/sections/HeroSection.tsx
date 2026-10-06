"use client";
import React from "react";
import FadeIn from "../FadeIn";
import { ArrowRight, Sparkles, Bot, Cpu, Zap } from "lucide-react";

interface HeroSectionProps {
  onContactClick: () => void;
}

export default function HeroSection({ onContactClick }: HeroSectionProps) {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="top" className="relative min-h-screen w-full flex flex-col bg-bg overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-70 pointer-events-none" />
      <div className="orb w-[420px] h-[420px] bg-indigo/30 -top-32 -right-24" />
      <div className="orb w-[380px] h-[380px] bg-cyan/25 top-1/3 -left-32" />
      <div className="orb w-[300px] h-[300px] bg-violet/25 bottom-0 right-1/4" />

      {/* Nav */}
      <nav className="relative z-30 w-full">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-5">
          <a href="#top" className="display text-xl text-ink">
            Trivikram<span className="grad-text">.dev</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: "About", id: "about" },
              { label: "Capabilities", id: "focus" },
              { label: "Work", id: "projects" },
              { label: "Journey", id: "experience" },
            ].map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={(e) => scrollTo(e, l.id)}
                className="link-underline text-sm font-medium text-ink-soft hover:text-ink transition-colors"
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={onContactClick}
              className="btn-primary rounded-full px-5 py-2.5 text-sm font-semibold cursor-pointer inline-flex items-center gap-1.5"
            >
              Let&apos;s talk <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero body */}
      <div className="relative z-10 flex-grow flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-10 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left copy */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <FadeIn delay={0.1} y={20}>
              <div className="inline-flex items-center gap-2 mb-6 border border-line bg-surface rounded-full px-4 py-1.5 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo" />
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft">
                  Available for internships &amp; collaborations
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} y={30}>
              <h1 className="display text-5xl sm:text-6xl lg:text-7xl text-ink">
                Building <span className="grad-text">AI</span> that
                <br />
                does the <span className="grad-text">real work</span>.
              </h1>
            </FadeIn>

            <FadeIn delay={0.35} y={20}>
              <p className="mt-6 max-w-xl text-base sm:text-lg text-ink-soft leading-relaxed">
                I&apos;m <span className="font-semibold text-ink">Trivikram Kalagi</span> — AI
                engineer &amp; full-stack developer. From AI crime analytics for the Karnataka
                State Police to hackathon-winning platforms and open-source tools, I turn ideas
                into intelligent, automated products.
              </p>
            </FadeIn>

            <FadeIn delay={0.5} y={20}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={onContactClick}
                  className="btn-primary rounded-full px-7 py-3.5 text-sm font-semibold cursor-pointer inline-flex items-center gap-2"
                >
                  Get in touch <ArrowRight size={15} />
                </button>
                <a
                  href="#projects"
                  onClick={(e) => scrollTo(e, "projects")}
                  className="btn-ghost rounded-full px-7 py-3.5 text-sm font-semibold cursor-pointer inline-flex items-center gap-2"
                >
                  View projects
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.65} y={20}>
              <div className="mt-10 grid grid-cols-3 gap-6 w-full max-w-md">
                {[
                  { n: "10+", l: "Merged PRs" },
                  { n: "3rd", l: "Hackathon Prize" },
                  { n: "4+", l: "Shipped Projects" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="display text-3xl sm:text-4xl grad-text">{s.n}</div>
                    <div className="text-xs text-muted mt-1 font-medium">{s.l}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right: AI console visual */}
          <div className="lg:col-span-5">
            <FadeIn delay={0.4} y={30}>
              <div className="relative float-slow">
                <div className="absolute -inset-4 rounded-[28px] bg-gradient-to-br from-indigo/20 via-violet/10 to-cyan/20 blur-2xl" />
                <div className="relative glass rounded-[24px] overflow-hidden">
                  {/* Window bar */}
                  <div className="flex items-center gap-2 px-5 py-3.5 border-b border-line bg-white/60">
                    <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                    <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                    <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                    <span className="ml-3 font-mono text-[11px] text-muted">tvk-agent — zsh</span>
                    <Sparkles size={14} className="ml-auto text-indigo" />
                  </div>
                  {/* Console body */}
                  <div className="p-5 font-mono text-[12px] leading-relaxed space-y-2.5">
                    <div className="text-muted">$ <span className="text-ink">npx create ai-agent --automate</span></div>
                    <div className="text-ink-soft">✓ Initializing agentic workflow…</div>
                    <div className="flex items-center gap-2 text-ink-soft">
                      <Bot size={13} className="text-indigo" />
                      <span>Query → <span className="text-violet font-semibold">AgentLoop</span> → ToolCall</span>
                    </div>
                    <div className="flex items-center gap-2 text-ink-soft">
                      <Cpu size={13} className="text-cyan" />
                      <span>Processing SIDDHI intel layer…</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap size={13} className="text-amber-500" />
                      <span className="text-emerald-600 font-semibold">Pattern matched in Zone 4.</span>
                    </div>
                    <div className="pt-2 border-t border-dashed border-line mt-3">
                      <span className="text-muted">$ </span>
                      <span className="text-ink">deploy --prod</span>
                      <span className="cursor-blink" />
                    </div>
                  </div>
                </div>

                {/* Floating mini cards */}
                <div className="absolute -left-6 top-16 glass rounded-2xl px-4 py-3 hidden sm:block">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo to-violet flex items-center justify-center text-white">
                      <Bot size={15} />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-ink">AI Agents</div>
                      <div className="text-[10px] text-muted">Agentic workflows</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -right-4 bottom-10 glass rounded-2xl px-4 py-3 hidden sm:block">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan to-indigo flex items-center justify-center text-white">
                      <Zap size={15} />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-ink">Automation</div>
                      <div className="text-[10px] text-muted">42.8% token saved</div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
