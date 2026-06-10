"use client";

import React from "react";
import { motion } from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
  as?: string;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  id?: string;
}

export default function FadeIn({
  children,
  as = "div",
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className = "",
  id,
}: FadeInProps) {
  // Use motion.create to create a motion component dynamically
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const MotionComponent = (motion as any).create
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ? (motion as any).create(as)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    : (motion as any)[as] || motion.div;


  return (
    <MotionComponent
      id={id}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{
        delay,
        duration,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </MotionComponent>
  );
}
