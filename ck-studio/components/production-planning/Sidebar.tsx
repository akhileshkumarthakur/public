"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LOCATIONS } from "@/lib/production-planning/constants";
import { LOCATION_COLORS } from "@/lib/production-planning/constants";

const NAV_ITEMS = [
  { href: "/production-planning/opening-stock", label: "Opening Stock",  icon: "📋" },
  { href: "/production-planning/shipment-plan",  label: "Shipment Plan", icon: "🚚" },
  { href: "/production-planning/ck-summary",     label: "CK Summary",    icon: "📊" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [syncing, setSyncing] = useState(false);
  const [syncTime, setSyncTime] = useState<string | null>(null);

  const handleSync = () => {
    setSyncing(true);
    setTimeout(() => {
      setSyncing(false);
      setSyncTime(new Date().toLocaleTimeString());
    }, 1800);
  };

  return (
    <aside style={{
      width: 220, minHeight: "100vh", flexShrink: 0,
      background: "#0f172a",
      borderRight: "1px solid rgba(255,255,255,0.06)",
      display: "flex", flexDirection: "column",
      position: "sticky", top: 0, height: "100vh", overflowY: "auto",
    }}>
      {/* Brand */}
      <div style={{ padding: "24px 20px 20px", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 900, color: "#f97316" }}>
          CK Studio
        </div>
        <div style={{ fontSize: 10, color: "#334155", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 3 }}>
          Production Dashboard
        </div>
      </div>

      {/* Nav */}
      <nav style={{ padding: "14px 0" }}>
        {NAV_ITEMS.map(item => {
          const active = pathname === item.href;
          return (
            <Link key={item.href} href={item.href} style={{
              display: "flex", alignItems: "center", gap: 10,
              padding: "11px 20px", textDecoration: "none",
              color: active ? "#f97316" : "#475569",
              fontFamily: "'DM Sans', sans-serif", fontSize: 13,
              fontWeight: active ? 700 : 400,
              borderLeft: active ? "3px solid #f97316" : "3px solid transparent",
              background: active ? "rgba(249,115,22,0.06)" : "transparent",
              transition: "all 0.2s",
            }}>
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div style={{ flex: 1 }} />

      {/* Outlets */}
      <div style={{ padding: "0 0 8px" }}>
        <div style={{ padding: "0 20px 8px", fontSize: 10, color: "#1e293b", letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "'DM Mono', monospace" }}>
          Outlets
        </div>
        {LOCATIONS.map(loc => (
          <div key={loc} style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 20px" }}>
            <div style={{
              width: 7, height: 7, borderRadius: "50%",
              background: LOCATION_COLORS[loc],
              animation: "pulse-dot 2.5s ease infinite",
            }} />
            <span style={{ fontSize: 12, color: "#475569" }}>{loc}</span>
          </div>
        ))}
        <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 20px" }}>
          <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#f97316", animation: "pulse-dot 2.5s ease infinite" }} />
          <span style={{ fontSize: 12, color: "#f97316", fontWeight: 600 }}>CK (Central)</span>
        </div>
      </div>

      {/* Sync */}
      <div style={{ padding: "12px 16px 20px" }}>
        <button onClick={handleSync} disabled={syncing} style={{
          width: "100%", padding: "9px 0", borderRadius: 8,
          background: syncing ? "rgba(249,115,22,0.2)" : "rgba(249,115,22,0.1)",
          border: "1px solid rgba(249,115,22,0.3)",
          color: "#fb923c", fontFamily: "'DM Mono', monospace", fontSize: 11,
          cursor: syncing ? "not-allowed" : "pointer", transition: "all 0.2s",
        }}>
          {syncing ? "⟳ Syncing..." : "↻ Sync Sheets"}
        </button>
        {syncTime && (
          <div style={{ textAlign: "center", fontSize: 10, color: "#334155", marginTop: 5, fontFamily: "monospace" }}>
            Last sync: {syncTime}
          </div>
        )}
      </div>
    </aside>
  );
}
