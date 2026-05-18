import Sidebar from "@/components/production-planning/Sidebar";

export default function ProductionPlanningLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <main style={{ flex: 1, padding: "32px 36px", overflowY: "auto" }}>
        {children}
      </main>
    </div>
  );
}
