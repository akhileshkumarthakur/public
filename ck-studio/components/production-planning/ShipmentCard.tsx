import { FLAVORS, FRIDGE_CAP } from "@/lib/production-planning/constants";
import type { Location } from "@/lib/production-planning/types";

interface Props {
  location: Location;
  color: string;
  currentStock: Record<string, number>;
  shipQty: Record<string, number>;
  animDelay?: string;
}

export default function ShipmentCard({ location, color, currentStock, shipQty, animDelay = "0s" }: Props) {
  const sending = Object.values(shipQty).reduce((a, b) => a + b, 0);
  const afterTotal = Object.values(currentStock).reduce((a, b) => a + b, 0) + sending;
  const afterPct = Math.round((afterTotal / FRIDGE_CAP) * 100);

  return (
    <div className="animate-slide-up" style={{
      animationDelay: animDelay,
      background: "rgba(15,23,42,0.8)", border: "1px solid rgba(255,255,255,0.07)",
      borderTop: `3px solid ${color}`, borderRadius: 12, padding: 16,
    }}>
      <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 2 }}>{location}</div>
      <div style={{ fontFamily: "monospace", fontSize: 10, color: "#334155", marginBottom: 12 }}>
        Sending {sending} units
      </div>
      {FLAVORS.map(f => {
        const val = shipQty[f] || 0;
        return (
          <div key={f} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 11, marginBottom: 5 }}>
            <span style={{ color: "#475569" }}>{f}</span>
            {val === 0
              ? <span style={{ color: "#1e293b" }}>—</span>
              : <span style={{ background: "rgba(249,115,22,0.15)", color: "#fb923c", padding: "1px 7px", borderRadius: 5, fontFamily: "monospace", fontSize: 11, fontWeight: 700 }}>+{val}</span>
            }
          </div>
        );
      })}
      <div style={{ marginTop: 12, paddingTop: 10, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ fontSize: 10, color: "#334155", marginBottom: 6 }}>After shipment fill</div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ flex: 1, height: 5, background: "#1e293b", borderRadius: 99, overflow: "hidden" }}>
            <div style={{ width: `${afterPct}%`, height: "100%", background: color, borderRadius: 99, transition: "width 0.8s ease" }} />
          </div>
          <span style={{ fontSize: 10, color: "#64748b", fontFamily: "monospace" }}>{afterPct}%</span>
        </div>
      </div>
    </div>
  );
}
