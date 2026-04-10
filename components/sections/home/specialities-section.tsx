import { Badge } from "@/components/ui/badge"
import Image from "next/image"

/**
 * SpecialitiesSection - Server Component
 * 
 * Displays key metrics and descriptions in a responsive grid layout.
 * No client-side interactivity – all content is static.
 */
export default function SpecialitiesSection() {
  return (
    <section className="relative w-full py-16 sm:py-20 md:py-28 overflow-hidden">
      
      {/* ================= HEADER ================= */}
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center px-4 sm:px-6 mb-10 sm:mb-12 md:mb-16">
        {/* "WHY US" badge - small, uppercase, yellow */}
        <Badge
          variant="secondary"
          className="text-primary text-xs sm:text-sm uppercase rounded-full mb-4"
        >
          WHY US
        </Badge>

        {/* Main heading - responsive font sizes */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight">
          Our Specialities
        </h2>
      </div>

      {/* ================= RESPONSIVE GRID ================= */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
  
        {/* CARD 1 - spans 3 columns on desktop */}
        <div className="relative rounded-3xl overflow-hidden group lg:col-span-3">
          <div className="relative w-full h-[280px] sm:h-[320px] md:h-[360px]">
            <Image
              src="/images/spec1.jpg"
              alt="Team collaboration"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 md:p-8">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">110%</h3>
            <p className="text-xs sm:text-sm text-white/80 mt-1 mb-2">AVERAGE TRAFFIC INCREASE</p>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed max-w-md">
              Clients choose to partner with us long-term because of the outstanding 
              results we deliver and the strong trust-based relationships we cultivate.
            </p>
          </div>
        </div>

        {/* CARD 2 - spans 1 column on desktop */}
        <div className="rounded-3xl bg-[#1a1a1a] p-6 sm:p-8 flex flex-col justify-center transition-all duration-300 hover:bg-[#222] lg:col-span-1">
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">160+</h3>
          <p className="text-white/70 text-sm sm:text-base mt-2 font-medium">PROJECTS DEVELOPED</p>
          <p className="text-white/60 text-xs sm:text-sm mt-4 leading-relaxed">
            We work with a team of experienced software engineers who have worked 
            for a long time in the corporate field. We ensure full customer satisfaction 
            by providing enterprise level products and best in class support to our clients.
          </p>
        </div>

        {/* CARD 3 - spans 2 columns on desktop (starts a new row) */}
        <div className="rounded-3xl overflow-hidden h-[240px] sm:h-[280px] md:h-[320px] lg:col-span-2">
          <Image
            src="/images/spec2.jpg"
            alt="Development workspace"
            width={800}
            height={600}
            className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* CARD 4 - spans 2 columns on desktop (completes the second row) */}
        <div className="rounded-3xl bg-yellow-500 text-black p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:bg-yellow-400 lg:col-span-2">
          <div>
            <p className="text-sm sm:text-base font-semibold uppercase tracking-wide">ENHANCED BRAND VISIBILITY</p>
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-2">80%</h3>
          </div>
          <p className="text-sm sm:text-base mt-6 leading-relaxed">
            Our agency developed a comprehensive software development strategy for a client, 
            resulting in a significant improvement in functionality and user engagement. 
            As a result, the client saw a 80% increase in user retention and a 70% boost 
            in app performance within six months.
          </p>
        </div>
      </div>
    </section>
  )
}