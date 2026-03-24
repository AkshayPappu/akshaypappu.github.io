import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h1: (props) => (
    <h1
      className="mb-6 text-4xl font-bold tracking-tight text-white"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="mb-4 mt-10 text-2xl font-semibold tracking-tight text-white"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="mb-3 mt-8 text-xl font-semibold tracking-tight text-white"
      {...props}
    />
  ),
  p: (props) => (
    <p className="mb-4 text-base leading-7 text-zinc-400" {...props} />
  ),
  a: (props) => (
    <a
      className="text-orange-200 underline decoration-orange-300/40 underline-offset-4 transition-colors hover:text-orange-100 hover:decoration-orange-200"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
  ul: (props) => (
    <ul className="mb-4 list-disc pl-6 text-zinc-400" {...props} />
  ),
  ol: (props) => (
    <ol className="mb-4 list-decimal pl-6 text-zinc-400" {...props} />
  ),
  li: (props) => <li className="mb-1 leading-7" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="my-6 border-l-2 border-orange-300/40 pl-4 italic text-zinc-500"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="rounded bg-orange-200/10 px-1.5 py-0.5 font-mono text-sm text-orange-100"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="my-6 overflow-x-auto rounded-xl border border-orange-300/25 bg-orange-200/5 p-4 font-mono text-sm leading-6 text-zinc-200"
      {...props}
    />
  ),
  hr: () => <hr className="my-8 border-orange-300/20" />,
  img: (props) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className="my-6 rounded-xl" alt={props.alt ?? ""} {...props} />
  ),
};
