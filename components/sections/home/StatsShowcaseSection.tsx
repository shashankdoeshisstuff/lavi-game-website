import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Rocket, Network, User, Atom } from "lucide-react"

/**
 * StatsShowcaseSection - Displays company stats, features, and highlights
 * 
 * Changes made:
 * - Removed all glow/shadows from stats circles (clean glass look)
 * - Enhanced logo with stronger glow effect (replaced stats circle glow)
 * - Maintained 2‑column grid for stats on mobile, overlapping row on tablet+
 * - All other design elements unchanged
 * 
 * Note: This is a server component (no client-side JavaScript required).
 * All hover effects and transitions are CSS-based.
 */
export default function StatsShowcaseSection() {

  // ================= DATA =================
  const stats = [
    { value: "10+", label: "Years of Experience" },
    { value: "160+", label: "Successful Projects" },
    { value: "100+", label: "Happy Clients" },
    { value: "110", label: "5 Star Reviews" },
  ]

  const features = [
    {
      title: "Established Expertise",
      desc: "We are recognized as a dependable and credible partner in driving business success.",
      icon: Rocket,
    },
    {
      title: "Customized Strategies",
      desc: "We provide bespoke solutions designed to align with your unique goals, target audience, and industry needs.",
      icon: Network,
    },
    {
      title: "Customer-Oriented Approach",
      desc: "Your success drives us. We focus on deeply understanding your business objectives.",
      icon: User,
    },
  ]

  const highlights = [
    "Ongoing Innovation",
    "Committed Assistance",
    "Exceptional Client Satisfaction",
    "Dedication to Quality",
  ]

  return (
    <section className="relative w-full py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-12 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">  
        <div className="mb-16 sm:mb-20 md:mb-24">
          
          {/* Mobile: 2‑column grid */}
          <div className="grid grid-cols-2 gap-5 sm:hidden place-items-center">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="
                  w-28 h-28
                  rounded-full
                  bg-white/10
                  backdrop-blur-sm
                  flex flex-col items-center justify-center text-center
                "
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent" />
                <p className="relative z-10 text-lg font-semibold text-white">
                  {stat.value}
                </p>
                <p className="relative z-10 text-[10px] text-gray-300 px-2 leading-tight">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Tablet+ : overlapping row (original design, but without glow) */}
          <div className="hidden sm:flex justify-center">
            <div className="flex items-center">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className={`
                    relative
                    flex-shrink-0
                    w-32 h-32
                    md:w-40 md:h-40
                    rounded-full
                    bg-white/10
                    backdrop-blur-sm
                    flex flex-col items-center justify-center text-center
                    transition-all duration-300
                    ${i !== 0 ? "-ml-6 md:-ml-12" : ""}
                  `}
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent" />
                  <p className="relative z-10 text-xl md:text-2xl font-semibold text-white">
                    {stat.value}
                  </p>
                  <p className="relative z-10 text-[10px] md:text-xs text-gray-300 px-2 leading-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= CENTER LOGO WITH ENHANCED GLOW ================= */}
        <div className="flex justify-center mb-12 sm:mb-16 md:mb-20">
          <div className="relative">
            {/* Primary glow – warm orange, large blur */}
            <div className="absolute inset-0 bg-orange-400/60 blur-[100px] sm:blur-[120px] md:blur-[140px] rounded-full scale-150" />
            {/* Secondary glow – brighter core */}
            <div className="absolute inset-0 bg-yellow-300/40 blur-[60px] sm:blur-[80px] md:blur-[100px] rounded-full scale-125" />
            
            {/* Logo image */}
            <Image
              src="/images/logo.png"
              alt="Company Logo"
              width={120}
              height={120}
              className="relative -rotate-12 z-10 opacity-90 w-24 h-24 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 object-contain drop-shadow-lg"
              priority
            />
          </div>
        </div>

        {/* ================= FEATURES GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 md:mb-10">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <div
                key={i}
                className="
                  group
                  rounded-4xl
                  border
                  bg-black/30
                  p-4 sm:p-6
                  text-center
                  transition-all duration-300
                  hover:bg-neutral-500/5
                "
              >
                <div className="mb-3 sm:mb-4 flex justify-center">
                  <div className="p-2 sm:p-3 rounded-xl bg-primary/10 border border-primary">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            )
          })}
        </div>

        {/* ================= HIGHLIGHT BADGES ================= */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {highlights.map((item, i) => (
            <Badge
              key={i}
              variant="secondary"
              className="
                rounded-full
                px-3 py-1 sm:px-4 sm:py-2
                bg-white/10
                text-gray-300
                text-xs sm:text-sm
                flex items-center
                gap-1 sm:gap-2
              "
            >
              <Atom className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
              {item}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  )
}