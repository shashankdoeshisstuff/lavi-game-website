// app/services/components/ServicesShowcase.tsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Code, 
  Palette, 
  Zap, 
  Globe,
  Smartphone,
  Monitor,
  Box,
  GamepadIcon,
  Users,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Play,
  Eye,
  Download,
  ExternalLink
} from 'lucide-react'

export default function ServicesShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [hoveredService, setHoveredService] = useState<string | null>(null)

  const services = [
    {
      id: 'game-development',
      icon: Code,
      title: 'GAME DEVELOPMENT SERVICES',
      description: 'Our game development solutions span genres, from RPGs and MMO RPGs to Casual titles. We build for mobile, PC, console, and cross-platform environments with a focus on scalability, performance optimization, and technical excellence.',
      detailedDescription: 'By integrating AI-driven tools like Claude Sonnet & GitHub Copilot, and Unity AI into our workflows, we accelerate prototyping, streamline coding, and enhance creative iteration, delivering projects faster without compromising quality.',
      features: [
        { name: 'Mobile Game Development Services', icon: Smartphone },
        { name: 'PC Game Development Services', icon: Monitor },
        { name: 'Unity Game Development Services', icon: Box },
        { name: 'Unreal Engine Game Development Services', icon: GamepadIcon },
        { name: 'VR Game Development Services', icon: Globe },
        { name: 'HTML5 Game Development Services', icon: Code }
      ],
      color: 'from-blue-500 to-cyan-500',
      stats: { projects: '50+', rating: '4.8/5.0', experience: '4+ Years' },
      image: '/images/services/game-dev.jpg',
      technologies: ['Unity', 'Unreal Engine', 'React Native', 'Flutter', 'AI Tools'],
      caseStudy: 'View how we built "Chrono Nexus" - 2M+ downloads'
    },
    {
      id: 'game-art',
      icon: Palette,
      title: 'GAME ART SERVICES',
      description: 'Our experienced game artists, modelers, animators, and UI/UX specialists deliver 2D and 3D art at scale.',
      detailedDescription: 'We leverage tools like Meshya1, Leonardo AI, MidJourney, ChatGPT AI, and Sara AI, tailoring the art to your game\'s style, genre, and platform. From early concepts to final production assets, our teams ensure visual consistency, technical optimization, and creative alignment.',
      features: [
        { name: 'Game Concept Art', icon: Palette },
        { name: '3D Character Design', icon: Users },
        { name: '2D Game Art', icon: Palette },
        { name: '3D Modelling', icon: Box },
        { name: '3D Animation', icon: Play },
        { name: 'AAA Game Art', icon: Sparkles }
      ],
      color: 'from-purple-500 to-pink-500',
      stats: { projects: '100+', artists: '25+', styles: '15+' },
      image: '/images/services/game-art.jpg',
      technologies: ['Blender', 'Maya', 'Substance', 'AI Art Tools', 'Photoshop'],
      caseStudy: 'See our AAA art pipeline for "Shadow Protocol"'
    },
    {
      id: 'liveops',
      icon: Zap,
      title: 'GAME LIVEOPS SERVICES',
      description: 'We deliver comprehensive LiveOps solutions that keep your games engaging and profitable post-launch.',
      detailedDescription: 'Through real-time content updates, personalized player journeys, and in-game economy balancing, our data-driven approach maximizes player retention, monetization, and long-term game success with seamless content delivery.',
      features: [
        { name: 'Live Content Updates', icon: Zap },
        { name: 'Player Retention Systems', icon: Users },
        { name: 'Economy Balancing', icon: TrendingUp },
        { name: 'Performance Analytics', icon: Eye },
        { name: 'Community Management', icon: Users },
        { name: 'Seasonal Events', icon: Sparkles }
      ],
      color: 'from-green-500 to-teal-500',
      stats: { retention: '+40%', revenue: '+35%', engagement: '+50%' },
      image: '/images/services/liveops.jpg',
      technologies: ['Analytics', 'A/B Testing', 'CRM', 'Automation', 'AI'],
      caseStudy: 'How we increased player LTV by 60% for "Aether Legends"'
    },
    {
      id: 'immersive',
      icon: Globe,
      title: 'IMMERSIVE SOLUTIONS',
      description: 'We provide immersive and interactive solutions for leading enterprises across multiple industries.',
      detailedDescription: 'By blending narrative design with cutting-edge AR/VR and AI, we craft experiences that engage and perform. Our immersive solutions deliver efficiency, clarity, and measurable business impact across Manufacturing, Automotive, Aviation, Healthcare, Defense, and Oil & Gas.',
      features: [
        { name: 'Training Solutions', icon: Download },
        { name: 'Custom Simulations', icon: Code },
        { name: 'Learning And Education', icon: Users },
        { name: 'Metaverse Services', icon: Globe },
        { name: 'AR/VR Experiences', icon: Eye },
        { name: 'Enterprise Solutions', icon: Box }
      ],
      color: 'from-orange-500 to-red-500',
      stats: { industries: '10+', solutions: '75+', impact: '2.5x ROI' },
      image: '/images/services/immersive.jpg',
      technologies: ['AR/VR', 'Unity', 'Unreal', 'WebGL', 'Cloud'],
      caseStudy: 'Enterprise training simulation for aviation industry'
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  }

  const imageVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3
      }
    }
  }

  return (
    <section ref={ref} className="py-20 bg-transparent relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 0.03, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1 }}
          className="absolute top-1/4 left-1/4 w-40 h-40 bg-primary rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 0.02, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-secondary rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center rounded-full bg-primary/10 px-6 py-3 text-base font-medium text-primary mb-6 border border-primary/20 shadow-sm hover:shadow-md transition-shadow cursor-pointer group/header"
          >
            <Sparkles className="mr-2 h-5 w-5 group-hover/header:rotate-180 transition-transform duration-500" />
            Comprehensive Game Development Solutions
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="ml-2"
            >
              <ArrowRight className="h-4 w-4" />
            </motion.div>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
            Our <span className="text-primary">Expertise</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            End-to-end game development services that bring your vision to life with cutting-edge 
            technology and creative excellence. Partner with us to create unforgettable gaming experiences.
          </p>
        </motion.div>

        {/* Enhanced Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 xl:grid-cols-2 gap-8"
        >
          {services.map((service) => {
            const IconComponent = service.icon
            const isHovered = hoveredService === service.id

            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group"
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <Card className="h-full border-2 border-border/50 bg-background/90 backdrop-blur-sm hover:border-primary/40 hover:shadow-2xl transition-all duration-500 overflow-hidden relative">
                  {/* Hover Gradient Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 0.02 : 0 }}
                    className={`absolute inset-0 bg-gradient-to-r ${service.color} pointer-events-none`}
                    transition={{ duration: 0.3 }}
                  />

                  <CardContent className="p-0">
                    {/* Image Placeholder with Gradient */}
                    <motion.div
                      variants={imageVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover="hover"
                      className={`relative h-48 overflow-hidden bg-gradient-to-br ${service.color} bg-opacity-10`}
                    >
                      {/* Pattern Overlay */}
                      <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-10" />
                      
                      {/* Service Icon Floating */}
                      <motion.div
                        animate={{ 
                          y: isHovered ? [-5, 5, -5] : 0,
                          rotate: isHovered ? [-2, 2, -2] : 0
                        }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white shadow-2xl`}
                      >
                        <IconComponent className="h-8 w-8" />
                      </motion.div>

                      {/* Technology Badges */}
                      <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                        {service.technologies.slice(0, 3).map((tech, idx) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + idx * 0.1 }}
                            className="px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-xs font-medium text-foreground/80 border border-border/50"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>

                      {/* View Case Study Button */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
                        className="absolute top-4 right-4"
                      >
                        <Button
                          variant="secondary"
                          size="sm"
                          className="bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background rounded-full text-xs"
                        >
                          <Eye className="mr-1 h-3 w-3" />
                          Case Study
                        </Button>
                      </motion.div>
                    </motion.div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Header with Stats */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                            {service.title}
                          </h3>
                          
                          {/* Stats */}
                          <div className="flex flex-wrap gap-4 mb-4">
                            {Object.entries(service.stats).map(([key, value]) => (
                              <motion.div
                                key={key}
                                whileHover={{ scale: 1.05 }}
                                className="text-center"
                              >
                                <div className="text-2xl font-bold text-foreground">{value}</div>
                                <div className="text-xs text-muted-foreground uppercase tracking-wide">
                                  {key}
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="space-y-3 mb-6">
                        <p className="text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ 
                            opacity: isHovered ? 1 : 0,
                            height: isHovered ? 'auto' : 0
                          }}
                          className="text-sm text-muted-foreground/80 leading-relaxed overflow-hidden"
                        >
                          {service.detailedDescription}
                        </motion.p>
                      </div>

                      {/* Enhanced Features Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                        {service.features.map((feature, idx) => {
                          const FeatureIcon = feature.icon
                          return (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.5 + idx * 0.1 }}
                              whileHover={{ x: 4, backgroundColor: 'rgba(0,0,0,0.02)' }}
                              className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/30 transition-all duration-300 group/feature cursor-pointer"
                            >
                              <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${service.color} bg-opacity-10 flex items-center justify-center group-hover/feature:bg-opacity-20 transition-all`}>
                                <FeatureIcon className={`h-4 w-4 ${service.color.split(' ')[0].replace('from-', 'text-')}-500`} />
                              </div>
                              <span className="text-sm font-medium text-foreground group-hover/feature:text-primary transition-colors flex-1">
                                {feature.name}
                              </span>
                              <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0 }}
                                className={`text-${service.color.split(' ')[0].replace('from-', '')}-500`}
                              >
                                <CheckCircle2 className="h-4 w-4" />
                              </motion.div>
                            </motion.div>
                          )
                        })}
                      </div>

                      {/* Enhanced Action Buttons */}
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4 border-t border-border/50">
                        <Button 
                          variant="ghost" 
                          className="group/btn text-foreground hover:text-primary p-0 h-auto font-semibold"
                        >
                          VIEW MORE
                          <motion.div
                            animate={{ x: [0, 4, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="ml-2"
                          >
                            <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                          </motion.div>
                        </Button>
                        
                        <div className="flex gap-3">
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="rounded-full border-border/50 hover:border-primary/50"
                          >
                            <Download className="mr-2 h-4 w-4" />
                            Brochure
                          </Button>
                          <Button 
                            className={`bg-gradient-to-r ${service.color} text-white hover:shadow-lg hover:scale-105 transition-all rounded-full shadow-lg`}
                            size="sm"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            CHECKOUT MORE
                          </Button>
                        </div>
                      </div>

                      {/* Case Study Preview */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
                        className="mt-4 p-3 bg-muted/30 rounded-lg border border-border/50"
                      >
                        <p className="text-xs text-muted-foreground">
                          💡 <strong>Case Study:</strong> {service.caseStudy}
                        </p>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Enhanced Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 dark:from-primary/20 dark:via-primary/10 dark:to-primary/20 rounded-3xl p-12 border border-border/50 shadow-xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('/images/pattern-dots.svg')] opacity-5" />
            
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 }}
              className="text-3xl font-bold mb-4 relative z-10"
            >
              Ready to Start Your Project?
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.1 }}
              className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg leading-relaxed relative z-10"
            >
              {`Let's collaborate to create amazing gaming experiences. If you are looking for a video game 
              development studio built for scale, speed, and stunning visuals, our AI-driven visuals give you the added edge.`}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap gap-4 justify-center relative z-10"
            >
              <Button size="lg" className="rounded-full px-8 py-6 text-base group bg-primary hover:bg-primary/90 hover:scale-105 transition-transform shadow-lg">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8 py-6 text-base border-2">
                Schedule a Call
              </Button>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-4 left-10 w-6 h-6 bg-primary rounded-full opacity-20"
            />
            <motion.div
              animate={{ 
                y: [0, 10, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute bottom-6 right-12 w-4 h-4 bg-secondary rounded-full opacity-30"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}