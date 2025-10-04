import { getHomePageContent } from "@/lib/getHomePageContent";
import FeaturedGamesClient from "./featured-games-client";

export default async function FeaturedGames() {
  const { games } = await getHomePageContent();

  return <FeaturedGamesClient games={games} />;
}
