"use client";

import React from "react";

interface ContactButtonProps {
  onClick?: () => void;
  className?: string;
  label?: string;
}

export default function ContactButton({
  onClick,
  className = "",
  label = "Contact Me",
}: ContactButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`contact-btn cursor-pointer rounded-full font-medium uppercase tracking-widest text-white px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base ${className}`}
    >
      {label}
    </button>
  );
}
