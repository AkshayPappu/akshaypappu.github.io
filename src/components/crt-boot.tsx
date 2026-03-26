"use client";

import { useState, useEffect, type ReactNode } from "react";

interface CrtBootProps {
  children: ReactNode;
  className?: string;
}

/**
 * Wraps a terminal panel with a CRT power-on animation:
 * a thin horizontal slit of light that expands to reveal the full panel.
 */
export function CrtBoot({ children, className = "" }: CrtBootProps) {
  const [booted, setBooted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setReducedMotion(true);
      setBooted(true);
      return;
    }
    const id = requestAnimationFrame(() => setBooted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div
      className={`${booted && !reducedMotion ? "crt-boot-active" : ""} ${className}`}
      style={
        !booted && !reducedMotion
          ? { clipPath: "inset(49.5% 0 49.5% 0)", filter: "brightness(2)" }
          : undefined
      }
    >
      {children}
    </div>
  );
}
