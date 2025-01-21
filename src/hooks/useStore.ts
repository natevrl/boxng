import { create } from "zustand";

interface Store {
  selectedCategory: string
  updateCategory: (p: string) => void
}

export const useStore= create<Store>((set) => ({
  selectedCategory: "welter",
  updateCategory: (newCategory: string) =>
    set({ selectedCategory: newCategory }),
}));
