import { FLAVORS, LOCATIONS, FLAVOR_COLORS, SHEET_DATA, FRIDGE_CAP } from "@/lib/production-planning/constants";

export default function FlavorTable() {
  const { openingStock, ckCapacity } = SHEET_DATA;

  const locationTotals = LOCATIONS.map(loc =>
    FLAVORS.reduce((s, f) => s + openingStock[loc][f], 0)
  );

  return (
    <div style={{ background: "rgba(15,23,42,0.8)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14, overflow: "hidden" }}>
      <div style={{ padding: "14px 20px", borderBottom: "1px solid rgba(255,255,255,0.05)", fontSize: 12, fontWeight: 600, color: "#64748b" }}>
        📋 Opening Stock — All Locations
      </div>
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "rgba(249,115,22,0.06)" }}>
              <th style={{ padding: "10px 20px", textAlign: "left", fontSize: 10, color: "#f97316", fontFamily: "monospace", letterSpacing: "0.1em", textTransform: "uppercase" }}>Flavor</th>
              <th style={{ padding: "10px 16px", textAlign: "center", fontSize: 10, color: "#64748b", fontFamily: "monospace", letterSpacing: "0.1em", textTransform: "uppercase" }}>CK Cap</th>
              {LOCATIONS.map(l => (
                <th key={l} style={{ padding: "10px 16px", textAlign: "center", fontSize: 10, color: "#64748b", fontFamily: "monospace", letterSpacing: "0.1em", textTransform: "uppercase" }}>{l}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {FLAVORS.map(f => (
              <tr key={f} style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
                <td style={{ padding: "12px 20px", display: "flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 500 }}>
                  <span style={{ width: 9, height: 9, borderRadius: "50%", background: FLAVOR_COLORS[f], display: "inline-block", border: f === "Vanilla" ? "1px solid #555" : "none" }} />
                  {f}
                </td>
                <td style={{ padding: "12px 16px", textAlign: "center", fontFamily: "monospace", fontSize: 13, color: "#f97316" }}>
                  {ckCapacity[f]}
                </td>
                {LOCATIONS.map(loc => {
                  const val = openingStock[loc][f];
                  const c = val === 0 ? "#ef4444" : val < 10 ? "#f59e0b" : "#e2e8f0";
                  return (
                    <td key={loc} style={{ padding: "12px 16px", textAlign: "center", fontFamily: "monospace", fontSize: 13, color: c }}>
                      {val === 0 ? "⚠ 0" : val}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr style={{ background: "rgba(249,115,22,0.06)", borderTop: "1px solid rgba(249,115,22,0.2)" }}>
              <td style={{ padding: "12px 20px", fontWeight: 700, color: "#f97316", fontSize: 13 }}>Total</td>
              <td style={{ padding: "12px 16px", textAlign: "center", fontFamily: "monospace", fontWeight: 700, color: "#f97316" }}>1000</td>
              {locationTotals.map((t, i) => (
                <td key={i} style={{ padding: "12px 16px", textAlign: "center", fontFamily: "monospace", fontWeight: 700, color: "#f97316" }}>{t}</td>
              ))}
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
