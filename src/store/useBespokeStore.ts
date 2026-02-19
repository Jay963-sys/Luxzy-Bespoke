import { create } from "zustand";

interface BespokeStore {
  isOpen: boolean;
  activeProductId: string | null;
  openBespoke: (productId?: string) => void;
  closeBespoke: () => void;
}

export const useBespokeStore = create<BespokeStore>((set) => ({
  isOpen: false,
  activeProductId: null,
  openBespoke: (productId) =>
    set({ isOpen: true, activeProductId: productId || null }),
  closeBespoke: () => set({ isOpen: false, activeProductId: null }),
}));
