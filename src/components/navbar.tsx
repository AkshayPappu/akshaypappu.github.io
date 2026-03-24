"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/70 font-mono backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-sm font-semibold tracking-wide text-orange-200 transition-colors hover:text-orange-100"
        >
          akshay@portfolio:~/
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 sm:flex">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm transition-colors ${
                pathname === href
                  ? "text-orange-200"
                  : "text-zinc-500 hover:text-orange-200"
              }`}
            >
              ./{label.toLowerCase()}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1.5 sm:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-px w-5 bg-white transition-transform ${
              mobileOpen ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-5 bg-white transition-opacity ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px w-5 bg-white transition-transform ${
              mobileOpen ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-black/90 backdrop-blur-xl sm:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={`rounded-lg px-3 py-2 text-sm transition-colors ${
                  pathname === href
                    ? "bg-orange-400/15 text-orange-200"
                    : "text-zinc-500 hover:text-orange-200"
                }`}
              >
                ./{label.toLowerCase()}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
