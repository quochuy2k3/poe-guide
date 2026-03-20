import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://quochuy2k3.github.io/poe-guide";
  const now = new Date().toISOString();

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/damage-mechanics`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/meta-builds`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/endgame-strategy`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}
