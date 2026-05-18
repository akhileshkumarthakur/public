import { FLAVORS, LOCATIONS, FLAVOR_COLORS, SHEET_DATA } from "@/lib/production-planning/constants";
import type { LocationFlavorMap } from "@/lib/production-planning/types";

interface Props { shipment: LocationFlavorMap; fillTarget: number; }

export default function ShipmentTable({ shipment, fillTarget }: Props) {
  const { ckStock } = SHEET_DATA;

  return (
    <div style={{ background: "rgba(15,23,42,0.8)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14, overflow: "hidden" }}>
      <div style={{ padding: "14px 20px", borderBottom: "1px solid rgba(255,255,255,0.05)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 12, fontWeight: 600, color: "#64748b" }}>🚚 Dispatch Quantities — CK → Outlets</span>
        <span style={{ fontFamily: "monospace", fontSize: 11, color: "#334155" }}>Fill target: {fillTarget}%</span>
      </div>
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "rgba(249,115,22,0.06)" }}>
              <th style={{ padding: "10px 20px", textAlign: "left",   fontSize: 10, color: "#f97316", fontFamily: "monospace", letterSpacing: "0.1em", textTransform: "uppercase" }}>Flavor</th>
              <th style={{ padding: "10px 14px", textAlign: "center", fontSize: 10, color: "#64748b", fontFamily: "monospace", letterSpacing: "0.1em", textTransform: "uppercase" }}>CK Stock</th>
              {LOCATIONS.map(l => (
                <th key={l} style={{ padding: "10px 14px", textAlign: "center", fontSize: 10, color: "#64748b", fontFamily: "monospace", letterSpacing: "0.1em", textTransform: "uppercase" }}>→ {l}</th>
              ))}
              <th style={{ padding: "10px 14px", textAlign: "center", fontSize: 10, color: "#64748b", fontFamily: "monospace", letterSpacing: "0.1em", textTransform: "uppercase" }}>Total Send</th>
            </tr>
          </thead>
          <tbody>
            {FLAVORS.map(f => {
              const rowTotal = LOCATIONS.reduce((s, l) => s + (shipment[l][f] || 0), 0);
              return (
                <tr key={f} style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
                  <td style={{ padding: "12px 20px", fontSize: 13, fontWeight: 500, display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ width: 9, height: 9, borderRadius: "50%", background: FLAVOR_COLORS[f], display: "inline-block", border: f === "Vanilla" ? "1px solid #555" : "none" }} />
                    {f}
                  </td>
                  <td style={{ padding: "12px 14px", textAlign: "center", fontFamily: "monospace", fontSize: 13, color: "#64748b" }}>
                    {ckStock[f]}
                  </td>
                  {LOCATIONS.map(loc => {
                    const val = shipment[loc][f] || 0;
                    return (
                      <td key={loc} style={{ padding: "12px 14px", textAlign: "center" }}>
                        {val === 0
                          ? <span style={{ color: "#1e293b" }}>—</span>
                          : <span style={{ background: "rgba(249,115,22,0.15)", color: "#fb923c", padding: "2px 8px", borderRadius: 5, fontFamily: "monospace", fontSize: 12, fontWeight: 700 }}>+{val}</span>
                        }
                      </td>
                    );
                  })}
                  <td style={{ padding: "12px 14px", textAlign: "center", fontFamily: "monospace", fontWeight: 700, color: "#f97316", fontSize: 14 }}>
                    {rowTotal}
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr style={{ background: "rgba(249,115,22,0.06)", borderTop: "1px solid rgba(249,115,22,0.2)" }}>
              <td style={{ padding: "12px 20px", fontWeight: 700, color: "#f97316", fontSize: 13 }}>Total</td>
              <td style={{ padding: "12px 14px", textAlign: "center", fontFamily: "monospace", fontWeight: 700, color: "#64748b" }}>
                {Object.values(SHEET_DATA.ckStock).reduce((a, b) => a + b, 0)}
              </td>
              {LOCATIONS.map(loc => (
                <td key={loc} style={{ padding: "12px 14px", textAlign: "center", fontFamily: "monospace", fontWeight: 700, color: "#f97316" }}>
                  {FLAVORS.reduce((s, f) => s + (shipment[loc][f] || 0), 0)}
                </td>
              ))}
              <td style={{ padding: "12px 14px", textAlign: "center", fontFamily: "monospace", fontWeight: 700, color: "#f97316" }}>
                {LOCATIONS.reduce((s, l) => s + FLAVORS.reduce((ss, f) => ss + (shipment[l][f] || 0), 0), 0)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
