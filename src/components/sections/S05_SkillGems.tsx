import { Section, H3, H4, P, B, Gold, Panel, Tip, Warning } from "@/components/ui";
import SectionImage from "@/components/SectionImage";

export default function S05_SkillGems() {
  return (
    <Section id="gems" num="V" title="Skill Gems & Support System">
      <SectionImage src="/images/skill-gems.jpg" alt="POE Skill Gems" className="mb-6" />

      <H3>Gem System cốt lõi</H3>
      <P>
        Trong PoE, <B>nhân vật không tự có skill</B>. Mọi skill đến từ <Gold>Skill Gems</Gold> gắn vào socket trên gear.
        Điều này tạo sự linh hoạt cực cao — bất kỳ class nào cũng dùng được bất kỳ skill nào (miễn đủ attribute requirement).
      </P>

      <div className="grid gap-4 sm:grid-cols-2 mb-4">
        <Panel>
          <div className="font-heading text-sm font-bold text-poe-text-bright mb-2">Active Skill Gems</div>
          <ul className="space-y-1 text-xs">
            <li><Gold>Attack gems</Gold> — scale từ weapon damage (Cyclone, Lightning Arrow, Lacerate)</li>
            <li><Gold>Spell gems</Gold> — có base damage riêng, KHÔNG scale từ weapon (Arc, Fireball, Spark)</li>
            <li><Gold>Minion gems</Gold> — triệu hồi creature (Raise Spectre, SRS, Animate Guardian)</li>
            <li><Gold>Aura gems</Gold> — buff passive, reserve mana (Determination, Grace, Hatred)</li>
            <li><Gold>Movement gems</Gold> — di chuyển (Flame Dash, Shield Charge, Leap Slam)</li>
          </ul>
        </Panel>
        <Panel>
          <div className="font-heading text-sm font-bold text-poe-text-bright mb-2">Support Gems</div>
          <ul className="space-y-1 text-xs">
            <li>▸ KHÔNG cho skill mới — <B>tăng sức mạnh</B> cho linked active gem</li>
            <li>▸ Đa số support cho <Gold>&quot;more&quot; multiplier</Gold> — cực mạnh</li>
            <li>▸ Cần được linked (nối socket) với active gem</li>
            <li>▸ Mỗi support chỉ áp dụng 1 lần cho 1 active gem</li>
            <li>▸ Stacking 5 supports cho main skill = damage gấp 5-10x so với không support</li>
          </ul>
        </Panel>
      </div>

      <H3>Socket & Link chi tiết</H3>
      <P>
        Socket có 3 màu: <span className="text-red-400">Đỏ (Str)</span>,{" "}
        <span className="text-green-400">Xanh lá (Dex)</span>,{" "}
        <span className="text-blue-400">Xanh dương (Int)</span>.
        Màu socket trên item bị influence bởi attribute requirement của item — armour (Str) có nhiều red sockets.
      </P>

      <div className="overflow-x-auto mb-4">
        <table className="poe-table">
          <thead>
            <tr><th>Item slot</th><th>Max sockets</th><th>Ý nghĩa</th></tr>
          </thead>
          <tbody>
            {[
              ["Body Armour", "6 sockets, 6 links", "Main skill 6L — quan trọng nhất, quyết định damage output chính"],
              ["2H Weapon", "6 sockets, 6 links", "Alternative cho main skill nếu dùng 2H weapon"],
              ["1H Weapon / Shield", "3 sockets mỗi cái", "Aura, movement skill, guard skill"],
              ["Helmet", "4 sockets", "Thường cho aura setup hoặc secondary skill"],
              ["Gloves", "4 sockets", "Utility: curse on hit, vaal skill, golem, brand"],
              ["Boots", "4 sockets", "Movement skill + guard skill + secondary aura"],
              ["Belt / Ring / Amulet", "0 sockets", "Không có gem socket (trừ Unset Ring: 1 socket)"],
            ].map(([slot, max, meaning]) => (
              <tr key={slot}>
                <td className="text-poe-gold font-semibold whitespace-nowrap">{slot}</td>
                <td className="text-xs whitespace-nowrap">{max}</td>
                <td className="text-xs">{meaning}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <H3>6-Link Setup phổ biến cho các build meta</H3>
      <div className="space-y-3">
        {[
          {
            skill: "Righteous Fire",
            class: "Juggernaut / Inquisitor",
            gems: ["Righteous Fire", "Elemental Focus", "Burning Damage", "Increased Area", "Lifetap", "Awakened Swift Affliction"],
            note: "Dùng thêm Fire Trap 6L cho single target boss damage",
          },
          {
            skill: "Lightning Arrow",
            class: "Deadeye",
            gems: ["Lightning Arrow", "Trinity", "Inspiration", "Added Lightning", "Elemental Damage w/ Attacks", "Greater Multiple Projectiles (swap Slower Proj cho boss)"],
            note: "GMP cho clear, swap Slower Projectiles cho boss = x3 single target",
          },
          {
            skill: "Cyclone CoC Ice Nova",
            class: "Assassin / Inquisitor",
            gems: ["Cyclone", "Cast on Critical Strike", "Ice Nova", "Hypothermia", "Increased Critical Damage", "Inspiration"],
            note: "Cần attack speed breakpoints cụ thể: 10.10 APS hoặc 15.14 APS cho maximum trigger rate",
          },
          {
            skill: "Raise Spectre",
            class: "Necromancer",
            gems: ["Raise Spectre", "Minion Damage", "Spell Echo", "GMP/Predator", "Ele Focus", "Awakened Added Fire"],
            note: "Spectres giữ level khi logout — không cần re-summon. Syndicate Operatives hoặc Redemption Sentries là best spectres",
          },
          {
            skill: "Explosive Arrow Ballista",
            class: "Champion / Elementalist",
            gems: ["Explosive Arrow", "Ballista Totem", "Elemental Damage w/ Attacks", "Combustion", "Ignite Proliferation", "Deadly Ailments"],
            note: "Stack 20 fuses trong 1 giây → nổ gây millions ignite DPS. League start king.",
          },
        ].map(({ skill, class: cls, gems, note }) => (
          <Panel key={skill}>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="font-heading text-sm font-bold text-poe-gold">{skill}</span>
              <span className="text-xs text-poe-text-dim">({cls})</span>
            </div>
            <div className="flex flex-wrap gap-1 mb-2">
              {gems.map((gem, i) => (
                <span key={i} className="inline-block rounded bg-poe-bg/80 border border-poe-border px-2 py-0.5 text-[11px] text-poe-text">
                  {gem}
                </span>
              ))}
            </div>
            <p className="text-xs text-poe-text-dim">{note}</p>
          </Panel>
        ))}
      </div>

      <H3>Gem Quality & Level</H3>
      <P>
        Gems có 2 thuộc tính scale riêng: <B>Level</B> (1-21) và <B>Quality</B> (0-23%). Cả hai đều tăng damage/effect.
      </P>
      <ul className="space-y-2 text-sm mb-4">
        <li className="flex gap-2">
          <span className="text-poe-gold shrink-0">▸</span>
          <span><B>Level 20 → 21:</B> Dùng Vaal Orb corrupt gem level 20. 12.5% chance lên 21 (rất mạnh cho spell gems — base damage tăng đáng kể).</span>
        </li>
        <li className="flex gap-2">
          <span className="text-poe-gold shrink-0">▸</span>
          <span><B>Quality 20%:</B> Dùng Gemcutter&apos;s Prism (GCP) hoặc vendor recipe (gem lv20 + GCP → gem lv1 quality 20%).</span>
        </li>
        <li className="flex gap-2">
          <span className="text-poe-gold shrink-0">▸</span>
          <span><B>Awakened Support Gems:</B> Phiên bản mạnh hơn, drop từ boss Sirus/Maven. Level 5 awakened ≈ level 25 thường — damage chênh lệch lớn.</span>
        </li>
        <li className="flex gap-2">
          <span className="text-poe-gold shrink-0">▸</span>
          <span><B>Empower/Enhance/Enlighten:</B> Special support gems. Empower +levels cho linked gems (cực mạnh cho spell builds). Enlighten giảm mana reservation.</span>
        </li>
      </ul>

      <Tip>
        <B>Trick:</B> Mang theo gem trong weapon swap (slot 2) — gem vẫn nhận EXP dù bạn không dùng.
        Dùng để level gem duplicate để bán hoặc corrupt lên 21.
      </Tip>
    </Section>
  );
}
