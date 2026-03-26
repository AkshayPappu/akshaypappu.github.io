"use client";

import { useEffect, useRef, useState, useCallback } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [active, setActive] = useState(false);
  const rafId = useRef<number>(0);

  const animate = useCallback(() => {
    const lerp = 0.15;
    ringPos.current.x += (pos.current.x - ringPos.current.x) * lerp;
    ringPos.current.y += (pos.current.y - ringPos.current.y) * lerp;

    if (dotRef.current) {
      dotRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;
    }
    if (ringRef.current) {
      ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%) scale(${hovering ? 1.8 : clicking ? 0.8 : 1})`;
    }

    rafId.current = requestAnimationFrame(animate);
  }, [hovering, clicking]);

  useEffect(() => {
    const onFirstMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      ringPos.current = { x: e.clientX, y: e.clientY };
      setActive(true);
      setHidden(false);
      document.documentElement.classList.add("custom-cursor-active");
      document.removeEventListener("mousemove", onFirstMove);
    };

    document.addEventListener("mousemove", onFirstMove);
    return () => document.removeEventListener("mousemove", onFirstMove);
  }, []);

  useEffect(() => {
    if (!active) return;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      setHidden(false);
    };

    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);
    const onLeave = () => setHidden(true);
    const onEnter = () => setHidden(false);

    const onOverInteractive = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, input, [role='button'], label, select, textarea");
      setHovering(!!interactive);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseover", onOverInteractive);

    rafId.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseover", onOverInteractive);
      cancelAnimationFrame(rafId.current);
    };
  }, [active, animate]);

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999]"
        style={{ opacity: !active || hidden ? 0 : 1, transition: "opacity 0.15s" }}
      >
        <div
          className="rounded-full"
          style={{
            width: 6,
            height: 6,
            background: "rgba(251, 146, 60, 0.9)",
            boxShadow: "0 0 8px rgba(251, 146, 60, 0.5), 0 0 20px rgba(251, 146, 60, 0.2)",
          }}
        />
      </div>
      {/* Ring */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998]"
        style={{
          opacity: !active || hidden ? 0 : hovering ? 0.6 : 0.35,
          transition: "opacity 0.3s",
        }}
      >
        <div
          className="rounded-full border"
          style={{
            width: 36,
            height: 36,
            borderColor: hovering ? "rgba(251, 146, 60, 0.5)" : "rgba(255, 255, 255, 0.3)",
            transition: "border-color 0.3s, width 0.3s, height 0.3s",
          }}
        />
      </div>
    </>
  );
}
