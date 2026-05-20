"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { searchEntries, type SearchEntry } from "@/lib/searchIndex";
import { SearchIcon } from "./icons";

export function SearchModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [q, setQ] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const results: SearchEntry[] = useMemo(() => searchEntries(q), [q]);

  useEffect(() => {
    if (open) {
      setQ("");
      setActive(0);
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  }, [open]);

  useEffect(() => {
    setActive(0);
  }, [q]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActive((a) => Math.min(a + 1, Math.max(results.length - 1, 0)));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setActive((a) => Math.max(a - 1, 0));
      }
      if (e.key === "Enter") {
        const hit = results[active];
        if (hit) {
          window.location.href = hit.hash
            ? `${hit.path}#${hit.hash}`
            : hit.path;
          onClose();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, results, active, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-[12vh] px-4"
      onClick={onClose}
    >
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        aria-hidden
      />
      <div
        className="relative w-full max-w-[640px] bg-[var(--vp-c-bg-elv)] border border-[var(--vp-c-divider)] rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-4 h-14 border-b border-[var(--vp-c-divider)]">
          <SearchIcon className="w-4 h-4 text-[var(--vp-c-text-3)]" />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search the site…"
            className="flex-1 bg-transparent outline-none text-[15px] text-[var(--vp-c-text-1)] placeholder-[var(--vp-c-text-3)]"
          />
          <button
            onClick={onClose}
            className="text-[11px] font-mono px-1.5 py-0.5 rounded border border-[var(--vp-c-divider)] text-[var(--vp-c-text-3)]"
          >
            Esc
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto scroll-thin">
          {q.trim() === "" ? (
            <div className="px-4 py-8 text-sm text-[var(--vp-c-text-3)]">
              Try: <span className="font-mono">resume</span>,{" "}
              <span className="font-mono">psychology</span>,{" "}
              <span className="font-mono">ml</span>,{" "}
              <span className="font-mono">dance</span>…
            </div>
          ) : results.length === 0 ? (
            <div className="px-4 py-8 text-sm text-[var(--vp-c-text-3)]">
              No matches for &quot;{q}&quot;.
            </div>
          ) : (
            <ul>
              {results.map((r, i) => {
                const href = r.hash ? `${r.path}#${r.hash}` : r.path;
                const isActive = i === active;
                return (
                  <li key={`${r.path}-${r.hash ?? ""}-${r.title}`}>
                    <a
                      href={href}
                      onClick={onClose}
                      onMouseEnter={() => setActive(i)}
                      className={`block px-4 py-3 border-l-2 transition-colors ${
                        isActive
                          ? "bg-[var(--vp-c-bg-alt)] border-[var(--vp-c-brand-1)]"
                          : "border-transparent"
                      }`}
                    >
                      <div className="text-[14px] font-medium text-[var(--vp-c-text-1)]">
                        {r.title}
                      </div>
                      <div className="text-[12px] text-[var(--vp-c-text-3)] font-mono mt-0.5">
                        {r.section ? `${r.section} · ` : ""}
                        {r.path}
                        {r.hash ? `#${r.hash}` : ""}
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
