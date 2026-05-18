export type Flavor = "Classic" | "Japanese" | "Chocolate" | "Vanilla" | "Mango";
export type Location = "Juhu" | "Bandra" | "Powai" | "Colaba";

export type FlavorMap = Record<Flavor, number>;
export type LocationFlavorMap = Record<Location, FlavorMap>;

export interface SheetData {
  ckCapacity: FlavorMap;
  ckStock: FlavorMap;
  openingStock: LocationFlavorMap;
}
