import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Path of Exile 1 — Hướng Dẫn Cho Người Mới",
  description:
    "Hướng dẫn toàn diện Path of Exile 1 cho người mới. Classes, Skill Gems, Passive Tree, Currency, Builds, Atlas, Endgame và nhiều hơn nữa.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
