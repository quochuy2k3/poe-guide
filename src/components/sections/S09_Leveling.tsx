import { Section, H3, P, B, Gold, Panel, Tip, Warning } from "@/components/ui";
import SectionImage from "@/components/SectionImage";

export default function S09_Leveling() {
 return (
  <Section id="leveling" num="IX" title="Cày Level — Chiến Dịch & Mẹo Tăng Tốc">
   <SectionImage src="/images/leveling.jpg" alt="POE Campaign" className="mb-6" />

   <H3>Tổng Quan Chiến Dịch</H3>
   <P>
    10 Acts — mục tiêu là hoàn thành <B>càng nhanh càng tốt</B> để vào endgame.
    Người mới: 15-30 giờ. Player trung bình: 6-10 giờ. Speedrunner: dưới 3 giờ.
   </P>

   <H3>Tham Khảo Theo Từng Chương</H3>
   <div className="overflow-x-auto mb-4">
    <table className="poe-table">
     <thead>
      <tr><th>Act</th><th>Boss</th><th>Level</th><th>Quest rewards quan trọng</th><th>Tips</th></tr>
     </thead>
     <tbody>
      {[
       ["1", "Merveil", "1→12", "Skill gems từ Nessa sau quest", "Rush tới Ledge WP, farm nếu under-level. Mua movement gem (Quicksilver Flask quest Act 1)"],
       ["2", "Vaal Oversoul", "12→18", "BANDITS: Kill All (+2 points) hoặc Help Alira", "Grab all WPs. Chamber of Sins = lab trial. Đừng quên Wetlands quest (passive point)"],
       ["3", "Dominus", "18→24", "Fixture of Fate (gem library) — mua gems cần thiết", "Rescue Scion để unlock. Library = mua tất cả gems không thuộc class bạn"],
       ["4", "Malachai", "24→30", "Passive points từ 2 quests", "Mines khó navigate — follow guide. Malachai = first wall cho nhiều builds"],
       ["5", "Kitava I", "30→36", "Jewel socket quest, passive points", "SAU KITAVA: -30% all resist! Chuẩn bị resist gear trước"],
       ["6", "Tukohama/Abberath", "36→42", "Passive point quests", "Quay lại Act 1 areas nhưng khó hơn. Equip resist gear ngay"],
       ["7", "Arakaali", "42→47", "Passive points", "Lab trial trong Crypt. Grab waypoints cho Act 8"],
       ["8", "Lunaris & Solaris", "47→52", "Passive points", "2 bosses trong 1 Act. Doedre Sewers annoying — skip nếu có thể"],
       ["9", "Depraved Trinity", "52→58", "Passive points", "Sa mạc + mines. Quarry zone tốt để farm exp nếu cần"],
       ["10", "Kitava II", "58→62", "Endgame unlock!", "SAU KITAVA II: -60% ALL resist! PHẢI cap resist trước khi map"],
      ].map(([act, boss, level, quest, tips]) => (
       <tr key={act}>
        <td className="text-poe-gold font-heading font-bold text-center">{act}</td>
        <td className="text-poe-text-bright font-semibold text-xs whitespace-nowrap">{boss}</td>
        <td className="text-xs text-poe-text-dim whitespace-nowrap">{level}</td>
        <td className="text-xs">{quest}</td>
        <td className="text-xs text-poe-text-dim">{tips}</td>
       </tr>
      ))}
     </tbody>
    </table>
   </div>

   <H3>Mẹo Cày Level Nhanh</H3>
   <div className="grid gap-3 sm:grid-cols-2 mb-4">
    {[
     { title: "Movement Speed", tips: ["Quicksilver Flask từ Act 1 quest (mercy mission)", "30% MS boots — mua/find ASAP", "Movement skill: Flame Dash (caster) hoặc Leap Slam/Shield Charge (melee)", "Onslaught support trên movement skill = bonus speed"] },
     { title: "Damage scaling", tips: ["Cập nhật weapon mỗi 10-15 levels", "Vendor recipe: Whetstone + Magic weapon + Rustic Sash = %phys weapon", "+1 gem level wand recipe cho casters (Act 1)", "Dùng Essences (nếu có) craft weapon khi leveling"] },
     { title: "Gem setup", tips: ["Không cần 6-link khi leveling — 4-link đủ", "Keep gems leveling — DON'T hit cancel khi gem level up pop up", "Mua utility gems từ Lilly Roth (Act 6) — bán TẤT CẢ gems", "Level 2-3 bộ gems backup trong weapon swap"] },
     { title: "Zone strategy", tips: ["KHÔNG giết tất cả quái — chỉ kill packs on the way", "Target: character level = zone level hoặc -2", "Nếu under-level: farm Blood Aqueduct (Act 9) hoặc Quarry", "Skip dead ends — chỉ vào zones cần cho quest progression"] },
    ].map(({ title, tips }) => (
     <Panel key={title}>
      <div className="font-heading text-sm font-bold text-poe-gold mb-2">{title}</div>
      <ul className="space-y-1 text-xs">
       {tips.map((t, i) => <li key={i}>▸ {t}</li>)}
      </ul>
     </Panel>
    ))}
   </div>

   <H3>Lựa Chọn Bandits (Chương 2) — Phân Tích Ảnh Hưởng</H3>
   <div className="overflow-x-auto mb-4">
    <table className="poe-table">
     <thead>
      <tr><th>Choice</th><th>Reward</th><th>Best cho</th><th>Popularity</th></tr>
     </thead>
     <tbody>
      <tr>
       <td className="text-poe-gold font-semibold">Kill All</td>
       <td>+2 Passive Points</td>
       <td>Đa số builds — 2 points rất valuable</td>
       <td className="text-poe-green font-semibold">~70% builds</td>
      </tr>
      <tr>
       <td className="text-poe-gold font-semibold">Help Alira</td>
       <td>+5 Mana Regen/s, +20% Crit Multi, +15% All Res</td>
       <td>Crit builds cần resist — crit multi + resist rất tốt early</td>
       <td className="text-poe-text-bright">~25% builds</td>
      </tr>
      <tr>
       <td className="text-poe-text-dim font-semibold">Help Oak</td>
       <td>+1% Life Regen, +2% Phys Reduction, 20% Phys Dmg</td>
       <td>RF builds, physical tanks</td>
       <td className="text-poe-text-dim">~4% builds</td>
      </tr>
      <tr>
       <td className="text-poe-text-dim font-semibold">Help Kraityn</td>
       <td>+6% Attack/Cast Speed, 3% Dodge, 6% MS</td>
       <td>Gần như không ai chọn</td>
       <td className="text-poe-text-dim">~1%</td>
      </tr>
     </tbody>
    </table>
   </div>

   <Tip>
    <B>Blood Aqueduct farming:</B> Zone Act 9, level 61. Farm Humility divination card (9 cards = Tabula Rasa 6-link).
    Dùng loot filter strict, chạy vòng tròn. 1-2 giờ thường đủ cho 1 bộ Tabula — budget 6-link miễn phí.
   </Tip>

   <Warning>
    <B>Sau Act 10 Kitava:</B> Resistance bị -60% tổng cộng. VÀO ENDGAME VỚI RESIST THẤP = CHẾT LIÊN TỤC.
    Chuẩn bị sẵn gear với resist TRƯỚC KHI đánh Kitava. Mua từ trade site nếu cần — rẻ hơn nhiều so với chết mất exp.
   </Warning>
  </Section>
 );
}
