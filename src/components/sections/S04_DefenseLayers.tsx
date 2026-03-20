import { Section, H3, P, B, Gold, Panel, Tip, Warning } from "@/components/ui";

export default function S04_DefenseLayers() {
 return (
  <Section id="defense" num="IV" title="Defense Layers — Nghệ Thuật Không Chết">
   <P>
    Trong PoE, <B>damage dễ kiếm, defense mới khó</B>. Bạn sẽ chết rất nhiều nếu không hiểu defense layers.
    Nguyên tắc cốt lõi: <Gold>stack nhiều lớp defense khác nhau</Gold>, không phụ thuộc 1 lớp duy nhất.
   </P>

   <H3>Máu & Energy Shield</H3>
   <div className="grid gap-4 sm:grid-cols-3 mb-4">
    <Panel>
     <div className="font-heading text-sm font-bold text-red-400 mb-2">Life</div>
     <ul className="space-y-1 text-xs">
      <li>▸ HP pool chính của đa số builds</li>
      <li>▸ Target: <Gold>4000-5000 Life</Gold> cho mapping, 5500+ cho boss</li>
      <li>▸ Scale bằng: flat life on gear + %increased max life trên tree</li>
      <li>▸ Cần ~180-200% increased life trên passive tree</li>
      <li>▸ Mỗi item gear nên có +70-100 flat life</li>
     </ul>
    </Panel>
    <Panel>
     <div className="font-heading text-sm font-bold text-blue-400 mb-2">Energy Shield</div>
     <ul className="space-y-1 text-xs">
      <li>▸ &quot;Máu thứ 2&quot; dựa trên Int và ES gear</li>
      <li>▸ Tự recharge sau 2s không nhận damage</li>
      <li>▸ Target: <Gold>7000-10000 ES</Gold> cho CI builds</li>
      <li>▸ CI (Chaos Inoculation): Life = 1, immune Chaos, full ES build</li>
      <li>▸ Hybrid (Life + ES): chia rủi ro, cần Wicked Ward hoặc Ghost Reaver</li>
     </ul>
    </Panel>
    <Panel>
     <div className="font-heading text-sm font-bold text-purple-400 mb-2">Mana (MoM)</div>
     <ul className="space-y-1 text-xs">
      <li>▸ Mind over Matter: 40% damage taken from mana</li>
      <li>▸ Hierophant có Divine Guidance: 50%</li>
      <li>▸ Cần mana pool lớn, mana regen/leech</li>
      <li>▸ Agnostic: sacrifice mana cho life regen</li>
      <li>▸ Tốt cho build không dùng nhiều mana reservations</li>
     </ul>
    </Panel>
   </div>

   <H3>Damage Mitigation Layers</H3>
   <div className="overflow-x-auto">
    <table className="poe-table">
     <thead>
      <tr><th>Layer</th><th>Chống</th><th>Cơ chế</th><th>Cách đạt</th><th>Target</th></tr>
     </thead>
     <tbody>
      {[
       ["Armour", "Physical hit", "Giảm phys damage taken. Hiệu quả hơn vs nhiều hit nhỏ, kém vs 1 hit lớn", "Determination aura, gear, flask", "30,000-50,000+"],
       ["Evasion", "Attack hit", "% chance né tránh hoàn toàn. Dùng entropy system (không phải RNG thuần)", "Grace aura, gear, Dex", "30,000-50,000+"],
       ["Block", "Attack & Spell hit", "% chance block hoàn toàn (0 damage). Cap 75%", "Shield, Glancing Blows, Gladiator", "50-75%"],
       ["Spell Suppression", "Spell hit", "50% less spell damage taken khi suppress thành công", "Dex gear, tree nodes", "100% chance"],
       ["Elemental Resist", "Ele damage", "Giảm % ele damage taken. Cap 75% (có thể nâng)", "Gear suffixes, tree, flasks", "75% (nâng lên 80-90% cho max res builds)"],
       ["Chaos Resist", "Chaos damage", "Thường bị bỏ quên → chết unexpectedly", "Gear, tree, Amethyst Flask", "Tối thiểu 0%, lý tưởng 75%"],
       ["Fortify", "Hit damage", "20% less hit damage taken", "Champion free, hoặc Fortify Support", "100% uptime"],
       ["Endurance Charges", "Phys + Ele", "Mỗi charge: +4% phys reduction, +4% all ele res", "Enduring Cry, tree, gear", "3-6 charges"],
      ].map(([layer, against, mech, how, target]) => (
       <tr key={layer}>
        <td className="text-poe-gold font-semibold whitespace-nowrap">{layer}</td>
        <td className="text-xs whitespace-nowrap">{against}</td>
        <td className="text-xs">{mech}</td>
        <td className="text-xs text-poe-text-dim">{how}</td>
        <td className="text-xs text-poe-gold">{target}</td>
       </tr>
      ))}
     </tbody>
    </table>
   </div>

   <H3>Armour Formula — Tại sao Armour misleading</H3>
   <div className="game-panel rounded-lg p-4 mb-4">
    <div className="text-xs font-mono text-poe-text">
     <Gold>Damage Reduction</Gold> = Armour / (Armour + 5 × Raw Damage)<br/><br/>
     Ví dụ với 30,000 Armour:<br/>
     • Hit 1,000 phys → 30000/(30000+5000) = <span className="text-poe-green">85.7% reduction</span> → chỉ nhận 143 dmg<br/>
     • Hit 5,000 phys → 30000/(30000+25000) = <span className="text-poe-gold">54.5% reduction</span> → nhận 2,273 dmg<br/>
     • Hit 10,000 phys → 30000/(30000+50000) = <span className="text-poe-red-bright">37.5% reduction</span> → nhận 6,250 dmg
    </div>
   </div>
   <Warning>
    <B>Kết luận:</B> Armour rất tốt vs nhiều hit nhỏ (mapping) nhưng kém vs 1 hit to (slam boss).
    Đó là lý do cần <Gold>kết hợp nhiều defense layers</Gold>: Armour + Max Res + Fortify + Endurance Charges.
   </Warning>

   <H3>Defense Stack phổ biến theo Archetype</H3>
   <div className="grid gap-3 sm:grid-cols-2">
    <Panel>
     <div className="font-heading text-sm font-bold text-poe-gold mb-2">Armour Stacker (Str builds)</div>
     <ul className="space-y-1 text-xs">
      <li><Gold>Determination</Gold> (aura) — base + more armour</li>
      <li><Gold>Defiance Banner</Gold> — giảm crit chance of nearby enemies</li>
      <li><Gold>Molten Shell</Gold> — guard skill, absorb damage dựa trên armour</li>
      <li>Endurance Charges × 4-6 → +16-24% phys reduction</li>
      <li>Fortify 100% uptime → 20% less hit damage</li>
      <li>Max ele res 78-80% (từ tree + gear)</li>
      <li className="text-poe-text-dim">EHP: 150,000-300,000+ vs phys</li>
     </ul>
    </Panel>
    <Panel>
     <div className="font-heading text-sm font-bold text-poe-gold mb-2">Evasion Stacker (Dex builds)</div>
     <ul className="space-y-1 text-xs">
      <li><Gold>Grace</Gold> (aura) — base + more evasion</li>
      <li><Gold>Determination</Gold> — secondary layer cho phys mitigation</li>
      <li><Gold>Spell Suppression 100%</Gold> — 50% less spell dmg</li>
      <li>Wind Dancer keystone — 20% less hit dmg nếu chưa bị hit gần đây</li>
      <li>Elusive — 15% dodge cho attacks và spells</li>
      <li>Jade + Granite Flask — burst defense</li>
      <li className="text-poe-text-dim">Playstyle: né tránh + không bao giờ đứng yên</li>
     </ul>
    </Panel>
    <Panel>
     <div className="font-heading text-sm font-bold text-poe-gold mb-2">Max Block (Shield builds)</div>
     <ul className="space-y-1 text-xs">
      <li>75% Attack Block + 75% Spell Block</li>
      <li>Glancing Blows keystone — double block chance, take 65% dmg on block</li>
      <li>Bone Offering (Necro) — block + life on block</li>
      <li>Aegis Aurora shield — recover ES on block = immortal vs small hits</li>
      <li>Tempest Shield — spell block + shock immunity</li>
      <li className="text-poe-text-dim">Weakness: unlucky streak (3-4 hits không block = chết)</li>
     </ul>
    </Panel>
    <Panel>
     <div className="font-heading text-sm font-bold text-poe-gold mb-2">CI / Low Life ES (Int builds)</div>
     <ul className="space-y-1 text-xs">
      <li>Chaos Inoculation — immune Chaos Damage</li>
      <li>8,000-15,000 Energy Shield</li>
      <li>Discipline aura — base ES + faster recharge</li>
      <li>Ghost Reaver — leech applies to ES</li>
      <li>Wicked Ward — ES recharge không bị interrupt</li>
      <li>ES trên hit (Discipline Watcher&apos;s Eye) — sustain</li>
      <li className="text-poe-text-dim">Đắt nhưng cực mạnh khi gear tốt</li>
     </ul>
    </Panel>
   </div>

   <H3>Flask System — Defense layer bị underestimate</H3>
   <P>
    5 flask slots là <B>5 defense/offense layers thêm</B>. Flask management tốt = sống sót tốt hơn đáng kể:
   </P>
   <div className="overflow-x-auto">
    <table className="poe-table">
     <thead>
      <tr><th>Flask</th><th>Tác dụng</th><th>Khi nào dùng</th></tr>
     </thead>
     <tbody>
      {[
       ["Granite Flask", "+3000 Armour, craft giảm phys dmg taken", "Mọi build, đặc biệt mapping"],
       ["Jade Flask", "+3000 Evasion", "Evasion builds, bổ sung cho melee"],
       ["Basalt Flask", "15% less physical damage taken", "Melee builds, boss fights"],
       ["Ruby/Sapphire/Topaz", "+50% ele resistance ứng với element", "Boss với heavy ele damage"],
       ["Amethyst Flask", "+35% Chaos Resistance", "Khi chaos res thấp, Al-Hezmin maps"],
       ["Quicksilver Flask", "40% increased movement speed", "BẮT BUỘC cho mapping, giữ uptime 100%"],
       ["Diamond Flask", "Lucky crit — roll crit 2 lần", "BẮT BUỘC cho crit builds"],
       ["Quartz Flask", "10% dodge + phasing (đi xuyên quái)", "Tránh bị stuck, smooth movement"],
      ].map(([name, effect, when]) => (
       <tr key={name}>
        <td className="text-poe-gold font-semibold whitespace-nowrap">{name}</td>
        <td className="text-xs">{effect}</td>
        <td className="text-xs text-poe-text-dim">{when}</td>
       </tr>
      ))}
     </tbody>
    </table>
   </div>

   <Tip>
    <B>Flask suffix quan trọng nhất:</B><br/>
    • &quot;of the Armadillo&quot; — immune to Bleeding<br/>
    • &quot;of the Deer&quot; — immune to Freeze (hoặc craft &quot;reduced effect of chill&quot;)<br/>
    • &quot;of the Owl&quot; — immune to Curse<br/>
    BẮT BUỘC có ít nhất anti-bleed và anti-freeze trên flask. Không có = chết liên tục.
   </Tip>
  </Section>
 );
}
