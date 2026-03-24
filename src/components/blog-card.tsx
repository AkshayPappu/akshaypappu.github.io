import Link from "next/link";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

export function BlogCard({ slug, title, date, excerpt }: BlogPost) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="terminal-shell terminal-amber group block rounded-xl border border-white/10 bg-black/60 p-5 font-mono transition-all hover:border-orange-300/30 hover:bg-white/2"
    >
      <div className="flex flex-col gap-3">
        <time className="terminal-prompt text-xs">$ cat {date}</time>
        <h3 className="text-base font-semibold tracking-tight text-white transition-colors group-hover:text-orange-100">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-zinc-400">{excerpt}</p>
        <span className="mt-1 text-xs text-zinc-600 transition-colors group-hover:text-orange-200">
          ./read-more
        </span>
      </div>
    </Link>
  );
}
