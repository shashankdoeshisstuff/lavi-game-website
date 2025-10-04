// app/about/components/TimelineSection.tsx
'use client'

import { motion } from 'framer-motion'
import { Calendar, Award } from 'lucide-react'

const milestones = [
  { year: '2020', event: 'Founded Axenet with a vision to empower businesses through technology.' },
  { year: '2021', event: 'Expanded our team and delivered our first enterprise solutions.' },
  { year: '2022', event: 'Reached 30+ happy clients across various industries.' },
  { year: '2023', event: 'Launched innovative AI and cloud solutions for modern businesses.' },
  { year: '2024', event: 'Awarded "Best IT Service Provider" in regional business awards.' },
]

export default function TimelineSection() {
  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Our Journey
        </motion.h2>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-primary/20 -translate-x-1/2"></div>
          
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-start mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="flex-1 md:mx-8 mb-4 md:mb-0">
                <div className={`bg-background p-6 rounded-2xl shadow-sm border hover:shadow-md transition-shadow ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  <div className="flex items-center mb-2">
                    <Calendar className="h-5 w-5 text-primary mr-2" />
                    <span className="font-semibold text-primary">{milestone.year}</span>
                  </div>
                  <p className="text-muted-foreground">{milestone.event}</p>
                </div>
              </div>
              
              <div className="relative w-8 h-8 flex items-center justify-center mx-auto md:mx-0">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="w-8 h-8 rounded-full bg-primary flex items-center justify-center z-10 shadow-lg"
                >
                  <Award className="h-4 w-4 text-white" />
                </motion.div>
              </div>
              
              <div className="flex-1 hidden md:block"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}