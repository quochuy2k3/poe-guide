import type { Metadata } from "next";
import Link from "next/link";
import { Section, Panel, Tip, Warning, H3, H4, P, B, Gold } from "@/components/ui";

export const metadata: Metadata = {
  title: "Damage Mechanics — Hệ Thống Sát Thương Chi Tiết",
  description:
    "Hướng dẫn chi tiết damage mechanics Path of Exile 1: damage types, conversion, increased vs more, hit vs DoT, ailments, crit system, penetration, EHP calculation.",
  keywords: ["PoE damage", "damage conversion", "increased vs more", "ailments", "crit", "penetration", "EHP", "Path of Exile"],
};

function Formula({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 rounded-lg border border-poe-gold/30 bg-poe-gold/5 px-5 py-3 font-mono text-sm text-poe-text-bright overflow-x-auto">
      {children}
    </div>
  );
}

export default function DamageMechanicsPage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="border-b border-poe-border bg-poe-bg px-6 py-6">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-xs text-poe-text-dim hover:text-poe-gold transition-colors mb-4"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M10 3L5 8l5 5" />
            </svg>
            Quay lai Huong Dan Co Ban
          </Link>
          <div className="mb-2 inline-block rounded border border-poe-gold/30 bg-poe-gold/10 px-3 py-1 font-heading text-xs font-semibold tracking-widest text-poe-gold uppercase">
            Huong Dan Nang Cao
          </div>
          <h1 className="section-title font-heading text-3xl font-black text-poe-text-bright sm:text-4xl">
            Co Che Sat Thuong & Phong Thu
          </h1>
          <p className="mt-2 text-sm text-poe-text-dim max-w-2xl">
            Phan tich chi tiet toan bo he thong sat thuong va phong thu trong Path of Exile 1 — tu cong thuc tinh damage,
            chuyen doi sat thuong, ailment, critical strike, den cac lop phong thu va EHP.
          </p>
        </div>
      </header>

      {/* Table of Contents */}
      <div className="border-b border-poe-border bg-poe-surface/30 px-6 py-4">
        <div className="mx-auto max-w-4xl">
          <div className="font-heading text-xs font-semibold text-poe-gold-dim uppercase tracking-wider mb-3">Muc Luc</div>
          <nav className="grid gap-1 sm:grid-cols-2 lg:grid-cols-3 text-xs">
            {[
              { id: "damage-types", label: "I. Cac Loai Sat Thuong & Chuyen Doi" },
              { id: "damage-calc", label: "II. Cong Thuc Tinh Sat Thuong" },
              { id: "hit-vs-dot", label: "III. Hit vs Damage over Time" },
              { id: "ailments", label: "IV. He Thong Ailment" },
              { id: "crit", label: "V. Critical Strike" },
              { id: "penetration", label: "VI. Penetration & Exposure" },
              { id: "scaling", label: "VII. Cac Nganh Sat Thuong" },
              { id: "defense", label: "VIII. Cac Lop Phong Thu" },
              { id: "ehp", label: "IX. Effective Hit Points (EHP)" },
            ].map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-poe-text-dim hover:text-poe-gold transition-colors py-1"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl space-y-24 px-6 py-16">

        {/* ===== 1. CAC LOAI SAT THUONG & CHUYEN DOI ===== */}
        <Section id="damage-types" num="I" title="Cac Loai Sat Thuong & Chuyen Doi Sat Thuong">
          <H3>5 loai sat thuong trong Path of Exile</H3>
          <P>
            Moi sat thuong trong PoE deu thuoc mot trong <B>5 loai (damage type)</B>. Ba loai Fire, Cold, Lightning duoc gom
            chung thanh <B>Elemental Damage</B>. Physical va Chaos dung rieng.
          </P>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 mb-6">
            {[
              { name: "Physical", color: "bg-gray-800/60 border-gray-600/50", desc: "Sat thuong vat ly — den tu vu khi, va cham. Bi giam boi Armour. Khong bi giam boi Elemental Resistance." },
              { name: "Fire", color: "bg-red-900/40 border-red-800/50", desc: "Sat thuong lua — gay Ignite (dot chay). Bi giam boi Fire Resistance (mac dinh cap 75%)." },
              { name: "Cold", color: "bg-cyan-900/40 border-cyan-700/50", desc: "Sat thuong lanh — gay Chill (cham lai) va Freeze (dong bang). Bi giam boi Cold Resistance." },
              { name: "Lightning", color: "bg-yellow-900/40 border-yellow-700/50", desc: "Sat thuong set — gay Shock (tang damage nhan vao). Bi giam boi Lightning Resistance. Co range damage rong nhat." },
              { name: "Chaos", color: "bg-purple-900/40 border-purple-700/50", desc: "Sat thuong hon loan — di xuyen qua Energy Shield (mac dinh). Bi giam boi Chaos Resistance (mac dinh 0%, KHONG phai 75%)." },
            ].map(({ name, color, desc }) => (
              <div key={name} className={`rounded-lg border p-4 ${color}`}>
                <div className="font-heading text-sm font-bold text-poe-text-bright">{name}</div>
                <div className="mt-2 text-xs text-poe-text-dim leading-relaxed">{desc}</div>
              </div>
            ))}
          </div>

          <Tip>
            <B>Luu y quan trong:</B> Chaos Resistance cua nguoi choi bat dau o 0% (khong nhu Elemental Resistance duoc tang
            qua quest reward). Vao endgame, ban can it nhat -60% den 0% Chaos Res de khong bi one-shot boi cac nguon Chaos damage.
          </Tip>

          <H3>Chuyen doi sat thuong (Damage Conversion)</H3>
          <P>
            Damage Conversion la co che <B>doi loai sat thuong tu loai nay sang loai khac</B>. Day la mot trong nhung co che
            manh nhat de scale damage trong PoE vi sat thuong da chuyen doi se duoc huong <B>modifier cua CA HAI loai</B> — loai goc va loai moi.
          </P>

          <H4>Chuoi chuyen doi (Conversion Chain)</H4>
          <P>
            Sat thuong chi co the chuyen doi theo <B>mot chieu duy nhat</B>, theo thu tu:
          </P>
          <Formula>
            Physical &rarr; Lightning &rarr; Cold &rarr; Fire &rarr; Chaos
          </Formula>
          <P>
            Ban co the <B>nhay buoc</B> (vi du Physical &rarr; Cold) nhung <B>KHONG the di nguoc lai</B> (vi du Cold &rarr; Physical
            la khong the). Dieu nay co nghia la ban co the chuyen Physical &rarr; Lightning &rarr; Cold &rarr; Fire nhung khong the Fire &rarr; Cold.
          </P>

          <H4>Hai loai chuyen doi</H4>
          <div className="overflow-x-auto mb-4">
            <table className="poe-table">
              <thead>
                <tr>
                  <th>Loai</th>
                  <th>Vi du modifier</th>
                  <th>Co che</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-poe-gold font-semibold whitespace-nowrap">Converted to</td>
                  <td className="text-sm">{`"50% of Physical Damage Converted to Fire Damage"`}</td>
                  <td className="text-sm">Doi loai damage — 50% Physical <B>bien mat</B>, tro thanh Fire. Tong damage khong doi.</td>
                </tr>
                <tr>
                  <td className="text-poe-gold font-semibold whitespace-nowrap">Gain as Extra</td>
                  <td className="text-sm">{`"Gain 20% of Physical Damage as Extra Fire Damage"`}</td>
                  <td className="text-sm">Giu nguyen Physical, <B>them 20% nua</B> duoi dang Fire. Tong damage <B>tang len</B>.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <H4>Quy tac khi Conversion vuot qua 100%</H4>
          <P>
            Neu tong cac modifier {`"Converted to"`} tu mot loai damage vuot qua 100%, chung se bi <B>scale xuong</B> de tong bang dung 100%.
            Thu tu uu tien:
          </P>
          <ol className="mb-4 space-y-2 text-sm list-decimal list-inside">
            <li><B>Conversion tu Skill Gem</B> duoc bao toan truoc (khong bi scale xuong neu co the).</li>
            <li><B>Conversion tu gear, passive</B> (non-skill) se bi scale xuong phan con lai.</li>
          </ol>

          <Panel>
            <div className="font-heading text-sm font-bold text-poe-gold mb-2">Vi Du Cu The</div>
            <div className="text-sm text-poe-text leading-relaxed space-y-2">
              <p>Gia su ban co:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Skill gem: 50% Physical Converted to Fire</li>
                <li>Passive tree: 40% Physical Converted to Lightning</li>
                <li>Gear: 30% Physical Converted to Cold</li>
              </ul>
              <p className="mt-2">Tong = 50% + 40% + 30% = 120% &gt; 100%.</p>
              <p>Skill gem (50% Fire) duoc giu nguyen. Con lai 50% chia cho non-skill: Lightning va Cold bi scale:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Lightning: 40% / (40% + 30%) * 50% = <Gold>28.6%</Gold></li>
                <li>Cold: 30% / (40% + 30%) * 50% = <Gold>21.4%</Gold></li>
              </ul>
              <p className="mt-2">Ket qua: 50% Fire + 28.6% Lightning + 21.4% Cold = 100%</p>
            </div>
          </Panel>

          <H4>Damage da chuyen doi huong ca hai loai modifier</H4>
          <P>
            Day la ly do conversion manh: sat thuong da chuyen doi <B>nho loai goc ma no da di qua</B>. Vi du: neu ban convert
            Physical &rarr; Fire, phan damage do se duoc huong <B>dong thoi</B> ca {`"% increased Physical Damage"`} va {`"% increased Fire Damage"`}.
          </P>
          <P>
            Dieu nay con manh hon khi chain conversion: Physical &rarr; Lightning &rarr; Cold &rarr; Fire thi phan damage do huong
            modifier cua <B>tat ca 4 loai</B>: Physical, Lightning, Cold, VA Fire.
          </P>

          <H4>Gain as Extra — tinh tren damage goc truoc conversion</H4>
          <P>
            Modifier {`"Gain X% of Physical Damage as Extra Y"`} duoc tinh tren <B>toan bo Physical damage goc</B>, truoc khi bat ky
            conversion nao xay ra. Do do, no khong bi anh huong boi conversion.
          </P>
          <P>
            Dac biet, modifier nhu {`"Gain #% of Non-Chaos Damage as Extra Chaos Damage"`} co the <B>apply nhieu lan</B> tren
            cung mot damage khi no di qua nhieu loai damage khac nhau trong chuoi conversion.
          </P>
        </Section>

        {/* ===== 2. CONG THUC TINH SAT THUONG ===== */}
        <Section id="damage-calc" num="II" title="Cong Thuc Tinh Sat Thuong (Damage Calculation)">
          <H3>Cong thuc tong quat</H3>
          <P>
            Toan bo qua trinh tinh damage trong PoE tuan theo mot cong thuc co dinh. Hieu dung cong thuc nay la chia khoa
            de build duoc hieu qua.
          </P>
          <Formula>
            Final Damage = Base Damage &times; (1 + &Sigma; Increased/Reduced) &times; &Pi; (1 + More/Less) &times; Crit Multiplier &times; Resistance Factor
          </Formula>

          <H4>Buoc 1: Base Damage (Sat thuong co so)</H4>
          <P>
            <B>Voi Attack:</B> Base damage den tu <B>vu khi</B> (weapon damage range tren vu khi). Gem chi xac dinh ty le
            su dung weapon damage (vi du: {`"Deals 150% of Base Attack Damage"`}).
          </P>
          <P>
            <B>Voi Spell:</B> Base damage den tu <B>skill gem</B> — tang theo gem level. Vu khi khong anh huong truc tiep
            (tru khi co modifier dac biet).
          </P>

          <H4>Buoc 2: Added Damage (Flat damage them vao)</H4>
          <P>
            Cac modifier nhu {`"Adds 10 to 20 Fire Damage"`} duoc cong vao base damage. Moi skill co mot gia tri{" "}
            <B>Damage Effectiveness</B> (thuong ghi tren gem) — flat added damage se bi <B>nhan voi gia tri nay</B>.
          </P>
          <Panel>
            <div className="text-sm text-poe-text leading-relaxed">
              <B>Vi du:</B> Skill co Damage Effectiveness = 150%. Ban co ring {`"Adds 10 to 20 Fire Damage"`}.
              <br />
              &rarr; Flat damage thuc te duoc them = (10 to 20) &times; 1.5 = <Gold>15 to 30 Fire Damage</Gold>.
            </div>
          </Panel>

          <H4>Buoc 3: Increased vs More — Su Khac Biet Quan Trong Nhat</H4>
          <P>
            Day la khai niem <B>cot loi nhat</B> trong tinh damage PoE:
          </P>

          <div className="grid gap-4 sm:grid-cols-2 mb-4">
            <Panel className="border-l-2 border-l-blue-500">
              <div className="font-heading text-sm font-bold text-blue-400 mb-2">Increased / Reduced (Cong)</div>
              <div className="text-sm text-poe-text leading-relaxed space-y-2">
                <p>Tat ca cac nguon {`"increased"`} va {`"reduced"`} <B>cong lai voi nhau</B>, roi nhan mot lan duy nhat.</p>
                <p className="text-poe-text-dim">Vi du: 50% increased + 30% increased + 20% increased = 100% increased</p>
                <p className="text-poe-text-dim">&rarr; Damage &times; (1 + 1.0) = Damage &times; <Gold>2.0</Gold></p>
              </div>
            </Panel>
            <Panel className="border-l-2 border-l-red-500">
              <div className="font-heading text-sm font-bold text-red-400 mb-2">More / Less (Nhan)</div>
              <div className="text-sm text-poe-text leading-relaxed space-y-2">
                <p>Moi nguon {`"more"`} va {`"less"`} la mot <B>multiplier rieng biet</B>, nhan voi nhau.</p>
                <p className="text-poe-text-dim">Vi du: 30% more &times; 40% more</p>
                <p className="text-poe-text-dim">&rarr; Damage &times; 1.3 &times; 1.4 = Damage &times; <Gold>1.82</Gold></p>
              </div>
            </Panel>
          </div>

          <Warning>
            <B>Tai sao {`"More"`} manh hon {`"Increased"`}?</B> Vi {`"Increased"`} co diminishing returns —
            khi ban da co 300% increased thi them 50% nua chi tang tu 4.0 len 4.5 (tang 12.5%).
            Nhung 50% more luon tang <B>dung 50%</B> bat ke ban da co bao nhieu modifier khac.
          </Warning>

          <H4>Vi du tinh toan day du</H4>
          <Panel>
            <div className="text-sm text-poe-text leading-relaxed space-y-1">
              <p><B>Base weapon damage:</B> 100 Physical</p>
              <p><B>Skill:</B> Deals 150% of Base Attack Damage</p>
              <p><B>Increased:</B> 200% increased Physical Damage (tu passive, gear)</p>
              <p><B>More:</B> 30% more Attack Damage (tu support gem) &times; 40% more Melee Damage</p>
              <p className="pt-2 border-t border-poe-border mt-2">
                <B>Tinh:</B>
              </p>
              <p>= 100 &times; 1.5 &times; (1 + 2.0) &times; 1.3 &times; 1.4</p>
              <p>= 100 &times; 1.5 &times; 3.0 &times; 1.3 &times; 1.4</p>
              <p>= <Gold>819 Physical Damage</Gold></p>
            </div>
          </Panel>

          <H3>Thu tu tinh toan (Order of Operations)</H3>
          <P>Thu tu day du khi DEAL damage:</P>
          <ol className="mb-4 space-y-2 text-sm list-decimal list-inside">
            <li><B>Base Damage</B> — tu weapon hoac skill gem</li>
            <li><B>Added Damage</B> — flat damage &times; damage effectiveness</li>
            <li><B>Damage Conversion</B> — {`"Gain as Extra"`} tinh truoc, roi {`"Converted to"`}</li>
            <li><B>Increased/Reduced</B> — cong tat ca lai, nhan mot lan</li>
            <li><B>More/Less</B> — moi cai nhan rieng</li>
            <li><B>Critical Strike</B> — nhan crit multiplier neu la crit hit</li>
            <li><B>Damage Roll</B> — roll gia tri trong range (voi Lightning range rat rong)</li>
            <li><B>Double/Triple Damage</B> — neu co, nhan 2x hoac 3x</li>
          </ol>
        </Section>

        {/* ===== 3. HIT vs DOT ===== */}
        <Section id="hit-vs-dot" num="III" title="Hit Damage vs Damage over Time (DoT)">
          <H3>Su khac biet co ban</H3>
          <P>
            PoE chia sat thuong thanh 2 nhanh lon: <B>Hit</B> (sat thuong tuc thoi khi trung muc tieu) va{" "}
            <B>Damage over Time</B> (sat thuong lien tuc theo thoi gian). Hai nhanh nay co <B>he thong modifier KHAC NHAU</B>.
          </P>

          <div className="overflow-x-auto mb-4">
            <table className="poe-table">
              <thead>
                <tr>
                  <th>Dac diem</th>
                  <th>Hit Damage</th>
                  <th>Damage over Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-poe-gold font-semibold">Cach apply</td>
                  <td className="text-sm">Tuc thoi khi trung</td>
                  <td className="text-sm">Lien tuc trong thoi gian</td>
                </tr>
                <tr>
                  <td className="text-poe-gold font-semibold">Critical Strike</td>
                  <td className="text-sm">Co the crit</td>
                  <td className="text-sm">KHONG the crit</td>
                </tr>
                <tr>
                  <td className="text-poe-gold font-semibold">Leech</td>
                  <td className="text-sm">Co the leech life/mana/ES</td>
                  <td className="text-sm">KHONG the leech</td>
                </tr>
                <tr>
                  <td className="text-poe-gold font-semibold">Penetration</td>
                  <td className="text-sm">Hoat dong</td>
                  <td className="text-sm">KHONG hoat dong</td>
                </tr>
                <tr>
                  <td className="text-poe-gold font-semibold">Damage Conversion</td>
                  <td className="text-sm">Hoat dong</td>
                  <td className="text-sm">KHONG hoat dong</td>
                </tr>
                <tr>
                  <td className="text-poe-gold font-semibold">Stacking</td>
                  <td className="text-sm">Moi hit la rieng</td>
                  <td className="text-sm">Chi DoT manh nhat co hieu luc (tru Poison)</td>
                </tr>
                <tr>
                  <td className="text-poe-gold font-semibold">Modifier apply</td>
                  <td className="text-sm">Attack/Spell damage, Projectile, Area, v.v.</td>
                  <td className="text-sm">Damage over Time, DoT Multi, loai damage cu the</td>
                </tr>
              </tbody>
            </table>
          </div>

          <H3>Damage over Time Multiplier (DoT Multi)</H3>
          <P>
            <B>DoT Multi</B> la mot loai multiplier <B>chi danh cho DoT</B>. Tat ca cac nguon DoT Multi <B>cong voi nhau</B>{" "}
            (additive voi nhau) nhung la <B>mot multiplier rieng</B> (multiplicative voi increased damage).
          </P>
          <Formula>
            DoT DPS = Base DoT &times; (1 + &Sigma; Increased) &times; (1 + &Sigma; DoT Multi) &times; &Pi; (1 + More/Less)
          </Formula>
          <P>
            Vi du: ban co 50% increased Fire Damage, 80% DoT Multi, va 30% more Burning Damage:
          </P>
          <Panel>
            <div className="text-sm text-poe-text leading-relaxed">
              = Base &times; (1 + 0.5) &times; (1 + 0.8) &times; 1.3
              <br />
              = Base &times; 1.5 &times; 1.8 &times; 1.3
              <br />
              = Base &times; <Gold>3.51</Gold>
            </div>
          </Panel>

          <H3>Quy tac xep chong DoT</H3>
          <P>
            Hau het DoT <B>khong xep chong</B> — chi ban DoT co DPS cao nhat co hieu luc tai mot thoi diem.
            Cac ngoai le quan trong:
          </P>
          <ul className="mb-4 space-y-2 text-sm">
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
              <span><B>Poison:</B> Xep chong vo han — moi hit tao mot stack Poison doc lap. Day la ly do Poison build co the
                dat DPS cuc cao.</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
              <span><B>Corrupted Blood:</B> Xep chong theo stack counter (toi da 10 stack).</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
              <span><B>Ignite, Bleed:</B> Chi ban manh nhat co hieu luc. Ignite/Bleed moi neu manh hon se thay the cai cu.</span>
            </li>
          </ul>

          <H3>DoT DPS Cap</H3>
          <P>
            Co mot gioi han sat thuong DoT toi da ma moi enemy co the nhan: <B>~35.8 trieu DPS</B> (chinh xac la 35,791,394 DPS).
            Day la gioi han ky thuat: (2^31 - 1) / 60. Trong thuc te, chi cac build Poison cuc ky scale moi co the cham muc nay.
          </P>

          <H3>Cac modifier KHONG apply cho DoT</H3>
          <P>
            Nhung modifier sau <B>KHONG</B> anh huong DoT (tru khi ghi ro):
          </P>
          <ul className="mb-4 space-y-1 text-sm">
            {[
              "Attack Damage (tru khi co 'Modifiers to Attack Damage apply to Damage over Time')",
              "Spell Damage (tru khi co 'Modifiers to Spell Damage apply to Damage over Time')",
              "Projectile Damage",
              "Area Damage",
              "Weapon Damage",
              "Melee Damage",
            ].map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-poe-red-bright shrink-0">x</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* ===== 4. HE THONG AILMENT ===== */}
        <Section id="ailments" num="IV" title="He Thong Ailment (Trang Thai Di Thuong)">
          <H3>Tong quan</H3>
          <P>
            Ailment la cac <B>debuff (hieu ung tieu cuc)</B> duoc gay ra boi hit. Co <B>6 ailment chinh</B>,
            chia thanh 2 loai:
          </P>

          <div className="grid gap-3 sm:grid-cols-2 mb-6">
            <Panel className="border-l-2 border-l-red-500">
              <div className="font-heading text-sm font-bold text-red-400 mb-2">Damaging Ailments (Gay Sat Thuong)</div>
              <ul className="text-sm space-y-1">
                <li><Gold>Ignite</Gold> — dot chay (Fire DoT)</li>
                <li><Gold>Poison</Gold> — nhiem doc (Chaos DoT)</li>
                <li><Gold>Bleed</Gold> — chay mau (Physical DoT)</li>
              </ul>
            </Panel>
            <Panel className="border-l-2 border-l-cyan-500">
              <div className="font-heading text-sm font-bold text-cyan-400 mb-2">Non-Damaging Ailments (Debuff)</div>
              <ul className="text-sm space-y-1">
                <li><Gold>Shock</Gold> — tang damage nhan vao</li>
                <li><Gold>Chill</Gold> — giam toc do hanh dong</li>
                <li><Gold>Freeze</Gold> — dong bang hoan toan</li>
              </ul>
            </Panel>
          </div>

          <H3>Cong thuc Ailment Threshold</H3>
          <P>
            Hieu qua cua non-damaging ailment phu thuoc vao <B>Ailment Threshold</B> cua enemy. Trong da so
            truong hop, Ailment Threshold = <B>maximum life cua monster</B>. Voi endgame boss (Shaper, Elder, v.v.),
            threshold duoc giam xuong de ailment van co the apply.
          </P>

          {/* IGNITE */}
          <H3>Ignite (Dot Chay)</H3>
          <div className="overflow-x-auto mb-4">
            <table className="poe-table">
              <thead><tr><th>Thuoc tinh</th><th>Gia tri</th></tr></thead>
              <tbody>
                <tr><td className="text-poe-gold font-semibold">Nguon gay</td><td>Fire damage tu Hit</td></tr>
                <tr><td className="text-poe-gold font-semibold">Base DPS</td><td><B>90% cua Fire damage cua hit</B> moi giay (truoc 3.16 la 50%, da doi)</td></tr>
                <tr><td className="text-poe-gold font-semibold">Base Duration</td><td>4 giay</td></tr>
                <tr><td className="text-poe-gold font-semibold">Stacking</td><td>KHONG xep chong — chi Ignite manh nhat co hieu luc</td></tr>
                <tr><td className="text-poe-gold font-semibold">Chance mac dinh</td><td>0% (can modifier hoac crit de apply)</td></tr>
                <tr><td className="text-poe-gold font-semibold">Crit bonus</td><td>+50% DoT Multiplier cho Ailment tu crit hit</td></tr>
              </tbody>
            </table>
          </div>
          <Formula>
            Ignite DPS = Fire Hit Damage &times; 0.9 &times; (1 + &Sigma; Increased) &times; (1 + &Sigma; DoT Multi) &times; &Pi; More/Less
          </Formula>

          {/* POISON */}
          <H3>Poison (Nhiem Doc)</H3>
          <div className="overflow-x-auto mb-4">
            <table className="poe-table">
              <thead><tr><th>Thuoc tinh</th><th>Gia tri</th></tr></thead>
              <tbody>
                <tr><td className="text-poe-gold font-semibold">Nguon gay</td><td>Physical + Chaos damage tu Hit</td></tr>
                <tr><td className="text-poe-gold font-semibold">Base DPS</td><td><B>30% cua (Physical + Chaos) damage cua hit</B> moi giay</td></tr>
                <tr><td className="text-poe-gold font-semibold">Base Duration</td><td>2 giay</td></tr>
                <tr><td className="text-poe-gold font-semibold">Stacking</td><td><Gold>XEP CHONG VO HAN</Gold> — moi hit tao 1 stack doc lap</td></tr>
                <tr><td className="text-poe-gold font-semibold">Chance mac dinh</td><td>0% (can modifier)</td></tr>
                <tr><td className="text-poe-gold font-semibold">Damage type</td><td>Chaos Damage over Time</td></tr>
              </tbody>
            </table>
          </div>
          <Formula>
            Moi Poison Stack DPS = (Phys + Chaos Hit) &times; 0.3 &times; (1 + &Sigma; Increased) &times; (1 + &Sigma; DoT Multi) &times; &Pi; More/Less
          </Formula>
          <Tip>
            <B>Vi sao Poison manh?</B> Vi xep chong vo han. Voi attack speed cao (5-10 hit/s) va poison duration dai
            (co the 8-10 giay voi modifier), ban co the co 50-100 stack Poison cung luc tren boss.
            Tong DPS = DPS moi stack &times; so stack.
          </Tip>

          {/* BLEED */}
          <H3>Bleed (Chay Mau)</H3>
          <div className="overflow-x-auto mb-4">
            <table className="poe-table">
              <thead><tr><th>Thuoc tinh</th><th>Gia tri</th></tr></thead>
              <tbody>
                <tr><td className="text-poe-gold font-semibold">Nguon gay</td><td>Physical damage tu <B>Attack</B> (chi attack, khong phai spell)</td></tr>
                <tr><td className="text-poe-gold font-semibold">Base DPS</td><td><B>70% cua Physical damage cua hit</B> moi giay</td></tr>
                <tr><td className="text-poe-gold font-semibold">Base Duration</td><td>5 giay</td></tr>
                <tr><td className="text-poe-gold font-semibold">Moving bonus</td><td>Enemy dang di chuyen chiu them <B>+140% sat thuong</B> (tuc la 168% tong cong, gap 2.4 lan)</td></tr>
                <tr><td className="text-poe-gold font-semibold">Stacking</td><td>KHONG xep chong — chi Bleed manh nhat</td></tr>
              </tbody>
            </table>
          </div>
          <Formula>
            Bleed DPS (dung yen) = Phys Hit &times; 0.7 &times; modifiers
            <br />
            Bleed DPS (di chuyen) = Phys Hit &times; 0.7 &times; 2.4 &times; modifiers
          </Formula>

          {/* SHOCK */}
          <H3>Shock (Gay Soc)</H3>
          <P>
            Shock khong gay sat thuong truc tiep — no lam enemy chiu <B>them sat thuong tu moi nguon</B>.
          </P>
          <div className="overflow-x-auto mb-4">
            <table className="poe-table">
              <thead><tr><th>Thuoc tinh</th><th>Gia tri</th></tr></thead>
              <tbody>
                <tr><td className="text-poe-gold font-semibold">Hieu ung</td><td>Enemy chiu them <B>toi da 50% increased damage taken</B></td></tr>
                <tr><td className="text-poe-gold font-semibold">Base Duration</td><td>2 giay</td></tr>
                <tr><td className="text-poe-gold font-semibold">Nguong toi thieu</td><td>Shock &lt; 5% bi huy — khong co hieu luc</td></tr>
                <tr><td className="text-poe-gold font-semibold">Chance mac dinh</td><td>0% (crit = 100% chance)</td></tr>
              </tbody>
            </table>
          </div>
          <Formula>
            Shock Effect = 0.5 &times; (Lightning Damage / Ailment Threshold) ^ 0.4 &times; (1 + &Sigma; increased effect of Shock)
          </Formula>
          <P>
            Cong thuc nay su dung <B>luy thua 0.4</B> — co nghia la de dat 50% max shock, ban can deal damage{" "}
            <B>rat lon so voi ailment threshold</B> cua enemy (xap xi 100% HP). Nhung de dat 15-20% shock thi chi can
            khoang 2-5% HP la du, rat hieu qua cho mapping.
          </P>

          {/* CHILL */}
          <H3>Chill (Lam Cham)</H3>
          <div className="overflow-x-auto mb-4">
            <table className="poe-table">
              <thead><tr><th>Thuoc tinh</th><th>Gia tri</th></tr></thead>
              <tbody>
                <tr><td className="text-poe-gold font-semibold">Hieu ung</td><td>Giam action speed cua enemy <B>toi da 30%</B></td></tr>
                <tr><td className="text-poe-gold font-semibold">Nguong toi thieu</td><td>Chill &lt; 5% bi huy</td></tr>
                <tr><td className="text-poe-gold font-semibold">Base Duration</td><td>2 giay</td></tr>
                <tr><td className="text-poe-gold font-semibold">Dac biet</td><td>Cold damage <B>luon gay Chill</B> (100% chance)</td></tr>
              </tbody>
            </table>
          </div>
          <Formula>
            Chill Effect = 0.5 &times; (Cold Damage / Ailment Threshold) ^ 0.4 &times; (1 + &Sigma; increased effect of Chill)
          </Formula>
          <P>
            Cong thuc giong Shock nhung cap o 30% thay vi 50%. Voi 100% increased effect of Chill, ban chi can khoang
            0.06% HP de dat muc Chill toi thieu (5%).
          </P>

          {/* FREEZE */}
          <H3>Freeze (Dong Bang)</H3>
          <div className="overflow-x-auto mb-4">
            <table className="poe-table">
              <thead><tr><th>Thuoc tinh</th><th>Gia tri</th></tr></thead>
              <tbody>
                <tr><td className="text-poe-gold font-semibold">Hieu ung</td><td>Enemy KHONG THE hanh dong (100% less action speed)</td></tr>
                <tr><td className="text-poe-gold font-semibold">Duration toi thieu</td><td><B>0.3 giay</B> — Freeze ngan hon bi huy</td></tr>
                <tr><td className="text-poe-gold font-semibold">Duration toi da</td><td><B>3 giay</B></td></tr>
                <tr><td className="text-poe-gold font-semibold">Chance mac dinh</td><td>0% (crit = 100% chance)</td></tr>
              </tbody>
            </table>
          </div>
          <Formula>
            Freeze Duration = 0.06 giay &times; (Cold Damage / Ailment Threshold &times; 100)
          </Formula>
          <P>
            De Freeze mot monster, ban can deal it nhat <B>5% Ailment Threshold</B> Cold damage trong mot hit
            (de dat 0.3 giay toi thieu). Voi boss co HP rat cao, Freeze gan nhu bat kha thi tru khi
            co cac co che dac biet nhu Shaper of Winter (Elementalist).
          </P>

          <Warning>
            <B>Boss immunity:</B> Nhieu endgame boss co <B>minimum action speed</B> (khoang 50%), co nghia la du bi
            Freeze van khong hoan toan bat dong. Ho cung thuong co ailment threshold <B>thap hon max HP</B> de
            de apply ailment hon, nhung van rat kho freeze/shock dang ke.
          </Warning>
        </Section>

        {/* ===== 5. CRITICAL STRIKE ===== */}
        <Section id="crit" num="V" title="Critical Strike (Don Chi Mang)">
          <H3>Co che co ban</H3>
          <P>
            Critical Strike la co che lam <B>tang sat thuong cua mot hit</B> bang cach nhan voi Critical Strike Multiplier.
            Nhan vat mac dinh co <B>150% Crit Multi</B> (tuc la crit hit gay 1.5x damage).
            Monster co base <B>130% Crit Multi</B>.
          </P>

          <H3>Cong thuc tinh Crit Chance</H3>
          <Formula>
            Crit Chance = Base Crit &times; (1 + &Sigma; Increased Crit Chance) &times; &Pi; (1 + More Crit Chance)
          </Formula>
          <P>
            <B>Base Crit Chance</B> phu thuoc vao vu khi hoac skill:
          </P>
          <div className="overflow-x-auto mb-4">
            <table className="poe-table">
              <thead><tr><th>Nguon</th><th>Base Crit</th></tr></thead>
              <tbody>
                <tr><td>Axe, Mace</td><td className="text-poe-text-bright">5%</td></tr>
                <tr><td>Sword</td><td className="text-poe-text-bright">5-6%</td></tr>
                <tr><td>Claw, Bow</td><td className="text-poe-text-bright">6-6.5%</td></tr>
                <tr><td>Wand</td><td className="text-poe-text-bright">7%</td></tr>
                <tr><td>Dagger, Rune Dagger</td><td className="text-poe-text-bright">6.3-9%</td></tr>
                <tr><td>Spell (phu thuoc gem)</td><td className="text-poe-text-bright">5-6% (thong thuong)</td></tr>
                <tr><td>Unarmed</td><td className="text-poe-text-bright">0%</td></tr>
              </tbody>
            </table>
          </div>

          <H3>Cong thuc tinh Crit Multiplier</H3>
          <Formula>
            Crit Damage = Hit Damage &times; (150% + &Sigma; Additional Crit Multi)
          </Formula>
          <P>
            Vi du: Ban co +100% to Critical Strike Multiplier tu gear va passive.
            <br />
            &rarr; Crit Damage = Hit Damage &times; (150% + 100%) = Hit Damage &times; <Gold>250%</Gold> = 2.5x damage.
          </P>

          <H3>Effective DPS voi Critical Strike</H3>
          <P>
            De tinh DPS trung binh co tinh crit:
          </P>
          <Formula>
            Effective DPS = Base DPS &times; (1 + Crit Chance &times; (Crit Multi - 100%) / 100%)
          </Formula>
          <Panel>
            <div className="text-sm text-poe-text leading-relaxed space-y-1">
              <p><B>Vi du:</B> Base DPS = 10,000. Crit Chance = 50%. Crit Multi = 400%.</p>
              <p>Effective DPS = 10,000 &times; (1 + 0.5 &times; (400% - 100%) / 100%)</p>
              <p>= 10,000 &times; (1 + 0.5 &times; 3.0)</p>
              <p>= 10,000 &times; 2.5</p>
              <p>= <Gold>25,000 DPS</Gold></p>
            </div>
          </Panel>

          <H3>Lucky Crits</H3>
          <P>
            Khi crit chance la {`"lucky"`} (vi du tu Diamond Flask), game se <B>roll 2 lan va lay ket qua tot hon</B>.
            Dieu nay tuong duong voi viec tang crit chance theo cong thuc:
          </P>
          <Formula>
            Effective Crit Chance (Lucky) = 1 - (1 - Crit Chance)^2
          </Formula>
          <P>
            Vi du: 50% crit chance voi Lucky &rarr; 1 - (1 - 0.5)^2 = 1 - 0.25 = <Gold>75%</Gold> effective crit chance.
          </P>

          <H3>Crit va Ailment</H3>
          <P>
            Critical strike co <B>100% chance gay Ignite, Freeze, va Shock</B>.
            Ngoai ra, damaging ailment tu crit hit duoc <B>+50% DoT Multiplier</B> bonus.
          </P>
          <Tip>
            <B>Perfect Agony (Keystone):</B> Cho phep Crit Multi anh huong den Ailment damage (voi 150% effectiveness
            cua Crit Multi apply cho DoT Multi) nhung giam 30% hit damage. Rat manh cho Poison/Ignite build.
          </Tip>
        </Section>

        {/* ===== 6. PENETRATION & EXPOSURE ===== */}
        <Section id="penetration" num="VI" title="Penetration, Exposure & Resistance Reduction">
          <H3>3 cach giam Resistance cua enemy</H3>
          <P>
            Co 3 co che chinh de giam resistance cua enemy, va chung <B>hoat dong khac nhau hoan toan</B>:
          </P>

          <div className="overflow-x-auto mb-4">
            <table className="poe-table">
              <thead>
                <tr>
                  <th>Co che</th>
                  <th>Cach hoat dong</th>
                  <th>Apply cho DoT?</th>
                  <th>Vi du</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-poe-gold font-semibold whitespace-nowrap">Resistance Reduction</td>
                  <td className="text-sm">Truc tiep giam gia tri resistance (uncapped) cua enemy</td>
                  <td className="text-sm text-poe-green">CO</td>
                  <td className="text-sm">Curse (Flammability: -44% Fire Res)</td>
                </tr>
                <tr>
                  <td className="text-poe-gold font-semibold whitespace-nowrap">Exposure</td>
                  <td className="text-sm">Debuff giam elemental resistance. Nhieu Exposure cung loai KHONG xep chong — chi manh nhat</td>
                  <td className="text-sm text-poe-green">CO</td>
                  <td className="text-sm">Wave of Conviction: -25% (loai damage cao nhat)</td>
                </tr>
                <tr>
                  <td className="text-poe-gold font-semibold whitespace-nowrap">Penetration</td>
                  <td className="text-sm">Khong thay doi resistance thuc te — chi lam hit coi nhu resistance thap hon khi tinh damage</td>
                  <td className="text-sm text-poe-red-bright">KHONG</td>
                  <td className="text-sm">Fire Penetration Support: 37% Fire Pen</td>
                </tr>
              </tbody>
            </table>
          </div>

          <H3>Thu tu apply</H3>
          <ol className="mb-4 space-y-2 text-sm list-decimal list-inside">
            <li><B>Resistance Reduction</B> (curse, -X% resistance modifier) &rarr; giam uncapped resistance</li>
            <li><B>Exposure</B> &rarr; giam uncapped resistance (cong voi buoc 1)</li>
            <li><B>Resistance Cap</B> &rarr; apply max resistance (thuong 75%)</li>
            <li><B>Penetration</B> &rarr; tru them tu gia tri da cap &rarr; ra effective resistance cho hit do</li>
          </ol>

          <H3>Cong thuc damage sau Resistance</H3>
          <Formula>
            Damage Taken = Hit Damage &times; (1 - Effective Resistance / 100)
          </Formula>
          <Formula>
            Effective Resistance = min(Uncapped Resistance, Max Resistance) - Penetration
          </Formula>

          <Panel>
            <div className="font-heading text-sm font-bold text-poe-gold mb-2">Vi Du Tinh Toan Day Du</div>
            <div className="text-sm text-poe-text leading-relaxed space-y-1">
              <p>Enemy co 75% Fire Resistance (base), Max Res = 75%.</p>
              <p>Ban co: Flammability (-44% res), Fire Exposure (-25%), Fire Pen 37%.</p>
              <p className="pt-2 border-t border-poe-border mt-2">
                <B>Buoc 1-2:</B> Uncapped Res = 75% - 44% - 25% = <Gold>6%</Gold>
              </p>
              <p><B>Buoc 3:</B> Cap = min(6%, 75%) = <Gold>6%</Gold></p>
              <p><B>Buoc 4:</B> Effective Res = 6% - 37% = <Gold>-31%</Gold></p>
              <p className="pt-2 border-t border-poe-border mt-2">
                <B>Damage Taken = Hit &times; (1 - (-0.31)) = Hit &times; 1.31</B>
              </p>
              <p>Enemy chiu <Gold>131% sat thuong</Gold> thay vi 25% (o 75% res) — gap <B>5.24 lan</B> hieu qua hon!</p>
            </div>
          </Panel>

          <H3>Resistance cua enemy</H3>
          <P>Mot so muc resistance tham khao:</P>
          <div className="overflow-x-auto mb-4">
            <table className="poe-table">
              <thead><tr><th>Loai enemy</th><th>Ele Res</th><th>Chaos Res</th></tr></thead>
              <tbody>
                <tr><td>Normal monster</td><td>0%</td><td>0%</td></tr>
                <tr><td>Map boss</td><td>30-40%</td><td>15-25%</td></tr>
                <tr><td>Shaper/Elder</td><td>40-50%</td><td>25-30%</td></tr>
                <tr><td>Uber Boss</td><td>50%+</td><td>30%+</td></tr>
              </tbody>
            </table>
          </div>

          <Warning>
            <B>Penetration KHONG the giam resistance duoi -200%</B> ve mat gia tri thuc te.
            Tuy nhien, effective resistance khong co floor — co the xuong rat am.
            Muc resistance am -200% la hard floor chi cho uncapped resistance (bi anh huong boi reduction va exposure).
          </Warning>
        </Section>

        {/* ===== 7. CAC NGANH SAT THUONG ===== */}
        <Section id="scaling" num="VII" title="Cac Nganh Scale Sat Thuong (Damage Scaling Categories)">
          <H3>Hieu ro cac loai modifier damage</H3>
          <P>
            Trong PoE, modifier damage co nhieu <B>tag (the)</B> khac nhau. Chi nhung modifier co tag{" "}
            <B>phu hop voi skill cua ban</B> moi co hieu luc. Hieu dieu nay la chia khoa de khong lang phi passive point.
          </P>

          <div className="overflow-x-auto mb-4">
            <table className="poe-table">
              <thead>
                <tr>
                  <th>Loai Modifier</th>
                  <th>Apply cho</th>
                  <th>Khong apply cho</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-poe-gold font-semibold">Attack Damage</td>
                  <td className="text-sm">Moi skill co tag Attack</td>
                  <td className="text-sm">Spell, DoT (mac dinh)</td>
                </tr>
                <tr>
                  <td className="text-poe-gold font-semibold">Spell Damage</td>
                  <td className="text-sm">Moi skill co tag Spell</td>
                  <td className="text-sm">Attack, DoT (mac dinh)</td>
                </tr>
                <tr>
                  <td className="text-poe-gold font-semibold">Elemental Damage</td>
                  <td className="text-sm">Fire, Cold, Lightning damage (ca hit va DoT)</td>
                  <td className="text-sm">Physical, Chaos</td>
                </tr>
                <tr>
                  <td className="text-poe-gold font-semibold">Physical Damage</td>
                  <td className="text-sm">Physical hit va Physical DoT</td>
                  <td className="text-sm">Elemental, Chaos</td>
                </tr>
                <tr>
                  <td className="text-poe-gold font-semibold">Fire / Cold / Lightning Damage</td>
                  <td className="text-sm">Chi loai damage tuong ung</td>
                  <td className="text-sm">Cac loai khac</td>
                </tr>
                <tr>
                  <td className="text-poe-gold font-semibold">Chaos Damage</td>
                  <td className="text-sm">Chaos hit va Chaos DoT</td>
                  <td className="text-sm">Physical, Elemental</td>
                </tr>
                <tr>
                  <td className="text-poe-gold font-semibold">Melee Damage</td>
                  <td className="text-sm">Attack skill co tag Melee</td>
                  <td className="text-sm">Ranged, Spell, DoT</td>
                </tr>
                <tr>
                  <td className="text-poe-gold font-semibold">Projectile Damage</td>
                  <td className="text-sm">Hit tu projectile (ca attack va spell)</td>
                  <td className="text-sm">Non-projectile, DoT</td>
                </tr>
                <tr>
                  <td className="text-poe-gold font-semibold">Area Damage</td>
                  <td className="text-sm">Hit tu AoE skill</td>
                  <td className="text-sm">Single target (non-area), DoT</td>
                </tr>
                <tr>
                  <td className="text-poe-gold font-semibold">Damage over Time</td>
                  <td className="text-sm">Moi DoT effect</td>
                  <td className="text-sm">Hit damage</td>
                </tr>
                <tr>
                  <td className="text-poe-gold font-semibold">Damage (generic)</td>
                  <td className="text-sm"><B>TAT CA</B> — hit, DoT, moi loai</td>
                  <td className="text-sm">Khong co ngoai le</td>
                </tr>
              </tbody>
            </table>
          </div>

          <Tip>
            <B>Meo quan trong:</B> Modifier {`"generic Damage"`} (vi du: {`"50% increased Damage"`}) apply cho <B>moi thu</B> —
            day la loai modifier linh hoat nhat nhung thuong co gia tri thap hon modifier cu the.
            Khi build, uu tien modifier cu the phu hop voi skill cua ban.
          </Tip>

          <H3>Nguyen tac double-dipping (da bi loai bo)</H3>
          <P>
            Truoc patch 3.0, mot so modifier co the scale ca hit damage va ailment damage tu hit do (goi la{" "}
            {`"double-dipping"`}). Tu patch 3.0, GGG da <B>tach hoan toan</B> — ailment damage duoc tinh tu
            base hit damage va co he thong modifier rieng (DoT Multi, Ailment Damage, v.v.).
          </P>

          <H3>Cach xac dinh modifier nao apply</H3>
          <P>
            De biet modifier nao apply cho skill cua ban:
          </P>
          <ol className="mb-4 space-y-2 text-sm list-decimal list-inside">
            <li>Xem <B>tag cua skill gem</B> (Attack, Spell, Projectile, Area, Melee, v.v.)</li>
            <li>Xem <B>loai damage</B> ma skill deal (Physical, Fire, v.v.)</li>
            <li>Modifier phai match <B>it nhat mot tag</B> hoac loai damage de co hieu luc</li>
            <li>Voi DoT: chi modifier co tag {`"Damage over Time"`} hoac modifier loai damage cu the moi apply</li>
          </ol>
        </Section>

        {/* ===== 8. CAC LOP PHONG THU ===== */}
        <Section id="defense" num="VIII" title="Cac Lop Phong Thu (Defense Layers)">
          <H3>Tong quan he thong phong thu</H3>
          <P>
            PoE su dung he thong phong thu <B>nhieu lop (layered defense)</B>. Moi lop xu ly mot loai sat thuong
            hoac tinh huong khac nhau. Build tot can <B>ket hop nhieu lop</B> — khong nen chi dua vao mot loai.
          </P>

          <H3>Thu tu xu ly khi nhan Damage (Receiving Damage)</H3>
          <P>Day la thu tu <B>day du</B> khi nhan vat bi hit:</P>
          <ol className="mb-4 space-y-2 text-sm list-decimal list-inside">
            <li><B>Hit Avoidance:</B> Evasion (attack), Spell Dodge, Projectile Avoidance — neu tranh duoc thi KHONG nhan damage</li>
            <li><B>Damage Taken As:</B> Chuyen doi loai damage nhan vao (vi du {`"50% Physical taken as Lightning"`})</li>
            <li><B>Resistance:</B> Giam Elemental va Chaos damage theo %</li>
            <li><B>Damage Reduction:</B> Armour (Physical), cac nguon giam damage khac</li>
            <li><B>Flat Damage Reduction:</B> {`"-X Physical damage taken from hits"`}</li>
            <li><B>% Increased/Reduced Damage Taken:</B> Cong additive</li>
            <li><B>More/Less Damage Taken:</B> Nhan multiplicative</li>
            <li><B>Block:</B> Neu block thanh cong, huy bo toan bo (hoac mot phan) damage</li>
            <li><B>Guard Skill / Aegis:</B> Hap thu damage truoc khi vao Life/ES</li>
            <li><B>Ward &rarr; Energy Shield &rarr; Mana (MoM) &rarr; Life:</B> Thu tu mat nguon luc</li>
          </ol>

          {/* ARMOUR */}
          <H3>Armour — Cong Thuc Chi Tiet</H3>
          <P>
            Armour giam <B>Physical damage tu hit</B> (KHONG giam Physical DoT, KHONG giam Elemental/Chaos).
          </P>
          <Formula>
            Damage Reduction = Armour / (Armour + 5 &times; Raw Physical Damage)
          </Formula>
          <P>
            Cong thuc nay co <B>diminishing returns</B> theo damage dau vao — Armour hieu qua hon voi hit nho,
            kem hieu qua hon voi hit lon.
          </P>

          <div className="overflow-x-auto mb-4">
            <table className="poe-table">
              <thead><tr><th>Muon giam</th><th>Can Armour bang</th><th>Vi du (hit 5000)</th></tr></thead>
              <tbody>
                <tr><td>33%</td><td>2.5x raw damage</td><td>12,500 Armour</td></tr>
                <tr><td>50%</td><td>5x raw damage</td><td>25,000 Armour</td></tr>
                <tr><td>66%</td><td>10x raw damage</td><td>50,000 Armour</td></tr>
                <tr><td>75%</td><td>15x raw damage</td><td>75,000 Armour</td></tr>
                <tr><td>90%</td><td>45x raw damage</td><td>225,000 Armour</td></tr>
              </tbody>
            </table>
          </div>

          <Panel>
            <div className="font-heading text-sm font-bold text-poe-gold mb-2">Vi Du Cung</div>
            <div className="text-sm text-poe-text leading-relaxed">
              <p>Ban co <B>50,000 Armour</B>. Nhan hit 5,000 Physical Damage.</p>
              <p>DR = 50,000 / (50,000 + 5 &times; 5,000) = 50,000 / 75,000 = <Gold>66.7%</Gold></p>
              <p>Damage thuc nhan = 5,000 &times; (1 - 0.667) = <Gold>1,665 damage</Gold></p>
              <p className="mt-2">Nhung neu hit 20,000:</p>
              <p>DR = 50,000 / (50,000 + 5 &times; 20,000) = 50,000 / 150,000 = <Gold>33.3%</Gold></p>
              <p>Damage thuc nhan = 20,000 &times; 0.667 = <Gold>13,340 damage</Gold></p>
            </div>
          </Panel>

          <Tip>
            <B>Quy tac ngon:</B> Armour se <B>khong bao gio giam duoc nhieu hon Armour/5</B> don vi damage.
            Vi du: 50,000 Armour se khong bao gio giam qua 10,000 damage tu mot hit bat ky.
          </Tip>

          {/* EVASION */}
          <H3>Evasion — Cong Thuc Ne Don</H3>
          <P>
            Evasion cho <B>co hoi ne tranh hoan toan attack hit</B>. KHONG hoat dong voi spell.
          </P>
          <Formula>
            Chance to Evade = 1 - Accuracy / (Accuracy + (Evasion / 5)^0.9)
          </Formula>
          <P>
            <B>Luu y:</B> Chance to hit toi thieu la 5% (khong the evade 100%). Chance to evade toi da la 95%.
          </P>

          <H4>He thong Entropy (Khong phai random thuan tuy)</H4>
          <P>
            PoE KHONG roll co hoi ne moi hit doc lap. Thay vao do, game su dung <B>he thong entropy</B>:
          </P>
          <ol className="mb-4 space-y-2 text-sm list-decimal list-inside">
            <li>Khi bi attack lan dau (hoac sau 3.33 giay khong bi hit), entropy duoc random tu 0-99.</li>
            <li>Moi hit, game cong <B>chance to hit %</B> vao entropy.</li>
            <li>Neu entropy &lt; 100 &rarr; <B>ne thanh cong</B>.</li>
            <li>Neu entropy &ge; 100 &rarr; <B>bi trung</B>, tru 100 tu entropy.</li>
          </ol>
          <P>
            He thong nay dam bao <B>khong co chuoi may/xui</B> — neu ban co 70% evasion, ban se NE dung khoang 7/10 hit,
            khong co truong hop bi hit 5 lan lien tiep.
          </P>

          {/* BLOCK */}
          <H3>Block (Chan Don)</H3>
          <P>
            Block cho co hoi <B>huy toan bo damage tu mot hit</B> (mac dinh). Khac voi Evasion, Block{" "}
            <B>hoat dong voi ca attack va spell</B> (neu co Spell Block).
          </P>
          <div className="overflow-x-auto mb-4">
            <table className="poe-table">
              <thead><tr><th>Thuoc tinh</th><th>Attack Block</th><th>Spell Block</th></tr></thead>
              <tbody>
                <tr><td className="text-poe-gold font-semibold">Cap mac dinh</td><td>75%</td><td>75%</td></tr>
                <tr><td className="text-poe-gold font-semibold">Hard cap</td><td>90%</td><td>90%</td></tr>
                <tr><td className="text-poe-gold font-semibold">Nguon chinh</td><td>Shield, Dual Wield (+15%), Passive</td><td>Shield, Passive, Gem</td></tr>
                <tr><td className="text-poe-gold font-semibold">Roll</td><td>Random (khong phai entropy)</td><td>Random (khong phai entropy)</td></tr>
              </tbody>
            </table>
          </div>

          <P>
            <B>Glancing Blows (Keystone):</B> Gap doi block chance nhung ban van chiu <B>65% damage tu blocked hit</B>.
            Huu ich khi ket hop voi on-block recovery (Life/ES on Block).
          </P>

          {/* SPELL SUPPRESSION */}
          <H3>Spell Suppression (Trinh Phep Thuat)</H3>
          <P>
            Spell Suppression la co che giam <B>40% damage tu spell hit</B> (va ailment tu spell). Khong giong Block,
            no KHONG huy toan bo damage — chi giam 40%.
          </P>
          <ul className="mb-4 space-y-2 text-sm">
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
              <span>Co the stack den <B>100%</B> — dam bao moi spell hit deu bi suppress.</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
              <span>Modifier {`"Prevent +X% of Suppressed Spell Damage"`} tang % damage bi giam (tren 40%).</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
              <span>Chu yeu co tren <B>Evasion gear</B> va Dexterity area cua passive tree.</span>
            </li>
          </ul>
          <Tip>
            <B>100% Spell Suppression</B> la mot trong nhung lop phong thu <B>manh nhat game</B>.
            No tuong duong voi viec co them 40% max resistance cho moi loai spell damage.
            Tat ca Dex-based build nen nham 100% Spell Suppression.
          </Tip>

          {/* ENERGY SHIELD */}
          <H3>Energy Shield (ES)</H3>
          <P>
            Energy Shield la mot <B>lop HP phu</B> nam tren Life. Damage se hit ES truoc khi hit Life.
          </P>
          <ul className="mb-4 space-y-2 text-sm">
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
              <span><B>Chaos damage di xuyen ES</B> (mac dinh) — truc tiep hit Life. Day la ly do Chaos Res quan trong cho ES build.</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
              <span><B>Chaos Inoculation (Keystone):</B> Max Life = 1, nhung <B>mien nhiem Chaos damage</B>. ES tro thanh HP duy nhat.</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
              <span>ES tu hoi sau khi khong nhan damage trong 2 giay (mac dinh). Recharge rate = 33% ES/giay.</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
              <span>Chu yeu scale tu Intelligence gear va passive tree.</span>
            </li>
          </ul>

          {/* RESISTANCE */}
          <H3>Resistance — Cap va Floor</H3>
          <div className="overflow-x-auto mb-4">
            <table className="poe-table">
              <thead><tr><th>Loai Resistance</th><th>Default Cap</th><th>Hard Cap</th><th>Floor</th></tr></thead>
              <tbody>
                <tr><td className="text-poe-gold font-semibold">Fire Resistance</td><td>75%</td><td>90%</td><td>-200%</td></tr>
                <tr><td className="text-poe-gold font-semibold">Cold Resistance</td><td>75%</td><td>90%</td><td>-200%</td></tr>
                <tr><td className="text-poe-gold font-semibold">Lightning Resistance</td><td>75%</td><td>90%</td><td>-200%</td></tr>
                <tr><td className="text-poe-gold font-semibold">Chaos Resistance</td><td>75%</td><td>90%</td><td>-200%</td></tr>
              </tbody>
            </table>
          </div>
          <P>
            <B>Moi 1% max resistance tang them</B> rat gia tri vi diminishing returns nguoc:
          </P>
          <Panel>
            <div className="text-sm text-poe-text leading-relaxed">
              <p>O 75% res, ban chiu 25% damage. O 76% res, ban chiu 24% damage.</p>
              <p>Giam tu 25% &rarr; 24% = giam <Gold>4% damage thuc nhan</Gold> chi tu 1% max res.</p>
              <p>O 80% res &rarr; 81% res: giam tu 20% &rarr; 19% = giam <Gold>5% damage thuc nhan</Gold>.</p>
              <p>O 89% res &rarr; 90% res: giam tu 11% &rarr; 10% = giam <Gold>9.1% damage thuc nhan</Gold>!</p>
              <p className="mt-2 text-poe-gold">Cang cao res, moi diem them cang gia tri hon.</p>
            </div>
          </Panel>
        </Section>

        {/* ===== 9. EHP ===== */}
        <Section id="ehp" num="IX" title="Effective Hit Points (EHP) — HP Hieu Dung">
          <H3>EHP la gi?</H3>
          <P>
            EHP (Effective Hit Points) la <B>luong damage thuc te ma enemy can deal de giet ban</B>, sau khi tinh
            tat ca cac lop phong thu. Day la chi so tot nhat de so sanh do tank cua cac build.
          </P>

          <H3>Cong thuc EHP co ban</H3>
          <Formula>
            EHP = Raw HP / (1 - Total Damage Mitigation)
          </Formula>
          <P>
            Trong do <B>Raw HP</B> = Life + Energy Shield (+ Ward, Mana neu co MoM).
            <B>Total Damage Mitigation</B> bao gom Resistance, Armour DR, va cac nguon giam damage khac.
          </P>

          <H4>EHP theo tung loai damage</H4>
          <P>
            Vi moi loai damage co cac lop phong thu khac nhau, EHP duoc tinh <B>rieng cho tung loai</B>:
          </P>

          <Formula>
            EHP (Physical Hit) = HP / ((1 - Armour DR) &times; (1 - PDR) &times; &Pi;(Less modifiers))
          </Formula>
          <Formula>
            EHP (Elemental Hit) = HP / ((1 - Ele Resistance) &times; (1 - Suppression) &times; &Pi;(Less modifiers))
          </Formula>
          <Formula>
            EHP (Chaos Hit) = HP_without_ES / ((1 - Chaos Resistance) &times; &Pi;(Less modifiers))
          </Formula>
          <P>
            Luu y: Voi Chaos damage, ES khong duoc tinh vao (vi Chaos bypass ES mac dinh).
          </P>

          <H3>Mind over Matter (MoM)</H3>
          <P>
            <B>MoM</B> chuyen <B>30% damage</B> (hoac nhieu hon tuy version) tu Life sang Mana.
            Dieu nay tang effective HP nhung chi hieu qua khi ban co <B>du Mana de hap thu</B>.
          </P>
          <Formula>
            EHP (voi MoM 30%) = Life + min(Mana, Life &times; 30/70)
          </Formula>
          <Panel>
            <div className="text-sm text-poe-text leading-relaxed">
              <p><B>Vi du:</B> 5,000 Life, 2,500 Mana, MoM 30%.</p>
              <p>Mana can toi thieu = 5,000 &times; 30/70 = 2,143</p>
              <p>Ban co du Mana (2,500 &gt; 2,143).</p>
              <p>EHP = 5,000 + 2,143 = <Gold>7,143 Raw HP</Gold> (truoc mitigation).</p>
              <p className="mt-2 text-poe-text-dim">
                Neu chi co 1,000 Mana thi EHP = 5,000 + 1,000 = 6,000 (Mana het truoc khi Life mat 70%).
              </p>
            </div>
          </Panel>

          <H3>Vi du tinh EHP day du</H3>
          <Panel>
            <div className="font-heading text-sm font-bold text-poe-gold mb-3">Build: Armour/Life Juggernaut</div>
            <div className="text-sm text-poe-text leading-relaxed space-y-1">
              <p><B>Life:</B> 6,000 | <B>ES:</B> 0 | <B>Armour:</B> 50,000</p>
              <p><B>Ele Res:</B> 75% | <B>Chaos Res:</B> 30%</p>
              <p><B>Endurance Charges:</B> 8 (4% phys reduction moi = 32%)</p>
              <p><B>Fortify:</B> 20% less damage from hits</p>
              <p className="pt-2 border-t border-poe-border mt-2"><B>EHP vs Physical Hit 5000:</B></p>
              <p>Armour DR = 50,000 / (50,000 + 25,000) = 66.7%</p>
              <p>Damage sau Armour = 5,000 &times; 0.333 = 1,665</p>
              <p>Damage sau Endurance (32% PDR) = 1,665 &times; 0.68 = 1,132</p>
              <p>Damage sau Fortify (20% less) = 1,132 &times; 0.8 = <Gold>906 damage</Gold></p>
              <p>EHP vs Physical 5k hit = 6,000 / 906 &times; 5,000 = <Gold>~33,113 EHP</Gold></p>

              <p className="pt-2 border-t border-poe-border mt-2"><B>EHP vs Fire Hit 5000:</B></p>
              <p>Damage sau Resistance (75%) = 5,000 &times; 0.25 = 1,250</p>
              <p>Damage sau Fortify (20% less) = 1,250 &times; 0.8 = <Gold>1,000 damage</Gold></p>
              <p>EHP vs Fire 5k hit = 6,000 / 1,000 &times; 5,000 = <Gold>30,000 EHP</Gold></p>

              <p className="pt-2 border-t border-poe-border mt-2"><B>EHP vs Chaos Hit 5000:</B></p>
              <p>Damage sau Resistance (30%) = 5,000 &times; 0.7 = 3,500</p>
              <p>Damage sau Fortify (20% less) = 3,500 &times; 0.8 = <Gold>2,800 damage</Gold></p>
              <p>EHP vs Chaos 5k hit = 6,000 / 2,800 &times; 5,000 = <Gold>~10,714 EHP</Gold></p>
            </div>
          </Panel>

          <Warning>
            <B>Chu y:</B> EHP chi la con so tham khao cho <B>mot hit cu the</B>. Trong thuc te, ban can xem xet ca:
            recovery (leech, regen, recoup), avoidance (evasion, dodge, block), va cac co che on-death
            (CWDT, Petrified Blood). Mot build co EHP thap nhung recovery cao van co the rat tank.
          </Warning>

          <H3>Ket hop cac lop phong thu — Layered Defense</H3>
          <P>
            Nguyen tac vang trong PoE: <B>nhieu lop phong thu nho tot hon mot lop phong thu lon</B>.
          </P>
          <div className="grid gap-3 sm:grid-cols-2 mb-4">
            {[
              { name: "Armour Build", layers: "50k Armour + Endurance Charges + Fortify + Determination + Molten Shell + Life on Block" },
              { name: "Evasion Build", layers: "40k Evasion + 100% Spell Suppression + Wind Dancer + Ghost Dance + Grace + CWDT setup" },
              { name: "ES/CI Build", layers: "10k ES + Chaos Immunity (CI) + 75% Block + Ghost Shroud + Discipline + ES on Block" },
              { name: "Hybrid Build", layers: "4k Life + 3k ES + 75% Res + MoM + Divine Shield + Aegis Aurora + Determination" },
            ].map(({ name, layers }) => (
              <Panel key={name}>
                <div className="font-heading text-sm font-bold text-poe-gold mb-1">{name}</div>
                <div className="text-xs text-poe-text-dim leading-relaxed">{layers}</div>
              </Panel>
            ))}
          </div>

          <Tip>
            <B>Meo cuoi cung:</B> Su dung <B>Path of Building (PoB)</B> de tinh chinh xac EHP cho build cua ban.
            PoB co tab {`"Calcs"`} hien thi EHP chi tiet cho tung loai damage, bao gom tat ca cac lop phong thu.
            Day la cong cu <B>khong the thieu</B> de optimize build.
          </Tip>
        </Section>

      </div>

      {/* Footer */}
      <footer className="border-t border-poe-border px-6 py-8 text-center text-xs text-poe-text-dim">
        <p className="mb-2">
          Nguon tham khao: PoE Wiki (poewiki.net), Path of Exile Official Forum, Maxroll.gg, PoE Community Resources.
        </p>
        <p>
          Path of Exile® is a registered trademark of Grinding Gear Games.
          This is an unofficial fan guide.
        </p>
      </footer>
    </main>
  );
}
