import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import Link from "next/link";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { GlowPanel } from "@/components/glow-panel";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes, updates, and occasional thoughts.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
      <AnimateOnScroll animation="slide-up">
        <GlowPanel className="rounded-xl">
          <div className="terminal-shell terminal-amber mb-12 rounded-xl border border-white/10 bg-black/60 px-5 py-5 font-mono">
            <div className="crt-noise" />
            <p className="terminal-prompt mb-2 text-xs">$ git log --oneline -- blog/</p>
            <h1 className="crt-chromatic text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">Blog</h1>
            <p className="mt-3 max-w-lg text-sm text-zinc-500">
              Notes, updates, and occasional thoughts.
            </p>
          </div>
        </GlowPanel>
      </AnimateOnScroll>

      {posts.length === 0 ? (
        <AnimateOnScroll animation="fade-in" delay={200}>
          <div className="terminal-shell rounded-xl border border-white/10 bg-black/60 p-5 font-mono">
            <div className="crt-noise" />
            <p className="text-zinc-500">No commits yet in blog history.</p>
          </div>
        </AnimateOnScroll>
      ) : (
        <AnimateOnScroll animation="slide-up" delay={150}>
          <GlowPanel className="rounded-xl">
            <div className="terminal-shell terminal-amber overflow-hidden rounded-xl border border-white/10 bg-black/60 font-mono">
              <div className="crt-noise" />
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-orange-300/95" />
                  <span className="h-2.5 w-2.5 rounded-full bg-orange-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-500/60" />
                </div>
                <p className="text-xs tracking-wide text-zinc-500">
                  akshay@portfolio:~/blog
                </p>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-xs text-zinc-500">
                <p className="terminal-prompt">$ git log --oneline</p>
                <p>{posts.length} commits</p>
              </div>
              <div className="divide-y divide-white/10">
                {posts.map((post, i) => (
                  <AnimateOnScroll key={post.slug} animation="slide-up" delay={200 + i * 60}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group grid gap-2 px-4 py-4 transition-colors hover:bg-white/2 sm:grid-cols-[170px_minmax(0,1fr)] sm:items-start"
                    >
                      <div className="text-xs text-zinc-500">{post.frontmatter.date}</div>
                      <div className="min-w-0">
                        <p className="phosphor-white text-sm text-white transition-colors group-hover:text-orange-100">
                          <span className="terminal-prompt mr-2">commit</span>
                          {post.frontmatter.title}
                        </p>
                        <p className="mt-1 truncate text-xs text-zinc-500">
                          {post.frontmatter.excerpt}
                        </p>
                      </div>
                    </Link>
                  </AnimateOnScroll>
                ))}
                <p className="terminal-cursor px-4 py-3 text-xs text-zinc-500">
                  open a commit to read full entry
                </p>
              </div>
            </div>
          </GlowPanel>
        </AnimateOnScroll>
      )}
    </div>
  );
}
