import { create } from "zustand";

type Product = {
  id: string;
  title: string;
  image: string;
};

type FavoritesState = {
  favorites: Product[];
  addFavorite: (product: Product) => void;
  removeFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;

  isModalOpen: boolean;
  setModalOpen: (open: boolean) => void;
};

export const useFavoritesStore = create<FavoritesState>((set, get) => ({
  favorites: [],

  addFavorite: (product) =>
    set((state) => {
      if (state.favorites.some((p) => p.id === product.id)) {
        return {};
      }
      return { favorites: [...state.favorites, product] };
    }),

  removeFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((p) => p.id !== id),
    })),

  isFavorite: (id) => !!get().favorites.find((p) => p.id === id),

  isModalOpen: false,
  setModalOpen: (open) => set({ isModalOpen: open }),
}));
