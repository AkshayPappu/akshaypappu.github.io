"use client";

import {
  useState,
  useRef,
  useCallback,
  useEffect,
  type ReactNode,
  type MouseEvent,
} from "react";

interface GlowPanelProps {
  children: ReactNode;
  className?: string;
  /** Glow radius in px */
  radius?: number;
  /** Glow opacity (0-1) */
  opacity?: number;
}

export function GlowPanel({
  children,
  className = "",
  radius = 200,
  opacity = 0.05,
}: GlowPanelProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isTouch) return;
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    },
    [isTouch],
  );

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => !isTouch && setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {children}
      {isHovering && (
        <div
          className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] transition-opacity duration-300"
          style={{
            background: `radial-gradient(${radius}px circle at ${position.x}px ${position.y}px, rgba(251, 146, 60, ${opacity}), transparent 70%)`,
          }}
        />
      )}
    </div>
  );
}
