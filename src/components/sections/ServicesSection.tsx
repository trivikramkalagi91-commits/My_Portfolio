"use client";

import React from "react";
import FadeIn from "../FadeIn";

const buildingItems = [
  {
    num: "01",
    name: "DSA & Problem Solving",
    desc: "Building strong algorithmic thinking through consistent practice and LeetCode challenges.",
  },
  {
    num: "02",
    name: "Open Source Contributions",
    desc: "Contributing to real-world projects through GSSOC and collaborative development.",
  },
  {
    num: "03",
    name: "AI Agents & Automation",
    desc: "Exploring intelligent systems, AI workflows, terminal agents, and automation tools.",
  },
  {
    num: "04",
    name: "Software Projects",
    desc: "Transforming ideas into practical applications through full project development.",
  },
  {
    num: "05",
    name: "Hackathons",
    desc: "Collaborating, innovating, and shipping solutions under competitive environments.",
  },
  {
    num: "06",
    name: "Future Startup Vision",
    desc: "Working toward creating impactful AI automation products and building an AI automation startup.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative w-full bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] py-20 sm:py-24 md:py-32 z-10"
    >
      <div className="w-full max-w-5xl mx-auto px-6 md:px-10">
        {/* Section Heading */}
        <div className="mb-16 sm:mb-20 md:mb-28 text-center select-none">
          <FadeIn delay={0} y={40}>
            <h2
              className="font-black uppercase tracking-tight text-[#0C0C0C]"
              style={{ fontSize: "clamp(2rem, 6.5vw, 80px)", lineHeight: "0.9" }}
            >
              What I&apos;m Building
            </h2>
          </FadeIn>
        </div>

        {/* Vertical List of Items */}
        <div className="flex flex-col border-t border-[rgba(12,12,12,0.15)]">
          {buildingItems.map((item, idx) => (
            <FadeIn
              key={item.num}
              delay={idx * 0.1}
              y={30}
              className="flex items-center gap-6 sm:gap-10 py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)] transition-all duration-300 hover:bg-[#0c0c0c]/[0.02] px-2"
            >
              {/* Number (Left) */}
              <div
                className="font-black text-[#0C0C0C] select-none flex-shrink-0 min-w-[70px] sm:min-w-[120px] md:min-w-[160px] leading-none"
                style={{ fontSize: "clamp(2.2rem, 7vw, 100px)" }}
              >
                {item.num}
              </div>

              {/* Title & Description Stack (Right) */}
              <div className="flex flex-col gap-2 md:gap-3 flex-grow">
                <h3
                  className="font-bold uppercase text-[#0C0C0C] tracking-wide"
                  style={{ fontSize: "clamp(1rem, 2vw, 1.8rem)" }}
                >
                  {item.name}
                </h3>
                <p
                  className="font-light text-[#0C0C0C] leading-relaxed max-w-2xl opacity-75"
                  style={{ fontSize: "clamp(0.85rem, 1.4vw, 1.15rem)" }}
                >
                  {item.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
