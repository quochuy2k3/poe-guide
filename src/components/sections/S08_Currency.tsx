import { Section, H3, P, B, Gold, Panel, Tip, Warning } from "@/components/ui";
import SectionImage from "@/components/SectionImage";

export default function S08_Currency() {
 return (
  <Section id="currency" num="VIII" title="Hệ Thống Tiền Tệ & Kinh Tế">
   <SectionImage src="/images/currency.jpg" alt="POE Currency Orbs" className="mb-6" />

   <H3>PoE không có gold — hiểu hệ thống Orbs</H3>
   <P>
    Mỗi Orb vừa là <B>tiền tệ</B> vừa là <B>crafting material</B>. Đây là điều làm PoE economy
    phức tạp và thú vị hơn bất kỳ ARPG nào khác.
   </P>

   <H3>Bảng Xếp Hạng Tiền Tệ (Rẻ Đến Đắt)</H3>
   <div className="overflow-x-auto mb-4">
    <table className="poe-table">
     <thead>
      <tr><th>Currency</th><th>Chức năng crafting</th><th>Giá trị trading</th><th>Chiến lược sử dụng</th></tr>
     </thead>
     <tbody>
      {[
       ["Scroll of Wisdom", "Identify item", "~0.1c / stack", "Dùng thoải mái. Nhặt hết khi leveling."],
       ["Orb of Transmutation", "Normal → Magic", "~0.05c", "Dùng cho white maps. Giữ ~50 cho endgame."],
       ["Orb of Alteration", "Reroll Magic mods", "~0.07c", "TIẾT KIỆM — cần hàng trăm cho endgame crafting (flask, jewel, cluster)."],
       ["Orb of Alchemy", "Normal → Rare", "~0.3c", "Dùng cho maps. Đừng dùng cho gear khi leveling."],
       ["Chaos Orb", "Reroll Rare mods", "1c (base currency)", "TIỀN CHÍNH. Dùng để MUA ĐỒ, không nên chaos spam craft."],
       ["Orb of Fusing", "Reroll socket links", "~0.2c", "Cần ~1000-1500 để 6-link. Hoặc dùng bench craft (1500 fusing guaranteed)."],
       ["Jeweller's Orb", "Reroll socket count", "~0.1c", "Cần ~100-350 để 6-socket. Quality item 20% trước khi jeweller."],
       ["Orb of Regret", "Xóa 1 passive point", "~0.5c", "Sửa cây kỹ năng. Giữ 20-30 cho emergency."],
       ["Vaal Orb", "Corrupt item (irreversible)", "~1c", "Corrupt gems, maps, unique items. CÓ THỂ brick item! Chỉ dùng trên item sẵn sàng mất."],
       ["Gemcutter's Prism", "Thêm 1% gem quality", "~1c", "Vendor recipe tốt hơn: gem lv20 + 1 GCP = gem lv1 q20."],
       ["Exalted Orb", "Thêm 1 random mod vào Rare", "~10c", "Từng là tiền lớn. Nay giá giảm nhiều. Dùng cho metamod crafting."],
       ["Divine Orb", "Reroll giá trị số mods", "TIỀN LỚN (~150c+)", "ĐỪNG BAO GIỜ dùng bừa! 1 Divine = 1 ngày farm. Dùng mua gear endgame."],
       ["Mirror of Kalandra", "Copy 1 item (rarest)", "Hàng trăm Divine", "Drop chance ~1/30,000 giờ chơi. Dùng để mirror perfect items."],
      ].map(([name, func, val, strategy]) => (
       <tr key={name}>
        <td className="text-poe-gold font-semibold whitespace-nowrap text-xs">{name}</td>
        <td className="text-xs">{func}</td>
        <td className={`text-xs whitespace-nowrap ${val.includes("TIỀN") ? "text-poe-gold-bright font-semibold" : "text-poe-text-dim"}`}>{val}</td>
        <td className="text-xs">{strategy}</td>
       </tr>
      ))}
     </tbody>
    </table>
   </div>

   <H3>Phương Pháp Farm Tiền (Theo Hiệu Quả)</H3>
   <div className="grid gap-3 sm:grid-cols-2 mb-4">
    {[
     { method: "Chaos Recipe (early)", rate: "50-80c/hour", desc: "Bán full set unid Rare items iLvl 60-74. Setup 1 quad tab, farm Blood Aqueduct hoặc white maps.", when: "Tuần 1-2 league, khi chưa có gear" },
     { method: "Essence Farming", rate: "100-200c/hour", desc: "Atlas spec Essence nodes, mỗi map 3-5 Essence monsters. Shrieking+ sell hoặc dùng craft.", when: "Mọi giai đoạn, rất ổn định" },
     { method: "Expedition Farming", rate: "150-300c/hour", desc: "Atlas spec Expedition, chạy logbooks. Tujen gambling, Rog crafting = huge profit.", when: "Mid-late league, cần vốn ban đầu" },
     { method: "Map Flipping", rate: "100-500c/hour", desc: "Mua maps rẻ bulk, chạy rồi bán returns. Cần hiểu market.", when: "Khi hiểu economy, mid-late league" },
     { method: "Boss Carry", rate: "200-500c/hour", desc: "Build boss killer, bán service đánh boss cho người khác. Maven, Uber Elder rất popular.", when: "Khi có build mạnh, tuần 2+" },
     { method: "MF Farming", rate: "300-1000c+/hour", desc: "Full magic find gear, farm specific maps. T16 Crimson Temple cho The Apothecary card.", when: "Invest lớn (50+ Div), late game" },
    ].map(({ method, rate, desc, when }) => (
     <Panel key={method}>
      <div className="flex items-center justify-between mb-1">
       <span className="font-heading text-sm font-bold text-poe-gold">{method}</span>
       <span className="text-xs text-poe-green font-semibold">{rate}</span>
      </div>
      <p className="text-xs text-poe-text leading-relaxed">{desc}</p>
      <p className="mt-1 text-[11px] text-poe-text-dim">Thời điểm: {when}</p>
     </Panel>
    ))}
   </div>

   <Warning>
    <B>Quy tắc vàng:</B> ĐỪNG craft bừa khi leveling. GIỮ NGUYÊN currency → dùng để MUA đồ từ trade site.
    Mua gear có sẵn always hiệu quả hơn craft random cho người mới.
   </Warning>

   <H3>Giao Dịch — Mua Bán Hiệu Quả</H3>
   <ul className="space-y-2 text-sm">
    {[
     { title: "Dùng pathofexile.com/trade", desc: "Official trade site. Filter theo mods, price, iLvl. Bookmark các search thường dùng." },
     { title: "Giá đồ:", desc: "Xem giá tham khảo trên poe.ninja. Nếu item bạn thấy rẻ hơn 50% so với average → có thể scam hoặc bị fix price." },
     { title: "Pricing own items:", desc: "Search exact mods trên trade site, sort by price, đặt giá giữa range. Nếu item bán trong 1 phút = giá quá rẻ." },
     { title: "Bulk trade:", desc: "Mua currency/maps bulk qua trade site currency tab. Whisper nhiều người, người reply đầu tiên = deal." },
     { title: "Live search:", desc: "Set up live search cho item cụ thể bạn cần. Nhận notification khi có item mới list giá tốt." },
    ].map(({ title, desc }, i) => (
     <li key={i} className="flex gap-2">
      <span className="text-poe-gold shrink-0">▸</span>
      <span><B>{title}</B> {desc}</span>
     </li>
    ))}
   </ul>
  </Section>
 );
}
