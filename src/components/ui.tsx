import React from "react";

export function Section({
  id,
  num,
  title,
  children,
}: {
  id: string;
  num: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20">
      <div className="mb-8">
        <span className="font-heading text-xs font-semibold tracking-[0.2em] text-poe-gold-dim uppercase">
          Chương {num}
        </span>
        <h2 className="section-title mt-1 font-heading text-2xl font-bold text-poe-text-bright sm:text-3xl">
          {title}
        </h2>
        <div className="mt-3 h-px w-24 bg-gradient-to-r from-poe-gold to-transparent" />
      </div>
      {children}
    </section>
  );
}

export function Panel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`game-panel rounded-lg p-5 ${className}`}>{children}</div>;
}

export function Tip({ children }: { children: React.ReactNode }) {
  return <div className="tip-box rounded-r-lg p-4 my-4 text-sm">{children}</div>;
}

export function Warning({ children }: { children: React.ReactNode }) {
  return <div className="warning-box rounded-r-lg p-4 my-4 text-sm">{children}</div>;
}

export function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="mt-8 mb-3 font-heading text-lg font-semibold text-poe-gold">{children}</h3>;
}

export function H4({ children }: { children: React.ReactNode }) {
  return <h4 className="mt-6 mb-2 font-heading text-base font-semibold text-poe-text-bright">{children}</h4>;
}

export function P({ children }: { children: React.ReactNode }) {
  return <p className="mb-4 text-poe-text leading-relaxed">{children}</p>;
}

export function B({ children }: { children: React.ReactNode }) {
  return <strong className="text-poe-text-bright font-semibold">{children}</strong>;
}

export function Gold({ children }: { children: React.ReactNode }) {
  return <span className="text-poe-gold font-semibold">{children}</span>;
}

export function Red({ children }: { children: React.ReactNode }) {
  return <span className="text-poe-red-bright font-semibold">{children}</span>;
}

export function Chaos({ children }: { children: React.ReactNode }) {
  return <span className="text-poe-chaos font-semibold">{children}</span>;
}

export function Blue({ children }: { children: React.ReactNode }) {
  return <span className="text-poe-blue font-semibold">{children}</span>;
}

export function Green({ children }: { children: React.ReactNode }) {
  return <span className="text-poe-green font-semibold">{children}</span>;
}
