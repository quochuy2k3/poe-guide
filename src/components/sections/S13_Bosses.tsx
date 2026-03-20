import { Section, H3, P, B, Gold, Panel, Tip, Warning } from "@/components/ui";
import SectionImage from "@/components/SectionImage";

export default function S13_Bosses() {
 return (
  <Section id="bosses" num="XIII" title="Endgame Bosses — Mechanics & Profit">
   <SectionImage src="/images/bosses.jpg" alt="POE Endgame Bosses" className="mb-6" />

   <H3>Boss Progression Path</H3>
   <P>
    Endgame bosses theo thứ tự khó dần. Mỗi boss có <B>mechanics riêng</B> phải học —
    hiểu mechanics quan trọng hơn raw DPS.
   </P>

   <div className="overflow-x-auto mb-4">
    <table className="poe-table">
     <thead>
      <tr><th>Boss</th><th>Access</th><th>DPS cần</th><th>Defense cần</th><th>Key Mechanic</th><th>Loot value</th></tr>
     </thead>
     <tbody>
      {[
       ["Shaper Guardians", "T16 Guardian maps", "1-2M", "5000 Life, capped res", "Mỗi Guardian có pattern riêng", "Fragment (1/4 Shaper key)"],
       ["The Shaper", "4 Guardian fragments", "2-3M", "5500+ Life, movement", "Beam dodge, ball phase, Zana bubble", "Shaper items, Dying Sun flask (~1-5 Div)"],
       ["Elder Guardians", "T16 Elder maps", "2-3M", "5000+ Life", "Tương tự Shaper Guardians", "Fragment (1/4 Elder key)"],
       ["Uber Elder", "Shaper + Elder cùng lúc", "3-5M", "6000+ Life, freeze immune", "2 boss attack cùng lúc, dodging hell", "Watcher's Eye (1-100+ Div!)"],
       ["Sirus (A8)", "Conqueror questline", "3-5M", "5500+ Life, corrupted blood immune", "Die Beam (1-shot), maze phase, storms", "Awakened gems (1-20 Div each)"],
       ["Maven", "Witness 10 boss fights", "3-5M", "5500+ Life, sustain", "Memory game, falling cascade, laser", "Elevated Sextants, Orb of Conflict"],
       ["Searing Exarch", "Altar influence quest", "2-4M", "5500+ Life", "Ball dodge, meteor, arena denial", "Voidstone, Eldritch currency"],
       ["Eater of Worlds", "Altar influence quest", "2-4M", "5500+ Life", "Tentacle slam, vortex, beam", "Voidstone, Eldritch currency"],
      ].map(([boss, access, dps, def, mech, loot]) => (
       <tr key={boss}>
        <td className="text-poe-gold font-semibold text-xs whitespace-nowrap">{boss}</td>
        <td className="text-xs">{access}</td>
        <td className="text-xs">{dps}</td>
        <td className="text-xs text-poe-text-dim">{def}</td>
        <td className="text-xs">{mech}</td>
        <td className="text-xs text-poe-green">{loot}</td>
       </tr>
      ))}
     </tbody>
    </table>
   </div>

   <H3>&quot;Uber&quot; Bosses — Pinnacle Content</H3>
   <P>
    Uber = phiên bản <B>cực khó</B> của boss đã có. Damage x2-3, HP x3-5, mechanics nhanh hơn.
    Chỉ dành cho builds 10M+ DPS với layered defense.
   </P>
   <div className="grid gap-3 sm:grid-cols-2 mb-4">
    {[
     { boss: "Uber Shaper", req: "10M+ DPS, 6500+ Life", reward: "Uber Shaper uniques, perfected bases", tip: "Bullet hell phase cực khó — cần high mobility" },
     { boss: "Uber Maven", req: "15M+ DPS, tanky build", reward: "Uber Unique jewels (Ashes of the Stars: 5-30 Div)", tip: "Memory game 6 runes thay vì 4, cascade faster" },
     { boss: "Uber Sirus", req: "10M+ DPS, CB immune", reward: "Thread of Hope variants, Awakened gems", tip: "Die Beam instant — PHẢI dodge. Corrupted Blood jewel bắt buộc." },
     { boss: "Uber Exarch/Eater", req: "10M+ DPS, 75/75 block or evasion", reward: "Exceptional Eldritch items", tip: "Arena tighter, balls faster, less reaction time" },
    ].map(({ boss, req, reward, tip }) => (
     <Panel key={boss}>
      <div className="font-heading text-sm font-bold text-poe-gold mb-1">{boss}</div>
      <div className="text-xs mb-1"><B>Requirement:</B> {req}</div>
      <div className="text-xs mb-1"><B>Reward:</B> <span className="text-poe-green">{reward}</span></div>
      <div className="text-xs text-poe-text-dim"><B>Tip:</B> {tip}</div>
     </Panel>
    ))}
   </div>

   <H3>Boss Fighting Tips</H3>
   <ol className="space-y-2 text-sm mb-4">
    {[
     { title: "Học mechanics trước khi fight", desc: "Xem YouTube guides cho mỗi boss. Hiểu pattern = sống sót dù DPS thấp." },
     { title: "Corrupted Blood immunity", desc: "Jewel implicit \"Corrupted Blood cannot be inflicted on you\" — 1-5c, bắt buộc cho Sirus." },
     { title: "Freeze/Chill immunity", desc: "Flask suffix hoặc pantheon. Bị freeze = chết 100%." },
     { title: "Bleed flask", desc: "Staunching flask suffix. Bleeding + movement = instant death." },
     { title: "Portals = extra lives", desc: "Mỗi boss fight có 6 portals. Đừng waste portal chết vô ích — retreat khi low HP." },
     { title: "Vaal Grace / Molten Shell", desc: "Vaal skill dùng trước DPS phase. Vaal Grace = 24% dodge. Vaal Molten Shell = huge shield." },
     { title: "Weapon swap flasks", desc: "Swap Quicksilver → Ruby/Sapphire Flask cho boss fight. Movement speed ít quan trọng hơn survival." },
    ].map(({ title, desc }, i) => (
     <li key={i} className="flex gap-3">
      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-poe-gold/15 font-heading text-[10px] font-bold text-poe-gold">{i + 1}</span>
      <span><B>{title}</B> — {desc}</span>
     </li>
    ))}
   </ol>

   <H3>Voidstones — Atlas Tier Boosting</H3>
   <P>
    4 Voidstones drop từ 4 pinnacle bosses. Mỗi Voidstone gắn vào Atlas tăng tier tất cả maps.
    Gom đủ 4 = tất cả maps trở thành T16 = maximum monster level = best loot.
   </P>
   <div className="overflow-x-auto">
    <table className="poe-table">
     <thead>
      <tr><th>Voidstone</th><th>Từ boss</th><th>Effect</th></tr>
     </thead>
     <tbody>
      <tr><td className="text-poe-gold font-semibold">#1</td><td>Searing Exarch</td><td>Tất cả maps +4 tier</td></tr>
      <tr><td className="text-poe-gold font-semibold">#2</td><td>Eater of Worlds</td><td>Tất cả maps +4 tier</td></tr>
      <tr><td className="text-poe-gold font-semibold">#3</td><td>Maven (The Feared)</td><td>Tất cả maps +4 tier</td></tr>
      <tr><td className="text-poe-gold font-semibold">#4</td><td>Uber Elder</td><td>Tất cả maps +4 tier</td></tr>
     </tbody>
    </table>
   </div>

   <Tip>
    <B>Watcher&apos;s Eye</B> từ Uber Elder là item có giá trị variance cao nhất game.
    2 mod tốt + đúng aura combo = <Gold>10-100+ Divine Orbs</Gold>. 3 mod (Uber only) = potentially mirror-tier.
    Đây là lý do farm Uber Elder rất profitable.
   </Tip>
  </Section>
 );
}
