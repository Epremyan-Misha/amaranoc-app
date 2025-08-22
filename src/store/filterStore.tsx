import { create } from "zustand";

interface FilterState {
  minPrice: number | null;
  maxPrice: number | null;
  currency: string;
  peopleCount: number;
  nightStay: string;
  roomsCount: number;       
  bathroomsCount: number;   
  poolType: string;      

  setMinPrice: (price: number | null) => void;
  setMaxPrice: (price: number | null) => void;
  setCurrency: (currency: string) => void;
  setPeopleCount: (count: number) => void;
  setNightStay: (value: string) => void;
  setRoomsCount: (count: number) => void;
  setBathroomsCount: (count: number) => void; 
  setPoolType: (type: string) => void;        

  resetFilters: () => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  minPrice: null,
  maxPrice: null,
  currency: "",
  peopleCount: 0,
  nightStay: "",
  roomsCount: 0,
  bathroomsCount: 0,
  poolType: "", 

  setMinPrice: (price) => set({ minPrice: price }),
  setMaxPrice: (price) => set({ maxPrice: price }),
  setCurrency: (currency) => set({ currency }),
  setPeopleCount: (count) => set({ peopleCount: count }),
  setNightStay: (value) => set({ nightStay: value }),
  setRoomsCount: (count) => set({ roomsCount: count }),
  setBathroomsCount: (count) => set({ bathroomsCount: count }), 
  setPoolType: (type) => set({ poolType: type }),

  resetFilters: () =>
    set({
      minPrice: null,
      maxPrice: null,
      currency: "",
      peopleCount: 0,
      nightStay: "",
      roomsCount: 0,
      bathroomsCount: 0,
      poolType: "",
    }),
}));
