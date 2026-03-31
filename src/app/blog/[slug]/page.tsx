import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { mdxComponents } from "@/components/mdx-components";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = getAllPosts();
  if (posts.length === 0) return [{ slug: "_placeholder" }];
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.excerpt,
  };
}

function estimateReadingTime(text: string): number {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 230));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const readingTime = estimateReadingTime(post.content);

  return (
    <div className="mx-auto w-full max-w-[44rem] px-5 py-16 sm:px-6 sm:py-24">
      <Link
        href="/blog"
        className="group mb-10 inline-flex items-center gap-2 font-mono text-xs tracking-wide text-zinc-500 transition-colors hover:text-orange-200/80"
      >
        <span className="inline-block transition-transform group-hover:-translate-x-0.5">&larr;</span>
        <span>cd ..</span>
      </Link>

      <header className="terminal-shell terminal-amber mb-14 rounded-xl border border-white/10 bg-black/60 p-6 font-mono sm:p-8">
        <div className="crt-noise" />
        <div className="mb-4 flex items-center gap-3 text-xs text-zinc-500">
          <time className="terminal-prompt">{post.frontmatter.date}</time>
          <span className="text-zinc-700">/</span>
          <span>{readingTime} min read</span>
        </div>
        <h1 className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
          {post.frontmatter.title}
        </h1>
      </header>

      <article className="prose-custom">
        <MDXRemote source={post.content} components={mdxComponents} />
      </article>

      <footer className="mt-20 border-t border-white/5 pt-8">
        <Link
          href="/blog"
          className="group inline-flex items-center gap-2 font-mono text-xs tracking-wide text-zinc-500 transition-colors hover:text-orange-200/80"
        >
          <span className="inline-block transition-transform group-hover:-translate-x-0.5">&larr;</span>
          <span>back to all posts</span>
        </Link>
      </footer>
    </div>
  );
}
