// app/about/components/AboutStats.tsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { value: '4+', label: 'Years Experience' },
  { value: '50+', label: 'Projects Delivered' },
  { value: '30+', label: 'Happy Clients' },
  { value: '100%', label: 'Client Satisfaction' },
]

export default function AboutStats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section
      ref={ref}
      className="py-16 flex items-center justify-center bg-transparent"
      aria-label="Statistics Section"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-[85%] w-full p-8 rounded-2xl border border-border/50 shadow-md
                   bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + index * 0.15, duration: 0.5 }}
              className="group"
              role="article"
              aria-label={stat.label}
            >
              <div
                className="text-2xl md:text-3xl font-bold text-primary mb-2 
                           transition-transform duration-300 group-hover:scale-110"
              >
                {stat.value}
              </div>
              <div className="text-sm md:text-base font-medium text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
