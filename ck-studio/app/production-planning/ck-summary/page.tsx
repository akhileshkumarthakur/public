import PageHeader from "@/components/production-planning/PageHeader";
import CKStockBars from "@/components/production-planning/CKStockBars";
import StatCard from "@/components/production-planning/StatCard";
import { LOCATIONS, FLAVORS, FRIDGE_CAP, SHEET_DATA } from "@/lib/production-planning/constants";

export default function CKSummaryPage() {
  const { ckStock, openingStock } = SHEET_DATA;

  const ckTotal = Object.values(ckStock).reduce((a, b) => a + b, 0);

  const totalFreeSlots = LOCATIONS.reduce((s, loc) => {
    const used = Object.values(openingStock[loc]).reduce((a, b) => a + b, 0);
    return s + (FRIDGE_CAP - used);
  }, 0);

  const lowStockAlerts = LOCATIONS.reduce((s, loc) =>
    s + FLAVORS.filter(f => openingStock[loc][f] < 10).length, 0
  );

  const stats = [
    { label: "CK Total Stock",   value: ckTotal,        sub: "of 1000 capacity",       color: "#f97316" },
    { label: "Total Outlets",    value: LOCATIONS.length, sub: "active locations",       color: "#3b82f6" },
    { label: "Free Slots",       value: totalFreeSlots, sub: "across all outlets",      color: "#a855f7" },
    { label: "Low Stock Alerts", value: lowStockAlerts, sub: "flavors < 10 units",      color: "#ef4444" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
      <PageHeader
        title="CK Summary"
        subtitle='Central Kitchen overview &nbsp;|&nbsp; CK Cap: <span style="color:#f97316;font-family:monospace">1000</span> total'
      />

      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 18 }}>
        {/* CK Stock Bars + Sheet Badges */}
        <CKStockBars />

        {/* Stat Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 14 }}>
          {stats.map(s => (
            <StatCard key={s.label} label={s.label} value={s.value} sub={s.sub} color={s.color} />
          ))}
        </div>
      </div>

      {/* Per-Location mini summary table */}
      <div style={{
        background: "rgba(15,23,42,0.8)", border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: 14, overflow: "hidden"
      }}>
        <div style={{ padding: "14px 20px", borderBottom: "1px solid rgba(255,255,255,0.05)", fontSize: 12, fontWeight: 600, color: "#64748b" }}>
          📍 Outlet Utilisation At a Glance
        </div>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "rgba(249,115,22,0.06)" }}>
              {["Outlet", "Stock", "Free Slots", "Fill %", "Status"].map(h => (
                <th key={h} style={{ padding: "10px 20px", textAlign: h === "Outlet" ? "left" : "center", fontSize: 10, color: "#64748b", fontFamily: "monospace", letterSpacing: "0.1em", textTransform: "uppercase" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {LOCATIONS.map(loc => {
              const used = Object.values(openingStock[loc]).reduce((a, b) => a + b, 0);
              const free = FRIDGE_CAP - used;
              const pct  = Math.round((used / FRIDGE_CAP) * 100);
              const status = pct < 40 ? { label: "Low",  color: "#ef4444" }
                           : pct < 70 ? { label: "Good", color: "#22c55e" }
                           :            { label: "High", color: "#f59e0b" };
              return (
                <tr key={loc} style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
                  <td style={{ padding: "12px 20px", fontWeight: 600, fontSize: 13 }}>{loc}</td>
                  <td style={{ padding: "12px 20px", textAlign: "center", fontFamily: "monospace", fontSize: 13 }}>{used}</td>
                  <td style={{ padding: "12px 20px", textAlign: "center", fontFamily: "monospace", fontSize: 13, color: "#64748b" }}>{free}</td>
                  <td style={{ padding: "12px 20px", textAlign: "center" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, justifyContent: "center" }}>
                      <div style={{ width: 60, height: 5, background: "#1e293b", borderRadius: 99, overflow: "hidden" }}>
                        <div style={{ width: `${pct}%`, height: "100%", background: status.color, borderRadius: 99 }} />
                      </div>
                      <span style={{ fontFamily: "monospace", fontSize: 11, color: "#64748b" }}>{pct}%</span>
                    </div>
                  </td>
                  <td style={{ padding: "12px 20px", textAlign: "center" }}>
                    <span style={{ padding: "3px 10px", borderRadius: 6, fontSize: 11, fontWeight: 700, fontFamily: "monospace", background: `${status.color}20`, color: status.color }}>
                      {status.label}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
