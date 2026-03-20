import { Section, H3, H4, P, B, Gold, Panel, Tip, Warning } from "@/components/ui";
import SectionImage from "@/components/SectionImage";

export default function S07_Items() {
  return (
    <Section id="items" num="VII" title="Item System & Crafting Cơ Bản">
      <SectionImage src="/images/items.jpg" alt="POE Items" className="mb-6" />

      <H3>4 Cấp độ hiếm (Rarity)</H3>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 mb-6">
        {[
          { rarity: "Normal", color: "rarity-normal", border: "border-stone-600", affixes: "0 affix", desc: "Base item. Dùng để craft hoặc bán vendor." },
          { rarity: "Magic", color: "rarity-magic", border: "border-blue-700", affixes: "1-2 affix", desc: "1 prefix + 1 suffix max. Dùng cho flask craft, map craft, và jewel craft." },
          { rarity: "Rare", color: "rarity-rare", border: "border-yellow-600", affixes: "3-6 affix", desc: "3 prefix + 3 suffix. Gear chính cho mọi build. Item tốt = 4+ affix hữu ích." },
          { rarity: "Unique", color: "rarity-unique", border: "border-orange-700", affixes: "Fixed mods", desc: "Bonus đặc biệt, build-enabling. Từ vài Chaos tới hàng trăm Divine." },
        ].map(({ rarity, color, border, affixes, desc }) => (
          <div key={rarity} className={`rounded-lg border bg-poe-surface/50 p-4 ${border}`}>
            <div className={`font-heading text-sm font-bold ${color}`}>{rarity}</div>
            <div className="mt-1 text-xs text-poe-gold">{affixes}</div>
            <div className="mt-2 text-xs text-poe-text-dim leading-relaxed">{desc}</div>
          </div>
        ))}
      </div>

      <H3>Affix Tiers — Không phải Rare nào cũng tốt</H3>
      <P>
        Mỗi affix có <B>nhiều tier</B>. Ví dụ flat Life trên body armour:
      </P>
      <div className="overflow-x-auto mb-4">
        <table className="poe-table">
          <thead>
            <tr><th>Tier</th><th>Prefix</th><th>Life range</th><th>Item Level cần</th><th>Đánh giá</th></tr>
          </thead>
          <tbody>
            {[
              ["T1", "Tyrannical", "+90-99", "iLvl 86", "God tier — chỉ drop từ map T14+"],
              ["T2", "Dictator's", "+80-89", "iLvl 81", "Excellent — đủ cho endgame"],
              ["T3", "Emperor's", "+70-79", "iLvl 73", "Good — đủ dùng yellow/early red maps"],
              ["T5", "Warlord's", "+50-59", "iLvl 54", "Mediocre — nên upgrade sớm"],
              ["T7+", "Lower tiers", "+10-39", "iLvl 1-36", "Trash — vendor ngay"],
            ].map(([tier, prefix, range, ilvl, rating]) => (
              <tr key={tier}>
                <td className="text-poe-gold font-semibold">{tier}</td>
                <td className="text-xs">{prefix}</td>
                <td className="text-poe-text-bright text-xs font-semibold">{range}</td>
                <td className="text-xs text-poe-text-dim">{ilvl}</td>
                <td className="text-xs">{rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Warning>
        <B>Item Level (iLvl)</B> quyết định max tier affix có thể roll. Item iLvl 86+ có thể roll T1 tất cả mods.
        Khi mua base để craft, luôn kiểm tra iLvl ≥ 83 (T1 life), lý tưởng 86+.
      </Warning>

      <H3>Influenced Items</H3>
      <P>
        Items có thể có <B>Influence</B> — thêm pool of mods đặc biệt cực mạnh:
      </P>
      <div className="grid gap-3 sm:grid-cols-2 mb-4">
        {[
          { name: "Shaper", color: "text-cyan-400", mods: "Spell crit, ES%, recover ES on kill, extra projectile" },
          { name: "Elder", color: "text-stone-300", mods: "Life recovery, socketed gem +level, slower stronger hits" },
          { name: "Crusader", color: "text-yellow-300", mods: "Extra phys as element, curse on hit, base crit" },
          { name: "Redeemer", color: "text-blue-300", mods: "Cold pen, chance to avoid damage, ES on hit" },
          { name: "Hunter", color: "text-green-400", mods: "Chaos DoT multi, life as ES, +1 level of gems" },
          { name: "Warlord", color: "text-red-400", mods: "Phys as fire, fire pen, intimidate on hit" },
        ].map(({ name, color, mods }) => (
          <div key={name} className="flex gap-3 rounded-lg bg-poe-surface/50 p-3 border border-poe-border">
            <span className={`font-heading text-sm font-bold ${color} whitespace-nowrap`}>{name}</span>
            <span className="text-xs text-poe-text-dim">{mods}</span>
          </div>
        ))}
      </div>

      <H3>Gear Check — Item tốt phải có gì?</H3>
      <div className="overflow-x-auto">
        <table className="poe-table">
          <thead>
            <tr><th>Slot</th><th>Must have</th><th>Nice to have</th><th>Budget target</th></tr>
          </thead>
          <tbody>
            {[
              ["Helmet", "Life, Resists", "+gem level, -ele res nearby, enchant", "20-50c"],
              ["Body Armour", "Life, 6-Link", "% life, spell crit, +1 gems", "20c (Tabula) → 2-5 Div (crafted)"],
              ["Gloves", "Life, Resists, Attack Speed", "Damage conversion, curse on hit", "10-30c"],
              ["Boots", "Life, 30%+ MS, Resists", "Elusive, Tailwind, spell suppression", "10c-5 Div"],
              ["Belt", "Life, Resists, Flask mods", "% increased damage, ES", "10-50c"],
              ["Amulet", "Life, Resists, Damage stat", "+1 gem level (CỰC mạnh cho spells), crit multi", "50c-10 Div"],
              ["Rings", "Life, Resists", "Curse on hit (Mark), flat damage, accuracy", "10-50c each"],
              ["Weapon", "Damage mods phù hợp build", "Attack speed, crit, +gem levels", "Varies wildly"],
            ].map(([slot, must, nice, budget]) => (
              <tr key={slot}>
                <td className="text-poe-gold font-semibold whitespace-nowrap">{slot}</td>
                <td className="text-xs">{must}</td>
                <td className="text-xs text-poe-text-dim">{nice}</td>
                <td className="text-xs text-poe-gold">{budget}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <H3>Crafting cơ bản cho người mới</H3>
      <ol className="space-y-2 text-sm">
        {[
          "Tìm base item đúng (iLvl 83+, đúng base type cho build)",
          "Dùng Orb of Alchemy → Rare. Nếu mods tệ → Chaos Orb để re-roll (tối đa 5-10 lần)",
          "Nếu có 1-2 mods tốt + open affix → dùng Crafting Bench để thêm mod (Life, Resist, etc.)",
          "Prefix đầy (3/3) nhưng suffix dở → \"Prefixes Cannot Be Changed\" (2 Div) rồi Orb of Scouring xóa suffix",
          "Essence craft: dùng Essence guarantee 1 mod cụ thể, còn lại random — đơn giản và hiệu quả",
          "Fossil craft: dùng Resonator + Fossil để weight mods — tốt cho niche items",
        ].map((step, i) => (
          <li key={i} className="flex gap-3">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-poe-gold/15 font-heading text-[10px] font-bold text-poe-gold">{i + 1}</span>
            <span>{step}</span>
          </li>
        ))}
      </ol>

      <Tip>
        <B>Essence crafting</B> là cách craft tốt nhất cho người mới. Screaming/Shrieking Essence guarantee 1 high-tier mod.
        Ví dụ: <Gold>Shrieking Essence of Greed</Gold> guarantee T2 Life trên bất kỳ item nào — rẻ và hiệu quả.
      </Tip>
    </Section>
  );
}
