"use client";
import React from "react";

const items = [
  "Python", "C++", "C", "Data Structures & Algorithms", "NumPy",
  "Pandas (Learning)", "Litigo (3rd Place YC x Moss)", "GSSOC 2026",
  "IoT Expo (1st Prize)", "Binary Search", "Arrays & Sorting", "Recursion",
];

export default function MarqueeSection() {
  const doubled = [...items, ...items];
  return (
    <section className="w-full bg-lime text-black py-4 overflow-hidden border-y-4 border-black">
      <div className="marquee-track items-center gap-8 pr-8">
        {doubled.map((w, i) => (
          <div key={i} className="flex items-center gap-8 flex-shrink-0">
            <span className="display text-3xl sm:text-4xl whitespace-nowrap">{w}</span>
            <span className="text-2xl font-bold">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
}
