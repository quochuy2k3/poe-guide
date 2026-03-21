"use client";

import { useState, useRef, useEffect, useCallback } from "react";

const bp = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function SectionImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const fullSrc = src.startsWith("/") ? `${bp}${src}` : src;
  const [error, setError] = useState(false);
  const [preview, setPreview] = useState(false);
  const [visible, setVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1, rootMargin: "50px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Lock body scroll + Escape key
  useEffect(() => {
    if (!preview) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setPreview(false); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [preview]);

  const open = useCallback(() => setPreview(true), []);
  const close = useCallback(() => setPreview(false), []);

  if (error) return null;

  return (
    <>
      <div
        ref={ref}
        role="button"
        tabIndex={0}
        aria-label={`Xem ảnh: ${alt}`}
        className={`section-img cursor-pointer group ${className}`}
        style={{
          opacity: visible && loaded ? 1 : 0,
          transform: visible && loaded ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
        onClick={open}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); } }}
      >
        <img
          src={fullSrc}
          alt={alt}
          onError={() => setError(true)}
          onLoad={() => setLoaded(true)}
          loading="lazy"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition-all duration-300">
          <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100 text-white/90 text-xs bg-black/60 rounded-full px-4 py-2 backdrop-blur-sm flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              <path d="M11 8v6M8 11h6"/>
            </svg>
            Xem full size
          </span>
        </div>
      </div>

      {preview && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 cursor-pointer lightbox-overlay"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={alt}
        >
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />
          <button
            onClick={(e) => { e.stopPropagation(); close(); }}
            className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 hover:bg-white/20 hover:text-white transition-all"
            aria-label="Đóng"
            autoFocus
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 5l10 10M15 5L5 15" />
            </svg>
          </button>
          <img
            src={fullSrc}
            alt={alt}
            className="relative max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-4 left-0 right-0 text-center text-xs text-white/50">
            ESC hoặc click anywhere để đóng
          </div>
        </div>
      )}
    </>
  );
}
