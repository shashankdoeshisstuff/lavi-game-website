// components/sections/featured-games-client.tsx
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Play, Pause, Calendar } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

interface Game {
  id: string;
  title: string;
  description: string;
  cover_image_url: string | null;
  release_date: string | null;
  link_url: string | null;
  is_active: boolean;
  created_at: string;
}

export default function FeaturedGamesClient({ games }: { games: Game[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle image loading errors
  const handleImageError = (gameId: string) => {
    setImageErrors(prev => ({ ...prev, [gameId]: true }));
  };

  // Get status based on release date
  const getGameStatus = (releaseDate: string | null) => {
    if (!releaseDate) return "Coming Soon";
    
    const today = new Date();
    const release = new Date(releaseDate);
    
    if (release <= today) return "Available Now";
    return "Coming Soon";
  };

  // Format release date
  const formatReleaseDate = (releaseDate: string | null) => {
    if (!releaseDate) return "TBA";
    
    const date = new Date(releaseDate);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Filter active games
  const activeGames = games.filter(game => game.is_active);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying || isHovering || activeGames.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % activeGames.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovering, activeGames.length]);

  // Scroll to active card
  useEffect(() => {
    if (scrollRef.current && containerRef.current && activeGames.length > 0) {
      const container = containerRef.current;
      const card = scrollRef.current.children[currentIndex] as HTMLElement;

      if (card) {
        const containerWidth = container.offsetWidth;
        const cardLeft = card.offsetLeft;
        const cardWidth = card.offsetWidth;

        const targetScroll = cardLeft - (containerWidth - cardWidth) / 2;

        container.scrollTo({
          left: targetScroll,
          behavior: "smooth",
        });
      }
    }
  }, [currentIndex, activeGames.length]);

  const prevCard = () =>
    setCurrentIndex((prev) => (prev - 1 + activeGames.length) % activeGames.length);
  
  const nextCard = () => setCurrentIndex((prev) => (prev + 1) % activeGames.length);
  
  const goToCard = (index: number) => setCurrentIndex(index);

  // Don't render if no active games
  if (activeGames.length === 0) {
    return null;
  }

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-transparent">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-2xl" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-secondary/5 rounded-full blur-2xl" />
      </div>

      {/* Heading */}
      <div className="text-center mb-12 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Featured <span className="text-primary">Games</span>
        </h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover our portfolio of critically acclaimed titles and exciting upcoming releases.
        </p>
      </div>

      {/* Carousel */}
      <div
        className="relative max-w-6xl mx-auto"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Navigation Arrows */}
        <Button
          variant="outline"
          size="icon"
          className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 rounded-full h-10 w-10 bg-background border shadow-md hover:scale-105 transition-all"
          onClick={prevCard}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 rounded-full h-10 w-10 bg-background border shadow-md hover:scale-105 transition-all"
          onClick={nextCard}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>

        {/* Auto-play Toggle */}
        <Button
          variant="outline"
          size="icon"
          className="absolute top-4 right-4 z-20 rounded-full h-8 w-8 bg-background border shadow"
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        >
          {isAutoPlaying ? (
            <Pause className="h-3 w-3" />
          ) : (
            <Play className="h-3 w-3" />
          )}
        </Button>

        {/* Cards Container */}
        <div
          ref={containerRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 hide-scrollbar"
        >
          {/* Cards Wrapper */}
          <div ref={scrollRef} className="flex gap-6 px-4">
            {activeGames.map((game) => {
              const status = getGameStatus(game.release_date);
              const statusColor = status === "Available Now" 
                ? "bg-green-100 text-green-800" 
                : "bg-yellow-100 text-yellow-800";

              return (
                <Card
                  key={game.id}
                  className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] snap-center transition-all duration-300 hover:shadow-lg"
                >
                  <div className="relative h-48 w-full">
                    {game.cover_image_url && !imageErrors[game.id] ? (
                      <div className="relative w-full h-full">
                        <Image
                          src={game.cover_image_url}
                          alt={game.title}
                          fill
                          sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, 360px"
                          className="object-cover transition-transform duration-500 hover:scale-105"
                          onError={() => handleImageError(game.id)}
                          placeholder="blur"
                          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                          unoptimized // Temporary fix - removes image optimization
                        />
                      </div>
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                        <span className="text-gray-500 text-sm text-center px-4">
                          {game.title}
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColor}`}>
                        {status}
                      </span>
                    </div>
                  </div>
                  <CardContent className="pt-4">
                    <h3 className="text-lg font-semibold mb-2 line-clamp-1">
                      {game.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-3 leading-relaxed">
                      {game.description}
                    </p>
                    
                    {/* Release Date */}
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                      <Calendar className="h-3 w-3" />
                      <span>Release: {formatReleaseDate(game.release_date)}</span>
                    </div>

                    {/* Learn More Button */}
                    {game.link_url ? (
                      <Link href={game.link_url} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="w-full text-sm">
                          Learn More
                        </Button>
                      </Link>
                    ) : (
                      <Button variant="outline" className="w-full text-sm" disabled>
                        Coming Soon
                      </Button>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Indicator dots */}
        <div className="flex justify-center mt-6 gap-2">
          {activeGames.map((_, index) => (
            <button
              key={index}
              onClick={() => goToCard(index)}
              aria-label={`Go to game ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "bg-primary w-6"
                  : "bg-muted w-2 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* View All CTA */}
      <div className="text-center mt-10">
        <Button
          variant="outline"
          className="rounded-full px-6 hover:scale-105 transition-transform"
        >
          View All Games
        </Button>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}