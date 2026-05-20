"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  SearchIcon,
  GithubIcon,
  LeetCodeIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
} from "./icons";
import { SearchModal } from "./SearchModal";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Resume", href: "/about" },
  { label: "Research", href: "/research" },
  { label: "Blog", href: "/blog" },
];

export function TopNav() {
  const pathname = usePathname();
  const [dark, setDark] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  };

  return (
    <header
      className="fixed top-0 inset-x-0 z-30 h-16 bg-[var(--vp-c-bg)] border-b border-[var(--vp-c-divider)]"
      style={{ borderBottomColor: "var(--vp-c-divider)" }}
    >
      <div className="h-full max-w-[var(--vp-layout-max-width)] mx-auto flex items-center px-6 lg:px-8">
        <a href="/" className="flex items-center gap-2 shrink-0 mr-6">
          <img src="/logo.svg" alt="nitresilient" className="w-8 h-8 rounded" />
          <span
            className="text-[18px] tracking-tight"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 500,
              background:
                "linear-gradient(135deg, var(--vp-c-brand-1), var(--vp-c-brand-2))",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            nitresilient
          </span>
        </a>

        <div className="hidden md:flex items-center gap-2 ml-2 mr-auto">
          <button
            onClick={() => setSearchOpen(true)}
            className="flex items-center gap-2 h-9 px-3 pr-2 rounded-full border border-[var(--vp-c-divider)] bg-[var(--vp-c-bg-elv)] text-[var(--vp-c-text-2)] hover:border-[var(--vp-c-brand-1)] transition-colors text-sm w-[230px]"
          >
            <SearchIcon className="w-4 h-4" />
            <span className="flex-1 text-left">Search</span>
            <span className="px-1.5 py-0.5 rounded border border-[var(--vp-c-divider)] text-[11px] text-[var(--vp-c-text-3)] font-mono">
              Ctrl K
            </span>
          </button>
        </div>

        <div className="flex items-center gap-1 md:gap-2 ml-auto">
          <nav className="hidden lg:flex items-center gap-1 mr-2 text-[14px] font-medium">
            {NAV_LINKS.map((l) => {
              const active = pathname === l.href;
              return (
                <a
                  key={l.label}
                  href={l.href}
                  className={`relative px-3 h-16 inline-flex items-center transition-colors ${
                    active
                      ? "text-[var(--vp-c-text-1)]"
                      : "text-[var(--vp-c-text-2)] hover:text-[var(--vp-c-text-1)]"
                  }`}
                >
                  {l.label}
                  {active && (
                    <span className="absolute left-3 right-3 bottom-[14px] h-px bg-[var(--vp-c-brand-1)]" />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center pl-2 ml-1 border-l border-[var(--vp-c-divider)] h-9 gap-2">
            <button
              aria-label="Toggle theme"
              onClick={toggle}
              className="relative w-[44px] h-[22px] rounded-full bg-[var(--vp-c-bg-elv)] border border-[var(--vp-c-divider)] flex items-center px-1 text-[var(--vp-c-text-2)]"
            >
              <span
                className={`absolute top-[2px] w-[16px] h-[16px] rounded-full bg-[var(--vp-c-bg)] border border-[var(--vp-c-divider)] flex items-center justify-center transition-transform ${
                  dark ? "translate-x-[22px]" : "translate-x-0"
                }`}
              >
                {dark ? <MoonIcon className="w-2.5 h-2.5" /> : <SunIcon className="w-3 h-3" />}
              </span>
            </button>

            <a
              href="https://leetcode.com/u/nitresilient"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
              className="inline-flex items-center justify-center w-9 h-9 text-[var(--vp-c-text-2)] hover:text-[var(--vp-c-brand-1)] transition-colors"
            >
              <LeetCodeIcon className="w-[18px] h-[18px]" />
            </a>

            <a
              href="https://linkedin.com/in/nitresilient"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center justify-center w-9 h-9 text-[var(--vp-c-text-2)] hover:text-[var(--vp-c-brand-1)] transition-colors"
            >
              <LinkedInIcon className="w-[18px] h-[18px]" />
            </a>

            <a
              href="https://github.com/nitresilient"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex items-center justify-center w-9 h-9 text-[var(--vp-c-text-2)] hover:text-[var(--vp-c-text-1)] transition-colors"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
