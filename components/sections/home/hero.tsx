import { ArrowRight, ArrowUpRight, BrainCircuit } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

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
            <Link href="/contact">
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
                Contact Us
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* ==================== SECTION 2: AI SERVICES HIGHLIGHT CARD ==================== */}
      {/* Glassmorphism card with backdrop blur, border, and rounded corners */}
      {/* responsive padding: mobile px-6, tablet px-12, vertical padding py-28 */}
      <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0B0B0C] px-6 sm:px-12 py-28 flex flex-col items-center text-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/ai-technology-microchip-bg.webp"
            alt="AI Background"
            className="w-full h-full object-cover opacity-[0.40]"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/75" />

          {/* Soft gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-500/10 via-transparent to-zinc-400/10" />
        </div>

        {/* Subtle Grid Texture */}
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>

        {/* Muted Ambient Glow */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-slate-400/10 rounded-full blur-3xl" />

        <div className="absolute bottom-0 right-0 w-[320px] h-[320px] bg-zinc-300/5 rounded-full blur-3xl" />

        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-[0.025] mix-blend-screen pointer-events-none">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <filter id="noise">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.85"
                numOctaves="2"
                stitchTiles="stitch"
              />
            </filter>

            <rect width="100%" height="100%" filter="url(#noise)" />
          </svg>
        </div>

        {/* Icon */}
        <div className="relative z-10 mb-10 flex items-center justify-center">
          <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.08)]">
            <BrainCircuit className="w-10 h-10 text-white" />
          </div>
        </div>

        {/* Heading */}
        <h2 className="relative z-10 text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 leading-tight max-w-5xl">
          Boost Your Business With AI Solutions
        </h2>

        {/* Description */}
        <p className="relative z-10 max-w-4xl text-zinc-400 text-sm sm:text-base md:text-lg mb-14 leading-relaxed">
          Axenet IT Services specializes in developing custom AI solutions,
          including AI Phone Agents, AI Text Agents, and AI Automations, to
          streamline business operations and enhance customer engagement.
        </p>

        {/* Button */}
        <button
          className="
            relative z-10
            mt-4
            group
            flex items-center gap-2
            px-6 py-3
            rounded-full
            border border-white/15
            bg-white/5
            backdrop-blur-md
            uppercase
            tracking-wide
            text-white
            text-sm
            transition-all duration-300
            hover:bg-white
            hover:text-black
          "
        >
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