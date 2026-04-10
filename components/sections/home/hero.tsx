import { ArrowRight, BrainCircuit } from "lucide-react"
import Image from "next/image"

/**
 * Hero Component - Main landing section of the website
 * 
 * This component consists of two main sections:
 * 1. Main hero area with animated title, description, and primary CTA
 * 2. AI Services highlight card with gradient glow effect
 * 
 * Responsive breakpoints used:
 * - Default (mobile first): base styles for screens < 640px
 * - sm: 640px and above (tablet portrait)
 * - md: 768px and above (tablet landscape / small desktop)
 * - lg: 1024px and above (desktop)
 * - xl: 1280px and above (large desktop)
 */
export default function Hero() {
  return (
    // Main section container with responsive horizontal padding
    // py-24: vertical padding for mobile, consistent spacing across breakpoints
    <section className="w-full mx-auto px-4 sm:px-6 lg:px-12 py-24">
      
      {/* ==================== SECTION 1: MAIN HERO HEADLINE ==================== */}
      <div className="relative overflow-hidden py-24 md:py-32">
        {/* Content container with max width for better readability on large screens */}
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="mx-auto max-w-5xl text-center flex flex-col items-center justify-center">

            {/* Main Heading - Fully responsive typography scale */}
            {/* text-4xl (36px) on mobile -> sm:text-5xl (48px) -> md:text-6xl (60px) -> lg:text-7xl (72px) */}
            <h1 className="mb-8 font-bold tracking-tight text-white leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              
              {/* First line: "The Best" followed by highlighted "Software" */}
              <span>The Best </span>

              {/* Highlighted "Software" with yellow marker effect */}
              {/* The absolute positioned yellow rectangle creates a hand-drawn highlight effect */}
              <span className="relative inline-block px-3">
                <span className="relative z-10 text-black">Software</span>
                {/* Yellow background strip with slight rotation for organic feel */}
                <span className="absolute inset-1 rotate-2 bg-yellow-400"></span>
              </span>

              {/* Line break to separate first and second line */}
              <br />

              {/* Second line: "Development" + Logo + "Firm" - Wraps on small screens using flex-wrap */}
              <span className="flex items-center justify-center gap-4 flex-wrap mt-2">
                
                {/* Highlighted "Development" with blue marker effect */}
                <span className="relative inline-block px-3">
                  <span className="relative z-10 text-white">Development</span>
                  {/* Blue background strip with rotation */}
                  <span className="absolute inset-1 rotate-2 bg-blue-600"></span>
                </span>

                {/* Company Logo with responsive sizing and slight tilt */}
                {/* Mobile: 48x48px -> Small tablet: 56x56px -> Desktop: 64x64px */}
                <Image
                  src="/images/logo.png"
                  alt="Axenet logo - company brand mark"
                  width={64}
                  height={64}
                  className="object-contain -rotate-12 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
                  priority // Load immediately as it's above the fold
                />

                {/* Plain text "Firm" without highlight */}
                <span className="text-white">Firm</span>

              </span>

            </h1>

            {/* Description text - scales from 16px to 20px on desktop */}
            {/* max-w-2xl (672px) ensures comfortable reading line length */}
            {/* text-muted-foreground provides subdued contrast */}
            <p className="mx-auto mb-10 max-w-2xl text-base text-muted-foreground sm:text-lg md:text-xl">
              We work with a team of experienced software engineers who have worked
              for a long time in the corporate field. We ensure full customer
              satisfaction by providing enterprise level products and best in class
              support to our clients.
            </p>

            {/* Primary CTA Button with hover animation */}
            {/* Button */}
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
              View All Reviews

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

          </div>
        </div>
      </div>

      {/* ==================== SECTION 2: AI SERVICES HIGHLIGHT CARD ==================== */}
      {/* Glassmorphism card with backdrop blur, border, and rounded corners */}
      {/* responsive padding: mobile px-6, tablet px-12, vertical padding py-28 */}
      <div className="relative overflow-hidden rounded-4xl border bg-black/30 px-6 sm:px-12 py-28 flex flex-col items-center text-center">
        
        {/* Background glow effect - creates ambient light behind the icon */}
        {/* Responsive sizing: smaller on mobile (w-48 h-48) to prevent overflow, larger on desktop */}
        <div className="absolute top-24 w-48 h-48 md:w-72 md:h-72 rounded-full bg-gradient-to-r from-purple-500/40 via-orange-400/40 to-yellow-400/40 blur-[120px] opacity-70" />

        {/* Icon container with orange glow shadow */}
        <div className="relative z-10 mb-10 flex items-center justify-center">
          <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-orange-400 shadow-[0_0_80px_rgba(249,115,22,0.6)]">
            {/* Brain icon representing AI/ML capabilities */}
            <BrainCircuit className="w-10 h-10 text-black" />
          </div>
        </div>

        {/* Section heading with responsive text scaling and brand color */}
        {/* text-4xl (36px) mobile -> sm:text-5xl (48px) -> md:text-6xl (60px) */}
        <h2 className="relative z-10 text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-8 leading-tight">
          Boost Your Business With AI Solutions
        </h2>

        {/* Supporting description - responsive font sizes and max width */}
        <p className="relative z-10 max-w-4xl text-gray-400 text-sm sm:text-base md:text-lg mb-14">
          Axenet IT Services specializes in developing custom AI solutions,
          including AI Phone Agents, AI Text Agents, and AI Automations, to
          streamline business operations and enhance customer engagement.
        </p>

        {/* Secondary CTA Button - fully responsive padding and hover effects */}
        {/* Button */}
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
         Check Out Our AI Services
          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>

      </div>
    </section>
  )
}