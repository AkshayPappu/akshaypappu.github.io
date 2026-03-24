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

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-24">
      <Link
        href="/blog"
        className="mb-8 inline-block font-mono text-sm text-orange-200/75 transition-colors hover:text-orange-200"
      >
        $ cd ..
      </Link>

      <header className="terminal-shell terminal-amber mb-12 rounded-xl border border-white/10 bg-black/60 px-5 py-5 font-mono">
        <time className="terminal-prompt text-xs">
          {post.frontmatter.date}
        </time>
        <h1 className="mt-3 text-4xl font-bold tracking-tight">
          {post.frontmatter.title}
        </h1>
      </header>

      <article>
        <MDXRemote source={post.content} components={mdxComponents} />
      </article>
    </div>
  );
}
