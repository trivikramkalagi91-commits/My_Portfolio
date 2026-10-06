"use client";
import React, { useEffect, useState } from "react";
import HeroSection from "@/components/sections/HeroSection";
import MarqueeSection from "@/components/sections/MarqueeSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import ContactModal from "@/components/ContactModal";
import CustomCursor from "@/components/CustomCursor";
import { Mail, Phone, ArrowUpRight } from "lucide-react";

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const handleOpenContact = () => setIsContactOpen(true);
  const handleCloseContact = () => setIsContactOpen(false);

  return (
    <main className="grain relative min-h-screen w-full bg-ink text-bone overflow-x-clip">
      <CustomCursor />

      <HeroSection onContactClick={handleOpenContact} />
      <MarqueeSection />
      <AboutSection onContactClick={handleOpenContact} />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection onContactClick={handleOpenContact} />

      <ContactModal isOpen={isContactOpen} onClose={handleCloseContact} />

      {/* ---------- Footer ---------- */}
      <footer className="relative w-full bg-ink px-6 md:px-10 pt-16 pb-10 border-t border-bone/10">
        <div className="max-w-6xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-bone-dim mb-3">
                © {new Date().getFullYear()} — Trivikram Kalagi
              </p>
              <h3 className="display text-4xl sm:text-5xl md:text-6xl text-bone">
                Built with <span className="display-italic">curiosity</span>.
              </h3>
            </div>
            <a
              href="#top"
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-bone-dim hover:text-accent transition-colors self-start md:self-auto"
            >
              Back to top
              <span className="inline-block transition-transform group-hover:-translate-y-1">↑</span>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 border-t border-bone/10 pt-8">
            <a href="mailto:trivikramkalagi91@gmail.com" className="link-underline inline-flex items-center gap-2 text-sm text-bone/80 hover:text-accent transition-colors w-fit">
              <Mail size={15} /> trivikramkalagi91@gmail.com
            </a>
            <a href="tel:6361008605" className="link-underline inline-flex items-center gap-2 text-sm text-bone/80 hover:text-accent transition-colors w-fit">
              <Phone size={15} /> +91 63610 08605
            </a>
            <a href="https://www.linkedin.com/in/trivikram-kalagi-571289371" target="_blank" rel="noopener noreferrer" className="link-underline inline-flex items-center gap-2 text-sm text-bone/80 hover:text-accent transition-colors w-fit">
              <LinkedinIcon size={15} /> LinkedIn <ArrowUpRight size={13} />
            </a>
            <a href="https://github.com/trivikramkalagi91-commits" target="_blank" rel="noopener noreferrer" className="link-underline inline-flex items-center gap-2 text-sm text-bone/80 hover:text-accent transition-colors w-fit">
              <GithubIcon size={15} /> GitHub <ArrowUpRight size={13} />
            </a>
            <a href="https://leetcode.com/u/Trivikram17/" target="_blank" rel="noopener noreferrer" className="link-underline inline-flex items-center gap-2 text-sm text-bone/80 hover:text-accent transition-colors w-fit">
              <span className="font-bold text-xs">LC</span> LeetCode <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
