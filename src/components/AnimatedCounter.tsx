"use client";

import React, { useEffect, useRef } from "react";

interface AnimatedCounterProps {
  value: string;
  durationMs?: number;
}

/**
 * Animates pure numeric metric strings (e.g. "10", "5", "14") from 0 to target
 * when entering the viewport, while preserving non-numeric strings like "A B C".
 */
export default function AnimatedCounter({
  value,
  durationMs = 1800,
}: AnimatedCounterProps) {
  const numericTarget = Number(value.trim());
  const isNumeric = Number.isFinite(numericTarget) && /^\d+$/.test(value.trim());

  const ref = useRef<HTMLSpanElement | null>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!isNumeric) {
      el.textContent = value;
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = value;
      return;
    }

    let rafId = 0;

    const startAnimation = () => {
      if (hasAnimatedRef.current) return;
      hasAnimatedRef.current = true;
      const startTime = performance.now();

      const step = (now: number) => {
        const progress = Math.min(1, (now - startTime) / durationMs);
        // Ease out expo
        const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const current = Math.round(eased * numericTarget);
        el.textContent = String(current);
        if (progress < 1) {
          rafId = requestAnimationFrame(step);
        }
      };

      el.textContent = "0";
      rafId = requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          startAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, [durationMs, isNumeric, numericTarget, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {value}
    </span>
  );
}
