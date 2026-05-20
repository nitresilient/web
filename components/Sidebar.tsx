"use client";

import { useEffect, useState } from "react";

export type SidebarItem = { label: string; href: string };

export function Sidebar({
  title,
  items,
}: {
  title: string;
  items: SidebarItem[];
}) {
  const [active, setActive] = useState<string>(items[0]?.href ?? "");

  useEffect(() => {
    const ids = items
      .map((i) => i.href.split("#")[1])
      .filter(Boolean) as string[];
    if (ids.length === 0) return;

    const onScroll = () => {
      const top = window.scrollY + 120;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= top) current = id;
      }
      setActive(`#${current}`);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [items]);

  return (
    <aside
      className="fixed top-16 bottom-0 z-25 w-[var(--vp-sidebar-width)] bg-[var(--vp-c-bg-alt)] border-r border-[var(--vp-c-divider)] overflow-y-auto scroll-thin hidden lg:block"
      style={{ zIndex: 25, left: "var(--vp-side-gap)" }}
    >
      <div className="px-8 py-8">
        <h2 className="text-[15px] font-bold text-[var(--vp-c-text-1)] mb-2">
          {title}
        </h2>
        <ul className="mt-2">
          {items.map((item) => {
            const isActive = item.href === active;
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`block py-2 text-[14px] leading-[1.5] transition-colors ${
                    isActive
                      ? "text-[var(--vp-c-brand-1)] font-semibold"
                      : "text-[var(--vp-c-text-2)] hover:text-[var(--vp-c-text-1)]"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
