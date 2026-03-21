import Link from "next/link";
import type { Metadata } from "next";
import { Section, Panel, Tip, Warning, H3, H4, P, B, Gold } from "@/components/ui";

export const metadata: Metadata = {
  title: "Meta Builds 3.25–3.28 — Top Builds & Tier List",
  description:
    "Top builds meta Path of Exile 1 patch 3.25–3.28. League Starter, Boss Killer, Speed Farming, Ascendancy Tier List, 6-Link Gem Setups, Budget Scaling từ 1 Divine đến 100+ Divine.",
  keywords: ["PoE builds", "league starter", "boss killer", "meta builds", "ascendancy tier list", "gem links", "Path of Exile"],
  alternates: { canonical: "/meta-builds" },
};

function Unique({ children }: { children: React.ReactNode }) {
  return <span className="rarity-unique font-semibold">{children}</span>;
}

function Gem({ children }: { children: React.ReactNode }) {
  return <span className="text-poe-green font-semibold">{children}</span>;
}

/* ── Sidebar nav ─────────────────────────────── */

const tocSections = [
  { id: "overview", label: "Tổng Quan Meta", num: "I" },
  { id: "league-starters", label: "Top 10 League Starter", num: "II" },
  { id: "boss-killers", label: "Top 5 Boss Killer", num: "III" },
  { id: "speed-farming", label: "Top 5 Speed Farming", num: "IV" },
  { id: "archetype-compare", label: "So Sánh Archetype", num: "V" },
  { id: "unique-items", label: "Unique Items Quan Trọng", num: "VI" },
  { id: "gem-links", label: "6-Link Gem Setups", num: "VII" },
  { id: "ascendancy-tier", label: "Ascendancy Tier List", num: "VIII" },
  { id: "budget-scaling", label: "Budget vs Investment", num: "IX" },
];

function SideNav() {
  return (
    <nav className="fixed left-0 top-0 z-40 hidden h-screen w-56 flex-col border-r border-poe-border bg-poe-bg/95 backdrop-blur-sm lg:flex">
      <div className="border-b border-poe-border px-4 py-4">
        <Link href="/" className="font-heading text-sm font-bold tracking-widest text-poe-gold uppercase hover:text-poe-gold-bright transition-colors">
          PoE Guide
        </Link>
        <div className="mt-0.5 text-xs text-poe-text-dim">
          Meta Builds 3.25-3.28
        </div>
      </div>
      <div className="flex-1 overflow-y-auto py-2">
        {tocSections.map(({ id, label, num }) => (
          <a
            key={id}
            href={`#${id}`}
            className="flex w-full items-center gap-2 border-l-2 border-transparent px-4 py-2 text-left text-xs transition-all duration-200 text-poe-text-dim hover:text-poe-text hover:bg-poe-surface/50"
          >
            <span className="font-heading text-[10px] font-semibold tracking-wider text-poe-gold-dim w-6 shrink-0">
              {num}
            </span>
            <span className="leading-tight">{label}</span>
          </a>
        ))}
      </div>
      <div className="border-t border-poe-border px-4 py-3">
        <Link href="/" className="text-xs text-poe-text-dim hover:text-poe-gold transition-colors">
          &larr; Quay lại trang chính
        </Link>
      </div>
    </nav>
  );
}

/* ── MAIN PAGE ───────────────────────────────── */

