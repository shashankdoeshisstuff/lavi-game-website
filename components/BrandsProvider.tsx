// components/BrandsProvider.tsx
"use client";

import { useEffect } from "react";
import { useBrandsStore, Brand } from "@/stores/useBrandsStore";

export default function BrandsProvider({ brands }: { brands: Brand[] }) {
  const setBrands = useBrandsStore((s) => s.setBrands);

  useEffect(() => {
    setBrands(brands); // hydrate Zustand
  }, [brands, setBrands]);

  return null; // doesn't render anything, just sets state
}
