import Image from "next/image"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

/**
 * ProjectsSection - Displays a portfolio grid of recent projects
 * 
 * Features:
 * - Responsive background watermark text (scales down on mobile)
 * - Centered heading with responsive typography
 * - Responsive grid: 1 column (mobile) → 2 columns (tablet) → 3 columns (desktop)
 * - Project cards with image, category, title, and hover effects
 * - Call-to-action button with arrow animation
 * 
 * Responsive breakpoints:
 * - Mobile (<640px): single column, smaller padding, reduced watermark text
 * - Tablet (640px+): 2 columns, medium padding
 * - Desktop (1024px+): 3 columns, original spacing
 * 
 * Note: This is a server component (no client-side JavaScript required).
 * The button is static – if navigation is needed, wrap it with a Link or use
 * a form with server action.
 */
export default function ProjectsSection() {

  const projects = [
    {
      title: "Briclay Tech",
      category: "App Development",
      image: "/images/projects/briclay-tech1.webp",
    },
    {
      title: "MDP Web",
      category: "Web App (POS)",
      image: "/images/projects/mdp-web1.webp",
    },
    {
      title: "TasksMate",
      category: "Mobile App",
      image: "/images/projects/taskmate1.webp",
    },
    {
      title: "Towing BMS Web",
      category: "Web App",
      image: "/images/projects/towing-bms-web1.webp",
    },
    {
      title: "CKC Trucking",
      category: "Mobile App",
      image: "/images/projects/ckc-trucking1.webp",
    },
    {
      title: "Briclay Biz",
      category: "Web Design",
      image: "/images/projects/briclay-biz1.webp",
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
          text-[40px] 
          xs:text-[60px]
          sm:text-[120px] 
          md:text-[180px] 
          font-bold 
          text-white/5 
          whitespace-nowrap 
          pointer-events-none 
          select-none
          overflow-x-auto
          max-w-[90vw]
        "
        aria-hidden="true"
      >
        OUR PROJECTS
      </h1>

      {/* ================= HEADER SECTION ================= */}
      <div className="relative z-10 text-center mb-12 sm:mb-16 px-4">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
          Our Work Speaks
        </h2>
        <p className="text-white/60 mt-2 sm:mt-3 text-xs sm:text-sm md:text-base">
          See the projects that highlight our expertise and creativity.
        </p>
      </div>

      {/* ================= PROJECTS GRID ================= */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        
        {projects.map((project, i) => (
          <div
            key={i}
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
            "
          >
            <div className="relative w-full h-[160px] sm:h-[180px] md:h-[200px] bg-[#1a1a1a] rounded-xl overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <p className="text-yellow-400 text-[10px] sm:text-xs mb-1">
                {project.category}
              </p>
              <h3 className="text-white text-base sm:text-lg font-medium">
                {project.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* ================= CTA BUTTON ================= */}
      <div className="relative z-10 flex justify-center mt-10 sm:mt-12 md:mt-14">
        <Link href="/projects">
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
            View All Projects
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1 sm:w-[18px] sm:h-[18px]"
            />
          </button>
        </Link>
      </div>
    </section>
  )
}