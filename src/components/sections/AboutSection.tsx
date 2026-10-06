"use client";
import React from "react";
import FadeIn from "../FadeIn";
import AnimatedText from "../AnimatedText";
import { MapPin, GraduationCap, Rocket, Heart } from "lucide-react";

interface AboutSectionProps {
  onContactClick: () => void;
}

const facts = [
  { icon: MapPin, label: "Based in", value: "Bengaluru, India" },
  { icon: GraduationCap, label: "Education", value: "B.Tech CSE · REVA University" },
  { icon: Heart, label: "Driven by", value: "AI agents, automation & DSA" },
  { icon: Rocket, label: "North star", value: "Found an AI automation startup" },
];

export default function AboutSection({ onContactClick }: AboutSectionProps) {
  const aboutText =
    "I'm Trivikram Kalagi, a Computer Science student at REVA University who loves turning ideas into real software. My world revolves around DSA, open-source contributions, hackathons, AI agents, and automation. I've shipped projects like SIDDHI — an AI crime-analytics platform for the Karnataka State Police — MediExpiry AI, and the Kisan Platform, while contributing 10+ merged PRs through GSSOC. Every tool I build is a step toward creating impactful AI automation products — and eventually, my own company.";

  return (
    <section id="about" className="relative w-full bg-ink py-24 md:py-32 overflow-hidden">
      <div className="orb w-[380px] h-[380px] bg-accent/15 top-20 -left-40" />
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-10">
        {/* Section label */}
        <FadeIn delay={0} y={20}>
          <div className="flex items-center gap-4 mb-10">
            <span className="font-mono text-xs uppercase tracking-[0.35em] text-accent">01 / About</span>
            <span className="h-px flex-grow bg-bone/15" />
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left: heading + quote */}
          <div className="lg:col-span-5">
            <FadeIn delay={0.1} y={30}>
              <h2 className="display text-6xl sm:text-7xl md:text-8xl text-bone leading-[0.9]">
                The
                <br />
                <span className="display-italic">maker</span>
                <br />
                <span className="text-stroke">behind</span>
                <br />
                the code.
              </h2>
            </FadeIn>
            <FadeIn delay={0.25} y={20}>
              <blockquote className="mt-10 border-l-2 border-accent pl-5">
                <p className="font-display italic text-xl sm:text-2xl text-bone/85 leading-snug">
                  “Automate the boring. Build the intelligent. Ship the useful.”
                </p>
                <footer className="mt-3 font-mono text-[10px] uppercase tracking-[0.25em] text-bone-dim">
                  — my working principle
                </footer>
              </blockquote>
            </FadeIn>
          </div>

          {/* Right: bio + facts */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            <div>
              <AnimatedText
                text={aboutText}
                className="text-bone/75 leading-relaxed font-light text-base sm:text-lg max-w-2xl"
              />
            </div>

            {/* Fact grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-bone/10 border border-bone/10 rounded-2xl overflow-hidden">
              {facts.map((f, i) => (
                <FadeIn key={f.label} delay={0.3 + i * 0.08} y={15}>
                  <div className="bg-ink hover:bg-ink-soft transition-colors p-5 flex items-start gap-4 h-full">
                    <div className="p-2 rounded-xl bg-accent-soft text-accent flex-shrink-0">
                      <f.icon size={16} />
                    </div>
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-bone-dim">
                        {f.label}
                      </div>
                      <div className="text-sm text-bone mt-1 font-medium">{f.value}</div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.5} y={15}>
              <button
                onClick={onContactClick}
                className="btn-primary rounded-full px-8 py-3.5 font-mono text-xs uppercase tracking-[0.2em] font-semibold cursor-pointer w-fit inline-flex items-center gap-2"
              >
                Work with me →
              </button>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
