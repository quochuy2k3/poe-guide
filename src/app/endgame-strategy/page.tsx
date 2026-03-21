import type { Metadata } from "next";
import Link from "next/link";
import { Section, Panel, Tip, Warning, H3, H4, P, B, Gold } from "@/components/ui";

export const metadata: Metadata = {
  title: "Endgame Strategy — Atlas, Farming, Crafting & Boss Rush",
  description:
    "Hướng dẫn endgame chỉ tiết PoE1: Atlas passive strategy, map farming, currency farming methods, crafting guide, boss rush profit, trading tips, juicing maps, Delve, Heist.",
  keywords: ["PoE endgame", "atlas strategy", "currency farming", "crafting guide", "boss rush", "map juicing", "Delve", "Heist", "Path of Exile"],
  alternates: { canonical: "/endgame-strategy" },
};

/* ── Navigation sidebar data ── */
const sections = [
  { id: "atlas", label: "Atlas Strategy", num: "I" },
  { id: "map-farming", label: "Map Farming", num: "II" },
  { id: "currency-farming", label: "Currency Farming", num: "III" },
  { id: "crafting", label: "Crafting Guide", num: "IV" },
  { id: "boss-rush", label: "Boss Rush", num: "V" },
  { id: "trading", label: "Trading Tips", num: "VI" },
  { id: "leveling-speed", label: "Leveling Speedrun", num: "VII" },
  { id: "defense", label: "Defensive Layers", num: "VIII" },
  { id: "flasks", label: "Flask Management", num: "IX" },
  { id: "league-profit", label: "League Mechanic Profit", num: "X" },
  { id: "juicing", label: "Juicing Maps", num: "XI" },
  { id: "delve", label: "Delve Strategy", num: "XII" },
  { id: "heist", label: "Heist Blueprints", num: "XIII" },
];

