"use client";

import { useState, useRef, useEffect } from "react";

export default function SectionImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
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

  useEffect(() => {
    if (preview) {
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = ""; };
    }
  }, [preview]);

  if (error) return null;

  return (
    <>
      <div
        ref={ref}
        className={`section-img cursor-pointer group ${className}`}
        style={{
          opacity: visible && loaded ? 1 : 0,
          transform: visible && loaded ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
        onClick={() => setPreview(true)}
      >
        <img
          src={src}
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
          onClick={() => setPreview(false)}
        >
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />
          <button
            onClick={(e) => { e.stopPropagation(); setPreview(false); }}
            className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 hover:bg-white/20 hover:text-white transition-all"
            aria-label="Close"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 5l10 10M15 5L5 15" />
            </svg>
          </button>
          <img
            src={src}
            alt={alt}
            className="relative max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-4 left-0 right-0 text-center text-xs text-white/50">
            Click anywhere hoặc ✕ để đóng
          </div>
        </div>
      )}
    </>
  );
}
