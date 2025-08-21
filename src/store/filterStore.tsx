import { create } from "zustand";

interface FilterState {
  minPrice: number | null;
  maxPrice: number | null;
  currency: string;
  peopleCount: number; // Ավելացրու

  setMinPrice: (price: number | null) => void;
  setMaxPrice: (price: number | null) => void;
  setCurrency: (curr: string) => void;
  setPeopleCount: (count: number) => void; // Ավելացրու
}

export const useFilterStore = create<FilterState>((set) => ({
  minPrice: null,
  maxPrice: null,
  currency: "",
  peopleCount: 0,

  setMinPrice: (price) => set({ minPrice: price }),
  setMaxPrice: (price) => set({ maxPrice: price }),
  setCurrency: (curr) => set({ currency: curr }),
  setPeopleCount: (count) => set({ peopleCount: count }),
}));
