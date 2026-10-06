"use client";
import React from "react";
import FadeIn from "../FadeIn";
import Magnet from "../Magnet";
import { ArrowDown, Sparkles } from "lucide-react";

interface HeroSectionProps {
  onContactClick: () => void;
}

export default function HeroSection({ onContactClick }: HeroSectionProps) {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="top" className="relative min-h-screen w-full flex flex-col bg-ink overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
      <div className="orb w-[480px] h-[480px] bg-accent/25 -top-40 -right-32" />
      <div className="orb w-[420px] h-[420px] bg-[#7621B0]/20 bottom-0 -left-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink pointer-events-none" />

      {/* ---------- Navbar ---------- */}
      <nav className="z-30 w-full sticky top-0 backdrop-blur-md bg-ink/60 border-b border-bone/5">
        <div className="w-full max-w-6xl mx-auto flex justify-between items-center px-6 md:px-10 py-4">
          <a href="#top" className="flex items-center gap-2 group">
            <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
            <span className="font-display text-xl tracking-tight text-bone group-hover:text-accent transition-colors">
              Trivikram<span className="text-accent">.</span>
            </span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: "About", id: "about" },
              { label: "Focus", id: "focus" },
              { label: "Work", id: "projects" },
            ].map((link) => (
              <a
                key={link.label}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className="link-underline font-mono text-[11px] uppercase tracking-[0.25em] text-bone/70 hover:text-bone transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={onContactClick}
              className="btn-primary rounded-full px-5 py-2 font-mono text-[11px] uppercase tracking-[0.2em] font-semibold cursor-pointer"
            >
              Let&apos;s talk
            </button>
          </div>
        </div>
      </nav>

      {/* ---------- Hero body ---------- */}
      <div className="flex-grow w-full max-w-6xl mx-auto px-6 md:px-10 flex flex-col justify-center py-16 md:py-10 relative z-10">
        <FadeIn delay={0.1} y={20}>
          <div className="inline-flex items-center gap-2 mb-8 border border-bone/15 rounded-full px-4 py-1.5 w-fit bg-bone/5 backdrop-blur-sm">
            <Sparkles size={13} className="text-accent" />
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-bone/80">
              Available for collaborations &amp; internships
            </span>
          </div>
        </FadeIn>

        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-6">
          {/* Left: copy */}
          <div className="flex-1">
            <FadeIn delay={0.2} y={30}>
              <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.35em] text-accent mb-6">
                Software Engineer · AI Automation
              </p>
            </FadeIn>
            <FadeIn delay={0.3} y={40}>
              <h1 className="display text-[15vw] sm:text-[12vw] lg:text-[7.5rem] xl:text-[8.5rem] text-bone leading-[0.9]">
                Trivikram
                <br />
                <span className="display-italic">Kalagi</span>
                <span className="text-accent">.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.45} y={25}>
              <p className="mt-8 max-w-xl text-base sm:text-lg text-bone/70 leading-relaxed font-light">
                I turn ideas into intelligent software — from{" "}
                <span className="text-bone">AI crime analytics</span> for the
                Karnataka State Police to hackathon-winning platforms and
                open-source tools. Currently engineering{" "}
                <span className="text-accent">AI agents &amp; automation</span>{" "}
                toward my own startup.
              </p>
            </FadeIn>

            <FadeIn delay={0.6} y={20}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <button
                  onClick={onContactClick}
                  className="btn-primary rounded-full px-8 py-3.5 font-mono text-xs uppercase tracking-[0.2em] font-semibold cursor-pointer inline-flex items-center gap-2"
                >
                  Get in touch
                  <span>→</span>
                </button>
                <a
                  href="#projects"
                  onClick={(e) => handleNavClick(e, "projects")}
                  className="btn-ghost rounded-full px-8 py-3.5 font-mono text-xs uppercase tracking-[0.2em] cursor-pointer inline-flex items-center gap-2"
                >
                  View work
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Right: portrait */}
          <div className="flex-shrink-0 w-full lg:w-auto flex lg:justify-end">
            <FadeIn delay={0.55} y={30} className="flex justify-center">
              <Magnet
                padding={80}
                strength={5}
                activeTransition="transform 0.2s ease-out"
                inactiveTransition="transform 0.6s cubic-bezier(0.25,1,0.5,1)"
                className="flex justify-center"
              >
                <div className="relative group">
                  <div className="absolute -inset-3 rounded-[36px] bg-gradient-to-br from-accent/40 via-transparent to-[#7621B0]/40 blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative rounded-[32px] overflow-hidden border border-bone/15 bg-ink-soft p-1.5">
                    <img
                      src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
                      alt="Trivikram Kalagi"
                      className="h-[32vh] md:h-[40vh] lg:h-[46vh] w-auto max-h-[460px] min-h-[240px] object-contain select-none pointer-events-none"
                      draggable={false}
                    />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-ink/70 backdrop-blur-md rounded-2xl px-4 py-2 border border-bone/10">
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone/80">
                        REVA University
                      </span>
                      <span className="font-mono text-[10px] text-accent font-semibold">
                        CS · 2026
                      </span>
                    </div>
                  </div>
                </div>
              </Magnet>
            </FadeIn>
          </div>
        </div>

        {/* Stats strip */}
        <FadeIn delay={0.75} y={20}>
          <div className="mt-14 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-bone/10 border border-bone/10 rounded-2xl overflow-hidden">
            {[
              { n: "10+", l: "Merged PRs · GSSOC" },
              { n: "3rd", l: "Hackathon Prize Winner" },
              { n: "4+", l: "Shipped Projects" },
              { n: "∞", l: "Curiosity for AI" },
            ].map((s) => (
              <div key={s.l} className="bg-ink px-5 py-5 hover:bg-ink-soft transition-colors">
                <div className="display text-3xl md:text-4xl text-bone">{s.n}</div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-dim mt-1.5">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Scroll hint */}
      <div className="relative z-10 pb-8 flex justify-center">
        <div className="flex flex-col items-center gap-2 text-bone/40 animate-bounce">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ArrowDown size={14} />
        </div>
      </div>
    </section>
  );
}
