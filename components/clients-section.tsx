// components/sections/home/clients-section.tsx
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

/**
 * Clients Component - Displays a marquee of trusted brand logos
 * 
 * Features:
 * - Fully responsive heading and layout
 * - Seamless infinite scrolling marquee
 * - Grayscale logos that colorize on hover
 * - Fade gradients on edges for smooth visual effect
 * 
 * Responsive breakpoints:
 * - Mobile (<640px): smaller padding, logo width 80px, gap 4
 * - Tablet (640px-1023px): medium padding, logo width 100px, gap 6
 * - Desktop (≥1024px): original spacious layout, logo width 120px, gap 8
 */
export default function Clients() {
  // Array of client logos - add/remove as needed
  const logos = [
    { src: "/logos/unity.png", alt: "Unity" },
    { src: "/logos/unreal.png", alt: "Unreal Engine" },
    { src: "/logos/epic.png", alt: "Epic Games" },
    { src: "/logos/ubisoft.png", alt: "Ubisoft" },
    { src: "/logos/ea.png", alt: "Electronic Arts" },
    { src: "/logos/riot.png", alt: "Riot Games" },
  ]

  return (
    // Main section container with responsive vertical padding
    // gap-8 for spacing between heading and marquee container
    <section className="mx-auto flex flex-col items-center justify-center gap-6 md:gap-8 sm:px-6 lg:px-12 py-24">
      
      {/* ==================== SECTION HEADER ==================== */}
      {/* Centered on all screen sizes for consistency */}
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        
        {/* Section Badge - responsive sizing stays consistent */}
        <Badge
          variant="secondary"
          className="text-primary text-xs sm:text-sm uppercase rounded-full"
        >
          Brands Collections
        </Badge>

        {/* 
          Section Title - fully responsive typography:
          - Mobile: text-2xl (24px)
          - Tablet: sm:text-3xl (30px)
          - Desktop: md:text-4xl (36px)
          - Large desktop: lg:text-5xl (48px)
          Always centered for better visual balance on all devices
        */}
        <h2 className="
          text-2xl
          sm:text-3xl
          md:text-4xl
          lg:text-5xl
          font-bold
          text-white
          tracking-tight
          text-center
        ">
          Brands that trust us
        </h2>
      </div>

      {/* ==================== MARQUEE CONTAINER ==================== */}
      {/* 
        Responsive border radius, background, and padding:
        - Mobile: rounded-lg, py-3
        - Tablet+: rounded-xl, py-4 md:py-8 (original)
      */}
      <div className="border rounded-4xl bg-black/30 py-3 sm:py-4 md:py-8 w-full">
        
        {/* Inner container with responsive horizontal padding */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          
          {/* Marquee wrapper - hides overflow and positions fade gradients */}
          <div className="relative overflow-hidden">
            
            {/* 
              Left fade gradient - prevents abrupt logo cutoff
              - Mobile: w-12 (48px)
              - Tablet: md:w-16 (64px)
              - Desktop: lg:w-24 (96px)
              Gradient direction: from background color to transparent
            */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-12 sm:w-16 md:w-20 lg:w-24 bg-gradient-to-r from-background to-transparent z-10" />
            
            {/* 
              Right fade gradient - same as left but reversed direction
            */}
            <div className="pointer-events-none absolute right-0 top-0 h-full w-12 sm:w-16 md:w-20 lg:w-24 bg-gradient-to-l from-background to-transparent z-10" />

            {/* 
              Scrolling track - horizontal flex that repeats logos for seamless loop
              Animation duration: 20s for smooth continuous scroll
              Note: Requires @keyframes infinite-scroll in global CSS (see comment below)
            */}
            <div
              className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-12 w-max"
              style={{
                animation: "infinite-scroll 20s linear infinite",
              }}
            >
              {/* 
                Double the logos array to create a seamless loop
                When first set scrolls out, second set follows immediately
              */}
              {[...logos, ...logos].map((logo, i) => (
                <div
                  key={`${logo.alt}-${i}`}
                  // Responsive minimum width for consistent logo container sizing
                  className="flex items-center justify-center min-w-[80px] sm:min-w-[100px] md:min-w-[120px]"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    // Responsive logo dimensions
                    width={60}
                    height={24}
                    className="object-contain opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 w-auto h-6 sm:h-8 md:h-10"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}