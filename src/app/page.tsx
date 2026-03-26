import { TypewriterTerminal } from "@/components/typewriter-terminal";
import { GlowPanel } from "@/components/glow-panel";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-4 sm:px-6">
        {/* Gradient orb */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <div className="h-[500px] w-[500px] animate-float rounded-full bg-[radial-gradient(circle,rgba(251,146,60,0.07)_0%,rgba(251,146,60,0.03)_32%,rgba(255,255,255,0.02)_62%,rgba(0,0,0,0)_100%)] blur-[140px]" />
        </div>

        <div className="relative z-10 w-full max-w-4xl">
          <GlowPanel className="mb-10 rounded-2xl">
            <div className="terminal-shell terminal-amber animate-slide-up overflow-hidden rounded-2xl border border-white/15 bg-black/70 font-mono shadow-[0_0_70px_rgba(255,255,255,0.06)] backdrop-blur-xl">
              <div className="crt-noise" />
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

              <TypewriterTerminal />
            </div>
          </GlowPanel>
        </div>
      </section>
    </div>
  );
}
