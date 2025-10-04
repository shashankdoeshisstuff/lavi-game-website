// app/about/components/DevelopmentProcess.tsx
'use client'

import { motion } from 'framer-motion'
import { Search, Settings, Play, BarChart3, ArrowRight, CheckCircle2, Clock, Users, Target } from 'lucide-react'
import { useRef, useState } from 'react'

const processSteps = [
  {
    step: '01',
    icon: Search,
    title: 'Discovery & Planning',
    description: 'We conduct in-depth analysis of your business needs, market landscape, and technical requirements to build a solid foundation.',
    duration: '1-2 weeks',
    team: 'Project Managers, Business Analysts',
    deliverables: ['Requirements Document', 'Project Scope', 'Technical Specifications'],
    color: 'from-blue-500 to-cyan-500',
    status: 'completed'
  },
  {
    step: '02',
    icon: Settings,
    title: 'Strategy & Design',
    description: 'Our experts design customized solutions and create detailed architecture plans tailored to your specific objectives.',
    duration: '2-3 weeks',
    team: 'Solution Architects, UX/UI Designers',
    deliverables: ['System Architecture', 'UI/UX Designs', 'Development Roadmap'],
    color: 'from-purple-500 to-pink-500',
    status: 'completed'
  },
  {
    step: '03',
    icon: Play,
    title: 'Development & Implementation',
    description: 'Our skilled developers bring your vision to life using cutting-edge technologies and agile development methodologies.',
    duration: '4-8 weeks',
    team: 'Frontend/Backend Developers, DevOps',
    deliverables: ['MVP Development', 'Code Repository', 'Continuous Integration'],
    color: 'from-green-500 to-teal-500',
    status: 'current'
  },
  {
    step: '04',
    icon: BarChart3,
    title: 'Testing & Quality Assurance',
    description: 'Rigorous testing ensures your solution meets the highest standards of quality, security, and performance.',
    duration: '2-3 weeks',
    team: 'QA Engineers, Security Specialists',
    deliverables: ['Test Reports', 'Security Audit', 'Performance Metrics'],
    color: 'from-orange-500 to-red-500',
    status: 'upcoming'
  },
  {
    step: '05',
    icon: Users,
    title: 'Deployment & Training',
    description: 'Seamless deployment to production environment and comprehensive training for your team.',
    duration: '1-2 weeks',
    team: 'DevOps, Technical Trainers',
    deliverables: ['Production Deployment', 'User Documentation', 'Training Sessions'],
    color: 'from-indigo-500 to-purple-500',
    status: 'upcoming'
  },
  {
    step: '06',
    icon: Target,
    title: 'Support & Optimization',
    description: 'Ongoing maintenance, performance monitoring, and continuous improvement of your solution.',
    duration: 'Ongoing',
    team: 'Support Team, DevOps',
    deliverables: ['24/7 Support', 'Performance Reports', 'Feature Updates'],
    color: 'from-amber-500 to-orange-500',
    status: 'upcoming'
  }
]

export default function ProcessSection() {
  const ref = useRef(null)
  const [activeStep, setActiveStep] = useState(2) // Start with step 3 as current

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="h-5 w-5 text-green-500" />
      case 'current':
        return <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
      case 'upcoming':
        return <Clock className="h-4 w-4 text-muted-foreground" />
      default:
        return <Clock className="h-4 w-4 text-muted-foreground" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20'
      case 'current':
        return 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 shadow-lg shadow-blue-500/20'
      case 'upcoming':
        return 'border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/20'
      default:
        return 'border-gray-200 dark:border-gray-800'
    }
  }

  return (
    <section ref={ref} className="py-20 bg-transparent">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center text-sm font-medium text-primary mb-4 bg-primary/10 px-4 py-2 rounded-full">
            <Settings className="mr-2 h-4 w-4" />
            OUR METHODOLOGY
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Development <span className="text-primary">Process</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive, transparent approach to delivering exceptional software solutions
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="max-w-6xl mx-auto">
          {/* Process Steps */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20 -translate-x-1/2 hidden md:block" />
            
            {processSteps.map((step, index) => {
              const IconComponent = step.icon
              const isActive = activeStep === index
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row items-start mb-8 group cursor-pointer ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  {/* Content Card */}
                  <div className="flex-1 md:mx-8 mb-4 md:mb-0">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className={`
                        relative p-6 rounded-2xl border-2 transition-all duration-300
                        ${getStatusColor(step.status)}
                        ${isActive ? 'scale-105' : 'scale-100'}
                        ${index % 2 === 0 ? 'md:text-right' : ''}
                      `}
                    >
                      {/* Step Header */}
                      <div className={`flex items-center mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg`}>
                            <IconComponent className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-semibold text-primary">STEP {step.step}</span>
                              {getStatusIcon(step.status)}
                            </div>
                            <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                          </div>
                        </div>
                      </div>

                      {/* Main Description */}
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Expanded Details */}
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: isActive ? 1 : 0, height: isActive ? 'auto' : 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 pt-4 border-t border-border/50">
                          {/* Duration & Team */}
                          <div className="space-y-3">
                            <div className="flex items-center gap-2 text-sm">
                              <Clock className="h-4 w-4 text-muted-foreground" />
                              <span className="font-medium">Duration:</span>
                              <span className="text-foreground">{step.duration}</span>
                            </div>
                            <div className="flex items-start gap-2 text-sm">
                              <Users className="h-4 w-4 text-muted-foreground mt-0.5" />
                              <div>
                                <span className="font-medium">Team:</span>
                                <p className="text-foreground">{step.team}</p>
                              </div>
                            </div>
                          </div>

                          {/* Deliverables */}
                          <div>
                            <h4 className="font-medium text-sm mb-2">Key Deliverables:</h4>
                            <ul className="space-y-1">
                              {step.deliverables.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <CheckCircle2 className="h-3 w-3 text-green-500 flex-shrink-0" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>

                      {/* View More Indicator */}
                      {!isActive && (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-4">
                          <ArrowRight className="h-3 w-3" />
                          Click to view details
                        </div>
                      )}
                    </motion.div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="relative w-12 h-12 flex items-center justify-center mx-auto md:mx-0">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      animate={{ 
                        scale: isActive ? [1, 1.2, 1] : 1,
                        boxShadow: isActive ? `0 0 0 6px ${step.color.split(' ')[0].replace('from-', 'rgba(59, 130, 246, 0.2)')}` : 'none'
                      }}
                      transition={{ duration: 2, repeat: isActive ? Infinity : 0 }}
                      className={`
                        w-6 h-6 rounded-full border-4 border-background z-10
                        bg-gradient-to-br ${step.color} shadow-lg
                      `}
                    />
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden md:block"></div>
                </motion.div>
              )
            })}
          </div>

          {/* Process Progress */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 bg-background/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50 shadow-lg"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Project Progress</h3>
                <p className="text-muted-foreground text-sm">
                  Currently in {processSteps[activeStep]?.title} phase
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{activeStep + 1}</div>
                  <div className="text-xs text-muted-foreground">Current Step</div>
                </div>
                
                <div className="w-48 bg-muted rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${((activeStep + 1) / processSteps.length) * 100}%` }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={`h-3 rounded-full bg-gradient-to-r ${processSteps[activeStep]?.color} relative`}
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
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-muted-foreground">{processSteps.length}</div>
                  <div className="text-xs text-muted-foreground">Total Steps</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}