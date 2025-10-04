// app/about/components/OurHistory.tsx
'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Users, Rocket, Target, Sparkles, ChevronRight, MapPin, Award } from 'lucide-react'
import { useRef, useState } from 'react'

export default function OurHistory() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })
  const [activeTimeline, setActiveTimeline] = useState(0)

  const timelineData = [
    {
      year: '2020',
      title: 'The Beginning',
      description: 'Axenet was founded with a vision to empower businesses through innovative technology solutions.',
      achievements: ['Founded with 5 team members', 'First office established', 'Initial client partnerships formed'],
      icon: Target,
      color: 'from-blue-500 to-cyan-500',
      stats: { team: 5, clients: 3, projects: 8 }
    },
    {
      year: '2021',
      title: 'Rapid Growth',
      description: 'Expanded our team and delivered our first enterprise solutions to 10+ clients.',
      achievements: ['Team grew to 15 members', 'Enterprise solutions launched', 'Industry recognition received'],
      icon: Users,
      color: 'from-purple-500 to-pink-500',
      stats: { team: 15, clients: 15, projects: 25 }
    },
    {
      year: '2022-2023',
      title: 'Industry Recognition',
      description: 'Reached 30+ happy clients and received industry recognition for our innovative solutions.',
      achievements: ['Award-winning projects', 'International clients onboarded', 'Advanced AI solutions developed'],
      icon: Award,
      color: 'from-green-500 to-teal-500',
      stats: { team: 25, clients: 30, projects: 50 }
    },
    {
      year: '2024',
      title: 'Future Ready',
      description: 'Continuing to push boundaries with AI and cloud solutions for modern businesses.',
      achievements: ['AI-powered platforms', 'Cloud transformation services', 'Global expansion initiatives'],
      icon: Rocket,
      color: 'from-orange-500 to-red-500',
      stats: { team: 35, clients: 45, projects: 75 }
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  // Get current timeline data
  const currentTimeline = timelineData[activeTimeline]
  const CurrentIcon = currentTimeline.icon

  return (
    <section ref={ref} className="py-20 bg-transparent relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 0.1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1 }}
          className="absolute top-10 left-10 w-20 h-20 bg-primary rounded-full blur-xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 0.05, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute bottom-10 right-10 w-32 h-32 bg-secondary rounded-full blur-2xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header with Interactive Elements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center text-sm font-medium text-primary mb-4 bg-primary/10 px-4 py-2 rounded-full border border-primary/20 cursor-pointer"
          >
            <Sparkles className="mr-2 h-4 w-4" />
            OUR JOURNEY
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="ml-1"
            >
              <ChevronRight className="h-4 w-4" />
            </motion.div>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
            Our <span className="text-primary">Evolution</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            From startup to industry leader - follow our journey of innovation and growth
          </motion.p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Interactive Timeline Navigation */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex justify-center mb-12"
          >
            <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-2 border border-border/50 shadow-lg">
              <div className="flex flex-wrap justify-center gap-2">
                {timelineData.map((item, index) => {
                  const IconComponent = item.icon
                  return (
                    <motion.button
                      key={index}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setActiveTimeline(index)}
                      className={`
                        relative px-4 py-3 rounded-xl font-medium transition-all duration-300
                        ${activeTimeline === index 
                          ? `text-white bg-gradient-to-r ${item.color} shadow-lg` 
                          : 'text-muted-foreground bg-background hover:bg-muted/50'
                        }
                      `}
                    >
                      <div className="flex items-center gap-2">
                        <IconComponent className="h-4 w-4" />
                        <span>{item.year}</span>
                      </div>
                      
                      {/* Active indicator */}
                      {activeTimeline === index && (
                        <motion.div
                          layoutId="activeTimeline"
                          className="absolute inset-0 rounded-xl border-2 border-white/20"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </motion.button>
                  )
                })}
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Timeline Content */}
            <motion.div
              key={activeTimeline}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTimeline}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-background rounded-2xl p-6 shadow-lg border border-border/50"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${currentTimeline.color} flex items-center justify-center text-white shadow-lg`}>
                      <CurrentIcon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {currentTimeline.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {currentTimeline.description}
                      </p>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-primary" />
                      Key Achievements
                    </h4>
                    <div className="space-y-2">
                      {currentTimeline.achievements.map((achievement, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + index * 0.1 }}
                          className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors group"
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${currentTimeline.color}`} />
                          <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                            {achievement}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Stats Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-3 gap-4"
              >
                {[
                  { label: 'Team', value: currentTimeline.stats.team, icon: Users },
                  { label: 'Clients', value: currentTimeline.stats.clients, icon: MapPin },
                  { label: 'Projects', value: currentTimeline.stats.projects, icon: Award },
                ].map((stat, index) => {
                  const StatIcon = stat.icon
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="bg-background rounded-xl p-4 text-center border border-border/50 shadow-sm hover:shadow-md transition-all"
                    >
                      <StatIcon className={`h-6 w-6 mx-auto mb-2 ${currentTimeline.color.split(' ')[0].replace('from-', 'text-')}`} />
                      <div className="text-2xl font-bold text-foreground">{stat.value}+</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </motion.div>
                  )
                })}
              </motion.div>
            </motion.div>

            {/* Visual Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 rounded-2xl p-8 border border-border/50 h-full">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20 rounded-full" />
                
                {/* Timeline Points */}
                <div className="space-y-12 relative">
                  {timelineData.map((item, index) => {
                    const TimelineIcon = item.icon
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="flex items-start gap-4 group cursor-pointer"
                        onClick={() => setActiveTimeline(index)}
                      >
                        {/* Timeline Dot */}
                        <div className="relative flex-shrink-0">
                          <motion.div
                            animate={{ 
                              scale: activeTimeline === index ? [1, 1.2, 1] : 1,
                              boxShadow: activeTimeline === index ? 
                                `0 0 0 4px rgba(59, 130, 246, 0.2)` : 'none'
                            }}
                            transition={{ duration: 2, repeat: activeTimeline === index ? Infinity : 0 }}
                            className={`
                              w-4 h-4 rounded-full border-4 border-background z-10 relative
                              ${activeTimeline === index 
                                ? `bg-gradient-to-r ${item.color} shadow-lg` 
                                : 'bg-muted-foreground/30'
                              }
                            `}
                          />
                        </div>

                        {/* Content */}
                        <motion.div
                          whileHover={{ x: 10 }}
                          className={`
                            flex-1 p-4 rounded-xl transition-all duration-300
                            ${activeTimeline === index 
                              ? 'bg-background shadow-lg border border-border/50' 
                              : 'opacity-70 hover:opacity-100 hover:bg-background/50'
                            }
                          `}
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <TimelineIcon className={`h-4 w-4 ${
                              activeTimeline === index ? `text-${item.color.split(' ')[0].replace('from-', '')}-500` : 'text-muted-foreground'
                            }`} />
                            <span className={`
                              font-semibold
                              ${activeTimeline === index ? 'text-foreground' : 'text-muted-foreground'}
                            `}>
                              {item.year}
                            </span>
                          </div>
                          <p className={`
                            text-sm
                            ${activeTimeline === index ? 'text-foreground' : 'text-muted-foreground'}
                          `}>
                            {item.title}
                          </p>
                        </motion.div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Progress Bar */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={inView ? { opacity: 1, width: '100%' } : { opacity: 0, width: 0 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="mt-12"
          >
            <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50 shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-medium text-foreground">Our Journey Progress</span>
                <span className="text-sm text-muted-foreground">
                  {activeTimeline + 1} of {timelineData.length} milestones
                </span>
              </div>
              
              <div className="w-full bg-muted rounded-full h-3">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${((activeTimeline + 1) / timelineData.length) * 100}%` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className={`h-3 rounded-full bg-gradient-to-r ${currentTimeline.color} relative`}
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}