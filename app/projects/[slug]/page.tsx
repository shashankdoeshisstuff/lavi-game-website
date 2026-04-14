import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Apple, PlayCircle, CheckCircle } from "lucide-react"
import { getAllProjectSlugs, getProjectBySlug } from "@/lib/projects"

// Pre-render all project pages at build time (static generation)
export async function generateStaticParams() {
  const slugs = getAllProjectSlugs()
  return slugs.map((slug) => ({ slug }))
}

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-black">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full pt-24 pb-16 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Back Link */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span className="text-sm">Back to Projects</span>
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div>
              <span className="text-yellow-400 text-sm uppercase tracking-wider">
                {project.category}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6 leading-tight">
                {project.title}
              </h1>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                {project.shortDescription}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group
                      flex items-center gap-2
                      px-6 py-3
                      rounded-full
                      bg-white
                      text-black
                      text-sm
                      font-medium
                      transition-all duration-300
                      hover:bg-white/90
                    "
                  >
                    Visit Website
                    <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                )}
                {project.appStoreUrl && (
                  <a
                    href={project.appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group
                      flex items-center gap-2
                      px-6 py-3
                      rounded-full
                      border border-white/20
                      text-white
                      text-sm
                      font-medium
                      transition-all duration-300
                      hover:bg-white hover:text-black
                    "
                  >
                    <Apple className="w-4 h-4" />
                    App Store
                  </a>
                )}
                {project.playStoreUrl && (
                  <a
                    href={project.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group
                      flex items-center gap-2
                      px-6 py-3
                      rounded-full
                      border border-white/20
                      text-white
                      text-sm
                      font-medium
                      transition-all duration-300
                      hover:bg-white hover:text-black
                    "
                  >
                    <PlayCircle className="w-4 h-4" />
                    Google Play
                  </a>
                )}
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-black/40 p-2">
              <div className="relative aspect-video rounded-2xl overflow-hidden">
                <Image
                  src={project.heroImage || project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DESCRIPTION & FEATURES SECTION ================= */}
      <section className="py-16 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Description & Gallery */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Overview</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                {project.description}
              </p>

              {project.gallery && project.gallery.length > 0 && (
                <>
                  <h3 className="text-xl font-semibold text-white mb-6">Gallery</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {project.gallery.map((img, idx) => (
                      <div
                        key={idx}
                        className="relative aspect-square rounded-xl overflow-hidden border border-white/10 bg-black/40"
                      >
                        <Image
                          src={img}
                          alt={`${project.title} screenshot ${idx + 1}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Right Column - Features & Technologies */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                      <span className="text-white/70">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-4xl border bg-black/30 px-6 sm:px-12 py-16 text-center">
            {/* Background Glow Effect */}
            <div className="absolute top-24 w-48 h-48 md:w-72 md:h-72 rounded-full bg-gradient-to-r from-yellow-400/30 via-orange-400/30 to-purple-500/30 blur-[120px] opacity-70" />

            <h2 className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Have a similar project in mind?
            </h2>
            <p className="relative z-10 text-white/60 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how we can bring your vision to life with our expertise.
            </p>
            <Link
              href="/contact"
              className="
                relative z-10
                inline-flex items-center gap-2
                px-6 py-3
                rounded-full
                bg-white
                text-black
                text-sm
                font-medium
                transition-all duration-300
                hover:bg-white/90
                group
              "
            >
              Get in Touch
              <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}