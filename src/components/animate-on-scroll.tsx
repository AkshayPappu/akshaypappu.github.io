"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface AnimateOnScrollProps {
  children: ReactNode;
  /** Animation variant */
  animation?: "fade-in" | "slide-up" | "slide-left" | "slide-right";
  /** Extra delay in ms, useful for staggering siblings */
  delay?: number;
  /** IntersectionObserver threshold (0-1) */
  threshold?: number;
  className?: string;
}

const animationClasses: Record<string, { hidden: string; visible: string }> = {
  "fade-in": {
    hidden: "opacity-0",
    visible: "opacity-100",
  },
  "slide-up": {
    hidden: "opacity-0 translate-y-6",
    visible: "opacity-100 translate-y-0",
  },
  "slide-left": {
    hidden: "opacity-0 translate-x-8",
    visible: "opacity-100 translate-x-0",
  },
  "slide-right": {
    hidden: "opacity-0 -translate-x-8",
    visible: "opacity-100 translate-x-0",
  },
};

export function AnimateOnScroll({
  children,
  animation = "slide-up",
  delay = 0,
  threshold = 0.1,
  className = "",
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setReducedMotion(true);
      setVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => setVisible(true), delay);
          } else {
            setVisible(true);
          }
          observer.unobserve(el);
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, threshold]);

  const classes = animationClasses[animation];
  const transitionStyle = reducedMotion
    ? undefined
    : { transitionDuration: "600ms", transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" };

  return (
    <div
      ref={ref}
      className={`transition-all ${visible ? classes.visible : classes.hidden} ${className}`}
      style={transitionStyle}
    >
      {children}
    </div>
  );
}
