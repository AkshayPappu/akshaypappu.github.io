import type { Metadata } from "next";
import Link from "next/link";
import { projectsData } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "A collection of things I've built.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-24">
      <div className="terminal-shell terminal-amber overflow-hidden rounded-xl border border-white/10 bg-black/60 font-mono">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-orange-300/95" />
            <span className="h-2.5 w-2.5 rounded-full bg-orange-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-500/60" />
          </div>
          <p className="text-xs tracking-wide text-zinc-500">
            akshay@portfolio:~/projects
          </p>
        </div>

        <div className="space-y-4 px-5 py-5 sm:px-6">
          <p className="terminal-prompt text-xs">$ cd ./projects</p>
          <h1 className="text-4xl font-bold tracking-tight text-white">Projects</h1>

          <p className="terminal-prompt pt-2 text-xs">$ ls -la</p>
          <div className="space-y-2">
            {projectsData.map((project) => (
              <Link
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-md border border-transparent px-2 py-1 transition-all hover:border-orange-300/25 hover:bg-white/2"
              >
                <p className="text-sm text-white transition-colors hover:text-zinc-200">
                  {project.title}
                </p>
                <p className="text-xs text-zinc-500">
                  {project.description} - {project.category}
                </p>
              </Link>
            ))}
          </div>

          <p className="terminal-cursor pt-1 text-xs text-zinc-500">
            click any project to open
          </p>
        </div>
      </div>
    </div>
  );
}
