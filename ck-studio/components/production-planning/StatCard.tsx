interface Props {
  label: string;
  value: number | string;
  sub: string;
  color: string;
}

export default function StatCard({ label, value, sub, color }: Props) {
  return (
    <div style={{
      background: "rgba(15,23,42,0.8)", border: "1px solid rgba(255,255,255,0.07)",
      borderLeft: `3px solid ${color}`, borderRadius: 12, padding: "16px 18px",
    }}>
      <div style={{ fontSize: 10, color: "#334155", textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: "monospace", marginBottom: 4 }}>
        {label}
      </div>
      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 900, color }}>{value}</div>
      <div style={{ fontSize: 10, color: "#1e293b", marginTop: 2 }}>{sub}</div>
    </div>
  );
}
