import { Brand } from "@/stores/useBrandsStore";
import { supabase } from "./supabase";

export async function fetchBrandsSSR(): Promise<Brand[]> {
  const { data, error } = await supabase.schema('website_content').from("featured_brands").select("*").order("id");

  if (error) {
    console.error("Error fetching brands:", error);
    return [];
  }

  return data || [];
}
