"use client";

import React, { useState } from "react";
import HeroSection from "@/components/sections/HeroSection";
import MarqueeSection from "@/components/sections/MarqueeSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactModal from "@/components/ContactModal";
import { Mail, Phone } from "lucide-react";

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);


export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleOpenContact = () => setIsContactOpen(true);
  const handleCloseContact = () => setIsContactOpen(false);

  return (
    <main className="relative min-h-screen w-full bg-[#0C0C0C] text-[#D7E2EA] overflow-x-clip">
      {/* 1. Hero Section */}
      <HeroSection onContactClick={handleOpenContact} />

      {/* 2. Marquee Section */}
      <MarqueeSection />

      {/* 3. About Section */}
      <AboutSection onContactClick={handleOpenContact} />

      {/* 4. What I'm Building Section (Services) */}
      <ServicesSection />

      {/* 5. Projects Section */}
      <ProjectsSection />

      {/* 6. Contact Modal overlay */}
      <ContactModal isOpen={isContactOpen} onClose={handleCloseContact} />

      {/* Footer */}
      <footer className="relative w-full bg-[#0C0C0C] py-16 px-6 md:px-10 border-t border-white/5 flex flex-col items-center justify-center gap-6 text-center select-none z-20">
        <h4 className="text-white font-extrabold tracking-widest text-lg sm:text-xl uppercase">
          TVK
        </h4>
        <p className="text-xs sm:text-sm text-[#D7E2EA]/50 uppercase tracking-widest max-w-md">
          Software Engineer &middot; Open Source Contributor &middot; AI Explorer
        </p>

        {/* Quick Social Icon Links */}
        <div className="flex gap-4 sm:gap-6 mt-2">
          <a
            href="mailto:trivikramkalagi91@gmail.com"
            className="p-2 rounded-full border border-white/10 hover:border-[#D7E2EA]/40 text-[#D7E2EA]/60 hover:text-white transition-all hover:scale-105 duration-200"
            title="Email"
          >
            <Mail size={18} />
          </a>
          <a
            href="tel:6361008605"
            className="p-2 rounded-full border border-white/10 hover:border-[#D7E2EA]/40 text-[#D7E2EA]/60 hover:text-white transition-all hover:scale-105 duration-200"
            title="Phone"
          >
            <Phone size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/trivikram-kalagi-571289371"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-white/10 hover:border-[#D7E2EA]/40 text-[#D7E2EA]/60 hover:text-white transition-all hover:scale-105 duration-200"
            title="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href="https://github.com/trivikramkalagi91-commits"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-white/10 hover:border-[#D7E2EA]/40 text-[#D7E2EA]/60 hover:text-white transition-all hover:scale-105 duration-200"
            title="GitHub"
          >
            <GithubIcon size={18} />
          </a>
        </div>

        <p className="text-[10px] text-[#D7E2EA]/30 uppercase tracking-wider mt-4">
          &copy; {new Date().getFullYear()} Trivikram Kalagi. All rights reserved.
        </p>
      </footer>
    </main>
  );
}


