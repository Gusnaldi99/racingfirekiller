"use client";

import React, { useEffect, useRef, useState } from "react";

export type RevealVariant = "up" | "left" | "right" | "scale";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  durationMs?: number;
  variant?: RevealVariant;
}

const HIDDEN_STATE: Record<RevealVariant, string> = {
  up: "opacity-0 translate-y-8",
  left: "opacity-0 -translate-x-8",
  right: "opacity-0 translate-x-8",
  scale: "opacity-0 scale-95 translate-y-4",
};

/**
 * Lightweight IntersectionObserver wrapper for smooth reveal-on-scroll animations.
 * Respects prefers-reduced-motion automatically via CSS and initial check.
 */
export default function ScrollReveal({
  children,
  className = "",
  delayMs = 0,
  durationMs = 1000,
  variant = "up",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -36px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delayMs}ms`,
        transitionDuration: `${durationMs}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      className={`transition-[transform,opacity] ${
        visible
          ? "opacity-100 translate-y-0 translate-x-0 scale-100"
          : HIDDEN_STATE[variant]
      } ${className}`}
    >
      {children}
    </div>
  );
}
