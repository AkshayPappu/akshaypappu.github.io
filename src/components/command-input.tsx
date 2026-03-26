"use client";

import { useState, useRef, useEffect, useCallback, type KeyboardEvent } from "react";
import { useRouter } from "next/navigation";
import { projectsData } from "@/data/projects";

interface OutputLine {
  text: string;
  className?: string;
}

const SUGGESTIONS = [
  { label: "help", cmd: "help" },
  { label: "whoami", cmd: "whoami" },
  { label: "projects", cmd: "ls projects" },
  { label: "resume", cmd: "cat resume.txt" },
];

const HELP_OUTPUT: OutputLine[] = [
  { text: "Available commands:", className: "text-orange-200" },
  { text: "  help             show this message" },
  { text: "  whoami           about me" },
  { text: "  ls               list navigation options" },
  { text: "  ls projects      list all projects" },
  { text: "  cat resume.txt   view resume summary" },
  { text: "  cd <page>        navigate (projects, about, blog)" },
  { text: "  clear            clear terminal output" },
  { text: "  echo <text>      echo text back" },
  { text: "" },
  { text: "  Try: sudo rm -rf /", className: "text-zinc-600" },
];

function processCommand(
  raw: string,
  navigate: (path: string) => void,
): OutputLine[] | "clear" {
  const trimmed = raw.trim();
  if (!trimmed) return [];

  const [cmd, ...args] = trimmed.split(/\s+/);
  const arg = args.join(" ");

  switch (cmd.toLowerCase()) {
    case "help":
      return HELP_OUTPUT;

    case "whoami":
      return [
        { text: "Akshay Pappu", className: "text-white font-semibold" },
        { text: "SWE @ Snowflake · Incoming @ Google · CS @ Virginia Tech", className: "text-zinc-400" },
        { text: "I work on ML systems, low-level perf, and C++.", className: "text-zinc-400" },
      ];

    case "ls":
      if (!arg || arg === ".") {
        return [
          { text: "./projects    ./about    ./blog", className: "text-zinc-300" },
        ];
      }
      if (arg === "projects" || arg === "./projects") {
        return projectsData.map((p) => ({
          text: `  ${p.title}`,
          className: "text-zinc-300",
        }));
      }
      return [{ text: `ls: cannot access '${arg}': No such file or directory`, className: "text-red-400/80" }];

    case "cat":
      if (arg === "resume.txt" || arg === "./resume.txt") {
        return [
          { text: "Education:  B.S. Computer Science — Virginia Tech", className: "text-zinc-300" },
          { text: "Experience: SWE @ Snowflake, Incoming @ Google", className: "text-zinc-300" },
          { text: "Skills:     C++, Python, PyTorch, CUDA, Systems", className: "text-zinc-300" },
          { text: "" },
          { text: "Full resume available upon request.", className: "text-zinc-500" },
        ];
      }
      return [{ text: `cat: ${arg || "(missing argument)"}: No such file`, className: "text-red-400/80" }];

    case "cd": {
      const dest = arg.replace(/^\.\//, "").replace(/\/$/, "");
      if (["projects", "about", "blog"].includes(dest)) {
        navigate(`/${dest}`);
        return [{ text: `Navigating to /${dest}...`, className: "text-zinc-500" }];
      }
      if (dest === "" || dest === "~" || dest === "/") {
        navigate("/");
        return [{ text: "Navigating to ~/...", className: "text-zinc-500" }];
      }
      return [{ text: `cd: no such directory: ${arg}`, className: "text-red-400/80" }];
    }

    case "clear":
      return "clear";

    case "echo":
      return [{ text: arg || "", className: "text-zinc-300" }];

    case "sudo":
      if (arg.startsWith("rm")) {
        return [
          { text: "nice try 😏", className: "text-orange-300" },
          { text: "Permission denied. This portfolio is protected.", className: "text-zinc-500" },
        ];
      }
      return [{ text: `sudo: command not found: ${arg.split(" ")[0]}`, className: "text-red-400/80" }];

    case "pwd":
      return [{ text: "~/akshay/portfolio", className: "text-zinc-300" }];

    case "date":
      return [{ text: new Date().toString(), className: "text-zinc-300" }];

    case "exit":
      return [{ text: "There is no escape.", className: "text-zinc-500" }];

    default:
      return [
        {
          text: `command not found: ${cmd}`,
          className: "text-red-400/80",
        },
        { text: "Type 'help' for available commands.", className: "text-zinc-600" },
      ];
  }
}

export function CommandInput() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [history, setHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<Array<{ prompt: string; lines: OutputLine[] }>>([]);

  const navigate = useCallback(
    (path: string) => {
      setTimeout(() => router.push(path), 400);
    },
    [router],
  );

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [output]);

  const runCommand = useCallback(
    (cmd: string) => {
      if (cmd.trim()) {
        setHistory((prev) => [cmd, ...prev]);
      }

      const result = processCommand(cmd, navigate);
      if (result === "clear") {
        setOutput([]);
        return;
      }

      setOutput((prev) => [...prev, { prompt: cmd, lines: result }]);
    },
    [navigate],
  );

  const handleSubmit = () => {
    const cmd = input;
    setInput("");
    setHistoryIdx(-1);
    runCommand(cmd);
  };

  const handleSuggestionClick = (cmd: string) => {
    setInput("");
    setHistoryIdx(-1);
    runCommand(cmd);
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length > 0) {
        const next = Math.min(historyIdx + 1, history.length - 1);
        setHistoryIdx(next);
        setInput(history[next]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIdx > 0) {
        const next = historyIdx - 1;
        setHistoryIdx(next);
        setInput(history[next]);
      } else {
        setHistoryIdx(-1);
        setInput("");
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const partial = input.trim().toLowerCase();
      const commands = ["help", "whoami", "ls", "cat", "cd", "clear", "echo", "pwd", "date", "exit"];
      const match = commands.find((c) => c.startsWith(partial));
      if (match) setInput(match);
    }
  };

  return (
    <div className="border-t border-white/10">
      <div
        ref={scrollRef}
        className="max-h-48 overflow-y-auto px-5 pt-3 sm:px-7"
      >
        {output.map((entry, i) => (
          <div key={i} className="mb-2">
            <p className="text-xs text-orange-300/80">
              <span className="text-zinc-600">$ </span>
              {entry.prompt}
            </p>
            {entry.lines.map((line, j) => (
              <p key={j} className={`text-xs ${line.className ?? "text-zinc-400"}`}>
                {line.text}
              </p>
            ))}
          </div>
        ))}
      </div>

      {/* Suggestion chips */}
      {output.length === 0 && (
        <div className="flex flex-wrap items-center gap-2 px-5 pt-3 sm:px-7">
          <span className="text-[10px] text-zinc-600">try:</span>
          {SUGGESTIONS.map((s) => (
            <button
              key={s.cmd}
              type="button"
              onClick={() => handleSuggestionClick(s.cmd)}
              className="rounded-md border border-white/8 bg-white/3 px-2.5 py-1 text-[10px] text-zinc-400 transition-all hover:border-orange-300/30 hover:bg-orange-400/8 hover:text-orange-200"
            >
              {s.label}
            </button>
          ))}
        </div>
      )}

      {/* Input line */}
      <div
        className="flex items-center gap-2 px-5 pb-4 pt-2 sm:px-7"
        onClick={() => inputRef.current?.focus()}
      >
        <span className="text-xs text-orange-300/80">$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 border-none bg-transparent text-xs text-zinc-300 caret-orange-300 outline-none placeholder:text-zinc-700"
          placeholder="click a suggestion above or type 'help'"
          spellCheck={false}
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
        />
      </div>
    </div>
  );
}
