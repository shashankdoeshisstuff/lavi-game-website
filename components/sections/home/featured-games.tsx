// components/sections/featured-games.tsx
import FeaturedGamesClient from "./featured-games-client";

const games = [
  {
    id: "1",
    title: "Cyber Revolution",
    description: "A futuristic open-world RPG set in a cyberpunk metropolis where your choices shape the destiny of the city.",
    image: "/images/games/cyber-revolution.jpg",
    releaseDate: "2024-03-15",
    link: "/games/cyber-revolution",
    status: "released"
  },
  {
    id: "2", 
    title: "Ancient Realms",
    description: "Epic fantasy adventure exploring mystical lands filled with magic, legendary creatures, and ancient secrets.",
    image: "/images/games/ancient-realms.jpg",
    releaseDate: "2024-06-20",
    link: "/games/ancient-realms",
    status: "coming"
  },
  {
    id: "3",
    title: "Neo Racing X",
    description: "Future racing with hyper-realistic physics, dynamic weather, and fully customizable vehicles.",
    image: "/images/games/neo-racing.jpg",
    releaseDate: "2024-09-10",
    link: "/games/neo-racing",
    status: "coming"
  }
];

export default function FeaturedGames() {
  return <FeaturedGamesClient games={games} />;
}