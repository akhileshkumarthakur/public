"use client";
interface Props {
  value: number;
  onChange: (v: number) => void;
  totalDispatch: number;
}

export default function FillSlider({ value, onChange, totalDispatch }: Props) {
  return (
    <div style={{
      background: "rgba(15,23,42,0.8)", border: "1px solid rgba(255,255,255,0.07)",
      borderRadius: 12, padding: "18px 24px", display: "flex", alignItems: "center", gap: 24,
    }}>
      <div>
        <div style={{ fontSize: 11, color: "#475569", marginBottom: 2 }}>Target Fill Level</div>
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 900, color: "#f97316" }}>{value}%</div>
      </div>

      <div style={{ flex: 1 }}>
        <input
          type="range" min={30} max={100} step={5} value={value}
          onChange={e => onChange(Number(e.target.value))}
          style={{ width: "100%", accentColor: "#f97316", cursor: "pointer" }}
        />
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: "#334155", marginTop: 4, fontFamily: "monospace" }}>
          <span>30%</span><span>65%</span><span>100%</span>
        </div>
      </div>

      <div style={{
        background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.25)",
        borderRadius: 10, padding: "12px 18px", textAlign: "center", minWidth: 110,
      }}>
        <div style={{ fontSize: 10, color: "#475569", fontFamily: "monospace", marginBottom: 2, letterSpacing: "0.08em" }}>TOTAL DISPATCH</div>
        <div style={{ fontFamily: "monospace", fontSize: 22, fontWeight: 700, color: "#fb923c" }}>{totalDispatch}</div>
        <div style={{ fontSize: 10, color: "#475569" }}>units today</div>
      </div>
    </div>
  );
}
