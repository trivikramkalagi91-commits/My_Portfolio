"use client";
import React from "react";
import FadeIn from "../FadeIn";
import { ArrowRight, Terminal } from "lucide-react";

interface HeroSectionProps {
  onContactClick: () => void;
}

const CodeWindow = ({
  title,
  lines,
  className = "",
}: {
  title: string;
  lines: { text: string; color?: string }[];
  className?: string;
}) => (
  <div className={`code-window ${className}`}>
    <div className="flex items-center gap-1.5 px-3 py-2 border-b border-line bg-panel">
      <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
      <span className="ml-2 font-mono text-[10px] text-muted">{title}</span>
    </div>
    <div className="p-3.5 font-mono text-[10.5px] leading-relaxed space-y-1">
      {lines.map((l, i) => (
        <div key={i} style={{ color: l.color || "#b8b8b0" }}>
          {l.text}
        </div>
      ))}
    </div>
  </div>
);

export default function HeroSection({ onContactClick }: HeroSectionProps) {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="top" className="relative min-h-screen w-full flex flex-col bg-black overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
      <div className="absolute w-[420px] h-[420px] rounded-full bg-lime/10 blur-[120px] -top-32 right-0 pointer-events-none" />

      {/* Nav */}
      <nav className="relative z-30 w-full border-b border-line bg-black/70 backdrop-blur-md sticky top-0">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-4">
          <a href="#top" className="display text-xl text-ink">
            TVK<span className="text-lime">/</span>
          </a>
          <div className="hidden lg:flex items-center gap-6">
            {[
              { label: "About", id: "about" },
              { label: "Focus", id: "focus" },
              { label: "Projects", id: "projects" },
              { label: "Journey", id: "experience" },
            ].map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={(e) => scrollTo(e, l.id)}
                className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted hover:text-lime transition-colors link-underline"
              >
                {l.label}
              </a>
            ))}
          </div>
          <button
            onClick={onContactClick}
            className="btn-lime rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wider cursor-pointer inline-flex items-center gap-1.5"
          >
            Hire me <ArrowRight size={13} />
          </button>
        </div>
      </nav>

      {/* Hero body */}
      <div className="relative z-10 flex-grow flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-10 py-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left copy */}
          <div className="lg:col-span-7">
            <FadeIn delay={0.1} y={20}>
              <div className="inline-flex items-center gap-2 mb-6 border border-line rounded-full px-4 py-1.5">
                <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
                  CS Student · Python &amp; DSA Learner · Product Builder
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} y={30}>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-lime mb-4">
                Hey, I&apos;m
              </p>
              <h1 className="display text-[14vw] sm:text-[12vw] lg:text-[7rem] xl:text-[8rem] text-ink leading-[0.9]">
                Trivikram
                <br />
                <span className="text-stroke">Kalagi</span>
                <span className="text-lime">.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.35} y={20}>
              <p className="mt-6 max-w-lg text-ink/70 text-base leading-relaxed font-light">
                Building <span className="text-lime font-semibold">AI-powered products</span>, practicing
                DSA &amp; problem solving, and shipping award-winning software projects — from the 3rd-place winning{" "}
                <span className="text-ink font-semibold">Litigo</span> app to IoT health tracking systems.
              </p>
            </FadeIn>

            <FadeIn delay={0.5} y={20}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={onContactClick}
                  className="btn-lime rounded-full px-7 py-3.5 text-xs font-bold uppercase tracking-wider cursor-pointer inline-flex items-center gap-2"
                >
                  Get in touch <ArrowRight size={14} />
                </button>
                <a
                  href="#projects"
                  onClick={(e) => scrollTo(e, "projects")}
                  className="btn-outline rounded-full px-7 py-3.5 text-xs font-bold uppercase tracking-wider cursor-pointer inline-flex items-center gap-2"
                >
                  View work
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.65} y={20}>
              <div className="mt-10 flex gap-10">
                {[
                  { n: "3rd", l: "YC x Moss Sprint" },
                  { n: "1st", l: "IoT Expo Prize" },
                  { n: "10+", l: "Merged PRs" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="display text-3xl sm:text-4xl text-lime">{s.n}</div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted mt-1">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right: portrait + code window */}
          <div className="lg:col-span-5 relative h-[460px] hidden xl:block">
            <FadeIn delay={0.4} y={30}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -inset-4 rounded-[28px] bg-lime/15 blur-2xl" />
                  <div className="relative rounded-[24px] overflow-hidden border border-line bg-panel p-1.5">
                    <img
                      src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
                      alt="Trivikram Kalagi"
                      className="h-[340px] w-auto object-contain select-none pointer-events-none"
                      draggable={false}
                    />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-black/70 backdrop-blur rounded-xl px-3 py-1.5 border border-line">
                      <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink/80">
                        REVA University
                      </span>
                      <span className="font-mono text-[9px] text-lime font-bold">CS · 2026</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating code windows */}
              <div className="float-a absolute -top-4 -left-14 w-[220px] z-20">
                <CodeWindow
                  title="skills.py"
                  lines={[
                    { text: "def my_profile():", color: "#ccff00" },
                    { text: '  lang = ["Python", "C++", "C"]', color: "#8ab4f8" },
                    { text: '  dsa = ["Arrays", "BinarySearch"]', color: "#8ab4f8" },
                    { text: '  data = ["NumPy", "Pandas (learning)"]', color: "#8ab4f8" },
                    { text: "  return lang, dsa, data", color: "#34d399" },
                  ]}
                />
              </div>

              <div className="float-b absolute bottom-0 -right-12 w-[200px] z-20">
                <CodeWindow
                  title="achievements.sh"
                  lines={[
                    { text: "$ litigo --sprint", color: "#f2f2ed" },
                    { text: "✓ 3rd Place (YC x Moss)", color: "#34d399" },
                    { text: "✓ 1st Prize IoT Expo", color: "#34d399" },
                    { text: "✓ 10+ PRs Merged (GSSOC)", color: "#34d399" },
                  ]}
                />
              </div>

              <div className="absolute -bottom-2 left-0 z-20 float-a" style={{ animationDelay: "1.5s" }}>
                <div className="code-window px-4 py-3 flex items-center gap-2.5">
                  <Terminal size={14} className="text-lime" />
                  <span className="font-mono text-[10px] text-ink/80">
                    learning &amp; building... <span className="caret" />
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
