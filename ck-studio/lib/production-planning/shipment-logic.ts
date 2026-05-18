import { FLAVORS, LOCATIONS, FRIDGE_CAP } from "./constants";
import type { LocationFlavorMap } from "./types";

export function computeShipment(
  openingStock: LocationFlavorMap,
  fillTarget: number = 0.6
): LocationFlavorMap {
  const shipment = {} as LocationFlavorMap;

  for (const loc of LOCATIONS) {
    shipment[loc] = {} as Record<string, number>;
    const locTotal = Object.values(openingStock[loc]).reduce((a, b) => a + b, 0);
    const spaceLeft = FRIDGE_CAP - locTotal;
    const flavorCap = Math.floor(FRIDGE_CAP / FLAVORS.length);

    for (const flavor of FLAVORS) {
      const current = openingStock[loc][flavor];
      const needed  = Math.max(0, Math.floor(flavorCap * fillTarget) - current);
      shipment[loc][flavor] = Math.min(needed, Math.floor(spaceLeft / FLAVORS.length));
    }
  }

  return shipment;
}

export function totalForLocation(stock: LocationFlavorMap[keyof LocationFlavorMap]): number {
  return Object.values(stock).reduce((a, b) => a + b, 0);
}
