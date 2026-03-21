import { Section, H3, P, B, Gold, Panel, Tip, Warning } from "@/components/ui";
import SectionImage from "@/components/SectionImage";

export default function S06_PassiveTree() {
 return (
  <Section id="passive-tree" num="VI" title="Cây Kỹ Năng Thụ Động & Ngọc">
   <SectionImage src="/images/passive-tree.jpg" alt="POE Passive Skill Tree" className="mb-6" />

   <P>
    1.325+ nút — trông daunting nhưng thực tế chỉ cần hiểu vài nguyên tắc.
    Mỗi build chỉ lấy ~110-123 nút, phần lớn là &quot;đường đi&quot; để tới Notable/Keystone quan trọng.
   </P>

   <H3>Loại nút chi tiết</H3>
   <div className="overflow-x-auto mb-4">
    <table className="poe-table">
     <thead>
      <tr><th>Loại</th><th>Nhận biết</th><th>Tác dụng</th><th>Ví dụ cụ thể</th></tr>
     </thead>
     <tbody>
      {[
       ["Small / Travel", "Nhỏ nhất", "Bonus nhỏ 8-12%, dùng để đi tới Notable", "+10 Str, +12% Fire Dmg, +5% Attack Speed"],
       ["Notable", "Trung bình, có tên", "Bonus đáng kể 20-40%+, mục tiêu chính", "\"Elemental Overload\": crit không tăng dmg nhưng x1.4 ele dmg"],
       ["Keystone", "Lớn nhất, hình đặc biệt", "Thay đổi fundamental game mechanic — có trade-off", "\"Resolute Technique\": 100% hit nhưng không bao giờ crit"],
       ["Mastery", "Ở giữa cluster", "Chọn 1 trong nhiều bonus mạnh khi allocate Notable gần đó", "Fire Mastery: \"+25% Fire DoT Multi\" hoặc \"+2% max Fire Res\""],
       ["Jewel Socket", "Hình thoi", "Gắn Jewel item: Rare jewel, Unique jewel, Cluster jewel", "Rare Jewel: +7% life, +12% phys dmg, +15% crit multi"],
      ].map(([type, look, effect, example]) => (
       <tr key={type}>
        <td className="text-poe-gold font-semibold whitespace-nowrap">{type}</td>
        <td className="text-xs whitespace-nowrap">{look}</td>
        <td className="text-xs">{effect}</td>
        <td className="text-xs text-poe-text-dim">{example}</td>
       </tr>
      ))}
     </tbody>
    </table>
   </div>

   <H3>Keystones Quan Trọng Nhất</H3>
   <div className="grid gap-3 sm:grid-cols-2 mb-4">
    {[
     { name: "Resolute Technique", desc: "Hits không bao giờ miss, không bao giờ crit. Build không crit, tiết kiệm invest accuracy + crit.", for: "Non-crit melee/attack builds" },
     { name: "Elemental Overload", desc: "Crit không tăng damage trực tiếp nhưng gây buff x1.4 elemental damage 8 giây. Cần ít nhất 1 hit crit để proc.", for: "Spell builds không invest crit" },
     { name: "Chaos Inoculation (CI)", desc: "Max Life = 1, immune Chaos Damage. Chuyển 100% sang Energy Shield.", for: "ES builds endgame" },
     { name: "Pain Attunement", desc: "30% more Spell Damage khi Low Life (<50% life). Combo với Prism Guardian/Shav's.", for: "Low Life Aura stackers" },
     { name: "Iron Reflexes", desc: "Convert tất cả Evasion → Armour. Kết hợp Grace + Determination = armour khủng.", for: "Pure armour builds, Champion" },
     { name: "Mind Over Matter (MoM)", desc: "40% damage taken from Mana before Life. Cần mana pool lớn.", for: "Hierophant, mana-based builds" },
     { name: "Ghost Dance", desc: "ES recharge grant Ghost Shroud, mỗi shroud phục hồi ES khi nhận hit. Cycling defense.", for: "Hybrid evasion/ES builds" },
     { name: "Unwavering Stance", desc: "Cannot Evade, Cannot be Stunned. Trade evasion cho stun immunity.", for: "Melee builds bị stun-lock" },
    ].map(({ name, desc, for: forWhat }) => (
     <Panel key={name}>
      <div className="font-heading text-sm font-bold text-poe-gold">{name}</div>
      <p className="mt-1 text-xs text-poe-text leading-relaxed">{desc}</p>
      <p className="mt-1 text-[11px] text-poe-text-dim">Dùng cho: {forWhat}</p>
     </Panel>
    ))}
   </div>

   <H3>Cluster Jewels — Mở Rộng Cây Kỹ Năng</H3>
   <P>
    <B>Cluster Jewels</B> là jewels gắn vào outer socket, tạo ra <Gold>cành cây passive mới</Gold> với Notables custom.
    Đây là endgame scaling mạnh nhất cho nhiều builds — cho phép stack bonus không có trên tree gốc.
   </P>
   <div className="overflow-x-auto mb-4">
    <table className="poe-table">
     <thead>
      <tr><th>Loại</th><th>Passive points</th><th>Notable slots</th><th>Ví dụ Notable tốt nhất</th></tr>
     </thead>
     <tbody>
      <tr><td className="text-poe-gold font-semibold">Large Cluster</td><td>8-12 passives</td><td>2-3 Notables + 2 Medium sockets</td><td>Blanketed Snow (+10% cold pen), Prismatic Heart (+30% ele dmg)</td></tr>
      <tr><td className="text-poe-gold font-semibold">Medium Cluster</td><td>4-6 passives</td><td>1-2 Notables + 1 Small socket</td><td>Vast Power (+20% AoE), Brushwork (+20% cast speed)</td></tr>
      <tr><td className="text-poe-gold font-semibold">Small Cluster</td><td>2-3 passives</td><td>1 Notable</td><td>Fettle (+20 max life), Born of Chaos (+3% max chaos res)</td></tr>
     </tbody>
    </table>
   </div>

   <Tip>
    <B>Budget tip:</B> Cluster jewels giá 1-5 Chaos cho các loại thường. Nhưng cluster với 2 good Notables + Jewel socket
    trên Large Cluster có thể trị giá <Gold>nhiều Divine</Gold>. Craft cluster jewels bằng Alteration + Augmentation
    là cách kiếm tiền hiệu quả.
   </Tip>

   <H3>Nguyên Tắc Xây Dựng Cây Kỹ Năng</H3>
   <ol className="space-y-3 text-sm mb-4">
    {[
     { title: "Life/ES trước", desc: "180-200% increased Max Life trên tree. Cho ES builds: 200-250% increased ES. Đây là số 1." },
     { title: "Cap Resistances", desc: "75% Fire/Cold/Lightning. Nếu tree không đủ, bù bằng gear. Chaos resist tối thiểu 0%." },
     { title: "Damage after defense", desc: "Chỉ lấy damage nodes SAU KHI đủ defense. Build 5000 life + thấp DPS > Build 3000 life + cao DPS." },
     { title: "Efficiency — point per node", desc: "Mỗi travel node phải justify bằng destination. Nếu cần 5 travel nodes để lấy 1 Notable mediocre → skip." },
     { title: "Jewel sockets ưu tiên", desc: "1 Rare Jewel socket = 4-5 good passive nodes. Mỗi build nên lấy 3-5 jewel sockets." },
     { title: "Path of Building verification", desc: "LUÔN import tree vào PoB để kiểm tra. Đừng chỉ nhìn tree trên web — PoB tính chính xác hơn." },
    ].map(({ title, desc }, i) => (
     <li key={i} className="flex gap-3">
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-poe-gold/15 font-heading text-[11px] font-bold text-poe-gold">
       {i + 1}
      </span>
      <div>
       <span className="font-semibold text-poe-text-bright">{title}</span>
       <span className="text-poe-text-dim"> — {desc}</span>
      </div>
     </li>
    ))}
   </ol>

   <H3>Respec — Sửa sai</H3>
   <P>
    Mỗi <Gold>Orb of Regret</Gold> xóa 1 nút. Full respec 100+ nút ≈ 100 Regrets (~30-50 Chaos).
    Một số quest cho Refund Points miễn phí (tổng ~24 refund points từ campaign).
    Nếu build sai quá nhiều, sometimes leveling nhân vật mới nhanh hơn respec.
   </P>
  </Section>
 );
}
