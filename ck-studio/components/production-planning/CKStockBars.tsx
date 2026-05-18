import { FLAVORS, FLAVOR_COLORS, SHEET_DATA } from "@/lib/production-planning/constants";

export default function CKStockBars() {
  const { ckStock, ckCapacity } = SHEET_DATA;

  return (
    <div style={{ background: "rgba(15,23,42,0.8)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14, overflow: "hidden" }}>
      <div style={{ padding: "14px 20px", borderBottom: "1px solid rgba(255,255,255,0.05)", fontSize: 12, fontWeight: 600, color: "#64748b" }}>
        🏭 CK Stock Breakdown
      </div>
      <div style={{ padding: "20px 24px" }}>
        {FLAVORS.map(f => {
          const stock = ckStock[f];
          const cap   = ckCapacity[f];
          const pct   = Math.round((stock / cap) * 100);
          return (
            <div key={f} style={{ marginBottom: 18 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13 }}>
                  <span style={{ width: 9, height: 9, borderRadius: "50%", background: FLAVOR_COLORS[f], display: "inline-block", border: f === "Vanilla" ? "1px solid #555" : "none" }} />
                  {f}
                </div>
                <span style={{ fontFamily: "monospace", fontSize: 12, color: "#94a3b8" }}>{stock} / {cap}</span>
              </div>
              <div style={{ height: 6, background: "#1e293b", borderRadius: 99, overflow: "hidden" }}>
                <div style={{ width: `${pct}%`, height: "100%", borderRadius: 99, background: FLAVOR_COLORS[f], opacity: 0.85, transition: "width 0.8s ease" }} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Sheet connection badges */}
      <div style={{ margin: "0 16px 16px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        {[
          { sheet: "Sheet 1", label: "CK Production Stock", desc: "5 flavors × CK capacity", color: "#4ade80", borderColor: "rgba(34,197,94,0.2)", bg: "rgba(34,197,94,0.08)" },
          { sheet: "Sheet 2", label: "Outlet Opening Stock", desc: "4 locations × 5 flavors",  color: "#60a5fa", borderColor: "rgba(59,130,246,0.2)", bg: "rgba(59,130,246,0.08)" },
        ].map(s => (
          <div key={s.sheet} style={{ background: "rgba(255,255,255,0.02)", borderRadius: 8, padding: 12, display: "flex", gap: 10 }}>
            <div style={{ width: 30, height: 30, borderRadius: 6, background: s.bg, border: `1px solid ${s.borderColor}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, flexShrink: 0 }}>📊</div>
            <div>
              <div style={{ fontSize: 10, fontFamily: "monospace", color: s.color }}>{s.sheet}</div>
              <div style={{ fontSize: 12, fontWeight: 600, marginTop: 1 }}>{s.label}</div>
              <div style={{ fontSize: 10, color: "#334155", marginTop: 1 }}>{s.desc}</div>
              <div style={{ marginTop: 5, display: "flex", alignItems: "center", gap: 4 }}>
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#22c55e" }} />
                <span style={{ fontSize: 9, color: "#22c55e", fontFamily: "monospace" }}>CONNECTED</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
