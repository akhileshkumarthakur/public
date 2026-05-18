import type { Flavor, Location } from "./types";

export const FLAVORS: Flavor[] = ["Classic", "Japanese", "Chocolate", "Vanilla", "Mango"];
export const LOCATIONS: Location[] = ["Juhu", "Bandra", "Powai", "Colaba"];
export const FRIDGE_CAP = 405;
export const CK_CAP = 200;

export const FLAVOR_COLORS: Record<Flavor, string> = {
  Classic:   "#F5C842",
  Japanese:  "#F28C9B",
  Chocolate: "#7B3F00",
  Vanilla:   "#FFF3B0",
  Mango:     "#FF8C00",
};

export const LOCATION_COLORS: Record<Location, string> = {
  Juhu:   "#f97316",
  Bandra: "#3b82f6",
  Powai:  "#a855f7",
  Colaba: "#22c55e",
};

// Simulated Google Sheets data — replace with real API calls later
export const SHEET_DATA = {
  ckCapacity: { Classic: 200, Japanese: 200, Chocolate: 200, Vanilla: 200, Mango: 200 },
  ckStock:    { Classic: 20,  Japanese: 10,  Chocolate: 20,  Vanilla: 30,  Mango: 40  },
  openingStock: {
    Juhu:   { Classic: 20, Japanese: 10, Chocolate: 20, Vanilla: 30, Mango: 40 },
    Bandra: { Classic: 30, Japanese: 5,  Chocolate: 10, Vanilla: 40, Mango: 20 },
    Powai:  { Classic: 10, Japanese: 0,  Chocolate: 60, Vanilla: 15, Mango: 20 },
    Colaba: { Classic: 20, Japanese: 50, Chocolate: 20, Vanilla: 30, Mango: 5  },
  },
};
