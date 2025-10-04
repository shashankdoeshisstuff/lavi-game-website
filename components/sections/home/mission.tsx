'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Sparkles, Rocket, Users, Gamepad2 } from 'lucide-react'

export default function Mission() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-16 md:py-24 overflow-hidden bg-transparent">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-500" />
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>
      </div>

      {/* Content */}
      <div className="container relative z-10 flex flex-col items-center justify-center text-center max-w-6xl px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 drop-shadow-lg leading-tight">
            Our <span className="text-primary">Mission</span>
          </h2>

          {/* Subheading */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto drop-shadow">
            We are driven by the belief that <span className="font-semibold text-foreground">games can inspire, connect, and transform</span> lives. 
            Our mission is to craft unforgettable experiences that ignite imagination and bring people together across the globe.
          </p>
        </motion.div>

        {/* Mission Pillars - Larger Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 w-full max-w-5xl">
          {[
            {
              icon: <Gamepad2 className="h-12 w-12 text-yellow-400" />,
              title: 'Innovative Gameplay',
              desc: 'Pushing the boundaries of what games can be with new mechanics and groundbreaking ideas that redefine player expectations.',
              brandLogo: '🎮',
            },
            {
              icon: <Users className="h-12 w-12 text-green-400" />,
              title: 'Global Community',
              desc: 'Building inclusive worlds where players of all backgrounds feel at home and connected through shared experiences.',
              brandLogo: '🌍',
            },
            {
              icon: <Rocket className="h-12 w-12 text-pink-400" />,
              title: 'Future-Focused',
              desc: 'Exploring next-gen technology and cutting-edge innovations to deliver immersive and unforgettable gaming experiences.',
              brandLogo: '🚀',
            },
            {
              icon: <Sparkles className="h-12 w-12 text-blue-400" />,
              title: 'Storytelling Magic',
              desc: 'Crafting compelling narratives that resonate emotionally and stay with players long after the credits roll.',
              brandLogo: '✨',
            },
          ].map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="relative group"
            >
              <div className="p-8 md:p-10 rounded-3xl bg-card/80 backdrop-blur-md border border-border/50 shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col items-center justify-center text-center min-h-[320px]">
                
                {/* Brand Logo Badge */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-2xl backdrop-blur-sm border border-primary/30 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                  {pillar.brandLogo}
                </div>

                {/* Main Icon */}
                <div className="mb-6 p-4 bg-primary/10 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  {pillar.icon}
                </div>

                {/* Content */}
                <div className="space-y-4 flex-1 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                    {pillar.desc}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-primary/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button 
            size="lg" 
            className="rounded-full px-12 py-6 text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white border-0"
          >
            <Rocket className="mr-3 h-5 w-5" />
            Join Our Journey
            <Sparkles className="ml-3 h-5 w-5" />
          </Button>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-3 gap-8 max-w-2xl"
        >
          {[
            { number: '50M+', label: 'Players Worldwide' },
            { number: '15+', label: 'Awards Won' },
            { number: '8', label: 'Years of Excellence' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}