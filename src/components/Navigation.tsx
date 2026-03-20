"use client";

import { useState, useEffect, useCallback } from "react";

const sections = [
  { id: "intro", label: "Khái Niệm Cơ Bản", num: "I" },
  { id: "classes", label: "Nhân Vật & Ascendancy", num: "II" },
  { id: "damage", label: "Damage Mechanics", num: "III" },
  { id: "defense", label: "Defense Layers", num: "IV" },
  { id: "gems", label: "Skill Gems & Supports", num: "V" },
  { id: "passive-tree", label: "Passive Tree & Jewels", num: "VI" },
  { id: "items", label: "Items & Crafting", num: "VII" },
  { id: "currency", label: "Currency & Economy", num: "VIII" },
  { id: "leveling", label: "Leveling & Campaign", num: "IX" },
  { id: "builds", label: "Builds & Meta", num: "X" },
  { id: "atlas", label: "Atlas & Mapping", num: "XI" },
  { id: "league", label: "League Mechanics", num: "XII" },
  { id: "bosses", label: "Endgame Bosses", num: "XIII" },
  { id: "tools", label: "Tools & Tips", num: "XIV" },
];

export default function Navigation() {
  const [active, setActive] = useState("intro");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (scrolling) return;

      let current = "intro";
      for (const { id } of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            current = id;
          }
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolling]);

  const handleClick = useCallback((id: string) => {
    setMobileOpen(false);
    setActive(id);
    setScrolling(true);

    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }

    setTimeout(() => setScrolling(false), 1000);
  }, []);

  return (
    <>
      {/* Desktop sidebar */}
      <nav className="fixed left-0 top-0 z-40 hidden h-screen w-56 flex-col border-r border-poe-border bg-poe-bg/95 backdrop-blur-sm lg:flex">
        <div className="border-b border-poe-border px-4 py-4">
          <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="block">
            <div className="font-heading text-sm font-bold tracking-widest text-poe-gold uppercase">
              PoE Guide
            </div>
            <div className="mt-0.5 text-xs text-poe-text-dim">
              Hướng Dẫn Chuyên Sâu
            </div>
          </a>
        </div>
        <div className="flex-1 overflow-y-auto py-2 scrollbar-thin">
          {sections.map(({ id, label, num }) => (
            <button
              key={id}
              onClick={() => handleClick(id)}
              className={`flex w-full items-center gap-2 border-l-2 px-4 py-2 text-left text-xs transition-all duration-200 ${
                active === id
                  ? "nav-link-active"
                  : "border-transparent text-poe-text-dim hover:text-poe-text hover:bg-poe-surface/50"
              }`}
            >
              <span className="font-heading text-[10px] font-semibold tracking-wider text-poe-gold-dim w-6 shrink-0">
                {num}
              </span>
              <span className="leading-tight">{label}</span>
            </button>
          ))}
        </div>
        <div className="border-t border-poe-border px-4 py-3">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xs text-poe-text-dim hover:text-poe-gold transition-colors"
          >
            ↑ Về đầu trang
          </button>
        </div>
      </nav>

      {/* Mobile top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-poe-border bg-poe-bg/95 px-4 py-3 backdrop-blur-sm lg:hidden">
        <div className="font-heading text-sm font-bold tracking-widest text-poe-gold uppercase">
          PoE Guide
        </div>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-8 w-8 items-center justify-center text-poe-text-dim hover:text-poe-gold"
          aria-label="Menu"
        >
          {mobileOpen ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 5l10 10M15 5L5 15" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 5h14M3 10h14M3 15h14" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <nav className="absolute right-0 top-0 h-full w-64 border-l border-poe-border bg-poe-bg pt-16 overflow-y-auto animate-slide-in">
            {sections.map(({ id, label, num }) => (
              <button
                key={id}
                onClick={() => handleClick(id)}
                className={`flex w-full items-center gap-2 px-5 py-3 text-left text-sm transition-all ${
                  active === id
                    ? "text-poe-gold bg-poe-surface"
                    : "text-poe-text-dim hover:text-poe-text"
                }`}
              >
                <span className="font-heading text-xs font-semibold text-poe-gold-dim w-8">
                  {num}
                </span>
                {label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
