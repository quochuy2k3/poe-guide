import type { Metadata } from "next";
import Link from "next/link";
import { Section, Panel, Tip, Warning, H3, H4, P, B, Gold } from "@/components/ui";

export const metadata: Metadata = {
  title: "Path of Exile 1 — Endgame Strategy Guide (Pro)",
  description:
    "Huong dan endgame chi tiet cho pro player: Atlas strategy, map farming, currency farming, crafting, boss rush, trading, juicing, Delve, Heist va nhieu hon.",
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
              Danh cho Pro Player
            </p>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-poe-text-dim">
              13 chuong chi tiet ve Atlas, Map Farming, Currency, Crafting, Boss
              Rush, Trading, Leveling Speedrun, Defense, Flasks, League Mechanic
              Profit, Juicing, Delve va Heist. Day du con so, vi du cu the.
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
              Atlas passive tree la co che cho phep ban <B>chuyen mon hoa endgame</B> theo huong choi cua minh.
              Voi 132 diem (sau khi hoan thanh toan bo Atlas), ban can phan bo thong minh de toi uu hoa loi nhuan.
              Duoi day la cac strategy pho bien nhat cho pro player.
            </P>

            <H3>1.1. Essence Rushing</H3>
            <P>
              Essence la mot trong nhung mechanic <B>on dinh nhat de kiem currency</B> vi khong can dau tu nhieu va reward chac chan.
              Moi map co the spawn 1-2 cum Essence monster. Voi atlas node dung, ban co the tang so luong va tier cua chung.
            </P>
            <H4>Cac node quan trong:</H4>
            <ul className="mb-4 space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
                <span><B>Prolific Essence</B> &mdash; Tang 100% co hoi xuat hien Essence monster trong map. Day la node <Gold>uu tien so 1</Gold>.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
                <span><B>Crystal Resonance</B> &mdash; Essence monster co them 1 Essence bonus. Giup ban nhan 3 Essence thay vi 2 moi cum.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
                <span><B>Amplified Energies</B> &mdash; Co hoi Essence duoc nang cap 1 tier. Deafening Essence ban duoc 5-15c moi cai.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
                <span><B>Imprisoned Monsters have ...</B> &mdash; Cac node nho tang so Essence tren moi monster, giup ban co 4 Essence cung luc.</span>
              </li>
            </ul>
            <Tip>
              <B>Pro tip:</B> Deafening Essence of Contempt (flat phys), Zeal (attack speed), va Loathing (socketed gems mana cost) luon co gia cao.
              Trung binh moi map T16 voi full Essence spec cho ban khoang <Gold>8-15 Chaos raw value</Gold> tu Essence.
              Chay 20-25 map/gio = <Gold>200-350c/gio</Gold> chi rieng tu Essence.
            </Tip>

            <H3>1.2. Harbinger Stacking</H3>
            <P>
              Harbinger la mechanic pha them <B>nhieu Harbinger pack</B> vao map. Chung drop Harbinger currency shards (Exalted Shard, Ancient Shard, Annulment Shard, etc.)
              va dac biet la <B>Ancient Orb</B> dung de gamble unique item.
            </P>
            <H4>Cac node quan trong:</H4>
            <ul className="mb-4 space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
                <span><B>Secrets of the Stones</B> &mdash; Harbinger trong map drop them shards. Trung binh them 30-50% gia tri loot.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
                <span><B>Ominous Arrival</B> &mdash; Tang 100% co hoi Harbinger xuat hien. Day la gateway node bat buoc.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
                <span><B>The Herald</B> &mdash; Boss map co the la Harbinger boss, drop nhieu shards rat co gia tri.</span>
              </li>
            </ul>
            <P>
              Harbinger dac biet manh khi ket hop voi <B>map co open layout</B> (City Square, Strand, Dunes) vi ban can clear nhanh cac wave.
              Thu nhap trung binh khoang <Gold>150-300c/gio</Gold> tuy vao gia Ancient Orb va Exalted Shard tren market.
            </P>

            <H3>1.3. Expedition Farming</H3>
            <P>
              Expedition la mot trong nhung mechanic <B>loi nhuan cao nhat</B> trong game, dac biet la voi Tujen (raw currency)
              va Gwennen (gamble chase unique nhu Headhunter va Mageblood).
            </P>
            <H4>Atlas spec chinh:</H4>
            <ul className="mb-4 space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
                <span><B>Buried Knowledge</B> &mdash; 100% co hoi Expedition xuat hien trong map.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
                <span><B>Extreme Archaeology</B> &mdash; Tang 80% dien tich Expedition &rarr; nhieu quai hon, nhieu reward hon.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
                <span><B>Logbook nodes</B> &mdash; Tang co hoi drop Logbook. Logbook iLvl 83+ ban duoc <Gold>30-80c</Gold> moi cuon tuy loai.</span>
              </li>
            </ul>
            <Warning>
              <B>Luu y:</B> Expedition monster co the co mod <B>block stacking</B> rat cao (immune to damage types).
              Can build voi nhieu loai damage hoac dung raw DoT (Righteous Fire, Poison, Ignite) de bypass.
              Attack build thuan cung OK nhung can chon remnant can than.
            </Warning>
            <H4>Vendor strategy:</H4>
            <div className="overflow-x-auto">
              <table className="poe-table">
                <thead>
                  <tr><th>Vendor</th><th>Chuc nang</th><th>Loi nhuan</th></tr>
                </thead>
                <tbody>
                  <tr><td className="text-poe-gold font-semibold">Tujen</td><td>Mua raw currency (Chaos, Exalted, Stacked Deck...)</td><td><Gold>Cao nhat</Gold> &mdash; haggle 60-70% gia de hoi</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Rog</td><td>Craft rare item tot voi gia re</td><td>Cao dau league (market chua saturated)</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Gwennen</td><td>Gamble unique item</td><td>RNG cao nhung co the trung <Gold>Mageblood/HH</Gold></td></tr>
                  <tr><td className="text-poe-gold font-semibold">Dannig</td><td>Doi artifact giua cac vendor, mua Logbook</td><td>Utility &mdash; convert artifact du thanh Tujen artifact</td></tr>
                </tbody>
              </table>
            </div>
            <Tip>
              <B>Pro tip Tujen:</B> Khi haggle, bat dau offer <Gold>60-70%</Gold> gia goc cua Tujen. Neu reject, tang len 5-10%.
              Voi Tujen artifact tu khoang 20-30 Expedition encounter, ban co the kiem duoc <Gold>1-3 Divine Orb</Gold> gia tri raw currency.
            </Tip>

            <H3>1.4. Breach Stacking</H3>
            <P>
              Breach mang den <B>mat do quai cuc cao</B> trong thoi gian ngan, drop Breach splinter va Breachstone.
              Breachstone (dac biet la Chayula) co gia tri cao &mdash; Pure Chayula Breachstone co the ban <Gold>50-120c</Gold>.
            </P>
            <ul className="mb-4 space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
                <span><B>Flash Breach</B> &mdash; Breach open/close nhanh hon, tang toc do farm.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
                <span><B>Breach nodes cluster</B> &mdash; Tang so Breach per map len 2-3, moi Breach co nhieu quai hon.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
                <span>Ket hop voi <B>Beyond</B> va <B>Delirium</B> de tao mat do quai khong lo &rarr; exp cuc nhanh va nhieu loot.</span>
              </li>
            </ul>

            <H3>1.5. Strategy tong hop &mdash; Skeleton Tree</H3>
            <P>
              Nhieu pro player khong spec 100% vao 1 mechanic ma dung <B>Skeleton Tree</B> &mdash; lay cac node quan trong nhat cua 3-4 mechanic:
            </P>
            <ul className="mb-4 space-y-2 text-sm">
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span>Essence (Prolific + Crystal Resonance)</span></li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span>Strongbox (Ambush nodes &mdash; Arcanist va Diviner Strongbox)</span></li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span>Shrine (Domination &mdash; buff damage va movespeed)</span></li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span>Map sustain (Kirac nodes, Singular Focus / Wandering Path keystone)</span></li>
            </ul>
            <Tip>
              <B>Wandering Path</B> keystone: Tat ca small atlas node co <Gold>hieu qua x3</Gold>, nhung tat ca notable/keystone khac bi vo hieu hoa.
              Rat manh cho generic mapping, tang quantity va pack size tu small node.
              <br /><br />
              <B>Singular Focus</B>: Map khong co trong favourite list bi convert thanh map currency. Giup sustain map favourite <Gold>100%</Gold>.
            </Tip>
          </Section>

          {/* ═══════════════════════════════════════════════════════
              II. MAP FARMING
             ═══════════════════════════════════════════════════════ */}
          <Section id="map-farming" num="II" title="Map Farming &mdash; Chon Map Tot Nhat">
            <P>
              Khong phai map nao cung nhu nhau. <B>Layout, divination card, va mob density</B> quyet dinh loi nhuan.
              Duoi day la cac map tot nhat cho tung strategy cu the.
            </P>

            <H3>2.1. Tower &mdash; Farm The Nurse / The Doctor</H3>
            <Panel>
              <div className="font-heading text-sm font-bold text-poe-gold mb-2">Tower Map (T16)</div>
              <ul className="space-y-1 text-sm">
                <li><B>Divination Card:</B> The Nurse (8 cards = 1 Doctor = 1 Headhunter)</li>
                <li><B>Layout:</B> Linear, tower-style, de navigate. Mob density trung binh-kha.</li>
                <li><B>Strategy:</B> Ket hop Divination Scarab + Strongbox scarab + quan Atlas Divination nodes</li>
                <li><B>Expected:</B> ~1 Nurse card moi 50-100 map (tuy IIQ va scarab). Gia Nurse card ~ <Gold>30-80c</Gold> tuy league.</li>
                <li><B>Favourite:</B> Set Tower lam favourite x3 de chi drop Tower khi chay T16.</li>
              </ul>
            </Panel>

            <H3>2.2. Crimson Temple &mdash; Farm The Apothecary</H3>
            <Panel>
              <div className="font-heading text-sm font-bold text-poe-gold mb-2">Crimson Temple (T16)</div>
              <ul className="space-y-1 text-sm">
                <li><B>Divination Card:</B> The Apothecary (5 cards = 1 Mageblood, gia <Gold>50-200 Divine moi set</Gold>)</li>
                <li><B>Layout:</B> Phuc tap hon Tower nhung reward cuc cao.</li>
                <li><B>Drop rate uo tinh:</B> ~1 Apothecary moi <Gold>60-150 map</Gold> voi full juice. Moi card gia <Gold>10-40 Divine</Gold>.</li>
                <li><B>Strategy:</B> Can juice map manh (Scarab, Delirium, Beyond) de tang so luong quai. Dung <B>Singular Focus</B> de dam bao chi drop Crimson Temple.</li>
                <li><B>Ket hop:</B> Seven Years Bad Luck (Mirror Shard) cung drop o day.</li>
              </ul>
            </Panel>
            <Warning>
              <B>Canh bao:</B> Farm Apothecary la <B>high variance</B> &mdash; co the chay 200 map khong thay card nao,
              hoac may man drop 2 card trong 50 map. Chi nen farm khi da co du von va build manh.
            </Warning>

            <H3>2.3. Dunes / Strand &mdash; Legion Farming</H3>
            <Panel>
              <div className="font-heading text-sm font-bold text-poe-gold mb-2">Dunes / Strand (T16)</div>
              <ul className="space-y-1 text-sm">
                <li><B>Dac diem:</B> Open layout, phang, khong co obstacle &rarr; <Gold>perfect cho Legion</Gold></li>
                <li><B>Tai sao:</B> Legion monolith can ban pha het tat ca mob trong 7 giay. Map phang = hit nhieu mob nhat.</li>
                <li><B>Scarab:</B> Legion Scarab (them monolith) + Breach/Beyond Scarab (them quai general)</li>
                <li><B>Thu nhap:</B> Legion drop Incubator, Timeless Splinter (dac biet Maraketh va Legion), raw currency. Khoang <Gold>200-400c/gio</Gold>.</li>
                <li><B>Build tot:</B> Tornado Shot, Lightning Arrow, Kinetic Blast &mdash; can wide AoE de 1-shot Legion.</li>
              </ul>
            </Panel>

            <H3>2.4. Cac map dang chu y khac</H3>
            <div className="overflow-x-auto">
              <table className="poe-table">
                <thead>
                  <tr><th>Map</th><th>Div Card</th><th>Dac diem</th></tr>
                </thead>
                <tbody>
                  <tr><td className="text-poe-gold font-semibold">Burial Chambers</td><td>The Doctor (8 = Headhunter)</td><td>Drop rate thap nhung moi card = <Gold>6-12 Divine</Gold></td></tr>
                  <tr><td className="text-poe-gold font-semibold">Cemetery</td><td>The Brother&apos;s Stash (5 = 5 Exalted)</td><td>Open layout, tot cho general farming</td></tr>
                  <tr><td className="text-poe-gold font-semibold">City Square</td><td>Khong co card dac biet</td><td>Layout cuc tot cho Harbinger + Breach (small dense map)</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Jungle Valley</td><td>The Wind</td><td>Open layout tot cho speed farming</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Underground Sea</td><td>The Cheater / Abandoned Wealth</td><td>Mob density cao, linear layout, tot cho Delirium</td></tr>
                </tbody>
              </table>
            </div>
          </Section>

          {/* ═══════════════════════════════════════════════════════
              III. CURRENCY FARMING
             ═══════════════════════════════════════════════════════ */}
          <Section id="currency-farming" num="III" title="Currency Farming Methods">
            <P>
              Currency farming trong PoE co nhieu cap do dau tu. Duoi day la cac phuong phap pho bien,
              sap xep theo muc dau tu tu thap den cao.
            </P>

            <H3>3.1. Chaos Recipe (Budget &mdash; 0 dau tu)</H3>
            <Panel>
              <ul className="space-y-1 text-sm">
                <li><B>Cach lam:</B> Thu thap 1 full set rare item (ilvl 60-74): weapon, helm, body, gloves, boots, belt, 2 ring, amulet</li>
                <li><B>Ban cho vendor:</B> = <Gold>2 Chaos Orb</Gold> (unidentified) hoac 1 Chaos (identified)</li>
                <li><B>Toc do:</B> ~50-80c/gio neu dung quad stash tab va loot filter rieng</li>
                <li><B>Khi nao dung:</B> <Gold>Ngay 1-3 cua league</Gold> khi gia Chaos cao nhat so voi Divine</li>
              </ul>
            </Panel>

            <H3>3.2. Essence Farming (Low Investment)</H3>
            <P>
              Nhu da noi o phan Atlas, Essence farming cho thu nhap <Gold>200-350c/gio</Gold> voi chi can atlas spec va alch-and-go.
              Deafening Essence co gia tu 3-15c/cai tuy loai. Ban bulk (10+ moi loai) de ban nhanh hon.
            </P>

            <H3>3.3. Expedition Farming (Medium Investment)</H3>
            <P>
              Chay map voi Expedition spec + Expedition Scarab. Thu thap artifact &rarr; doi qua Tujen de lay raw currency.
              Logbook iLvl 83+ la main money maker. Thu nhap khoang <Gold>300-600c/gio</Gold> neu ban logbook va doi Tujen hieu qua.
            </P>

            <H3>3.4. MF (Magic Find) Gear</H3>
            <P>
              MF build stack <B>Increased Item Quantity (IIQ)</B> va <B>Increased Item Rarity (IIR)</B> de tang so luong va chat luong loot.
            </P>
            <H4>Gear bat buoc cho MF:</H4>
            <div className="overflow-x-auto">
              <table className="poe-table">
                <thead>
                  <tr><th>Item</th><th>Stats</th><th>Gia (~)</th></tr>
                </thead>
                <tbody>
                  <tr><td className="text-poe-gold font-semibold">Ventor&apos;s Gamble</td><td>10% IIQ, 40-50% IIR, + elemental res</td><td><Gold>5-50 Divine</Gold> (tuy roll)</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Goldwyrm</td><td>20% IIQ</td><td>5-20c</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Greed&apos;s Embrace</td><td>15% IIQ, 50% IIR</td><td>1-5c</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Sadima&apos;s Touch</td><td>12-16% IIQ</td><td>1-5c</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Bisco&apos;s Collar</td><td>50-100% IIQ cho normal monsters</td><td>5-30c</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Divination Distillate</td><td>18% IIQ, 60% IIR (flask)</td><td>1c</td></tr>
                </tbody>
              </table>
            </div>
            <Tip>
              <B>IIQ target:</B> Nham <Gold>80-120% IIQ</Gold> va <Gold>200-350% IIR</Gold> tong cong.
              Qua 120% IIQ, diminishing returns bat dau. IIR anh huong den do hiem nhung <B>khong anh huong den currency drop</B> &mdash;
              chi IIQ moi tang so luong currency drop.
            </Tip>

            <H3>3.5. Party Play vs Solo</H3>
            <P>
              Party play trong PoE <B>tang dang ke loot</B>:
            </P>
            <ul className="mb-4 space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
                <span>Moi player them trong party (sau nguoi thu 1) tang khoang <Gold>+50% item quantity</Gold> va <Gold>+25% item rarity</Gold> (additive voi monster/area bonus, <B>multiplicative</B> voi player bonus).</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
                <span>Party 6 nguoi = <Gold>+250% IIQ</Gold> bonus tu party mechanic.</span>
              </li>
            </ul>
            <H4>Cau hinh party toi uu:</H4>
            <div className="overflow-x-auto">
              <table className="poe-table">
                <thead>
                  <tr><th>Role</th><th>Nhiem vu</th><th>Build pho bien</th></tr>
                </thead>
                <tbody>
                  <tr><td className="text-poe-gold font-semibold">Carry / DPS</td><td>Clear map cuc nhanh</td><td>Tornado Shot, Kinetic Blast, Lightning Arrow</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Aurabot</td><td>Stack aura buff cho ca party (15+ aura)</td><td>Guardian / Necromancer aurabot</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Cursebot</td><td>Apply curse giam resist, tang damage taken</td><td>Occultist curse stacker</td></tr>
                  <tr><td className="text-poe-gold font-semibold">MF Culler</td><td>Last-hit boss/rare voi MF gear + Culling Strike</td><td>Bao nhieu IIQ/IIR co the stack</td></tr>
                </tbody>
              </table>
            </div>
            <P>
              Party play co the dat <Gold>2000-5000c/gio</Gold> (chia cho 4-6 nguoi) voi juice maps cuc cao.
              So voi solo ~<Gold>300-800c/gio</Gold>, party play hieu qua hon nhung can coordination.
            </P>
          </Section>

          {/* ═══════════════════════════════════════════════════════
              IV. CRAFTING GUIDE
             ═══════════════════════════════════════════════════════ */}
          <Section id="crafting" num="IV" title="Crafting Guide Chi Tiet">
            <P>
              Crafting la cach de tao ra item manh nhat trong game. PoE co nhieu phuong phap craft,
              moi cach co uu/nhuoc rieng. Duoi day la huong dan tung buoc cho cac phuong phap pho bien nhat.
            </P>

            <H3>4.1. Essence Crafting</H3>
            <P>
              Essence <B>dam bao 1 mod cu the</B> khi su dung tren item, dong thoi reroll tat ca mod khac (giong Chaos Orb nhung co 1 guaranteed mod).
            </P>
            <H4>Buoc thuc hien &mdash; Vi du: Craft body armour voi +Life cao</H4>
            <div className="overflow-x-auto mb-4">
              <table className="poe-table">
                <thead>
                  <tr><th>Buoc</th><th>Hanh dong</th><th>Chi phi (~)</th></tr>
                </thead>
                <tbody>
                  <tr><td>1</td><td>Mua item base iLvl 86+ (vd: Vaal Regalia ES base hoac Astral Plate armour base)</td><td>5-20c</td></tr>
                  <tr><td>2</td><td>Dung <B>Deafening Essence of Greed</B> (T1 Life: +120 max life) spam cho den khi co prefix/suffix phu hop</td><td>5-15c/lan x 20-50 lan = <Gold>100-750c</Gold></td></tr>
                  <tr><td>3</td><td>Neu co 2 prefix tot (Life + 1 prefix khac), craft &quot;Prefixes Cannot be Changed&quot; (2 Divine) roi dung Orb of Scouring de xoa suffix</td><td>2 Divine</td></tr>
                  <tr><td>4</td><td>Benchcraft suffix mong muon (vd: +resist, +craft mod)</td><td>Varies</td></tr>
                </tbody>
              </table>
            </div>

            <H3>4.2. Fossil Crafting</H3>
            <P>
              Fossil duoc dung kem <B>Resonator</B>. Moi fossil <B>tang/giam trong so (weight)</B> cua cac mod co tag tuong ung.
              Khong dam bao mod cu the nhung co the <B>block mod khong mong muon</B>.
            </P>
            <H4>Buoc thuc hien &mdash; Vi du: Craft Physical DPS weapon</H4>
            <div className="overflow-x-auto mb-4">
              <table className="poe-table">
                <thead>
                  <tr><th>Buoc</th><th>Hanh dong</th></tr>
                </thead>
                <tbody>
                  <tr><td>1</td><td>Mua weapon base iLvl 83+ (vd: Exquisite Blade, Vaal Axe)</td></tr>
                  <tr><td>2</td><td>Dung <B>Jagged Fossil</B> (tang weight Physical mod) + <B>Corroded Fossil</B> (block Elemental/Chaos mod) trong <B>Prime Resonator</B> (2 socket)</td></tr>
                  <tr><td>3</td><td>Spam cho den khi hit T1-T2 %Phys + T1-T2 Flat Phys + Hybrid Phys</td></tr>
                  <tr><td>4</td><td>Benchcraft Attack Speed hoac Crit nhu suffix cuoi</td></tr>
                </tbody>
              </table>
            </div>
            <P>
              <B>Fossil pho bien va cong dung:</B>
            </P>
            <div className="overflow-x-auto">
              <table className="poe-table">
                <thead>
                  <tr><th>Fossil</th><th>Tang</th><th>Giam/Block</th><th>Gia (~)</th></tr>
                </thead>
                <tbody>
                  <tr><td className="text-poe-gold font-semibold">Jagged</td><td>Physical</td><td>&mdash;</td><td>1-3c</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Dense</td><td>Defence (ES, Armour)</td><td>Life</td><td>1-3c</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Pristine</td><td>Life</td><td>Defence</td><td>1-3c</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Scorched</td><td>Fire</td><td>Cold</td><td>1c</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Frigid</td><td>Cold</td><td>Fire</td><td>1c</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Metallic</td><td>Lightning</td><td>Physical</td><td>1c</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Corroded</td><td>Chaos/Bleed/Poison</td><td>Elemental</td><td>2-5c</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Aberrant</td><td>Chaos</td><td>Elemental (giam)</td><td>1-2c</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Lucent</td><td>Mana</td><td>Speed</td><td>1c</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Hollow</td><td>Co hoi Abyssal Socket</td><td>&mdash;</td><td>5-15c</td></tr>
                </tbody>
              </table>
            </div>

            <H3>4.3. Harvest Crafting</H3>
            <P>
              Harvest la phuong phap craft <B>manh nhat</B> vi no <B>ton trong meta-craft mod</B>
              (&ldquo;Prefixes Cannot be Changed&rdquo;, &ldquo;Suffixes Cannot be Changed&rdquo;).
              Day la diem khac biet quan trong so voi Fossil va Essence (khong ton trong meta-craft).
            </P>
            <H4>Ky thuat chinh: Harvest Reforge voi Meta-craft</H4>
            <div className="overflow-x-auto mb-4">
              <table className="poe-table">
                <thead>
                  <tr><th>Buoc</th><th>Hanh dong</th><th>Chi phi</th></tr>
                </thead>
                <tbody>
                  <tr><td>1</td><td>Co item voi <B>3 prefix tot</B> (vd: T1 Life, T1 %ES, T1 Flat ES tren body armour)</td><td>&mdash;</td></tr>
                  <tr><td>2</td><td>Benchcraft <B>&ldquo;Prefixes Cannot Be Changed&rdquo;</B></td><td><Gold>2 Divine Orb</Gold></td></tr>
                  <tr><td>3</td><td>Dung <B>Harvest Reforge</B> (vd: Reforge Fire = dam bao co it nhat 1 fire tag suffix)</td><td>Harvest craft cost</td></tr>
                  <tr><td>4</td><td>Prefix giu nguyen, chi suffix bi reroll. Lap lai buoc 2-3 cho den khi co suffix mong muon.</td><td>2 Div moi lan</td></tr>
                </tbody>
              </table>
            </div>
            <Tip>
              <B>Harvest Reforge quan trong:</B><br />
              - <B>Reforge Speed</B>: Dam bao 1 speed mod (Attack/Cast/Move Speed suffix)<br />
              - <B>Reforge Caster</B>: Dam bao 1 caster mod (Spell Damage, +Gem Level)<br />
              - <B>Reforge Defence</B>: Dam bao 1 defence mod (Resist, Armour/Evasion/ES)<br />
              - <B>Reforge more likely/less likely</B>: Tang/giam weight mod, nham T1 de hon
            </Tip>

            <H3>4.4. Recombinator</H3>
            <P>
              Recombinator cho phep <B>gop 2 item cung loai</B> thanh 1 item moi, lay mod tu ca 2.
              Day la cach <B>tao item GG nhat</B> nhung doi hoi hieu biet sau ve mod system.
            </P>
            <H4>Buoc thuc hien co ban:</H4>
            <div className="overflow-x-auto mb-4">
              <table className="poe-table">
                <thead>
                  <tr><th>Buoc</th><th>Hanh dong</th></tr>
                </thead>
                <tbody>
                  <tr><td>1</td><td><B>Tao 2 item 1-mod</B>: Dung Orb of Alteration spam tren 2 base cung loai, moi cai co 1 mod ban muon (vd: Item A co T1 %Phys, Item B co T1 Flat Phys)</td></tr>
                  <tr><td>2</td><td><B>Recombine</B>: Ket qua co the la item 2-mod (co ca 2 mod mong muon), hoac mat 1 mod. Ty le thanh cong ~50%.</td></tr>
                  <tr><td>3</td><td><B>Tiep tuc layer</B>: Lay item 2-mod, recombine voi item 1-mod khac de co 3-mod item.</td></tr>
                  <tr><td>4</td><td><B>Advanced</B>: Gop 2 item 2-mod de co 3-4 mod. Gop 2 item 3-mod de co 4-5 mod. Cang nhieu mod, ty le thanh cong cang thap.</td></tr>
                </tbody>
              </table>
            </div>
            <Warning>
              <B>Quy tac Recombinator:</B><br />
              - 2 item <B>phai cung base type</B> (ca 2 la belt, hoac ca 2 la body armour, v.v.)<br />
              - Mod tier cang cao, co hoi giu lai cang thap<br />
              - iLvl cua ket qua = iLvl cao nhat cua 2 item dau vao<br />
              - Co the &ldquo;nang cap&rdquo; iLvl: Recombine item iLvl 84 + item iLvl 86 co 50% co hoi ra iLvl 86<br />
              - <B>Exclusive mod</B> (vd: Essence mod, Delve mod) co the giu lai qua recombination
            </Warning>
          </Section>

          {/* ═══════════════════════════════════════════════════════
              V. BOSS RUSH
             ═══════════════════════════════════════════════════════ */}
          <Section id="boss-rush" num="V" title="Boss Rush Strategy">
            <P>
              Boss farming la cach kiem currency <B>on dinh va co the du doan</B>.
              Moi boss co set fragment rieng, va loi nhuan phu thuoc vao <B>toc do giet + gia drop hien tai</B>.
            </P>

            <H3>5.1. Tong quan loi nhuan cac boss</H3>
            <div className="overflow-x-auto">
              <table className="poe-table">
                <thead>
                  <tr><th>Boss</th><th>Fragment Can</th><th>Drop Dang Chu Y</th><th>Loi nhuan/gio (~)</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-poe-gold font-semibold">The Shaper</td>
                    <td>4 Guardian Fragment (Hydra, Phoenix, Minotaur, Chimera)</td>
                    <td>Dying Sun, Shaper&apos;s Touch, Starforge, Shaper item bases</td>
                    <td><Gold>4-8 Divine/gio</Gold></td>
                  </tr>
                  <tr>
                    <td className="text-poe-gold font-semibold">Uber Elder</td>
                    <td>4 Shaper + 4 Elder Fragment</td>
                    <td>Mark of the Shaper, Watcher&apos;s Eye (<Gold>1-50+ Divine</Gold> tuy mod), Disintegrator</td>
                    <td><Gold>5-15 Divine/gio</Gold></td>
                  </tr>
                  <tr>
                    <td className="text-poe-gold font-semibold">The Maven</td>
                    <td>10 Maven Splinter = 1 Maven&apos;s Writ</td>
                    <td>Elevated Sextant (truoc 3.24), Orb of Conflict, Maven&apos;s Orb, Awakened Support Gem</td>
                    <td><Gold>3-10 Divine/gio</Gold></td>
                  </tr>
                  <tr>
                    <td className="text-poe-gold font-semibold">Searing Exarch</td>
                    <td>28 Searing Exarch invitations (tu Eldritch map)</td>
                    <td>Exceptional Eldritch Ember/Ichor, Forbidden Flame/Flesh, Eldritch Implicit base</td>
                    <td><Gold>3-8 Divine/gio</Gold></td>
                  </tr>
                  <tr>
                    <td className="text-poe-gold font-semibold">Eater of Worlds</td>
                    <td>28 Black Star invitations</td>
                    <td>Melding of the Flesh, Ashes of the Stars (<Gold>5-20 Divine</Gold>)</td>
                    <td><Gold>3-10 Divine/gio</Gold></td>
                  </tr>
                  <tr>
                    <td className="text-poe-gold font-semibold">The Feared (Maven)</td>
                    <td>Maven&apos;s Writ + Cortex/Chayula/Shaper/Elder/Atziri fragment</td>
                    <td>Double Elevated item, Awakened Gem level up</td>
                    <td><Gold>5-20 Divine/gio</Gold> (cao nhat neu Watcher&apos;s Eye tot)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <H3>5.2. Chien luoc toi uu Boss Rush</H3>
            <ul className="mb-4 space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
                <span><B>Mua fragment bulk:</B> Mua 20-50 set fragment cung luc de giam thoi gian trade. Dung TFT Discord hoac bulk trade trên poe.trade.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
                <span><B>Build toi uu:</B> Can DPS cao (&gt;10M sustained) + survivability. Pho bien: Detonate Dead, Righteous Fire + Fire Trap, Minion build.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
                <span><B>Toc do la tien:</B> Neu giet Shaper trong 2 phut (ke ca Guardian map), ban chay duoc <Gold>15-20 set/gio</Gold>. Neu mat 5 phut, chi duoc 8-10 set.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
                <span><B>Check loot filter:</B> Mot so item cuc dat co the bi filter an. Tat filter check sau moi boss kill.</span>
              </li>
            </ul>
            <Tip>
              <B>Uber boss:</B> Phien ban &ldquo;Uber&rdquo; cua moi boss (dung Fragment trong map device voi keystone &ldquo;Uber&rdquo;)
              co drop rate cao hon cho rare item nhung kho hon rat nhieu.
              <B>Watcher&apos;s Eye</B> tu Uber Elder co 3 mod thay vi 2 &rarr; gia co the len <Gold>50-200+ Divine</Gold> cho combo tot.
            </Tip>
          </Section>

          {/* ═══════════════════════════════════════════════════════
              VI. TRADING TIPS
             ═══════════════════════════════════════════════════════ */}
          <Section id="trading" num="VI" title="Trading Tips &mdash; Dinh Gia va Mua Ban">
            <P>
              Trading la ky nang quan trong nhat trong PoE (ngoai game). Dinh gia sai co the mat hang chuc Divine.
            </P>

            <H3>6.1. Cong cu can thiet</H3>
            <div className="grid gap-4 sm:grid-cols-2 mb-6">
              <Panel>
                <div className="font-heading text-sm font-bold text-poe-gold mb-2">Awakened PoE Trade</div>
                <ul className="space-y-1 text-sm">
                  <li><B>Phim tat:</B> Ctrl+D (price check), Ctrl+Alt+D (advanced)</li>
                  <li>Ket noi truc tiep voi poe.trade API</li>
                  <li>Hien thi gia trung binh, median, va listing hien tai</li>
                  <li><B>Bat buoc phai cai</B> &mdash; tool quan trong nhat cho trader</li>
                </ul>
              </Panel>
              <Panel>
                <div className="font-heading text-sm font-bold text-poe-gold mb-2">poe.ninja</div>
                <ul className="space-y-1 text-sm">
                  <li>Theo doi gia <B>real-time</B> cua tat ca currency, unique, div card</li>
                  <li>Xem build meta &mdash; biet item nao dang duoc su dung nhieu</li>
                  <li>Dung de dinh gia nhanh unique item va currency exchange rate</li>
                </ul>
              </Panel>
            </div>

            <H3>6.2. Cach dinh gia item rare</H3>
            <ul className="mb-4 space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
                <span><B>Buoc 1 &mdash; Nhan dien mod tot:</B> T1 Life (80+), T1 Resist (40+), T1 %ES, T1 Flat Phys, T1 Crit Multi, Open prefix/suffix cho benchcraft</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
                <span><B>Buoc 2 &mdash; Search tren trade:</B> Tim item tuong tu voi cac mod chinh. Filter theo: base type, mod range (80-90% cua gia tri), total resist, total life</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
                <span><B>Buoc 3 &mdash; So sanh:</B> Sap xep theo gia tu thap den cao. Gia cua ban nen o khoang <Gold>top 20-40%</Gold> listing (khong thap nhat, khong cao nhat)</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
                <span><B>Buoc 4 &mdash; Consider benchcraft:</B> Neu item co open slot, tinh gia voi benchcraft tot nhat. VD: open suffix + benchcraft &ldquo;gain % phys as extra fire&rdquo; tang gia dang ke.</span>
              </li>
            </ul>

            <H3>6.3. Nhung item de bo qua ma thuc ra rat dat</H3>
            <div className="overflow-x-auto">
              <table className="poe-table">
                <thead>
                  <tr><th>Item Type</th><th>Mod can tim</th><th>Gia tri</th></tr>
                </thead>
                <tbody>
                  <tr><td className="text-poe-gold font-semibold">Jewel (rare)</td><td>3-4 mod tot: Life, Crit Multi, Attack/Cast Speed, %Damage</td><td><Gold>10c - 10 Divine</Gold></td></tr>
                  <tr><td className="text-poe-gold font-semibold">Cluster Jewel</td><td>3 notable tot (vd: Feed the Fury + Fuel the Fight + Martial Prowess)</td><td><Gold>1-50 Divine</Gold></td></tr>
                  <tr><td className="text-poe-gold font-semibold">Belt voi high Life + Resist</td><td>100+ Life, 90+ total resist, open suffix</td><td><Gold>1-20 Divine</Gold></td></tr>
                  <tr><td className="text-poe-gold font-semibold">Amulet voi +1 Gem Level</td><td>+1 all skill gems hoac +1 specific (vd: +1 phys, +1 chaos)</td><td><Gold>1-30 Divine</Gold></td></tr>
                  <tr><td className="text-poe-gold font-semibold">Fractured base</td><td>T1 fractured mod (Life, ES, Resist) tren ilvl 86 base</td><td><Gold>10c - 20 Divine</Gold></td></tr>
                </tbody>
              </table>
            </div>

            <H3>6.4. Meo trade nhanh</H3>
            <ul className="mb-4 space-y-2 text-sm">
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span><B>Ban bulk:</B> Gop Essence, Fossil, Scarab thanh lot 10-20 cai, ban bulk luon gia cao hon 15-25% so voi ban le.</span></li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span><B>Live search:</B> Dung live search tren poe.trade cho item hiem (Watcher&apos;s Eye, specific cluster jewel) &mdash; ban se nhan thong bao khi co item moi list.</span></li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span><B>Currency flipping:</B> Mua currency gia thap, ban gia cao. VD: Mua Chaos = 0.008 Divine, ban Chaos = 0.009 Divine. Loi nhuan nho nhung volume lon.</span></li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span><B>PoE dung windowed (borderless):</B> Bat buoc de Awakened PoE Trade hoat dong.</span></li>
            </ul>
          </Section>

          {/* ═══════════════════════════════════════════════════════
              VII. LEVELING SPEEDRUN
             ═══════════════════════════════════════════════════════ */}
          <Section id="leveling-speed" num="VII" title="Leveling Speedrun Tricks">
            <P>
              Pro player hoan thanh 10 acts trong <B>3-5 gio</B> (world record ~2 gio 10 phut boi Tytykiller).
              Duoi day la cac trick giup ban tang toc dang ke.
            </P>

            <H3>7.1. Movement la so 1</H3>
            <ul className="mb-4 space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
                <span>
                  <B>Smoke Mine</B>: Skill quan trong nhat cho speedrun. Dat mine &rarr; detonate &rarr; <Gold>teleport den vi tri mine + 30% movement speed buff</Gold> trong 4 giay.
                  Gan left-click = Detonate Mine de tu dong detonate khi click di chuyen.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
                <span><B>Flame Dash</B>: Di chuyen qua terrain, vach ngan. Co 3 charge, recharge nhanh voi quality/gem level.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
                <span><B>Quicksilver Flask</B>: Luon co it nhat 1, tot nhat la 2 Quicksilver Flask khi leveling. +40% movement speed moi flask.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
                <span><B>Movement Speed boots</B>: Uu tien cap nhat boots voi 10-30% MS. Co the mua tu vendor hoac craft.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
                <span><B>Second Wind Support</B>: Link voi Flame Dash de co them 1 charge. Co the cung link voi Smoke Mine.</span>
              </li>
            </ul>

            <H3>7.2. Vendor Recipe quan trong khi leveling</H3>
            <div className="overflow-x-auto">
              <table className="poe-table">
                <thead>
                  <tr><th>Recipe</th><th>Nguyen lieu</th><th>Ket qua</th><th>Khi nao dung</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-poe-gold font-semibold">+1 Fire Gem Wand</td>
                    <td>Magic Wand + Ruby Ring + Orb of Alteration</td>
                    <td>Wand voi <Gold>+1 to Level of all Fire Spell Gems</Gold></td>
                    <td>Level 2-12 cho fire caster</td>
                  </tr>
                  <tr>
                    <td className="text-poe-gold font-semibold">+1 Cold Gem Wand</td>
                    <td>Magic Wand + Sapphire Ring + Orb of Alteration</td>
                    <td>Wand voi +1 Cold Gems</td>
                    <td>Level 2-12 cho cold caster</td>
                  </tr>
                  <tr>
                    <td className="text-poe-gold font-semibold">+1 Lightning Gem Wand</td>
                    <td>Magic Wand + Topaz Ring + Orb of Alteration</td>
                    <td>Wand voi +1 Lightning Gems</td>
                    <td>Level 2-12 cho lightning caster</td>
                  </tr>
                  <tr>
                    <td className="text-poe-gold font-semibold">Physical Weapon</td>
                    <td>Weapon + Rustic Sash + Blacksmith&apos;s Whetstone</td>
                    <td>Weapon voi <Gold>40-89% increased Phys Damage</Gold> (tuy rarity sash)</td>
                    <td>Level 1-28 cho melee</td>
                  </tr>
                  <tr>
                    <td className="text-poe-gold font-semibold">Caster Weapon</td>
                    <td>Dagger/Sceptre/Wand + Chain Belt + Blacksmith&apos;s Whetstone</td>
                    <td>Weapon voi <Gold>10-39% increased Spell Damage</Gold></td>
                    <td>Level 1-12 cho spell user</td>
                  </tr>
                  <tr>
                    <td className="text-poe-gold font-semibold">Movement Speed Boots</td>
                    <td>Boots (white/blue) + Quicksilver Flask + Orb of Augmentation</td>
                    <td>Boots voi <Gold>10% movement speed</Gold></td>
                    <td>Act 1 ngay lap tuc</td>
                  </tr>
                  <tr>
                    <td className="text-poe-gold font-semibold">Resistance Ring</td>
                    <td>Iron Ring + color gem (red=Ruby, green=Topaz, blue=Sapphire)</td>
                    <td>Resist ring tuong ung</td>
                    <td>Khi can resist cho boss</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <H3>7.3. Tips speedrun tong hop</H3>
            <ul className="mb-4 space-y-2 text-sm">
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span><B>Khong giet tat ca quai:</B> Chi giet quai tren duong di. Level nen bang hoac thap hon zone level 2-3 level la duoc.</span></li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span><B>Lay toan bo passive point quest:</B> Passive Respec quest co the bo, nhung passive point quest thi <Gold>bat buoc</Gold>.</span></li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span><B>League start build:</B> Explosive Trap, Poisonous Concoction, SRS, Rolling Magma, Lightning Conduit la cac build level nhanh nhat.</span></li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span><B>Skip side content:</B> Khong lam Labyrinth khi leveling (tru khi can Ascendancy node quan trong). Quay lai sau khi xong Act 10.</span></li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span><B>Waypoint trick:</B> Khi vao zone moi, mo overlay map (Tab) de biet huong di. Zone trong PoE co quy luat layout &mdash; exit thuong o <Gold>phia doi dien</Gold> cua entrance.</span></li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span><B>Logout macro:</B> Khi choi HC, dung logout macro de thoat ngay khi gap nguy hiem.</span></li>
            </ul>
          </Section>

          {/* ═══════════════════════════════════════════════════════
              VIII. DEFENSIVE LAYERS
             ═══════════════════════════════════════════════════════ */}
          <Section id="defense" num="VIII" title="Defensive Layers &mdash; Xep Chong Phong Thu">
            <P>
              Trong PoE, <B>khong co 1 layer phong thu nao du</B>. Ban can <B>xep chong nhieu layers</B> de song sot.
              Cac layer chia thanh 3 nhom chinh: <B>Avoidance</B> (ne tranh), <B>Mitigation</B> (giam damage), va <B>Recovery</B> (hoi phuc).
            </P>

            <H3>8.1. Armour + Determination</H3>
            <Panel className="mb-4">
              <div className="font-heading text-sm font-bold text-poe-gold mb-2">Armour (Physical Damage Mitigation)</div>
              <ul className="space-y-1 text-sm">
                <li><B>Cong thuc:</B> Physical Damage Reduction = Armour / (Armour + 5 * Raw Physical Damage)</li>
                <li><B>Cap:</B> Toi da <Gold>90% physical mitigation</Gold> (50% voi Imbalanced Guard)</li>
                <li><B>Determination aura:</B> Base +1500 flat armour + <Gold>more armour modifier</Gold>. Voi 40k armour, ban giam ~66% physical hit 2000 damage, ~50% hit 4000 damage.</li>
                <li><B>Breakpoint:</B> Nham <Gold>30,000-50,000 armour</Gold> cho T16 mapping an toan.</li>
                <li><B>Molten Shell guard skill:</B> Voi 30k+ armour, Molten Shell hap thu <Gold>~8,000-10,000 damage</Gold>.</li>
              </ul>
            </Panel>

            <H3>8.2. Evasion + Grace</H3>
            <Panel className="mb-4">
              <div className="font-heading text-sm font-bold text-poe-gold mb-2">Evasion (Attack Avoidance)</div>
              <ul className="space-y-1 text-sm">
                <li><B>Co che:</B> PoE dung <B>entropy system</B>, khong phai pure random. Neu co 70% evasion, ban se <Gold>ne chinh xac 7/10 hit</Gold>.</li>
                <li><B>Grace aura:</B> Base +2500 flat evasion + <Gold>more evasion modifier</Gold>.</li>
                <li><B>Han che:</B> Evasion <B>khong hoat dong voi Spell</B> va <B>khong giam DoT</B>.</li>
                <li><B>Breakpoint:</B> Nham <Gold>30,000-50,000 evasion</Gold> = ~70-80% chance to evade attacks.</li>
                <li><B>Wind Dancer keystone:</B> -20% evasion nhung giam 40% damage tu hit dau tien sau khi bi hit gan day. Rat manh cho evasion build.</li>
              </ul>
            </Panel>

            <H3>8.3. Spell Suppression</H3>
            <Panel className="mb-4">
              <div className="font-heading text-sm font-bold text-poe-gold mb-2">100% Spell Suppression = Bat Buoc</div>
              <ul className="space-y-1 text-sm">
                <li><B>Hieu qua:</B> 100% Chance to Suppress Spell Damage = <Gold>giam 50% damage tu moi spell hit</Gold></li>
                <li><B>Nguon:</B> Passive tree (Ranger/Shadow area), suffix tren Dexterity gear, Eldritch implicit</li>
                <li><B>Target:</B> Luon nham <Gold>100% suppression</Gold>. O 80% thi 20% spell hit van deal full damage &rarr; nguy hiem.</li>
                <li><B>Ket hop:</B> Evasion + Spell Suppression la combo <Gold>hoat chinh</Gold> cho Ranger/Shadow build (ne attack, giam spell).</li>
              </ul>
            </Panel>

            <H3>8.4. Maximum Resistances</H3>
            <Panel className="mb-4">
              <div className="font-heading text-sm font-bold text-poe-gold mb-2">Max Res (Endgame Defense Core)</div>
              <ul className="space-y-1 text-sm">
                <li><B>Default:</B> Max elemental res = 75%. Moi 1% tang them = <Gold>4% less elemental damage taken</Gold> (tuong doi).</li>
                <li><B>VD:</B> Tu 75% &rarr; 80% max res = giam 20% elemental damage (tu 25% taken xuong 20% taken)</li>
                <li><B>Tu 75% &rarr; 85% max res:</B> Giam <Gold>40% elemental damage</Gold> tuong doi &mdash; cuc ky manh.</li>
                <li><B>Nguon:</B> Purity of Fire/Ice/Lightning aura (+4-5% max), passive tree, Melding of the Flesh (+max all res), flask suffix</li>
                <li><B>Melding of the Flesh:</B> Set tat ca max res = max res thap nhat. Neu ban co 90% max fire res &rarr; tat ca thanh 90%. Can dau tu lon nhung <Gold>cuc manh</Gold>.</li>
              </ul>
            </Panel>

            <H3>8.5. Cac layer bo sung quan trong</H3>
            <div className="overflow-x-auto">
              <table className="poe-table">
                <thead>
                  <tr><th>Layer</th><th>Cach hoat dong</th><th>Breakpoint/Target</th></tr>
                </thead>
                <tbody>
                  <tr><td className="text-poe-gold font-semibold">Block</td><td>% co hoi block hoan toan 1 hit (attack hoac spell)</td><td>Cap <Gold>75%</Gold>. Glancing Blows keystone: x2 block nhung chi giam 65% damage</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Life Recoup</td><td>20-40% damage taken duoc hoi lai trong 4 giay</td><td>Stack 30-50% &mdash; hoi cuc nhieu sau big hit</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Damage taken as</td><td>Convert physical damage taken thanh elemental (vd: Lightning Coil: 30% phys as lightning)</td><td>Ket hop voi max res cao de giam phys damage</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Fortify</td><td>Melee hit stack Fortification (max 20 stack) = <Gold>20% less hit damage taken</Gold></td><td>20 stack = cap</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Petrified Blood</td><td>50% damage tu hit o nua duoi life pool duoc spread ra 4 giay</td><td>Dung cho Low-Life build (Reserve 50%+ life)</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Guard Skills</td><td>Steelskin/Molten Shell/Immortal Call &mdash; tam thoi hap thu damage</td><td>CWDT level 1 + Immortal Call hoac Manual Molten Shell voi high armour</td></tr>
                </tbody>
              </table>
            </div>

            <Tip>
              <B>Combo phong thu pho bien nhat (3.24+):</B><br />
              <Gold>Determination + Grace + Defiance Banner + Spell Suppression 100% + 80%+ max res</Gold><br />
              Day la &ldquo;golden standard&rdquo; cho hau het build. Anh huong ~50% mana reservation nhung cuc ky dang.
              Them Molten Shell (voi 40k+ armour) va ban gan nhu bat tu trong T16.
            </Tip>
          </Section>

          {/* ═══════════════════════════════════════════════════════
              IX. FLASK MANAGEMENT
             ═══════════════════════════════════════════════════════ */}
          <Section id="flasks" num="IX" title="Flask Management">
            <P>
              Flask trong PoE la mot phan quan trong cua defensive va offensive layer.
              Voi <B>5 flask slot</B>, ban can chon ky de cover tat ca cac tru.
            </P>

            <H3>9.1. Flask Suffix (Ailment Immunity) &mdash; Thu Tu Uu Tien</H3>
            <div className="overflow-x-auto">
              <table className="poe-table">
                <thead>
                  <tr><th>Uu Tien</th><th>Suffix</th><th>Hieu qua</th><th>Tai sao quan trong</th></tr>
                </thead>
                <tbody>
                  <tr><td>1</td><td className="text-poe-gold font-semibold">of Staunching</td><td>Immune to Bleeding + remove Bleed</td><td>Bleed <Gold>giet ngay lap tuc</Gold> neu ban di chuyen khi bi bleed</td></tr>
                  <tr><td>2</td><td className="text-poe-gold font-semibold">of the Walrus</td><td>Immune to Freeze + remove Freeze</td><td>Freeze = khong di chuyen duoc = chet</td></tr>
                  <tr><td>3</td><td className="text-poe-gold font-semibold">of the Skink</td><td>Immune to Shock + remove Shock</td><td>Shock tang damage taken 15-50% &mdash; cuc nguy hiem</td></tr>
                  <tr><td>4</td><td className="text-poe-gold font-semibold">of Dousing</td><td>Immune to Ignite + remove Ignite</td><td>Ignite DoT co the rat cao o endgame</td></tr>
                  <tr><td>5</td><td className="text-poe-gold font-semibold">of the Owl</td><td>65% reduced Curse effect</td><td>Map curse mod (Vulnerability, Temporal Chains) rat kho chiu</td></tr>
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
                  <tr><td>2</td><td className="text-poe-gold font-semibold">Granite Flask</td><td>Chemist&apos;s (giam charge)</td><td>of the Walrus (freeze)</td><td>Used when Charges reach full</td></tr>
                  <tr><td>3</td><td className="text-poe-gold font-semibold">Jade Flask</td><td>Chemist&apos;s</td><td>of the Skink (shock)</td><td>Used when Charges reach full</td></tr>
                  <tr><td>4</td><td className="text-poe-gold font-semibold">Quicksilver Flask</td><td>Alchemist&apos;s (tang effect)</td><td>of Dousing (ignite)</td><td>Used when Charges reach full</td></tr>
                  <tr><td>5</td><td className="text-poe-gold font-semibold">Diamond/Silver Flask</td><td>Alchemist&apos;s</td><td>of the Owl (curse)</td><td>Used when Charges reach full</td></tr>
                </tbody>
              </table>
            </div>

            <H3>9.3. Utility Flask cho DPS</H3>
            <ul className="mb-4 space-y-2 text-sm">
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span><B>Diamond Flask:</B> Lucky crit (roll crit chance 2 lan, lay cao hon) &mdash; <Gold>~30-40% more crit effective</Gold></span></li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span><B>Silver Flask:</B> Onslaught (20% attack/cast/movement speed) &mdash; <Gold>huge DPS + movespeed boost</Gold></span></li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span><B>Bottled Faith:</B> Unique Sulphur flask &mdash; Consecrated Ground tang <Gold>2% base crit + enemies take 10% increased damage</Gold>. Gia <Gold>5-20 Divine</Gold>.</span></li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span><B>Dying Sun:</B> Unique Ruby flask &mdash; +2 projectiles. Cho build projectile (Tornado Shot, LA). Gia <Gold>1-5 Divine</Gold>.</span></li>
            </ul>

            <H3>9.4. Flask Enchantment quan trong</H3>
            <ul className="mb-4 space-y-2 text-sm">
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span><B>&ldquo;Used when Charges reach full&rdquo;</B> &mdash; Tu dong dung khi day charge. <Gold>Quan trong nhat</Gold> cho utility flask.</span></li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span><B>&ldquo;Used when you Hit a Rare or Unique Enemy&rdquo;</B> &mdash; Tot cho boss flask.</span></li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span><B>&ldquo;Used when you take a Savage Hit&rdquo;</B> &mdash; Tot cho Life flask phong thu.</span></li>
            </ul>
            <Tip>
              <B>Instilling Orb</B> de roll enchant tren flask. <B>Enkindling Orb</B> de tang effect nhung flask khong recharge khi dang active.
              Dung Instilling Orb cho utility flask (auto-use) va Enkindling Orb cho flask ma ban chi can khi boss fight.
            </Tip>
          </Section>

          {/* ═══════════════════════════════════════════════════════
              X. LEAGUE MECHANIC PROFIT RANKING
             ═══════════════════════════════════════════════════════ */}
          <Section id="league-profit" num="X" title="League Mechanic Profit Ranking">
            <P>
              Khong phai mechanic nao cung loi nhuan nhu nhau. Duoi day la bang xep hang dua tren
              <B> trung binh currency/gio</B> voi build co clear speed tot (T16 mapping).
              Gia tri thay doi tuy league, nhung thu tu tuong doi on dinh.
            </P>

            <H3>10.1. Bang xep hang</H3>
            <div className="overflow-x-auto">
              <table className="poe-table">
                <thead>
                  <tr><th>Tier</th><th>Mechanic</th><th>Currency/gio (~)</th><th>Dau tu</th><th>Ghi chu</th></tr>
                </thead>
                <tbody>
                  <tr><td><Gold>S</Gold></td><td className="text-poe-gold font-semibold">Delirium (juiced)</td><td><Gold>500-2000c+</Gold></td><td>Rat cao</td><td>Can build manh, Delirium Orb dat. Reward scale voi juice level.</td></tr>
                  <tr><td><Gold>S</Gold></td><td className="text-poe-gold font-semibold">Expedition</td><td><Gold>300-800c</Gold></td><td>Thap-Trung</td><td>Tujen currency + Logbook = consistent income. Khong can build qua manh.</td></tr>
                  <tr><td><Gold>A</Gold></td><td className="text-poe-gold font-semibold">Essence</td><td><Gold>200-400c</Gold></td><td>Rat thap</td><td>Alch-and-go. Deafening Essence luon ban duoc.</td></tr>
                  <tr><td><Gold>A</Gold></td><td className="text-poe-gold font-semibold">Heist (Blueprint)</td><td><Gold>300-700c</Gold></td><td>Thap</td><td>Stacked Deck + raw currency. Can setup rogue equipment.</td></tr>
                  <tr><td><Gold>A</Gold></td><td className="text-poe-gold font-semibold">Breach (juiced)</td><td><Gold>200-500c</Gold></td><td>Trung</td><td>Breachstone + splinter. Tot hon khi ket hop Delirium.</td></tr>
                  <tr><td><Gold>B</Gold></td><td className="text-poe-gold font-semibold">Legion</td><td><Gold>200-400c</Gold></td><td>Thap-Trung</td><td>Incubator + Timeless Splinter. Can wide AoE build.</td></tr>
                  <tr><td><Gold>B</Gold></td><td className="text-poe-gold font-semibold">Harbinger</td><td><Gold>150-350c</Gold></td><td>Rat thap</td><td>Ancient Orb + Exalted Shard. On dinh nhung khong cao.</td></tr>
                  <tr><td><Gold>B</Gold></td><td className="text-poe-gold font-semibold">Strongbox (Ambush)</td><td><Gold>150-300c</Gold></td><td>Rat thap</td><td>Diviner + Arcanist Strongbox. Ket hop tot voi nhieu mechanic khac.</td></tr>
                  <tr><td><Gold>B</Gold></td><td className="text-poe-gold font-semibold">Ritual</td><td><Gold>150-300c</Gold></td><td>Thap</td><td>Lay currency/item tu Ritual reward. Can defer item dat.</td></tr>
                  <tr><td><Gold>C</Gold></td><td className="text-poe-gold font-semibold">Betrayal</td><td><Gold>100-250c</Gold></td><td>Setup phuc tap</td><td>Can setup Syndicate board dung. Aisling T4 Veiled Slam rat gia tri.</td></tr>
                  <tr><td><Gold>C</Gold></td><td className="text-poe-gold font-semibold">Metamorph</td><td><Gold>100-200c</Gold></td><td>Thap</td><td>Drop Catalyst (gia trung binh). Tot hon dau league.</td></tr>
                  <tr><td><Gold>C</Gold></td><td className="text-poe-gold font-semibold">Abyss</td><td><Gold>80-150c</Gold></td><td>Thap</td><td>Stygian Vise + Abyss Jewel. Gia giam nhanh qua league.</td></tr>
                </tbody>
              </table>
            </div>

            <Tip>
              <B>Nguyen tac chung:</B> Chon 1-2 mechanic chinh, spec Atlas tree <Gold>100% vao do</Gold>.
              Chuyen mon hoa luon tot hon dan trai. Neu ban choi 3 gio/ngay, chon 1 mechanic va master no.
              Neu ban choi 8+ gio/ngay, co the lam 2 mechanic luan phien.
            </Tip>
          </Section>

          {/* ═══════════════════════════════════════════════════════
              XI. JUICING MAPS
             ═══════════════════════════════════════════════════════ */}
          <Section id="juicing" num="XI" title="Juicing Maps &mdash; Tang Reward Toi Da">
            <P>
              &ldquo;Juicing&rdquo; la qua trinh them nhieu modifier va content vao map de <B>tang dang ke loot</B>.
              Tu 3.24, <B>Sextant da bi xoa</B> va thay the bang he thong <B>Scarab moi</B> (hang tram loai).
            </P>

            <H3>11.1. Thanh phan juice</H3>
            <div className="overflow-x-auto">
              <table className="poe-table">
                <thead>
                  <tr><th>Thanh phan</th><th>Chi tiet</th><th>Chi phi (~)</th></tr>
                </thead>
                <tbody>
                  <tr><td className="text-poe-gold font-semibold">Map quality + rarity</td><td>Alch map &rarr; Chisel 20% quality &rarr; Vaal (optional, risky). IIQ tren map tang loot <Gold>tuyen tinh</Gold>.</td><td>1-3c/map</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Scarab (3-4 slots)</td><td>Moi scarab them 1 mechanic/buff. Map device co 3 slot (nang cap len 4-5).</td><td>2-50c/scarab</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Map Device Craft</td><td>Dung Chaos de chon map device mod: Fortune (IIQ), Domination (Shrine), Beyond, etc.</td><td>3-16c/craft</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Fragment (sacrifice/mortal)</td><td>Moi fragment them <Gold>5% IIQ</Gold> cho map. 4 fragment = +20% IIQ.</td><td>1-5c/set</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Delirium Orb</td><td>Apply Delirium layer len map (stack len 5). <Gold>Tang khong lo so quai va reward</Gold>.</td><td>5-30c/orb x 1-5</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Atlas passive</td><td>Cac node tang pack size, monster quantity, co hoi spawn mechanic</td><td>Free</td></tr>
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
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span>5 Delirium Orb (stack 100% Delirium) + 4 Scarab cao cap + Beyond map device + Fragment</span></li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span>Can build <Gold>rat manh</Gold> (50M+ DPS) de clear duoc. Mon = Beyond boss + Delirium reward + rare mob loot</span></li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span>Thu nhap ky vong: <Gold>~1500-3000c+/gio</Gold> (party play co the cao hon)</span></li>
            </ul>

            <H3>11.3. Scarab dang chu y (post-3.24 rework)</H3>
            <div className="overflow-x-auto">
              <table className="poe-table">
                <thead>
                  <tr><th>Scarab</th><th>Hieu qua</th><th>Gia tri</th></tr>
                </thead>
                <tbody>
                  <tr><td className="text-poe-gold font-semibold">Divination Scarab of Completion</td><td>Tang co hoi div card drop + bonus khi full stack</td><td>Dat nhung reward cao cho Apothecary/Doctor farming</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Beyond Scarab of the Invasion</td><td>Tang so luong Beyond monster, moi rare kill spawn Beyond portal</td><td>Them loot + exp khong lo</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Expedition Scarab of Archaeology</td><td>Dam bao Expedition spawn trong map</td><td>Core cho Expedition farming</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Breach Scarab of Lordship</td><td>Tang co hoi Breachlord spawn trong Breach</td><td>Breachlord drop Blessing + unique</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Delirium Scarab of Delusions</td><td>Random 1-5 Delirium layer mien phi</td><td>Budget Delirium alternative</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Ambush Scarab of Potency</td><td>Strongbox co them mod, tang reward</td><td>Diviner Strongbox = div card bomb</td></tr>
                </tbody>
              </table>
            </div>
          </Section>

          {/* ═══════════════════════════════════════════════════════
              XII. DELVE STRATEGY
             ═══════════════════════════════════════════════════════ */}
          <Section id="delve" num="XII" title="Delve Strategy &mdash; Khai Thac Azurite Mine">
            <P>
              Delve la he thong mine exploration voi reward rieng biet: <B>Fossil, resonator, va rare item</B>.
              Day la co the la nguon thu nhap <B>rat on dinh</B> neu ban biet di dau va farm gi.
            </P>

            <H3>12.1. Do sau toi uu</H3>
            <ul className="mb-4 space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
                <span><B>Depth 250-350:</B> Sweet spot cho hau het build. Reward tot, do kho chua qua cao.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
                <span><B>Depth 500+:</B> Reward tang dang ke, nhung quai co <Gold>huge resist + life scaling</Gold>. Can build chuyen dung.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
                <span><B>Depth 600-1000:</B> Vung &ldquo;deep delve&rdquo; &mdash; fossil rat nhieu, City biome thuong xuyen hon. Chi cho build cuc manh.</span>
              </li>
            </ul>

            <H3>12.2. Node loi nhuan cao nhat</H3>
            <div className="overflow-x-auto">
              <table className="poe-table">
                <thead>
                  <tr><th>Node Type</th><th>Reward</th><th>Gia tri (~)</th></tr>
                </thead>
                <tbody>
                  <tr><td className="text-poe-gold font-semibold">Fossil Node (&ldquo;Contains Fossils&rdquo;)</td><td>2-4 fossil moi node. Moi fossil = 1-10c</td><td><Gold>5-40c/node</Gold></td></tr>
                  <tr><td className="text-poe-gold font-semibold">City Biome (Abyssal City, Vaal City)</td><td>Boss drop unique + rare fossil. Side room co nhieu chest.</td><td><Gold>50-200c/city</Gold></td></tr>
                  <tr><td className="text-poe-gold font-semibold">&ldquo;Contains Minion or Aura Items&rdquo;</td><td>Co the drop item gia tri cao, dac biet dau league</td><td><Gold>20-100c</Gold></td></tr>
                  <tr><td className="text-poe-gold font-semibold">&ldquo;Contains Chaos Items&rdquo;</td><td>Chaos-related unique/item</td><td>10-50c</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Smuggler&apos;s Stash</td><td>Currency + fossil lon</td><td><Gold>50-100c</Gold></td></tr>
                </tbody>
              </table>
            </div>

            <H3>12.3. Biome uu tien</H3>
            <ul className="mb-4 space-y-2 text-sm">
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span><B>Fungal Caverns:</B> Drop <Gold>Hollow Fossil</Gold> (5-15c) va Dense Fossil</span></li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span><B>Petrified Forest:</B> Drop <Gold>Pristine + Jagged Fossil</Gold> &mdash; luon co gia tri</span></li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span><B>Sulphur Vents:</B> Drop <Gold>Scorched + Frigid Fossil</Gold></span></li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span><B>Magma Fissure:</B> Fossil output cao</span></li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span><B>Abyssal Depths:</B> Boss + City node &mdash; <Gold>gia tri cao nhat</Gold></span></li>
            </ul>

            <H3>12.4. Dark Farming (Advanced)</H3>
            <P>
              Dark farming la ky thuat di ra ngoai vung sang cua Crawler de <B>thu thap fossil va chest trong bong toi</B>.
            </P>
            <ul className="mb-4 space-y-2 text-sm">
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span><B>Can:</B> Phasing (di xuyen qua quai), movement speed cao (200%+), Darkness Resistance (flare + node)</span></li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span><B>Cach lam:</B> Chay path, dung flare de thap sang tam, nhanh chong mo chest roi chay tiep.</span></li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span><B>Build:</B> Pathfinder voi Phase Run, Quicksilver Flask, va Darkness Resistance tren Sulphite node.</span></li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span><B>Thu nhap:</B> Co the dat <Gold>300-600c/gio</Gold> o depth 300+ chi tu fossil va chest.</span></li>
            </ul>
            <Warning>
              <B>Luu y:</B> Dark farming can thuc hanh nhieu. Chet trong darkness = mat tat ca loot chua pick up.
              Can dau tu Sulphite (tu Niko mission va Scarab) de co the delve lien tuc.
            </Warning>

            <H3>12.5. Route planning</H3>
            <ul className="mb-4 space-y-2 text-sm">
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span><B>Uu tien 1:</B> Tim City biome gan nhat (dac biet co boss node)</span></li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span><B>Uu tien 2:</B> Specialty node (&ldquo;Contains Minion Items&rdquo;, &ldquo;Contains Fossils&rdquo;)</span></li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span><B>Uu tien 3:</B> Di qua biome tot (Fungal Caverns, Petrified Forest) va nhat T3 Azurite, Currency, Atlas node doc duong</span></li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span><B>Di ngang (lateral):</B> O depth toi uu (300-500), di ngang de quet nhieu node thay vi di xuong sau them.</span></li>
            </ul>
          </Section>

          {/* ═══════════════════════════════════════════════════════
              XIII. HEIST BLUEPRINTS
             ═══════════════════════════════════════════════════════ */}
          <Section id="heist" num="XIII" title="Heist Blueprints &mdash; Grand Heist Farming">
            <P>
              Heist la nguon thu nhap <B>on dinh bac nhat</B> trong game, dac biet cho player khong thich mapping.
              Grand Heist (Blueprint) cho reward cao hon nhieu so voi Contract thuong.
            </P>

            <H3>13.1. Loai Blueprint loi nhuan cao nhat</H3>
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
                    <td>Alternate quality gems, co the drop <Gold>Awakened gem</Gold></td>
                    <td><Gold>10-200c</Gold> (Awakened gem = jackpot)</td>
                  </tr>
                  <tr>
                    <td className="text-poe-gold font-semibold">Currency / Deception</td>
                    <td>Stacked Deck, raw currency, Exalted Orb</td>
                    <td><Gold>15-50c</Gold> (on dinh nhat)</td>
                  </tr>
                  <tr>
                    <td className="text-poe-gold font-semibold">Enchanted Armaments</td>
                    <td>Enchanted item, enchanted base (co the co lab enchant)</td>
                    <td>5-30c</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <H3>13.2. Reveal Strategy</H3>
            <ul className="mb-4 space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
                <span><B>Khong can reveal het:</B> Moi Blueprint da co 1 wing revealed san. Reveal them wing ton Rogue&apos;s Marker va thoi gian &mdash; thuong khong dang.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
                <span><B>Giam gia reveal:</B> Dung <B>Gianna</B> (rogue) trong Contract <B>Deception</B> de nhan <Gold>40% giam gia reveal</Gold>.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" />
                <span><B>Khi nao nen reveal:</B> Chi reveal wing 2 neu Blueprint co <Gold>reward room rat tot</Gold> (Currency room, Gem room). Tinh toan: reveal cost vs expected reward.</span>
              </li>
            </ul>

            <H3>13.3. Trinket Farming</H3>
            <P>
              Trinket la trang bi dac biet <B>chi hoat dong trong Heist</B>. Chung luon drop <B>corrupted</B> tu Grand Heist.
            </P>
            <H4>Mod trinket dat nhat:</H4>
            <div className="overflow-x-auto">
              <table className="poe-table">
                <thead>
                  <tr><th>Mod</th><th>Hieu qua</th><th>Gia tri (~)</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-poe-gold font-semibold">1% Chaos &rarr; Divine</td>
                    <td>1% co hoi Chaos Orb drop thanh <Gold>Divine Orb</Gold> trong Heist</td>
                    <td><Gold>10-50 Divine</Gold></td>
                  </tr>
                  <tr>
                    <td className="text-poe-gold font-semibold">3% Regal &rarr; Divine</td>
                    <td>3% co hoi Regal Orb drop thanh Divine Orb</td>
                    <td><Gold>5-20 Divine</Gold></td>
                  </tr>
                  <tr>
                    <td className="text-poe-gold font-semibold">3% Basic Currency Duplicated</td>
                    <td>3% co hoi currency drop duoc nhan doi</td>
                    <td>5-15 Divine</td>
                  </tr>
                  <tr>
                    <td className="text-poe-gold font-semibold">Rogue&apos;s Marker Duplicate</td>
                    <td>10% co hoi Smuggler&apos;s Cache duplicate Rogue&apos;s Marker</td>
                    <td>1-5 Divine</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Tip>
              <B>Trinket farming tip:</B> Trinket drop corrupted nen <B>khong the craft</B> binh thuong.
              Co the dung <B>Tainted currency</B> (Tainted Orb of Fusing, etc.) de modify.
              Neu drop trinket voi mod &ldquo;1% Chaos &rarr; Divine&rdquo;, giu no va farm Heist lien tuc &mdash;
              moi Heist run se co khoang 30-50 Chaos Orb drop, 1% = trung binh <Gold>1 Divine moi 2-3 run</Gold>.
            </Tip>

            <H3>13.4. Rogue toi uu</H3>
            <div className="overflow-x-auto">
              <table className="poe-table">
                <thead>
                  <tr><th>Rogue</th><th>Job</th><th>Dung cho</th></tr>
                </thead>
                <tbody>
                  <tr><td className="text-poe-gold font-semibold">Gianna</td><td>Deception</td><td><Gold>Giam 40% reveal cost</Gold>. Dung trong Contract de nhan discount.</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Karst</td><td>Lockpicking</td><td>Mo chest nhanh nhat. Uu tien cho Blueprint voi nhieu locked chest.</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Niles</td><td>Counter-Thaumaturgy</td><td>Vo hieu hoa phep. Tot cho Blueprint voi nhieu trap.</td></tr>
                  <tr><td className="text-poe-gold font-semibold">Vinderi</td><td>Demolition</td><td><Gold>Co hoi duplicate</Gold> reward tu chest. Cuc ky gia tri cho Blueprint.</td></tr>
                </tbody>
              </table>
            </div>

            <H3>13.5. Tips toi uu Heist</H3>
            <ul className="mb-4 space-y-2 text-sm">
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span><B>Scour Blueprint rare/magic:</B> Additional rarity/mods tren Blueprint <B>khong tang reward</B> nhung lam Blueprint kho hon. Luon Scour ve normal.</span></li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span><B>Toc do la tien:</B> Chay nhanh nhat co the. Mo chest, lay reward, chay ra. Khong can giet het quai.</span></li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span><B>Contract farming cho marker:</B> Chay Contract Deception (nhanh nhat) de kiem Rogue&apos;s Marker nuoi Blueprint.</span></li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span><B>Stacked Deck:</B> Da so loi nhuan tu Heist la Stacked Deck. <Gold>Mo het</Gold> (don&apos;t sell sealed) vi expected value khi mo cao hon ban sealed.</span></li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-poe-gold-dim" /><span><B>Rogue equipment:</B> Nang cap gear cho Rogue (tang reduced alert, toc do job). Moi upgrade giam thoi gian chay dang ke.</span></li>
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
                <Gold>Path of Exile endgame la noi ma moi quyet dinh nho deu anh huong den loi nhuan.</Gold>
                <br />
                Chon 1-2 strategy chinh, master no, roi mo rong dan. Khong co &ldquo;best strategy&rdquo; tuyet doi &mdash;
                chi co strategy phu hop voi build, thoi gian choi, va market hien tai cua ban.
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
