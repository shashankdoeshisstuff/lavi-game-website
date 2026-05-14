'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';
import { games } from '@/lib/games';

export default function GamesShowcase() {
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {games.map((game) => (
        <Link
          key={game.slug}
          href={`/game/games/${game.slug}`}
          className="
            group 
            rounded-2xl 
            border border-white/10
            bg-black/40
            p-4 
            transition-all 
            duration-300 
            hover:border-white/20 
            hover:-translate-y-1 
            hover:bg-black/80
            block
          "
        >
          {/* Image container */}
          <div
            className="
              relative
              w-full 
              h-[160px] 
              sm:h-[180px] 
              md:h-[200px] 
              bg-[#1a1a1a] 
              rounded-xl 
              overflow-hidden
            "
          >
            <Image
              src={game.image}
              alt={game.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Rating badge */}
            <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm rounded-full px-2 py-0.5 flex items-center gap-1">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              <span className="text-white text-xs">{game.rating}</span>
            </div>
          </div>

          {/* Content */}
          <div className="mt-4">
            <p className="text-yellow-400 text-[10px] sm:text-xs mb-1 uppercase tracking-wide">
              {game.category} • {game.year}
            </p>
            <h3 className="text-white text-base sm:text-lg font-medium mb-1">
              {game.title}
            </h3>
            <p className="text-white/60 text-xs sm:text-sm line-clamp-2">
              {game.shortDescription}
            </p>
            <div className="mt-3 flex items-center text-primary text-xs font-medium group/link">
              Learn More
              <ArrowRight className="ml-1 w-3 h-3 transition-transform duration-300 group-hover/link:translate-x-1" />
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
}