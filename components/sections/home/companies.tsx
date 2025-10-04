"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useBrandsStore } from "@/stores/useBrandsStore";
import Image from "next/image";

// Use the Brand type from the store instead of redefining it
// If the store doesn't export the type, we'll define it to match the store's structure
type Brand = {
  id: number; // Changed from string to number to match the store
  name: string;
  description: string;
  logo_url: string;
  color: string;
};

export default function BrandsSection() {
  const [isPaused, setIsPaused] = useState(false);
  const brands = useBrandsStore((s) => s.brands);

  return (
    <section className="relative min-h-screen flex items-center justify-center py-16 md:py-24 overflow-hidden bg-transparent">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500" />
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>
      </div>

      {/* Content */}
      <div className="container relative z-10 flex flex-col items-center justify-center text-center max-w-7xl px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 drop-shadow-lg leading-tight">
            Trusted by <span className="text-primary">Industry Leaders</span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto drop-shadow">
            We proudly collaborate with the world&apos;s leading gaming companies and platforms 
            to create <span className="font-semibold text-foreground">extraordinary experiences</span> for players worldwide.
          </p>
        </motion.div>

        {/* Scrolling Brands */}
        <div
          className="w-full max-w-6xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Top Row */}
          <div className="flex overflow-hidden mb-8">
            <div className={`flex gap-8 py-4 ${isPaused ? "animation-paused" : "animate-scroll-left"}`}>
              {[...brands, ...brands, ...brands].map((brand, index) => (
                <motion.div
                  key={`top-${brand.id}-${index}`}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  className="flex-shrink-0"
                >
                  <BrandCard brand={brand} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Row */}
          <div className="flex overflow-hidden">
            <div className={`flex gap-8 py-4 ${isPaused ? "animation-paused" : "animate-scroll-right"}`}>
              {[...brands, ...brands, ...brands].map((brand, index) => (
                <motion.div
                  key={`bottom-${brand.id}-${index}`}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  className="flex-shrink-0"
                >
                  <BrandCard brand={brand} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
        @keyframes scroll-right {
          0% {
            transform: translateX(calc(-100% / 3));
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-scroll-left {
          animation: scroll-left 60s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 60s linear infinite;
        }
        .animation-paused {
          animation-play-state: paused;
        }
        @media (max-width: 768px) {
          .animate-scroll-left {
            animation-duration: 40s;
          }
          .animate-scroll-right {
            animation-duration: 40s;
          }
        }
      `}</style>
    </section>
  );
}

// Brand Card with proper TypeScript typing
function BrandCard({ brand }: { brand: Brand }) {
  return (
    <div className="relative group">
      <div className="w-80 h-48 p-8 rounded-3xl bg-card/80 backdrop-blur-md border border-border/50 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col items-center justify-center text-center">
        <div className={`mb-6 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br ${brand.color}`}>
          <div className="relative h-8 w-24">
            <Image 
              src={brand.logo_url} 
              alt={brand.name}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 96px, 128px"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              unoptimized // This bypasses Next.js image optimization for external domains
            />
          </div>
        </div>
        <div className="space-y-2 flex-1 flex flex-col justify-center">
          <h3 className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            {brand.name}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{brand.description}</p>
        </div>
      </div>
      <div className="absolute inset-0 rounded-3xl bg-primary/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
    </div>
  );
}