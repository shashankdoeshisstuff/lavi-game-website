// components/sections/about-preview.tsx
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Users, Trophy, Globe, Sparkles, Target, Heart } from 'lucide-react'

export default function AboutPreview() {
  return (
    <section className="relative min-h-screen flex items-center bg-transparent overflow-hidden py-16 md:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
      </div>

      {/* Content */}
      <div className="w-full px-6 sm:px-10 lg:px-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Crafting <span className="text-primary">Worlds</span>, Creating{' '}
                <span className="text-primary">Legends</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                {`At Axenet, we're a team of passionate developers, artists, and storytellers
                dedicated to creating immersive gaming experiences that push the boundaries of
                technology and narrative.`}
              </p>
              <p className="text-lg text-muted-foreground">
                {`Founded in 2020, we've grown from a small indie studio to an award-winning
                game development company with a focus on innovation, quality, and player engagement.`}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { value: '200+', label: 'Team Members', icon: Users },
                { value: '12+', label: 'Games Released', icon: Trophy },
                { value: '10M+', label: 'Players Worldwide', icon: Globe },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="flex flex-col items-start sm:items-center bg-background/60 p-5 rounded-xl border backdrop-blur hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <stat.icon className="h-6 w-6 text-primary mb-2" />
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            <Button
              asChild
              size="lg"
              className="rounded-full px-8 shadow-lg hover:scale-105 transition-transform"
            >
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>

          {/* Right Side - Interactive Core Values */}
          <div className="relative">
            <div className="bg-gradient-to-br from-background/80 to-background/40 border rounded-2xl p-8 backdrop-blur-sm shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
                Our <span className="text-primary">Core Values</span>
              </h3>
              
              <div className="space-y-6">
                {[
                  {
                    icon: Sparkles,
                    title: "Innovation First",
                    description: "Pushing boundaries with cutting-edge technology and creative gameplay mechanics.",
                    color: "from-blue-500 to-purple-600"
                  },
                  {
                    icon: Target,
                    title: "Player Focused",
                    description: "Every decision starts with our players' experience and enjoyment in mind.",
                    color: "from-green-500 to-teal-600"
                  },
                  {
                    icon: Heart,
                    title: "Passion Driven",
                    description: "We create games we love to play, built with dedication and attention to detail.",
                    color: "from-red-500 to-pink-600"
                  }
                ].map((value, index) => (
                  <div
                    key={index}
                    className="group flex items-start space-x-4 p-4 rounded-lg border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-md hover:bg-background/50"
                  >
                    <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${value.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <value.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                        {value.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Interactive Pattern Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/30 rounded-full animate-pulse delay-1000" />
              <div className="absolute top-1/2 -right-6 w-4 h-4 bg-primary/40 rounded-full animate-bounce" />
            </div>

            {/* Floating Elements */}
            <div className="absolute -z-10 top-8 -right-8 w-32 h-32 bg-primary/5 rounded-full blur-xl" />
            <div className="absolute -z-10 bottom-8 -left-8 w-24 h-24 bg-secondary/5 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  )
}