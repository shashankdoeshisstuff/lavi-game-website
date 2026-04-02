// components/sections/featured-games-client.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Game {
  id: string;
  title: string;
  description: string;
  image: string;
  releaseDate: string;
  link: string;
  status: "released" | "coming";
}

export default function FeaturedGamesClient({ games }: { games: Game[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying || games.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % games.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, games.length]);

  // Scroll to active card
  useEffect(() => {
    if (containerRef.current && games.length > 0) {
      const container = containerRef.current;
      const cards = container.children;
      
      if (cards[currentIndex]) {
        const card = cards[currentIndex] as HTMLElement;
        const containerWidth = container.offsetWidth;
        const cardLeft = card.offsetLeft;
        const cardWidth = card.offsetWidth;

        container.scrollTo({
          left: cardLeft - (containerWidth - cardWidth) / 2,
          behavior: "smooth",
        });
      }
    }
  }, [currentIndex, games.length]);

  const prevCard = () => setCurrentIndex(prev => (prev - 1 + games.length) % games.length);
  const nextCard = () => setCurrentIndex(prev => (prev + 1) % games.length);

  if (games.length === 0) return null;

  return (
    <section className="py-16 px-4 bg-transparent">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Featured <span className="text-primary">Games</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover our portfolio of critically acclaimed titles
        </p>
      </div>

      {/* Carousel */}
      <div className="relative max-w-6xl mx-auto">
        {/* Navigation Arrows */}
        {games.length > 1 && (
          <>
            <Button
              variant="outline"
              size="icon"
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 rounded-full h-10 w-10 bg-background border shadow"
              onClick={prevCard}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 rounded-full h-10 w-10 bg-background border shadow"
              onClick={nextCard}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </>
        )}

        {/* Cards */}
        <div
          ref={containerRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 hide-scrollbar"
        >
          <div className="flex gap-6 px-4">
            {games.map((game, index) => (
              <Card
                key={game.id}
                className="flex-shrink-0 w-[300px] md:w-[350px] snap-center hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={game.image}
                    alt={game.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      game.status === "released" 
                        ? "bg-green-100 text-green-800" 
                        : "bg-yellow-100 text-yellow-800"
                    }`}>
                      {game.status === "released" ? "Available Now" : "Coming Soon"}
                    </span>
                  </div>
                </div>
                
                <CardContent className="pt-4">
                  <h3 className="text-lg font-semibold mb-2">{game.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {game.description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                    <Calendar className="h-3 w-3" />
                    <span>
                      {game.status === "released" ? "Released" : "Coming"} {new Date(game.releaseDate).toLocaleDateString()}
                    </span>
                  </div>

                  <Link href={game.link}>
                    <Button variant="outline" className="w-full text-sm">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Dots */}
        {games.length > 1 && (
          <div className="flex justify-center mt-6 gap-2">
            {games.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === index ? "bg-primary w-6" : "bg-muted w-2"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* CTA */}
      <div className="text-center mt-10">
        <Link href="/games">
          <Button variant="outline" className="rounded-full px-6">
            View All Games
          </Button>
        </Link>
      </div>

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}