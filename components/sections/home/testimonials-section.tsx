import { ArrowRight, Star } from "lucide-react"

/**
 * TestimonialsSection - Displays client testimonials with star ratings
 * 
 * Features:
 * - Responsive background watermark text (scales down on mobile)
 * - Centered heading with responsive typography
 * - Testimonial cards: stack on mobile, side-by-side on tablet+
 * - Star ratings, quotes, and user info
 * - Call-to-action button with hover animation
 * 
 * Responsive breakpoints:
 * - Mobile (<640px): single column, full-width cards, smaller text
 * - Tablet (640px+): cards side-by-side with max width
 * - Desktop (1024px+): increased max-width and spacing
 * 
 * Note: This is a server component (no client-side JavaScript required).
 * The button is static – if navigation is needed, wrap it with a Link.
 */
export default function TestimonialsSection() {

  const testimonials = [
    {
      name: "Saqib S Chand",
      role: "BIG BANK TAKE LITTLE BANK",
      text: "I highly recommend AXENET IT SERVICES for any of your app development needs. I'm a satisfied customer!",
    },
    {
      name: "Giuliano Maglieri",
      role: "SHAREVISION",
      text: "Professional, serious, precise, always available. Exceptional work. I will definitely continue to collaborate!",
    },
  ]

  return (
    <section className="relative w-full py-16 sm:py-20 md:py-28 overflow-hidden">
      
      {/* ================= BACKGROUND WATERMARK TEXT ================= */}
      <h1 
        className="
          absolute 
          top-10 
          left-1/2 
          -translate-x-1/2 
          text-[50px] 
          xs:text-[70px]
          sm:text-[120px] 
          md:text-[180px] 
          font-bold 
          text-white/5 
          whitespace-nowrap 
          pointer-events-none 
          select-none
        "
        aria-hidden="true"
      >
        TESTIMONIAL
      </h1>

      {/* ================= HEADER SECTION ================= */}
      <div className="relative z-10 text-center mb-12 sm:mb-16 px-4">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
          What Our Clients Say
        </h2>
        <p className="text-white/60 mt-2 sm:mt-3 text-xs sm:text-sm md:text-base">
          Real feedback from people who trust our work and value our services.
        </p>
      </div>

      {/* ================= TESTIMONIALS FLEX ================= */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-6 px-4">
        
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="
              w-full 
              sm:w-[320px] 
              max-w-sm
              p-5 
              sm:p-6 
              rounded-2xl 
              border 
              bg-black/40
              transition-all 
              duration-300 
              hover:bg-black/80
            "
          >
            <div className="flex gap-1 mb-3 text-yellow-400">
              {[...Array(5)].map((_, idx) => (
                <Star key={idx} size={12} className="sm:w-3.5 sm:h-3.5" fill="currentColor" />
              ))}
            </div>

            <p className="text-white/70 text-xs sm:text-sm mb-4 leading-relaxed">
              “{t.text}”
            </p>

            <div className="border-t border-white/10 pt-3">
              <p className="text-white text-xs sm:text-sm font-medium">{t.name}</p>
              <p className="text-white/40 text-[10px] sm:text-xs">{t.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ================= CTA BUTTON ================= */}
      <div className="relative z-10 flex justify-center mt-8 sm:mt-10 md:mt-12">
        <button 
          className="
            group
            flex items-center gap-2
            px-5 py-2.5
            sm:px-6 sm:py-3
            rounded-full
            border border-white/20
            uppercase
            text-white
            text-xs
            sm:text-sm
            font-medium
            transition-all duration-300
            hover:bg-white hover:text-black
            hover:border-white
          "
        >
          View All Reviews
          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1 sm:w-[18px] sm:h-[18px]"
          />
        </button>
      </div>
    </section>
  )
}