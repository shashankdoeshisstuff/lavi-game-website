// app/games/components/GamesStore.tsx
'use client'

import { motion, useInView } from 'framer-motion'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Star, 
  Users, 
  Calendar,
  ArrowRight,
  ShoppingCart,
  Heart,
  Filter,
  Search,
  Grid3X3,
  List
} from 'lucide-react'
import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'

// Mock games data - replace with your actual data
export const games = [
  {
    id: 'chrono-nexus',
    title: 'Chrono Nexus',
    description: 'An epic time-travel adventure where your choices shape the future of civilization.',
    shortDescription: 'Time-travel RPG with branching narratives',
    image: '/images/games/chrono-nexus.jpg',
    price: 29.99,
    originalPrice: 39.99,
    rating: 4.8,
    reviewCount: 1250,
    players: '500K+',
    releaseDate: '2023-03-15',
    platforms: ['PC', 'PS5', 'Xbox Series X'],
    genres: ['Action RPG', 'Adventure', 'Single Player'],
    features: ['Open World', 'Choice Matters', 'Time Manipulation'],
    tags: ['RPG', 'Adventure', 'Single Player', 'Open World'],
    status: 'available',
    isFeatured: true,
    isOnSale: true,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'nebula-drift',
    title: 'Nebula Drift',
    description: 'Explore the cosmos in this stunning space exploration and survival game.',
    shortDescription: 'Space exploration and survival simulator',
    image: '/images/games/nebula-drift.jpg',
    price: 24.99,
    originalPrice: null,
    rating: 4.6,
    reviewCount: 890,
    players: '300K+',
    releaseDate: '2023-07-22',
    platforms: ['PC', 'PS5', 'Nintendo Switch'],
    genres: ['Space Sim', 'Survival', 'Exploration'],
    features: ['Procedural Generation', 'Base Building', 'Multiplayer'],
    tags: ['Space', 'Survival', 'Multiplayer', 'Exploration'],
    status: 'available',
    isFeatured: false,
    isOnSale: false,
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'shadow-protocol',
    title: 'Shadow Protocol',
    description: 'A tactical stealth game set in a cyberpunk future. Hack, sneak, and outsmart your enemies.',
    shortDescription: 'Cyberpunk stealth action game',
    image: '/images/games/shadow-protocol.jpg',
    price: 34.99,
    originalPrice: null,
    rating: 4.9,
    reviewCount: 2100,
    players: '750K+',
    releaseDate: '2024-01-10',
    platforms: ['PC', 'PS5', 'Xbox Series X'],
    genres: ['Stealth', 'Action', 'Cyberpunk'],
    features: ['Cyberpunk Setting', 'Tactical Combat', 'Branching Story'],
    tags: ['Stealth', 'Action', 'Cyberpunk', 'Single Player'],
    status: 'available',
    isFeatured: true,
    isOnSale: false,
    color: 'from-green-500 to-teal-500'
  },
  {
    id: 'aether-legends',
    title: 'Aether Legends',
    description: 'Competitive multiplayer battle arena with unique heroes and strategic gameplay.',
    shortDescription: 'Competitive MOBA with unique heroes',
    image: '/images/games/aether-legends.jpg',
    price: 0,
    originalPrice: null,
    rating: 4.7,
    reviewCount: 3500,
    players: '2M+',
    releaseDate: '2022-11-05',
    platforms: ['PC', 'Mobile'],
    genres: ['MOBA', 'Multiplayer', 'Competitive'],
    features: ['Competitive', 'Regular Updates', 'Esports Ready'],
    tags: ['MOBA', 'Multiplayer', 'Free to Play', 'Competitive'],
    status: 'available',
    isFeatured: false,
    isOnSale: false,
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 'echoes-of-tomorrow',
    title: 'Echoes of Tomorrow',
    description: 'Narrative-driven mystery where you unravel secrets in a haunted futuristic city.',
    shortDescription: 'Narrative mystery in a futuristic city',
    image: '/images/games/echoes-tomorrow.jpg',
    price: 19.99,
    originalPrice: 24.99,
    rating: 4.5,
    reviewCount: 430,
    players: '200K+',
    releaseDate: '2024-12-01',
    platforms: ['PC', 'PS5', 'Xbox Series X'],
    genres: ['Mystery', 'Adventure', 'Story Rich'],
    features: ['Story Rich', 'Atmospheric', 'Puzzle Solving'],
    tags: ['Mystery', 'Adventure', 'Story Rich', 'Single Player'],
    status: 'coming-soon',
    isFeatured: true,
    isOnSale: true,
    color: 'from-amber-500 to-yellow-500'
  },
  {
    id: 'rift-runners',
    title: 'Rift Runners',
    description: 'Fast-paced platformer with dimension-hopping mechanics and speedrun potential.',
    shortDescription: 'Dimension-hopping speedrun platformer',
    image: '/images/games/rift-runners.jpg',
    price: 14.99,
    originalPrice: null,
    rating: 4.4,
    reviewCount: 320,
    players: '150K+',
    releaseDate: '2024-02-28',
    platforms: ['PC', 'Nintendo Switch'],
    genres: ['Platformer', 'Action', 'Indie'],
    features: ['Speedrun Focused', 'Level Editor', 'Community Maps'],
    tags: ['Platformer', 'Indie', 'Speedrun', 'Multiplayer'],
    status: 'available',
    isFeatured: false,
    isOnSale: false,
    color: 'from-indigo-500 to-purple-500'
  }
]

