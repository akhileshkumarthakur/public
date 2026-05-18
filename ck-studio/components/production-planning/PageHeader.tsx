interface Props {
  title: string;
  subtitle: string;
}

export default function PageHeader({ title, subtitle }: Props) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
      <div>
        <div style={{ fontFamily: "monospace", fontSize: 10, color: "#f97316", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 5 }}>
          Production Planning
        </div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 30, fontWeight: 900, color: "#f1f5f9", lineHeight: 1.1 }}>
          {title}
        </h1>
        <p style={{ fontSize: 13, color: "#334155", marginTop: 5 }} dangerouslySetInnerHTML={{ __html: subtitle }} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 7, alignItems: "flex-end" }}>
        {["📗 Sheet 1: CK Stock ✓", "📘 Sheet 2: Outlet Stock ✓"].map(s => (
          <div key={s} style={{ padding: "5px 12px", borderRadius: 7, background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)", fontSize: 11, color: "#4ade80", fontFamily: "monospace" }}>
            {s}
          </div>
        ))}
      </div>
    </div>
  );
}
