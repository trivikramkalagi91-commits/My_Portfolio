"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function AnimatedText({ text, className = "", style }: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const words = text.split(" ");
  
  // Calculate total characters (excluding spaces for progress, or including spaces to keep it simple)
  // Let's count characters to assign each its own scroll range
  let charCounter = 0;
  const totalChars = text.length;

  return (
    <p ref={containerRef} className={`${className} leading-relaxed`} style={style}>

      {words.map((word, wIdx) => {
        const wordChars = word.split("");
        
        return (
          <span key={wIdx} className="inline-block whitespace-nowrap">
            {wordChars.map((char) => {
              const currentCharIndex = charCounter;
              charCounter++; // Increment index for each character
              
              const start = currentCharIndex / totalChars;
              const end = (currentCharIndex + 1.5) / totalChars; // overlap slightly for smoother effect
              
              return (
                <Character
                  key={currentCharIndex}
                  progress={scrollYProgress}
                  range={[start, Math.min(end, 1)]}
                >
                  {char}
                </Character>
              );
            })}
            {/* Render space between words */}
            {wIdx < words.length - 1 && " "}
          </span>
        );
      })}
    </p>
  );
}

interface CharacterProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

function Character({ children, progress, range }: CharacterProps) {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <motion.span style={{ opacity }} className="inline-block select-none">
      {children}
    </motion.span>
  );
}

