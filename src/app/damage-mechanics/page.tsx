import type { Metadata } from "next";
import Link from "next/link";
import { Section, Panel, Tip, Warning, H3, H4, P, B, Gold } from "@/components/ui";

export const metadata: Metadata = {
  title: "Damage Mechanics — Hệ Thống Sát Thương Chi Tiết",
  description:
    "Hướng dẫn chi tiết damage mechanics Path of Exile 1: damage types, conversion, increased vs more, hit vs DoT, ailments, crit system, penetration, EHP calculation.",
  keywords: ["PoE damage", "damage conversion", "increased vs more", "ailments", "crit", "penetration", "EHP", "Path of Exile"],
  alternates: { canonical: "/damage-mechanics" },
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
            Quay lại Hướng Dẫn Cơ Bản
          </Link>
          <div className="mb-2 inline-block rounded border border-poe-gold/30 bg-poe-gold/10 px-3 py-1 font-heading text-xs font-semibold tracking-widest text-poe-gold uppercase">
            Hướng Dẫn Nâng Cao
          </div>
          <h1 className="section-title font-heading text-3xl font-black text-poe-text-bright sm:text-4xl">
            Cơ Chế Sát Thương & Phòng Thủ
          </h1>
          <p className="mt-2 text-sm text-poe-text-dim max-w-2xl">
            Phân tích chi tiết toàn bộ hệ thống sát thương và phòng thủ trong Path of Exile 1 — từ công thức tính damage,
            chuyển đổi sát thương, ailment, critical strike, đến các lớp phòng thủ và EHP.
          </p>
        </div>
      </header>

      {/* Table of Contents */}
      <div className="border-b border-poe-border bg-poe-surface/30 px-6 py-4">
        <div className="mx-auto max-w-4xl">
          <div className="font-heading text-xs font-semibold text-poe-gold-dim uppercase tracking-wider mb-3">Mục Lục</div>
          <nav className="grid gap-1 sm:grid-cols-2 lg:grid-cols-3 text-xs">
            {[
              { id: "damage-types", label: "I. Các Loại Sát Thương & Chuyển Đổi" },
              { id: "damage-calc", label: "II. Công Thức Tính Sát Thương" },
              { id: "hit-vs-dot", label: "III. Hit vs Damage over Time" },
              { id: "ailments", label: "IV. Hệ Thống Ailment" },
              { id: "crit", label: "V. Critical Strike" },
              { id: "penetration", label: "VI. Penetration & Exposure" },
              { id: "scaling", label: "VII. Các Ngành Sát Thương" },
              { id: "defense", label: "VIII. Các Lớp Phòng Thủ" },
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

        {/* ===== 1. CÁC LOẠI SÁT THƯƠNG & CHUYỂN ĐỔI ===== */}
        <Section id="damage-types" num="I" title="Các Loại Sát Thương & Chuyển Đổi Sát Thương">
          <H3>5 loại sát thương trong Path of Exile</H3>
          <P>
            Mọi sát thương trong PoE đều thuộc một trong <B>5 loại (damage type)</B>. Ba loại Fire, Cold, Lightning được gom
            chung thành <B>Elemental Damage</B>. Physical và Chaos đứng riêng.
          </P>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 mb-6">
            {[
              { name: "Physical", color: "bg-gray-800/60 border-gray-600/50", desc: "Sát thương vật lý — đến từ vũ khí, va chạm. Bị giảm bởi Armour. Không bị giảm bởi Elemental Resistance." },
              { name: "Fire", color: "bg-red-900/40 border-red-800/50", desc: "Sát thương lửa — gây Ignite (đốt cháy). Bị giảm bởi Fire Resistance (mặc định cap 75%)." },
              { name: "Cold", color: "bg-cyan-900/40 border-cyan-700/50", desc: "Sát thương lạnh — gây Chill (chậm lại) và Freeze (đóng băng). Bị giảm bởi Cold Resistance." },
              { name: "Lightning", color: "bg-yellow-900/40 border-yellow-700/50", desc: "Sát thương sét — gây Shock (tăng damage nhận vào). Bị giảm bởi Lightning Resistance. Có range damage rộng nhất." },
              { name: "Chaos", color: "bg-purple-900/40 border-purple-700/50", desc: "Sát thương hỗn loạn — đi xuyên qua Energy Shield (mặc định). Bị giảm bởi Chaos Resistance (mặc định 0%, KHÔNG phải 75%)." },
            ].map(({ name, color, desc }) => (
              <div key={name} className={`rounded-lg border p-4 ${color}`}>
                <div className="font-heading text-sm font-bold text-poe-text-bright">{name}</div>
                <div className="mt-2 text-xs text-poe-text-dim leading-relaxed">{desc}</div>
              </div>
            ))}
          </div>

          <Tip>
            <B>Lưu ý quan trọng:</B> Chaos Resistance của người chơi bắt đầu ở 0% (không như Elemental Resistance được tăng
            qua quest reward). Vào endgame, bạn cần ít nhất -60% đến 0% Chaos Res để không bị one-shot bởi các nguồn Chaos damage.
          </Tip>

          <H3>Chuyển đổi sát thương (Damage Conversion)</H3>
          <P>
            Damage Conversion là cơ chế <B>đổi loại sát thương từ loại này sang loại khác</B>. Đây là một trong những cơ chế
            mạnh nhất để scale damage trong PoE vì sát thương đã chuyển đổi sẽ được hưởng <B>modifier của CẢ HAI loại</B> — loại gốc và loại mới.
          </P>

          <H4>Chuỗi chuyển đổi (Conversion Chain)</H4>
          <P>
            Sát thương chỉ có thể chuyển đổi theo <B>một chiều duy nhất</B>, theo thứ tự:
          </P>
          <Formula>
            Physical &rarr; Lightning &rarr; Cold &rarr; Fire &rarr; Chaos
          </Formula>
          <P>
            Bạn có thể <B>nhảy bước</B> (ví dụ Physical &rarr; Cold) nhưng <B>KHÔNG thể đi ngược lại</B> (ví dụ Cold &rarr; Physical
            là không thể). Điều này có nghĩa là bạn có thể chuyển Physical &rarr; Lightning &rarr; Cold &rarr; Fire nhưng không thể Fire &rarr; Cold.
          </P>

          <H4>Hai loại chuyển đổi</H4>
          <div className="overflow-x-auto mb-4">
            <table className="poe-table">
              <thead>
                <tr>
                  <th>Loại</th>
                  <th>Ví dụ modifier</th>
                  <th>Cơ chế</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-poe-gold font-semibold whitespace-nowrap">Converted to</td>
                  <td className="text-sm">{`"50% of Physical Damage Converted to Fire Damage"`}</td>
                  <td className="text-sm">Đổi loại damage — 50% Physical <B>biến mất</B>, trở thành Fire. Tổng damage không đổi.</td>
                </tr>
                <tr>
                  <td className="text-poe-gold font-semibold whitespace-nowrap">Gain as Extra</td>
                  <td className="text-sm">{`"Gain 20% of Physical Damage as Extra Fire Damage"`}</td>
                  <td className="text-sm">Giữ nguyên Physical, <B>thêm 20% nữa</B> dưới dạng Fire. Tổng damage <B>tăng lên</B>.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <H4>Quy tắc khi Conversion vượt quá 100%</H4>
          <P>
            Nếu tổng các modifier {`"Converted to"`} từ một loại damage vượt quá 100%, chúng sẽ bị <B>scale xuống</B> để tổng bằng đúng 100%.
            Thứ tự ưu tiên:
          </P>
          <ol className="mb-4 space-y-2 text-sm list-decimal list-inside">
            <li><B>Conversion từ Skill Gem</B> được bảo toàn trước (không bị scale xuống nếu có thể).</li>
            <li><B>Conversion từ gear, passive</B> (non-skill) sẽ bị scale xuống phần còn lại.</li>
          </ol>

          <Panel>
            <div className="font-heading text-sm font-bold text-poe-gold mb-2">Ví Dụ Cụ Thể</div>
            <div className="text-sm text-poe-text leading-relaxed space-y-2">
              <p>Giả sử bạn có:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Skill gem: 50% Physical Converted to Fire</li>
                <li>Passive tree: 40% Physical Converted to Lightning</li>
                <li>Gear: 30% Physical Converted to Cold</li>
              </ul>
              <p className="mt-2">Tổng = 50% + 40% + 30% = 120% &gt; 100%.</p>
              <p>Skill gem (50% Fire) được giữ nguyên. Còn lại 50% chia cho non-skill: Lightning và Cold bị scale:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Lightning: 40% / (40% + 30%) * 50% = <Gold>28.6%</Gold></li>
                <li>Cold: 30% / (40% + 30%) * 50% = <Gold>21.4%</Gold></li>
              </ul>
              <p className="mt-2">Kết quả: 50% Fire + 28.6% Lightning + 21.4% Cold = 100%</p>
            </div>
          </Panel>

          <H4>Damage đã chuyển đổi hưởng cả hai loại modifier</H4>
          <P>
            Đây là lý do conversion mạnh: sát thương đã chuyển đổi <B>nhớ loại gốc mà nó đã đi qua</B>. Ví dụ: nếu bạn convert
            Physical &rarr; Fire, phần damage đó sẽ được hưởng <B>đồng thời</B> cả {`"% increased Physical Damage"`} và {`"% increased Fire Damage"`}.
          </P>
          <P>
            Điều này còn mạnh hơn khi chain conversion: Physical &rarr; Lightning &rarr; Cold &rarr; Fire thì phần damage đó hưởng
            modifier của <B>tất cả 4 loại</B>: Physical, Lightning, Cold, VÀ Fire.
          </P>

          <H4>Gain as Extra — tính trên damage gốc trước conversion</H4>
          <P>
            Modifier {`"Gain X% of Physical Damage as Extra Y"`} được tính trên <B>toàn bộ Physical damage gốc</B>, trước khi bất kỳ
            conversion nào xảy ra. Do đó, nó không bị ảnh hưởng bởi conversion.
          </P>
          <P>
            Đặc biệt, modifier như {`"Gain #% of Non-Chaos Damage as Extra Chaos Damage"`} có thể <B>apply nhiều lần</B> trên
            cùng một damage khi nó đi qua nhiều loại damage khác nhau trong chuỗi conversion.
          </P>
        </Section>

        {/* ===== 2. CÔNG THỨC TÍNH SÁT THƯƠNG ===== */}
        <Section id="damage-calc" num="II" title="Công Thức Tính Sát Thương (Damage Calculation)">
          <H3>Công thức tổng quát</H3>
          <P>
            Toàn bộ quá trình tính damage trong PoE tuân theo một công thức cố định. Hiểu đúng công thức này là chìa khóa
            để build được hiệu quả.
          </P>
          <Formula>
            Final Damage = Base Damage &times; (1 + &Sigma; Increased/Reduced) &times; &Pi; (1 + More/Less) &times; Crit Multiplier &times; Resistance Factor
          </Formula>

          <H4>Bước 1: Base Damage (Sát thương cơ sở)</H4>
          <P>
            <B>Với Attack:</B> Base damage đến từ <B>vũ khí</B> (weapon damage range trên vũ khí). Gem chỉ xác định tỷ lệ
            sử dụng weapon damage (ví dụ: {`"Deals 150% of Base Attack Damage"`}).
          </P>
          <P>
            <B>Với Spell:</B> Base damage đến từ <B>skill gem</B> — tăng theo gem level. Vũ khí không ảnh hưởng trực tiếp
            (trừ khi có modifier đặc biệt).
          </P>

          <H4>Bước 2: Added Damage (Flat damage thêm vào)</H4>
          <P>
            Các modifier như {`"Adds 10 to 20 Fire Damage"`} được cộng vào base damage. Mỗi skill có một giá trị{" "}
            <B>Damage Effectiveness</B> (thường ghi trên gem) — flat added damage sẽ bị <B>nhân với giá trị này</B>.
          </P>
          <Panel>
            <div className="text-sm text-poe-text leading-relaxed">
              <B>Ví dụ:</B> Skill có Damage Effectiveness = 150%. Bạn có ring {`"Adds 10 to 20 Fire Damage"`}.
              <br />
              &rarr; Flat damage thực tế được thêm = (10 to 20) &times; 1.5 = <Gold>15 to 30 Fire Damage</Gold>.
            </div>
          </Panel>

          <H4>Bước 3: Increased vs More — Sự Khác Biệt Quan Trọng Nhất</H4>
          <P>
            Đây là khái niệm <B>cốt lõi nhất</B> trong tính damage PoE:
          </P>

          <div className="grid gap-4 sm:grid-cols-2 mb-4">
            <Panel className="border-l-2 border-l-blue-500">
              <div className="font-heading text-sm font-bold text-blue-400 mb-2">Increased / Reduced (Cộng)</div>
              <div className="text-sm text-poe-text leading-relaxed space-y-2">
                <p>Tất cả các nguồn {`"increased"`} và {`"reduced"`} <B>cộng lại với nhau</B>, rồi nhân một lần duy nhất.</p>
                <p className="text-poe-text-dim">Ví dụ: 50% increased + 30% increased + 20% increased = 100% increased</p>
                <p className="text-poe-text-dim">&rarr; Damage &times; (1 + 1.0) = Damage &times; <Gold>2.0</Gold></p>
              </div>
            </Panel>
            <Panel className="border-l-2 border-l-red-500">
              <div className="font-heading text-sm font-bold text-red-400 mb-2">More / Less (Nhân)</div>
              <div className="text-sm text-poe-text leading-relaxed space-y-2">
                <p>Mỗi nguồn {`"more"`} và {`"less"`} là một <B>multiplier riêng biệt</B>, nhân với nhau.</p>
                <p className="text-poe-text-dim">Ví dụ: 30% more &times; 40% more</p>
                <p className="text-poe-text-dim">&rarr; Damage &times; 1.3 &times; 1.4 = Damage &times; <Gold>1.82</Gold></p>
              </div>
            </Panel>
          </div>

          <Warning>
            <B>Tại sao {`"More"`} mạnh hơn {`"Increased"`}?</B> Vì {`"Increased"`} có diminishing returns —
            khi bạn đã có 300% increased thì thêm 50% nữa chỉ tăng từ 4.0 lên 4.5 (tăng 12.5%).
            Nhưng 50% more luôn tăng <B>đúng 50%</B> bất kể bạn đã có bao nhiêu modifier khác.
          </Warning>

          <H4>Ví dụ tính toán đầy đủ</H4>
          <Panel>
            <div className="text-sm text-poe-text leading-relaxed space-y-1">
              <p><B>Base weapon damage:</B> 100 Physical</p>
              <p><B>Skill:</B> Deals 150% of Base Attack Damage</p>
              <p><B>Increased:</B> 200% increased Physical Damage (từ passive, gear)</p>
              <p><B>More:</B> 30% more Attack Damage (từ support gem) &times; 40% more Melee Damage</p>
              <p className="pt-2 border-t border-poe-border mt-2">
                <B>Tính:</B>
              </p>
              <p>= 100 &times; 1.5 &times; (1 + 2.0) &times; 1.3 &times; 1.4</p>
              <p>= 100 &times; 1.5 &times; 3.0 &times; 1.3 &times; 1.4</p>
              <p>= <Gold>819 Physical Damage</Gold></p>
            </div>
          </Panel>

          <H3>Thứ tự tính toán (Order of Operations)</H3>
          <P>Thứ tự đầy đủ khi DEAL damage:</P>
          <ol className="mb-4 space-y-2 text-sm list-decimal list-inside">
            <li><B>Base Damage</B> — từ weapon hoặc skill gem</li>
            <li><B>Added Damage</B> — flat damage &times; damage effectiveness</li>
            <li><B>Damage Conversion</B> — {`"Gain as Extra"`} tính trước, rồi {`"Converted to"`}</li>
            <li><B>Increased/Reduced</B> — cộng tất cả lại, nhân một lần</li>
            <li><B>More/Less</B> — mỗi cái nhân riêng</li>
            <li><B>Critical Strike</B> — nhân crit multiplier nếu là crit hit</li>
            <li><B>Damage Roll</B> — roll giá trị trong range (với Lightning range rất rộng)</li>
            <li><B>Double/Triple Damage</B> — nếu có, nhân 2x hoặc 3x</li>
          </ol>
        </Section>

        {/* ===== 3. HIT vs DOT ===== */}
        <Section id="hit-vs-dot" num="III" title="Hit Damage vs Damage over Time (DoT)">
          <H3>Sự khác biệt cơ bản</H3>
          <P>
            PoE chia sát thương thành 2 nhánh lớn: <B>Hit</B> (sát thương tức thời khi trúng mục tiêu) và{" "}
            <B>Damage over Time</B> (sát thương liên tục theo thời gian). Hai nhánh này có <B>hệ thống modifier KHÁC NHAU</B>.
          </P>

          <div className="overflow-x-auto mb-4">
            <table className="poe-table">
              <thead>
                <tr>
                  <th>Đặc điểm</th>
                  <th>Hit Damage</th>
                  <th>Damage over Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-poe-gold font-semibold">Cách apply</td>
                  <td className="text-sm">Tức thời khi trúng</td>
                  <td className="text-sm">Liên tục trong thời gian</td>
                </tr>
                <tr>
                  <td className="text-poe-gold font-semibold">Critical Strike</td>
                  <td className="text-sm">Có thể crit</td>
                  <td className="text-sm">KHÔNG thể crit</td>
                </tr>
                <tr>
                  <td className="text-poe-gold font-semibold">Leech</td>
                  <td className="text-sm">Có thể leech life/mana/ES</td>
                  <td className="text-sm">KHÔNG thể leech</td>
                </tr>
                <tr>
                  <td className="text-poe-gold font-semibold">Penetration</td>
                  <td className="text-sm">Hoạt động</td>
                  <td className="text-sm">KHÔNG hoạt động</td>
                </tr>
                <tr>
                  <td className="text-poe-gold font-semibold">Damage Conversion</td>
                  <td className="text-sm">Hoạt động</td>
                  <td className="text-sm">KHÔNG hoạt động</td>
                </tr>
                <tr>
                  <td className="text-poe-gold font-semibold">Stacking</td>
                  <td className="text-sm">Mỗi hit là riêng</td>
                  <td className="text-sm">Chỉ DoT mạnh nhất có hiệu lực (trừ Poison)</td>
                </tr>
                <tr>
                  <td className="text-poe-gold font-semibold">Modifier apply</td>
                  <td className="text-sm">Attack/Spell damage, Projectile, Area, v.v.</td>
                  <td className="text-sm">Damage over Time, DoT Multi, loại damage cụ thể</td>
                </tr>
              </tbody>
            </table>
          </div>

          <H3>Damage over Time Multiplier (DoT Multi)</H3>
          <P>
            <B>DoT Multi</B> là một loại multiplier <B>chỉ dành cho DoT</B>. Tất cả các nguồn DoT Multi <B>cộng với nhau</B>{" "}
            (additive với nhau) nhưng là <B>một multiplier riêng</B> (multiplicative với increased damage).
          </P>
          <Formula>
            DoT DPS = Base DoT &times; (1 + &Sigma; Increased) &times; (1 + &Sigma; DoT Multi) &times; &Pi; (1 + More/Less)
          </Formula>
          <P>
            Ví dụ: bạn có 50% increased Fire Damage, 80% DoT Multi, và 30% more Burning Damage:
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

          <H3>Quy tắc xếp chồng DoT</H3>
          <P>
            Hầu hết DoT <B>không xếp chồng</B> — chỉ bản DoT có DPS cao nhất có hiệu lực tại một thời điểm.
            Các ngoại lệ quan trọng:
          </P>
          <ul className="mb-4 space-y-2 text-sm">
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
              <span><B>Poison:</B> Xếp chồng vô hạn — mỗi hit tạo một stack Poison độc lập. Đây là lý do Poison build có thể
                đạt DPS cực cao.</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
              <span><B>Corrupted Blood:</B> Xếp chồng theo stack counter (tối đa 10 stack).</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
              <span><B>Ignite, Bleed:</B> Chỉ bản mạnh nhất có hiệu lực. Ignite/Bleed mới nếu mạnh hơn sẽ thay thế cái cũ.</span>
            </li>
          </ul>

          <H3>DoT DPS Cap</H3>
          <P>
            Có một giới hạn sát thương DoT tối đa mà mỗi enemy có thể nhận: <B>~35.8 triệu DPS</B> (chính xác là 35,791,394 DPS).
            Đây là giới hạn kỹ thuật: (2^31 - 1) / 60. Trong thực tế, chỉ các build Poison cực kỳ scale mới có thể chạm mức này.
          </P>

          <H3>Các modifier KHÔNG apply cho DoT</H3>
          <P>
            Những modifier sau <B>KHÔNG</B> ảnh hưởng DoT (trừ khi ghi rõ):
          </P>
          <ul className="mb-4 space-y-1 text-sm">
            {[
              "Attack Damage (trừ khi có 'Modifiers to Attack Damage apply to Damage over Time')",
              "Spell Damage (trừ khi có 'Modifiers to Spell Damage apply to Damage over Time')",
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

        {/* ===== 4. HỆ THỐNG AILMENT ===== */}
        <Section id="ailments" num="IV" title="Hệ Thống Ailment (Trạng Thái Dị Thường)">
          <H3>Tổng quan</H3>
          <P>
            Ailment là các <B>debuff (hiệu ứng tiêu cực)</B> được gây ra bởi hit. Có <B>6 ailment chính</B>,
            chia thành 2 loại:
          </P>

          <div className="grid gap-3 sm:grid-cols-2 mb-6">
            <Panel className="border-l-2 border-l-red-500">
              <div className="font-heading text-sm font-bold text-red-400 mb-2">Damaging Ailments (Gây Sát Thương)</div>
              <ul className="text-sm space-y-1">
                <li><Gold>Ignite</Gold> — đốt cháy (Fire DoT)</li>
                <li><Gold>Poison</Gold> — nhiễm độc (Chaos DoT)</li>
                <li><Gold>Bleed</Gold> — chảy máu (Physical DoT)</li>
              </ul>
            </Panel>
            <Panel className="border-l-2 border-l-cyan-500">
              <div className="font-heading text-sm font-bold text-cyan-400 mb-2">Non-Damaging Ailments (Debuff)</div>
              <ul className="text-sm space-y-1">
                <li><Gold>Shock</Gold> — tăng damage nhận vào</li>
                <li><Gold>Chill</Gold> — giảm tốc độ hành động</li>
                <li><Gold>Freeze</Gold> — đóng băng hoàn toàn</li>
              </ul>
            </Panel>
          </div>

          <H3>Công thức Ailment Threshold</H3>
          <P>
            Hiệu quả của non-damaging ailment phụ thuộc vào <B>Ailment Threshold</B> của enemy. Trong đa số
            trường hợp, Ailment Threshold = <B>maximum life của monster</B>. Với endgame boss (Shaper, Elder, v.v.),
            threshold được giảm xuống để ailment vẫn có thể apply.
          </P>

          {/* IGNITE */}
          <H3>Ignite (Đốt Cháy)</H3>
          <div className="overflow-x-auto mb-4">
            <table className="poe-table">
              <thead><tr><th>Thuộc tính</th><th>Giá trị</th></tr></thead>
              <tbody>
                <tr><td className="text-poe-gold font-semibold">Nguồn gây</td><td>Fire damage từ Hit</td></tr>
                <tr><td className="text-poe-gold font-semibold">Base DPS</td><td><B>90% của Fire damage của hit</B> mỗi giây (trước 3.16 là 50%, đã đổi)</td></tr>
                <tr><td className="text-poe-gold font-semibold">Base Duration</td><td>4 giây</td></tr>
                <tr><td className="text-poe-gold font-semibold">Stacking</td><td>KHÔNG xếp chồng — chỉ Ignite mạnh nhất có hiệu lực</td></tr>
                <tr><td className="text-poe-gold font-semibold">Chance mặc định</td><td>0% (cần modifier hoặc crit để apply)</td></tr>
                <tr><td className="text-poe-gold font-semibold">Crit bonus</td><td>+50% DoT Multiplier cho Ailment từ crit hit</td></tr>
              </tbody>
            </table>
          </div>
          <Formula>
            Ignite DPS = Fire Hit Damage &times; 0.9 &times; (1 + &Sigma; Increased) &times; (1 + &Sigma; DoT Multi) &times; &Pi; More/Less
          </Formula>

          {/* POISON */}
          <H3>Poison (Nhiễm Độc)</H3>
          <div className="overflow-x-auto mb-4">
            <table className="poe-table">
              <thead><tr><th>Thuộc tính</th><th>Giá trị</th></tr></thead>
              <tbody>
                <tr><td className="text-poe-gold font-semibold">Nguồn gây</td><td>Physical + Chaos damage từ Hit</td></tr>
                <tr><td className="text-poe-gold font-semibold">Base DPS</td><td><B>30% của (Physical + Chaos) damage của hit</B> mỗi giây</td></tr>
                <tr><td className="text-poe-gold font-semibold">Base Duration</td><td>2 giây</td></tr>
                <tr><td className="text-poe-gold font-semibold">Stacking</td><td><Gold>XẾP CHỒNG VÔ HẠN</Gold> — mỗi hit tạo 1 stack độc lập</td></tr>
                <tr><td className="text-poe-gold font-semibold">Chance mặc định</td><td>0% (cần modifier)</td></tr>
                <tr><td className="text-poe-gold font-semibold">Damage type</td><td>Chaos Damage over Time</td></tr>
              </tbody>
            </table>
          </div>
          <Formula>
            Mỗi Poison Stack DPS = (Phys + Chaos Hit) &times; 0.3 &times; (1 + &Sigma; Increased) &times; (1 + &Sigma; DoT Multi) &times; &Pi; More/Less
          </Formula>
          <Tip>
            <B>Vì sao Poison mạnh?</B> Vì xếp chồng vô hạn. Với attack speed cao (5-10 hit/s) và poison duration dài
            (có thể 8-10 giây với modifier), bạn có thể có 50-100 stack Poison cùng lúc trên boss.
            Tổng DPS = DPS mỗi stack &times; số stack.
          </Tip>

          {/* BLEED */}
          <H3>Bleed (Chảy Máu)</H3>
          <div className="overflow-x-auto mb-4">
            <table className="poe-table">
              <thead><tr><th>Thuộc tính</th><th>Giá trị</th></tr></thead>
              <tbody>
                <tr><td className="text-poe-gold font-semibold">Nguồn gây</td><td>Physical damage từ <B>Attack</B> (chỉ attack, không phải spell)</td></tr>
                <tr><td className="text-poe-gold font-semibold">Base DPS</td><td><B>70% của Physical damage của hit</B> mỗi giây</td></tr>
                <tr><td className="text-poe-gold font-semibold">Base Duration</td><td>5 giây</td></tr>
                <tr><td className="text-poe-gold font-semibold">Moving bonus</td><td>Enemy đang di chuyển chịu thêm <B>+140% sát thương</B> (tức là 168% tổng cộng, gấp 2.4 lần)</td></tr>
                <tr><td className="text-poe-gold font-semibold">Stacking</td><td>KHÔNG xếp chồng — chỉ Bleed mạnh nhất</td></tr>
              </tbody>
            </table>
          </div>
          <Formula>
            Bleed DPS (đứng yên) = Phys Hit &times; 0.7 &times; modifiers
            <br />
            Bleed DPS (di chuyển) = Phys Hit &times; 0.7 &times; 2.4 &times; modifiers
          </Formula>

          {/* SHOCK */}
          <H3>Shock (Gây Sốc)</H3>
          <P>
            Shock không gây sát thương trực tiếp — nó làm enemy chịu <B>thêm sát thương từ mọi nguồn</B>.
          </P>
          <div className="overflow-x-auto mb-4">
            <table className="poe-table">
              <thead><tr><th>Thuộc tính</th><th>Giá trị</th></tr></thead>
              <tbody>
                <tr><td className="text-poe-gold font-semibold">Hiệu ứng</td><td>Enemy chịu thêm <B>tối đa 50% increased damage taken</B></td></tr>
                <tr><td className="text-poe-gold font-semibold">Base Duration</td><td>2 giây</td></tr>
                <tr><td className="text-poe-gold font-semibold">Ngưỡng tối thiểu</td><td>Shock &lt; 5% bị hủy — không có hiệu lực</td></tr>
                <tr><td className="text-poe-gold font-semibold">Chance mặc định</td><td>0% (crit = 100% chance)</td></tr>
              </tbody>
            </table>
          </div>
          <Formula>
            Shock Effect = 0.5 &times; (Lightning Damage / Ailment Threshold) ^ 0.4 &times; (1 + &Sigma; increased effect of Shock)
          </Formula>
          <P>
            Công thức này sử dụng <B>lũy thừa 0.4</B> — có nghĩa là để đạt 50% max shock, bạn cần deal damage{" "}
            <B>rất lớn so với ailment threshold</B> của enemy (xấp xỉ 100% HP). Nhưng để đạt 15-20% shock thì chỉ cần
            khoảng 2-5% HP là đủ, rất hiệu quả cho mapping.
          </P>

          {/* CHILL */}
          <H3>Chill (Làm Chậm)</H3>
          <div className="overflow-x-auto mb-4">
            <table className="poe-table">
              <thead><tr><th>Thuộc tính</th><th>Giá trị</th></tr></thead>
              <tbody>
                <tr><td className="text-poe-gold font-semibold">Hiệu ứng</td><td>Giảm action speed của enemy <B>tối đa 30%</B></td></tr>
                <tr><td className="text-poe-gold font-semibold">Ngưỡng tối thiểu</td><td>Chill &lt; 5% bị hủy</td></tr>
                <tr><td className="text-poe-gold font-semibold">Base Duration</td><td>2 giây</td></tr>
                <tr><td className="text-poe-gold font-semibold">Đặc biệt</td><td>Cold damage <B>luôn gây Chill</B> (100% chance)</td></tr>
              </tbody>
            </table>
          </div>
          <Formula>
            Chill Effect = 0.5 &times; (Cold Damage / Ailment Threshold) ^ 0.4 &times; (1 + &Sigma; increased effect of Chill)
          </Formula>
          <P>
            Công thức giống Shock nhưng cap ở 30% thay vì 50%. Với 100% increased effect of Chill, bạn chỉ cần khoảng
            0.06% HP để đạt mức Chill tối thiểu (5%).
          </P>

          {/* FREEZE */}
          <H3>Freeze (Đóng Băng)</H3>
          <div className="overflow-x-auto mb-4">
            <table className="poe-table">
              <thead><tr><th>Thuộc tính</th><th>Giá trị</th></tr></thead>
              <tbody>
                <tr><td className="text-poe-gold font-semibold">Hiệu ứng</td><td>Enemy KHÔNG THỂ hành động (100% less action speed)</td></tr>
                <tr><td className="text-poe-gold font-semibold">Duration tối thiểu</td><td><B>0.3 giây</B> — Freeze ngắn hơn bị hủy</td></tr>
                <tr><td className="text-poe-gold font-semibold">Duration tối đa</td><td><B>3 giây</B></td></tr>
                <tr><td className="text-poe-gold font-semibold">Chance mặc định</td><td>0% (crit = 100% chance)</td></tr>
              </tbody>
            </table>
          </div>
          <Formula>
            Freeze Duration = 0.06 giây &times; (Cold Damage / Ailment Threshold &times; 100)
          </Formula>
          <P>
            Để Freeze một monster, bạn cần deal ít nhất <B>5% Ailment Threshold</B> Cold damage trong một hit
            (để đạt 0.3 giây tối thiểu). Với boss có HP rất cao, Freeze gần như bất khả thi trừ khi
            có các cơ chế đặc biệt như Shaper of Winter (Elementalist).
          </P>

          <Warning>
            <B>Boss immunity:</B> Nhiều endgame boss có <B>minimum action speed</B> (khoảng 50%), có nghĩa là dù bị
            Freeze vẫn không hoàn toàn bất động. Họ cũng thường có ailment threshold <B>thấp hơn max HP</B> để
            dễ apply ailment hơn, nhưng vẫn rất khó freeze/shock đáng kể.
          </Warning>
        </Section>

        {/* ===== 5. CRITICAL STRIKE ===== */}
        <Section id="crit" num="V" title="Critical Strike (Đòn Chí Mạng)">
          <H3>Cơ chế cơ bản</H3>
          <P>
            Critical Strike là cơ chế làm <B>tăng sát thương của một hit</B> bằng cách nhân với Critical Strike Multiplier.
            Nhân vật mặc định có <B>150% Crit Multi</B> (tức là crit hit gây 1.5x damage).
            Monster có base <B>130% Crit Multi</B>.
          </P>

          <H3>Công thức tính Crit Chance</H3>
          <Formula>
            Crit Chance = Base Crit &times; (1 + &Sigma; Increased Crit Chance) &times; &Pi; (1 + More Crit Chance)
          </Formula>
          <P>
            <B>Base Crit Chance</B> phụ thuộc vào vũ khí hoặc skill:
          </P>
          <div className="overflow-x-auto mb-4">
            <table className="poe-table">
              <thead><tr><th>Nguồn</th><th>Base Crit</th></tr></thead>
              <tbody>
                <tr><td>Axe, Mace</td><td className="text-poe-text-bright">5%</td></tr>
                <tr><td>Sword</td><td className="text-poe-text-bright">5-6%</td></tr>
                <tr><td>Claw, Bow</td><td className="text-poe-text-bright">6-6.5%</td></tr>
                <tr><td>Wand</td><td className="text-poe-text-bright">7%</td></tr>
                <tr><td>Dagger, Rune Dagger</td><td className="text-poe-text-bright">6.3-9%</td></tr>
                <tr><td>Spell (phụ thuộc gem)</td><td className="text-poe-text-bright">5-6% (thông thường)</td></tr>
                <tr><td>Unarmed</td><td className="text-poe-text-bright">0%</td></tr>
              </tbody>
            </table>
          </div>

          <H3>Công thức tính Crit Multiplier</H3>
          <Formula>
            Crit Damage = Hit Damage &times; (150% + &Sigma; Additional Crit Multi)
          </Formula>
          <P>
            Ví dụ: Bạn có +100% to Critical Strike Multiplier từ gear và passive.
            <br />
            &rarr; Crit Damage = Hit Damage &times; (150% + 100%) = Hit Damage &times; <Gold>250%</Gold> = 2.5x damage.
          </P>

          <H3>Effective DPS với Critical Strike</H3>
          <P>
            Để tính DPS trung bình có tính crit:
          </P>
          <Formula>
            Effective DPS = Base DPS &times; (1 + Crit Chance &times; (Crit Multi - 100%) / 100%)
          </Formula>
          <Panel>
            <div className="text-sm text-poe-text leading-relaxed space-y-1">
              <p><B>Ví dụ:</B> Base DPS = 10,000. Crit Chance = 50%. Crit Multi = 400%.</p>
              <p>Effective DPS = 10,000 &times; (1 + 0.5 &times; (400% - 100%) / 100%)</p>
              <p>= 10,000 &times; (1 + 0.5 &times; 3.0)</p>
              <p>= 10,000 &times; 2.5</p>
              <p>= <Gold>25,000 DPS</Gold></p>
            </div>
          </Panel>

          <H3>Lucky Crits</H3>
          <P>
            Khi crit chance là {`"lucky"`} (ví dụ từ Diamond Flask), game sẽ <B>roll 2 lần và lấy kết quả tốt hơn</B>.
            Điều này tương đương với việc tăng crit chance theo công thức:
          </P>
          <Formula>
            Effective Crit Chance (Lucky) = 1 - (1 - Crit Chance)^2
          </Formula>
          <P>
            Ví dụ: 50% crit chance với Lucky &rarr; 1 - (1 - 0.5)^2 = 1 - 0.25 = <Gold>75%</Gold> effective crit chance.
          </P>

          <H3>Crit và Ailment</H3>
          <P>
            Critical strike có <B>100% chance gây Ignite, Freeze, và Shock</B>.
            Ngoài ra, damaging ailment từ crit hit được <B>+50% DoT Multiplier</B> bonus.
          </P>
          <Tip>
            <B>Perfect Agony (Keystone):</B> Cho phép Crit Multi ảnh hưởng đến Ailment damage (với 150% effectiveness
            của Crit Multi apply cho DoT Multi) nhưng giảm 30% hit damage. Rất mạnh cho Poison/Ignite build.
          </Tip>
        </Section>

        {/* ===== 6. PENETRATION & EXPOSURE ===== */}
        <Section id="penetration" num="VI" title="Penetration, Exposure & Resistance Reduction">
          <H3>3 cách giảm Resistance của enemy</H3>
          <P>
            Có 3 cơ chế chính để giảm resistance của enemy, và chúng <B>hoạt động khác nhau hoàn toàn</B>:
          </P>

          <div className="overflow-x-auto mb-4">
            <table className="poe-table">
              <thead>
                <tr>
                  <th>Cơ chế</th>
                  <th>Cách hoạt động</th>
                  <th>Apply cho DoT?</th>
                  <th>Ví dụ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-poe-gold font-semibold whitespace-nowrap">Resistance Reduction</td>
                  <td className="text-sm">Trực tiếp giảm giá trị resistance (uncapped) của enemy</td>
                  <td className="text-sm text-poe-green">CÓ</td>
                  <td className="text-sm">Curse (Flammability: -44% Fire Res)</td>
                </tr>
                <tr>
                  <td className="text-poe-gold font-semibold whitespace-nowrap">Exposure</td>
                  <td className="text-sm">Debuff giảm elemental resistance. Nhiều Exposure cùng loại KHÔNG xếp chồng — chỉ mạnh nhất</td>
                  <td className="text-sm text-poe-green">CÓ</td>
                  <td className="text-sm">Wave of Conviction: -25% (loại damage cao nhất)</td>
                </tr>
                <tr>
                  <td className="text-poe-gold font-semibold whitespace-nowrap">Penetration</td>
                  <td className="text-sm">Không thay đổi resistance thực tế — chỉ làm hit coi như resistance thấp hơn khi tính damage</td>
                  <td className="text-sm text-poe-red-bright">KHÔNG</td>
                  <td className="text-sm">Fire Penetration Support: 37% Fire Pen</td>
                </tr>
              </tbody>
            </table>
          </div>

          <H3>Thứ tự apply</H3>
          <ol className="mb-4 space-y-2 text-sm list-decimal list-inside">
            <li><B>Resistance Reduction</B> (curse, -X% resistance modifier) &rarr; giảm uncapped resistance</li>
            <li><B>Exposure</B> &rarr; giảm uncapped resistance (cộng với bước 1)</li>
            <li><B>Resistance Cap</B> &rarr; apply max resistance (thường 75%)</li>
            <li><B>Penetration</B> &rarr; trừ thêm từ giá trị đã cap &rarr; ra effective resistance cho hit đó</li>
          </ol>

          <H3>Công thức damage sau Resistance</H3>
          <Formula>
            Damage Taken = Hit Damage &times; (1 - Effective Resistance / 100)
          </Formula>
          <Formula>
            Effective Resistance = min(Uncapped Resistance, Max Resistance) - Penetration
          </Formula>

          <Panel>
            <div className="font-heading text-sm font-bold text-poe-gold mb-2">Ví Dụ Tính Toán Đầy Đủ</div>
            <div className="text-sm text-poe-text leading-relaxed space-y-1">
              <p>Enemy có 75% Fire Resistance (base), Max Res = 75%.</p>
              <p>Bạn có: Flammability (-44% res), Fire Exposure (-25%), Fire Pen 37%.</p>
              <p className="pt-2 border-t border-poe-border mt-2">
                <B>Bước 1-2:</B> Uncapped Res = 75% - 44% - 25% = <Gold>6%</Gold>
              </p>
              <p><B>Bước 3:</B> Cap = min(6%, 75%) = <Gold>6%</Gold></p>
              <p><B>Bước 4:</B> Effective Res = 6% - 37% = <Gold>-31%</Gold></p>
              <p className="pt-2 border-t border-poe-border mt-2">
                <B>Damage Taken = Hit &times; (1 - (-0.31)) = Hit &times; 1.31</B>
              </p>
              <p>Enemy chịu <Gold>131% sát thương</Gold> thay vì 25% (ở 75% res) — gấp <B>5.24 lần</B> hiệu quả hơn!</p>
            </div>
          </Panel>

          <H3>Resistance của enemy</H3>
          <P>Một số mức resistance tham khảo:</P>
          <div className="overflow-x-auto mb-4">
            <table className="poe-table">
              <thead><tr><th>Loại enemy</th><th>Ele Res</th><th>Chaos Res</th></tr></thead>
              <tbody>
                <tr><td>Normal monster</td><td>0%</td><td>0%</td></tr>
                <tr><td>Map boss</td><td>30-40%</td><td>15-25%</td></tr>
                <tr><td>Shaper/Elder</td><td>40-50%</td><td>25-30%</td></tr>
                <tr><td>Uber Boss</td><td>50%+</td><td>30%+</td></tr>
              </tbody>
            </table>
          </div>

          <Warning>
            <B>Penetration KHÔNG thể giảm resistance dưới -200%</B> về mặt giá trị thực tế.
            Tuy nhiên, effective resistance không có floor — có thể xuống rất âm.
            Mức resistance âm -200% là hard floor chỉ cho uncapped resistance (bị ảnh hưởng bởi reduction và exposure).
          </Warning>
        </Section>

        {/* ===== 7. CÁC NGÀNH SÁT THƯƠNG ===== */}
        <Section id="scaling" num="VII" title="Các Ngành Scale Sát Thương (Damage Scaling Categories)">
          <H3>Hiểu rõ các loại modifier damage</H3>
          <P>
            Trong PoE, modifier damage có nhiều <B>tag (thẻ)</B> khác nhau. Chỉ những modifier có tag{" "}
            <B>phù hợp với skill của bạn</B> mới có hiệu lực. Hiểu điều này là chìa khóa để không lãng phí passive point.
          </P>

          <div className="overflow-x-auto mb-4">
            <table className="poe-table">
              <thead>
                <tr>
                  <th>Loại Modifier</th>
                  <th>Apply cho</th>
                  <th>Không apply cho</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-poe-gold font-semibold">Attack Damage</td>
                  <td className="text-sm">Mọi skill có tag Attack</td>
                  <td className="text-sm">Spell, DoT (mặc định)</td>
                </tr>
                <tr>
                  <td className="text-poe-gold font-semibold">Spell Damage</td>
                  <td className="text-sm">Mọi skill có tag Spell</td>
                  <td className="text-sm">Attack, DoT (mặc định)</td>
                </tr>
                <tr>
                  <td className="text-poe-gold font-semibold">Elemental Damage</td>
                  <td className="text-sm">Fire, Cold, Lightning damage (cả hit và DoT)</td>
                  <td className="text-sm">Physical, Chaos</td>
                </tr>
                <tr>
                  <td className="text-poe-gold font-semibold">Physical Damage</td>
                  <td className="text-sm">Physical hit và Physical DoT</td>
                  <td className="text-sm">Elemental, Chaos</td>
                </tr>
                <tr>
                  <td className="text-poe-gold font-semibold">Fire / Cold / Lightning Damage</td>
                  <td className="text-sm">Chỉ loại damage tương ứng</td>
                  <td className="text-sm">Các loại khác</td>
                </tr>
                <tr>
                  <td className="text-poe-gold font-semibold">Chaos Damage</td>
                  <td className="text-sm">Chaos hit và Chaos DoT</td>
                  <td className="text-sm">Physical, Elemental</td>
                </tr>
                <tr>
                  <td className="text-poe-gold font-semibold">Melee Damage</td>
                  <td className="text-sm">Attack skill có tag Melee</td>
                  <td className="text-sm">Ranged, Spell, DoT</td>
                </tr>
                <tr>
                  <td className="text-poe-gold font-semibold">Projectile Damage</td>
                  <td className="text-sm">Hit từ projectile (cả attack và spell)</td>
                  <td className="text-sm">Non-projectile, DoT</td>
                </tr>
                <tr>
                  <td className="text-poe-gold font-semibold">Area Damage</td>
                  <td className="text-sm">Hit từ AoE skill</td>
                  <td className="text-sm">Single target (non-area), DoT</td>
                </tr>
                <tr>
                  <td className="text-poe-gold font-semibold">Damage over Time</td>
                  <td className="text-sm">Mọi DoT effect</td>
                  <td className="text-sm">Hit damage</td>
                </tr>
                <tr>
                  <td className="text-poe-gold font-semibold">Damage (generic)</td>
                  <td className="text-sm"><B>TẤT CẢ</B> — hit, DoT, mọi loại</td>
                  <td className="text-sm">Không có ngoại lệ</td>
                </tr>
              </tbody>
            </table>
          </div>

          <Tip>
            <B>Mẹo quan trọng:</B> Modifier {`"generic Damage"`} (ví dụ: {`"50% increased Damage"`}) apply cho <B>mọi thứ</B> —
            đây là loại modifier linh hoạt nhất nhưng thường có giá trị thấp hơn modifier cụ thể.
            Khi build, ưu tiên modifier cụ thể phù hợp với skill của bạn.
          </Tip>

          <H3>Nguyên tắc double-dipping (đã bị loại bỏ)</H3>
          <P>
            Trước patch 3.0, một số modifier có thể scale cả hit damage và ailment damage từ hit đó (gọi là{" "}
            {`"double-dipping"`}). Từ patch 3.0, GGG đã <B>tách hoàn toàn</B> — ailment damage được tính từ
            base hit damage và có hệ thống modifier riêng (DoT Multi, Ailment Damage, v.v.).
          </P>

          <H3>Cách xác định modifier nào apply</H3>
          <P>
            Để biết modifier nào apply cho skill của bạn:
          </P>
          <ol className="mb-4 space-y-2 text-sm list-decimal list-inside">
            <li>Xem <B>tag của skill gem</B> (Attack, Spell, Projectile, Area, Melee, v.v.)</li>
            <li>Xem <B>loại damage</B> mà skill deal (Physical, Fire, v.v.)</li>
            <li>Modifier phải match <B>ít nhất một tag</B> hoặc loại damage để có hiệu lực</li>
            <li>Với DoT: chỉ modifier có tag {`"Damage over Time"`} hoặc modifier loại damage cụ thể mới apply</li>
          </ol>
        </Section>

        {/* ===== 8. CÁC LỚP PHÒNG THỦ ===== */}
        <Section id="defense" num="VIII" title="Các Lớp Phòng Thủ (Defense Layers)">
          <H3>Tổng quan hệ thống phòng thủ</H3>
          <P>
            PoE sử dụng hệ thống phòng thủ <B>nhiều lớp (layered defense)</B>. Mỗi lớp xử lý một loại sát thương
            hoặc tình huống khác nhau. Build tốt cần <B>kết hợp nhiều lớp</B> — không nên chỉ dựa vào một loại.
          </P>

          <H3>Thứ tự xử lý khi nhận Damage (Receiving Damage)</H3>
          <P>Đây là thứ tự <B>đầy đủ</B> khi nhân vật bị hit:</P>
          <ol className="mb-4 space-y-2 text-sm list-decimal list-inside">
            <li><B>Hit Avoidance:</B> Evasion (attack), Spell Dodge, Projectile Avoidance — nếu tránh được thì KHÔNG nhận damage</li>
            <li><B>Damage Taken As:</B> Chuyển đổi loại damage nhận vào (ví dụ {`"50% Physical taken as Lightning"`})</li>
            <li><B>Resistance:</B> Giảm Elemental và Chaos damage theo %</li>
            <li><B>Damage Reduction:</B> Armour (Physical), các nguồn giảm damage khác</li>
            <li><B>Flat Damage Reduction:</B> {`"-X Physical damage taken from hits"`}</li>
            <li><B>% Increased/Reduced Damage Taken:</B> Cộng additive</li>
            <li><B>More/Less Damage Taken:</B> Nhân multiplicative</li>
            <li><B>Block:</B> Nếu block thành công, hủy bỏ toàn bộ (hoặc một phần) damage</li>
            <li><B>Guard Skill / Aegis:</B> Hấp thụ damage trước khi vào Life/ES</li>
            <li><B>Ward &rarr; Energy Shield &rarr; Mana (MoM) &rarr; Life:</B> Thứ tự mất nguồn lực</li>
          </ol>

          {/* ARMOUR */}
          <H3>Armour — Công Thức Chi Tiết</H3>
          <P>
            Armour giảm <B>Physical damage từ hit</B> (KHÔNG giảm Physical DoT, KHÔNG giảm Elemental/Chaos).
          </P>
          <Formula>
            Damage Reduction = Armour / (Armour + 5 &times; Raw Physical Damage)
          </Formula>
          <P>
            Công thức này có <B>diminishing returns</B> theo damage đầu vào — Armour hiệu quả hơn với hit nhỏ,
            kém hiệu quả hơn với hit lớn.
          </P>

          <div className="overflow-x-auto mb-4">
            <table className="poe-table">
              <thead><tr><th>Muốn giảm</th><th>Cần Armour bằng</th><th>Ví dụ (hit 5000)</th></tr></thead>
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
            <div className="font-heading text-sm font-bold text-poe-gold mb-2">Ví Dụ Cứng</div>
            <div className="text-sm text-poe-text leading-relaxed">
              <p>Bạn có <B>50,000 Armour</B>. Nhận hit 5,000 Physical Damage.</p>
              <p>DR = 50,000 / (50,000 + 5 &times; 5,000) = 50,000 / 75,000 = <Gold>66.7%</Gold></p>
              <p>Damage thực nhận = 5,000 &times; (1 - 0.667) = <Gold>1,665 damage</Gold></p>
              <p className="mt-2">Nhưng nếu hit 20,000:</p>
              <p>DR = 50,000 / (50,000 + 5 &times; 20,000) = 50,000 / 150,000 = <Gold>33.3%</Gold></p>
              <p>Damage thực nhận = 20,000 &times; 0.667 = <Gold>13,340 damage</Gold></p>
            </div>
          </Panel>

          <Tip>
            <B>Quy tắc ngón:</B> Armour sẽ <B>không bao giờ giảm được nhiều hơn Armour/5</B> đơn vị damage.
            Ví dụ: 50,000 Armour sẽ không bao giờ giảm quá 10,000 damage từ một hit bất kỳ.
          </Tip>

          {/* EVASION */}
          <H3>Evasion — Công Thức Né Đòn</H3>
          <P>
            Evasion cho <B>cơ hội né tránh hoàn toàn attack hit</B>. KHÔNG hoạt động với spell.
          </P>
          <Formula>
            Chance to Evade = 1 - Accuracy / (Accuracy + (Evasion / 5)^0.9)
          </Formula>
          <P>
            <B>Lưu ý:</B> Chance to hit tối thiểu là 5% (không thể evade 100%). Chance to evade tối đa là 95%.
          </P>

          <H4>Hệ thống Entropy (Không phải random thuần túy)</H4>
          <P>
            PoE KHÔNG roll cơ hội né mỗi hit độc lập. Thay vào đó, game sử dụng <B>hệ thống entropy</B>:
          </P>
          <ol className="mb-4 space-y-2 text-sm list-decimal list-inside">
            <li>Khi bị attack lần đầu (hoặc sau 3.33 giây không bị hit), entropy được random từ 0-99.</li>
            <li>Mỗi hit, game cộng <B>chance to hit %</B> vào entropy.</li>
            <li>Nếu entropy &lt; 100 &rarr; <B>né thành công</B>.</li>
            <li>Nếu entropy &ge; 100 &rarr; <B>bị trúng</B>, trừ 100 từ entropy.</li>
          </ol>
          <P>
            Hệ thống này đảm bảo <B>không có chuỗi may/xui</B> — nếu bạn có 70% evasion, bạn sẽ NÉ đúng khoảng 7/10 hit,
            không có trường hợp bị hit 5 lần liên tiếp.
          </P>

          {/* BLOCK */}
          <H3>Block (Chặn Đòn)</H3>
          <P>
            Block cho cơ hội <B>hủy toàn bộ damage từ một hit</B> (mặc định). Khác với Evasion, Block{" "}
            <B>hoạt động với cả attack và spell</B> (nếu có Spell Block).
          </P>
          <div className="overflow-x-auto mb-4">
            <table className="poe-table">
              <thead><tr><th>Thuộc tính</th><th>Attack Block</th><th>Spell Block</th></tr></thead>
              <tbody>
                <tr><td className="text-poe-gold font-semibold">Cap mặc định</td><td>75%</td><td>75%</td></tr>
                <tr><td className="text-poe-gold font-semibold">Hard cap</td><td>90%</td><td>90%</td></tr>
                <tr><td className="text-poe-gold font-semibold">Nguồn chính</td><td>Shield, Dual Wield (+15%), Passive</td><td>Shield, Passive, Gem</td></tr>
                <tr><td className="text-poe-gold font-semibold">Roll</td><td>Random (không phải entropy)</td><td>Random (không phải entropy)</td></tr>
              </tbody>
            </table>
          </div>

          <P>
            <B>Glancing Blows (Keystone):</B> Gấp đôi block chance nhưng bạn vẫn chịu <B>65% damage từ blocked hit</B>.
            Hữu ích khi kết hợp với on-block recovery (Life/ES on Block).
          </P>

          {/* SPELL SUPPRESSION */}
          <H3>Spell Suppression (Trấn Phép Thuật)</H3>
          <P>
            Spell Suppression là cơ chế giảm <B>40% damage từ spell hit</B> (và ailment từ spell). Không giống Block,
            nó KHÔNG hủy toàn bộ damage — chỉ giảm 40%.
          </P>
          <ul className="mb-4 space-y-2 text-sm">
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
              <span>Có thể stack đến <B>100%</B> — đảm bảo mỗi spell hit đều bị suppress.</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
              <span>Modifier {`"Prevent +X% of Suppressed Spell Damage"`} tăng % damage bị giảm (trên 40%).</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
              <span>Chủ yếu có trên <B>Evasion gear</B> và Dexterity area của passive tree.</span>
            </li>
          </ul>
          <Tip>
            <B>100% Spell Suppression</B> là một trong những lớp phòng thủ <B>mạnh nhất game</B>.
            Nó tương đương với việc có thêm 40% max resistance cho mọi loại spell damage.
            Tất cả Dex-based build nên nhắm 100% Spell Suppression.
          </Tip>

          {/* ENERGY SHIELD */}
          <H3>Energy Shield (ES)</H3>
          <P>
            Energy Shield là một <B>lớp HP phụ</B> nằm trên Life. Damage sẽ hit ES trước khi hit Life.
          </P>
          <ul className="mb-4 space-y-2 text-sm">
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
              <span><B>Chaos damage đi xuyên ES</B> (mặc định) — trực tiếp hit Life. Đây là lý do Chaos Res quan trọng cho ES build.</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
              <span><B>Chaos Inoculation (Keystone):</B> Max Life = 1, nhưng <B>miễn nhiễm Chaos damage</B>. ES trở thành HP duy nhất.</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
              <span>ES tự hồi sau khi không nhận damage trong 2 giây (mặc định). Recharge rate = 33% ES/giây.</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
              <span>Chủ yếu scale từ Intelligence gear và passive tree.</span>
            </li>
          </ul>

          {/* RESISTANCE */}
          <H3>Resistance — Cap và Floor</H3>
          <div className="overflow-x-auto mb-4">
            <table className="poe-table">
              <thead><tr><th>Loại Resistance</th><th>Default Cap</th><th>Hard Cap</th><th>Floor</th></tr></thead>
              <tbody>
                <tr><td className="text-poe-gold font-semibold">Fire Resistance</td><td>75%</td><td>90%</td><td>-200%</td></tr>
                <tr><td className="text-poe-gold font-semibold">Cold Resistance</td><td>75%</td><td>90%</td><td>-200%</td></tr>
                <tr><td className="text-poe-gold font-semibold">Lightning Resistance</td><td>75%</td><td>90%</td><td>-200%</td></tr>
                <tr><td className="text-poe-gold font-semibold">Chaos Resistance</td><td>75%</td><td>90%</td><td>-200%</td></tr>
              </tbody>
            </table>
          </div>
          <P>
            <B>Mỗi 1% max resistance tăng thêm</B> rất giá trị vì diminishing returns ngược:
          </P>
          <Panel>
            <div className="text-sm text-poe-text leading-relaxed">
              <p>Ở 75% res, bạn chịu 25% damage. Ở 76% res, bạn chịu 24% damage.</p>
              <p>Giảm từ 25% &rarr; 24% = giảm <Gold>4% damage thực nhận</Gold> chỉ từ 1% max res.</p>
              <p>Ở 80% res &rarr; 81% res: giảm từ 20% &rarr; 19% = giảm <Gold>5% damage thực nhận</Gold>.</p>
              <p>Ở 89% res &rarr; 90% res: giảm từ 11% &rarr; 10% = giảm <Gold>9.1% damage thực nhận</Gold>!</p>
              <p className="mt-2 text-poe-gold">Càng cao res, mỗi điểm thêm càng giá trị hơn.</p>
            </div>
          </Panel>
        </Section>

        {/* ===== 9. EHP ===== */}
        <Section id="ehp" num="IX" title="Effective Hit Points (EHP) — HP Hiệu Dụng">
          <H3>EHP là gì?</H3>
          <P>
            EHP (Effective Hit Points) là <B>lượng damage thực tế mà enemy cần deal để giết bạn</B>, sau khi tính
            tất cả các lớp phòng thủ. Đây là chỉ số tốt nhất để so sánh độ tank của các build.
          </P>

          <H3>Công thức EHP cơ bản</H3>
          <Formula>
            EHP = Raw HP / (1 - Total Damage Mitigation)
          </Formula>
          <P>
            Trong đó <B>Raw HP</B> = Life + Energy Shield (+ Ward, Mana nếu có MoM).
            <B>Total Damage Mitigation</B> bao gồm Resistance, Armour DR, và các nguồn giảm damage khác.
          </P>

          <H4>EHP theo từng loại damage</H4>
          <P>
            Vì mỗi loại damage có các lớp phòng thủ khác nhau, EHP được tính <B>riêng cho từng loại</B>:
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
            Lưu ý: Với Chaos damage, ES không được tính vào (vì Chaos bypass ES mặc định).
          </P>

          <H3>Mind over Matter (MoM)</H3>
          <P>
            <B>MoM</B> chuyển <B>30% damage</B> (hoặc nhiều hơn tùy version) từ Life sang Mana.
            Điều này tăng effective HP nhưng chỉ hiệu quả khi bạn có <B>đủ Mana để hấp thụ</B>.
          </P>
          <Formula>
            EHP (với MoM 30%) = Life + min(Mana, Life &times; 30/70)
          </Formula>
          <Panel>
            <div className="text-sm text-poe-text leading-relaxed">
              <p><B>Ví dụ:</B> 5,000 Life, 2,500 Mana, MoM 30%.</p>
              <p>Mana cần tối thiểu = 5,000 &times; 30/70 = 2,143</p>
              <p>Bạn có đủ Mana (2,500 &gt; 2,143).</p>
              <p>EHP = 5,000 + 2,143 = <Gold>7,143 Raw HP</Gold> (trước mitigation).</p>
              <p className="mt-2 text-poe-text-dim">
                Nếu chỉ có 1,000 Mana thì EHP = 5,000 + 1,000 = 6,000 (Mana hết trước khi Life mất 70%).
              </p>
            </div>
          </Panel>

          <H3>Ví dụ tính EHP đầy đủ</H3>
          <Panel>
            <div className="font-heading text-sm font-bold text-poe-gold mb-3">Build: Armour/Life Juggernaut</div>
            <div className="text-sm text-poe-text leading-relaxed space-y-1">
              <p><B>Life:</B> 6,000 | <B>ES:</B> 0 | <B>Armour:</B> 50,000</p>
              <p><B>Ele Res:</B> 75% | <B>Chaos Res:</B> 30%</p>
              <p><B>Endurance Charges:</B> 8 (4% phys reduction mỗi = 32%)</p>
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
            <B>Chú ý:</B> EHP chỉ là con số tham khảo cho <B>một hit cụ thể</B>. Trong thực tế, bạn cần xem xét cả:
            recovery (leech, regen, recoup), avoidance (evasion, dodge, block), và các cơ chế on-death
            (CWDT, Petrified Blood). Một build có EHP thấp nhưng recovery cao vẫn có thể rất tank.
          </Warning>

          <H3>Kết hợp các lớp phòng thủ — Layered Defense</H3>
          <P>
            Nguyên tắc vàng trong PoE: <B>nhiều lớp phòng thủ nhỏ tốt hơn một lớp phòng thủ lớn</B>.
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
            <B>Mẹo cuối cùng:</B> Sử dụng <B>Path of Building (PoB)</B> để tính chính xác EHP cho build của bạn.
            PoB có tab {`"Calcs"`} hiển thị EHP chi tiết cho từng loại damage, bao gồm tất cả các lớp phòng thủ.
            Đây là công cụ <B>không thể thiếu</B> để optimize build.
          </Tip>
        </Section>

      </div>

      {/* Footer */}
      <footer className="border-t border-poe-border px-6 py-8 text-center text-xs text-poe-text-dim">
        <p className="mb-2">
          Nguồn tham khảo: PoE Wiki (poewiki.net), Path of Exile Official Forum, Maxroll.gg, PoE Community Resources.
        </p>
        <p>
          Path of Exile® is a registered trademark of Grinding Gear Games.
          This is an unofficial fan guide.
        </p>
      </footer>
    </main>
  );
}
