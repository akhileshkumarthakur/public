import PageHeader from "@/components/production-planning/PageHeader";
import LocationCard from "@/components/production-planning/LocationCard";
import FlavorTable from "@/components/production-planning/FlavorTable";
import { LOCATIONS, LOCATION_COLORS, SHEET_DATA } from "@/lib/production-planning/constants";

export default function OpeningStockPage() {
  const { openingStock } = SHEET_DATA;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
      <PageHeader
        title="Opening Stock"
        subtitle='Juhu · Bandra · Powai · Colaba &nbsp;|&nbsp; Fridge cap: <span style="color:#f97316;font-family:monospace">405</span> per outlet'
      />

      {/* 4 Location Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }}>
        {LOCATIONS.map((loc, i) => (
          <LocationCard
            key={loc}
            location={loc}
            stock={openingStock[loc]}
            color={LOCATION_COLORS[loc]}
            animDelay={`${i * 0.05}s`}
          />
        ))}
      </div>

      {/* Full Flavor Table */}
      <FlavorTable />
    </div>
  );
}
