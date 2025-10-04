// components/sections/games/games-hero.tsx
'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, Sparkles } from 'lucide-react'
import Branding from '@/components/branding'

export default function GamesHero() {
  return (
    <section className="relative py-28 bg-transparent">
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6 border border-primary/20"
          >
            <Sparkles className="mr-2 h-4 w-4" />
            Immersive Gaming Experiences
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent flex gap-4 items-center justify-center"
          >
            <Branding size="lg" variant="minimal" /> Games
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-muted-foreground mb-10"
          >
            Discover our portfolio of immersive gaming experiences that push the boundaries 
            of technology and storytelling.
          </motion.p>

          {/* Search Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl"
          >
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search games..."
                className="pl-12 py-6 rounded-full bg-background border-border/50 focus:border-primary/50 transition-colors"
              />
            </div>
            <Button 
              size="lg" 
              className="rounded-full px-8 py-6 group min-w-[120px]"
            >
              Search
              <Search className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
            </Button>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-border/50"
          >
            {[
              { number: '10+', label: 'Games' },
              { number: '2M+', label: 'Players' },
              { number: '4.8', label: 'Avg Rating' },
              { number: '2020', label: 'Since' },
            ].map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="text-2xl font-bold text-foreground">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}