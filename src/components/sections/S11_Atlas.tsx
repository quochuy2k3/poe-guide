import { Section, H3, H4, P, B, Gold, Panel, Tip, Warning } from "@/components/ui";
import SectionImage from "@/components/SectionImage";

export default function S11_Atlas() {
  return (
    <Section id="atlas" num="XI" title="Atlas & Endgame Mapping Strategies">
      <SectionImage src="/images/atlas.jpg" alt="POE Atlas of Worlds" className="mb-6" />

      <H3>Atlas System</H3>
      <P>
        Sau campaign, bạn nhận <B>Map Device</B>. Maps là consumable items — đặt vào device mở portal
        đến randomized dungeons. <Gold>Atlas of Worlds</Gold> (phím G) hiển thị progress.
      </P>

      <H3>Map Tiers & Progression</H3>
      <div className="overflow-x-auto mb-4">
        <table className="poe-table">
          <thead>
            <tr><th>Tier</th><th>Monster Level</th><th>Gear check</th><th>Strategy</th></tr>
          </thead>
          <tbody>
            {[
              ["T1-5 (White)", "68-72", "4L, capped resist, 3500+ life", "Alch & go. Learn map layouts. Complete bonus objectives."],
              ["T6-10 (Yellow)", "73-77", "5L, decent gear, 4000+ life", "Alch maps, start using Chisels on T8+. Roll sextants."],
              ["T11-16 (Red)", "78-83", "6L, build complete, 5000+ life", "Chisel + Alch + Vaal. Use Scarabs. Atlas passive invested."],
              ["T17 (Uber)", "84+", "Endgame build, 6M+ DPS", "Ultra juiced. Only for strong builds. Insane rewards."],
            ].map(([tier, mlvl, check, strat]) => (
              <tr key={tier}>
                <td className="text-poe-gold font-semibold whitespace-nowrap">{tier}</td>
                <td className="text-xs">{mlvl}</td>
                <td className="text-xs">{check}</td>
                <td className="text-xs text-poe-text-dim">{strat}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <H3>Map Crafting — Juice levels</H3>
      <div className="overflow-x-auto mb-4">
        <table className="poe-table">
          <thead>
            <tr><th>Level</th><th>Hành động</th><th>Cost/map</th><th>Expected return</th></tr>
          </thead>
          <tbody>
            {[
              ["Basic", "Alch & go (Alchemy, chạy)", "~1c", "1-3c returns (base drops)"],
              ["Medium", "Chisel (20 quality) + Alch + Vaal", "~3c", "3-8c returns"],
              ["High", "Chisel + Alch + 4 Scarabs + Sextant", "~10-15c", "15-40c returns"],
              ["Mega juice", "Chisel + Alch + 4 Gilded Scarabs + Sextant + Fragments + map device craft", "~30-50c", "50-200c+ returns"],
            ].map(([level, action, cost, ret]) => (
              <tr key={level}>
                <td className="text-poe-gold font-semibold whitespace-nowrap">{level}</td>
                <td className="text-xs">{action}</td>
                <td className="text-xs text-poe-text-dim">{cost}</td>
                <td className="text-xs text-poe-green">{ret}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <H3>Atlas Passive Tree — Strategies phổ biến</H3>
      <div className="grid gap-3 sm:grid-cols-2 mb-4">
        {[
          {
            name: "Essence Rushing",
            desc: "Spec tất cả Essence nodes. Mỗi map 3-5 essence monsters, each drops 2-4 Essences. Dễ, consistent, tốt cho SSF.",
            income: "100-200c/hr",
            difficulty: "Dễ",
          },
          {
            name: "Expedition Farming",
            desc: "Spec Expedition + Logbook nodes. Chạy maps cho expedition encounters, save logbooks. Tujen reroll = huge currency.",
            income: "200-400c/hr",
            difficulty: "Trung bình",
          },
          {
            name: "Harbinger + Beyond",
            desc: "Stack Harbinger nodes cho currency shards. Beyond monsters = extra density + XP. Tốt cho leveling to 100.",
            income: "150-250c/hr",
            difficulty: "Trung bình",
          },
          {
            name: "Legion farming",
            desc: "Spec Legion nodes, chạy open maps (Dunes, Cemetery). Cần clearspeed build. Emblem farming = consistent.",
            income: "200-350c/hr",
            difficulty: "Cần fast build",
          },
          {
            name: "Divination Card target",
            desc: "Favourite specific maps cho div cards. Crimson Temple (The Apothecary = Mageblood belt), Tower (The Nurse = Headhunter).",
            income: "Variable — có thể jackpot",
            difficulty: "Cần MF gear cho hiệu quả tối đa",
          },
          {
            name: "Boss rushing",
            desc: "Spec boss-related nodes, farm Guardian maps → Shaper/Elder fragments → sell hoặc run boss.",
            income: "100-300c/hr",
            difficulty: "Cần boss-capable build",
          },
        ].map(({ name, desc, income, difficulty }) => (
          <Panel key={name}>
            <div className="flex items-center justify-between mb-1">
              <span className="font-heading text-sm font-bold text-poe-gold">{name}</span>
              <span className="text-[10px] text-poe-green">{income}</span>
            </div>
            <p className="text-xs text-poe-text leading-relaxed">{desc}</p>
            <p className="mt-1 text-[11px] text-poe-text-dim">Độ khó: {difficulty}</p>
          </Panel>
        ))}
      </div>

      <H3>Map Mods — Mods nguy hiểm phải biết</H3>
      <div className="overflow-x-auto mb-4">
        <table className="poe-table">
          <thead>
            <tr><th>Mod</th><th>Effect</th><th>Builds bị ảnh hưởng</th><th>Giải pháp</th></tr>
          </thead>
          <tbody>
            {[
              ["Reflect Physical", "Monsters reflect phys damage", "Melee, bow phys builds → instant death", "RE-ROLL. Hoặc dùng Sibyl's Lament ring"],
              ["Reflect Elemental", "Monsters reflect ele damage", "Spell caster, ele attack → instant death", "RE-ROLL. Elementalist immune reflect"],
              ["No Leech", "Cannot leech life/mana", "Leech-dependent builds (melee, CoC)", "Run if you have regen. Skip nếu không."],
              ["No Regen", "Cannot regenerate life/mana/ES", "RF builds (need regen), MoM builds", "Skip cho RF. Others có thể chạy được."],
              ["-max Resist", "Players have -12% max resist", "Mọi build — rất nguy hiểm", "Vẫn chạy được nhưng cẩn thận hơn nhiều"],
              ["% Extra Damage as Element", "Monsters gain extra ele damage", "Low resist builds, glass cannons", "Stack nếu < 30% extra. Skip nếu 40%+"],
              ["Temporal Chains", "Players are cursed with Temp Chains", "Mọi build — giảm speed nhiều", "Flask suffix \"of the Owl\" (curse immune)"],
            ].map(([mod, effect, affected, solution]) => (
              <tr key={mod}>
                <td className="text-poe-red-bright font-semibold text-xs whitespace-nowrap">{mod}</td>
                <td className="text-xs">{effect}</td>
                <td className="text-xs text-poe-text-dim">{affected}</td>
                <td className="text-xs">{solution}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Tip>
        <B>Favoured Map System:</B> Mỗi map completion mở 1 favoured slot. Chọn cùng 1 map ở nhiều slots
        = map đó drop rate tăng gấp 10-120 lần. Ví dụ: 12 favoured slots × Crimson Temple = farm The Apothecary
        (Mageblood card) hiệu quả nhất.
      </Tip>
    </Section>
  );
}
