// app/games/[id]/page.tsx
import { notFound } from 'next/navigation'
import { games } from '@/components/sections/games/GamesStore'
import GameDetails from './components/GameDetails'

interface GamePageProps {
  params: Promise<{
    id: string
  }>
}

export default async function GamePage({ params }: GamePageProps) {
  const { id } = await params
  const game = games.find(g => g.id === id)

  if (!game) {
    notFound()
  }

  return <GameDetails game={game} />
}