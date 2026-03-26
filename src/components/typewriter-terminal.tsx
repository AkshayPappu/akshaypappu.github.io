"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";

interface TypewriterLine {
  type: "prompt" | "heading" | "subtitle" | "link" | "cursor-line";
  text: string;
  href?: string;
  cdCommand?: string;
  charDelay?: number;
  preDelay?: number;
}

const LINES: TypewriterLine[] = [
  { type: "prompt", text: "$ whoami", charDelay: 40, preDelay: 300 },
  { type: "heading", text: "Hi, I'm Akshay.", charDelay: 0, preDelay: 150 },
  {
    type: "subtitle",
    text: "SWE @ Snowflake · Incoming @ Google · CS @ Virginia Tech",
    charDelay: 0,
    preDelay: 100,
  },
  { type: "prompt", text: "$ ls ./options", charDelay: 40, preDelay: 400 },
  {
    type: "link",
    text: "./view-projects",
    href: "/projects",
    cdCommand: "$ cd ./projects",
    charDelay: 0,
    preDelay: 150,
  },
  {
    type: "link",
    text: "./about-me",
    href: "/about",
    cdCommand: "$ cd ./about",
    charDelay: 0,
    preDelay: 80,
  },
  {
    type: "link",
    text: "./blog",
    href: "/blog",
    cdCommand: "$ cd ./blog",
    charDelay: 0,
    preDelay: 80,
  },
  {
    type: "cursor-line",
    text: "click an option to navigate",
    charDelay: 0,
    preDelay: 200,
  },
];

interface NavigatingState {
  href: string;
  command: string;
  typedSoFar: string;
  done: boolean;
}

export function TypewriterTerminal() {
  const router = useRouter();
  const shellRef = useRef<HTMLDivElement>(null);

  const [visibleLines, setVisibleLines] = useState(-1);
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [nav, setNav] = useState<NavigatingState | null>(null);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setReducedMotion(true);
      setVisibleLines(LINES.length - 1);
    }
  }, []);

  const advanceLine = useCallback(
    (lineIdx: number) => {
      if (lineIdx >= LINES.length || reducedMotion) return;

      const line = LINES[lineIdx];
      const delay = line.preDelay ?? 100;

      setTimeout(() => {
        if (line.charDelay && line.charDelay > 0) {
          setIsTyping(true);
          setTypedText("");
          setVisibleLines(lineIdx);

          let charIdx = 0;
          const interval = setInterval(() => {
            charIdx++;
            setTypedText(line.text.slice(0, charIdx));
            if (charIdx >= line.text.length) {
              clearInterval(interval);
              setIsTyping(false);
              advanceLine(lineIdx + 1);
            }
          }, line.charDelay);
        } else {
          setVisibleLines(lineIdx);
          setIsTyping(false);
          advanceLine(lineIdx + 1);
        }
      }, delay);
    },
    [reducedMotion],
  );

  useEffect(() => {
    if (!reducedMotion) {
      advanceLine(0);
    }
  }, [advanceLine, reducedMotion]);

  const handleOptionClick = useCallback(
    (href: string, command: string) => {
      if (nav) return;

      if (reducedMotion) {
        router.push(href);
        return;
      }

      setNav({ href, command, typedSoFar: "", done: false });

      let charIdx = 0;
      const interval = setInterval(() => {
        charIdx++;
        setNav((prev) =>
          prev ? { ...prev, typedSoFar: command.slice(0, charIdx) } : prev,
        );
        if (charIdx >= command.length) {
          clearInterval(interval);
          setNav((prev) => (prev ? { ...prev, done: true } : prev));

          setTimeout(() => {
            setExiting(true);
          }, 200);
        }
      }, 35);
    },
    [nav, reducedMotion, router],
  );

  useEffect(() => {
    if (!exiting || !nav) return;

    const timer = setTimeout(() => {
      router.push(nav.href);
    }, 550);

    return () => clearTimeout(timer);
  }, [exiting, nav, router]);

  const isLineVisible = (idx: number) => idx <= visibleLines;
  const isCurrentlyTyping = (idx: number) =>
    idx === visibleLines && isTyping;
  const introComplete = visibleLines >= LINES.length - 1 && !isTyping;
  const isDisabled = !!nav;

  return (
    <div ref={shellRef} className={exiting ? "crt-navigate-active" : ""}>
      <div className="space-y-3 px-5 py-6 text-left sm:px-7">
        {/* $ whoami */}
        <p
          className={`text-xs text-orange-300/80 transition-opacity duration-200 ${isLineVisible(0) ? "opacity-100" : "opacity-0"}`}
        >
          {isCurrentlyTyping(0) ? typedText : isLineVisible(0) ? LINES[0].text : ""}
          {isCurrentlyTyping(0) && (
            <span className="ml-0.5 inline-block animate-pulse">▎</span>
          )}
        </p>

        {/* Heading */}
        <h1
          className={`terminal-heading crt-chromatic text-3xl font-semibold tracking-tight text-white transition-all duration-300 sm:text-5xl ${isLineVisible(1) ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"}`}
        >
          {LINES[1].text.replace("'", "\u2019")}
        </h1>

      {/* Subtitle */}
      <p
        className={`phosphor-white text-sm text-zinc-400 transition-all duration-300 sm:text-base ${isLineVisible(2) ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"}`}
      >
        {LINES[2].text}
      </p>

        {/* $ ls ./options */}
        <p
          className={`text-xs text-orange-300/80 transition-opacity duration-200 ${isLineVisible(3) ? "opacity-100" : "opacity-0"}`}
        >
          {isCurrentlyTyping(3) ? typedText : isLineVisible(3) ? LINES[3].text : ""}
          {isCurrentlyTyping(3) && (
            <span className="ml-0.5 inline-block animate-pulse">▎</span>
          )}
        </p>

        {/* Clickable options */}
        <div className="space-y-1 text-sm text-zinc-300 sm:text-base">
          {LINES.slice(4, 7).map((line, i) => (
            <button
              key={line.href}
              type="button"
              disabled={isDisabled || !introComplete}
              onClick={() => handleOptionClick(line.href!, line.cdCommand!)}
              className={`block w-fit text-left transition-all duration-300 hover:text-orange-200 disabled:pointer-events-none ${
                nav?.href === line.href ? "text-orange-200" : ""
              } ${isLineVisible(4 + i) ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"}`}
            >
              {line.text}
            </button>
          ))}
          <p
            className={`terminal-cursor mt-2 text-sm text-zinc-500 transition-opacity duration-300 ${isLineVisible(7) && !nav ? "opacity-100" : "opacity-0"}`}
          >
            {LINES[7].text}
          </p>
        </div>

        {/* cd command typing out */}
        {nav && (
          <div className="pt-1">
            <p className="text-xs text-orange-300/80">
              {nav.typedSoFar}
              {!nav.done && (
                <span className="ml-0.5 inline-block animate-pulse">▎</span>
              )}
            </p>
            {nav.done && (
              <p className="mt-1 text-xs text-zinc-600 animate-fade-in">
                connecting...
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
