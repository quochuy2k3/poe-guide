import Navigation from "@/components/Navigation";
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

export default function Home() {
  return (
    <>
      <Navigation />

      <main className="lg:pl-56">
        {/* Hero */}
        <header className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-6 text-center">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/hero.jpg"
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

        {/* Content */}
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
        </div>

        {/* Footer */}
        <footer className="border-t border-poe-border px-6 py-8 text-center text-xs text-poe-text-dim">
          <p>
            Path of Exile® is a registered trademark of Grinding Gear Games.
            This is an unofficial fan guide.
          </p>
        </footer>
      </main>
    </>
  );
}
