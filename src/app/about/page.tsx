import type { Metadata } from "next";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { GlowPanel } from "@/components/glow-panel";

export const metadata: Metadata = {
  title: "About",
  description: "A bit about who I am and what I do.",
};

export const aboutMeData = [
  {
    id: 1,
    bio: "Hey! I'm Akshay Pappu, a software engineer and student at Virginia Tech. I spend most of my time working with C++ and Python, mainly on machine learning and low-level systems stuff. I'm into OS internals, performance optimization, and the kind of code that runs close to the metal.",
  },
  {
    id: 2,
    bio: "When I'm not coding, I'm probably reading about C++/Systems theory or figuring out how to squeeze more performance out of something. If you want to talk about tech or work on something interesting, feel free to reach out.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <AnimateOnScroll animation="slide-up">
        <GlowPanel className="rounded-xl">
          <div className="terminal-shell terminal-amber mb-16 rounded-xl border border-white/10 bg-black/60 px-5 py-5 font-mono">
            <div className="crt-noise" />
            <p className="terminal-prompt mb-2 text-xs">$ cat ./about.md</p>
            <h1 className="crt-chromatic text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">About Me</h1>
          </div>
        </GlowPanel>
      </AnimateOnScroll>

      <div className="grid place-items-center gap-12 lg:grid-cols-[320px_minmax(0,1fr)] lg:place-items-start lg:gap-20">
        {/* Avatar + info */}
        <AnimateOnScroll animation="slide-right" delay={100}>
          <div className="flex flex-col items-center gap-6 lg:items-start">
            <div className="aura-ring aspect-square w-60 overflow-hidden rounded-full bg-white/2 sm:w-72 lg:w-80">
              <img
                src="/profile.jpg"
                alt="Akshay Pappu profile photo"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="text-center lg:text-left">
              <h2 className="phosphor-white text-xl font-semibold">Akshay Pappu</h2>
              <p className="mt-1.5 font-mono text-xs text-zinc-500">
                SWE @ Snowflake · Incoming @ Google
                <br />
                CS @ Virginia Tech
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Bio */}
        <AnimateOnScroll animation="slide-left" delay={200}>
          <GlowPanel className="rounded-xl">
            <div className="terminal-shell terminal-amber max-w-3xl overflow-hidden rounded-xl border border-white/10 bg-black/60 font-mono">
              <div className="crt-noise" />
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-orange-300/95" />
                  <span className="h-2.5 w-2.5 rounded-full bg-orange-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-500/60" />
                </div>
                <p className="text-xs tracking-wide text-zinc-500">
                  akshay@portfolio:~/about
                </p>
              </div>
              <div className="space-y-5 px-5 py-5 text-sm leading-7 text-zinc-300 sm:px-6">
                <p className="terminal-prompt text-xs">$ cat ./bio.txt</p>
                {aboutMeData.map((item) => (
                  <div key={item.id} className="space-y-2">
                    <p className="text-zinc-300">{item.bio}</p>
                  </div>
                ))}
                <p className="terminal-cursor pt-2 text-xs text-zinc-500">end of file</p>
              </div>
            </div>
          </GlowPanel>
        </AnimateOnScroll>
      </div>
    </div>
  );
}
