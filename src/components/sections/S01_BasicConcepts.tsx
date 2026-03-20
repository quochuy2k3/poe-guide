import { Section, H3, P, B, Gold, Panel, Tip, Warning } from "@/components/ui";

export default function S01_BasicConcepts() {
 return (
  <Section id="intro" num="I" title="Khái Niệm Cơ Bản — Nền Tảng Trước Khi Chơi">
   <H3>Game này hoạt động thế nào?</H3>
   <P>
    Path of Exile là ARPG nhìn từ trên xuống (isometric view). Bạn tạo nhân vật, bắt đầu ở
    bãi biển hoang tàn <B>Twilight Strand</B>, đi qua <B>10 Acts</B> campaign. Mỗi Act có zone
    riêng, quái riêng, boss riêng. Campaign mất ~15-30 giờ cho người mới, ~4-6 giờ cho player
    có kinh nghiệm, và dưới 3 giờ cho speedrunner.
   </P>
   <P>
    Sau 10 Acts mới vào <B>endgame</B> — phần chơi chính chiếm 95% thời gian. Endgame bao gồm
    hệ thống <Gold>Atlas of Worlds</Gold> (chạy map vô hạn), boss fights, crafting, và trading.
    Đây là nơi game thực sự bắt đầu.
   </P>

   <H3>Cấu trúc một League (Mùa giải)</H3>
   <P>
    PoE vận hành theo <B>chu kỳ 13 tuần (3 tháng)</B>. Mỗi League mới:
   </P>
   <ul className="mb-4 space-y-2 text-sm">
    <li className="flex gap-2">
     <span className="text-poe-gold shrink-0">▸</span>
     <span><B>Tuần 1-2:</B> League start — mọi người rush campaign, economy chưa ổn định. Currency rất đắt, item hiếm. Thời điểm kiếm tiền tốt nhất nếu biết cách.</span>
    </li>
    <li className="flex gap-2">
     <span className="text-poe-gold shrink-0">▸</span>
     <span><B>Tuần 3-6:</B> Mid-league — economy ổn định, giá item giảm. Thời điểm tốt để build thứ 2 hoặc min-max build chính.</span>
    </li>
    <li className="flex gap-2">
     <span className="text-poe-gold shrink-0">▸</span>
     <span><B>Tuần 7-13:</B> Late league — player base giảm, item rẻ. Tốt cho người mới vào thử nghiệm nhiều build.</span>
    </li>
   </ul>

   <H3>Thuật ngữ chuyên sâu</H3>
   <div className="overflow-x-auto">
    <table className="poe-table">
     <thead>
      <tr><th>Thuật ngữ</th><th>Nghĩa chi tiết</th></tr>
     </thead>
     <tbody>
      {[
       ["ARPG", "Action Role-Playing Game — nhìn isometric, combat real-time, loot-driven"],
       ["Build", "Tổng thể thiết kế nhân vật: class, ascendancy, main skill, support gems, passive tree, gear, flasks, jewels, pantheon"],
       ["DPS", "Damage Per Second. Có nhiều loại: tooltip DPS (thường sai), PoB DPS (chính xác hơn), effective DPS (tính cả uptime)"],
       ["PoB", "Path of Building — tool tính toán build offline, BẮT BUỘC phải dùng cho mid/endgame"],
       ["Clearspeed", "Tốc độ clear quái trong map — càng nhanh càng nhiều currency/giờ"],
       ["Mapping", "Hoạt động chạy map endgame liên tục để farm currency và item"],
       ["Juicing", "Thêm nhiều modifier vào map (scarab, sextant, fragment) để tăng difficulty + rewards"],
       ["MF", "Magic Find — gear tăng Item Quantity (IIQ) và Item Rarity (IIR) để farm nhiều loot hơn"],
       ["Min-max", "Tối ưu hóa build đến mức tối đa, thường rất tốn currency"],
       ["GG item", "God-Gear — item cực tốt, thường trị giá nhiều Divine Orbs"],
       ["Mirror tier", "Item hoàn hảo, đáng để dùng Mirror of Kalandra (item đắt nhất game) để copy"],
       ["Softcore Trade", "League phổ biến nhất — chết mất 10% EXP, có thể trade với người khác"],
       ["HC / SSF / HCSSF", "Hardcore (chết = out), Solo Self-Found (không trade), hoặc cả hai — challenge modes"],
       ["Zoomzoom", "Playstyle tập trung tốc độ clear, sacrifice tankiness cho speed"],
       ["Facetank", "Build đủ tanky để đứng yên chịu đòn boss mà không chết"],
       ["One-shot", "Bị giết từ full HP bởi 1 hit — nguyên nhân chết #1 trong PoE"],
       ["Shotgun", "Nhiều projectile hit cùng 1 target — cực mạnh cho single target DPS"],
       ["Leech", "Hút máu/mana khi gây damage — defense layer quan trọng"],
       ["Flask piano", "Nhấn tất cả 5 flask liên tục — kỹ thuật cơ bản trong mapping"],
       ["6L / 5L", "6-link / 5-link — số lượng socket được link trên body armour, quyết định damage output"],
      ].map(([term, desc]) => (
       <tr key={term}>
        <td className="text-poe-gold font-semibold whitespace-nowrap">{term}</td>
        <td>{desc}</td>
       </tr>
      ))}
     </tbody>
    </table>
   </div>

   <H3>League Types — Chọn đúng mode</H3>
   <div className="grid gap-4 sm:grid-cols-2 mb-4">
    <Panel>
     <div className="font-heading text-sm font-bold text-poe-gold mb-2">Softcore Trade League</div>
     <ul className="space-y-1 text-xs text-poe-text-dim">
      <li>▸ 90%+ player base chọn mode này</li>
      <li>▸ Chết mất 10% EXP (không mất level, không mất item)</li>
      <li>▸ Trade tự do với tất cả player</li>
      <li>▸ Economy sôi động, dễ mua gear upgrade</li>
      <li>▸ <span className="text-poe-green">Khuyên cho: mọi người mới</span></li>
     </ul>
    </Panel>
    <Panel>
     <div className="font-heading text-sm font-bold text-poe-gold mb-2">SSF (Solo Self-Found)</div>
     <ul className="space-y-1 text-xs text-poe-text-dim">
      <li>▸ Không thể trade — tự farm tất cả</li>
      <li>▸ Cần hiểu crafting sâu hơn</li>
      <li>▸ Build phải self-sufficient, không rely vào unique items hiếm</li>
      <li>▸ Có thể migrate sang Trade League bất cứ lúc nào</li>
      <li>▸ <span className="text-poe-gold">Khuyên cho: player muốn thử thách</span></li>
     </ul>
    </Panel>
    <Panel>
     <div className="font-heading text-sm font-bold text-poe-gold mb-2">Hardcore</div>
     <ul className="space-y-1 text-xs text-poe-text-dim">
      <li>▸ Chết 1 lần = nhân vật chuyển sang SC vĩnh viễn</li>
      <li>▸ Build phải ưu tiên defense trên hết</li>
      <li>▸ Economy khác biệt — item giá trị hơn nhiều</li>
      <li>▸ <span className="text-poe-red-bright">Không khuyên cho người mới</span></li>
     </ul>
    </Panel>
    <Panel>
     <div className="font-heading text-sm font-bold text-poe-gold mb-2">Standard</div>
     <ul className="space-y-1 text-xs text-poe-text-dim">
      <li>▸ Server vĩnh viễn — nhân vật không bao giờ bị reset</li>
      <li>▸ Không có league mechanic mới</li>
      <li>▸ Economy bị inflated — item legacy cực đắt</li>
      <li>▸ Ít người chơi, trade chậm</li>
      <li>▸ <span className="text-poe-text-dim">Chỉ dành cho: casual player muốn giữ nhân vật lâu dài</span></li>
     </ul>
    </Panel>
   </div>

   <H3>Vendor Recipes quan trọng</H3>
   <P>
    Vendor recipes là các công thức ẩn — bán đúng combo item cho NPC sẽ nhận lại item/currency đặc biệt:
   </P>
   <div className="overflow-x-auto">
    <table className="poe-table">
     <thead>
      <tr><th>Recipe</th><th>Cách làm</th><th>Nhận được</th><th>Khi nào dùng</th></tr>
     </thead>
     <tbody>
      {[
       ["Chromatic Orb", "Bán item có 3 màu socket liên kết (R-G-B linked)", "1 Chromatic Orb", "Suốt game, nhặt hết RGB items"],
       ["Chaos Recipe", "Bán full set Rare item (mỗi slot) level 60-74 chưa identify", "2 Chaos Orb (unid) hoặc 1 Chaos (id)", "Early mapping, kiếm chaos nhanh"],
       ["Regal Recipe", "Bán full set Rare item level 75+", "1 Regal Orb", "Ít dùng, chaos recipe tốt hơn"],
       ["+1 Level Wand", "Magic wand + Topaz Ring + Orb of Alteration", "Wand có +1 Lightning gem level", "Leveling caster, rất mạnh Act 1-4"],
       ["Physical weapon", "Whetstone + Magic weapon + Rustic Sash", "Weapon có % Phys Damage", "Leveling melee, Act 1-3"],
       ["Movement speed boots", "Magic boots + Quicksilver Flask + Orb of Augmentation", "Boots có 10% MS", "Early game nếu chưa có MS boots"],
       ["21 quality gems", "Bán 1 gem level 20 + 1 GCP cho vendor", "Gem level 1 với 20% quality", "Khi gem hit level 20, recipe rồi level lại"],
      ].map(([name, method, result, when]) => (
       <tr key={name}>
        <td className="text-poe-gold font-semibold whitespace-nowrap">{name}</td>
        <td className="text-xs">{method}</td>
        <td className="text-poe-text-bright text-xs">{result}</td>
        <td className="text-poe-text-dim text-xs">{when}</td>
       </tr>
      ))}
     </tbody>
    </table>
   </div>

   <Tip>
    <B>Pro tip:</B> Chaos recipe unidentified (không dùng Scroll of Wisdom) cho <Gold>2 Chaos</Gold> thay vì 1.
    Setup 1 quad tab cho chaos recipe — mỗi khi đầy, bán 1 lần lấy ~20 Chaos. Rất hiệu quả trong tuần đầu league.
   </Tip>
  </Section>
 );
}
