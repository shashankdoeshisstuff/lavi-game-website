// app/games/[id]/components/GameDetails.tsx
'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { 
  Star, 
  Users, 
  ShoppingCart,
  Heart,
  Share2,
  Play,
  Download,
  ChevronLeft,
  CheckCircle2
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

interface Game {
  id: string
  title: string
  description: string
  shortDescription: string
  image: string
  price: number
  originalPrice: number | null
  rating: number
  reviewCount: number
  players: string
  releaseDate: string
  platforms: string[]
  genres: string[]
  features: string[]
  tags: string[]
  status: string
  isFeatured: boolean
  isOnSale: boolean
  color: string
}

interface GameDetailsProps {
  game: Game
}

export default function GameDetails({ game }: GameDetailsProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [isWishlisted, setIsWishlisted] = useState(false)

  const images = [
    game.image,
    '/images/games/screenshots/screenshot1.jpg',
    '/images/games/screenshots/screenshot2.jpg',
    '/images/games/screenshots/screenshot3.jpg',
    '/images/games/screenshots/screenshot4.jpg',
  ]

  const formatPrice = (price: number) => {
    return price === 0 ? 'Free' : `$${price.toFixed(2)}`
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'available':
        return <Badge className="bg-green-500 hover:bg-green-600">Available Now</Badge>
      case 'coming-soon':
        return <Badge className="bg-orange-500 hover:bg-orange-600">Coming Soon</Badge>
      case 'pre-order':
        return <Badge className="bg-blue-500 hover:bg-blue-600">Pre-Order</Badge>
      default:
        return <Badge className="bg-gray-500 hover:bg-gray-600">Unknown</Badge>
    }
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <Link 
            href="/games" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            Back to Store
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800"
            >
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-2xl font-bold text-foreground/50">{game.title}</span>
              </div>
            </motion.div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index 
                      ? 'border-primary ring-2 ring-primary/20' 
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                    <span className="text-xs font-medium text-foreground/50">{index + 1}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="space-y-6">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-center gap-2 mb-4">
                {getStatusBadge(game.status)}
                {game.isOnSale && (
                  <Badge className="bg-red-500 hover:bg-red-600">On Sale</Badge>
                )}
                {game.isFeatured && (
                  <Badge className="bg-purple-500 hover:bg-purple-600">Featured</Badge>
                )}
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4">{game.title}</h1>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{game.rating}</span>
                  <span className="text-muted-foreground">({game.reviewCount} reviews)</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>{game.players}</span>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                {game.description}
              </p>
            </motion.div>

            {/* Pricing & Purchase */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-muted/30 rounded-2xl p-6 border border-border"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  {game.originalPrice && (
                    <div className="text-lg text-muted-foreground line-through">
                      ${game.originalPrice}
                    </div>
                  )}
                  <div className="text-3xl font-bold text-foreground">
                    {formatPrice(game.price)}
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className={isWishlisted ? 'text-red-500 border-red-500' : ''}
                  >
                    <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-current' : ''}`} />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex gap-3">
                {game.status === 'available' ? (
                  <>
                    <Button size="lg" className="flex-1 group">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      {game.price === 0 ? 'Play Now' : 'Add to Cart'}
                      <Play className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                    </Button>
                    {game.price > 0 && (
                      <Button variant="outline" size="lg">
                        <Download className="mr-2 h-4 w-4" />
                        Wishlist
                      </Button>
                    )}
                  </>
                ) : (
                  <Button size="lg" className="flex-1" disabled={game.status === 'coming-soon'}>
                    {game.status === 'coming-soon' ? 'Coming Soon' : 'Pre-Order Now'}
                  </Button>
                )}
              </div>
            </motion.div>

            {/* Game Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-4"
            >
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Platforms</h3>
                  <div className="space-y-1">
                    {game.platforms.map((platform, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-3 w-3 text-green-500" />
                        {platform}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Genres</h3>
                  <div className="flex flex-wrap gap-1">
                    {game.genres.map((genre, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {genre}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="font-semibold mb-3">Key Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {game.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Additional Sections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12"
        >
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">About {game.title}</h2>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  {`${game.description} Explore a rich world filled with engaging characters, 
                  challenging gameplay, and stunning visuals. Whether you're a casual player 
                  or a hardcore enthusiast, ${game.title} offers something for everyone.`}
                </p>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">Gameplay Highlights</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Immersive storytelling with multiple endings</li>
                  <li>Dynamic combat system with deep mechanics</li>
                  <li>Beautifully crafted environments to explore</li>
                  <li>Regular content updates and community events</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </main>
  )
}