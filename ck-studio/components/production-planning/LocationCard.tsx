import { FLAVORS, FRIDGE_CAP } from "@/lib/production-planning/constants";
import type { Location } from "@/lib/production-planning/types";

interface Props {
  location: Location;
  stock: Record<string, number>;
  color: string;
  animDelay?: string;
}

export default function LocationCard({ location, stock, color, animDelay = "0s" }: Props) {
  const total = Object.values(stock).reduce((a, b) => a + b, 0);
  const pct   = Math.round((total / FRIDGE_CAP) * 100);
  const free  = FRIDGE_CAP - total;

  return (
    <div className="animate-slide-up" style={{
      animationDelay: animDelay,
      background: "rgba(15,23,42,0.8)",
      border: "1px solid rgba(255,255,255,0.07)",
      borderTop: `3px solid ${color}`,
      borderRadius: 12, padding: 16,
    }}>
      <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 2 }}>{location}</div>
      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#334155", marginBottom: 10 }}>
        {total} / {FRIDGE_CAP} units
      </div>

      {/* Fill bar */}
      <div style={{ height: 4, background: "#1e293b", borderRadius: 99, overflow: "hidden", marginBottom: 6 }}>
        <div style={{ width: `${pct}%`, height: "100%", background: color, borderRadius: 99, transition: "width 0.8s ease" }} />
      </div>
      <div style={{ fontSize: 10, color: "#334155", marginBottom: 12 }}>
        {pct}% filled · {free} slots free
      </div>

      {/* Flavor rows */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.04)", paddingTop: 10 }}>
        {FLAVORS.map(f => {
          const val = stock[f] ?? 0;
          const color = val === 0 ? "#ef4444" : val < 10 ? "#f59e0b" : "#e2e8f0";
          return (
            <div key={f} style={{ display: "flex", justifyContent: "space-between", fontSize: 11, marginBottom: 5 }}>
              <span style={{ color: "#475569" }}>{f}</span>
              <span style={{ fontFamily: "monospace", color }}>
                {val === 0 ? "⚠ 0" : val}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
