// stores/useBrandsStore.ts
import { create } from "zustand";

export interface Brand {
  id: number;
  name: string;
  description: string;
  logo_url: string;
  color: string;
}

interface BrandsStore {
  brands: Brand[];
  setBrands: (brands: Brand[]) => void;
}

export const useBrandsStore = create<BrandsStore>((set) => ({
  brands: [],
  setBrands: (brands) => set({ brands }),
}));
