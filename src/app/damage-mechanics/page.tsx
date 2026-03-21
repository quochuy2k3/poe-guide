import type { Metadata } from "next";
import Link from "next/link";
import { Section, Panel, Tip, Warning, H3, H4, P, B, Gold } from "@/components/ui";

export const metadata: Metadata = {
  title: "Damage Mechanics — Hệ Thống Sát Thương Chi Tiết",
  description:
    "Hướng dẫn chỉ tiết damage mechanics Path of Exile 1: damage types, conversion, increased vs more, hit vs DoT, ailments, crit system, penetration, EHP calculation.",
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
            Phân tích chỉ tiết toàn bộ hệ thống sát thương và phòng thủ trong Path of Exile 1 — từ công thức tính damage,
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

        {/* ===== 1. CAC LOAI SAT THUONG & CHUYEN DOI ===== */}
        <Section id="damage-types" num="I" title="Các Loại Sát Thương & Chuyển Đổi Sát Thương">
          <H3>5 loại sát thương trong Path of Exile</H3>
          <P>
            Mọi sát thương trong PoE đều thuộc một trong <B>5 loại (damage type)</B>. Ba loại Fire, Cold, Lightning được gom
            chúng thành <B>Elemental Damage</B>. Physical và Chaos đứng riêng.
          </P>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 mb-6">
            {[
              { name: "Physical", color: "bg-gray-800/60 border-gray-600/50", desc: "Sát thương vật lý — đến từ vũ khí, va chạm. Bị giảm bởi Armour. Không bị giảm bởi Elemental Resistance." },
              { name: "Fire", color: "bg-red-900/40 border-red-800/50", desc: "Sát thương lửa — gây Ignite (đốt cháy). Bị giảm bởi Fire Resistance (mặc định cấp 75%)." },
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
            Đây là lý đó conversion mạnh: sát thương đã chuyển đổi <B>nhớ loại gốc mà nó đã đi qua</B>. Ví dụ: nếu bạn convert
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

        {/* ===== 2. CONG THUC TINH SAT THUONG ===== */}
        <Section id="damage-calc" num="II" title="Công Thức Tính Sát Thương (Damage Calculation)">
          <H3>Công thức tổng quát</H3>
          <P>
            Toàn bộ quá trình tính damage trong PoE tuân theo một công thức cố định. Hiểu đúng công thức này là chìa khóa
            để build được hiệu quả.
          </P>
          <Formula>
            Final Damage = Base Damage &times; (1 + &Sigma; Increased/Reduced) &times; &Pi; (1 + More/Less) &times; Crit Multiplier &times; Resistance Factor
          </Formula>

          <H4>Bước 1: Base Damage (Sat thường có so)</H4>
          <P>
            <B>Với Attack:</B> Base damage đến từ <B>vu khi</B> (weapon damage range trên vu khi). Gem chỉ xác định ty le
            sự dùng weapon damage (ví dụ: {`"Deals 150% of Base Attack Damage"`}).
          </P>
          <P>
            <B>Với Spell:</B> Base damage đến từ <B>skill gem</B> — tăng theo gem level. Vũ khí không ảnh hưởng truc tiep
            (tru khi có modifier dac biet).
          </P>

          <H4>Bước 2: Added Damage (Flat damage thêm vao)</H4>
          <P>
            Các modifier như {`"Adds 10 to 20 Fire Damage"`} được cộng vao base damage. Moi skill có một gia tri{" "}
            <B>Damage Effectiveness</B> (thuong ghi trên gem) — flat added damage sẽ bị <B>nhan với giá trị nay</B>.
          </P>
          <Panel>
            <div className="text-sm text-poe-text leading-relaxed">
              <B>Ví dụ:</B> Skill có Damage Effectiveness = 150%. Bạn có ring {`"Adds 10 to 20 Fire Damage"`}.
              <br />
              &rarr; Flat damage thực tế được thêm = (10 to 20) &times; 1.5 = <Gold>15 to 30 Fire Damage</Gold>.
            </div>
          </Panel>

          <H4>Bước 3: Increased vs More — Sự Khac Biet Quan Trọng Nhat</H4>
          <P>
            Đây là khai niem <B>cot loi nhat</B> trong tính damage PoE:
          </P>

          <div className="grid gap-4 sm:grid-cols-2 mb-4">
            <Panel className="border-l-2 border-l-blue-500">
              <div className="font-heading text-sm font-bold text-blue-400 mb-2">Increased / Reduced (Cong)</div>
              <div className="text-sm text-poe-text leading-relaxed space-y-2">
                <p>Tat ca các nguồn {`"increased"`} va {`"reduced"`} <B>cong lai với nhau</B>, roi nhân một lan duy nhat.</p>
                <p className="text-poe-text-dim">Ví dụ: 50% increased + 30% increased + 20% increased = 100% increased</p>
                <p className="text-poe-text-dim">&rarr; Damage &times; (1 + 1.0) = Damage &times; <Gold>2.0</Gold></p>
              </div>
            </Panel>
            <Panel className="border-l-2 border-l-red-500">
              <div className="font-heading text-sm font-bold text-red-400 mb-2">More / Less (Nhan)</div>
              <div className="text-sm text-poe-text leading-relaxed space-y-2">
                <p>Moi nguồn {`"more"`} va {`"less"`} là một <B>multiplier  riêng biet</B>, nhân với nhau.</p>
                <p className="text-poe-text-dim">Ví dụ: 30% more &times; 40% more</p>
                <p className="text-poe-text-dim">&rarr; Damage &times; 1.3 &times; 1.4 = Damage &times; <Gold>1.82</Gold></p>
              </div>
            </Panel>
          </div>

          <Warning>
            <B>Tại sao {`"More"`} mạnh hon {`"Increased"`}?</B> Vì {`"Increased"`} có diminishing returns —
            khi bạn đã có 300% increased thi thêm 50% nua chỉ tăng từ 4.0 len 4.5 (tang 12.5%).
            Nhung 50% more luôn tăng <B>dung 50%</B> bất kể bạn đã có bao nhiều modifier khac.
          </Warning>

          <H4>Ví dụ tính toán đây du</H4>
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

          <H3>Thu từ tính toán (Order of Operations)</H3>
          <P>Thu từ đây du khi DEAL damage:</P>
          <ol className="mb-4 space-y-2 text-sm list-decimal list-inside">
            <li><B>Base Damage</B> — từ weapon hoac skill gem</li>
            <li><B>Added Damage</B> — flat damage &times; damage effectiveness</li>
            <li><B>Damage Conversion</B> — {`"Gain as Extra"`} tính truoc, roi {`"Converted to"`}</li>
            <li><B>Increased/Reduced</B> — cộng tat ca lai, nhân một lan</li>
            <li><B>More/Less</B> — mỗi cai nhân  riêng</li>
            <li><B>Critical Strike</B> — nhân crit multiplier nếu là crit hit</li>
            <li><B>Damage Roll</B> — roll giá trị trong range (voi Lightning range rat rong)</li>
            <li><B>Double/Triple Damage</B> — nếu co, nhân 2x hoac 3x</li>
          </ol>
        </Section>

        {/* ===== 3. HIT vs DOT ===== */}
        <Section id="hit-vs-dot" num="III" title="Hit Damage vs Damage over Time (DoT)">
          <H3>Sự khác biet cơ bản</H3>
          <P>
            PoE chia sát thương thành 2 nhanh lon: <B>Hit</B> (sát thương tức thời khi trúng mức tieu) va{" "}
            <B>Damage over Time</B> (sát thương liên tục theo thoi gian). Hai nhanh này có <B>he thong modifier KHAC NHAU</B>.
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
                  <td className="text-sm">Co thể crit</td>
                  <td className="text-sm">KHÔNG thể crit</td>
                </tr>
                <tr>
                  <td className="text-poe-gold font-semibold">Leech</td>
                  <td className="text-sm">Co thể leech life/mana/ES</td>
                  <td className="text-sm">KHÔNG thể leech</td>
                </tr>
                <tr>
                  <td className="text-poe-gold font-semibold">Penetration</td>
                  <td className="text-sm">Hoat dong</td>
                  <td className="text-sm">KHÔNG hoat dong</td>
                </tr>
                <tr>
                  <td className="text-poe-gold font-semibold">Damage Conversion</td>
                  <td className="text-sm">Hoat dong</td>
                  <td className="text-sm">KHÔNG hoat dong</td>
                </tr>
                <tr>
                  <td className="text-poe-gold font-semibold">Stacking</td>
                  <td className="text-sm">Moi hit là  riêng</td>
                  <td className="text-sm">Chi DoT mạnh nhất có hiệu luc (tru Poison)</td>
                </tr>
                <tr>
                  <td className="text-poe-gold font-semibold">Modifier apply</td>
                  <td className="text-sm">Attack/Spell damage, Projectile, Area, v.v.</td>
                  <td className="text-sm">Damage over Time, DoT Multi, loại damage cũ the</td>
                </tr>
              </tbody>
            </table>
          </div>

          <H3>Damage over Time Multiplier (DoT Multi)</H3>
          <P>
            <B>DoT Multi</B> là một loại multiplier <B>chi danh cho DoT</B>. Tat ca các nguồn DoT Multi <B>cong với nhau</B>{" "}
            (additive với nhau) nhung là <B>mot multiplier  riêng</B> (multiplicative với increased damage).
          </P>
          <Formula>
            DoT DPS = Base DoT &times; (1 + &Sigma; Increased) &times; (1 + &Sigma; DoT Multi) &times; &Pi; (1 + More/Less)
          </Formula>
          <P>
            Vì du: bạn có 50% increased Fire Damage, 80% DoT Multi, va 30% more Burning Damage:
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

          <H3>Quy tac xếp chồng DoT</H3>
          <P>
            Hau het DoT <B>khong xếp chồng</B> — chỉ bạn DoT có DPS cao nhất có hiệu luc tai một thoi diem.
            Các ngoại lệ quan trọng:
          </P>
          <ul className="mb-4 space-y-2 text-sm">
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
              <span><B>Poison:</B> Xep chong vo han — mỗi hit tao một stack Poison doc lap. Đây là ly đó Poison build có the
                đạt DPS cuc cao.</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
              <span><B>Corrupted Blood:</B> Xep chong theo stack counter (toi đã 10 stack).</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
              <span><B>Ignite, Bleed:</B> Chi bạn mạnh nhất có hiệu luc. Ignite/Bleed mỗi nếu mạnh hon sẽ thay thể cai cu.</span>
            </li>
          </ul>

          <H3>DoT DPS Cap</H3>
          <P>
            Có một giới hạn sát thương DoT tối đa mà mỗi enemy có thể nhan: <B>~35.8 trieu DPS</B> (chinh xac là 35,791,394 DPS).
            Đây là giới hạn kỹ thuật: (2^31 - 1) / 60. Trong thực tế, chỉ các build Poison cực kỳ scale mỗi có thể chạm mức nay.
          </P>

          <H3>Cac modifier KHÔNG apply cho DoT</H3>
          <P>
            Nhung modifier sau <B>KHONG</B> ảnh hưởng DoT (tru khi ghi ro):
          </P>
          <ul className="mb-4 space-y-1 text-sm">
            {[
              "Attack Damage (tru khi có 'Modifiers to Attack Damage apply to Damage over Time')",
              "Spell Damage (tru khi có 'Modifiers to Spell Damage apply to Damage over Time')",
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
            Ailment là các <B>debuff (hieu ung tieu cuc)</B> được gây ra boi hit. Có <B>6 ailment chinh</B>,
            chia thành 2 loai:
          </P>

          <div className="grid gap-3 sm:grid-cols-2 mb-6">
            <Panel className="border-l-2 border-l-red-500">
              <div className="font-heading text-sm font-bold text-red-400 mb-2">Damaging Ailments (Gay Sát Thương)</div>
              <ul className="text-sm space-y-1">
                <li><Gold>Ignite</Gold> — dot chay (Fire DoT)</li>
                <li><Gold>Poison</Gold> — nhiem doc (Chaos DoT)</li>
                <li><Gold>Bleed</Gold> — chay mau (Physical DoT)</li>
              </ul>
            </Panel>
            <Panel className="border-l-2 border-l-cyan-500">
              <div className="font-heading text-sm font-bold text-cyan-400 mb-2">Non-Damaging Ailments (Debuff)</div>
              <ul className="text-sm space-y-1">
                <li><Gold>Shock</Gold> — tăng damage nhân vao</li>
                <li><Gold>Chill</Gold> — giảm toc đó hanh dong</li>
                <li><Gold>Freeze</Gold> — đóng băng hoàn toàn</li>
              </ul>
            </Panel>
          </div>

          <H3>Công thức Ailment Threshold</H3>
          <P>
            Hieu qua của non-damaging ailment phu thuộc vao <B>Ailment Threshold</B> của enemy. Trong đã so
            truong hop, Ailment Threshold = <B>maximum life của monster</B>. Với endgame boss (Shaper, Elder, v.v.),
            threshold được giảm xuong để ailment vẫn có thể apply.
          </P>

          {/* IGNITE */}
          <H3>Ignite (Dot Chay)</H3>
          <div className="overflow-x-auto mb-4">
            <table className="poe-table">
              <thead><tr><th>Thuoc tinh</th><th>Gia tri</th></tr></thead>
              <tbody>
                <tr><td className="text-poe-gold font-semibold">Nguon gay</td><td>Fire damage từ Hit</td></tr>
                <tr><td className="text-poe-gold font-semibold">Base DPS</td><td><B>90% của Fire damage của hit</B> mỗi giay (truoc 3.16 là 50%, đã doi)</td></tr>
                <tr><td className="text-poe-gold font-semibold">Base Duration</td><td>4 giay</td></tr>
                <tr><td className="text-poe-gold font-semibold">Stacking</td><td>KHÔNG xếp chồng — chỉ Ignite mạnh nhất có hiệu luc</td></tr>
                <tr><td className="text-poe-gold font-semibold">Chance mac dinh</td><td>0% (can modifier hoac crit để apply)</td></tr>
                <tr><td className="text-poe-gold font-semibold">Crit bonus</td><td>+50% DoT Multiplier cho Ailment từ crit hit</td></tr>
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
                <tr><td className="text-poe-gold font-semibold">Nguon gay</td><td>Physical + Chaos damage từ Hit</td></tr>
                <tr><td className="text-poe-gold font-semibold">Base DPS</td><td><B>30% của (Physical + Chaos) damage của hit</B> mỗi giay</td></tr>
                <tr><td className="text-poe-gold font-semibold">Base Duration</td><td>2 giay</td></tr>
                <tr><td className="text-poe-gold font-semibold">Stacking</td><td><Gold>XEP CHONG VO HAN</Gold> — mỗi hit tao 1 stack doc lap</td></tr>
                <tr><td className="text-poe-gold font-semibold">Chance mac dinh</td><td>0% (can modifier)</td></tr>
                <tr><td className="text-poe-gold font-semibold">Damage type</td><td>Chaos Damage over Time</td></tr>
              </tbody>
            </table>
          </div>
          <Formula>
            Moi Poison Stack DPS = (Phys + Chaos Hit) &times; 0.3 &times; (1 + &Sigma; Increased) &times; (1 + &Sigma; DoT Multi) &times; &Pi; More/Less
          </Formula>
          <Tip>
            <B>Vi sao Poison manh?</B> Vì xếp chồng vo han. Với attack speed cao (5-10 hit/s) va poison duration dai
            (co thể 8-10 giay với modifier), bạn có thể có 50-100 stack Poison cũng luc trên boss.
            Tong DPS = DPS mỗi stack &times; so stack.
          </Tip>

          {/* BLEED */}
          <H3>Bleed (Chay Mau)</H3>
          <div className="overflow-x-auto mb-4">
            <table className="poe-table">
              <thead><tr><th>Thuoc tinh</th><th>Gia tri</th></tr></thead>
              <tbody>
                <tr><td className="text-poe-gold font-semibold">Nguon gay</td><td>Physical damage từ <B>Attack</B> (chi attack, không phải spell)</td></tr>
                <tr><td className="text-poe-gold font-semibold">Base DPS</td><td><B>70% của Physical damage của hit</B> mỗi giay</td></tr>
                <tr><td className="text-poe-gold font-semibold">Base Duration</td><td>5 giay</td></tr>
                <tr><td className="text-poe-gold font-semibold">Moving bonus</td><td>Enemy dang đi chuyen chiu thêm <B>+140% sát thương</B> (tuc là 168% tong cong, gap 2.4 lan)</td></tr>
                <tr><td className="text-poe-gold font-semibold">Stacking</td><td>KHÔNG xếp chồng — chỉ Bleed mạnh nhất</td></tr>
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
            Shock không gây sát thương trực tiếp — no lam enemy chiu <B>them sát thương từ mỗi nguon</B>.
          </P>
          <div className="overflow-x-auto mb-4">
            <table className="poe-table">
              <thead><tr><th>Thuoc tinh</th><th>Gia tri</th></tr></thead>
              <tbody>
                <tr><td className="text-poe-gold font-semibold">Hieu ung</td><td>Enemy chiu thêm <B>toi đã 50% increased damage taken</B></td></tr>
                <tr><td className="text-poe-gold font-semibold">Base Duration</td><td>2 giay</td></tr>
                <tr><td className="text-poe-gold font-semibold">Nguong toi thieu</td><td>Shock &lt; 5% bị huy — không có hiệu luc</td></tr>
                <tr><td className="text-poe-gold font-semibold">Chance mac dinh</td><td>0% (crit = 100% chance)</td></tr>
              </tbody>
            </table>
          </div>
          <Formula>
            Shock Effect = 0.5 &times; (Lightning Damage / Ailment Threshold) ^ 0.4 &times; (1 + &Sigma; increased effect of Shock)
          </Formula>
          <P>
            Công thức này sự dùng <B>luy thua 0.4</B> — có nghĩa là để đạt 50% max shock, bạn cần deal damage{" "}
            <B>rat lon so với ailment threshold</B> của enemy (xap xi 100% HP). Nhung để đạt 15-20% shock thi chỉ can
            khoảng 2-5% HP là du, rat hiệu quả cho mapping.
          </P>

          {/* CHILL */}
          <H3>Chill (Lam Cham)</H3>
          <div className="overflow-x-auto mb-4">
            <table className="poe-table">
              <thead><tr><th>Thuoc tinh</th><th>Gia tri</th></tr></thead>
              <tbody>
                <tr><td className="text-poe-gold font-semibold">Hieu ung</td><td>Giam action speed của enemy <B>toi đã 30%</B></td></tr>
                <tr><td className="text-poe-gold font-semibold">Nguong toi thieu</td><td>Chill &lt; 5% bị huy</td></tr>
                <tr><td className="text-poe-gold font-semibold">Base Duration</td><td>2 giay</td></tr>
                <tr><td className="text-poe-gold font-semibold">Dac biet</td><td>Cold damage <B>luon gây Chill</B> (100% chance)</td></tr>
              </tbody>
            </table>
          </div>
          <Formula>
            Chill Effect = 0.5 &times; (Cold Damage / Ailment Threshold) ^ 0.4 &times; (1 + &Sigma; increased effect of Chill)
          </Formula>
          <P>
            Công thức giống Shock nhung cấp o 30% thay vì 50%. Với 100% increased effect of Chill, bạn chỉ cần khoang
            0.06% HP để đạt mức Chill tối thiểu (5%).
          </P>

          {/* FREEZE */}
          <H3>Freeze (Dong Bang)</H3>
          <div className="overflow-x-auto mb-4">
            <table className="poe-table">
              <thead><tr><th>Thuoc tinh</th><th>Gia tri</th></tr></thead>
              <tbody>
                <tr><td className="text-poe-gold font-semibold">Hieu ung</td><td>Enemy KHÔNG THE hanh động (100% less action speed)</td></tr>
                <tr><td className="text-poe-gold font-semibold">Duration toi thieu</td><td><B>0.3 giay</B> — Freeze ngan hon bị huy</td></tr>
                <tr><td className="text-poe-gold font-semibold">Duration toi da</td><td><B>3 giay</B></td></tr>
                <tr><td className="text-poe-gold font-semibold">Chance mac dinh</td><td>0% (crit = 100% chance)</td></tr>
              </tbody>
            </table>
          </div>
          <Formula>
            Freeze Duration = 0.06 giay &times; (Cold Damage / Ailment Threshold &times; 100)
          </Formula>
          <P>
            De Freeze một monster, bạn cần deal ít nhất <B>5% Ailment Threshold</B> Cold damage trong một hit
            (de đạt 0.3 giay toi thieu). Với boss có HP rat cao, Freeze gan như bất kha thi tru khi
            có các cơ chế đặc biệt như Shaper of Winter (Elementalist).
          </P>

          <Warning>
            <B>Boss immunity:</B> Nhieu endgame boss có <B>minimum action speed</B> (khoang 50%), có nghĩa là du bi
            Freeze vẫn không hoàn toán bất dong. Họ cũng thường có ailment threshold <B>thap hon max HP</B> de
            để apply ailment hon, nhung vẫn rat kho freeze/shock dang ke.
          </Warning>
        </Section>

        {/* ===== 5. CRITICAL STRIKE ===== */}
        <Section id="crit" num="V" title="Critical Strike (Don Chi Mang)">
          <H3>Co che cơ bản</H3>
          <P>
            Critical Strike là cơ chế lam <B>tang sát thương của một hit</B> bang cach nhân với Critical Strike Multiplier.
            Nhan vat mặc định có <B>150% Crit Multi</B> (tuc là crit hit gây 1.5x damage).
            Monster có base <B>130% Crit Multi</B>.
          </P>

          <H3>Công thức tính Crit Chance</H3>
          <Formula>
            Crit Chance = Base Crit &times; (1 + &Sigma; Increased Crit Chance) &times; &Pi; (1 + More Crit Chance)
          </Formula>
          <P>
            <B>Base Crit Chance</B> phu thuộc vao vũ khí hoac skill:
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
                <tr><td>Spell (phu thuộc gem)</td><td className="text-poe-text-bright">5-6% (thong thuong)</td></tr>
                <tr><td>Unarmed</td><td className="text-poe-text-bright">0%</td></tr>
              </tbody>
            </table>
          </div>

          <H3>Công thức tính Crit Multiplier</H3>
          <Formula>
            Crit Damage = Hit Damage &times; (150% + &Sigma; Additional Crit Multi)
          </Formula>
          <P>
            Vì du: Bạn có +100% to Critical Strike Multiplier từ gear va passive.
            <br />
            &rarr; Crit Damage = Hit Damage &times; (150% + 100%) = Hit Damage &times; <Gold>250%</Gold> = 2.5x damage.
          </P>

          <H3>Effective DPS với Critical Strike</H3>
          <P>
            De tính DPS trúng binh có tính crit:
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
            Khi crit chance là {`"lucky"`} (ví dụ từ Diamond Flask), game sẽ <B>roll 2 lan va lay kết quả tot hon</B>.
            Điều này tương đương với việc tăng crit chance theo công thức:
          </P>
          <Formula>
            Effective Crit Chance (Lucky) = 1 - (1 - Crit Chance)^2
          </Formula>
          <P>
            Vì du: 50% crit chance với Lucky &rarr; 1 - (1 - 0.5)^2 = 1 - 0.25 = <Gold>75%</Gold> effective crit chance.
          </P>

          <H3>Crit va Ailment</H3>
          <P>
            Critical strike có <B>100% chance gây Ignite, Freeze, va Shock</B>.
            Ngoai ra, damaging ailment từ crit hit được <B>+50% DoT Multiplier</B> bonus.
          </P>
          <Tip>
            <B>Perfect Agony (Keystone):</B> Cho phep Crit Multi ảnh hưởng den Ailment damage (voi 150% effectiveness
            của Crit Multi apply cho DoT Multi) nhung giảm 30% hit damage. Rat mạnh cho Poison/Ignite build.
          </Tip>
        </Section>

        {/* ===== 6. PENETRATION & EXPOSURE ===== */}
        <Section id="penetration" num="VI" title="Penetration, Exposure & Resistance Reduction">
          <H3>3 cach giảm Resistance của enemy</H3>
          <P>
            Có 3 cơ chế chính để giảm resistance của enemy, va chúng <B>hoat động khác nhau hoàn toàn</B>:
          </P>

          <div className="overflow-x-auto mb-4">
            <table className="poe-table">
              <thead>
                <tr>
                  <th>Co che</th>
                  <th>Cach hoat dong</th>
                  <th>Apply cho DoT?</th>
                  <th>Ví dụ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-poe-gold font-semibold whitespace-nowrap">Resistance Reduction</td>
                  <td className="text-sm">Truc tiep giảm giá trị resistance (uncapped) của enemy</td>
                  <td className="text-sm text-poe-green">CO</td>
                  <td className="text-sm">Curse (Flammability: -44% Fire Res)</td>
                </tr>
                <tr>
                  <td className="text-poe-gold font-semibold whitespace-nowrap">Exposure</td>
                  <td className="text-sm">Debuff giảm elemental resistance. Nhieu Exposure cũng loại KHÔNG xếp chồng — chỉ mạnh nhất</td>
                  <td className="text-sm text-poe-green">CO</td>
                  <td className="text-sm">Wave of Conviction: -25% (loai damage cao nhat)</td>
                </tr>
                <tr>
                  <td className="text-poe-gold font-semibold whitespace-nowrap">Penetration</td>
                  <td className="text-sm">Khong thay đổi resistance thực tế — chỉ lam hit coi như resistance thấp hon khi tính damage</td>
                  <td className="text-sm text-poe-red-bright">KHONG</td>
                  <td className="text-sm">Fire Penetration Support: 37% Fire Pen</td>
                </tr>
              </tbody>
            </table>
          </div>

          <H3>Thu từ apply</H3>
          <ol className="mb-4 space-y-2 text-sm list-decimal list-inside">
            <li><B>Resistance Reduction</B> (curse, -X% resistance modifier) &rarr; giảm uncapped resistance</li>
            <li><B>Exposure</B> &rarr; giảm uncapped resistance (cong với bước 1)</li>
            <li><B>Resistance Cap</B> &rarr; apply max resistance (thuong 75%)</li>
            <li><B>Penetration</B> &rarr; tru thêm từ giá trị đã cấp &rarr; ra effective resistance cho hit do</li>
          </ol>

          <H3>Công thức damage sau Resistance</H3>
          <Formula>
            Damage Taken = Hit Damage &times; (1 - Effective Resistance / 100)
          </Formula>
          <Formula>
            Effective Resistance = min(Uncapped Resistance, Max Resistance) - Penetration
          </Formula>

          <Panel>
            <div className="font-heading text-sm font-bold text-poe-gold mb-2">Vi Du Tính Toan Đây Du</div>
            <div className="text-sm text-poe-text leading-relaxed space-y-1">
              <p>Enemy có 75% Fire Resistance (base), Max Res = 75%.</p>
              <p>Ban co: Flammability (-44% res), Fire Exposure (-25%), Fire Pen 37%.</p>
              <p className="pt-2 border-t border-poe-border mt-2">
                <B>Bước 1-2:</B> Uncapped Res = 75% - 44% - 25% = <Gold>6%</Gold>
              </p>
              <p><B>Bước 3:</B> Cap = min(6%, 75%) = <Gold>6%</Gold></p>
              <p><B>Bước 4:</B> Effective Res = 6% - 37% = <Gold>-31%</Gold></p>
              <p className="pt-2 border-t border-poe-border mt-2">
                <B>Damage Taken = Hit &times; (1 - (-0.31)) = Hit &times; 1.31</B>
              </p>
              <p>Enemy chiu <Gold>131% sát thương</Gold> thay vì 25% (o 75% res) — gap <B>5.24 lan</B> hiệu quả hon!</p>
            </div>
          </Panel>

          <H3>Resistance của enemy</H3>
          <P>Mot so mức resistance tham khao:</P>
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
            <B>Penetration KHÔNG thể giảm resistance dưới -200%</B> ve mat giá trị thực tế.
            Tuy nhien, effective resistance không có floor — có thể xuong rat am.
            Muc resistance am -200% là hard floor chỉ cho uncapped resistance (bi ảnh hưởng boi reduction va exposure).
          </Warning>
        </Section>

        {/* ===== 7. CAC NGANH SAT THUONG ===== */}
        <Section id="scaling" num="VII" title="Cac Ngành Scale Sát Thương (Damage Scaling Categories)">
          <H3>Hieu rõ các loại modifier damage</H3>
          <P>
            Trong PoE, modifier damage có nhiều <B>tag (the)</B> khác nhau. Chi nhung modifier có tag{" "}
            <B>phu hop với skill của ban</B> mỗi có hiệu luc. Hieu dieu này là chìa khóa để không lang phi passive point.
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
                  <td className="text-sm">Moi skill có tag Attack</td>
                  <td className="text-sm">Spell, DoT (mac dinh)</td>
                </tr>
                <tr>
                  <td className="text-poe-gold font-semibold">Spell Damage</td>
                  <td className="text-sm">Moi skill có tag Spell</td>
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
                  <td className="text-sm">Chi loại damage tuong ung</td>
                  <td className="text-sm">Cac loại khac</td>
                </tr>
                <tr>
                  <td className="text-poe-gold font-semibold">Chaos Damage</td>
                  <td className="text-sm">Chaos hit va Chaos DoT</td>
                  <td className="text-sm">Physical, Elemental</td>
                </tr>
                <tr>
                  <td className="text-poe-gold font-semibold">Melee Damage</td>
                  <td className="text-sm">Attack skill có tag Melee</td>
                  <td className="text-sm">Ranged, Spell, DoT</td>
                </tr>
                <tr>
                  <td className="text-poe-gold font-semibold">Projectile Damage</td>
                  <td className="text-sm">Hit từ projectile (ca attack va spell)</td>
                  <td className="text-sm">Non-projectile, DoT</td>
                </tr>
                <tr>
                  <td className="text-poe-gold font-semibold">Area Damage</td>
                  <td className="text-sm">Hit từ AoE skill</td>
                  <td className="text-sm">Single target (non-area), DoT</td>
                </tr>
                <tr>
                  <td className="text-poe-gold font-semibold">Damage over Time</td>
                  <td className="text-sm">Moi DoT effect</td>
                  <td className="text-sm">Hit damage</td>
                </tr>
                <tr>
                  <td className="text-poe-gold font-semibold">Damage (generic)</td>
                  <td className="text-sm"><B>TAT CA</B> — hit, DoT, mỗi loai</td>
                  <td className="text-sm">Khong có ngoai le</td>
                </tr>
              </tbody>
            </table>
          </div>

          <Tip>
            <B>Meo quan trọng:</B> Modifier {`"generic Damage"`} (ví dụ: {`"50% increased Damage"`}) apply cho <B>moi thu</B> —
            đây là loại modifier linh hoat nhất nhung thường có giá trị thấp hon modifier cũ the.
            Khi build, ưu tien modifier cũ thể phu hop với skill của ban.
          </Tip>

          <H3>Nguyen tac double-dipping (da bị loại bo)</H3>
          <P>
            Truoc patch 3.0, một so modifier có thể scale ca hit damage va ailment damage từ hit đó (goi la{" "}
            {`"double-dipping"`}). Tu patch 3.0, GGG đã <B>tach hoàn toàn</B> — ailment damage được tính tu
            base hit damage va có he thong modifier  riêng (DoT Multi, Ailment Damage, v.v.).
          </P>

          <H3>Cach xác định modifier nao apply</H3>
          <P>
            De biet modifier nao apply cho skill của ban:
          </P>
          <ol className="mb-4 space-y-2 text-sm list-decimal list-inside">
            <li>Xem <B>tag của skill gem</B> (Attack, Spell, Projectile, Area, Melee, v.v.)</li>
            <li>Xem <B>loai damage</B> mà skill deal (Physical, Fire, v.v.)</li>
            <li>Modifier phải match <B>it nhất một tag</B> hoac loại damage để có hiệu luc</li>
            <li>Với DoT: chỉ modifier có tag {`"Damage over Time"`} hoac modifier loại damage cũ thể mỗi apply</li>
          </ol>
        </Section>

        {/* ===== 8. CAC LOP PHONG THU ===== */}
        <Section id="defense" num="VIII" title="Cac Lớp Phòng Thủ (Defense Layers)">
          <H3>Tong quan he thong phòng thủ</H3>
          <P>
            PoE sự dùng he thong phòng thủ <B>nhieu lớp (layered defense)</B>. Moi lớp xu ly một loại sát thương
            hoac tính hưởng khác nhau. Build tot cần <B>ket hop nhiều lop</B> — không nên chỉ dua vao một loai.
          </P>

          <H3>Thu từ xu ly khi nhân Damage (Receiving Damage)</H3>
          <P>Day là thu từ <B>day du</B> khi nhân vat bị hit:</P>
          <ol className="mb-4 space-y-2 text-sm list-decimal list-inside">
            <li><B>Hit Avoidance:</B> Evasion (attack), Spell Dodge, Projectile Avoidance — nếu tranh được thi KHÔNG nhân damage</li>
            <li><B>Damage Taken As:</B> Chuyen đổi loại damage nhân vao (ví dụ {`"50% Physical taken as Lightning"`})</li>
            <li><B>Resistance:</B> Giảm Elemental va Chaos damage theo %</li>
            <li><B>Damage Reduction:</B> Armour (Physical), các nguồn giảm damage khac</li>
            <li><B>Flat Damage Reduction:</B> {`"-X Physical damage taken from hits"`}</li>
            <li><B>% Increased/Reduced Damage Taken:</B> Cong additive</li>
            <li><B>More/Less Damage Taken:</B> Nhan multiplicative</li>
            <li><B>Block:</B> Nếu block thành cong, huy bo toàn bộ (hoac một phan) damage</li>
            <li><B>Guard Skill / Aegis:</B> Hap thu damage trước khi vao Life/ES</li>
            <li><B>Ward &rarr; Energy Shield &rarr; Mana (MoM) &rarr; Life:</B> Thu từ mat nguồn luc</li>
          </ol>

          {/* ARMOUR */}
          <H3>Armour — Công Thức Chi Tiet</H3>
          <P>
            Armour giảm <B>Physical damage từ hit</B> (KHÔNG giảm Physical DoT, KHÔNG giảm Elemental/Chaos).
          </P>
          <Formula>
            Damage Reduction = Armour / (Armour + 5 &times; Raw Physical Damage)
          </Formula>
          <P>
            Công thức này có <B>diminishing returns</B> theo damage dau vao — Armour hiệu quả hon với hit nho,
            kem hiệu quả hon với hit lon.
          </P>

          <div className="overflow-x-auto mb-4">
            <table className="poe-table">
              <thead><tr><th>Muon giam</th><th>Can Armour bang</th><th>Ví dụ (hit 5000)</th></tr></thead>
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
              <p>Ban có <B>50,000 Armour</B>. Nhan hit 5,000 Physical Damage.</p>
              <p>DR = 50,000 / (50,000 + 5 &times; 5,000) = 50,000 / 75,000 = <Gold>66.7%</Gold></p>
              <p>Damage thuc nhân = 5,000 &times; (1 - 0.667) = <Gold>1,665 damage</Gold></p>
              <p className="mt-2">Nhung nếu hit 20,000:</p>
              <p>DR = 50,000 / (50,000 + 5 &times; 20,000) = 50,000 / 150,000 = <Gold>33.3%</Gold></p>
              <p>Damage thuc nhân = 20,000 &times; 0.667 = <Gold>13,340 damage</Gold></p>
            </div>
          </Panel>

          <Tip>
            <B>Quy tac ngon:</B> Armour sẽ <B>khong bao gio giảm được nhiều hon Armour/5</B> don vì damage.
            Vì du: 50,000 Armour sẽ không bao gio giảm qua 10,000 damage từ một hit bất ky.
          </Tip>

          {/* EVASION */}
          <H3>Evasion — Công Thức Ne Don</H3>
          <P>
            Evasion cho <B>co hoi ne tranh hoàn toán attack hit</B>. KHÔNG hoạt động với spell.
          </P>
          <Formula>
            Chance to Evade = 1 - Accuracy / (Accuracy + (Evasion / 5)^0.9)
          </Formula>
          <P>
            <B>Lưu ý:</B> Chance to hit tối thiểu là 5% (khong thể evade 100%). Chance to evade tối đa là 95%.
          </P>

          <H4>He thong Entropy (Khong phải random thuan tuy)</H4>
          <P>
            PoE KHÔNG roll có hoi ne mỗi hit doc lap. Thay vao do, game sự dùng <B>he thong entropy</B>:
          </P>
          <ol className="mb-4 space-y-2 text-sm list-decimal list-inside">
            <li>Khi bị attack lan dau (hoac sau 3.33 giay không bị hit), entropy được random từ 0-99.</li>
            <li>Moi hit, game cộng <B>chance to hit %</B> vao entropy.</li>
            <li>Neu entropy &lt; 100 &rarr; <B>ne thành cong</B>.</li>
            <li>Neu entropy &ge; 100 &rarr; <B>bi trung</B>, tru 100 từ entropy.</li>
          </ol>
          <P>
            He thong này dam bao <B>khong có chuoi may/xui</B> — nếu bạn có 70% evasion, bạn sẽ NE dùng khoảng 7/10 hit,
            không có truong hop bị hit 5 lan lien tiep.
          </P>

          {/* BLOCK */}
          <H3>Block (Chan Don)</H3>
          <P>
            Block cho có hoi <B>huy toàn bộ damage từ một hit</B> (mac dinh). Khac với Evasion, Block{" "}
            <B>hoat động với ca attack va spell</B> (neu có Spell Block).
          </P>
          <div className="overflow-x-auto mb-4">
            <table className="poe-table">
              <thead><tr><th>Thuoc tinh</th><th>Attack Block</th><th>Spell Block</th></tr></thead>
              <tbody>
                <tr><td className="text-poe-gold font-semibold">Cap mac dinh</td><td>75%</td><td>75%</td></tr>
                <tr><td className="text-poe-gold font-semibold">Hard cap</td><td>90%</td><td>90%</td></tr>
                <tr><td className="text-poe-gold font-semibold">Nguon chinh</td><td>Shield, Dual Wield (+15%), Passive</td><td>Shield, Passive, Gem</td></tr>
                <tr><td className="text-poe-gold font-semibold">Roll</td><td>Random (khong phải entropy)</td><td>Random (khong phải entropy)</td></tr>
              </tbody>
            </table>
          </div>

          <P>
            <B>Glancing Blows (Keystone):</B> Gap đổi block chance nhung bạn vẫn chiu <B>65% damage từ blocked hit</B>.
            Huu ich khi ket hop với on-block recovery (Life/ES on Block).
          </P>

          {/* SPELL SUPPRESSION */}
          <H3>Spell Suppression (Trinh Phep Thuat)</H3>
          <P>
            Spell Suppression là cơ chế giảm <B>40% damage từ spell hit</B> (va ailment từ spell). Không giống Block,
            no KHÔNG huy toàn bộ damage — chỉ giảm 40%.
          </P>
          <ul className="mb-4 space-y-2 text-sm">
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
              <span>Co thể stack den <B>100%</B> — dam bao mỗi spell hit đều bị suppress.</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
              <span>Modifier {`"Prevent +X% of Suppressed Spell Damage"`} tăng % damage bị giảm (tren 40%).</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
              <span>Chu yếu có trên <B>Evasion gear</B> va Dexterity area của passive tree.</span>
            </li>
          </ul>
          <Tip>
            <B>100% Spell Suppression</B> là một trong nhung lớp phòng thủ <B>mạnh nhất game</B>.
            No tương đương với việc có thêm 40% max resistance cho mỗi loại spell damage.
            Tat ca Dex-based build nên nham 100% Spell Suppression.
          </Tip>

          {/* ENERGY SHIELD */}
          <H3>Energy Shield (ES)</H3>
          <P>
            Energy Shield là một <B>lop HP phu</B> nam trên Life. Damage sẽ hit ES trước khi hit Life.
          </P>
          <ul className="mb-4 space-y-2 text-sm">
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
              <span><B>Chaos damage đi xuyên ES</B> (mac dinh) — trực tiếp hit Life. Đây là ly đó Chaos Res quan trọng cho ES build.</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
              <span><B>Chaos Inoculation (Keystone):</B> Max Life = 1, nhung <B>mien nhiem Chaos damage</B>. ES tro thành HP duy nhat.</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
              <span>ES từ hoi sau khi không nhân damage trong 2 giay (mac dinh). Recharge rate = 33% ES/giay.</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
              <span>Chu yếu scale từ Intelligence gear va passive tree.</span>
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
            <B>Moi 1% max resistance tăng them</B> rat giá trị vì diminishing returns nguoc:
          </P>
          <Panel>
            <div className="text-sm text-poe-text leading-relaxed">
              <p>O 75% res, bạn chiu 25% damage. O 76% res, bạn chiu 24% damage.</p>
              <p>Giam từ 25% &rarr; 24% = giảm <Gold>4% damage thuc nhan</Gold> chỉ từ 1% max res.</p>
              <p>O 80% res &rarr; 81% res: giảm từ 20% &rarr; 19% = giảm <Gold>5% damage thuc nhan</Gold>.</p>
              <p>O 89% res &rarr; 90% res: giảm từ 11% &rarr; 10% = giảm <Gold>9.1% damage thuc nhan</Gold>!</p>
              <p className="mt-2 text-poe-gold">Cang cao res, mỗi điểm thêm cang giá trị hon.</p>
            </div>
          </Panel>
        </Section>

        {/* ===== 9. EHP ===== */}
        <Section id="ehp" num="IX" title="Effective Hit Points (EHP) — HP Hieu Dung">
          <H3>EHP là gi?</H3>
          <P>
            EHP (Effective Hit Points) là <B>luong damage thực tế mà enemy cần deal để giet ban</B>, sau khi tinh
            tat ca các lớp phòng thủ. Đây là chỉ so tot nhất để so sanh đó tank của các build.
          </P>

          <H3>Công thức EHP cơ bản</H3>
          <Formula>
            EHP = Raw HP / (1 - Total Damage Mitigation)
          </Formula>
          <P>
            Trong đó <B>Raw HP</B> = Life + Energy Shield (+ Ward, Mana nếu có MoM).
            <B>Total Damage Mitigation</B> bao gộp Resistance, Armour DR, va các nguồn giảm damage khac.
          </P>

          <H4>EHP theo tung loại damage</H4>
          <P>
            Vì mỗi loại damage có các lớp phòng thủ khác nhau, EHP được tính <B>rieng cho tung loai</B>:
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
            Lưu ý: Với Chaos damage, ES không được tính vao (vi Chaos bypass ES mac dinh).
          </P>

          <H3>Mind over Matter (MoM)</H3>
          <P>
            <B>MoM</B> chuyen <B>30% damage</B> (hoac nhiều hon tuy version) từ Life sang Mana.
            Điều này tăng effective HP nhung chỉ hiệu quả khi bạn có <B>du Mana để hap thu</B>.
          </P>
          <Formula>
            EHP (voi MoM 30%) = Life + min(Mana, Life &times; 30/70)
          </Formula>
          <Panel>
            <div className="text-sm text-poe-text leading-relaxed">
              <p><B>Ví dụ:</B> 5,000 Life, 2,500 Mana, MoM 30%.</p>
              <p>Mana cần tối thiểu = 5,000 &times; 30/70 = 2,143</p>
              <p>Ban có du Mana (2,500 &gt; 2,143).</p>
              <p>EHP = 5,000 + 2,143 = <Gold>7,143 Raw HP</Gold> (truoc mitigation).</p>
              <p className="mt-2 text-poe-text-dim">
                Nếu chỉ có 1,000 Mana thi EHP = 5,000 + 1,000 = 6,000 (Mana het trước khi Life mat 70%).
              </p>
            </div>
          </Panel>

          <H3>Ví dụ tính EHP đây du</H3>
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
            <B>Chu y:</B> EHP chỉ là con so tham khao cho <B>mot hit cũ the</B>. Trong thực tế, bạn cần xem xet ca:
            recovery (leech, regen, recoup), avoidance (evasion, dodge, block), va các cơ chế on-death
            (CWDT, Petrified Blood). Mot build có EHP thấp nhung recovery cao vẫn có thể rat tank.
          </Warning>

          <H3>Ket hop các lớp phòng thủ — Layered Defense</H3>
          <P>
            Nguyen tac vang trong PoE: <B>nhieu lớp phòng thủ nhờ tot hon một lớp phòng thủ lon</B>.
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
            <B>Meo cuoi cung:</B> Sự dùng <B>Path of Building (PoB)</B> để tính chính xác EHP cho build của ban.
            PoB có tab {`"Calcs"`} hien thi EHP chỉ tiết cho tung loại damage, bao gộp tat ca các lớp phòng thủ.
            Đây là cộng cũ <B>khong thể thieu</B> để optimize build.
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
