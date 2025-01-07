import { create } from "zustand";

interface Store {
  selectedCategory: string
  updateCategory: (p: string) => void
}

export const useStore= create<Store>((set) => ({
  selectedCategory: "feather",
  updateCategory: (newCategory: string) =>
    set({ selectedCategory: newCategory }),
}));
