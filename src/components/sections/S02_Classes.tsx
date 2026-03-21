import { Section, H3, P, B, Gold, Panel, Tip, Warning } from "@/components/ui";
import SectionImage from "@/components/SectionImage";

export default function S02_Classes() {
 return (
  <Section id="classes" num="II" title="Hệ Thống Nhân Vật & Thăng Hạng">
   <SectionImage src="/images/classes.jpg" alt="POE Character Classes" className="mb-6" />

   <H3>3 Attributes — Nền tảng mọi thứ</H3>
   <P>
    Mọi item, gem, passive node trong PoE đều xoay quanh 3 attributes. Hiểu rõ attributes giúp bạn
    chọn gear đúng và build cây passive hiệu quả:
   </P>
   <div className="grid gap-3 sm:grid-cols-3 mb-6">
    {[
     {
      color: "bg-red-900/40 border-red-800/50",
      icon: "🔴",
      name: "Strength",
      stats: "+5 Life / +2% Melee Physical Dmg mỗi 10 điểm",
      detail: "Class Str thường có base life cao, dùng Armour để giảm physical damage taken. Gem màu đỏ: melee attacks, war cries, auras phòng thủ.",
     },
     {
      color: "bg-green-900/40 border-green-800/50",
      icon: "🟢",
      name: "Dexterity",
      stats: "+20 Accuracy / +2% Evasion mỗi 10 điểm",
      detail: "Class Dex né tránh damage hoàn toàn thay vì giảm. Gem xanh lá: projectile attacks, traps, movement skills.",
     },
     {
      color: "bg-blue-900/40 border-blue-800/50",
      icon: "🔵",
      name: "Intelligence",
      stats: "+5 Mana / +2% Energy Shield mỗi 10 điểm",
      detail: "Class Int dùng Energy Shield như lớp máu thứ 2. Gem xanh dương: spells, curses, minions, auras.",
     },
    ].map(({ color, icon, name, stats, detail }) => (
     <div key={name} className={`rounded-lg border p-4 ${color}`}>
      <div className="mb-1 text-lg">{icon}</div>
      <div className="font-heading text-sm font-bold text-poe-text-bright">{name}</div>
      <div className="mt-1 text-xs text-poe-gold">{stats}</div>
      <div className="mt-2 text-xs text-poe-text-dim leading-relaxed">{detail}</div>
     </div>
    ))}
   </div>

   <H3>7 Classes chi tiết</H3>
   <P>
    Class trong PoE <B>KHÔNG khóa</B> bạn vào kiểu chơi nào. Bất kỳ class nào cũng dùng được bất kỳ skill.
    Sự khác biệt quan trọng: <B>vị trí bắt đầu trên Passive Tree</B> và <B>Ascendancy options</B>.
   </P>

   <div className="overflow-x-auto mb-6">
    <table className="poe-table">
     <thead>
      <tr><th>Class</th><th>Attr</th><th>Khởi điểm Passive Tree</th><th>Ascendancy (Top picks)</th><th>Meta builds tiêu biểu</th></tr>
     </thead>
     <tbody>
      <tr>
       <td className="text-poe-gold font-semibold">Marauder</td>
       <td>🔴 Str</td>
       <td>Gần Life, Armour, Melee nodes</td>
       <td>
        <Gold>Juggernaut</Gold> (tank),{" "}
        <span className="text-poe-text-bright">Berserker</span> (damage),{" "}
        <span className="text-poe-text-dim">Chieftain</span> (fire/totem)
       </td>
       <td className="text-xs">RF Jugg, Boneshatter Jugg, General&apos;s Cry Berserker</td>
      </tr>
      <tr>
       <td className="text-poe-gold font-semibold">Ranger</td>
       <td>🟢 Dex</td>
       <td>Gần Evasion, Projectile, Speed nodes</td>
       <td>
        <Gold>Deadeye</Gold> (projectile),{" "}
        <span className="text-poe-text-bright">Raider</span> (speed/frenzy),{" "}
        <span className="text-poe-text-dim">Pathfinder</span> (flask/poison)
       </td>
       <td className="text-xs">LA Deadeye, TS Deadeye, Toxic Rain Pathfinder</td>
      </tr>
      <tr>
       <td className="text-poe-gold font-semibold">Witch</td>
       <td>🔵 Int</td>
       <td>Gần ES, Spell, Minion nodes</td>
       <td>
        <Gold>Necromancer</Gold> (minion),{" "}
        <span className="text-poe-text-bright">Elementalist</span> (elemental),{" "}
        <span className="text-poe-text-dim">Occultist</span> (chaos/curse)
       </td>
       <td className="text-xs">SRS Necro, Vortex Occultist, Arc Elementalist</td>
      </tr>
      <tr>
       <td className="text-poe-gold font-semibold">Duelist</td>
       <td>🔴🟢</td>
       <td>Gần Attack, Leech, Dual wield nodes</td>
       <td>
        <Gold>Champion</Gold> (tanky attacker),{" "}
        <span className="text-poe-text-bright">Slayer</span> (overleech/cull),{" "}
        <span className="text-poe-text-dim">Gladiator</span> (block/bleed)
       </td>
       <td className="text-xs">EA Ballista Champion, Lacerate Glad, Cyclone Slayer</td>
      </tr>
      <tr>
       <td className="text-poe-gold font-semibold">Templar</td>
       <td>🔴🔵</td>
       <td>Gần Elemental, Life/ES hybrid nodes</td>
       <td>
        <Gold>Inquisitor</Gold> (elemental pen),{" "}
        <span className="text-poe-text-bright">Hierophant</span> (totem/mana),{" "}
        <span className="text-poe-text-dim">Guardian</span> (aura/support)
       </td>
       <td className="text-xs">RF Inquisitor, Spark Inquisitor, Aura Stacker Guardian</td>
      </tr>
      <tr>
       <td className="text-poe-gold font-semibold">Shadow</td>
       <td>🟢🔵</td>
       <td>Gần Crit, Trap, Mine, DoT nodes</td>
       <td>
        <Gold>Assassin</Gold> (crit/poison),{" "}
        <span className="text-poe-text-bright">Saboteur</span> (trap/mine),{" "}
        <span className="text-poe-text-dim">Trickster</span> (hybrid defense)
       </td>
       <td className="text-xs">CoC Ice Nova Assassin, Seismic Trap Sabo, RF Trickster</td>
      </tr>
      <tr>
       <td className="text-poe-gold font-semibold">Scion</td>
       <td>Cả 3</td>
       <td>Giữa cây — linh hoạt nhất</td>
       <td>
        <Gold>Ascendant</Gold> — chọn 2 mini-ascendancy từ các class khác
       </td>
       <td className="text-xs">Aura Stacker, Spark Ascendant, các build cần nhiều travel nodes</td>
      </tr>
     </tbody>
    </table>
   </div>

   <H3>Ascendancy — Hệ thống chuyên môn hóa</H3>
   <P>
    Mở khóa qua <B>Labyrinth</B> (mê cung) — có 4 cấp độ Lab:
   </P>
   <div className="overflow-x-auto mb-4">
    <table className="poe-table">
     <thead>
      <tr><th>Lab</th><th>Khi nào</th><th>Yêu cầu</th><th>Ascendancy Points</th></tr>
     </thead>
     <tbody>
      <tr><td className="text-poe-gold font-semibold">Normal Lab</td><td>Act 3 (level ~33)</td><td>Hoàn thành 6 trials trong Act 1-3</td><td>2 điểm đầu tiên</td></tr>
      <tr><td className="text-poe-gold font-semibold">Cruel Lab</td><td>Act 7 (level ~55)</td><td>Hoàn thành 6 trials trong Act 6-7</td><td>+2 điểm (tổng 4)</td></tr>
      <tr><td className="text-poe-gold font-semibold">Merciless Lab</td><td>Act 10 (level ~68)</td><td>Hoàn thành 3 trials trong Act 8-10</td><td>+2 điểm (tổng 6)</td></tr>
      <tr><td className="text-poe-gold font-semibold">Uber Lab</td><td>Endgame (level 75+)</td><td>Tìm 6 Trials of Ascendancy ngẫu nhiên trong map</td><td>+2 điểm (tổng 8)</td></tr>
     </tbody>
    </table>
   </div>

   <H3>Bảng Xếp Hạng Ascendancy (Meta Hiện Tại)</H3>
   <div className="grid gap-3 sm:grid-cols-2">
    <Panel>
     <div className="mb-2 font-heading text-xs font-bold text-poe-gold tracking-wider uppercase">S-Tier (Mạnh nhất)</div>
     <ul className="space-y-1 text-sm">
      <li><Gold>Champion</Gold> — Fortify miễn phí, Adrenaline buff, tanky + damage. League start king.</li>
      <li><Gold>Juggernaut</Gold> — Unbreakable defense, Accuracy bonus, immune stun. RF god.</li>
      <li><Gold>Necromancer</Gold> — Minion army, offering bonus, corpse utility. Lazy playstyle.</li>
      <li><Gold>Deadeye</Gold> — Extra proj, chain, mirage archer. Mapping queen.</li>
     </ul>
    </Panel>
    <Panel>
     <div className="mb-2 font-heading text-xs font-bold text-poe-text-bright tracking-wider uppercase">A-Tier (Rất mạnh)</div>
     <ul className="space-y-1 text-sm">
      <li><B>Inquisitor</B> — Ignore ele resist trên crit, regen mạnh. Spell builds.</li>
      <li><B>Assassin</B> — Crit scaling beast, Elusive defense. CoC builds.</li>
      <li><B>Pathfinder</B> — Flask uptime 100%, chaos/poison. Versatile.</li>
      <li><B>Trickster</B> — Hybrid ES/evasion, DoT. Great league starter.</li>
      <li><B>Elementalist</B> — Golem synergy, exposure, ele immunity. Scaling monster.</li>
     </ul>
    </Panel>
   </div>

   <Warning>
    <B>Người mới nên chọn:</B> Marauder (Juggernaut), Duelist (Champion), hoặc Witch (Necromancer).
    Đây là 3 ascendancy dễ build nhất, tanky nhất, và có nhiều build guide nhất.
   </Warning>
  </Section>
 );
}
