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
  MenuIcon,
  CloseIcon,
} from "./icons";
import { SearchModal } from "./SearchModal";
import type { SidebarItem } from "./Sidebar";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Resume", href: "/about" },
  { label: "Research", href: "/research" },
  { label: "Blog", href: "/blog" },
  { label: "Diploma", href: "/diplomaplan" },
];

const SOCIALS = [
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/nitresilient",
    Icon: LeetCodeIcon,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/nitresilient",
    Icon: LinkedInIcon,
  },
  {
    label: "GitHub",
    href: "https://github.com/nitresilient",
    Icon: GithubIcon,
  },
];

export function TopNav({ tocItems }: { tocItems?: SidebarItem[] }) {
  const pathname = usePathname();
  const [dark, setDark] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    if (menuOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [menuOpen]);

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

            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex items-center justify-center w-9 h-9 text-[var(--vp-c-text-2)] hover:text-[var(--vp-c-brand-1)] transition-colors"
              >
                <Icon className={label === "GitHub" ? "w-5 h-5" : "w-[18px] h-[18px]"} />
              </a>
            ))}
          </div>

          {/* Mobile: search trigger (below md) */}
          <button
            onClick={() => setSearchOpen(true)}
            aria-label="Search"
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-[var(--vp-c-text-2)] hover:text-[var(--vp-c-text-1)] transition-colors"
          >
            <SearchIcon className="w-5 h-5" />
          </button>

          {/* Mobile: hamburger (below lg) */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-[var(--vp-c-text-1)] hover:bg-[var(--vp-c-bg-elv)] transition-colors"
          >
            {menuOpen ? (
              <CloseIcon className="w-5 h-5" />
            ) : (
              <MenuIcon className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden fixed inset-0 top-16 z-20 transition-opacity duration-200 ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          aria-hidden
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-[calc(100vh-4rem)] w-[300px] max-w-[85vw] bg-[var(--vp-c-bg)] border-l border-[var(--vp-c-divider)] overflow-y-auto scroll-thin transition-transform duration-200 ease-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="py-3">
            {NAV_LINKS.map((l) => {
              const active = pathname === l.href;
              return (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-6 py-3 text-[15px] font-medium border-l-2 transition-colors ${
                    active
                      ? "text-[var(--vp-c-brand-1)] border-[var(--vp-c-brand-1)] bg-[var(--vp-c-bg-elv)]"
                      : "text-[var(--vp-c-text-2)] border-transparent hover:text-[var(--vp-c-text-1)]"
                  }`}
                >
                  {l.label}
                </a>
              );
            })}
          </nav>

          {tocItems && tocItems.length > 0 && (
            <div className="border-t border-[var(--vp-c-divider)] py-3">
              <p className="px-6 py-1 text-[12px] font-bold uppercase tracking-wide text-[var(--vp-c-text-3)]">
                On this page
              </p>
              {tocItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-6 py-2 text-[14px] text-[var(--vp-c-text-2)] hover:text-[var(--vp-c-brand-1)] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}

          <div className="border-t border-[var(--vp-c-divider)] px-6 py-4 flex items-center justify-between">
            <span className="text-[14px] text-[var(--vp-c-text-2)]">Theme</span>
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
          </div>

          <div className="border-t border-[var(--vp-c-divider)] px-6 py-4 flex items-center gap-4">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-[var(--vp-c-text-2)] hover:text-[var(--vp-c-brand-1)] transition-colors"
              >
                <Icon className={label === "GitHub" ? "w-6 h-6" : "w-[22px] h-[22px]"} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
