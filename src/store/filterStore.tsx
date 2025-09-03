import { create } from "zustand";

interface FilterState {
  region: string;
  minPrice: number | null;
  maxPrice: number | null;
  peopleCount: number;
  nightStay: "all" | "yes" | "no";
  roomsCount: number | null;
  poolType: string; // 🆕 լողավազանի տեսակ

  setRegion: (region: string) => void;
  setMinPrice: (price: number | null) => void;
  setMaxPrice: (price: number | null) => void;
  setPeopleCount: (count: number) => void;
  setNightStay: (val: "all" | "yes" | "no") => void;
  setRoomsCount: (count: number | null) => void;
  setPoolType: (type: string) => void; // 🆕 լողավազանի setter
  resetFilters: () => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  region: "",
  minPrice: null,
  maxPrice: null,
  peopleCount: 0,
  nightStay: "all",
  roomsCount: null,
  poolType: "", // 🆕 default "Բոլորը"

  setRegion: (region) => set({ region: region.toLowerCase() }),
  setMinPrice: (price) => set({ minPrice: price }),
  setMaxPrice: (price) => set({ maxPrice: price }),
  setPeopleCount: (count) => set({ peopleCount: count }),
  setNightStay: (val) => set({ nightStay: val }),
  setRoomsCount: (count) => set({ roomsCount: count }),
  setPoolType: (type) => set({ poolType: type }), // 🆕 setter

  resetFilters: () =>
    set({
      region: "",
      minPrice: null,
      maxPrice: null,
      peopleCount: 0,
      nightStay: "all",
      roomsCount: null,
      poolType: "", // 🆕 reset անում ենք
    }),
}));
