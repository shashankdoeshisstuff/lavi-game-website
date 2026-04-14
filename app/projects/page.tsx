import { Hero } from '@/components/sections/projects/Hero'
import ContactSection from '@/components/contact-section'
import ProjectsSection from '@/components/sections/projects/projects-section'

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Hero/>
      <ProjectsSection/>
      <ContactSection/>
    </main>
  )
}