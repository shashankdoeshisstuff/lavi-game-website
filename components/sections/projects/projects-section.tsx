import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { projects } from "@/lib/projects"

export default function ProjectsSection() {
  return (
    <section className="relative w-full py-8 overflow-hidden">
      {/* ================= PROJECTS GRID ================= */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
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
              block
            "
          >
            <div
              className="
                w-full 
                h-[160px] 
                sm:h-[180px] 
                md:h-[200px] 
                bg-[#1a1a1a] 
                rounded-xl 
                overflow-hidden 
                flex 
                items-center 
                justify-center
              "
            >
              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={200}
                className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-105"
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
          </Link>
        ))}
      </div>
    </section>
  )
}