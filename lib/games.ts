// lib/games.ts

export interface Game {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;        // full description for the detail page
  category: string;
  image: string;
  heroImage?: string;         // optional hero background
  rating: number;
  year: number;
  features: string[];         // list of key features
  technologies: string[];     // tech used
  platforms?: string[];       // PC, Console, Mobile, etc.
  liveUrl?: string;
}

export const games: Game[] = [
  {
    slug: 'cyber-revolution',
    title: 'Cyber Revolution',
    shortDescription: 'A futuristic open-world RPG set in a cyberpunk metropolis where your choices shape the destiny of the city.',
    description: `Cyber Revolution is an ambitious open‑world RPG that plunges you into a neon‑drenched metropolis ruled by mega‑corporations and rogue AI. 
    You play as a rebel hacker who must navigate a web of political intrigue, underground factions, and advanced technology to spark a revolution.
    Your decisions have far‑reaching consequences – ally with the resistance, infiltrate corporate towers, or betray everyone to seize power for yourself.
    With a deep skill tree, cybernetic enhancements, and a living city that reacts to your every move, Cyber Revolution delivers a truly immersive cyberpunk experience.`,
    category: 'Action RPG',
    image: '/images/service4.png',
    heroImage: '/images/service4.png',
    rating: 4.9,
    year: 2024,
    features: [
      'Branching narrative with multiple endings',
      'Fully explorable cyberpunk city with dynamic NPCs',
      'Deep character customization (cyberware, skills, gear)',
      'Hacking and stealth mechanics',
      'Real‑time combat with futuristic weapons',
      'Romance and reputation systems',
      'Original synthwave soundtrack',
    ],
    technologies: ['Unreal Engine 5', 'C++', 'Blueprints', 'Quixel Megascans', 'Wwise'],
    platforms: ['PC', 'PS5', 'Xbox Series X|S'],
    liveUrl: '#',
  },
  {
    slug: 'ancient-realms',
    title: 'Ancient Realms',
    shortDescription: 'Epic fantasy adventure exploring mystical lands filled with magic, legendary creatures, and ancient secrets.',
    description: `Ancient Realms takes you on a breathtaking journey through a world inspired by mythology and forgotten civilizations. 
    As a young hero chosen by the old gods, you must master elemental magic, uncover lost artifacts, and unite warring kingdoms against an ancient evil.
    Explore dense forests, soaring mountain temples, and sunken ruins. Solve environmental puzzles, fight mythical beasts, and forge alliances with elves, dwarves, and dragons.
    The game combines classic fantasy storytelling with modern action‑RPG mechanics, offering a hand‑crafted open world that rewards curiosity and courage.`,
    category: 'Fantasy Adventure',
    image: '/images/service5.png',
    heroImage: '/images/service5.png',
    rating: 4.7,
    year: 2024,
    features: [
      'Massive hand‑crafted open world with diverse biomes',
      'Elemental magic system (fire, ice, lightning, earth)',
      'Companion system with unique side quests',
      'Dynamic weather and day/night cycle',
      'Crafting, alchemy, and enchantment',
      'Epic boss fights and puzzle dungeons',
      'Original orchestral score',
    ],
    technologies: ['Unity 2023 LTS', 'C#', 'HDRP', 'Shader Graph', 'FMOD'],
    platforms: ['PC', 'PS5', 'Nintendo Switch'],
    liveUrl: '#',
  },
  {
    slug: 'neo-racing-x',
    title: 'Neo Racing X',
    shortDescription: 'Futuristic racing with hyper-realistic physics, dynamic weather, and fully customizable vehicles.',
    description: `Neo Racing X redefines the arcade racing genre by blending blistering speed with deep vehicle customization and real‑time environmental effects.
    Race through neon‑soaked city streets, magnetic tunnels, and anti‑gravity tracks across a vibrant cyberpunk world.
    Every vehicle can be tuned from the engine to the paint job – upgrade parts, install nitrous boosts, and even design your own livery.
    Dynamic weather (rain, fog, thunderstorms) and day/night cycles affect handling and visibility, demanding split‑second decisions.
    Challenge AI or go head‑to‑head in online multiplayer with cross‑platform leaderboards and seasonal events.`,
    category: 'Arcade Racing',
    image: '/images/service1.png',
    heroImage: '/images/service1.png',
    rating: 4.8,
    year: 2024,
    features: [
      'Hyper‑realistic physics with arcade handling',
      'Over 30 customizable futuristic vehicles',
      'Dynamic weather and time‑of‑day system',
      'Split‑screen local multiplayer and online ranked matches',
      'Career mode with rival storylines',
      'Photo mode and custom livery editor',
      'Cross‑platform play and leaderboards',
    ],
    technologies: ['Unreal Engine 5', 'Chaos Physics', 'Blueprints', 'Steamworks SDK', 'Photon'],
    platforms: ['PC', 'PS5', 'Xbox Series X|S'],
    liveUrl: '#',
  },
];

export function getGameBySlug(slug: string): Game | undefined {
  return games.find((game) => game.slug === slug);
}

export function getAllGameSlugs(): string[] {
  return games.map((game) => game.slug);
}