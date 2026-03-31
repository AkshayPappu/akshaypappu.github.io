import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h1: (props) => (
    <h1
      className="mb-6 mt-14 text-3xl font-bold tracking-tight text-white first:mt-0 sm:text-4xl"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="mb-5 mt-14 border-l-2 border-orange-400/30 pl-4 text-xl font-semibold tracking-tight text-white first:mt-0 sm:text-2xl"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="mb-3 mt-10 text-lg font-semibold tracking-tight text-white sm:text-xl"
      {...props}
    />
  ),
  h4: (props) => (
    <h4
      className="mb-3 mt-10 text-base font-medium tracking-tight text-zinc-200"
      {...props}
    />
  ),
  p: (props) => (
    <p
      className="mb-6 text-[17px] leading-[1.9] text-zinc-300/90 sm:text-lg sm:leading-[1.9]"
      {...props}
    />
  ),
  a: (props) => (
    <a
      className="text-orange-200/90 underline decoration-orange-300/25 underline-offset-[3px] transition-colors hover:text-orange-100 hover:decoration-orange-200/50"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
  ul: (props) => (
    <ul
      className="mb-6 space-y-2 pl-5 text-zinc-300/90 [&>li]:relative [&>li]:pl-2 [&>li]:[list-style-type:'–_']"
      {...props}
    />
  ),
  ol: (props) => (
    <ol className="mb-6 list-decimal space-y-2 pl-6 text-zinc-300/90" {...props} />
  ),
  li: (props) => (
    <li className="text-[17px] leading-[1.9] sm:text-lg sm:leading-[1.9]" {...props} />
  ),
  strong: (props) => (
    <strong className="font-semibold text-white" {...props} />
  ),
  em: (props) => (
    <em className="text-zinc-200" {...props} />
  ),
  blockquote: (props) => (
    <blockquote
      className="my-8 border-l-2 border-orange-300/30 py-1 pl-5 text-lg italic text-zinc-400 sm:text-xl"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="rounded-md bg-white/[0.06] px-1.5 py-0.5 font-mono text-[0.875em] text-orange-100/90"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="my-8 overflow-x-auto rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 font-mono text-sm leading-relaxed text-zinc-200"
      {...props}
    />
  ),
  hr: () => (
    <div className="my-12 flex justify-center gap-3" role="separator">
      <span className="h-1 w-1 rounded-full bg-zinc-700" />
      <span className="h-1 w-1 rounded-full bg-zinc-700" />
      <span className="h-1 w-1 rounded-full bg-zinc-700" />
    </div>
  ),
  img: (props) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className="my-8 rounded-xl border border-white/[0.06]"
      alt={props.alt ?? ""}
      {...props}
    />
  ),
};
