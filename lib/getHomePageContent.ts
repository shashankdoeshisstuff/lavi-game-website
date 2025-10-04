// lib/getHomePageContent.ts
import { supabase } from "./supabase";

export async function getHomePageContent() {
  try {
    const [hero, games, contact] = await Promise.all([
      supabase
        .schema("website_content")
        .from("hero_videos")
        .select("*")
        .eq("is_active", true)
        .order("created_at", { ascending: true }),
      supabase
        .schema("website_content")
        .from("featured_games")
        .select("*")
        .eq("is_active", true)
        .order("created_at", { ascending: false })
        .limit(10),
      supabase
        .schema("website_content")
        .from("contact_info")
        .select("*")
        .limit(1)
        .single(),
    ]);

    if (process.env.NODE_ENV === "development") {
      console.log("✅ [getHomePageContent] Hero videos:", hero);
      console.log("✅ [getHomePageContent] Featured games:", games);
      console.log("✅ [getHomePageContent] Contact info:", contact);
    }

    return {
      hero: hero.data ?? [],
      games: games.data ?? [],
      contact: contact.data ?? null,
    };
  } catch (error) {
    console.error("❌ [getHomePageContent] Error fetching home page content:", error);

    return {
      hero: [],
      games: [],
      contact: null,
    };
  }
}
