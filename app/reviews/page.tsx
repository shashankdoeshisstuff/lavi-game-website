import { Hero } from '@/components/sections/reviews/Hero'
import ContactSection from '@/components/contact-section'
import ReviewsSection from '@/components/sections/reviews/reviews-section'

export default function ReviewsPage() {
  return (
    <main className="min-h-screen">
      <Hero/>
      <ReviewsSection/>
      <ContactSection/>
    </main>
  )
}