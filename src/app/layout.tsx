import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://quochuy2k3.github.io/poe-guide";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Path of Exile 1 — Hướng Dẫn Chuyên Sâu Tiếng Việt",
    template: "%s | PoE Guide Tiếng Việt",
  },
  description:
    "Hướng dẫn toàn diện Path of Exile 1 tiếng Việt: damage, defense, builds, atlas, currency farming, boss guides, crafting.",
  keywords: [
    "Path of Exile", "PoE", "hướng dẫn", "guide", "tiếng Việt",
    "builds", "passive tree", "skill gems", "currency", "atlas",
    "endgame", "league starter", "damage mechanics", "crafting",
    "boss guide", "ARPG", "Grinding Gear Games",
  ],
  authors: [{ name: "PoE Guide VN" }],
  creator: "PoE Guide VN",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    siteName: "PoE Guide Tiếng Việt",
    title: "Path of Exile 1 — Hướng Dẫn Chuyên Sâu Tiếng Việt",
    description:
      "Từ người mới đến endgame: damage, defense, builds, atlas, currency farming, boss guides.",
    images: [{ url: "/images/hero.jpg", width: 2560, height: 1440, alt: "Path of Exile Guide" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Path of Exile 1 — Hướng Dẫn Chuyên Sâu Tiếng Việt",
    description: "Hướng dẫn toàn diện PoE1 tiếng Việt.",
    images: ["/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
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
        <link rel="icon" href="/poe-guide/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
