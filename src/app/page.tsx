import Link from "next/link";
import Navigation from "@/components/Navigation";
import ReadingProgress from "@/components/ReadingProgress";
import BackToTop from "@/components/BackToTop";
import S01 from "@/components/sections/S01_BasicConcepts";
import S02 from "@/components/sections/S02_Classes";
import S03 from "@/components/sections/S03_DamageMechanics";
import S04 from "@/components/sections/S04_DefenseLayers";
import S05 from "@/components/sections/S05_SkillGems";
import S06 from "@/components/sections/S06_PassiveTree";
import S07 from "@/components/sections/S07_Items";
import S08 from "@/components/sections/S08_Currency";
import S09 from "@/components/sections/S09_Leveling";
import S10 from "@/components/sections/S10_Builds";
import S11 from "@/components/sections/S11_Atlas";
import S12 from "@/components/sections/S12_LeagueMechanics";
import S13 from "@/components/sections/S13_Bosses";
import S14 from "@/components/sections/S14_Tools";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "PoE Guide Tiếng Việt",
  description: "Hướng dẫn toàn diện Path of Exile 1 tiếng Việt.",
  url: "https://quochuy2k3.github.io/poe-guide",
  inLanguage: "vi",
  about: {
    "@type": "VideoGame",
    name: "Path of Exile",
    genre: "Action RPG",
    gamePlatform: ["PC", "PlayStation", "Xbox"],
    publisher: { "@type": "Organization", name: "Grinding Gear Games" },
  },
};

const advancedGuides = [
  {
    href: "/damage-mechanics",
    title: "Cơ Chế Sát Thương & Phòng Thủ",
    desc: "Công thức damage, chuỗi chuyển đổi, increased vs more, hiệu ứng trạng thái, hệ thống chí mạng, công thức giáp, tính toán EHP.",
    icon: "⚔️",
  },
  {
    href: "/meta-builds",
    title: "Build Mạnh Nhất & Bảng Xếp Hạng",
    desc: "Top 10 build đầu mùa, build đánh boss, build farm nhanh. Bảng xếp hạng Ascendancy, setup 6-link, quy mô ngân sách.",
    icon: "🏗️",
  },
  {
    href: "/endgame-strategy",
    title: "Chiến Lược Cuối Game",
    desc: "Chiến lược Atlas, farm tiền tệ, hướng dẫn chế tạo, farm boss hiệu quả, tăng độ khó bản đồ, Delve, Heist.",
    icon: "🗺️",
  },
];

const bp = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ReadingProgress />
      <Navigation />

      <main className="lg:pl-56">
        {/* Hero */}
        <header className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-6 text-center">
          <div className="absolute inset-0 z-0">
            <img
              src={`${bp}/images/hero.jpg`}
              alt=""
              className="h-full w-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-poe-bg/40 via-poe-bg/60 to-poe-bg" />
          </div>
          <div className="relative z-10 max-w-2xl">
            <div className="mb-4 inline-block rounded border border-poe-gold/30 bg-poe-gold/10 px-3 py-1 font-heading text-xs font-semibold tracking-widest text-poe-gold uppercase">
              Hướng Dẫn Toàn Diện — Chuyên Sâu
            </div>
            <h1 className="section-title font-heading text-4xl font-black leading-tight text-poe-text-bright sm:text-5xl md:text-6xl">
              Path of Exile
            </h1>
            <p className="mt-1 font-heading text-lg text-poe-gold sm:text-xl">
              Từ Người Mới Đến Endgame
            </p>
            <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-poe-text-dim">
              Damage mechanics, defense layers, meta builds, atlas strategies, boss guides,
              currency farming — tất cả những gì bạn cần để master Wraeclast.
            </p>
            <a
              href="#intro"
              className="mt-8 inline-flex items-center gap-2 rounded border border-poe-gold/40 bg-poe-gold/10 px-6 py-2.5 font-heading text-sm font-semibold tracking-wide text-poe-gold transition-all hover:bg-poe-gold/20 hover:border-poe-gold/60"
            >
              Bắt Đầu Đọc
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M8 3v10M4 9l4 4 4-4" />
              </svg>
            </a>
          </div>
        </header>

        {/* Content sections */}
        <div className="mx-auto max-w-4xl space-y-24 px-6 py-16 pt-8">
          <S01 />
          <S02 />
          <S03 />
          <S04 />
          <S05 />
          <S06 />
          <S07 />
          <S08 />
          <S09 />
          <S10 />
          <S11 />
          <S12 />
          <S13 />
          <S14 />

          {/* Advanced Guides links */}
          <section className="border-t border-poe-border pt-16">
            <div className="mb-8 text-center">
              <span className="font-heading text-xs font-semibold tracking-[0.2em] text-poe-gold-dim uppercase">
                Nâng Cao
              </span>
              <h2 className="section-title mt-1 font-heading text-2xl font-bold text-poe-text-bright sm:text-3xl">
                Hướng Dẫn Chuyên Sâu
              </h2>
              <p className="mt-2 text-sm text-poe-text-dim">
                Đi sâu hơn vào từng chủ đề — dành cho player muốn min-max và hiểu game ở level cao nhất.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {advancedGuides.map(({ href, title, desc, icon }) => (
                <Link
                  key={href}
                  href={href}
                  className="game-panel group rounded-lg p-5 transition-all hover:border-poe-gold/40 hover:shadow-lg hover:shadow-poe-gold/5"
                >
                  <span className="text-2xl">{icon}</span>
                  <h3 className="mt-2 font-heading text-sm font-bold text-poe-gold group-hover:text-poe-gold-bright transition-colors">
                    {title}
                  </h3>
                  <p className="mt-2 text-xs text-poe-text-dim leading-relaxed">{desc}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs text-poe-gold-dim group-hover:text-poe-gold transition-colors">
                    Đọc chi tiết
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M4 2l4 4-4 4" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="border-t border-poe-border px-6 py-8 text-center text-xs text-poe-text-dim">
          <p>
            Path of Exile® is a registered trademark of Grinding Gear Games.
            This is an unofficial fan guide.
          </p>
        </footer>
      </main>
      <BackToTop />
    </>
  );
}
