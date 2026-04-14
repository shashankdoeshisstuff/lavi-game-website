import { ArrowRight } from "lucide-react"

/**
 * ContactSection - Displays a contact form and a call-to-action
 * 
 * Features:
 * - Split layout: heading on left, contact form on right (desktop)
 * - Mobile: stacked layout (heading above form)
 * - Responsive typography: heading scales from 5xl to 9xl
 * - Form inputs with consistent styling and hover/focus states
 * - Secondary CTA button with arrow animation
 * 
 * Responsive breakpoints:
 * - Mobile (<640px): stacked layout, smaller heading, full-width form
 * - Tablet (640-1023px): stacked layout, medium heading
 * - Desktop (1024px+): side-by-side grid (2 columns)
 * 
 * Note: This is a server component (no 'use client') because it contains
 * no client-side hooks or interactivity. Form submission would typically
 * be handled by a server action or external API.
 */
export default function ContactSection() {
  return (
    <section className="relative w-full py-16 sm:py-20 md:py-28 overflow-hidden">
      
      {/* Main container with responsive max-width and padding */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Grid layout: stack on mobile, 2 columns on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          
          {/* LEFT SIDE: Heading */}
          <div>
            {/* 
              Heading with responsive font sizes:
              - Mobile: text-5xl (48px)
              - Tablet: sm:text-7xl (72px)
              - Desktop: lg:text-8xl (96px)
              - Large desktop: xl:text-9xl (128px)
            */}
            <h1 className="max-w-xl text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold flex flex-col">
              <span className="text-white">Let&apos;s</span>
              <span className="text-primary self-start sm:self-end">Talk!</span>
            </h1>
          </div>

          {/* RIGHT SIDE: Contact Form */}
          <form className="space-y-4">
            {/* Name input */}
            <input
              type="text"
              placeholder="Name"
              className="
                w-full 
                bg-[#2a2a2a] 
                rounded-full 
                px-4 py-3 
                text-sm sm:text-base
                outline-none 
                border border-transparent
                transition-all duration-200
                focus:border-primary/50 focus:bg-[#333]
                hover:bg-[#333]
              "
            />

            {/* Phone input */}
            <input
              type="tel"
              placeholder="Phone"
              className="
                w-full 
                bg-[#2a2a2a] 
                rounded-full 
                px-4 py-3 
                text-sm sm:text-base
                outline-none 
                border border-transparent
                transition-all duration-200
                focus:border-primary/50 focus:bg-[#333]
                hover:bg-[#333]
              "
            />

            {/* Message textarea */}
            <textarea
              placeholder="Message"
              rows={4}
              className="
                w-full 
                bg-[#2a2a2a] 
                rounded-2xl 
                px-4 py-3 
                text-sm sm:text-base
                outline-none 
                border border-transparent
                transition-all duration-200
                focus:border-primary/50 focus:bg-[#333]
                hover:bg-[#333]
                resize-y
              "
            />

            {/* Submit button */}
            <button
              type="submit"
              className="
                w-full 
                bg-yellow-500 
                text-black 
                py-3 
                rounded-full 
                text-sm sm:text-base
                font-semibold
                transition-all duration-300
                hover:bg-yellow-400
                active:scale-95
              "
            >
              Send
            </button>
          </form>
        </div>

        {/* BOTTOM CTA BUTTON - responsive positioning */}
        <div className="mt-12 md:mt-16">
          <button
            className="
              group
              flex items-center gap-2
              px-5 py-2.5 sm:px-6 sm:py-3
              rounded-full
              border border-white/20
              uppercase
              text-white
              text-xs sm:text-sm
              font-medium
              transition-all duration-300
              hover:bg-white hover:text-black
              hover:border-white
            "
          >
            Request an Offer
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1 sm:w-[18px] sm:h-[18px]"
            />
          </button>
        </div>
      </div>
    </section>
  )
}