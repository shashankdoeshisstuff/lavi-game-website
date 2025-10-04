// app/about/components/MissionVision.tsx
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Target, Eye, Plus, Minus } from 'lucide-react'
import { useState } from 'react'

export default function MissionVision() {
  const [openCard, setOpenCard] = useState<'mission' | 'vision' | null>(null)

  const cards = [
    {
      id: 'mission',
      icon: Target,
      title: 'Our Mission',
      color: 'blue',
      content: [
        "At Axenet IT Services, our mission is to empower businesses with innovative and scalable technology solutions that drive success.",
        "We aim to bridge the gap between vision and execution, enabling our clients to thrive in an ever-evolving digital landscape.",
        "Our focus remains on innovation, precision, and collaboration, ensuring that we are a reliable partner in our clients' journey toward success."
      ]
    },
    {
      id: 'vision',
      icon: Eye,
      title: 'Our Vision', 
      color: 'purple',
      content: [
        "Our vision is to become a global leader in delivering transformative technology solutions that redefine how businesses operate and innovate.",
        "We envision a future where technology seamlessly empowers businesses, enhances user experiences, and drives meaningful progress.",
        "By fostering a culture of innovation and excellence, we aim to set new benchmarks in the IT industry."
      ]
    }
  ]

  const toggleCard = (cardId: 'mission' | 'vision') => {
    setOpenCard(openCard === cardId ? null : cardId)
  }

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'bg-blue-50 dark:bg-blue-900/20',
        iconBg: 'bg-blue-100 dark:bg-blue-900/30',
        iconColor: 'text-blue-600 dark:text-blue-400',
        border: 'border-blue-200 dark:border-blue-800'
      },
      purple: {
        bg: 'bg-purple-50 dark:bg-purple-900/20', 
        iconBg: 'bg-purple-100 dark:bg-purple-900/30',
        iconColor: 'text-purple-600 dark:text-purple-400',
        border: 'border-purple-200 dark:border-purple-800'
      }
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-primary">Purpose</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover what drives us forward and shapes our commitment to excellence
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {cards.map((card, index) => {
            const colorClasses = getColorClasses(card.color)
            const isOpen = openCard === card.id
            const IconComponent = card.icon

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card 
                  className={`
                    cursor-pointer transition-all duration-300 overflow-hidden
                    ${colorClasses.bg} ${colorClasses.border}
                    hover:shadow-lg dark:hover:shadow-xl
                    ${isOpen ? 'shadow-lg dark:shadow-xl' : 'shadow-md dark:shadow-lg'}
                  `}
                  onClick={() => toggleCard(card.id as 'mission' | 'vision')}
                >
                  <CardContent className="p-0">
                    {/* Header - Always Visible */}
                    <motion.div 
                      className="p-6 flex items-center justify-between"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 rounded-lg ${colorClasses.iconBg} flex items-center justify-center`}>
                          <IconComponent className={`h-6 w-6 ${colorClasses.iconColor}`} />
                        </div>
                        <div className="text-left">
                          <h3 className="text-xl font-bold text-foreground">{card.title}</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            {isOpen ? 'Click to collapse' : 'Click to expand'}
                          </p>
                        </div>
                      </div>
                      
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className={`w-8 h-8 rounded-full ${colorClasses.iconBg} flex items-center justify-center`}
                      >
                        {isOpen ? (
                          <Minus className={`h-4 w-4 ${colorClasses.iconColor}`} />
                        ) : (
                          <Plus className={`h-4 w-4 ${colorClasses.iconColor}`} />
                        )}
                      </motion.div>
                    </motion.div>

                    {/* Expandable Content */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 border-t border-border/50 pt-6">
                            <div className="space-y-4 text-muted-foreground">
                              {card.content.map((paragraph, idx) => (
                                <motion.p
                                  key={idx}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.1 + idx * 0.1 }}
                                  className="leading-relaxed"
                                >
                                  {paragraph}
                                </motion.p>
                              ))}
                            </div>
                            
                            {/* Decorative Element */}
                            <motion.div
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.4 }}
                              className={`w-full h-1 ${colorClasses.iconBg} rounded-full mt-6`}
                            />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-sm text-muted-foreground">
            Click on each card to {openCard ? 'collapse' : 'expand'} and learn more
          </p>
        </motion.div>
      </div>
    </section>
  )
}