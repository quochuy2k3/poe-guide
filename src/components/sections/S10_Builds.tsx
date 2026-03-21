import { Section, H3, P, B, Gold, Panel, Tip, Warning } from "@/components/ui";
import SectionImage from "@/components/SectionImage";

export default function S10_Builds() {
 return (
  <Section id="builds" num="X" title="Xây Dựng Nhân Vật — Từ Đầu Mùa Đến Tối Ưu">
   <SectionImage src="/images/builds.jpg" alt="POE Build Gameplay" className="mb-6" />

   <H3>Thành Phần Của Một Build</H3>
   <P>
    Một build hoàn chỉnh bao gồm: Class + Ascendancy, Main Skill (6L), Aura setup,
    Movement skill, Guard skill, Passive Tree, Gear, Flasks, Jewels, và Pantheon.
    Thiếu bất kỳ piece nào = build không hoàn thiện.
   </P>

   <H3>Kiểu Build — So Sánh Chi Tiết</H3>
   <div className="overflow-x-auto mb-4">
    <table className="poe-table">
     <thead>
      <tr><th>Archetype</th><th>Budget start</th><th>Ceiling DPS</th><th>Survivability</th><th>Clear</th><th>Bossing</th><th>Complexity</th></tr>
     </thead>
     <tbody>
      {[
       ["RF (Righteous Fire)", "0.5 Div", "2-5M", "★★★★★", "★★★★", "★★★", "★"],
       ["Minion (SRS/Spectre)", "1 Div", "5-20M", "★★★★★", "★★★", "★★★★", "★★"],
       ["EA Ballista", "1 Div", "10-30M", "★★★★", "★★★", "★★★★★", "★★"],
       ["Lightning Arrow", "3 Div", "5-50M+", "★★★", "★★★★★", "★★★", "★★★"],
       ["Cyclone (melee)", "2 Div", "5-20M", "★★★★", "★★★", "★★★★", "★★"],
       ["Poison Concoction", "0 Div", "3-10M", "★★★★", "★★★★", "★★★", "★★"],
       ["CoC Ice Nova", "20 Div", "50-200M+", "★★★", "★★★★★", "★★★★★", "★★★★★"],
       ["Spark Inquisitor", "5 Div", "20-100M+", "★★★★", "★★★★★", "★★★★", "★★★"],
       ["Seismic Trap", "2 Div", "10-50M", "★★★", "★★★", "★★★★★", "★★★"],
       ["Boneshatter Jugg", "1 Div", "5-30M", "★★★★★", "★★★", "★★★★", "★★"],
      ].map(([name, budget, dps, surv, clear, boss, complex]) => (
       <tr key={name}>
        <td className="text-poe-gold font-semibold whitespace-nowrap text-xs">{name}</td>
        <td className="text-xs text-poe-text-dim">{budget}</td>
        <td className="text-xs">{dps}</td>
        <td className="text-xs">{surv}</td>
        <td className="text-xs">{clear}</td>
        <td className="text-xs">{boss}</td>
        <td className="text-xs">{complex}</td>
       </tr>
      ))}
     </tbody>
    </table>
   </div>

   <H3>Build Đầu Mùa — Chi Tiết Cho Người Mới</H3>
   <div className="space-y-4 mb-4">
    {[
     {
      name: "Righteous Fire Juggernaut",
      tier: "S-Tier League Starter",
      playstyle: "Bật aura lửa xung quanh người → đi đâu quái chết đó. Không cần nhấn button ngoài movement skill và Flask.",
      pros: ["Cực dễ chơi — literally chỉ cần đi bộ", "Tank nhất game — 80%+ phys reduction, 80%+ max res", "Clear ổn với Righteous Fire, boss dùng Fire Trap", "Budget cực thấp — hoạt động với item tự tìm"],
      cons: ["DPS ceiling thấp hơn builds khác", "Boss clear chậm (Fire Trap DPS giới hạn)", "Phải hiểu sustain RF: life regen phải > RF degen"],
      budget: "Hoạt động từ 0 budget. Min-max tới 20-30 Div cho 5M+ DPS.",
      keyItems: "Rise of the Phoenix (shield, 1c), Purity of Fire, Legacy of Fury boots (5-10 Div luxury)",
     },
     {
      name: "SRS (Summon Raging Spirits) Necromancer",
      tier: "S-Tier League Starter",
      playstyle: "Triệu hồi đầu lửa bay đánh quái. Bạn chỉ cần cast SRS rồi chạy theo.",
      pros: ["An toàn — minions tank cho bạn", "Scaling tốt từ budget thấp đến cao", "Không cần gear cụ thể để bắt đầu", "Minions target tự động — ít APM"],
      cons: ["Minion AI đôi khi ngớ ngẩn", "Clear speed trung bình", "Cần recast SRS liên tục (20 cap)"],
      budget: "0-1 Div start. +1/+2 minion gem wand (10-50c) = huge upgrade. Min-max 30-50 Div.",
      keyItems: "+1/+2 to minion gem wand, Tabula Rasa, Bones of Ullr boots",
     },
     {
      name: "Explosive Arrow Ballista Champion",
      tier: "A-Tier League Starter",
      playstyle: "Đặt 5-6 tháp (ballista totem) tự động bắn tên gắn bom. 20 fuses stacked → nổ gây millions ignite DPS.",
      pros: ["Bossing DPS cực cao với budget thấp", "Champion = Fortify miễn phí + tanky", "Totems = bạn né trong khi totems damage", "Scale tốt với investment"],
      cons: ["Totem gameplay — delay giữa đặt totem và damage", "Clear mapping chậm hơn projectile builds", "Cần hiểu fuse mechanic để optimize"],
      budget: "1-2 Div functional. 10 Div = Uber boss ready. Quill Rain bow = gần free, cực tốt.",
      keyItems: "Quill Rain (1c), Rain of Splinters jewel, Dyadian Dawn belt",
     },
     {
      name: "Poisonous Concoction Pathfinder",
      tier: "A-Tier League Starter",
      playstyle: "Ném chai thuốc độc vào quái — KHÔNG CẦN WEAPON. Pathfinder = flask never runs out.",
      pros: ["ZERO gear requirement — không cần weapon!", "Flask sustain 100% từ Pathfinder", "Poison stacking DPS tốt cho boss", "Rất flexible — có thể swap build sau"],
      cons: ["DPS ceiling thấp hơn meta builds", "Mapping speed trung bình", "Poison ramp time trên boss"],
      budget: "Literally 0 currency cần thiết. Min-max 10-20 Div.",
      keyItems: "Không cần unique nào. Rare life + resist gear. Darkscorn bow (optional luxury).",
     },
    ].map((build) => (
     <Panel key={build.name}>
      <div className="flex flex-wrap items-center gap-2 mb-2">
       <span className="font-heading text-base font-bold text-poe-gold">{build.name}</span>
       <span className="rounded bg-poe-gold/15 px-2 py-0.5 text-[10px] font-semibold text-poe-gold">{build.tier}</span>
      </div>
      <p className="text-sm text-poe-text mb-3">{build.playstyle}</p>
      <div className="grid gap-3 sm:grid-cols-2 mb-2">
       <div>
        <div className="text-xs font-semibold text-poe-green mb-1">Ưu điểm:</div>
        <ul className="space-y-0.5 text-xs text-poe-text-dim">
         {build.pros.map((p, i) => <li key={i}>+ {p}</li>)}
        </ul>
       </div>
       <div>
        <div className="text-xs font-semibold text-poe-red-bright mb-1">Nhược điểm:</div>
        <ul className="space-y-0.5 text-xs text-poe-text-dim">
         {build.cons.map((c, i) => <li key={i}>− {c}</li>)}
        </ul>
       </div>
      </div>
      <div className="text-xs text-poe-text-dim">
       <B>Budget:</B> {build.budget}
      </div>
      <div className="text-xs text-poe-text-dim mt-1">
       <B>Key items:</B> {build.keyItems}
      </div>
     </Panel>
    ))}
   </div>

   <H3>Tiến Trình Build — Theo Mức Ngân Sách</H3>
   <div className="overflow-x-auto">
    <table className="poe-table">
     <thead>
      <tr><th>Investment</th><th>Gear level</th><th>Content clearable</th><th>DPS range</th></tr>
     </thead>
     <tbody>
      {[
       ["0-1 Divine", "Self-found + cheap uniques, 5-link", "Campaign + White/Yellow maps", "100K-500K"],
       ["1-5 Divine", "Capped resist, good life rolls, 6-link", "All maps, easy bosses (Shaper/Elder)", "500K-2M"],
       ["5-20 Divine", "Influenced rares, key uniques, clusters", "All pinnacle bosses", "2M-10M"],
       ["20-50 Divine", "Multi-influenced, crafted rares, awakened gems", "Uber bosses, juiced T16+", "10M-50M"],
       ["50-100+ Divine", "Mirror-tier pieces, perfect jewels, alt quality gems", "All content deathless, speed farming", "50M-200M+"],
      ].map(([invest, gear, content, dps]) => (
       <tr key={invest}>
        <td className="text-poe-gold font-semibold whitespace-nowrap">{invest}</td>
        <td className="text-xs">{gear}</td>
        <td className="text-xs">{content}</td>
        <td className="text-xs text-poe-text-dim">{dps}</td>
       </tr>
      ))}
     </tbody>
    </table>
   </div>

   <Tip>
    <B>Tìm build ở đâu?</B><br/>
    • <Gold>maxroll.gg/poe</Gold> — guide chi tiết nhất, có progression path cho mỗi budget tier<br/>
    • <Gold>poe.ninja/builds</Gold> — xem top players đang chơi gì, import PoB link<br/>
    • <Gold>poebuilds.cc</Gold> — tổng hợp từ YouTube creators<br/>
    • <Gold>Reddit r/PathOfExileBuilds</Gold> — community feedback, budget builds
   </Tip>
  </Section>
 );
}
