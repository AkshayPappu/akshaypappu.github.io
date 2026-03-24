import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-6">
        {/* Gradient orb */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <div className="h-[500px] w-[500px] animate-float rounded-full bg-[radial-gradient(circle,rgba(251,146,60,0.07)_0%,rgba(251,146,60,0.03)_32%,rgba(255,255,255,0.02)_62%,rgba(0,0,0,0)_100%)] blur-[140px]" />
        </div>

        <div className="relative z-10 w-full max-w-4xl">
          <div className="terminal-shell terminal-amber mb-10 animate-slide-up overflow-hidden rounded-2xl border border-white/15 bg-black/70 font-mono shadow-[0_0_70px_rgba(255,255,255,0.06)] backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-orange-300/95" />
                <span className="h-2.5 w-2.5 rounded-full bg-orange-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-500/60" />
              </div>
              <p className="text-xs tracking-wide text-zinc-500">
                akshay@portfolio:~/
              </p>
            </div>

            <div className="space-y-3 px-5 py-6 text-left sm:px-7">
              <p className="text-xs text-orange-300/80">$ whoami</p>
              <h1 className="terminal-heading text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                Hi, I&apos;m Akshay.
              </h1>
              <p className="text-sm text-zinc-400 sm:text-base">
                SWE @ Snowflake · Incoming @ Google · CS @ Virginia Tech
              </p>
              <p className="text-xs text-orange-300/80">$ ls ./options</p>
              <div className="space-y-1 text-sm text-zinc-300 sm:text-base">
                <Link
                  href="/projects"
                  className="block w-fit transition-colors hover:text-orange-200"
                >
                  ./view-projects
                </Link>
                <Link
                  href="/about"
                  className="block w-fit transition-colors hover:text-orange-200"
                >
                  ./about-me
                </Link>
                <p className="terminal-cursor mt-2 text-sm text-zinc-500">
                  select an option
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
