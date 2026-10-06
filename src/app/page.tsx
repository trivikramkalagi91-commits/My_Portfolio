"use client";
import React, { useState } from "react";
import HeroSection from "@/components/sections/HeroSection";
import MarqueeSection from "@/components/sections/MarqueeSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ContactSection from "@/components/sections/ContactSection";
import ContactModal from "@/components/ContactModal";
import CustomCursor from "@/components/CustomCursor";
import { Mail, Phone, ArrowUpRight } from "lucide-react";

const LinkedinIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const GithubIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const open = () => setIsContactOpen(true);
  const close = () => setIsContactOpen(false);

  return (
    <main className="relative min-h-screen w-full bg-black text-ink overflow-x-clip">
      <CustomCursor />

      <HeroSection onContactClick={open} />
      <MarqueeSection />
      <AboutSection onContactClick={open} />
      <ServicesSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection onContactClick={open} />

      <ContactModal isOpen={isContactOpen} onClose={close} />

      {/* ---------- Footer ---------- */}
      <footer className="relative w-full bg-black border-t border-line px-6 md:px-10 pt-14 pb-8">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="display text-3xl md:text-4xl text-ink">
              TRIVIKRAM<span className="text-lime">.</span>KALAGI
            </div>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
              © {new Date().getFullYear()} — Built with caffeine &amp; curiosity
            </p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-6">
            <a href="mailto:trivikramkalagi91@gmail.com" className="link-underline text-sm text-muted hover:text-lime transition-colors inline-flex items-center gap-2 w-fit">
              <Mail size={14} /> trivikramkalagi91@gmail.com
            </a>
            <a href="tel:6361008605" className="link-underline text-sm text-muted hover:text-lime transition-colors inline-flex items-center gap-2 w-fit">
              <Phone size={14} /> +91 63610 08605
            </a>
            <a href="https://www.linkedin.com/in/trivikram-kalagi-571289371" target="_blank" rel="noopener noreferrer" className="link-underline text-sm text-muted hover:text-lime transition-colors inline-flex items-center gap-2 w-fit">
              <LinkedinIcon size={14} /> LinkedIn <ArrowUpRight size={12} />
            </a>
            <a href="https://github.com/trivikramkalagi91-commits" target="_blank" rel="noopener noreferrer" className="link-underline text-sm text-muted hover:text-lime transition-colors inline-flex items-center gap-2 w-fit">
              <GithubIcon size={14} /> GitHub <ArrowUpRight size={12} />
            </a>
            <a href="https://leetcode.com/u/Trivikram17/" target="_blank" rel="noopener noreferrer" className="link-underline text-sm text-muted hover:text-lime transition-colors inline-flex items-center gap-2 w-fit">
              <span className="font-bold text-xs">LC</span> LeetCode <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
