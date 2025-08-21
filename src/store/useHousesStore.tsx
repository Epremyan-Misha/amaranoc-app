import { create } from "zustand";

interface HomeImage {
  image: string;
  title: string;
  people: number | string;
  prace: string;
  id?: string | number;
}

interface HousesState {
  homeImages: HomeImage[];
  isLoading: boolean;
  isFiltering: boolean;
  setHomeImages: (homes: HomeImage[]) => void;
  setIsLoading: (value: boolean) => void;
  setIsFiltering: (value: boolean) => void;
}

export const useHousesStore = create<HousesState>((set) => ({
  homeImages: [],
  isLoading: true,
  isFiltering: false,
  setHomeImages: (homes) => set({ homeImages: homes }),
  setIsLoading: (value) => set({ isLoading: value }),
  setIsFiltering: (value) => set({ isFiltering: value }),
}));