export default function MetaBuildsPage() {
  return (
    <>
      <SideNav />

      <main className="lg:pl-56">
        {/* Hero */}
        <header className="relative flex min-h-[50vh] flex-col items-center justify-center overflow-hidden px-6 text-center bg-gradient-to-b from-poe-surface via-poe-bg to-poe-bg">
          <div className="relative z-10 max-w-3xl">
            <div className="mb-4 inline-block rounded border border-poe-gold/30 bg-poe-gold/10 px-3 py-1 font-heading text-xs font-semibold tracking-widest text-poe-gold uppercase">
              Cập Nhật Tháng 3/2026 &mdash; Patch 3.28 Mirage
            </div>
            <h1 className="section-title font-heading text-3xl font-black leading-tight text-poe-text-bright sm:text-4xl md:text-5xl">
              Path of Exile 1<br />Meta Builds Guide
            </h1>
            <p className="mt-2 font-heading text-base text-poe-gold sm:text-lg">
              Patch 3.25 &ndash; 3.28 &bull; Pro-Gamer Edition
            </p>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-poe-text-dim">
              Hướng dẫn chỉ tiết top builds mạnh nhất cho League Starter, Boss Killer, Speed Farming.
              Bao gồm Ascendancy Tier List, Gem Links, Unique Items và Budget Scaling từ 1 Divine đến 100+ Divine.
            </p>
          </div>
        </header>

        <div className="mx-auto max-w-4xl space-y-24 px-6 py-16 pt-8">

          {/* ═══════════════════════════════════════════
              I. TONG QUAN META
          ═══════════════════════════════════════════ */}
          <Section id="overview" num="I" title="Tổng Quan Meta 3.25 - 3.28">
            <H3>Dòng thời gian các League</H3>
            <div className="overflow-x-auto">
              <table className="poe-table">
                <thead>
                  <tr><th>Patch</th><th>League</th><th>Thời Gian</th><th>Thay Đổi Lớn</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-poe-gold font-semibold">3.25</td>
                    <td>Legacy of Phrecia</td>
                    <td>Q1 2025</td>
                    <td>19 Ascendancy mới (event), rework Vaal skills</td>
                  </tr>
                  <tr>
                    <td className="text-poe-gold font-semibold">3.26</td>
                    <td>Secrets of thể Atlas</td>
                    <td>Q3 2025</td>
                    <td>SRS buff, Shield Crush Jugg meta, Spectre scaling mới</td>
                  </tr>
                  <tr>
                    <td className="text-poe-gold font-semibold">3.27</td>
                    <td>Keepers of thể Flame</td>
                    <td>Q4 2025</td>
                    <td>Cyclone Gladiator, Siege Ballista Hierophant, Holy skills preview</td>
                  </tr>
                  <tr>
                    <td className="text-poe-gold font-semibold">3.28</td>
                    <td>Mirage</td>
                    <td>6/3/2026</td>
                    <td>Holy Hammers, Exceptional Support Gems thay Awakened Gems, Necro S-tier, Guardian buff lớn</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <H3>Xu hướng meta 3.28 Mirage</H3>
            <P>
              League <B>Mirage</B> có mật độ quái (monster density) cực cao, cơ chế league chồng chéo liên tục,
              và tiềm năng loot khổng lồ nhờ hệ thống Mirage juiced areas. Build meta hiện tại ưu tiên 3 yếu tố:
            </P>
            <div className="grid gap-3 sm:grid-cols-3 mb-6">
              {[
                { name: "Clear Speed", desc: "Xóa màn hình nhanh để xử lý nhiều cơ chế cùng lúc" },
                { name: "Survivability", desc: "Sống sót trong môi trường không thể đoán trước" },
                { name: "Flexibility", desc: "Scale được từ league start đến endgame với đầu tư hợp lý" },
              ].map(({ name, desc }) => (
                <Panel key={name}>
                  <div className="font-heading text-sm font-bold text-poe-gold">{name}</div>
                  <div className="mt-1 text-xs text-poe-text-dim">{desc}</div>
                </Panel>
              ))}
            </div>

            <Tip>
              <B>Thay đổi lớn nhất của 3.28:</B> Hệ thống <Gold>Exceptional Support Gems</Gold> thay thế hoàn toàn
              Awakened Support Gems cũ. Hơn 40 gem mới mang hiệu ứng gameplay thay đổi cách chơi, không chỉ là buff số đơn giản.
            </Tip>
          </Section>

          {/* ═══════════════════════════════════════════
              II. TOP 10 LEAGUE STARTERS
          ═══════════════════════════════════════════ */}
          <Section id="league-starters" num="II" title="Top 10 League Starter Builds">
            <P>
              League Starter là build có thể bắt đầu ngay từ đầu league mà không cần item đắt.
              Danh sách dưới đây dựa trên meta 3.28 Mirage, có tham khảo từ 3.25-3.27.
            </P>

            <div className="overflow-x-auto">
              <table className="poe-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Build</th>
                    <th>Class / Ascendancy</th>
                    <th>Main Skill</th>
                    <th>Tại Sao Mạnh</th>
                    <th>Budget</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      "1",
                      "GC Miner",
                      "Witch / Elementalist",
                      "Glacial Cascade of thể Fissure + Blastchain Mine",
                      "10M DPS với gear 1-mod. Scale lên 100M DPS endgame. Freeze mọi thứ. SSF-viable.",
                      "0-5 Div",
                    ],
                    [
                      "2",
                      "Poison SRS Necro",
                      "Witch / Necromancer",
                      "Summon Raging Spirit (Poison)",
                      "Minion tự động đánh. 100% Poison chance với Severed in Sleep. Necro S-tier 3.28. Clear + Boss tốt.",
                      "1-10 Div",
                    ],
                    [
                      "3",
                      "Poisonous Concoction PF",
                      "Ranger / Pathfinder",
                      "Poisonous Concoction of Bouncing",
                      "Không cần vũ khí (scale từ Life Flask). Chi phí cực thấp. Evasion + Spell Suppression + Block cao.",
                      "0-2 Div",
                    ],
                    [
                      "4",
                      "Righteous Fire Chieftain",
                      "Marauder / Chieftain",
                      "Righteous Fire + Fire Trap",
                      "Bật RF đi dạo, quái chết. Không cần micro. Hinekora explosion scale với density. Tank tốt.",
                      "1-5 Div",
                    ],
                    [
                      "5",
                      "Blight of Contagion Trickster",
                      "Shadow / Trickster",
                      "Blight of Contagion + Contagion",
                      "Clear nhanh nhất game. Spread damage tự động. Cane of Unravelling chỉ tốn vài Chaos. QoL cực cao.",
                      "0-3 Div",
                    ],
                    [
                      "6",
                      "Holy Hammers Inquisitor",
                      "Templar / Inquisitor",
                      "Holy Hammers",
                      "Skill mới 3.28, cascade damage khi consume Power Charge. AoE lớn. 20% more damage từ Assassin's Mark.",
                      "2-8 Div",
                    ],
                    [
                      "7",
                      "Lightning Arrow Deadeye",
                      "Ranger / Deadeye",
                      "Lightning Arrow / Elemental Hit",
                      "Screen-wide clear. Far Shot + Endless Munition. Không thay đổi gì ở 3.28 nên rất ổn định.",
                      "5-15 Div",
                    ],
                    [
                      "8",
                      "Spectre Summoner Necro",
                      "Witch / Necromancer",
                      "Raise Spectre (Forged Frostbearer)",
                      "Level 85 Spectres + level 30 gem = scale kinh khủng. Frostbearer mortar overlap DPS cao. Guardian buff gián tiếp.",
                      "3-10 Div",
                    ],
                    [
                      "9",
                      "Exsanguinate/Reap Trickster",
                      "Shadow / Trickster",
                      "Exsanguinate + Reap",
                      "Physical DoT mạnh. Trickster sustain tốt. Farm Blight strategy đầu league. Smooth leveling.",
                      "1-5 Div",
                    ],
                    [
                      "10",
                      "Bleed Slam Slayer",
                      "Duelist / Slayer",
                      "Earthshatter / Lacerate",
                      "Overleech + life sustain cực mạnh. Bleed damage scale tốt. League start vững chắc. HC viable.",
                      "2-8 Div",
                    ],
                  ].map(([rank, name, cls, skill, why, budget]) => (
                    <tr key={rank}>
                      <td className="text-poe-gold font-bold text-center">{rank}</td>
                      <td className="text-poe-text-bright font-semibold whitespace-nowrap">{name}</td>
                      <td className="text-poe-text-dim text-xs">{cls}</td>
                      <td className="text-poe-green text-xs">{skill}</td>
                      <td className="text-xs">{why}</td>
                      <td className="text-poe-gold-bright font-semibold whitespace-nowrap text-center">{budget}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Tip>
              <B>Gợi ý cho người mới:</B> Chọn <Gold>Poisonous Concoction Pathfinder</Gold> hoặc <Gold>Righteous Fire Chieftain</Gold>
              nếu bạn mới bắt đầu. Hai build này có độ phức tạp thấp nhất và hoạt động tốt với 0 Divine đầu tư.
            </Tip>

            <Warning>
              <B>Lưu ý 3.28:</B> Elementalist bị nerf mạnh ở patch này (golem-related nerfs). GC Miner Elementalist vẫn mạnh
              nhưng cần chọn các node không liên quan golem. Chieftain bị hạ từ S-tier xuống C-tier về explosion damage.
            </Warning>
          </Section>

          {/* ═══════════════════════════════════════════
              III. TOP 5 BOSS KILLERS
          ═══════════════════════════════════════════ */}
          <Section id="boss-killers" num="III" title="Top 5 Boss Killer Builds (Uber Bosses)">
            <P>
              Uber bosses bao gồm: <B>Uber Maven</B>, <B>Uber Elder</B>, <B>Uber Searing Exarch</B>,
              <B> Uber Eater of Worlds</B>, <B>Uber Shaper</B>, <B>Uber Atziri</B>. Đây là những boss khó nhất game,
              đòi hỏi build có DPS cao và khả năng sống sót tốt.
            </P>

            <div className="space-y-6">
              {/* Boss Killer 1 */}
              <Panel>
                <div className="flex items-center justify-between mb-2">
                  <div className="font-heading text-base font-bold text-poe-gold">#1 &mdash; Viper Strike of thể Mamba (Nightblade Mamba)</div>
                  <span className="text-xs text-poe-gold-bright bg-poe-gold/10 px-2 py-0.5 rounded">S-Tier</span>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 text-sm">
                  <div>
                    <div className="text-poe-text-dim text-xs mb-1">CLASS / ASCENDANCY</div>
                    <div className="text-poe-text-bright">Shadow / Assassin hoặc Ranger / Pathfinder</div>
                    <div className="text-poe-text-dim text-xs mb-1 mt-3">MAIN SKILL</div>
                    <div className="text-poe-green">Viper Strike of thể Mamba + Bino&apos;s Kitchen Knife</div>
                    <div className="text-poe-text-dim text-xs mb-1 mt-3">ESTIMATED DPS</div>
                    <div className="text-poe-gold-bright font-bold">80-150M+ Poison DPS (stacking)</div>
                  </div>
                  <div>
                    <div className="text-poe-text-dim text-xs mb-1">CHI PHÍ</div>
                    <div className="text-poe-text-bright font-semibold">20-50 Divine Orbs</div>
                    <div className="text-poe-text-dim text-xs mb-1 mt-3">ĐIỂM MẠNH</div>
                    <div className="text-xs">Poison stack không giới hạn. Bino&apos;s + The Hateful Accuser = spread poison.
                    Low Tolerance keystone tăng damage lớn. Clear off-screen. Chạy được mọi map mod.</div>
                    <div className="text-poe-text-dim text-xs mb-1 mt-3">KEY ITEMS</div>
                    <div className="text-xs"><Unique>Bino&apos;s Kitchen Knife</Unique> (1-3 Div), <Unique>The Hateful Accuser</Unique> (5-15 Div)</div>
                  </div>
                </div>
              </Panel>

              {/* Boss Killer 2 */}
              <Panel>
                <div className="flex items-center justify-between mb-2">
                  <div className="font-heading text-base font-bold text-poe-gold">#2 &mdash; Glacial Cascade Miner Elementalist</div>
                  <span className="text-xs text-poe-gold-bright bg-poe-gold/10 px-2 py-0.5 rounded">S-Tier</span>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 text-sm">
                  <div>
                    <div className="text-poe-text-dim text-xs mb-1">CLASS / ASCENDANCY</div>
                    <div className="text-poe-text-bright">Witch / Elementalist</div>
                    <div className="text-poe-text-dim text-xs mb-1 mt-3">MAIN SKILL</div>
                    <div className="text-poe-green">Glacial Cascade of thể Fissure + Blastchain Mine Support</div>
                    <div className="text-poe-text-dim text-xs mb-1 mt-3">ESTIMATED DPS</div>
                    <div className="text-poe-gold-bright font-bold">10M (league start) &rarr; 100M+ (endgame)</div>
                  </div>
                  <div>
                    <div className="text-poe-text-dim text-xs mb-1">CHI PHÍ</div>
                    <div className="text-poe-text-bright font-semibold">0 Div (start) &rarr; 30-80 Div (endgame)</div>
                    <div className="text-poe-text-dim text-xs mb-1 mt-3">ĐIỂM MẠNH</div>
                    <div className="text-xs">Overlapping damage cực mạnh. Freeze boss. Auto-targeting. SSF viable.
                    Wand +1 Spell Gems + Crit Multi là đủ damage.</div>
                    <div className="text-poe-text-dim text-xs mb-1 mt-3">KEY ITEMS</div>
                    <div className="text-xs">Wand +1 Spell Gems (craft), <Unique>Gloom Corona</Unique> helmet, Shield Spell Damage</div>
                  </div>
                </div>
              </Panel>

              {/* Boss Killer 3 */}
              <Panel>
                <div className="flex items-center justify-between mb-2">
                  <div className="font-heading text-base font-bold text-poe-gold">#3 &mdash; Poison Animate Weapon Necromancer</div>
                  <span className="text-xs text-poe-blue bg-poe-blue/10 px-2 py-0.5 rounded">A-Tier</span>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 text-sm">
                  <div>
                    <div className="text-poe-text-dim text-xs mb-1">CLASS / ASCENDANCY</div>
                    <div className="text-poe-text-bright">Witch / Necromancer</div>
                    <div className="text-poe-text-dim text-xs mb-1 mt-3">MAIN SKILL</div>
                    <div className="text-poe-green">Animate Weapon (Poison) + Minion supports</div>
                    <div className="text-poe-text-dim text-xs mb-1 mt-3">ESTIMATED DPS</div>
                    <div className="text-poe-gold-bright font-bold">50-120M Poison DPS (full army)</div>
                  </div>
                  <div>
                    <div className="text-poe-text-dim text-xs mb-1">CHI PHÍ</div>
                    <div className="text-poe-text-bright font-semibold">10-30 Divine Orbs</div>
                    <div className="text-poe-text-dim text-xs mb-1 mt-3">ĐIỂM MẠNH</div>
                    <div className="text-xs">Minion soak damage cho bạn. Poison stack từ nhiều spectral blades.
                    Necro S-tier 3.28 = buff gián tiếp lớn. Budget-friendly boss killer.</div>
                    <div className="text-poe-text-dim text-xs mb-1 mt-3">KEY ITEMS</div>
                    <div className="text-xs"><Unique>United in Dream</Unique> (5-10 Div), <Unique>Severed in Sleep</Unique> (1 Div)</div>
                  </div>
                </div>
              </Panel>

              {/* Boss Killer 4 */}
              <Panel>
                <div className="flex items-center justify-between mb-2">
                  <div className="font-heading text-base font-bold text-poe-gold">#4 &mdash; Spectre Summoner Necromancer</div>
                  <span className="text-xs text-poe-blue bg-poe-blue/10 px-2 py-0.5 rounded">A-Tier</span>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 text-sm">
                  <div>
                    <div className="text-poe-text-dim text-xs mb-1">CLASS / ASCENDANCY</div>
                    <div className="text-poe-text-bright">Witch / Necromancer</div>
                    <div className="text-poe-text-dim text-xs mb-1 mt-3">MAIN SKILL</div>
                    <div className="text-poe-green">Raise Spectre (Forged Frostbearer) + Greater Volley</div>
                    <div className="text-poe-text-dim text-xs mb-1 mt-3">ESTIMATED DPS</div>
                    <div className="text-poe-gold-bright font-bold">30-80M DPS (mortar overlap)</div>
                  </div>
                  <div>
                    <div className="text-poe-text-dim text-xs mb-1">CHI PHÍ</div>
                    <div className="text-poe-text-bright font-semibold">15-50 Divine Orbs</div>
                    <div className="text-poe-text-dim text-xs mb-1 mt-3">ĐIỂM MẠNH</div>
                    <div className="text-xs">Frostbearer cold mortar overlap = DPS single target cực cao.
                    Lv85 Spectres ở 3.28 với lv30 gem scaling. Tanky nhờ block + minion aggro.</div>
                    <div className="text-poe-text-dim text-xs mb-1 mt-3">KEY ITEMS</div>
                    <div className="text-xs">+2 Minion Gems helmet, <Unique>Ashes of thể Stars</Unique> (8-15 Div), Ghastly Abyss Jewels</div>
                  </div>
                </div>
              </Panel>

              {/* Boss Killer 5 */}
              <Panel>
                <div className="flex items-center justify-between mb-2">
                  <div className="font-heading text-base font-bold text-poe-gold">#5 &mdash; Holy Absolution Guardian</div>
                  <span className="text-xs text-poe-blue bg-poe-blue/10 px-2 py-0.5 rounded">A-Tier</span>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 text-sm">
                  <div>
                    <div className="text-poe-text-dim text-xs mb-1">CLASS / ASCENDANCY</div>
                    <div className="text-poe-text-bright">Templar / Guardian</div>
                    <div className="text-poe-text-dim text-xs mb-1 mt-3">MAIN SKILL</div>
                    <div className="text-poe-green">Absolution + Dominating Blow</div>
                    <div className="text-poe-text-dim text-xs mb-1 mt-3">ESTIMATED DPS</div>
                    <div className="text-poe-gold-bright font-bold">40-100M DPS (full sentinels)</div>
                  </div>
                  <div>
                    <div className="text-poe-text-dim text-xs mb-1">CHI PHÍ</div>
                    <div className="text-poe-text-bright font-semibold">10-40 Divine Orbs</div>
                    <div className="text-poe-text-dim text-xs mb-1 mt-3">ĐIỂM MẠNH</div>
                    <div className="text-xs">Guardian nhận 4 buff lớn ở 3.28. Sentinel of Radiance là permanent minion (+36% MS).
                    Hybrid minion+self damage. Rất tanky với Aegis Aurora.</div>
                    <div className="text-poe-text-dim text-xs mb-1 mt-3">KEY ITEMS</div>
                    <div className="text-xs"><Unique>Aegis Aurora</Unique> (10-20 Div), +2 Amulet, <Unique>Skin of thể Lords</Unique></div>
                  </div>
                </div>
              </Panel>
            </div>
          </Section>

          {/* ═══════════════════════════════════════════
              IV. TOP 5 SPEED FARMING
          ═══════════════════════════════════════════ */}
          <Section id="speed-farming" num="IV" title="Top 5 Speed Farming Builds">
            <P>
              Build speed farming ưu tiên clear speed, movement speed, và khả năng farm currency hiệu quả
              qua các cơ chế như Breach, Legion, Delirium, Beyond.
            </P>

            <div className="overflow-x-auto">
              <table className="poe-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Build</th>
                    <th>Class</th>
                    <th>Main Skill</th>
                    <th>Điểm Mạnh</th>
                    <th>Đầu Tư Cần</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      "1",
                      "Blight of Contagion Trickster",
                      "Shadow / Trickster",
                      "Blight of Contagion + Contagion",
                      "Clear nhanh nhất game. Spread tự động giữa các pack. 6 stacks ngay lập tức khi spread. QoL cao nhất.",
                      "3-15 Div",
                    ],
                    [
                      "2",
                      "Lightning Arrow Deadeye",
                      "Ranger / Deadeye",
                      "Lightning Arrow + Artillery Ballista",
                      "Screen-wide clear. Far Shot + Gathering Winds = tốc độ kinh khủng. Dual 6-link (bow+quiver).",
                      "15-50 Div",
                    ],
                    [
                      "3",
                      "Tornado Shot Deadeye",
                      "Ranger / Deadeye",
                      "Tornado Shot + Nimis",
                      "Coverage lớn nhất game khi có Nimis. Projectile return = double hit. Cần +2 bow tối thiểu.",
                      "50-150+ Div",
                    ],
                    [
                      "4",
                      "Elemental Hit Deadeye",
                      "Ranger / Deadeye",
                      "Elemental Hit of thể Spectrum",
                      "Flat damage khổng lồ từ skill. Tốt nhất ở low budget vì không cần bow đắt. Trinity scaling.",
                      "5-30 Div",
                    ],
                    [
                      "5",
                      "Kinetic Blast Wander",
                      "Ranger / Deadeye hoặc Witch / Elementalist",
                      "Kinetic Blast + Power Siphon",
                      "Explosion on hit. Returning Projectiles = double damage. Wand range + speed.",
                      "30-100+ Div",
                    ],
                  ].map(([rank, name, cls, skill, strength, cost]) => (
                    <tr key={rank}>
                      <td className="text-poe-gold font-bold text-center">{rank}</td>
                      <td className="text-poe-text-bright font-semibold whitespace-nowrap">{name}</td>
                      <td className="text-poe-text-dim text-xs">{cls}</td>
                      <td className="text-poe-green text-xs">{skill}</td>
                      <td className="text-xs">{strength}</td>
                      <td className="text-poe-gold-bright font-semibold whitespace-nowrap text-center">{cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Tip>
              <B>Farm strategy 3.28:</B> Kết hợp <Gold>Breach farming</Gold> với Atlas passives có thể kiếm 20+ Divine/giờ.
              Builds như Tornado Shot + Nimis + Headhunter là combo farm nhanh nhất hiện tại.
            </Tip>
          </Section>

          {/* ═══════════════════════════════════════════
              V. SO SANH ARCHETYPE
          ═══════════════════════════════════════════ */}
          <Section id="archetype-compare" num="V" title="So Sánh Build Archetypes">
            <H3>Bảng so sánh tổng quát</H3>
            <div className="overflow-x-auto">
              <table className="poe-table">
                <thead>
                  <tr>
                    <th>Archetype</th>
                    <th>Rẻ Nhất Để Start</th>
                    <th>Scale Tốt Nhất</th>
                    <th>Tank Nhất</th>
                    <th>Clear Nhanh Nhất</th>
                    <th>Boss Tốt Nhất</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Melee (Slam/Strike)", "Trung bình", "Cao", "Rất Cao", "Trung bình", "Cao"],
                    ["Bow (LA/TS/EleHit)", "Trung bình", "Rất Cao", "Thấp", "Rất Cao", "Trung bình"],
                    ["Spell (GC Mine/Arc)", "Thấp", "Rất Cao", "Trung bình", "Cao", "Rất Cao"],
                    ["Minion (SRS/Spectre)", "Thấp", "Cao", "Cao", "Trung bình", "Cao"],
                    ["DoT (RF/Blight/ED)", "Rất Thấp", "Trung bình", "Cao", "Cao", "Trung bình"],
                    ["Poison (VS/PC)", "Rất Thấp", "Cao", "Trung bình", "Cao", "Rất Cao"],
                    ["CoC (Ice Nova/etc)", "Rất Cao", "Cực Cao", "Trung bình", "Cực Cao", "Cao"],
                  ].map(([arch, cheap, scale, tank, clear, boss]) => (
                    <tr key={arch}>
                      <td className="text-poe-gold font-semibold whitespace-nowrap">{arch}</td>
                      <td className="text-center text-xs">{cheap}</td>
                      <td className="text-center text-xs">{scale}</td>
                      <td className="text-center text-xs">{tank}</td>
                      <td className="text-center text-xs">{clear}</td>
                      <td className="text-center text-xs">{boss}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <H3>Chi tiết từng archetype</H3>

            <H4>Rẻ nhất để bắt đầu (Cheapest to Start)</H4>
            <P>
              <Gold>Poison builds</Gold> (Poisonous Concoction, Viper Strike) và <Gold>DoT builds</Gold> (Righteous Fire, Blight of Contagion)
              là rẻ nhất. Poisonous Concoction không cần vũ khí, scale từ Life Flask. Blight of Contagion chỉ cần
              <Unique> Cane of Unravelling</Unique> (vài Chaos Orbs) để clear đến T16. RF Chieftain chỉ cần Life Regen gear cơ bản.
            </P>

            <H4>Scale tốt nhất với đầu tư (Best Scaling)</H4>
            <P>
              <Gold>CoC builds</Gold> và <Gold>Bow builds</Gold> scale tốt nhất. Tornado Shot Deadeye với Nimis + Mageblood
              có thể đạt tốc độ clear không thể tưởng tượng. CoC Ice Nova với Headhunter + mirror-tier gear
              là build mạnh nhất game nhưng đòi hỏi 200+ Divine đầu tư.
            </P>

            <H4>Tank nhất (Tankiest)</H4>
            <P>
              <Gold>Melee builds</Gold> dẫn đầu về tankiness. <B>Holy Sweep Juggernaut</B> stack 9 Endurance Charges
              (~45% flat damage reduction). <B>Slayer Flicker Strike</B> có overleech vô hạn.
              <B> RF Juggernaut</B> kết hợp armor + endurance charges + regen cực cao. Low Life Ignite Slamentalist
              là một trong những build tank nhất 3.28 với Divine Shield mechanic.
            </P>

            <H4>Clear nhanh nhất (Fastest Clear)</H4>
            <P>
              <Gold>Bow builds</Gold> và <Gold>Blight Trickster</Gold>. Blight of Contagion spread tự động = không cần target.
              Lightning Arrow/Tornado Shot bao phủ cả màn hình. Kinetic Blast Wander có explosion chain.
            </P>
          </Section>

          {/* ═══════════════════════════════════════════
              VI. UNIQUE ITEMS QUAN TRONG
          ═══════════════════════════════════════════ */}
          <Section id="unique-items" num="VI" title="Unique Items Quan Trọng Cho Mọi Build">
            <P>
              Giá unique items thay đổi theo thời gian trong league. Giá dưới đây là <B>ước tính trung bình</B> cho
              Mirage League 3.28, tham khảo từ poe.ninja. Kiểm tra giá thực tế tại{" "}
              <Gold>poe.ninja/poe1/economy/mirage</Gold>.
            </P>

            <H3>Tier 0 &mdash; Chase Uniques (Siêu hiếm)</H3>
            <div className="overflow-x-auto">
              <table className="poe-table">
                <thead>
                  <tr><th>Item</th><th>Loại</th><th>Giá (Div)</th><th>Dùng Cho Build</th><th>Hiệu Ứng Chính</th></tr>
                </thead>
                <tbody>
                  {[
                    ["Mageblood", "Heavy Belt", "100-200", "Mọi build", "4 Magic Flask luôn active. Best-in-slot cho mọi build."],
                    ["Headhunter", "Leather Belt", "60-120", "Speed farming", "Ăn cắp mod rare monster. Clear speed tăng gấp 10 lần."],
                    ["Mirror of Kalandra", "Currency", "300-700", "Mirror-tier crafting", "Copy item. Item đắt nhất game."],
                  ].map(([name, type, price, builds, effect]) => (
                    <tr key={name}>
                      <td className="rarity-unique font-semibold whitespace-nowrap">{name}</td>
                      <td className="text-poe-text-dim text-xs">{type}</td>
                      <td className="text-poe-gold-bright font-bold text-center">{price}</td>
                      <td className="text-xs">{builds}</td>
                      <td className="text-xs">{effect}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <H3>Tier 1 &mdash; Build-Defining Uniques</H3>
            <div className="overflow-x-auto">
              <table className="poe-table">
                <thead>
                  <tr><th>Item</th><th>Loại</th><th>Giá (Div)</th><th>Dùng Cho Build</th><th>Hiệu Ứng Chính</th></tr>
                </thead>
                <tbody>
                  {[
                    ["Nimis", "Topaz Ring", "15-40", "Tornado Shot, Kinetic Blast", "Projectiles Return. Double hit = double DPS."],
                    ["Ashes of the Stars", "Onyx Amulet", "8-20", "Minion, Aura, mọi build cần gem quality", "+30% quality cho mọi skill gem. +1 gem level. Reservation efficiency."],
                    ["Aegis Aurora", "Champion Kite Shield", "10-25", "Guardian, Necro, tank builds", "Recover ES on block. Nền tảng cho mọi block-based build."],
                    ["Oriath's End", "Silver Flask", "5-15", "Speed clear builds", "Monsters explode for 10% life as damage. Chain explosions."],
                    ["Inpulsa's Broken Heart", "Sadist Garb", "3-8", "Lightning builds, LA Deadeye", "Shocked enemies explode. Clear speed tăng rất lớn."],
                    ["Cane of Unravelling", "Ezomyte Staff", "0.1-0.5", "Blight/ED Trickster", "+2 Chaos gems, Chaos DoT Multi. Budget starter weapon."],
                    ["Severed in Sleep", "Cutlass", "0.5-2", "Poison SRS, Animate Weapon", "60% chance Poison cho minions. Core cho poison minion builds."],
                    ["Bino's Kitchen Knife", "Slaughter Knife", "1-3", "Viper Strike", "Poison spread, regen on poison kill. Core cho VS builds."],
                    ["The Embalmer", "Carnal Mitts", "0.5-2", "Poison builds", "+2 AoE gems, Vile Toxins built-in. Budget poison option."],
                    ["Skin of the Lords", "Simple Robe", "+1 gem level variant: 5-20", "Mọi build cần +1 gems", "+1 All gems, 100% Global Defence. Keystone ngẫu nhiên."],
                  ].map(([name, type, price, builds, effect]) => (
                    <tr key={name}>
                      <td className="rarity-unique font-semibold whitespace-nowrap">{name}</td>
                      <td className="text-poe-text-dim text-xs">{type}</td>
                      <td className="text-poe-gold-bright font-bold text-center">{price}</td>
                      <td className="text-xs">{builds}</td>
                      <td className="text-xs">{effect}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <H3>Tier 2 &mdash; Build-Enhancing Uniques (Giá phải chăng)</H3>
            <div className="overflow-x-auto">
              <table className="poe-table">
                <thead>
                  <tr><th>Item</th><th>Giá (Div)</th><th>Dùng Cho</th><th>Hiệu Ứng</th></tr>
                </thead>
                <tbody>
                  {[
                    ["Goldrim (Helmet)", "0.01", "Leveling mọi build", "+30-40 All Res. Best leveling helmet."],
                    ["Tabula Rasa", "0.1-0.3", "Mọi build (early)", "6-link trắng. Bỏ bất kỳ 6 gems nào vào."],
                    ["Loreweave", "1-3", "Builds cần max res", "Set max res = 78%. Flat damage + crit."],
                    ["Prism Guardian", "0.5-2", "Aura stackers, LL builds", "Socketed Auras reserve Life. Blood Magic for auras."],
                    ["Bone Helmet (+2/+3 minion)", "1-5 (crafted)", "Minion builds", "+2/+3 Minion Gem Level. Cuc ky quan trọng cho Spectre/SRS."],
                    ["Dying Sun", "3-8", "Projectile builds", "+2 Projectiles. AoE tang. Flask uptime với Pathfinder."],
                    ["Bottled Faith", "10-25", "Moi build crit", "Consecrated Ground. 2% base crit. Increased damage taken."],
                  ].map(([name, price, builds, effect]) => (
                    <tr key={name}>
                      <td className="rarity-unique font-semibold whitespace-nowrap">{name}</td>
                      <td className="text-poe-gold-bright font-bold text-center">{price}</td>
                      <td className="text-xs">{builds}</td>
                      <td className="text-xs">{effect}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Warning>
              <B>Moi mua trong 3.28:</B> <Unique>Screams of thể Desiccated</Unique> là unique mỗi được goi là &quot;doi thu của Mageblood.&quot;
              Drop từ noi dùng Mirage League. Gia hien tai rất cao va chua on dinh.
            </Warning>
          </Section>

          {/* ═══════════════════════════════════════════
              VII. 6-LINK GEM SETUPS
          ═══════════════════════════════════════════ */}
          <Section id="gem-links" num="VII" title="6-Link Gem Setups Cho Các Skill Pho Bien">
            <P>
              Duoi đây là 6-link setup cho các main skill phổ biến nhất o 3.28 Mirage.
              <B> Lưu ý:</B> 3.28 thay thể Awakened Gems bang <Gold>Exceptional Support Gems</Gold> moi,
              mang hiệu ung gameplay thay vì chỉ tăng so. Returning Projectiles Support là gem mỗi mạnh nhất cho projectile builds.
            </P>

            <H3>1. Righteous Fire (Chieftain / Juggernaut)</H3>
            <Panel>
              <div className="text-xs space-y-2">
                <div className="text-poe-text-dim mb-2">MAIN 6-LINK (Body Armour):</div>
                <div className="flex flex-wrap gap-1">
                  {["Righteous Fire", "Elemental Focus", "Burning Damage", "Concentrated Effect", "Increased AoE (swap)", "Swift Affliction"].map(g => (
                    <span key={g} className="bg-poe-surface-2 border border-poe-border rounded px-2 py-1 text-poe-green text-xs">{g}</span>
                  ))}
                </div>
                <div className="text-poe-text-dim mt-3 mb-2">SINGLE TARGET (Elder Helmet pseudo-link):</div>
                <div className="flex flex-wrap gap-1">
                  {["Fire Trap", "Trap and Mine Damage", "Burning Damage (helmet mod)", "Conc Effect (helmet mod)"].map(g => (
                    <span key={g} className="bg-poe-surface-2 border border-poe-border rounded px-2 py-1 text-poe-green text-xs">{g}</span>
                  ))}
                </div>
                <div className="text-poe-text-dim mt-3 mb-2">MOVEMENT + UTILITY:</div>
                <div className="flex flex-wrap gap-1">
                  {["Shield Charge", "Faster Attacks", "Determination", "Purity of Fire", "Vitality", "Defiance Banner"].map(g => (
                    <span key={g} className="bg-poe-surface-2 border border-poe-border rounded px-2 py-1 text-poe-blue text-xs">{g}</span>
                  ))}
                </div>
              </div>
            </Panel>

            <H3>2. Lightning Arrow (Deadeye)</H3>
            <Panel>
              <div className="text-xs space-y-2">
                <div className="text-poe-text-dim mb-2">MAIN 6-LINK (Bow - Clear):</div>
                <div className="flex flex-wrap gap-1">
                  {["Lightning Arrow", "Inspiration", "Added Lightning Damage", "Elemental Damage with Attacks", "Trinity", "Returning Projectiles (moi 3.28)"].map(g => (
                    <span key={g} className="bg-poe-surface-2 border border-poe-border rounded px-2 py-1 text-poe-green text-xs">{g}</span>
                  ))}
                </div>
                <div className="text-poe-text-dim mt-3 mb-2">SINGLE TARGET 6-LINK (Body Armour):</div>
                <div className="flex flex-wrap gap-1">
                  {["Artillery Ballista", "Elemental Damage with Attacks", "Trinity", "Focused Ballista", "Increased Critical Damage", "Added Lightning Damage"].map(g => (
                    <span key={g} className="bg-poe-surface-2 border border-poe-border rounded px-2 py-1 text-poe-green text-xs">{g}</span>
                  ))}
                </div>
                <div className="text-poe-text-dim mt-3 mb-2">AURAS + UTILITY:</div>
                <div className="flex flex-wrap gap-1">
                  {["Wrath", "Grace", "Mark On Hit + Assassin's Mark", "Sniper's Mark (boss swap)", "Blood Rage"].map(g => (
                    <span key={g} className="bg-poe-surface-2 border border-poe-border rounded px-2 py-1 text-poe-blue text-xs">{g}</span>
                  ))}
                </div>
              </div>
            </Panel>

            <H3>3. Glacial Cascade of thể Fissure (Miner Elementalist)</H3>
            <Panel>
              <div className="text-xs space-y-2">
                <div className="text-poe-text-dim mb-2">MAIN 6-LINK:</div>
                <div className="flex flex-wrap gap-1">
                  {["Glacial Cascade of thể Fissure", "Blastchain Mine", "Trap and Mine Damage", "Hypothermia", "Concentrated Effect", "Increased Critical Damage"].map(g => (
                    <span key={g} className="bg-poe-surface-2 border border-poe-border rounded px-2 py-1 text-poe-green text-xs">{g}</span>
                  ))}
                </div>
                <div className="text-poe-text-dim mt-3 mb-2">AURAS + DEFENSE:</div>
                <div className="flex flex-wrap gap-1">
                  {["Hatred", "Zealotry", "Determination", "Defiance Banner", "Skitterbots", "Bonechill (link với Skitterbots)"].map(g => (
                    <span key={g} className="bg-poe-surface-2 border border-poe-border rounded px-2 py-1 text-poe-blue text-xs">{g}</span>
                  ))}
                </div>
              </div>
            </Panel>

            <H3>4. Poisonous Concoction of Bouncing (Pathfinder)</H3>
            <Panel>
              <div className="text-xs space-y-2">
                <div className="text-poe-text-dim mb-2">MAIN 6-LINK:</div>
                <div className="flex flex-wrap gap-1">
                  {["Poisonous Concoction of Bouncing", "Greater Volley", "Void Manipulation", "Deadly Ailments", "Unbound Ailments", "Added Chaos Damage"].map(g => (
                    <span key={g} className="bg-poe-surface-2 border border-poe-border rounded px-2 py-1 text-poe-green text-xs">{g}</span>
                  ))}
                </div>
                <div className="text-poe-text-dim mt-3 mb-2">UTILITY:</div>
                <div className="flex flex-wrap gap-1">
                  {["Malevolence", "Grace", "Determination", "Withering Step", "Shield Charge + Faster Attacks + Momentum"].map(g => (
                    <span key={g} className="bg-poe-surface-2 border border-poe-border rounded px-2 py-1 text-poe-blue text-xs">{g}</span>
                  ))}
                </div>
              </div>
            </Panel>

            <H3>5. Poison SRS (Necromancer)</H3>
            <Panel>
              <div className="text-xs space-y-2">
                <div className="text-poe-text-dim mb-2">MAIN 6-LINK:</div>
                <div className="flex flex-wrap gap-1">
                  {["Summon Raging Spirit", "Melee Splash (clear) / Multistrike (boss)", "Minion Damage", "Void Manipulation", "Deadly Ailments", "Melee Physical Damage"].map(g => (
                    <span key={g} className="bg-poe-surface-2 border border-poe-border rounded px-2 py-1 text-poe-green text-xs">{g}</span>
                  ))}
                </div>
                <div className="text-poe-text-dim mt-3 mb-2">AURAS + SUPPORT:</div>
                <div className="flex flex-wrap gap-1">
                  {["Hatred", "Determination", "Tempest Shield", "Desecrate + Bone Offering (trigger wand)", "Convocation"].map(g => (
                    <span key={g} className="bg-poe-surface-2 border border-poe-border rounded px-2 py-1 text-poe-blue text-xs">{g}</span>
                  ))}
                </div>
                <div className="mt-2 text-poe-text-dim">
                  <B>Key:</B> <Unique>Severed in Sleep</Unique> cho 60% Poison chance. Ghastly Jewels bo sung 40% con lai = 100%.
                </div>
              </div>
            </Panel>

            <H3>6. Blight of Contagion (Trickster)</H3>
            <Panel>
              <div className="text-xs space-y-2">
                <div className="text-poe-text-dim mb-2">MAIN 6-LINK (BLIGHT):</div>
                <div className="flex flex-wrap gap-1">
                  {["Blight of Contagion", "Void Manipulation", "Controlled Destruction", "Swift Affliction", "Efficacy", "Infused Channelling"].map(g => (
                    <span key={g} className="bg-poe-surface-2 border border-poe-border rounded px-2 py-1 text-poe-green text-xs">{g}</span>
                  ))}
                </div>
                <div className="text-poe-text-dim mt-3 mb-2">CONTAGION SETUP (4-LINK):</div>
                <div className="flex flex-wrap gap-1">
                  {["Contagion", "Increased AoE", "Intensify", "Faster Casting"].map(g => (
                    <span key={g} className="bg-poe-surface-2 border border-poe-border rounded px-2 py-1 text-poe-green text-xs">{g}</span>
                  ))}
                </div>
                <div className="text-poe-text-dim mt-3 mb-2">SINGLE TARGET SUPPORT:</div>
                <div className="flex flex-wrap gap-1">
                  {["Bane + Despair (curse)", "Wither + Spell Totem + Multiple Totems"].map(g => (
                    <span key={g} className="bg-poe-surface-2 border border-poe-border rounded px-2 py-1 text-poe-blue text-xs">{g}</span>
                  ))}
                </div>
              </div>
            </Panel>

            <H3>7. Holy Hammers (Inquisitor)</H3>
            <Panel>
              <div className="text-xs space-y-2">
                <div className="text-poe-text-dim mb-2">MAIN 6-LINK:</div>
                <div className="flex flex-wrap gap-1">
                  {["Holy Hammers", "Concentrated Effect", "Elemental Focus", "Increased Critical Strikes", "Ruthless", "Close Combat"].map(g => (
                    <span key={g} className="bg-poe-surface-2 border border-poe-border rounded px-2 py-1 text-poe-green text-xs">{g}</span>
                  ))}
                </div>
                <div className="text-poe-text-dim mt-3 mb-2">POWER CHARGE GENERATION:</div>
                <div className="flex flex-wrap gap-1">
                  {["Assassin's Mark + Mark On Hit", "Blood and Sand (Blood Stance)", "Herald of Ash"].map(g => (
                    <span key={g} className="bg-poe-surface-2 border border-poe-border rounded px-2 py-1 text-poe-blue text-xs">{g}</span>
                  ))}
                </div>
                <div className="mt-2 text-poe-text-dim">
                  <B>Key:</B> Holy Hammers cascade thêm 2 lan khi consume Power Charge. Assassin&apos;s Mark dam bao uptime.
                </div>
              </div>
            </Panel>

            <Tip>
              <B>Pseudo 7-Link trong 3.28:</B> Exceptional Support Gems có thể tao pseudo 7-link trên 6-link gear.
              Vì du: <Gem>Returning Projectiles Support</Gem> tăng ~30% more damage VA lam projectile hit 2 lan = hiệu quả
              như 2 support gems gop lai.
            </Tip>
          </Section>

          {/* ═══════════════════════════════════════════
              VIII. ASCENDANCY TIER LIST
          ═══════════════════════════════════════════ */}
          <Section id="ascendancy-tier" num="VIII" title="Ascendancy Tier List &mdash; 3.28 Mirage">
            <P>
              Tier list này dua trên hiệu suat tong thể trong Mirage League: league start viability,
              endgame scaling, boss killing, va map farming.
            </P>

            <H3>S-Tier &mdash; Meta Dominators</H3>
            <div className="space-y-3">
              <Panel>
                <div className="flex items-center gap-3">
                  <span className="text-poe-gold-bright font-heading font-bold text-lg">S</span>
                  <div>
                    <div className="font-heading text-sm font-bold text-poe-text-bright">Necromancer (Witch)</div>
                    <div className="text-xs text-poe-text-dim mt-1">
                      Undisputed #1 trong 3.28. Minion buffs game-changing: new support gems, adjusted gem scaling,
                      level 30 minion power spike. Level 85 Spectres + level 30 gem power = exponential scaling.
                      Dominating Blow va Absolution đều S-tier. Poison SRS vẫn là league starter hang dau.
                    </div>
                  </div>
                </div>
              </Panel>
              <Panel>
                <div className="flex items-center gap-3">
                  <span className="text-poe-gold-bright font-heading font-bold text-lg">S</span>
                  <div>
                    <div className="font-heading text-sm font-bold text-poe-text-bright">Guardian (Templar)</div>
                    <div className="text-xs text-poe-text-dim mt-1">
                      4 direct buffs trong 3.28. Sentinel of Radiance tro thành permanent minion với +36% Movement Speed.
                      Absolution Guardian là boss killer hang dau. Aegis Aurora + block = tank cuc manh. Hybrid playstyle linh hoat.
                    </div>
                  </div>
                </div>
              </Panel>
            </div>

            <H3>A-Tier &mdash; Very Strong</H3>
            <div className="overflow-x-auto">
              <table className="poe-table">
                <thead>
                  <tr><th>Ascendancy</th><th>Class</th><th>Diem Manh</th><th>Best Builds</th></tr>
                </thead>
                <tbody>
                  {[
                    ["Assassin", "Shadow", "Poison/Crit scaling. Elusive + Nightblade. Perfect cho Viper Strike.", "Viper Strike, CoC, Poison builds"],
                    ["Saboteur", "Shadow", "Mine/Trap master. Born in thể Shadows blind. Pyromaniac regen.", "GC Miner, Seismic Trap"],
                    ["Deadeye", "Ranger", "Projectile king. Far Shot, Endless Munition, Gathering Winds.", "LA, TS, Ele Hit, Kinetic Blast"],
                    ["Hierophant", "Templar", "Totem + mana scaling. MoM tanky. Siege Ballista manh.", "Siege Ballista, Freezing Pulse Totems"],
                    ["Trickster", "Shadow", "DoT mastery. Sustain + speed. Ghost Dance defense.", "Blight, Exsanguinate, ED/Contagion"],
                  ].map(([asc, cls, strength, builds]) => (
                    <tr key={asc}>
                      <td className="text-poe-gold font-semibold whitespace-nowrap">{asc}</td>
                      <td className="text-poe-text-dim text-xs">{cls}</td>
                      <td className="text-xs">{strength}</td>
                      <td className="text-xs text-poe-green">{builds}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <H3>B-Tier &mdash; Viable & Solid</H3>
            <div className="overflow-x-auto">
              <table className="poe-table">
                <thead>
                  <tr><th>Ascendancy</th><th>Class</th><th>Diem Manh</th><th>Best Builds</th></tr>
                </thead>
                <tbody>
                  {[
                    ["Slayer", "Duelist", "Overleech, cull 20%, AoE. Bleed Slam manh.", "Bleed Slam, Flicker Strike, Cyclone"],
                    ["Champion", "Duelist", "Fortify permanent, Adrenaline burst, Impale scaling.", "Impale Cyclone, EA Ballista"],
                    ["Juggernaut", "Marauder", "Endurance charges, Unstoppable, tank #1.", "RF, Holy Sweep, Boneshatter"],
                    ["Pathfinder", "Ranger", "Flask uptime 100%, poison scaling, Nature's Reprisal.", "Poisonous Concoction, Poison builds"],
                    ["Elementalist", "Witch", "Exposure, Golem buffs (bi nerf 3.28), Shaper of Storms.", "GC Miner (van manh), Ignite"],
                    ["Berserker", "Marauder", "Rage, Aspect of Carnage 40% more, glass cannon.", "Holy Hammers (variant), Slam builds"],
                    ["Inquisitor", "Templar", "Inevitable Judgement ignore res, Pious Path regen.", "Holy Hammers, Spark, crit spells"],
                  ].map(([asc, cls, strength, builds]) => (
                    <tr key={asc}>
                      <td className="text-poe-gold font-semibold whitespace-nowrap">{asc}</td>
                      <td className="text-poe-text-dim text-xs">{cls}</td>
                      <td className="text-xs">{strength}</td>
                      <td className="text-xs text-poe-green">{builds}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <H3>C-Tier &mdash; Situational / Niche</H3>
            <div className="overflow-x-auto">
              <table className="poe-table">
                <thead>
                  <tr><th>Ascendancy</th><th>Class</th><th>Van De</th></tr>
                </thead>
                <tbody>
                  {[
                    ["Chieftain", "Marauder", "Explosion damage bị nerf 3.28. RF vẫn choi được nhung yếu hon truoc. Bị Jugg vuot mat ve tank."],
                    ["Gladiator", "Duelist", "Block scaling bị canh tranh boi Guardian. Bleed builds bị Slayer lam tốt hon."],
                    ["Occultist", "Witch", "Curse + ES builds niche. Bị Trickster lam tốt hon o DoT. Profane Bloom vẫn mạnh cho clear."],
                    ["Raider", "Ranger", "Frenzy + Onslaught. Toc đó cao nhung damage ceiling thấp hon Deadeye/Pathfinder."],
                  ].map(([asc, cls, issue]) => (
                    <tr key={asc}>
                      <td className="text-poe-gold font-semibold whitespace-nowrap">{asc}</td>
                      <td className="text-poe-text-dim text-xs">{cls}</td>
                      <td className="text-xs">{issue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Warning>
              <B>Legacy of Phrecia Event (3.25):</B> Event này thay thể 19 ascendancy cũ bang phien bạn moi.
              <B> Daughter of Oshabi</B> (shrine + poison) va <B>Architect of Chaos</B> (Vaal skills) là S-tier trong event.
              Tuy nhien, các ascendancy này CHI ap dùng cho event, không phải league thuong.
            </Warning>
          </Section>

          {/* ═══════════════════════════════════════════
              IX. BUDGET VS INVESTMENT SCALING
          ═══════════════════════════════════════════ */}
          <Section id="budget-scaling" num="IX" title="Budget vs Investment Scaling">
            <P>
              Hieu suat của mỗi build thay đổi rất lon tuy theo mức đầu tu. Duoi đây là phan tich chỉ tiết
              cach các build phổ biến scale từ <Gold>1 Divine</Gold> den <Gold>100+ Divine</Gold>.
            </P>

            <H3>Phan loại mức đầu tu</H3>
            <div className="grid gap-3 sm:grid-cols-4 mb-6">
              {[
                { tier: "Budget", range: "0-10 Div", desc: "League start. Rare gear cơ bản, unique rẻ tien." },
                { tier: "Mid-Budget", range: "10-40 Div", desc: "Core uniques, 6-link, gem quality cao." },
                { tier: "High Budget", range: "40-100 Div", desc: "Crafted gear, cluster jewels, Bottled Faith." },
                { tier: "Mirror-Tier", range: "100+ Div", desc: "Mageblood, mirror gear, min-max hoan hao." },
              ].map(({ tier, range, desc }) => (
                <Panel key={tier}>
                  <div className="font-heading text-sm font-bold text-poe-gold">{tier}</div>
                  <div className="text-poe-gold-bright text-xs font-semibold mt-1">{range}</div>
                  <div className="mt-2 text-xs text-poe-text-dim">{desc}</div>
                </Panel>
              ))}
            </div>

            <H3>Scaling theo tung build</H3>

            <H4>Righteous Fire Chieftain</H4>
            <div className="overflow-x-auto">
              <table className="poe-table">
                <thead>
                  <tr><th>Muc Dau Tu</th><th>DPS</th><th>Content Có The Lam</th><th>Key Upgrades</th></tr>
                </thead>
                <tbody>
                  {[
                    ["1 Div", "300K-500K RF DPS", "White/Yellow Maps (T1-T10)", "Life + Res gear, Rise of thể Phoenix shield"],
                    ["10 Div", "1-2M RF + 3M Fire Trap", "Red Maps T16, some Pinnacles", "6-link, Elder helmet, Doryani's Prototype (tuy variant)"],
                    ["50 Div", "3-5M RF + 10M Fire Trap", "All Pinnacle Bosses, T17", "Crafted weapon, Bottled Faith, cluster jewels"],
                    ["100+ Div", "5-8M RF + 20M+ Fire Trap", "All Uber Bosses, mỗi content", "Mageblood, double-influenced gear, Awakened gems (legacy)"],
                  ].map(([invest, dps, content, upgrades]) => (
                    <tr key={invest}>
                      <td className="text-poe-gold font-semibold whitespace-nowrap">{invest}</td>
                      <td className="text-poe-gold-bright text-xs">{dps}</td>
                      <td className="text-xs">{content}</td>
                      <td className="text-xs text-poe-text-dim">{upgrades}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <H4>Glacial Cascade Miner Elementalist</H4>
            <div className="overflow-x-auto">
              <table className="poe-table">
                <thead>
                  <tr><th>Muc Dau Tu</th><th>DPS</th><th>Content Có The Lam</th><th>Key Upgrades</th></tr>
                </thead>
                <tbody>
                  {[
                    ["1 Div", "5-10M mine DPS", "Red Maps T16 (co thể farm)", "+1 Spell wand, Tabula Rasa"],
                    ["10 Div", "20-40M mine DPS", "All Pinnacle Bosses", "6-link, Gloom Corona, crit multi jewels"],
                    ["50 Div", "60-100M mine DPS", "Uber Bosses comfortable", "Crafted wand, cluster jewels, bottled faith"],
                    ["100+ Div", "150M+ mine DPS", "Uber Bosses deathless, mỗi content", "Double-elevated gear, Mageblood, perfect jewels"],
                  ].map(([invest, dps, content, upgrades]) => (
                    <tr key={invest}>
                      <td className="text-poe-gold font-semibold whitespace-nowrap">{invest}</td>
                      <td className="text-poe-gold-bright text-xs">{dps}</td>
                      <td className="text-xs">{content}</td>
                      <td className="text-xs text-poe-text-dim">{upgrades}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <H4>Lightning Arrow / Tornado Shot Deadeye</H4>
            <div className="overflow-x-auto">
              <table className="poe-table">
                <thead>
                  <tr><th>Muc Dau Tu</th><th>DPS</th><th>Content Có The Lam</th><th>Key Upgrades</th></tr>
                </thead>
                <tbody>
                  {[
                    ["1 Div", "500K-1M (dung Ele Hit truoc)", "White/Yellow Maps", "Storm Cloud bow, basic scaling"],
                    ["10 Div", "3-5M LA DPS", "Red Maps T16", "6-link, +2 bow hoac crafted bow, Inpulsa's"],
                    ["50 Div", "15-30M DPS", "Pinnacle Bosses, speed farming", "Nimis, Dying Sun, crafted bow, good jewels"],
                    ["100+ Div", "50-100M+ DPS", "Uber Bosses, extreme farming", "Headhunter/Mageblood, mirror bow, Nimis, perfect gear"],
                  ].map(([invest, dps, content, upgrades]) => (
                    <tr key={invest}>
                      <td className="text-poe-gold font-semibold whitespace-nowrap">{invest}</td>
                      <td className="text-poe-gold-bright text-xs">{dps}</td>
                      <td className="text-xs">{content}</td>
                      <td className="text-xs text-poe-text-dim">{upgrades}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <H4>Poison SRS Necromancer</H4>
            <div className="overflow-x-auto">
              <table className="poe-table">
                <thead>
                  <tr><th>Muc Dau Tu</th><th>DPS</th><th>Content Có The Lam</th><th>Key Upgrades</th></tr>
                </thead>
                <tbody>
                  {[
                    ["1 Div", "2-5M poison DPS", "Yellow/Red Maps", "Severed in Sleep, Tabula, Ghastly Jewels cơ bản"],
                    ["10 Div", "10-20M poison DPS", "Red Maps T16, low Pinnacles", "6-link, United in Dream upgrade, +2 helmet"],
                    ["50 Div", "40-60M poison DPS", "All Pinnacle Bosses", "Crafted +3 staff, Ashes of thể Stars, cluster jewels"],
                    ["100+ Div", "80-120M+ poison DPS", "Uber Bosses, T17 comfortable", "Double-influenced gear, perfect jewels, Mageblood"],
                  ].map(([invest, dps, content, upgrades]) => (
                    <tr key={invest}>
                      <td className="text-poe-gold font-semibold whitespace-nowrap">{invest}</td>
                      <td className="text-poe-gold-bright text-xs">{dps}</td>
                      <td className="text-xs">{content}</td>
                      <td className="text-xs text-poe-text-dim">{upgrades}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <H4>Blight of Contagion Trickster</H4>
            <div className="overflow-x-auto">
              <table className="poe-table">
                <thead>
                  <tr><th>Muc Dau Tu</th><th>DPS</th><th>Content Có The Lam</th><th>Key Upgrades</th></tr>
                </thead>
                <tbody>
                  {[
                    ["1 Div", "1-3M DoT DPS", "Red Maps T16 (Cane of Unravelling)", "Cane of Unravelling (vai Chaos), Life+Res gear"],
                    ["10 Div", "5-10M DoT DPS", "T16 corrupted, low Pinnacles", "6-link, +2 Chaos amulet, crafted wand"],
                    ["50 Div", "15-25M DoT DPS", "Pinnacle Bosses", "Exceptional support gems, cluster jewels, crafted gear"],
                    ["100+ Div", "30-40M DoT DPS", "Uber Bosses (nhung kho hon builds khac)", "Mageblood, perfect crafts. DoT ceiling thấp hon hit builds."],
                  ].map(([invest, dps, content, upgrades]) => (
                    <tr key={invest}>
                      <td className="text-poe-gold font-semibold whitespace-nowrap">{invest}</td>
                      <td className="text-poe-gold-bright text-xs">{dps}</td>
                      <td className="text-xs">{content}</td>
                      <td className="text-xs text-poe-text-dim">{upgrades}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <H4>Viper Strike of thể Mamba (Assassin/Pathfinder)</H4>
            <div className="overflow-x-auto">
              <table className="poe-table">
                <thead>
                  <tr><th>Muc Dau Tu</th><th>DPS</th><th>Content Có The Lam</th><th>Key Upgrades</th></tr>
                </thead>
                <tbody>
                  {[
                    ["1 Div", "3-8M poison DPS", "Red Maps T16 (Bino's re)", "Bino's Kitchen Knife, basic poison gear"],
                    ["10 Div", "15-30M poison DPS", "Pinnacle Bosses", "The Hateful Accuser, 6-link, crit gear"],
                    ["50 Div", "60-100M poison DPS", "Uber Bosses comfortable", "Crafted claw, cluster jewels, Replica Perfect Form"],
                    ["100+ Div", "150M+ poison DPS", "Moi content deathless", "Mirror-tier claw, perfect gear, mỗi mod chay duoc"],
                  ].map(([invest, dps, content, upgrades]) => (
                    <tr key={invest}>
                      <td className="text-poe-gold font-semibold whitespace-nowrap">{invest}</td>
                      <td className="text-poe-gold-bright text-xs">{dps}</td>
                      <td className="text-xs">{content}</td>
                      <td className="text-xs text-poe-text-dim">{upgrades}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <H3>Tom tat: Build nao scale tốt nhất theo mức đầu tu?</H3>
            <div className="overflow-x-auto">
              <table className="poe-table">
                <thead>
                  <tr><th>Muc Dau Tu</th><th>Build Tot Nhat</th><th>Ly Do</th></tr>
                </thead>
                <tbody>
                  {[
                    ["0-1 Div", "Poisonous Concoction PF / Blight Trickster", "Khong cần item dat. Scale từ gem + tree."],
                    ["1-10 Div", "GC Miner Elementalist", "10M+ DPS chỉ với 1 Div. Best DPS/cost ratio."],
                    ["10-50 Div", "Poison SRS Necro / Viper Strike", "Poison stack vo han. Necro S-tier buff."],
                    ["50-100 Div", "LA/TS Deadeye + Nimis", "Clear speed vuot troi. Farming efficiency cao nhat."],
                    ["100+ Div", "TS Deadeye + Mageblood + Nimis", "Best farmer. Hoac CoC builds cho damage ceiling cao nhat."],
                  ].map(([invest, build, reason]) => (
                    <tr key={invest}>
                      <td className="text-poe-gold font-semibold whitespace-nowrap">{invest}</td>
                      <td className="text-poe-text-bright font-semibold text-xs">{build}</td>
                      <td className="text-xs">{reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Tip>
              <B>Chien luoc đầu từ hiệu quả nhat:</B> Bat đầu với <Gold>GC Miner</Gold> hoac <Gold>Poisonous Concoction PF</Gold> (0 Div),
              farm len 20-30 Div, chuyen sang <Gold>LA Deadeye</Gold> để farm nhanh hon, roi đầu từ tiep vao
              <Gold> Nimis + Headhunter/Mageblood</Gold> để tối đa hoa currency/gio.
            </Tip>
          </Section>

          {/* ═══════════════════════════════════════════
              FOOTER
          ═══════════════════════════════════════════ */}
          <section className="border-t border-poe-border pt-12 text-center">
            <P>
              <span className="text-poe-text-dim text-xs">
                Du lieu tong hop từ maxroll.gg, poe-vault.com, mobalytics.gg, poe.ninja, aoeah.com, sportskeeda.com,
                games.gg, va cộng động PoE. Cap nhất thang 3/2026 cho Patch 3.28 Mirage League.
                Gia item va DPS là uoc tính va có thể thay đổi theo economy hien tai.
              </span>
            </P>
            <div className="mt-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded border border-poe-gold/40 bg-poe-gold/10 px-6 py-2.5 font-heading text-sm font-semibold tracking-wide text-poe-gold transition-all hover:bg-poe-gold/20 hover:border-poe-gold/60"
              >
                &larr; Quay lại trang hướng dẫn cơ bản
              </Link>
            </div>

            <div className="mt-8 text-xs text-poe-text-dim space-y-1">
              <p>Sources:</p>
              <p>
                <a href="https://maxroll.gg/poe" className="text-poe-blue hover:underline" target="_blank" rel="noopener noreferrer">maxroll.gg/poe</a>
                {" | "}
                <a href="https://www.poe-vault.com" className="text-poe-blue hover:underline" target="_blank" rel="noopener noreferrer">poe-vault.com</a>
                {" | "}
                <a href="https://mobalytics.gg/poe" className="text-poe-blue hover:underline" target="_blank" rel="noopener noreferrer">mobalytics.gg/poe</a>
                {" | "}
                <a href="https://poe.ninja" className="text-poe-blue hover:underline" target="_blank" rel="noopener noreferrer">poe.ninja</a>
                {" | "}
                <a href="https://www.pathofexile.com/forum" className="text-poe-blue hover:underline" target="_blank" rel="noopener noreferrer">pathofexile.com/forum</a>
              </p>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}
