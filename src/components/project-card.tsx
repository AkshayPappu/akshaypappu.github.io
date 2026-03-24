import Link from "next/link";

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  link: string;
}

export function ProjectCard({ title, category, description, link }: Project) {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="terminal-shell terminal-amber group flex flex-col gap-3 rounded-xl border border-white/10 bg-black/60 p-5 font-mono transition-all hover:border-orange-300/30 hover:bg-white/2"
    >
      <p className="terminal-prompt text-xs">$ open project</p>
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold tracking-tight text-white transition-colors group-hover:text-orange-100">
          {title}
        </h3>
        <svg
          className="mt-1 h-4 w-4 shrink-0 text-zinc-600 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-orange-200"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 17L17 7M17 7H7M17 7v10"
          />
        </svg>
      </div>
      <p className="text-sm leading-relaxed text-zinc-400">{description}</p>
      <p className="font-mono text-xs tracking-wide text-orange-200/70">{category}</p>
    </Link>
  );
}