export default function GamesStore() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [filteredGames, setFilteredGames] = useState(games)
  const [selectedGenre, setSelectedGenre] = useState<string>('all')
  const [selectedPlatform, setSelectedPlatform] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [wishlistedGames, setWishlistedGames] = useState<Set<string>>(new Set())

  // Get unique genres and platforms for filters
  const genres = ['all', ...new Set(games.flatMap(game => game.genres))]
  const platforms = ['all', ...new Set(games.flatMap(game => game.platforms))]

  // Filter games based on search, genre, and platform
  useEffect(() => {
    let result = games

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(game => 
        game.title.toLowerCase().includes(query) ||
        game.description.toLowerCase().includes(query) ||
        game.shortDescription.toLowerCase().includes(query) ||
        game.genres.some(genre => genre.toLowerCase().includes(query)) ||
        game.tags.some(tag => tag.toLowerCase().includes(query))
      )
    }

    // Filter by genre
    if (selectedGenre !== 'all') {
      result = result.filter(game => game.genres.includes(selectedGenre))
    }

    // Filter by platform
    if (selectedPlatform !== 'all') {
      result = result.filter(game => game.platforms.includes(selectedPlatform))
    }

    setFilteredGames(result)
  }, [searchQuery, selectedGenre, selectedPlatform])

  const toggleWishlist = (gameId: string) => {
    setWishlistedGames(prev => {
      const newSet = new Set(prev)
      if (newSet.has(gameId)) {
        newSet.delete(gameId)
      } else {
        newSet.add(gameId)
      }
      return newSet
    })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  }

  const formatPrice = (price: number) => {
    return price === 0 ? 'Free' : `$${price.toFixed(2)}`
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'available':
        return <Badge className="bg-green-500 hover:bg-green-600">Available</Badge>
      case 'coming-soon':
        return <Badge className="bg-orange-500 hover:bg-orange-600">Coming Soon</Badge>
      case 'pre-order':
        return <Badge className="bg-blue-500 hover:bg-blue-600">Pre-Order</Badge>
      default:
        return <Badge className="bg-gray-500 hover:bg-gray-600">Unknown</Badge>
    }
  }

  return (
    <section ref={ref} className="py-20 bg-transparent">
      <div className="container mx-auto px-6">
        {/* Store Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Game <span className="text-primary">Store</span>
            </h2>
            <p className="text-muted-foreground">
              Browse our collection of {games.length} games
            </p>
          </div>

          {/* Store Controls */}
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="text"
                placeholder="Search games..."
                className="pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-full sm:w-64"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-2 border border-border rounded-lg p-1 bg-background">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'grid' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Grid3X3 className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'list' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-4 mb-8"
        >
          {/* Genre Filter */}
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <select 
              className="border border-border rounded-lg px-3 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
            >
              {genres.map(genre => (
                <option key={genre} value={genre}>
                  {genre === 'all' ? 'All Genres' : genre}
                </option>
              ))}
            </select>
          </div>

          {/* Platform Filter */}
          <select 
            className="border border-border rounded-lg px-3 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            value={selectedPlatform}
            onChange={(e) => setSelectedPlatform(e.target.value)}
          >
            {platforms.map(platform => (
              <option key={platform} value={platform}>
                {platform === 'all' ? 'All Platforms' : platform}
              </option>
            ))}
          </select>

          {/* Clear Filters */}
          {(searchQuery || selectedGenre !== 'all' || selectedPlatform !== 'all') && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSearchQuery('')
                setSelectedGenre('all')
                setSelectedPlatform('all')
              }}
              className="border-border hover:bg-muted/50"
            >
              Clear Filters
            </Button>
          )}
        </motion.div>

        {/* Games Grid/List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className={
            viewMode === 'grid' 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              : "space-y-4"
          }
        >
          {filteredGames.map((game) => (
            <motion.div
              key={game.id}
              variants={itemVariants}
              className="group"
            >
              <Card className={`
                h-full border-2 border-border/50 bg-background/80 hover:border-primary/30 hover:shadow-xl 
                transition-all duration-300 overflow-hidden
                ${viewMode === 'list' ? 'flex' : ''}
                ${viewMode === 'grid' ? 'group-hover:-translate-y-2' : ''}
              `}>
                {/* Game Image */}
                <div className={`
                  relative overflow-hidden
                  ${viewMode === 'grid' ? 'aspect-video' : 'w-48 flex-shrink-0'}
                `}>
                  <div className={`w-full h-full bg-gradient-to-br ${game.color}`}>
                    {/* Placeholder for game image - replace with actual Image component */}
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <span className="text-white font-semibold text-lg">{game.title}</span>
                    </div>
                  </div>
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {getStatusBadge(game.status)}
                    {game.isOnSale && (
                      <Badge className="bg-red-500 hover:bg-red-600">Sale</Badge>
                    )}
                    {game.isFeatured && (
                      <Badge className="bg-purple-500 hover:bg-purple-600">Featured</Badge>
                    )}
                  </div>

                  {/* Rating */}
                  <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-white text-sm font-medium">{game.rating}</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button 
                      size="icon" 
                      variant="secondary" 
                      className={`h-8 w-8 bg-black/80 backdrop-blur-sm ${
                        wishlistedGames.has(game.id) ? 'text-red-500' : 'text-white'
                      }`}
                      onClick={() => toggleWishlist(game.id)}
                    >
                      <Heart className={`h-3 w-3 ${wishlistedGames.has(game.id) ? 'fill-current' : ''}`} />
                    </Button>
                  </div>
                </div>

                <div className={viewMode === 'list' ? 'flex-1 flex flex-col' : ''}>
                  <CardContent className={`p-4 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                    {/* Game Title & Price */}
                    <div className="flex items-start justify-between mb-2">
                      <Link href={`/games/${game.id}`}>
                        <h3 className="font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 hover:underline">
                          {game.title}
                        </h3>
                      </Link>
                      <div className="text-right ml-2">
                        {game.originalPrice && (
                          <div className="text-sm text-muted-foreground line-through">
                            ${game.originalPrice}
                          </div>
                        )}
                        <div className="text-lg font-bold text-primary">
                          {formatPrice(game.price)}
                        </div>
                      </div>
                    </div>

                    {/* Short Description */}
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {game.shortDescription}
                    </p>

                    {/* Game Info */}
                    <div className="space-y-2 text-xs text-muted-foreground">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          <span>{game.players}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{new Date(game.releaseDate).getFullYear()}</span>
                        </div>
                      </div>

                      {/* Platforms */}
                      <div className="flex flex-wrap gap-1">
                        {game.platforms.slice(0, 2).map((platform) => (
                          <span
                            key={platform}
                            className="px-1.5 py-0.5 bg-muted rounded text-xs"
                          >
                            {platform}
                          </span>
                        ))}
                        {game.platforms.length > 2 && (
                          <span className="px-1.5 py-0.5 bg-muted rounded text-xs">
                            +{game.platforms.length - 2}
                          </span>
                        )}
                      </div>

                      {/* Genres */}
                      <div className="flex flex-wrap gap-1">
                        {game.genres.slice(0, 2).map((genre) => (
                          <span
                            key={genre}
                            className="px-1.5 py-0.5 bg-primary/10 text-primary rounded text-xs"
                          >
                            {genre}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="p-4 pt-0">
                    <div className="flex gap-2 w-full">
                      <Button asChild className="flex-1 group/btn" size="sm">
                        <Link href={`/games/${game.id}`}>
                          View Details
                          <ArrowRight className="ml-1 h-3 w-3 group-hover/btn:translate-x-0.5 transition-transform" />
                        </Link>
                      </Button>
                      {game.status === 'available' && game.price > 0 && (
                        <Button size="icon" variant="outline" className="flex-shrink-0">
                          <ShoppingCart className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </CardFooter>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredGames.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-muted-foreground text-lg mb-4">
              No games found matching your filters.
            </div>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery('')
                setSelectedGenre('all')
                setSelectedPlatform('all')
              }}
            >
              Clear all filters
            </Button>
          </motion.div>
        )}

        {/* Store Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground">
            Showing {filteredGames.length} of {games.length} games
          </p>
        </motion.div>
      </div>
    </section>
  )
}