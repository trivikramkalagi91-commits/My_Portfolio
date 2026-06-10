"use client";

import React from "react";

interface LiveProjectButtonProps {
  href?: string;
  onClick?: () => void;
  label?: string;
  className?: string;
}

export default function LiveProjectButton({
  href,
  onClick,
  label = "Live Project",
  className = "",
}: LiveProjectButtonProps) {
  const baseClasses = `inline-flex items-center justify-center cursor-pointer rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base transition-all duration-200 hover:bg-[#D7E2EA]/10 hover:scale-[1.02] active:scale-[0.98] ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
      >
        {label}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {label}
    </button>
  );
}
