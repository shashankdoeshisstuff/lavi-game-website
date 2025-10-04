// app/about/components/ValuesSection.tsx
'use client'

import { motion, useInView } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Users, Trophy, Globe, Heart, Sparkles, Rocket, Target, Zap, Shield, ArrowRight } from 'lucide-react'
import { useRef, useState } from 'react'

const values = [
  { 
    icon: Users,
    title: 'Collaboration', 
    desc: 'Working closely with clients to understand their unique needs and deliver tailored solutions.',
    detailedDesc: 'We believe in building strong partnerships through open communication, active listening, and shared ownership of success.',
    color: 'from-blue-500 to-cyan-500',
    principles: ['Client Partnership', 'Transparent Communication', 'Shared Ownership']
  },
  { 
    icon: Trophy,
    title: 'Excellence', 
    desc: 'Committed to delivering high-quality, reliable, and scalable technology solutions.',
    detailedDesc: 'Every project receives our unwavering commitment to quality, from initial concept to final deployment and beyond.',
    color: 'from-amber-500 to-orange-500',
    principles: ['Quality First', 'Continuous Improvement', 'Best Practices']
  },
  { 
    icon: Globe,
    title: 'Innovation', 
    desc: 'Leveraging cutting-edge technologies to create transformative business solutions.',
    detailedDesc: 'We stay ahead of technology trends to provide forward-thinking solutions that drive competitive advantage.',
    color: 'from-emerald-500 to-green-500',
    principles: ['Future-Proof Solutions', 'Technology Leadership', 'Creative Problem-Solving']
  },
  { 
    icon: Heart,
    title: 'Partnership', 
    desc: 'Building long-term relationships based on trust, transparency, and mutual success.',
    detailedDesc: 'Your success is our success. We invest in relationships that grow and evolve over time.',
    color: 'from-rose-500 to-pink-500',
    principles: ['Long-Term Relationships', 'Trust & Transparency', 'Mutual Growth']
  },
  { 
    icon: Shield,
    title: 'Reliability', 
    desc: 'Consistently delivering on promises with robust, secure, and dependable solutions.',
    detailedDesc: 'We build solutions that you can count on, with security and stability at their core.',
    color: 'from-purple-500 to-indigo-500',
    principles: ['Security First', 'Proven Methodologies', '24/7 Support']
  },
  { 
    icon: Rocket,
    title: 'Growth', 
    desc: 'Helping businesses scale and evolve with future-ready technology solutions.',
    detailedDesc: 'We design solutions that grow with your business, ensuring long-term scalability and adaptability.',
    color: 'from-cyan-500 to-blue-500',
    principles: ['Scalable Architecture', 'Future-Ready Solutions', 'Business Growth']
  },
]

export default function ValuesSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })
  const [activeValue, setActiveValue] = useState<number | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  }

  const cardHoverVariants = {
    rest: { 
      scale: 1, 
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut" as const
      }
    },
    hover: { 
      scale: 1.02, 
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const
      }
    }
  }

  return (
    <section ref={ref} className="py-20 bg-transparent relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 0.03, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1 }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 0.02, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary rounded-full blur-2xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center text-sm font-medium text-primary mb-4 bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
            <Target className="mr-2 h-4 w-4" />
            OUR FOUNDATION
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
            Core <span className="text-primary">Values</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The principles that guide every decision and define our commitment to excellence
          </p>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {values.map((value, index) => {
            const IconComponent = value.icon
            const isActive = activeValue === index
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
                onMouseEnter={() => setActiveValue(index)}
                onMouseLeave={() => setActiveValue(null)}
              >
                <motion.div
                  variants={cardHoverVariants}
                  initial="rest"
                  whileHover="hover"
                  whileTap={{ scale: 0.98 }}
                  className="relative h-full"
                >
                  <Card className={`
                    h-full border-2 transition-all duration-300 overflow-hidden
                    ${isActive 
                      ? 'border-primary/50 bg-primary/5 shadow-xl' 
                      : 'border-border/50 bg-background/80 hover:border-primary/30'
                    }
                    backdrop-blur-sm
                  `}>
                    {/* Animated Background Gradient */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isActive ? 0.1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`absolute inset-0 bg-gradient-to-br ${value.color} pointer-events-none`}
                    />
                    
                    <CardContent className="p-6 relative z-10">
                      {/* Icon & Header */}
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="flex items-start justify-between mb-4"
                      >
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center text-white shadow-lg`}>
                          <IconComponent className="h-6 w-6" />
                        </div>
                        
                        <motion.div
                          animate={{ rotate: isActive ? 180 : 0, scale: isActive ? 1.2 : 1 }}
                          transition={{ duration: 0.3 }}
                          className={`w-6 h-6 rounded-full flex items-center justify-center ${
                            isActive ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'
                          }`}
                        >
                          <ArrowRight className="h-3 w-3" />
                        </motion.div>
                      </motion.div>

                      {/* Title & Description */}
                      <div className="space-y-3">
                        <h3 className={`
                          text-xl font-bold transition-colors duration-300
                          ${isActive ? 'text-primary' : 'text-foreground'}
                        `}>
                          {value.title}
                        </h3>
                        
                        <motion.p
                          initial={{ opacity: 1, height: 'auto' }}
                          animate={{ 
                            opacity: isActive ? 0 : 1,
                            height: isActive ? 0 : 'auto'
                          }}
                          transition={{ duration: 0.2 }}
                          className="text-muted-foreground text-sm leading-relaxed"
                        >
                          {value.desc}
                        </motion.p>

                        {/* Expanded Content */}
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ 
                            opacity: isActive ? 1 : 0,
                            height: isActive ? 'auto' : 0
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="space-y-4">
                            {/* Detailed Description */}
                            <p className="text-foreground/80 text-sm leading-relaxed">
                              {value.detailedDesc}
                            </p>

                            {/* Guiding Principles */}
                            <div className="space-y-2">
                              <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                                <Zap className="h-3 w-3 text-primary" />
                                Guiding Principles
                              </h4>
                              <div className="space-y-1">
                                {value.principles.map((principle, idx) => (
                                  <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + idx * 0.1 }}
                                    className="flex items-center gap-2 text-xs text-muted-foreground"
                                  >
                                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${value.color}`} />
                                    {principle}
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </div>

                      {/* Hover Indicator */}
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: isActive ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${value.color} rounded-b-lg`}
                      />
                    </CardContent>
                  </Card>

                  {/* Glow Effect */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: isActive ? 0.4 : 0, scale: isActive ? 1 : 0.8 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute inset-0 bg-gradient-to-br ${value.color} blur-xl rounded-xl -z-10`}
                  />
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Interactive CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold mb-2">Experience Our Values in Action</h3>
            <p className="text-muted-foreground mb-4">
              These principles guide every project we undertake and every relationship we build.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/20 cursor-pointer"
            >
              <Sparkles className="h-4 w-4" />
              See how we apply these values
              <ArrowRight className="h-3 w-3" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}