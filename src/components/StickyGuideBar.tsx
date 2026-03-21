"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const guides = [
  { href: "/damage-mechanics", label: "Cơ Chế Sát Thương", icon: "⚔️" },
  { href: "/meta-builds", label: "Meta Builds", icon: "🏗️" },
  { href: "/endgame-strategy", label: "Chiến Lược Endgame", icon: "🗺️" },
];

export default function StickyGuideBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-30 border-b border-poe-border bg-poe-bg/90 backdrop-blur-md transition-all duration-300 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
      }`}
    >
      <div className="mx-auto max-w-4xl flex items-center justify-between px-6 py-2">
        <span className="hidden sm:block font-heading text-xs font-semibold text-poe-gold-dim tracking-wider uppercase">
          Hướng Dẫn Nâng Cao
        </span>
        <div className="flex items-center gap-1 sm:gap-2 w-full sm:w-auto justify-center sm:justify-end">
          {guides.map(({ href, label, icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-1.5 rounded-full border border-poe-border bg-poe-surface/60 px-3 py-1.5 text-xs text-poe-text-dim hover:text-poe-gold hover:border-poe-gold/40 transition-all"
            >
              <span className="text-sm">{icon}</span>
              <span className="hidden sm:inline">{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
