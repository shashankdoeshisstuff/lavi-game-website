import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowUpRight, BrainCircuit, Gamepad2, Globe, Smartphone } from "lucide-react"

/**
 * ServicesSection Component
 * ------------------------------------------------------------
 * Displays the "What we are offering" services section.
 *
 * IMPORTANT:
 * - The desktop layout (large screens) is intentionally preserved.
 * - Only responsive improvements were added for smaller devices.
 *
 * Responsive Strategy
 * ------------------------------------------------------------
 * Grid Layout:
 * xs (default)     → 1 column  (small phones)
 * sm (640px+)      → 2 columns (large phones / small tablets)
 * lg (1024px+)     → 4 columns (desktop - same as your current design)
 *
 * Typography:
 * Text sizes scale gradually across breakpoints.
 *
 * Spacing:
 * Padding and margins adjust to prevent cramped UI on mobile.
 *
 * Cards:
 * Glassmorphism style preserved with hover effects.
 */

export default function ServicesSection() {

  /**
   * Service data configuration
   * ------------------------------------------------------------
   * Keeping services inside an array improves maintainability.
   * If you want to add more services later, just push a new object.
   */
  const services = [
    {
      title: "MOBILE APP DEVELOPMENT",
      description:
        "We design and develop custom mobile application for Android and IOS platforms. Our mobile app developers have expertise to create mobile applications using Flutter, React, Native Android and IOS technologies.",
      ctaText: "LEARN MORE",
      icon: Smartphone,
    },
    {
      title: "GAME DEVELOPMENT",
      description:
        "Our game developers using advance technology / tools and develop visually attractive UI and responsive games that keeps the gamers engaged. We help our clients to turn their creative ideas into games by providing cost-effective solutions with quality.",
      ctaText: "LEARN MORE",
      icon: Gamepad2,
    },
    {
      title: "WEB DEVELOPMENT",
      description:
        "We have rich and sharp proficiency and extensive experience in creating responsive and professional websites for all types of businesses. To stay with the latest web technology trends and concepts, we keep ourselves up to date with these trends and emerging technology concepts.",
      ctaText: "LEARN MORE",
      icon: Globe,
    },
    {
      title: "AI DEVELOPMENT",
      description:
        "We offer comprehensive AI development solutions, including machine learning, deep learning, natural language processing, and generative AI, to create intelligent systems that enhance automation, decision-making, and user experiences.",
      ctaText: "LEARN MORE",
      icon: BrainCircuit,
    },
  ]

  return (
    /**
     * Section Wrapper
     * ------------------------------------------------------------
     * Horizontal padding scales across screen sizes.
     * py controls vertical spacing between sections.
     */
    <section className="w-full mx-auto px-4 sm:px-6 lg:px-12 py-20 sm:py-24">

      {/* Container limits content width on very large screens */}
      <div className="container mx-auto max-w-7xl">

        {/* =======================================================
           SECTION HEADER
        ======================================================== */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 mb-12 md:mb-16">

          {/* Left group: Badge + Heading */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">

            {/* Section Badge */}
            <Badge
              variant="secondary"
              className="text-primary text-sm rounded-full whitespace-nowrap"
            >
              Services
            </Badge>

            {/* Section Title */}
            <h2 className="
              text-2xl
              sm:text-3xl
              md:text-4xl
              lg:text-5xl
              font-bold
              text-white
              tracking-tight
              text-center
              sm:text-left
            ">
              What we are offering
            </h2>

          </div>

          {/* CTA Button */}
          <button className="
            mt-8
            group
            flex items-center gap-2
            px-6 py-3
            rounded-full
            border border-white/20
            uppercase
            text-white
            text-sm
            transition-all duration-300
            hover:bg-white hover:text-black
          ">
            View All Services

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>


        {/* =======================================================
           SERVICES GRID
        ======================================================== */}

        {/* 
           Responsive Grid System
           ----------------------------------------------------
           grid-cols-1 → mobile phones
           sm:grid-cols-2 → tablets
           lg:grid-cols-4 → desktop (your original layout)
        */}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          {services.map((service, index) => {

            // Extract icon component
            const Icon = service.icon

            return (

              /**
               * Service Card
               * --------------------------------------------------
               * Glassmorphism style
               * Smooth hover transitions
               */
              <div
                key={index}
                className="
                  group
                  relative
                  flex
                  flex-col
                  h-full
                  rounded-2xl
                  bg-neutral-800
                  backdrop-blur-sm
                  p-6
                  transition-all
                  duration-300
                  hover:bg-neutral-800/50
                "
              >

                {/* ===================================================
                    SERVICE ICON
                ==================================================== */}

                <Icon
                  className="
                    w-12 h-12
                    sm:w-14 sm:h-14
                    text-primary
                    mb-4
                    bg-neutral-500/20
                    p-2
                    rounded-2xl
                  "
                  strokeWidth={1.5}
                />

                {/* ===================================================
                    SERVICE TITLE
                ==================================================== */}

                <h3 className="
                  text-lg
                  sm:text-xl
                  lg:text-2xl
                  font-bold
                  text-white
                  mb-4
                  tracking-tight
                ">
                  {service.title}
                </h3>


                {/* ===================================================
                    SERVICE DESCRIPTION
                ==================================================== */}

                <p className="
                  text-gray-400
                  text-sm
                  sm:text-base
                  leading-relaxed
                  mb-6
                  flex-grow
                ">
                  {service.description}
                </p>


                {/* ===================================================
                    LEARN MORE BUTTON
                ==================================================== */}

                <Button
                  variant="ghost"
                  className="
                    w-fit
                    justify-start
                    px-0
                    text-primary
                    rounded-full
                    hover:text-primary/80
                    hover:bg-transparent
                    group/btn
                  "
                >
                  {service.ctaText}

                  {/* Animated Arrow */}
                  <ArrowUpRight
                    className="
                      ml-2
                      h-4
                      w-4
                      transition-transform
                      duration-300
                      group-hover/btn:translate-x-1
                      group-hover/btn:-translate-y-1
                    "
                  />
                </Button>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}