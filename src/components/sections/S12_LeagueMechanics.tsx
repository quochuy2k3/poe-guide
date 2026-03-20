import { Section, H3, P, B, Gold, Panel, Tip, Warning } from "@/components/ui";
import SectionImage from "@/components/SectionImage";

export default function S12_LeagueMechanics() {
 return (
  <Section id="league" num="XII" title="League Mechanics — Profit & Strategy">
   <SectionImage src="/images/league-mechanics.jpg" alt="POE League Mechanics" className="mb-6" />

   <P>
    Mỗi League mechanic có <B>chiến lược farm riêng</B>. Hiểu mechanics = hiểu cách kiếm tiền.
    Dưới đây là ranking và strategy cho từng mechanic:
   </P>

   <H3>Profit Tier List</H3>
   <div className="space-y-4">
    {[
     {
      tier: "S",
      mechs: [
       {
        icon: "🏴‍☠️", name: "Expedition", profit: "200-500c/hr",
        desc: "Đặt thuốc nổ theo hướng chọn, lộ ra quái và chests. 4 NPC merchants:",
        detail: "• Tujen: Haggle cho currency, cards — MAIN profit source\n• Rog: Craft rare items — có thể tạo mirror-tier gear\n• Gwennen: Gamble unique items — chance cho Mageblood, HH\n• Dannig: Reroll artifacts, trade remnants\nLogbooks = endgame Expedition content, sell cho 1-5 Div mỗi logbook tốt.",
       },
       {
        icon: "🧪", name: "Harvest", profit: "150-400c/hr",
        desc: "Giết quái → nhận craft options. Crafts cực mạnh:",
        detail: "• Reforge keeping prefixes/suffixes — crafting staple\n• Add/remove specific mods — targeted crafting\n• Augment influence — add influenced mods\n• Enchant corrupted items — unique utility\nBán Harvest crafts qua TFT Discord (nếu trade league) hoặc tự dùng cho gear.",
       },
      ],
     },
     {
      tier: "A",
      mechs: [
       {
        icon: "💎", name: "Essence", profit: "100-200c/hr",
        desc: "Quái giam trong pha lê, giải phóng → drop Essences. Atlas spec tối đa.",
        detail: "• Corruption Essence (Remnant of Corruption) = chance upgrade tier\n• Shrieking/Deafening Essence = guaranteed T1-T2 mod\n• Bán bulk Essences qua trade site (10-20 mỗi loại)\n• Hoặc tự craft: Essence of Greed (life) + Essence of Spite (int) rất popular",
       },
       {
        icon: "⚔️", name: "Legion", profit: "150-300c/hr",
        desc: "2 đội quân đóng băng. Đập monolith, giết quái trong time limit.",
        detail: "• Cần clearspeed build — time limited encounter\n• Splinters → Emblems → Domain of Timeless Conflict (5-way)\n• 5-way carry service = 50-100c per run\n• General symbols drop = 3-10 Div each\n• Best maps: Dunes, Cemetery (open layouts)",
       },
       {
        icon: "⛏️", name: "Delve", profit: "100-300c/hr",
        desc: "Đào sâu xuống mỏ Azurite Mine vô tận. Càng sâu càng khó.",
        detail: "• Depth 200-400: profitable fossils (Pristine, Corroded, Hollow)\n• Depth 400+: rare currency, fractured items\n• Fossil farming specific biomes: Frozen Hollow (Frigid), Fungal Caverns (Aberrant)\n• Boss encounters = huge loot explosions\n• Không cần chạy map — alternative endgame path",
       },
      ],
     },
     {
      tier: "B",
      mechs: [
       {
        icon: "🟣", name: "Breach", profit: "80-150c/hr",
        desc: "Vết nứt tím, quái tuôn ra. Clear nhanh = breach mở rộng = nhiều loot.",
        detail: "• 100 splinters = 1 Breachstone (Chayula most valuable: 1-3 Div)\n• Pure Breachstones = XP farm tốt nhất game\n• Atlas Breach nodes tăng splinter drops\n• Combo với Breach Scarabs cho maximum density",
       },
       {
        icon: "💀", name: "Ritual", profit: "50-150c/hr",
        desc: "Giết quái trong vòng tròn, nhận tribute points mua item.",
        detail: "• Defer expensive items — carry forward tới map sau\n• Atlas spec: reroll Ritual cho better items\n• Có thể thấy unique items đắt (10+ Div) trong Ritual shop\n• Good passive income khi chạy map bình thường",
       },
       {
        icon: "🌫️", name: "Delirium", profit: "100-250c/hr",
        desc: "Sương mù lan ra, quái mạnh hơn nhiều. Simulacrum = 30 wave endgame.",
        detail: "• Delirium Orbs trên maps = permanent fog (rất juiced)\n• Simulacrum: wave 26-30 reward tốt nhất (Voices jewel = 5-50 Div)\n• Cần tanky build cho Delirium content\n• Combo Delirium + Beyond + Legion = maximum density (nhưng cần good PC)",
       },
       {
        icon: "🔐", name: "Heist", profit: "100-200c/hr",
        desc: "Thuê Rogues đi cướp. Contracts (nhỏ) và Blueprints (lớn).",
        detail: "• Blueprint reveals = main profit (alt quality gems, enchanted armaments)\n• Trinket from Grand Heist = modify currency drops (25% Chaos → Exalted)\n• CHẾT TRONG HEIST = MẤT HẾT LOOT (trừ items trong backpack)\n• Không phải chạy map — standalone content",
       },
      ],
     },
     {
      tier: "C",
      mechs: [
       {
        icon: "🏰", name: "Blight", profit: "50-100c/hr",
        desc: "Tower defense — xây tháp chặn quái. Blighted maps = standalone encounters.",
        detail: "• Anoint amulets: allocate 1 Notable passive (Oils)\n• Blighted Maps: 15-20 minutes, big loot explosion\n• Tower combo: Scout + Empowering + Meteor = clear most\n• Blight-Ravaged Maps = extreme difficulty, extreme rewards",
       },
       {
        icon: "🏛️", name: "Forbidden Sanctum", profit: "50-150c/hr",
        desc: "Roguelike dungeon, 4 tầng. Resolve hết = bị đuổi ra.",
        detail: "• Floor 4 rewards: Sanctified Relics (1-20+ Div)\n• Boons vs Afflictions — trade-offs mỗi room\n• Cần build handle nhiều small hits (dodge > big HP)\n• Unique rewards: Forbidden Jewels (build-defining, some worth 50+ Div)",
       },
      ],
     },
    ].map(({ tier, mechs }) => (
     <div key={tier}>
      <div className="mb-2 flex items-center gap-2">
       <span className={`font-heading text-sm font-bold px-2 py-0.5 rounded ${
        tier === "S" ? "bg-poe-gold/20 text-poe-gold" :
        tier === "A" ? "bg-blue-900/30 text-blue-400" :
        tier === "B" ? "bg-green-900/30 text-green-400" :
        "bg-stone-800/50 text-stone-400"
       }`}>
        Tier {tier}
       </span>
      </div>
      <div className="grid gap-3 sm:grid-cols-1 mb-4">
       {mechs.map(({ icon, name, profit, desc, detail }) => (
        <Panel key={name}>
         <div className="flex items-center justify-between mb-1">
          <span className="font-heading text-sm font-bold text-poe-gold">{icon} {name}</span>
          <span className="text-xs text-poe-green font-semibold">{profit}</span>
         </div>
         <p className="text-sm text-poe-text mb-2">{desc}</p>
         <pre className="text-xs text-poe-text-dim whitespace-pre-wrap leading-relaxed">{detail}</pre>
        </Panel>
       ))}
      </div>
     </div>
    ))}
   </div>
  </Section>
 );
}
