"use client";

import { useState, useEffect } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-poe-border bg-poe-surface/90 text-poe-gold-dim shadow-lg backdrop-blur-sm transition-all hover:bg-poe-surface hover:text-poe-gold hover:border-poe-gold/40 lg:hidden"
      aria-label="Về đầu trang"
    >
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 14V4M5 8l4-4 4 4" />
      </svg>
    </button>
  );
}
