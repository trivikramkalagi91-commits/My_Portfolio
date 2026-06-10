"use client";

import React from "react";
import FadeIn from "../FadeIn";
import AnimatedText from "../AnimatedText";
import ContactButton from "../ContactButton";

interface AboutSectionProps {
  onContactClick: () => void;
}

export default function AboutSection({ onContactClick }: AboutSectionProps) {
  const aboutText =
    "I'm Trivikram Kalagi, a Computer Science student at REVA University who enjoys turning ideas into real software. My journey currently revolves around DSA, open source contributions, hackathons, AI agents, and automation. From contributing through GSSOC and building projects like Token Analyzer and AI Cost Analyzer to exploring the latest AI tools and workflows, I'm constantly learning and building. My long-term goal is to create impactful AI automation products and eventually build my own AI automation startup.";

  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex items-center justify-center bg-[#0C0C0C] py-24 overflow-hidden"
    >


      {/* Main About Block */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-10 flex flex-col items-center justify-center">
        <div className="relative z-10 w-full max-w-[800px] flex flex-col items-center justify-center text-center">
        {/* About Me Heading */}
        <div className="mb-10 sm:mb-14 md:mb-16 select-none">
          <FadeIn delay={0} y={40}>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight text-center"
              style={{ fontSize: "clamp(2rem, 6.5vw, 80px)" }}
            >
              About me
            </h2>
          </FadeIn>
        </div>

        {/* Biography Paragraph */}
        <div className="mb-16 sm:mb-20 md:mb-24 w-full">
          <AnimatedText
            text={aboutText}
            className="text-[#D7E2EA] font-medium leading-relaxed max-w-[620px] mx-auto text-center"
            style={{ fontSize: "clamp(1rem, 1.8vw, 1.35rem)" }}
          />
        </div>

        {/* Contact Me Button */}
        <div>
          <FadeIn delay={0.2} y={20}>
            <ContactButton onClick={onContactClick} />
          </FadeIn>
        </div>
      </div>
      </div>
    </section>
  );
}
