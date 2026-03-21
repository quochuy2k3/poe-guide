"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

const advancedLinks = [
  { href: "/damage-mechanics", label: "⚔️ Sát Thương" },
  { href: "/meta-builds", label: "🏗️ Meta Builds" },
  { href: "/endgame-strategy", label: "🗺️ Endgame" },
];

const sections = [
  { id: "intro", label: "Khái Niệm Cơ Bản", num: "I" },
  { id: "classes", label: "Nhân Vật & Thăng Hạng", num: "II" },
  { id: "damage", label: "Cơ Chế Sát Thương", num: "III" },
  { id: "defense", label: "Hệ Thống Phòng Thủ", num: "IV" },
  { id: "gems", label: "Đá Kỹ Năng", num: "V" },
  { id: "passive-tree", label: "Cây Kỹ Năng", num: "VI" },
  { id: "items", label: "Trang Bị & Chế Tạo", num: "VII" },
  { id: "currency", label: "Tiền Tệ & Kinh Tế", num: "VIII" },
  { id: "leveling", label: "Cày Level & Chiến Dịch", num: "IX" },
  { id: "builds", label: "Xây Dựng Nhân Vật", num: "X" },
  { id: "atlas", label: "Bản Đồ & Atlas", num: "XI" },
  { id: "league", label: "Cơ Chế Mùa Giải", num: "XII" },
  { id: "bosses", label: "Boss Cuối Game", num: "XIII" },
  { id: "tools", label: "Công Cụ & Mẹo", num: "XIV" },
];

export default function Navigation() {
  const [active, setActive] = useState("intro");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  // Escape key closes mobile menu
  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMobileOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

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
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="block text-left">
            <div className="font-heading text-sm font-bold tracking-widest text-poe-gold uppercase">
              PoE Guide
            </div>
            <div className="mt-0.5 text-xs text-poe-text-dim">
              Hướng Dẫn Chuyên Sâu
            </div>
          </button>
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
        <div className="border-t border-poe-border px-3 py-3 space-y-1">
          <div className="text-[10px] font-heading font-semibold tracking-wider text-poe-text-dim uppercase mb-1 px-1">Nâng cao</div>
          {advancedLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-1 rounded px-2 py-1.5 text-xs text-poe-text-dim hover:text-poe-gold hover:bg-poe-surface/50 transition-all"
            >
              {label}
            </Link>
          ))}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="mt-1 text-[11px] text-poe-text-dim hover:text-poe-gold transition-colors px-1"
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
