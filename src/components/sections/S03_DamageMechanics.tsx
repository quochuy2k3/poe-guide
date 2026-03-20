import { Section, H3, H4, P, B, Gold, Red, Panel, Tip, Warning, Blue, Green, Chaos } from "@/components/ui";

export default function S03_DamageMechanics() {
  return (
    <Section id="damage" num="III" title="Damage Mechanics — Hiểu Sâu Hệ Thống Sát Thương">
      <P>
        Đây là phần <B>quan trọng nhất</B> mà đa số người mới bỏ qua. Hiểu damage mechanics = hiểu tại sao
        build A mạnh hơn build B, và biết cách scale damage hiệu quả nhất.
      </P>

      <H3>5 Loại Damage</H3>
      <div className="grid gap-3 sm:grid-cols-5 mb-6">
        {[
          { name: "Physical", color: "border-stone-500 bg-stone-900/40", desc: "Damage cơ bản từ vũ khí. Bị giảm bởi Armour." },
          { name: "Fire", color: "border-red-700 bg-red-900/40", desc: "Gây Ignite (đốt). Bị giảm bởi Fire Resistance." },
          { name: "Cold", color: "border-cyan-600 bg-cyan-900/40", desc: "Gây Chill/Freeze. Bị giảm bởi Cold Resistance." },
          { name: "Lightning", color: "border-yellow-500 bg-yellow-900/40", desc: "Gây Shock. Bị giảm bởi Lightning Resistance." },
          { name: "Chaos", color: "border-purple-600 bg-purple-900/40", desc: "Bypass Energy Shield. Bị giảm bởi Chaos Resistance." },
        ].map(({ name, color, desc }) => (
          <div key={name} className={`rounded-lg border p-3 ${color}`}>
            <div className="font-heading text-xs font-bold text-poe-text-bright">{name}</div>
            <div className="mt-1 text-[11px] text-poe-text-dim leading-relaxed">{desc}</div>
          </div>
        ))}
      </div>

      <H3>Damage Conversion Chain</H3>
      <P>
        Damage trong PoE có thể <B>convert</B> (chuyển đổi) theo 1 chiều duy nhất:
      </P>
      <div className="game-panel rounded-lg p-4 mb-4 text-center">
        <span className="text-stone-300 font-semibold">Physical</span>
        <span className="text-poe-text-dim mx-2">→</span>
        <span className="text-cyan-400 font-semibold">Lightning</span>
        <span className="text-poe-text-dim mx-2">→</span>
        <span className="text-cyan-300 font-semibold">Cold</span>
        <span className="text-poe-text-dim mx-2">→</span>
        <span className="text-red-400 font-semibold">Fire</span>
        <span className="text-poe-text-dim mx-2">→</span>
        <span className="text-purple-400 font-semibold">Chaos</span>
      </div>
      <Tip>
        <B>Tại sao conversion mạnh?</B> Khi convert Phys → Cold, damage đó được benefit từ CẢ HAI
        %increased Physical Damage VÀ %increased Cold Damage. Đây là cách nhiều build stack damage khủng
        (ví dụ: Elemental Hit convert 100% → Fire, được buff từ nhiều nguồn khác nhau).
      </Tip>

      <H3>Increased vs More — Sự khác biệt sống còn</H3>
      <div className="grid gap-4 sm:grid-cols-2 mb-4">
        <Panel>
          <div className="font-heading text-sm font-bold text-poe-gold mb-2">Increased (Cộng dồn)</div>
          <p className="text-xs text-poe-text-dim mb-2">Tất cả nguồn &quot;increased&quot; cộng lại thành 1 tổng rồi nhân 1 lần.</p>
          <div className="rounded bg-poe-bg p-3 text-xs font-mono">
            Base 100 dmg<br/>
            +50% increased + 30% increased<br/>
            = 100 × (1 + 0.5 + 0.3)<br/>
            = <span className="text-poe-gold">180 dmg</span>
          </div>
        </Panel>
        <Panel>
          <div className="font-heading text-sm font-bold text-poe-red-bright mb-2">More (Nhân riêng)</div>
          <p className="text-xs text-poe-text-dim mb-2">Mỗi nguồn &quot;more&quot; nhân RIÊNG — cực mạnh, thường từ Support Gems.</p>
          <div className="rounded bg-poe-bg p-3 text-xs font-mono">
            Base 100 dmg<br/>
            ×1.5 more × 1.3 more<br/>
            = 100 × 1.5 × 1.3<br/>
            = <span className="text-poe-red-bright">195 dmg</span>
          </div>
        </Panel>
      </div>
      <Warning>
        <B>Nguyên tắc:</B> Khi đã có 300%+ increased damage, thêm 20% increased chỉ tăng ~5% tổng DPS.
        Nhưng 1 support gem cho 30% more = thực sự tăng 30%. Vì vậy <Gold>Support Gems (more multipliers)
        luôn quan trọng hơn</Gold> thêm passive nodes (increased).
      </Warning>

      <H3>Công thức Damage tổng quát</H3>
      <div className="game-panel rounded-lg p-4 mb-4">
        <div className="text-xs font-mono text-poe-text leading-loose">
          <Gold>Final DPS</Gold> = Base Damage<br/>
          &nbsp;&nbsp;× (1 + Σ increased%) &nbsp;<span className="text-poe-text-dim">← tất cả increased cộng dồn</span><br/>
          &nbsp;&nbsp;× Π (1 + more%) &nbsp;<span className="text-poe-text-dim">← mỗi more nhân riêng</span><br/>
          &nbsp;&nbsp;× (1 + crit_chance × (crit_multi - 1)) &nbsp;<span className="text-poe-text-dim">← effective crit DPS</span><br/>
          &nbsp;&nbsp;× attack/cast speed<br/>
          &nbsp;&nbsp;× (1 - target_resistance × (1 - penetration))
        </div>
      </div>

      <H3>Hit vs DoT (Damage over Time)</H3>
      <div className="grid gap-4 sm:grid-cols-2 mb-4">
        <Panel>
          <div className="font-heading text-sm font-bold text-poe-text-bright mb-2">Hit Damage</div>
          <ul className="space-y-1 text-xs">
            <li>▸ Damage xảy ra tức thì khi skill contact</li>
            <li>▸ Có thể crit, có thể leech</li>
            <li>▸ Scale bằng: flat damage, attack/cast speed, crit</li>
            <li>▸ Bị giảm bởi armour, evasion, block, dodge</li>
            <li>▸ Ví dụ: Fireball hit, Lightning Arrow hit, Cyclone hit</li>
          </ul>
        </Panel>
        <Panel>
          <div className="font-heading text-sm font-bold text-poe-text-bright mb-2">DoT (Damage over Time)</div>
          <ul className="space-y-1 text-xs">
            <li>▸ Damage gây liên tục trong 1 khoảng thời gian</li>
            <li>▸ KHÔNG crit, KHÔNG leech (trừ exception)</li>
            <li>▸ Scale bằng: DoT multiplier, duration, skill effect</li>
            <li>▸ KHÔNG bị giảm bởi armour/evasion — chỉ bởi resistance</li>
            <li>▸ Ví dụ: Righteous Fire, Poison, Bleed, Ignite, ED</li>
          </ul>
        </Panel>
      </div>

      <H3>Ailments (Trạng thái bất lợi)</H3>
      <div className="overflow-x-auto">
        <table className="poe-table">
          <thead>
            <tr><th>Ailment</th><th>Từ damage</th><th>Hiệu ứng</th><th>Cách scale</th></tr>
          </thead>
          <tbody>
            {[
              ["Ignite", "Fire", "Gây 50% of base fire hit damage dưới dạng Fire DoT trong 4 giây", "Fire DMG, Burning DMG, DoT Multi"],
              ["Shock", "Lightning", "Tăng damage taken lên target tối đa 50%. Threshold dựa trên % HP bị hit", "Effect of Shock, Lightning DMG"],
              ["Chill", "Cold", "Giảm Action Speed của target tối đa 30%", "Effect of Chill, Cold DMG"],
              ["Freeze", "Cold", "Ngừng hoàn toàn target. Cần hit ≥5% target HP", "Freeze Duration, Cold DMG"],
              ["Poison", "Phys/Chaos", "Stack vô hạn! Mỗi hit thêm 1 poison stack. DoT = 20% of Phys+Chaos hit trong 2s", "Poison DMG, Chaos DMG, DoT Multi, Attack Speed (more hits = more stacks)"],
              ["Bleed", "Physical", "DoT = 70% of base phys hit. Target di chuyển → x3 damage", "Phys DMG, Bleed DMG, DoT Multi"],
            ].map(([name, from, effect, scale]) => (
              <tr key={name}>
                <td className="text-poe-gold font-semibold">{name}</td>
                <td className="text-xs whitespace-nowrap">{from}</td>
                <td className="text-xs">{effect}</td>
                <td className="text-xs text-poe-text-dim">{scale}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Tip>
        <B>Poison stacking</B> là cơ chế cực mạnh — mỗi hit tạo 1 stack riêng. Build Poisonous Concoction Pathfinder
        có thể stack hàng trăm poison cùng lúc, gây millions DPS trên boss mà không cần gear đắt.
      </Tip>

      <H3>Critical Strikes — Crit System</H3>
      <P>
        Crit trong PoE phức tạp hơn game khác:
      </P>
      <ul className="space-y-2 text-sm mb-4">
        <li className="flex gap-2">
          <span className="text-poe-gold shrink-0">▸</span>
          <span><B>Base Crit Chance:</B> Mỗi skill/weapon có base crit riêng (3-10%). Increased crit chance scale từ base này.</span>
        </li>
        <li className="flex gap-2">
          <span className="text-poe-gold shrink-0">▸</span>
          <span><B>Crit Multiplier:</B> Base 150% (crit hit gây x1.5 damage). Stack lên 400-500%+ cho crit builds.</span>
        </li>
        <li className="flex gap-2">
          <span className="text-poe-gold shrink-0">▸</span>
          <span><B>Effective Crit DPS</B> = Base DPS × (1 + crit% × (multi - 1)). Ví dụ: 50% crit, 400% multi → x2.5 average DPS.</span>
        </li>
        <li className="flex gap-2">
          <span className="text-poe-gold shrink-0">▸</span>
          <span><B>Accuracy:</B> Attacks (không phải spells) cần Accuracy để hit. Miss = không damage, không crit. Cần ≥95% hit chance.</span>
        </li>
        <li className="flex gap-2">
          <span className="text-poe-gold shrink-0">▸</span>
          <span><B>Diamond Flask:</B> Lucky crit — roll crit chance 2 lần lấy kết quả tốt hơn. Bắt buộc cho crit builds.</span>
        </li>
      </ul>

      <H3>Resistance Penetration & Exposure</H3>
      <P>
        Giảm resist của enemy = tăng damage. Có nhiều lớp chồng nhau:
      </P>
      <div className="overflow-x-auto">
        <table className="poe-table">
          <thead>
            <tr><th>Loại</th><th>Giải thích</th><th>Ví dụ</th><th>Stack?</th></tr>
          </thead>
          <tbody>
            {[
              ["Penetration", "Chỉ áp dụng cho HIT damage, không cho DoT", "Fire Penetration Support: -37% Fire Res", "Có, tất cả cộng dồn"],
              ["Exposure", "Debuff trên enemy, giảm resist", "Wave of Conviction: -25% resist", "KHÔNG — chỉ exposure mạnh nhất"],
              ["Resistance Reduction", "Trực tiếp hạ resist, có thể đưa về âm", "Elemental Weakness curse: -44% ele res", "Có, cộng dồn"],
              ["-max Resistance", "Hạ cap resist từ 75% xuống", "Rất hiếm, thường chỉ ở pinnacle boss mods", "Có"],
            ].map(([type, desc, example, stack]) => (
              <tr key={type}>
                <td className="text-poe-gold font-semibold whitespace-nowrap">{type}</td>
                <td className="text-xs">{desc}</td>
                <td className="text-xs text-poe-text-dim">{example}</td>
                <td className="text-xs">{stack}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Tip>
        <B>Stacking resist reduction:</B> Penetration (-37%) + Exposure (-25%) + Curse (-44%) + Combustion (-10%) =
        enemy có -116% resist → gần như x2 damage! Đây là cách builds đạt millions DPS với budget thấp.
      </Tip>
    </Section>
  );
}
