import GamesHero from '@/components/sections/games/games-hero'
import GamesStore from '@/components/sections/games/GamesStore'


export default function GamesPage() {
  return (
    <main>
      <GamesHero />
      <GamesStore />
      {/* <GamesCta /> */}
    </main>
  )
}