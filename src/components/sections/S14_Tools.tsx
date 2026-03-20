import { Section, H3, P, B, Gold, Panel, Tip, Warning } from "@/components/ui";

export default function S14_Tools() {
  return (
    <Section id="tools" num="XIV" title="Công Cụ & Tips Cuối Cùng">
      <P>
        PoE gần như <B>bắt buộc</B> phải dùng công cụ bên ngoài. Đây không phải nhược điểm — đây là
        ecosystem mà community đã xây dựng suốt hơn 10 năm.
      </P>

      <H3>Essential Tools</H3>
      <div className="grid gap-3 sm:grid-cols-2 mb-6">
        {[
          { name: "Path of Building (PoB)", site: "pathofbuilding.community", desc: "BẮT BUỘC. Plan build offline, import PoB code từ guides, tính DPS chính xác, test gear upgrades trước khi mua. Dùng fork community (không phải bản gốc).", tier: "essential" },
          { name: "poe.ninja", site: "poe.ninja", desc: "Xem meta builds (top 15,000 players), giá currency real-time, economy trends. Nơi tốt nhất để tìm ý tưởng build.", tier: "essential" },
          { name: "Filterblade", site: "filterblade.xyz", desc: "Tạo/tùy chỉnh Neversink's loot filter. BẮT BUỘC cài filter — nếu không sẽ bị overwhelm bởi item rác. Semi-strict hoặc Strict cho mapping.", tier: "essential" },
          { name: "Trade Site", site: "pathofexile.com/trade", desc: "Official trade site. Filter mods, set price ranges, live search. Dùng kèm trade macro (Awakened PoE Trade) cho in-game price check.", tier: "essential" },
          { name: "Craft of Exile", site: "craftofexile.com", desc: "Simulate crafting trước khi dùng orbs thật. Tính probability, expected cost. PHẢI dùng trước khi craft item đắt.", tier: "essential" },
          { name: "Maxroll.gg", site: "maxroll.gg/poe", desc: "Build guides chi tiết nhất: leveling guide step-by-step, gear progression, atlas strategy. Tốt nhất cho người mới.", tier: "recommended" },
          { name: "poelab.com", site: "poelab.com", desc: "Bản đồ Labyrinth hàng ngày. Lab layout thay đổi mỗi ngày — check trước khi run.", tier: "recommended" },
          { name: "Awakened PoE Trade", site: "github.com (search)", desc: "Overlay tool — Alt+D price check items in-game. PHẢI CÓ cho trading efficiently.", tier: "recommended" },
        ].map(({ name, site, desc, tier }) => (
          <Panel key={name}>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-heading text-sm font-bold text-poe-gold">{name}</span>
              {tier === "essential" && (
                <span className="rounded bg-poe-red/20 px-1.5 py-0.5 text-[9px] font-bold text-poe-red-bright uppercase">Bắt buộc</span>
              )}
            </div>
            <div className="text-[11px] text-poe-blue mb-1">{site}</div>
            <p className="text-xs text-poe-text-dim leading-relaxed">{desc}</p>
          </Panel>
        ))}
      </div>

      <H3>Lời khuyên cuối cùng</H3>
      <div className="grid gap-6 sm:grid-cols-2 mb-6">
        <Panel>
          <div className="mb-3 font-heading text-sm font-bold text-poe-green">Nên làm</div>
          <ul className="space-y-2 text-sm">
            {[
              "Theo build guide cho nhân vật đầu tiên — đừng tự build",
              "Cài loot filter Neversink ngay từ Act 1",
              "Chọn League mới nhất (Softcore Trade)",
              "Giữ currency — đừng craft bừa khi leveling",
              "Cap resistance 75% mỗi nguyên tố MỌI LÚC",
              "Ưu tiên Life trên MỌII item — sống sót > damage",
              "Dùng Path of Building kiểm tra mọi upgrade",
              "Hỏi cộng đồng Reddit r/pathofexile",
              "Học 1 league mechanic sâu thay vì biết sơ tất cả",
              "Set mục tiêu ngắn hạn: boss tiếp theo, gear tiếp theo",
            ].map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-poe-green shrink-0 text-xs">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Panel>

        <Panel>
          <div className="mb-3 font-heading text-sm font-bold text-poe-red-bright">Không nên</div>
          <ul className="space-y-2 text-sm">
            {[
              "Chọn Scion cho lần chơi đầu (quá flexible = newbie trap)",
              "Nhặt tất cả item rơi — chỉ nhặt currency + filter highlights",
              "Dùng Divine/Exalted Orb craft item leveling (giữ để trade!)",
              "Bỏ qua side quest cho passive points (mất VĨNH VIỄN)",
              "Nản khi chết — chết là cách học trong PoE",
              "Cố hiểu hết game ngay — 5000 giờ vẫn học thêm",
              "Ignore chaos resistance — Act 9+ quái gây nhiều chaos",
              "Skip Lab — Ascendancy points là power spike lớn nhất",
              "Brute force boss không hiểu mechanic — học dodge pattern",
              "Compare progress với streamers — họ chơi full-time",
            ].map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-poe-red-bright shrink-0 text-xs">✗</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Panel>
      </div>

      <div className="rounded-lg border border-poe-gold/20 bg-poe-gold/5 p-6 text-center">
        <p className="font-heading text-sm leading-relaxed text-poe-text">
          <Gold>Path of Exile là một trong những game ARPG sâu nhất từng được tạo ra.</Gold>
          <br />
          Đừng sợ bởi độ phức tạp — hãy chơi từ từ, theo build guide, và tận hưởng hành trình.
          <br />
          Mỗi League là một trải nghiệm mới hoàn toàn.
          <br />
          <span className="text-poe-gold">Chúc bạn vui khi khám phá Wraeclast!</span>
        </p>
      </div>
    </Section>
  );
}
