"use client";

import React from "react";
import FadeIn from "../FadeIn";
import Magnet from "../Magnet";
import ContactButton from "../ContactButton";

interface HeroSectionProps {
  onContactClick: () => void;
}

export default function HeroSection({ onContactClick }: HeroSectionProps) {
  // Navigation scroll helper
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between bg-[#0C0C0C] overflow-hidden">
      {/* 1. Navbar */}
      <FadeIn delay={0} y={-20} as="nav" className="z-20 w-full">
        <div className="w-full max-w-5xl mx-auto flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8">
          {/* Logo / Shortname */}
          <a
            href="#"
            className="text-white font-extrabold tracking-widest text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
          >
            TVK
          </a>
          
          {/* Nav Links */}
          <div className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-12">
            {[
              { label: "About", id: "about" },
              { label: "Focus", id: "services" },
              { label: "Projects", id: "projects" },
            ].map((link) => (
              <a
                key={link.label}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs md:text-sm lg:text-[1.1rem] hover:opacity-70 transition-opacity duration-200"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={onContactClick}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs md:text-sm lg:text-[1.1rem] hover:opacity-70 transition-opacity duration-200 cursor-pointer"
            >
              Contact
            </button>
          </div>
        </div>
      </FadeIn>
 
      {/* 2. Main Hero Split Content */}
      <div className="flex-grow w-full max-w-5xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-10 py-12 md:py-20 z-10">
        {/* Left Side: Copywriting */}
        <div className="w-full md:w-3/5 flex flex-col items-center md:items-start text-center md:text-left gap-6 md:gap-8">
          <FadeIn delay={0.15} y={40}>
            <h1 className="hero-heading font-black uppercase tracking-tight leading-[0.95] text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem]">
              Hi, i&apos;m <br />
              trivikram
            </h1>
          </FadeIn>

          <FadeIn delay={0.35} y={20}>
            <p className="text-[#D7E2EA]/80 font-light uppercase tracking-wider leading-relaxed max-w-lg text-sm sm:text-base md:text-lg">
              a software engineer driven by crafting striking and intelligent applications.
            </p>
          </FadeIn>

          <FadeIn delay={0.5} y={20}>
            <ContactButton onClick={onContactClick} />
          </FadeIn>
        </div>

        {/* Right Side: Portrait Image (Sized to 30-35% of Viewport Height) */}
        <div className="w-full md:w-2/5 flex justify-center items-center">
          <FadeIn delay={0.6} y={30} className="flex justify-center items-center">
            <Magnet
              padding={100}
              strength={4}
              activeTransition="transform 0.2s ease-out"
              inactiveTransition="transform 0.5s ease-in-out"
              className="flex justify-center items-center"
            >
              <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-b from-white/[0.04] to-transparent p-2 border border-white/5 shadow-2xl backdrop-blur-sm">
                <img
                  src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
                  alt="Trivikram Kalagi Portrait"
                  className="h-[35vh] md:h-[42vh] w-auto max-h-[440px] min-h-[260px] object-contain select-none pointer-events-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.65)]"
                  draggable={false}
                />
              </div>
            </Magnet>
          </FadeIn>
        </div>
      </div>

      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.015] pointer-events-none z-0" />
    </section>
  );
}