/* ── Client nav component inlined (kept simple) ── */
function NavSidebar() {
  return (
    <nav className="fixed left-0 top-0 z-40 hidden h-screen w-56 flex-col border-r border-poe-border bg-poe-bg/95 backdrop-blur-sm lg:flex">
      <div className="border-b border-poe-border px-4 py-4">
        <div className="font-heading text-sm font-bold tracking-widest text-poe-gold uppercase">
          PoE Endgame
        </div>
        <div className="mt-0.5 text-xs text-poe-text-dim">
          Pro Player Guide
        </div>
      </div>
      <div className="flex-1 overflow-y-auto py-2">
        {sections.map(({ id, label, num }) => (
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
        <Link
          href="/"
          className="text-xs text-poe-text-dim hover:text-poe-gold transition-colors"
        >
          &larr; Beginner Guide
        </Link>
      </div>
    </nav>
  );
}

/* ══════════════════════════════════════════════════════════════════
   MAIN PAGE
   ══════════════════════════════════════════════════════════════════ */
export default function EndgameStrategyPage() {
  return (
    <>
      <NavSidebar />

      <main className="lg:pl-56">
        {/* Hero */}
        <header className="relative flex min-h-[50vh] flex-col items-center justify-center overflow-hidden px-6 text-center">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-poe-bg/40 via-poe-bg/70 to-poe-bg" />
          </div>
          <div className="relative z-10 max-w-3xl">
            <div className="mb-4 inline-block rounded border border-poe-gold/30 bg-poe-gold/10 px-3 py-1 font-heading text-xs font-semibold tracking-widest text-poe-gold uppercase">
              Endgame Master Guide
            </div>
            <h1 className="section-title font-heading text-3xl font-black leading-tight text-poe-text-bright sm:text-4xl md:text-5xl">
              Path of Exile 1 &mdash; Endgame Strategy
            </h1>
            <p className="mt-1 font-heading text-lg text-poe-gold sm:text-xl">
              Dành cho Pro Player
            </p>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-poe-text-dim">
              13 chương chỉ tiết về Atlas, Map Farming, Currency, Crafting, Boss
              Rush, Trading, Leveling Speedrun, Defense, Flasks, League Mechanic
              Profit, Juicing, Delve và Heist. Đầy đủ con số, ví dụ cụ thể.
            </p>
          </div>
        </header>

        {/* ── Content ── */}
        <div className="mx-auto max-w-4xl space-y-24 px-6 py-16 pt-8">

          {/* ═══════════════════════════════════════════════════════
              I. ATLAS STRATEGY
             ═══════════════════════════════════════════════════════ */}
          <Section id="atlas" num="I" title="Atlas Passive Tree Strategy">
            <P>
              Atlas passive tree là cơ chế cho phép bạn <B>chuyên môn hóa endgame</B> theo hướng chơi của mình.
              Với 132 điểm (sau khi hoàn thành toàn bộ Atlas), bạn cần phân bổ thông minh để tối ưu hóa lợi nhuận.
              Dưới đây là các strategy phổ biến nhất cho pro player.
            </P>

            <H3>1.1. Essence Rushing</H3>
            <P>
              Essence là một trong những mechanic <B>ổn định nhất để kiếm currency</B> vì không cần đầu tư nhiều và reward chắc chắn.
              Mỗi map có thể spawn 1-2 cụm Essence monster. Với atlas node đúng, bạn có thể tăng số lượng và tier của chúng.
            </P>
            <H4>Các node quan trọng:</H4>
            <ul className="mb-4 space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
                <span><B>Prolific Essence</B> &mdash; Tăng 100% cơ hội xuất hiện Essence monster trong map. Đây là node <Gold>ưu tiên số 1</Gold>.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
                <span><B>Crystal Resonance</B> &mdash; Essence monster có thêm 1 Essence bonus. Giúp bạn nhận 3 Essence thay vì 2 mỗi cụm.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
                <span><B>Amplified Energies</B> &mdash; Cơ hội Essence được nâng cấp 1 tier. Deafening Essence bán được 5-15c mỗi cái.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
                <span><B>Imprisoned Monsters have ...</B> &mdash; Các node nhỏ tăng số Essence trên mỗi monster, giúp bạn có 4 Essence cùng lúc.</span>
              </li>
            </ul>
            <Tip>
              <B>Pro tip:</B> Deafening Essence of Contempt (flat phys), Zeal (attack speed), và Loathing (socketed gems mana cost) luôn có giá cao.
              Trung bình mỗi map T16 với full Essence spec cho bạn khoảng <Gold>8-15 Chaos raw value</Gold> từ Essence.
              Chạy 20-25 map/giờ = <Gold>200-350c/giờ</Gold> chỉ riêng từ Essence.
            </Tip>

            <H3>1.2. Harbinger Stacking</H3>
            <P>
              Harbinger là mechanic pha thêm <B>nhiều Harbinger pack</B> vào map. Chúng drop Harbinger currency shards (Exalted Shard, Ancient Shard, Annulment Shard, etc.)
              và đặc biệt là <B>Ancient Orb</B> dùng để gamble unique item.
            </P>
            <H4>Các node quan trọng:</H4>
            <ul className="mb-4 space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
                <span><B>Secrets of thể Stones</B> &mdash; Harbinger trong map drop thêm shards. Trung bình thêm 30-50% giá trị loot.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
                <span><B>Ominous Arrival</B> &mdash; Tăng 100% cơ hội Harbinger xuất hiện. Đây là gateway node bắt buộc.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
                <span><B>The Herald</B> &mdash; Boss map có thể là Harbinger boss, drop nhiều shards rất có giá trị.</span>
              </li>
            </ul>
            <P>
              Harbinger đặc biệt mạnh khi kết hợp với <B>map có open layout</B> (City Square, Strand, Dunes) vì bạn cần clear nhanh các wave.
              Thu nhập trung bình khoảng <Gold>150-300c/giờ</Gold> tùy vào giá Ancient Orb và Exalted Shard trên market.
            </P>

            <H3>1.3. Expedition Farming</H3>
            <P>
              Expedition là một trong những mechanic <B>lợi nhuận cao nhất</B> trong game, đặc biệt là với Tujen (raw currency)
              và Gwennen (gamble chase unique như Headhunter và Mageblood).
            </P>
            <H4>Atlas spec chính:</H4>
            <ul className="mb-4 space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
                <span><B>Buried Knowledge</B> &mdash; 100% cơ hội Expedition xuất hiện trong map.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
                <span><B>Extreme Archaeology</B> &mdash; Tăng 80% diện tích Expedition &rarr; nhiều quái hơn, nhiều reward hơn.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
                <span><B>Logbook nodes</B> &mdash; Tăng cơ hội drop Logbook. Logbook iLvl 83+ bán được <Gold>30-80c</Gold> mỗi cuốn tùy loại.</span>
              </li>
            </ul>
            <Warning>
              <B>Lưu ý:</B> Expedition monster có thể có mod <B>block stacking</B> rất cao (immune to damage types).
              Cần build với nhiều loại damage hoặc dùng raw DoT (Righteous Fire, Poison, Ignite) để bypass.
              Attack build thuần cũng OK nhưng cần chọn remnant cẩn thận.
            </Warning>
            <H4>Vendor strategy:</H4>
            <div className="overflow-x-auto">
              <table className="poe-table">
                <thead>
                  <tr><th>Vendor</th><th>Chức năng</th><th>Lợi nhuận</th></tr>
                </thead>
                <tbody>
                  <tr><td className="text-poe-gold font-semibold">Tujen</td><td>Mua raw currency (Chaos, Exalted, Stacked Deck...)</td><td><Gold>Cao nhất</Gold> &mdash; haggle 60-70% giá để hời</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Rog</td><td>Craft rare item tốt với giá rẻ</td><td>Cao đầu league (market chưa saturated)</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Gwennen</td><td>Gamble unique item</td><td>RNG cao nhưng có thể trúng <Gold>Mageblood/HH</Gold></td></tr>
                  <tr><td className="text-poe-gold font-semibold">Dannig</td><td>Đổi artifact giữa các vendor, mua Logbook</td><td>Utility &mdash; convert artifact dư thành Tujen artifact</td></tr>
                </tbody>
              </table>
            </div>
            <Tip>
              <B>Pro tip Tujen:</B> Khi haggle, bắt đầu offer <Gold>60-70%</Gold> giá gốc của Tujen. Nếu reject, tăng lên 5-10%.
              Với Tujen artifact từ khoảng 20-30 Expedition encounter, bạn có thể kiếm được <Gold>1-3 Divine Orb</Gold> giá trị raw currency.
            </Tip>

            <H3>1.4. Breach Stacking</H3>
            <P>
              Breach mang đến <B>mật độ quái cực cao</B> trong thời gian ngắn, drop Breach splinter và Breachstone.
              Breachstone (đặc biệt là Chayula) có giá trị cao &mdash; Pure Chayula Breachstone có thể bán <Gold>50-120c</Gold>.
            </P>
            <ul className="mb-4 space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
                <span><B>Flash Breach</B> &mdash; Breach open/close nhanh hơn, tăng tốc độ farm.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
                <span><B>Breach nodes cluster</B> &mdash; Tăng số Breach per map lên 2-3, mỗi Breach có nhiều quái hơn.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
                <span>Kết hợp với <B>Beyond</B> và <B>Delirium</B> để tạo mật độ quái khổng lồ &rarr; exp cực nhanh và nhiều loot.</span>
              </li>
            </ul>

            <H3>1.5. Strategy tổng hợp &mdash; Skeleton Tree</H3>
            <P>
              Nhiều pro player không spec 100% vào 1 mechanic mà dùng <B>Skeleton Tree</B> &mdash; lấy các node quan trọng nhất của 3-4 mechanic:
            </P>
            <ul className="mb-4 space-y-2 text-sm">
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span>Essence (Prolific + Crystal Resonance)</span></li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span>Strongbox (Ambush nodes &mdash; Arcanist và Diviner Strongbox)</span></li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span>Shrine (Domination &mdash; buff damage và movespeed)</span></li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span>Map sustain (Kirac nodes, Singular Focus / Wandering Path keystone)</span></li>
            </ul>
            <Tip>
              <B>Wandering Path</B> keystone: Tất cả small atlas node có <Gold>hiệu quả x3</Gold>, nhưng tất cả notable/keystone khác bị vô hiệu hóa.
              Rất mạnh cho generic mapping, tăng quantity và pack size từ small node.
              <br /><br />
              <B>Singular Focus</B>: Map không có trong favourite list bị convert thành map currency. Giúp sustain map favourite <Gold>100%</Gold>.
            </Tip>
          </Section>

          {/* ═══════════════════════════════════════════════════════
              II. MAP FARMING
             ═══════════════════════════════════════════════════════ */}
          <Section id="map-farming" num="II" title="Map Farming &mdash; Chọn Map Tốt Nhất">
            <P>
              Không phải map nào cũng như nhau. <B>Layout, divination card, và mob density</B> quyết định lợi nhuận.
              Dưới đây là các map tốt nhất cho từng strategy cụ thể.
            </P>

            <H3>2.1. Tower &mdash; Farm The Nurse / The Doctor</H3>
            <Panel>
              <div className="font-heading text-sm font-bold text-poe-gold mb-2">Tower Map (T16)</div>
              <ul className="space-y-1 text-sm">
                <li><B>Divination Card:</B> The Nurse (8 cards = 1 Doctor = 1 Headhunter)</li>
                <li><B>Layout:</B> Linear, tower-style, dễ navigate. Mob density trung bình-khá.</li>
                <li><B>Strategy:</B> Kết hợp Divination Scarab + Strongbox scarab + quán Atlas Divination nodes</li>
                <li><B>Expected:</B> ~1 Nurse card mỗi 50-100 map (tùy IIQ và scarab). Giá Nurse card ~ <Gold>30-80c</Gold> tùy league.</li>
                <li><B>Favourite:</B> Set Tower làm favourite x3 để chỉ drop Tower khi chạy T16.</li>
              </ul>
            </Panel>

            <H3>2.2. Crimson Temple &mdash; Farm The Apothecary</H3>
            <Panel>
              <div className="font-heading text-sm font-bold text-poe-gold mb-2">Crimson Temple (T16)</div>
              <ul className="space-y-1 text-sm">
                <li><B>Divination Card:</B> The Apothecary (5 cards = 1 Mageblood, giá <Gold>50-200 Divine mỗi set</Gold>)</li>
                <li><B>Layout:</B> Phức tạp hơn Tower nhưng reward cực cao.</li>
                <li><B>Drop rate ước tính:</B> ~1 Apothecary mỗi <Gold>60-150 map</Gold> với full juice. Mỗi card giá <Gold>10-40 Divine</Gold>.</li>
                <li><B>Strategy:</B> Cần juice map mạnh (Scarab, Delirium, Beyond) để tăng số lượng quái. Dùng <B>Singular Focus</B> để đảm bảo chỉ drop Crimson Temple.</li>
                <li><B>Kết hợp:</B> Seven Years Bad Luck (Mirror Shard) cũng drop ở đây.</li>
              </ul>
            </Panel>
            <Warning>
              <B>Cảnh báo:</B> Farm Apothecary là <B>high variance</B> &mdash; có thể chạy 200 map không thấy card nào,
              hoặc may mắn drop 2 card trong 50 map. Chỉ nên farm khi đã có đủ vốn và build mạnh.
            </Warning>

            <H3>2.3. Dunes / Strand &mdash; Legion Farming</H3>
            <Panel>
              <div className="font-heading text-sm font-bold text-poe-gold mb-2">Dunes / Strand (T16)</div>
              <ul className="space-y-1 text-sm">
                <li><B>Đặc điểm:</B> Open layout, phẳng, không có obstacle &rarr; <Gold>perfect cho Legion</Gold></li>
                <li><B>Tại sao:</B> Legion monolith cần bạn phá hết tất cả mob trong 7 giây. Map phẳng = hit nhiều mob nhất.</li>
                <li><B>Scarab:</B> Legion Scarab (thêm monolith) + Breach/Beyond Scarab (thêm quái general)</li>
                <li><B>Thu nhập:</B> Legion drop Incubator, Timeless Splinter (đặc biệt Maraketh và Legion), raw currency. Khoảng <Gold>200-400c/giờ</Gold>.</li>
                <li><B>Build tốt:</B> Tornado Shot, Lightning Arrow, Kinetic Blast &mdash; cần wide AoE để 1-shot Legion.</li>
              </ul>
            </Panel>

            <H3>2.4. Các map đáng chú ý khác</H3>
            <div className="overflow-x-auto">
              <table className="poe-table">
                <thead>
                  <tr><th>Map</th><th>Div Card</th><th>Đặc điểm</th></tr>
                </thead>
                <tbody>
                  <tr><td className="text-poe-gold font-semibold">Burial Chambers</td><td>The Doctor (8 = Headhunter)</td><td>Drop rate thấp nhưng mỗi card = <Gold>6-12 Divine</Gold></td></tr>
                  <tr><td className="text-poe-gold font-semibold">Cemetery</td><td>The Brother&apos;s Stash (5 = 5 Exalted)</td><td>Open layout, tốt cho general farming</td></tr>
                  <tr><td className="text-poe-gold font-semibold">City Square</td><td>Không có card đặc biệt</td><td>Layout cực tốt cho Harbinger + Breach (small dense map)</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Jungle Valley</td><td>The Wind</td><td>Open layout tốt cho speed farming</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Underground Sea</td><td>The Cheater / Abandoned Wealth</td><td>Mob density cao, linear layout, tốt cho Delirium</td></tr>
                </tbody>
              </table>
            </div>
          </Section>

          {/* ═══════════════════════════════════════════════════════
              III. CURRENCY FARMING
             ═══════════════════════════════════════════════════════ */}
          <Section id="currency-farming" num="III" title="Currency Farming Methods">
            <P>
              Currency farming trong PoE có nhiều cấp độ đầu tư. Dưới đây là các phương pháp phổ biến,
              sắp xếp theo mức đầu tư từ thấp đến cao.
            </P>

            <H3>3.1. Chaos Recipe (Budget &mdash; 0 đầu tư)</H3>
            <Panel>
              <ul className="space-y-1 text-sm">
                <li><B>Cách làm:</B> Thu thập 1 full set rare item (ilvl 60-74): weapon, helm, body, gloves, boots, belt, 2 ring, amulet</li>
                <li><B>Bán cho vendor:</B> = <Gold>2 Chaos Orb</Gold> (unidentified) hoặc 1 Chaos (identified)</li>
                <li><B>Tốc độ:</B> ~50-80c/giờ nếu dùng quad stash tab và loot filter riêng</li>
                <li><B>Khi nào dùng:</B> <Gold>Ngày 1-3 của league</Gold> khi giá Chaos cao nhất so với Divine</li>
              </ul>
            </Panel>

            <H3>3.2. Essence Farming (Low Investment)</H3>
            <P>
              Như đã nói ở phần Atlas, Essence farming cho thu nhập <Gold>200-350c/giờ</Gold> với chỉ cần atlas spec và alch-and-go.
              Deafening Essence có giá từ 3-15c/cái tùy loại. Bán bulk (10+ mỗi loại) để bán nhanh hơn.
            </P>

            <H3>3.3. Expedition Farming (Medium Investment)</H3>
            <P>
              Chạy map với Expedition spec + Expedition Scarab. Thu thập artifact &rarr; đổi qua Tujen để lấy raw currency.
              Logbook iLvl 83+ là main money maker. Thu nhập khoảng <Gold>300-600c/giờ</Gold> nếu bán logbook và đổi Tujen hiệu quả.
            </P>

            <H3>3.4. MF (Magic Find) Gear</H3>
            <P>
              MF build stack <B>Increased Item Quantity (IIQ)</B> và <B>Increased Item Rarity (IIR)</B> để tăng số lượng và chất lượng loot.
            </P>
            <H4>Gear bắt buộc cho MF:</H4>
            <div className="overflow-x-auto">
              <table className="poe-table">
                <thead>
                  <tr><th>Item</th><th>Stats</th><th>Giá (~)</th></tr>
                </thead>
                <tbody>
                  <tr><td className="text-poe-gold font-semibold">Ventor&apos;s Gamble</td><td>10% IIQ, 40-50% IIR, + elemental res</td><td><Gold>5-50 Divine</Gold> (tùy roll)</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Goldwyrm</td><td>20% IIQ</td><td>5-20c</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Greed&apos;s Embrace</td><td>15% IIQ, 50% IIR</td><td>1-5c</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Sadima&apos;s Touch</td><td>12-16% IIQ</td><td>1-5c</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Bisco&apos;s Collar</td><td>50-100% IIQ cho normal monsters</td><td>5-30c</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Divination Distillate</td><td>18% IIQ, 60% IIR (flask)</td><td>1c</td></tr>
                </tbody>
              </table>
            </div>
            <Tip>
              <B>IIQ target:</B> Nhắm <Gold>80-120% IIQ</Gold> và <Gold>200-350% IIR</Gold> tổng cộng.
              Quá 120% IIQ, diminishing returns bắt đầu. IIR ảnh hưởng đến độ hiếm nhưng <B>không ảnh hưởng đến currency drop</B> &mdash;
              chỉ IIQ mới tăng số lượng currency drop.
            </Tip>

            <H3>3.5. Party Play vs Solo</H3>
            <P>
              Party play trong PoE <B>tăng đáng kể loot</B>:
            </P>
            <ul className="mb-4 space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
                <span>Mỗi player thêm trong party (sau người thứ 1) tăng khoảng <Gold>+50% item quantity</Gold> và <Gold>+25% item rarity</Gold> (additive với monster/area bonus, <B>multiplicative</B> với player bonus).</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
                <span>Party 6 người = <Gold>+250% IIQ</Gold> bonus từ party mechanic.</span>
              </li>
            </ul>
            <H4>Cấu hình party tối ưu:</H4>
            <div className="overflow-x-auto">
              <table className="poe-table">
                <thead>
                  <tr><th>Role</th><th>Nhiệm vụ</th><th>Build phổ biến</th></tr>
                </thead>
                <tbody>
                  <tr><td className="text-poe-gold font-semibold">Carry / DPS</td><td>Clear map cực nhanh</td><td>Tornado Shot, Kinetic Blast, Lightning Arrow</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Aurabot</td><td>Stack aura buff cho cả party (15+ aura)</td><td>Guardian / Necromancer aurabot</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Cursebot</td><td>Apply curse giảm resist, tăng damage taken</td><td>Occultist curse stacker</td></tr>
                  <tr><td className="text-poe-gold font-semibold">MF Culler</td><td>Last-hit boss/rare với MF gear + Culling Strike</td><td>Bao nhiêu IIQ/IIR có thể stack</td></tr>
                </tbody>
              </table>
            </div>
            <P>
              Party play có thể đạt <Gold>2000-5000c/giờ</Gold> (chia cho 4-6 người) với juice maps cực cao.
              So với solo ~<Gold>300-800c/giờ</Gold>, party play hiệu quả hơn nhưng cần coordination.
            </P>
          </Section>

          {/* ═══════════════════════════════════════════════════════
              IV. CRAFTING GUIDE
             ═══════════════════════════════════════════════════════ */}
          <Section id="crafting" num="IV" title="Crafting Guide Chi Tiết">
            <P>
              Crafting là cách để tạo ra item mạnh nhất trong game. PoE có nhiều phương pháp craft,
              mỗi cách có ưu/nhược riêng. Dưới đây là hướng dẫn từng bước cho các phương pháp phổ biến nhất.
            </P>

            <H3>4.1. Essence Crafting</H3>
            <P>
              Essence <B>đảm bảo 1 mod cụ thể</B> khi sử dụng trên item, đồng thời reroll tất cả mod khác (giống Chaos Orb nhưng có 1 guaranteed mod).
            </P>
            <H4>Bước thực hiện &mdash; Ví dụ: Craft body armour với +Life cao</H4>
            <div className="overflow-x-auto mb-4">
              <table className="poe-table">
                <thead>
                  <tr><th>Bước</th><th>Hành động</th><th>Chi phí (~)</th></tr>
                </thead>
                <tbody>
                  <tr><td>1</td><td>Mua item base iLvl 86+ (vd: Vaal Regalia ES base hoặc Astral Plate armour base)</td><td>5-20c</td></tr>
                  <tr><td>2</td><td>Dùng <B>Deafening Essence of Greed</B> (T1 Life: +120 max life) spam cho đến khi có prefix/suffix phù hợp</td><td>5-15c/lần x 20-50 lần = <Gold>100-750c</Gold></td></tr>
                  <tr><td>3</td><td>Nếu có 2 prefix tốt (Life + 1 prefix khác), craft &quot;Prefixes Cannot be Changed&quot; (2 Divine) rồi dùng Orb of Scouring để xóa suffix</td><td>2 Divine</td></tr>
                  <tr><td>4</td><td>Benchcraft suffix mong muốn (vd: +resist, +craft mod)</td><td>Varies</td></tr>
                </tbody>
              </table>
            </div>

            <H3>4.2. Fossil Crafting</H3>
            <P>
              Fossil được dùng kèm <B>Resonator</B>. Mỗi fossil <B>tăng/giảm trọng số (weight)</B> của các mod có tag tương ứng.
              Không đảm bảo mod cụ thể nhưng có thể <B>block mod không mong muốn</B>.
            </P>
            <H4>Bước thực hiện &mdash; Ví dụ: Craft Physical DPS weapon</H4>
            <div className="overflow-x-auto mb-4">
              <table className="poe-table">
                <thead>
                  <tr><th>Bước</th><th>Hành động</th></tr>
                </thead>
                <tbody>
                  <tr><td>1</td><td>Mua weapon base iLvl 83+ (vd: Exquisite Blade, Vaal Axe)</td></tr>
                  <tr><td>2</td><td>Dùng <B>Jagged Fossil</B> (tăng weight Physical mod) + <B>Corroded Fossil</B> (block Elemental/Chaos mod) trong <B>Prime Resonator</B> (2 socket)</td></tr>
                  <tr><td>3</td><td>Spam cho đến khi hit T1-T2 %Phys + T1-T2 Flat Phys + Hybrid Phys</td></tr>
                  <tr><td>4</td><td>Benchcraft Attack Speed hoặc Crit như suffix cuối</td></tr>
                </tbody>
              </table>
            </div>
            <P>
              <B>Fossil phổ biến và công dụng:</B>
            </P>
            <div className="overflow-x-auto">
              <table className="poe-table">
                <thead>
                  <tr><th>Fossil</th><th>Tăng</th><th>Giảm/Block</th><th>Giá (~)</th></tr>
                </thead>
                <tbody>
                  <tr><td className="text-poe-gold font-semibold">Jagged</td><td>Physical</td><td>&mdash;</td><td>1-3c</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Dense</td><td>Defence (ES, Armour)</td><td>Life</td><td>1-3c</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Pristine</td><td>Life</td><td>Defence</td><td>1-3c</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Scorched</td><td>Fire</td><td>Cold</td><td>1c</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Frigid</td><td>Cold</td><td>Fire</td><td>1c</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Metallic</td><td>Lightning</td><td>Physical</td><td>1c</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Corroded</td><td>Chaos/Bleed/Poison</td><td>Elemental</td><td>2-5c</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Aberrant</td><td>Chaos</td><td>Elemental (giảm)</td><td>1-2c</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Lucent</td><td>Mana</td><td>Speed</td><td>1c</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Hollow</td><td>Cơ hội Abyssal Socket</td><td>&mdash;</td><td>5-15c</td></tr>
                </tbody>
              </table>
            </div>

            <H3>4.3. Harvest Crafting</H3>
            <P>
              Harvest là phương pháp craft <B>mạnh nhất</B> vì nó <B>tôn trọng meta-craft mod</B>
              (&ldquo;Prefixes Cannot be Changed&rdquo;, &ldquo;Suffixes Cannot be Changed&rdquo;).
              Đây là điểm khác biệt quan trọng so với Fossil và Essence (không tôn trọng meta-craft).
            </P>
            <H4>Kỹ thuật chính: Harvest Reforge với Meta-craft</H4>
            <div className="overflow-x-auto mb-4">
              <table className="poe-table">
                <thead>
                  <tr><th>Bước</th><th>Hành động</th><th>Chi phí</th></tr>
                </thead>
                <tbody>
                  <tr><td>1</td><td>Có item với <B>3 prefix tốt</B> (vd: T1 Life, T1 %ES, T1 Flat ES trên body armour)</td><td>&mdash;</td></tr>
                  <tr><td>2</td><td>Benchcraft <B>&ldquo;Prefixes Cannot Be Changed&rdquo;</B></td><td><Gold>2 Divine Orb</Gold></td></tr>
                  <tr><td>3</td><td>Dùng <B>Harvest Reforge</B> (vd: Reforge Fire = đảm bảo có ít nhất 1 fire tag suffix)</td><td>Harvest craft cost</td></tr>
                  <tr><td>4</td><td>Prefix giữ nguyên, chỉ suffix bị reroll. Lặp lại bước 2-3 cho đến khi có suffix mong muốn.</td><td>2 Div mỗi lần</td></tr>
                </tbody>
              </table>
            </div>
            <Tip>
              <B>Harvest Reforge quan trọng:</B><br />
              - <B>Reforge Speed</B>: Đảm bảo 1 speed mod (Attack/Cast/Move Speed suffix)<br />
              - <B>Reforge Caster</B>: Đảm bảo 1 caster mod (Spell Damage, +Gem Level)<br />
              - <B>Reforge Defence</B>: Đảm bảo 1 defence mod (Resist, Armour/Evasion/ES)<br />
              - <B>Reforge more likely/less likely</B>: Tăng/giảm weight mod, nhắm T1 dễ hơn
            </Tip>

            <H3>4.4. Recombinator</H3>
            <P>
              Recombinator cho phép <B>gộp 2 item cùng loại</B> thành 1 item mới, lấy mod từ cả 2.
              Đây là cách <B>tạo item GG nhất</B> nhưng đòi hỏi hiểu biết sâu về mod system.
            </P>
            <H4>Bước thực hiện cơ bản:</H4>
            <div className="overflow-x-auto mb-4">
              <table className="poe-table">
                <thead>
                  <tr><th>Bước</th><th>Hành động</th></tr>
                </thead>
                <tbody>
                  <tr><td>1</td><td><B>Tạo 2 item 1-mod</B>: Dùng Orb of Alteration spam trên 2 base cùng loại, mỗi cái có 1 mod bạn muốn (vd: Item A có T1 %Phys, Item B có T1 Flat Phys)</td></tr>
                  <tr><td>2</td><td><B>Recombine</B>: Kết quả có thể là item 2-mod (có cả 2 mod mong muốn), hoặc mất 1 mod. Tỷ lệ thành công ~50%.</td></tr>
                  <tr><td>3</td><td><B>Tiếp tục layer</B>: Lấy item 2-mod, recombine với item 1-mod khác để có 3-mod item.</td></tr>
                  <tr><td>4</td><td><B>Advanced</B>: Gộp 2 item 2-mod để có 3-4 mod. Gộp 2 item 3-mod để có 4-5 mod. Càng nhiều mod, tỷ lệ thành công càng thấp.</td></tr>
                </tbody>
              </table>
            </div>
            <Warning>
              <B>Quy tắc Recombinator:</B><br />
              - 2 item <B>phải cùng base type</B> (cả 2 là belt, hoặc cả 2 là body armour, v.v.)<br />
              - Mod tier càng cao, cơ hội giữ lại càng thấp<br />
              - iLvl của kết quả = iLvl cao nhất của 2 item đầu vào<br />
              - Có thể &ldquo;nâng cấp&rdquo; iLvl: Recombine item iLvl 84 + item iLvl 86 có 50% cơ hội ra iLvl 86<br />
              - <B>Exclusive mod</B> (vd: Essence mod, Delve mod) có thể giữ lại qua recombination
            </Warning>
          </Section>

          {/* ═══════════════════════════════════════════════════════
              V. BOSS RUSH
             ═══════════════════════════════════════════════════════ */}
          <Section id="boss-rush" num="V" title="Boss Rush Strategy">
            <P>
              Boss farming là cách kiếm currency <B>ổn định và có thể dự đoán</B>.
              Mỗi boss có set fragment riêng, và lợi nhuận phụ thuộc vào <B>tốc độ giết + giá drop hiện tại</B>.
            </P>

            <H3>5.1. Tổng quan lợi nhuận các boss</H3>
            <div className="overflow-x-auto">
              <table className="poe-table">
                <thead>
                  <tr><th>Boss</th><th>Fragment Cần</th><th>Drop Đáng Chú Ý</th><th>Lợi nhuận/giờ (~)</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-poe-gold font-semibold">The Shaper</td>
                    <td>4 Guardian Fragment (Hydra, Phoenix, Minotaur, Chimera)</td>
                    <td>Dying Sun, Shaper&apos;s Touch, Starforge, Shaper item bases</td>
                    <td><Gold>4-8 Divine/giờ</Gold></td>
                  </tr>
                  <tr>
                    <td className="text-poe-gold font-semibold">Uber Elder</td>
                    <td>4 Shaper + 4 Elder Fragment</td>
                    <td>Mark of the Shaper, Watcher&apos;s Eye (<Gold>1-50+ Divine</Gold> tùy mod), Disintegrator</td>
                    <td><Gold>5-15 Divine/giờ</Gold></td>
                  </tr>
                  <tr>
                    <td className="text-poe-gold font-semibold">The Maven</td>
                    <td>10 Maven Splinter = 1 Maven&apos;s Writ</td>
                    <td>Elevated Sextant (trước 3.24), Orb of Conflict, Maven&apos;s Orb, Awakened Support Gem</td>
                    <td><Gold>3-10 Divine/giờ</Gold></td>
                  </tr>
                  <tr>
                    <td className="text-poe-gold font-semibold">Searing Exarch</td>
                    <td>28 Searing Exarch invitations (từ Eldritch map)</td>
                    <td>Exceptional Eldritch Ember/Ichor, Forbidden Flame/Flesh, Eldritch Implicit base</td>
                    <td><Gold>3-8 Divine/giờ</Gold></td>
                  </tr>
                  <tr>
                    <td className="text-poe-gold font-semibold">Eater of Worlds</td>
                    <td>28 Black Star invitations</td>
                    <td>Melding of the Flesh, Ashes of the Stars (<Gold>5-20 Divine</Gold>)</td>
                    <td><Gold>3-10 Divine/giờ</Gold></td>
                  </tr>
                  <tr>
                    <td className="text-poe-gold font-semibold">The Feared (Maven)</td>
                    <td>Maven&apos;s Writ + Cortex/Chayula/Shaper/Elder/Atziri fragment</td>
                    <td>Double Elevated item, Awakened Gem level up</td>
                    <td><Gold>5-20 Divine/giờ</Gold> (cao nhất nếu Watcher&apos;s Eye tốt)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <H3>5.2. Chiến lược tối ưu Boss Rush</H3>
            <ul className="mb-4 space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
                <span><B>Mua fragment bulk:</B> Mua 20-50 set fragment cùng lúc để giảm thời gian trade. Dùng TFT Discord hoặc bulk trade trên poe.trade.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
                <span><B>Build tối ưu:</B> Cần DPS cao (&gt;10M sustained) + survivability. Phổ biến: Detonate Dead, Righteous Fire + Fire Trap, Minion build.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
                <span><B>Tốc độ là tiền:</B> Nếu giết Shaper trong 2 phút (kể cả Guardian map), bạn chạy được <Gold>15-20 set/giờ</Gold>. Nếu mất 5 phút, chỉ được 8-10 set.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
                <span><B>Check loot filter:</B> Một số item cực đắt có thể bị filter ẩn. Tắt filter check sau mỗi boss kill.</span>
              </li>
            </ul>
            <Tip>
              <B>Uber boss:</B> Phiên bản &ldquo;Uber&rdquo; của mỗi boss (dùng Fragment trong map device với keystone &ldquo;Uber&rdquo;)
              có drop rate cao hơn cho rare item nhưng khó hơn rất nhiều.
              <B>Watcher&apos;s Eye</B> từ Uber Elder có 3 mod thay vì 2 &rarr; giá có thể lên <Gold>50-200+ Divine</Gold> cho combo tốt.
            </Tip>
          </Section>

          {/* ═══════════════════════════════════════════════════════
              VI. TRADING TIPS
             ═══════════════════════════════════════════════════════ */}
          <Section id="trading" num="VI" title="Trading Tips &mdash; Định Giá và Mua Bán">
            <P>
              Trading là kỹ năng quan trọng nhất trong PoE (ngoài game). Định giá sai có thể mất hàng chục Divine.
            </P>

            <H3>6.1. Công cụ cần thiết</H3>
            <div className="grid gap-4 sm:grid-cols-2 mb-6">
              <Panel>
                <div className="font-heading text-sm font-bold text-poe-gold mb-2">Awakened PoE Trade</div>
                <ul className="space-y-1 text-sm">
                  <li><B>Phím tắt:</B> Ctrl+D (price check), Ctrl+Alt+D (advanced)</li>
                  <li>Kết nối trực tiếp với poe.trade API</li>
                  <li>Hiển thị giá trung bình, median, và listing hiện tại</li>
                  <li><B>Bắt buộc phải cài</B> &mdash; tool quan trọng nhất cho trader</li>
                </ul>
              </Panel>
              <Panel>
                <div className="font-heading text-sm font-bold text-poe-gold mb-2">poe.ninja</div>
                <ul className="space-y-1 text-sm">
                  <li>Theo dõi giá <B>real-time</B> của tất cả currency, unique, div card</li>
                  <li>Xem build meta &mdash; biết item nào đang được sử dụng nhiều</li>
                  <li>Dùng để định giá nhanh unique item và currency exchange rate</li>
                </ul>
              </Panel>
            </div>

            <H3>6.2. Cách định giá item rare</H3>
            <ul className="mb-4 space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
                <span><B>Bước 1 &mdash; Nhận diện mod tốt:</B> T1 Life (80+), T1 Resist (40+), T1 %ES, T1 Flat Phys, T1 Crit Multi, Open prefix/suffix cho benchcraft</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
                <span><B>Bước 2 &mdash; Search trên trade:</B> Tìm item tương tự với các mod chính. Filter theo: base type, mod range (80-90% của giá trị), total resist, total life</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
                <span><B>Bước 3 &mdash; So sánh:</B> Sắp xếp theo giá từ thấp đến cao. Giá của bạn nên ở khoảng <Gold>top 20-40%</Gold> listing (không thấp nhất, không cao nhất)</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
                <span><B>Bước 4 &mdash; Consider benchcraft:</B> Nếu item có open slot, tính giá với benchcraft tốt nhất. VD: open suffix + benchcraft &ldquo;gain % phys as extra fire&rdquo; tăng giá đáng kể.</span>
              </li>
            </ul>

            <H3>6.3. Những item dễ bỏ qua mà thực ra rất đắt</H3>
            <div className="overflow-x-auto">
              <table className="poe-table">
                <thead>
                  <tr><th>Item Type</th><th>Mod cần tìm</th><th>Giá trị</th></tr>
                </thead>
                <tbody>
                  <tr><td className="text-poe-gold font-semibold">Jewel (rare)</td><td>3-4 mod tốt: Life, Crit Multi, Attack/Cast Speed, %Damage</td><td><Gold>10c - 10 Divine</Gold></td></tr>
                  <tr><td className="text-poe-gold font-semibold">Cluster Jewel</td><td>3 notable tốt (vd: Feed the Fury + Fuel the Fight + Martial Prowess)</td><td><Gold>1-50 Divine</Gold></td></tr>
                  <tr><td className="text-poe-gold font-semibold">Belt với high Life + Resist</td><td>100+ Life, 90+ total resist, open suffix</td><td><Gold>1-20 Divine</Gold></td></tr>
                  <tr><td className="text-poe-gold font-semibold">Amulet với +1 Gem Level</td><td>+1 all skill gems hoặc +1 specific (vd: +1 phys, +1 chaos)</td><td><Gold>1-30 Divine</Gold></td></tr>
                  <tr><td className="text-poe-gold font-semibold">Fractured base</td><td>T1 fractured mod (Life, ES, Resist) trên ilvl 86 base</td><td><Gold>10c - 20 Divine</Gold></td></tr>
                </tbody>
              </table>
            </div>

            <H3>6.4. Mẹo trade nhanh</H3>
            <ul className="mb-4 space-y-2 text-sm">
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span><B>Bán bulk:</B> Gộp Essence, Fossil, Scarab thành lô 10-20 cái, bán bulk luôn giá cao hơn 15-25% so với bán lẻ.</span></li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span><B>Live search:</B> Dùng live search trên poe.trade cho item hiếm (Watcher&apos;s Eye, specific cluster jewel) &mdash; bạn sẽ nhận thông báo khi có item mới list.</span></li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span><B>Currency flipping:</B> Mua currency giá thấp, bán giá cao. VD: Mua Chaos = 0.008 Divine, bán Chaos = 0.009 Divine. Lợi nhuận nhỏ nhưng volume lớn.</span></li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span><B>PoE dùng windowed (borderless):</B> Bắt buộc để Awakened PoE Trade hoạt động.</span></li>
            </ul>
          </Section>

          {/* ═══════════════════════════════════════════════════════
              VII. LEVELING SPEEDRUN
             ═══════════════════════════════════════════════════════ */}
          <Section id="leveling-speed" num="VII" title="Leveling Speedrun Tricks">
            <P>
              Pro player hoàn thành 10 acts trong <B>3-5 giờ</B> (world record ~2 giờ 10 phút bởi Tytykiller).
              Dưới đây là các trick giúp bạn tăng tốc đáng kể.
            </P>

            <H3>7.1. Movement là số 1</H3>
            <ul className="mb-4 space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
                <span>
                  <B>Smoke Mine</B>: Skill quan trọng nhất cho speedrun. Đặt mine &rarr; detonate &rarr; <Gold>teleport đến vị trí mine + 30% movement speed buff</Gold> trong 4 giây.
                  Gán left-click = Detonate Mine để tự động detonate khi click di chuyển.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
                <span><B>Flame Dash</B>: Di chuyển qua terrain, vách ngăn. Có 3 charge, recharge nhanh với quality/gem level.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
                <span><B>Quicksilver Flask</B>: Luôn có ít nhất 1, tốt nhất là 2 Quicksilver Flask khi leveling. +40% movement speed mỗi flask.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
                <span><B>Movement Speed boots</B>: Ưu tiên cập nhật boots với 10-30% MS. Có thể mua từ vendor hoặc craft.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
                <span><B>Second Wind Support</B>: Link với Flame Dash để có thêm 1 charge. Có thể cùng link với Smoke Mine.</span>
              </li>
            </ul>

            <H3>7.2. Vendor Recipe quan trọng khi leveling</H3>
            <div className="overflow-x-auto">
              <table className="poe-table">
                <thead>
                  <tr><th>Recipe</th><th>Nguyên liệu</th><th>Kết quả</th><th>Khi nào dùng</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-poe-gold font-semibold">+1 Fire Gem Wand</td>
                    <td>Magic Wand + Ruby Ring + Orb of Alteration</td>
                    <td>Wand với <Gold>+1 to Level of all Fire Spell Gems</Gold></td>
                    <td>Level 2-12 cho fire caster</td>
                  </tr>
                  <tr>
                    <td className="text-poe-gold font-semibold">+1 Cold Gem Wand</td>
                    <td>Magic Wand + Sapphire Ring + Orb of Alteration</td>
                    <td>Wand với +1 Cold Gems</td>
                    <td>Level 2-12 cho cold caster</td>
                  </tr>
                  <tr>
                    <td className="text-poe-gold font-semibold">+1 Lightning Gem Wand</td>
                    <td>Magic Wand + Topaz Ring + Orb of Alteration</td>
                    <td>Wand với +1 Lightning Gems</td>
                    <td>Level 2-12 cho lightning caster</td>
                  </tr>
                  <tr>
                    <td className="text-poe-gold font-semibold">Physical Weapon</td>
                    <td>Weapon + Rustic Sash + Blacksmith&apos;s Whetstone</td>
                    <td>Weapon với <Gold>40-89% increased Phys Damage</Gold> (tùy rarity sash)</td>
                    <td>Level 1-28 cho melee</td>
                  </tr>
                  <tr>
                    <td className="text-poe-gold font-semibold">Caster Weapon</td>
                    <td>Dagger/Sceptre/Wand + Chain Belt + Blacksmith&apos;s Whetstone</td>
                    <td>Weapon với <Gold>10-39% increased Spell Damage</Gold></td>
                    <td>Level 1-12 cho spell user</td>
                  </tr>
                  <tr>
                    <td className="text-poe-gold font-semibold">Movement Speed Boots</td>
                    <td>Boots (white/blue) + Quicksilver Flask + Orb of Augmentation</td>
                    <td>Boots với <Gold>10% movement speed</Gold></td>
                    <td>Act 1 ngay lập tức</td>
                  </tr>
                  <tr>
                    <td className="text-poe-gold font-semibold">Resistance Ring</td>
                    <td>Iron Ring + color gem (red=Ruby, green=Topaz, blue=Sapphire)</td>
                    <td>Resist ring tương ứng</td>
                    <td>Khi cần resist cho boss</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <H3>7.3. Tips speedrun tổng hợp</H3>
            <ul className="mb-4 space-y-2 text-sm">
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span><B>Không giết tất cả quái:</B> Chỉ giết quái trên đường đi. Level nên bằng hoặc thấp hơn zone level 2-3 level là được.</span></li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span><B>Lay toàn bộ passive point quest:</B> Passive Respec quest có thể bo, nhung passive point quest thi <Gold>bat buoc</Gold>.</span></li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span><B>League start build:</B> Explosive Trap, Poisonous Concoction, SRS, Rolling Magma, Lightning Conduit là các build level nhanh nhat.</span></li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span><B>Skip side content:</B> Không lam Labyrinth khi leveling (tru khi cần Ascendancy node quan trọng). Quay lại sau khi xong Act 10.</span></li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span><B>Waypoint trick:</B> Khi vao zone moi, mo overlay map (Tab) để biet hưởng di. Zone trong PoE có quy luat layout &mdash; exit thường o <Gold>phia đổi dien</Gold> của entrance.</span></li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span><B>Logout macro:</B> Khi choi HC, dùng logout macro để thoat ngay khi gap nguy hiem.</span></li>
            </ul>
          </Section>

          {/* ═══════════════════════════════════════════════════════
              VIII. DEFENSIVE LAYERS
             ═══════════════════════════════════════════════════════ */}
          <Section id="defense" num="VIII" title="Defensive Layers &mdash; Xếp Chồng Phòng Thủ">
            <P>
              Trong PoE, <B>khong có 1 layer phòng thủ nao du</B>. Bạn cần <B>xếp chồng nhiều layers</B> để song sot.
              Các layer chia thành 3 nhom chinh: <B>Avoidance</B> (ne tranh), <B>Mitigation</B> (giam damage), va <B>Recovery</B> (hoi phuc).
            </P>

            <H3>8.1. Armour + Determination</H3>
            <Panel className="mb-4">
              <div className="font-heading text-sm font-bold text-poe-gold mb-2">Armour (Physical Damage Mitigation)</div>
              <ul className="space-y-1 text-sm">
                <li><B>Cong thuc:</B> Physical Damage Reduction = Armour / (Armour + 5 * Raw Physical Damage)</li>
                <li><B>Cap:</B> Toi đã <Gold>90% physical mitigation</Gold> (50% với Imbalanced Guard)</li>
                <li><B>Determination aura:</B> Base +1500 flat armour + <Gold>more armour modifier</Gold>. Với 40k armour, bạn giảm ~66% physical hit 2000 damage, ~50% hit 4000 damage.</li>
                <li><B>Breakpoint:</B> Nham <Gold>30,000-50,000 armour</Gold> cho T16 mapping an toan.</li>
                <li><B>Molten Shell guard skill:</B> Với 30k+ armour, Molten Shell hap thu <Gold>~8,000-10,000 damage</Gold>.</li>
              </ul>
            </Panel>

            <H3>8.2. Evasion + Grace</H3>
            <Panel className="mb-4">
              <div className="font-heading text-sm font-bold text-poe-gold mb-2">Evasion (Attack Avoidance)</div>
              <ul className="space-y-1 text-sm">
                <li><B>Co che:</B> PoE dùng <B>entropy system</B>, không phải pure random. Nếu có 70% evasion, bạn sẽ <Gold>ne chính xác 7/10 hit</Gold>.</li>
                <li><B>Grace aura:</B> Base +2500 flat evasion + <Gold>more evasion modifier</Gold>.</li>
                <li><B>Han che:</B> Evasion <B>khong hoạt động với Spell</B> va <B>khong giảm DoT</B>.</li>
                <li><B>Breakpoint:</B> Nham <Gold>30,000-50,000 evasion</Gold> = ~70-80% chance to evade attacks.</li>
                <li><B>Wind Dancer keystone:</B> -20% evasion nhung giảm 40% damage từ hit đầu tiền sau khi bị hit gan day. Rat mạnh cho evasion build.</li>
              </ul>
            </Panel>

            <H3>8.3. Spell Suppression</H3>
            <Panel className="mb-4">
              <div className="font-heading text-sm font-bold text-poe-gold mb-2">100% Spell Suppression = Bat Buoc</div>
              <ul className="space-y-1 text-sm">
                <li><B>Hieu qua:</B> 100% Chance to Suppress Spell Damage = <Gold>giam 50% damage từ mỗi spell hit</Gold></li>
                <li><B>Nguon:</B> Passive tree (Ranger/Shadow area), suffix trên Dexterity gear, Eldritch implicit</li>
                <li><B>Target:</B> Luon nham <Gold>100% suppression</Gold>. O 80% thi 20% spell hit vẫn deal full damage &rarr; nguy hiem.</li>
                <li><B>Ket hop:</B> Evasion + Spell Suppression là combo <Gold>hoat chinh</Gold> cho Ranger/Shadow build (ne attack, giảm spell).</li>
              </ul>
            </Panel>

            <H3>8.4. Maximum Resistances</H3>
            <Panel className="mb-4">
              <div className="font-heading text-sm font-bold text-poe-gold mb-2">Max Res (Endgame Defense Core)</div>
              <ul className="space-y-1 text-sm">
                <li><B>Default:</B> Max elemental res = 75%. Moi 1% tăng thêm = <Gold>4% less elemental damage taken</Gold> (tuong doi).</li>
                <li><B>VD:</B> Tu 75% &rarr; 80% max res = giảm 20% elemental damage (tu 25% taken xuong 20% taken)</li>
                <li><B>Tu 75% &rarr; 85% max res:</B> Giảm <Gold>40% elemental damage</Gold> tương đổi &mdash; cuc ky manh.</li>
                <li><B>Nguon:</B> Purity of Fire/Ice/Lightning aura (+4-5% max), passive tree, Melding of thể Flesh (+max all res), flask suffix</li>
                <li><B>Melding of thể Flesh:</B> Set tat ca max res = max res thấp nhat. Nếu bạn có 90% max fire res &rarr; tat ca thành 90%. Cần đầu từ lon nhung <Gold>cuc manh</Gold>.</li>
              </ul>
            </Panel>

            <H3>8.5. Các layer bo sung quan trọng</H3>
            <div className="overflow-x-auto">
              <table className="poe-table">
                <thead>
                  <tr><th>Layer</th><th>Cach hoat dong</th><th>Breakpoint/Target</th></tr>
                </thead>
                <tbody>
                  <tr><td className="text-poe-gold font-semibold">Block</td><td>% có hoi block hoàn toàn 1 hit (attack hoac spell)</td><td>Cap <Gold>75%</Gold>. Glancing Blows keystone: x2 block nhung chỉ giảm 65% damage</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Life Recoup</td><td>20-40% damage taken được hoi lai trong 4 giay</td><td>Stack 30-50% &mdash; hoi cuc nhiều sau big hit</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Damage taken as</td><td>Convert physical damage taken thành elemental (vd: Lightning Coil: 30% phys as lightning)</td><td>Ket hop với max res cao để giảm phys damage</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Fortify</td><td>Melee hit stack Fortification (max 20 stack) = <Gold>20% less hit damage taken</Gold></td><td>20 stack = cap</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Petrified Blood</td><td>50% damage từ hit o nua dưới life pool được spread ra 4 giay</td><td>Dung cho Low-Life build (Reserve 50%+ life)</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Guard Skills</td><td>Steelskin/Molten Shell/Immortal Call &mdash; tam thoi hap thu damage</td><td>CWDT level 1 + Immortal Call hoac Manual Molten Shell với high armour</td></tr>
                </tbody>
              </table>
            </div>

            <Tip>
              <B>Combo phòng thủ phổ biến nhất (3.24+):</B><br />
              <Gold>Determination + Grace + Defiance Banner + Spell Suppression 100% + 80%+ max res</Gold><br />
              Đây là &ldquo;golden standard&rdquo; cho hau het build. Anh hưởng ~50% mana reservation nhung cuc ky dang.
              Them Molten Shell (voi 40k+ armour) va bạn gan như bất từ trong T16.
            </Tip>
          </Section>

          {/* ═══════════════════════════════════════════════════════
              IX. FLASK MANAGEMENT
             ═══════════════════════════════════════════════════════ */}
          <Section id="flasks" num="IX" title="Flask Management">
            <P>
              Flask trong PoE là một phan quan trọng của defensive va offensive layer.
              Với <B>5 flask slot</B>, bạn cần chon ky để cover tat ca các tru.
            </P>

            <H3>9.1. Flask Suffix (Ailment Immunity) &mdash; Thu Tu Uu Tien</H3>
            <div className="overflow-x-auto">
              <table className="poe-table">
                <thead>
                  <tr><th>Uu Tien</th><th>Suffix</th><th>Hieu qua</th><th>Tại sao quan trọng</th></tr>
                </thead>
                <tbody>
                  <tr><td>1</td><td className="text-poe-gold font-semibold">of Staunching</td><td>Immune to Bleeding + remove Bleed</td><td>Bleed <Gold>giet ngay lap tuc</Gold> nếu bạn đi chuyen khi bị bleed</td></tr>
                  <tr><td>2</td><td className="text-poe-gold font-semibold">of thể Walrus</td><td>Immune to Freeze + remove Freeze</td><td>Freeze = không đi chuyen được = chet</td></tr>
                  <tr><td>3</td><td className="text-poe-gold font-semibold">of thể Skink</td><td>Immune to Shock + remove Shock</td><td>Shock tăng damage taken 15-50% &mdash; cuc nguy hiem</td></tr>
                  <tr><td>4</td><td className="text-poe-gold font-semibold">of Dousing</td><td>Immune to Ignite + remove Ignite</td><td>Ignite DoT có thể rất cao o endgame</td></tr>
                  <tr><td>5</td><td className="text-poe-gold font-semibold">of thể Owl</td><td>65% reduced Curse effect</td><td>Map curse mod (Vulnerability, Temporal Chains) rất kho chiu</td></tr>
                </tbody>
              </table>
            </div>

            <H3>9.2. Setup Flask Endgame Tieu Chuan</H3>
            <div className="overflow-x-auto">
              <table className="poe-table">
                <thead>
                  <tr><th>Slot</th><th>Flask</th><th>Prefix</th><th>Suffix</th><th>Enchant</th></tr>
                </thead>
                <tbody>
                  <tr><td>1</td><td className="text-poe-gold font-semibold">Divine Life Flask</td><td>Seething/Panicked (instant)</td><td>of Staunching (bleed)</td><td>Used when Life reaches Low</td></tr>
                  <tr><td>2</td><td className="text-poe-gold font-semibold">Granite Flask</td><td>Chemist&apos;s (giam charge)</td><td>of thể Walrus (freeze)</td><td>Used when Charges reach full</td></tr>
                  <tr><td>3</td><td className="text-poe-gold font-semibold">Jade Flask</td><td>Chemist&apos;s</td><td>of thể Skink (shock)</td><td>Used when Charges reach full</td></tr>
                  <tr><td>4</td><td className="text-poe-gold font-semibold">Quicksilver Flask</td><td>Alchemist&apos;s (tang effect)</td><td>of Dousing (ignite)</td><td>Used when Charges reach full</td></tr>
                  <tr><td>5</td><td className="text-poe-gold font-semibold">Diamond/Silver Flask</td><td>Alchemist&apos;s</td><td>of thể Owl (curse)</td><td>Used when Charges reach full</td></tr>
                </tbody>
              </table>
            </div>

            <H3>9.3. Utility Flask cho DPS</H3>
            <ul className="mb-4 space-y-2 text-sm">
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span><B>Diamond Flask:</B> Lucky crit (roll crit chance 2 lan, lay cao hon) &mdash; <Gold>~30-40% more crit effective</Gold></span></li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span><B>Silver Flask:</B> Onslaught (20% attack/cast/movement speed) &mdash; <Gold>huge DPS + movespeed boost</Gold></span></li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span><B>Bottled Faith:</B> Unique Sulphur flask &mdash; Consecrated Ground tăng <Gold>2% base crit + enemies take 10% increased damage</Gold>. Gia <Gold>5-20 Divine</Gold>.</span></li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span><B>Dying Sun:</B> Unique Ruby flask &mdash; +2 projectiles. Cho build projectile (Tornado Shot, LA). Gia <Gold>1-5 Divine</Gold>.</span></li>
            </ul>

            <H3>9.4. Flask Enchantment quan trọng</H3>
            <ul className="mb-4 space-y-2 text-sm">
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span><B>&ldquo;Used when Charges reach full&rdquo;</B> &mdash; Tu động dùng khi đây charge. <Gold>Quan trong nhat</Gold> cho utility flask.</span></li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span><B>&ldquo;Used when you Hit a Rare or Unique Enemy&rdquo;</B> &mdash; Tot cho boss flask.</span></li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span><B>&ldquo;Used when you take a Savage Hit&rdquo;</B> &mdash; Tot cho Life flask phòng thủ.</span></li>
            </ul>
            <Tip>
              <B>Instilling Orb</B> để roll enchant trên flask. <B>Enkindling Orb</B> để tăng effect nhung flask không recharge khi dang active.
              Dung Instilling Orb cho utility flask (auto-use) va Enkindling Orb cho flask mà bạn chỉ cần khi boss fight.
            </Tip>
          </Section>

          {/* ═══════════════════════════════════════════════════════
              X. LEAGUE MECHANIC PROFIT RANKING
             ═══════════════════════════════════════════════════════ */}
          <Section id="league-profit" num="X" title="League Mechanic Profit Ranking">
            <P>
              Không phải mechanic nao cũng loi nhuan như nhau. Duoi đây là bang xep hang dua tren
              <B> trung binh currency/gio</B> với build có clear speed tốt (T16 mapping).
              Gia trị thay đổi tuy league, nhung thu từ tương đổi on dinh.
            </P>

            <H3>10.1. Bang xep hang</H3>
            <div className="overflow-x-auto">
              <table className="poe-table">
                <thead>
                  <tr><th>Tier</th><th>Mechanic</th><th>Currency/gio (~)</th><th>Dau tu</th><th>Ghi chu</th></tr>
                </thead>
                <tbody>
                  <tr><td><Gold>S</Gold></td><td className="text-poe-gold font-semibold">Delirium (juiced)</td><td><Gold>500-2000c+</Gold></td><td>Rat cao</td><td>Can build manh, Delirium Orb dat. Reward scale với juice level.</td></tr>
                  <tr><td><Gold>S</Gold></td><td className="text-poe-gold font-semibold">Expedition</td><td><Gold>300-800c</Gold></td><td>Thap-Trung</td><td>Tujen currency + Logbook = consistent income. Không cần build qua manh.</td></tr>
                  <tr><td><Gold>A</Gold></td><td className="text-poe-gold font-semibold">Essence</td><td><Gold>200-400c</Gold></td><td>Rat thap</td><td>Alch-and-go. Deafening Essence luôn bạn duoc.</td></tr>
                  <tr><td><Gold>A</Gold></td><td className="text-poe-gold font-semibold">Heist (Blueprint)</td><td><Gold>300-700c</Gold></td><td>Thap</td><td>Stacked Deck + raw currency. Cần setup rogue equipment.</td></tr>
                  <tr><td><Gold>A</Gold></td><td className="text-poe-gold font-semibold">Breach (juiced)</td><td><Gold>200-500c</Gold></td><td>Trung</td><td>Breachstone + splinter. Tot hon khi ket hop Delirium.</td></tr>
                  <tr><td><Gold>B</Gold></td><td className="text-poe-gold font-semibold">Legion</td><td><Gold>200-400c</Gold></td><td>Thap-Trung</td><td>Incubator + Timeless Splinter. Cần wide AoE build.</td></tr>
                  <tr><td><Gold>B</Gold></td><td className="text-poe-gold font-semibold">Harbinger</td><td><Gold>150-350c</Gold></td><td>Rat thap</td><td>Ancient Orb + Exalted Shard. On dinh nhung không cao.</td></tr>
                  <tr><td><Gold>B</Gold></td><td className="text-poe-gold font-semibold">Strongbox (Ambush)</td><td><Gold>150-300c</Gold></td><td>Rat thap</td><td>Diviner + Arcanist Strongbox. Ket hop tốt với nhiều mechanic khac.</td></tr>
                  <tr><td><Gold>B</Gold></td><td className="text-poe-gold font-semibold">Ritual</td><td><Gold>150-300c</Gold></td><td>Thap</td><td>Lay currency/item từ Ritual reward. Cần defer item dat.</td></tr>
                  <tr><td><Gold>C</Gold></td><td className="text-poe-gold font-semibold">Betrayal</td><td><Gold>100-250c</Gold></td><td>Setup phuc tap</td><td>Can setup Syndicate board dung. Aisling T4 Veiled Slam rất giá tri.</td></tr>
                  <tr><td><Gold>C</Gold></td><td className="text-poe-gold font-semibold">Metamorph</td><td><Gold>100-200c</Gold></td><td>Thap</td><td>Drop Catalyst (gia trung binh). Tot hon đầu league.</td></tr>
                  <tr><td><Gold>C</Gold></td><td className="text-poe-gold font-semibold">Abyss</td><td><Gold>80-150c</Gold></td><td>Thap</td><td>Stygian Vise + Abyss Jewel. Gia giảm nhanh qua league.</td></tr>
                </tbody>
              </table>
            </div>

            <Tip>
              <B>Nguyen tac chung:</B> Chon 1-2 mechanic chinh, spec Atlas tree <Gold>100% vao do</Gold>.
              Chuyen mon hoa luôn tốt hon dan trai. Nếu bạn choi 3 gio/ngay, chon 1 mechanic va master no.
              Nếu bạn choi 8+ gio/ngay, có thể lam 2 mechanic luan phien.
            </Tip>
          </Section>

          {/* ═══════════════════════════════════════════════════════
              XI. JUICING MAPS
             ═══════════════════════════════════════════════════════ */}
          <Section id="juicing" num="XI" title="Juicing Maps &mdash; Tăng Reward Toi Da">
            <P>
              &ldquo;Juicing&rdquo; là quá trình thêm nhiều modifier va content vao map để <B>tang dang ke loot</B>.
              Tu 3.24, <B>Sextant đã bị xoa</B> va thay thể bang he thong <B>Scarab moi</B> (hang tram loai).
            </P>

            <H3>11.1. Thanh phan juice</H3>
            <div className="overflow-x-auto">
              <table className="poe-table">
                <thead>
                  <tr><th>Thanh phan</th><th>Chi tiet</th><th>Chi phi (~)</th></tr>
                </thead>
                <tbody>
                  <tr><td className="text-poe-gold font-semibold">Map quality + rarity</td><td>Alch map &rarr; Chisel 20% quality &rarr; Vaal (optional, risky). IIQ trên map tăng loot <Gold>tuyen tinh</Gold>.</td><td>1-3c/map</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Scarab (3-4 slots)</td><td>Moi scarab thêm 1 mechanic/buff. Map device có 3 slot (nang cấp len 4-5).</td><td>2-50c/scarab</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Map Device Craft</td><td>Dung Chaos để chon map device mod: Fortune (IIQ), Domination (Shrine), Beyond, etc.</td><td>3-16c/craft</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Fragment (sacrifice/mortal)</td><td>Moi fragment thêm <Gold>5% IIQ</Gold> cho map. 4 fragment = +20% IIQ.</td><td>1-5c/set</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Delirium Orb</td><td>Apply Delirium layer len map (stack len 5). <Gold>Tang không lo so quai va reward</Gold>.</td><td>5-30c/orb x 1-5</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Atlas passive</td><td>Cac node tăng pack size, monster quantity, có hoi spawn mechanic</td><td>Free</td></tr>
                </tbody>
              </table>
            </div>

            <H3>11.2. Scarab Combo theo Budget</H3>
            <H4>Budget (5-15c total/map):</H4>
            <ul className="mb-4 space-y-2 text-sm">
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span>Harbinger Scarab (them Harbinger) + Ambush Scarab (them Strongbox) + Breach Scarab (them Breach)</span></li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span>Thu nhap ky vong: <Gold>~300-500c/gio</Gold></span></li>
            </ul>
            <H4>Mid-tier (20-60c total/map):</H4>
            <ul className="mb-4 space-y-2 text-sm">
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span>Legion Scarab + Breach Scarab + Beyond Scarab + Divination Scarab</span></li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span>Map Device: Fortune (+8% IIQ) hoac Beyond</span></li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span>4 sacrifice fragment (+20% IIQ)</span></li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span>Thu nhap ky vong: <Gold>~800-1200c/gio</Gold></span></li>
            </ul>
            <H4>Full juice (100-300c+ total/map):</H4>
            <ul className="mb-4 space-y-2 text-sm">
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span>5 Delirium Orb (stack 100% Delirium) + 4 Scarab cao cấp + Beyond map device + Fragment</span></li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span>Can build <Gold>rat manh</Gold> (50M+ DPS) để clear duoc. Mon = Beyond boss + Delirium reward + rare mob loot</span></li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span>Thu nhap ky vong: <Gold>~1500-3000c+/gio</Gold> (party play có thể cao hon)</span></li>
            </ul>

            <H3>11.3. Scarab dang chu y (post-3.24 rework)</H3>
            <div className="overflow-x-auto">
              <table className="poe-table">
                <thead>
                  <tr><th>Scarab</th><th>Hieu qua</th><th>Gia tri</th></tr>
                </thead>
                <tbody>
                  <tr><td className="text-poe-gold font-semibold">Divination Scarab of Completion</td><td>Tang có hoi div card drop + bonus khi full stack</td><td>Dat nhung reward cao cho Apothecary/Doctor farming</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Beyond Scarab of thể Invasion</td><td>Tang so luong Beyond monster, mỗi rare kill spawn Beyond portal</td><td>Them loot + exp không lo</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Expedition Scarab of Archaeology</td><td>Dam bao Expedition spawn trong map</td><td>Core cho Expedition farming</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Breach Scarab of Lordship</td><td>Tang có hoi Breachlord spawn trong Breach</td><td>Breachlord drop Blessing + unique</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Delirium Scarab of Delusions</td><td>Random 1-5 Delirium layer mien phi</td><td>Budget Delirium alternative</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Ambush Scarab of Potency</td><td>Strongbox có thêm mod, tăng reward</td><td>Diviner Strongbox = div card bomb</td></tr>
                </tbody>
              </table>
            </div>
          </Section>

          {/* ═══════════════════════════════════════════════════════
              XII. DELVE STRATEGY
             ═══════════════════════════════════════════════════════ */}
          <Section id="delve" num="XII" title="Delve Strategy &mdash; Khai Thac Azurite Mine">
            <P>
              Delve là he thong mine exploration với reward  riêng biet: <B>Fossil, resonator, va rare item</B>.
              Đây là có thể là nguồn thu nhap <B>rat on dinh</B> nếu bạn biet đi đầu va farm gi.
            </P>

            <H3>12.1. Do sau toi uu</H3>
            <ul className="mb-4 space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
                <span><B>Depth 250-350:</B> Sweet spot cho hau het build. Reward tot, đó kho chua qua cao.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
                <span><B>Depth 500+:</B> Reward tăng dang ke, nhung quai có <Gold>huge resist + life scaling</Gold>. Cần build chuyen dung.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
                <span><B>Depth 600-1000:</B> Vung &ldquo;deep delve&rdquo; &mdash; fossil rất nhieu, City biome thường xuyên hon. Chi cho build cuc manh.</span>
              </li>
            </ul>

            <H3>12.2. Node loi nhuan cao nhat</H3>
            <div className="overflow-x-auto">
              <table className="poe-table">
                <thead>
                  <tr><th>Node Type</th><th>Reward</th><th>Gia trị (~)</th></tr>
                </thead>
                <tbody>
                  <tr><td className="text-poe-gold font-semibold">Fossil Node (&ldquo;Contains Fossils&rdquo;)</td><td>2-4 fossil mỗi node. Moi fossil = 1-10c</td><td><Gold>5-40c/node</Gold></td></tr>
                  <tr><td className="text-poe-gold font-semibold">City Biome (Abyssal City, Vaal City)</td><td>Boss drop unique + rare fossil. Side room có nhiều chest.</td><td><Gold>50-200c/city</Gold></td></tr>
                  <tr><td className="text-poe-gold font-semibold">&ldquo;Contains Minion or Aura Items&rdquo;</td><td>Co thể drop item giá trị cao, đặc biệt đầu league</td><td><Gold>20-100c</Gold></td></tr>
                  <tr><td className="text-poe-gold font-semibold">&ldquo;Contains Chaos Items&rdquo;</td><td>Chaos-related unique/item</td><td>10-50c</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Smuggler&apos;s Stash</td><td>Currency + fossil lon</td><td><Gold>50-100c</Gold></td></tr>
                </tbody>
              </table>
            </div>

            <H3>12.3. Biome ưu tien</H3>
            <ul className="mb-4 space-y-2 text-sm">
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span><B>Fungal Caverns:</B> Drop <Gold>Hollow Fossil</Gold> (5-15c) va Dense Fossil</span></li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span><B>Petrified Forest:</B> Drop <Gold>Pristine + Jagged Fossil</Gold> &mdash; luôn có giá tri</span></li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span><B>Sulphur Vents:</B> Drop <Gold>Scorched + Frigid Fossil</Gold></span></li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span><B>Magma Fissure:</B> Fossil output cao</span></li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span><B>Abyssal Depths:</B> Boss + City node &mdash; <Gold>gia trị cao nhat</Gold></span></li>
            </ul>

            <H3>12.4. Dark Farming (Advanced)</H3>
            <P>
              Dark farming là kỹ thuật đi ra ngoai vung sang của Crawler để <B>thu thấp fossil va chest trong bong toi</B>.
            </P>
            <ul className="mb-4 space-y-2 text-sm">
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span><B>Can:</B> Phasing (di xuyên qua quai), movement speed cao (200%+), Darkness Resistance (flare + node)</span></li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span><B>Cach lam:</B> Chay path, dùng flare để thấp sang tam, nhanh chong mo chest roi chay tiep.</span></li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span><B>Build:</B> Pathfinder với Phase Run, Quicksilver Flask, va Darkness Resistance trên Sulphite node.</span></li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span><B>Thu nhap:</B> Có thể đạt <Gold>300-600c/gio</Gold> o depth 300+ chỉ từ fossil va chest.</span></li>
            </ul>
            <Warning>
              <B>Lưu ý:</B> Dark farming cần thuc hanh nhieu. Chet trong darkness = mat tat ca loot chua pick up.
              Cần đầu từ Sulphite (tu Niko mission va Scarab) để có thể delve lien tuc.
            </Warning>

            <H3>12.5. Route planning</H3>
            <ul className="mb-4 space-y-2 text-sm">
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span><B>Uu tiền 1:</B> Tim City biome gan nhất (dac biet có boss node)</span></li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span><B>Uu tiền 2:</B> Specialty node (&ldquo;Contains Minion Items&rdquo;, &ldquo;Contains Fossils&rdquo;)</span></li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span><B>Uu tiền 3:</B> Di qua biome tốt (Fungal Caverns, Petrified Forest) va nhất T3 Azurite, Currency, Atlas node doc duong</span></li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span><B>Di ngang (lateral):</B> O depth toi ưu (300-500), đi ngang để quet nhiều node thay vì đi xuong sau them.</span></li>
            </ul>
          </Section>

          {/* ═══════════════════════════════════════════════════════
              XIII. HEIST BLUEPRINTS
             ═══════════════════════════════════════════════════════ */}
          <Section id="heist" num="XIII" title="Heist Blueprints &mdash; Grand Heist Farming">
            <P>
              Heist là nguồn thu nhap <B>on dinh bac nhat</B> trong game, đặc biệt cho player không thich mapping.
              Grand Heist (Blueprint) cho reward cao hon nhiều so với Contract thuong.
            </P>

            <H3>13.1. Loại Blueprint loi nhuan cao nhat</H3>
            <div className="overflow-x-auto">
              <table className="poe-table">
                <thead>
                  <tr><th>Blueprint Target</th><th>Reward</th><th>Loi nhuan/run (~)</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-poe-gold font-semibold">Replicas / Experimented Items</td>
                    <td>Replica unique item (Replica Farrul&apos;s Fur, Replica Headhunter, etc.)</td>
                    <td><Gold>5-50c</Gold> (RNG vao rare replica)</td>
                  </tr>
                  <tr>
                    <td className="text-poe-gold font-semibold">Gems (Unusual / Quality)</td>
                    <td>Alternate quality gems, có thể drop <Gold>Awakened gem</Gold></td>
                    <td><Gold>10-200c</Gold> (Awakened gem = jackpot)</td>
                  </tr>
                  <tr>
                    <td className="text-poe-gold font-semibold">Currency / Deception</td>
                    <td>Stacked Deck, raw currency, Exalted Orb</td>
                    <td><Gold>15-50c</Gold> (on dinh nhat)</td>
                  </tr>
                  <tr>
                    <td className="text-poe-gold font-semibold">Enchanted Armaments</td>
                    <td>Enchanted item, enchanted base (co thể có lab enchant)</td>
                    <td>5-30c</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <H3>13.2. Reveal Strategy</H3>
            <ul className="mb-4 space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
                <span><B>Khong cần reveal het:</B> Moi Blueprint đã có 1 wing revealed san. Reveal thêm wing ton Rogue&apos;s Marker va thời gian &mdash; thường không dang.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
                <span><B>Giam giá reveal:</B> Dung <B>Gianna</B> (rogue) trong Contract <B>Deception</B> để nhân <Gold>40% giảm giá reveal</Gold>.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
                <span><B>Khi nao nên reveal:</B> Chi reveal wing 2 nếu Blueprint có <Gold>reward room rất tot</Gold> (Currency room, Gem room). Tính toan: reveal cost vs expected reward.</span>
              </li>
            </ul>

            <H3>13.3. Trinket Farming</H3>
            <P>
              Trinket là trang bị đặc biệt <B>chi hoạt động trong Heist</B>. Chung luôn drop <B>corrupted</B> từ Grand Heist.
            </P>
            <H4>Mod trinket đạt nhat:</H4>
            <div className="overflow-x-auto">
              <table className="poe-table">
                <thead>
                  <tr><th>Mod</th><th>Hieu qua</th><th>Gia trị (~)</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-poe-gold font-semibold">1% Chaos &rarr; Divine</td>
                    <td>1% có hoi Chaos Orb drop thành <Gold>Divine Orb</Gold> trong Heist</td>
                    <td><Gold>10-50 Divine</Gold></td>
                  </tr>
                  <tr>
                    <td className="text-poe-gold font-semibold">3% Regal &rarr; Divine</td>
                    <td>3% có hoi Regal Orb drop thành Divine Orb</td>
                    <td><Gold>5-20 Divine</Gold></td>
                  </tr>
                  <tr>
                    <td className="text-poe-gold font-semibold">3% Basic Currency Duplicated</td>
                    <td>3% có hoi currency drop được nhân doi</td>
                    <td>5-15 Divine</td>
                  </tr>
                  <tr>
                    <td className="text-poe-gold font-semibold">Rogue&apos;s Marker Duplicate</td>
                    <td>10% có hoi Smuggler&apos;s Cache duplicate Rogue&apos;s Marker</td>
                    <td>1-5 Divine</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Tip>
              <B>Trinket farming tip:</B> Trinket drop corrupted nên <B>khong thể craft</B> binh thuong.
              Có thể dùng <B>Tainted currency</B> (Tainted Orb of Fusing, etc.) để modify.
              Nếu drop trinket với mod &ldquo;1% Chaos &rarr; Divine&rdquo;, giữ no va farm Heist liên tục &mdash;
              mỗi Heist run sẽ có khoảng 30-50 Chaos Orb drop, 1% = trung binh <Gold>1 Divine mỗi 2-3 run</Gold>.
            </Tip>

            <H3>13.4. Rogue toi uu</H3>
            <div className="overflow-x-auto">
              <table className="poe-table">
                <thead>
                  <tr><th>Rogue</th><th>Job</th><th>Dung cho</th></tr>
                </thead>
                <tbody>
                  <tr><td className="text-poe-gold font-semibold">Gianna</td><td>Deception</td><td><Gold>Giam 40% reveal cost</Gold>. Dung trong Contract để nhân discount.</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Karst</td><td>Lockpicking</td><td>Mo chest nhanh nhat. Uu tiền cho Blueprint với nhiều locked chest.</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Niles</td><td>Counter-Thaumaturgy</td><td>Vo hiệu hoa phep. Tot cho Blueprint với nhiều trap.</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Vinderi</td><td>Demolition</td><td><Gold>Co hoi duplicate</Gold> reward từ chest. Cuc ky giá trị cho Blueprint.</td></tr>
                </tbody>
              </table>
            </div>

            <H3>13.5. Tips toi ưu Heist</H3>
            <ul className="mb-4 space-y-2 text-sm">
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span><B>Scour Blueprint rare/magic:</B> Additional rarity/mods trên Blueprint <B>khong tăng reward</B> nhung lam Blueprint kho hon. Luon Scour ve normal.</span></li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span><B>Toc đó là tien:</B> Chay nhanh nhất có the. Mo chest, lay reward, chay ra. Không cần giet het quai.</span></li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span><B>Contract farming cho marker:</B> Chay Contract Deception (nhanh nhat) để kiem Rogue&apos;s Marker nuoi Blueprint.</span></li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span><B>Stacked Deck:</B> Da so loi nhuan từ Heist là Stacked Deck. <Gold>Mo het</Gold> (don&apos;t sell sealed) vì expected value khi mo cao hon bạn sealed.</span></li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span><B>Rogue equipment:</B> Nang cấp gear cho Rogue (tang reduced alert, toc đó job). Moi upgrade giảm thời gian chay dang ke.</span></li>
            </ul>
          </Section>

          {/* ═══════════════════════════════════════════════════════
              LOI KET
             ═══════════════════════════════════════════════════════ */}
          <section className="scroll-mt-20 border-t border-poe-border pt-16">
            <h2 className="section-title mb-8 text-center font-heading text-2xl font-bold text-poe-text-bright sm:text-3xl">
              Loi Ket
            </h2>
            <div className="mt-4 rounded-lg border border-poe-gold/20 bg-poe-gold/5 p-6 text-center">
              <p className="font-heading text-sm leading-relaxed text-poe-text">
                <Gold>Path of Exile endgame là noi mà mỗi quyet dinh nhờ đều ảnh hưởng den loi nhuan.</Gold>
                <br />
                Chon 1-2 strategy chinh, master no, roi mo rộng dan. Không có &ldquo;best strategy&rdquo; tuyet đổi &mdash;
                chỉ có strategy phu hop với build, thời gian choi, va market hien tai của ban.
                <br /><br />
                <B>Nguon tham khao:</B> Maxroll.gg, poe-vault.com, poe.ninja, craftofexile.com, poewiki.net
              </p>
            </div>
          </section>

        </div>

        {/* Footer */}
        <footer className="border-t border-poe-border px-6 py-8 text-center text-xs text-poe-text-dim">
          <p>
            Path of Exile is a registered trademark of Grinding Gear Games.
            This is an unofficial fan guide.
          </p>
        </footer>
      </main>
    </>
  );
}
