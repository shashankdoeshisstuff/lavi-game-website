// app/about/components/CareersSection.tsx
'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function CareersSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary to-purple-600 rounded-2xl p-10 md:p-16 text-center text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Our Journey</h2>
            <p className="text-lg mb-8 opacity-90">
              {`We're always looking for talented, passionate individuals to help us create 
              the next generation of technology solutions.`}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-gray-100 rounded-full px-8 shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                View Open Positions
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white/10 rounded-full px-8 backdrop-blur-sm"
              >
                Learn About Our Culture
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}