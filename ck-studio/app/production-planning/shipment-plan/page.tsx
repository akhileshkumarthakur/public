"use client";

import { useState } from "react";
import PageHeader from "@/components/production-planning/PageHeader";
import FillSlider from "@/components/production-planning/FillSlider";
import ShipmentTable from "@/components/production-planning/ShipmentTable";
import ShipmentCard from "@/components/production-planning/ShipmentCard";
import { LOCATIONS, LOCATION_COLORS, SHEET_DATA, FLAVORS } from "@/lib/production-planning/constants";
import { computeShipment } from "@/lib/production-planning/shipment-logic";

export default function ShipmentPlanPage() {
  const [fillTarget, setFillTarget] = useState(60);
  const { openingStock } = SHEET_DATA;

  const shipment = computeShipment(openingStock, fillTarget / 100);

  const totalDispatch = LOCATIONS.reduce(
    (s, l) => s + FLAVORS.reduce((ss, f) => ss + (shipment[l][f] || 0), 0),
    0
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
      <PageHeader
        title="Shipment Plan"
        subtitle={`CK → Outlets dispatch &nbsp;|&nbsp; Target fill: <span style="color:#f97316;font-family:monospace">${fillTarget}%</span>`}
      />

      {/* Fill % Slider */}
      <FillSlider
        value={fillTarget}
        onChange={setFillTarget}
        totalDispatch={totalDispatch}
      />

      {/* Dispatch Table */}
      <ShipmentTable shipment={shipment} fillTarget={fillTarget} />

      {/* Per-Outlet Shipment Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }}>
        {LOCATIONS.map((loc, i) => (
          <ShipmentCard
            key={loc}
            location={loc}
            color={LOCATION_COLORS[loc]}
            currentStock={openingStock[loc]}
            shipQty={shipment[loc]}
            animDelay={`${i * 0.05}s`}
          />
        ))}
      </div>
    </div>
  );
}
