// app/services/components/ServicesGrid.tsx
'use client'

import { motion, useInView } from 'framer-motion'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Code, 
  Smartphone, 
  Cloud, 
  Database, 
  Shield, 
  Zap, 
  ArrowRight, 
  Clock,
  CheckCircle2
} from 'lucide-react'
import { useRef } from 'react'

const services = [
  {
    id: 1,
    icon: Code,
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies for optimal performance and user experience.',
    price: 'Starting at $5,000',
    duration: '4-8 weeks',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Secure'],
    color: 'from-blue-500 to-cyan-500',
    category: 'Development'
  },
  {
    id: 2,
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
    price: 'Starting at $8,000',
    duration: '6-12 weeks',
    features: ['iOS & Android', 'Cross-Platform', 'App Store Deployment', 'Push Notifications'],
    color: 'from-purple-500 to-pink-500',
    category: 'Development'
  },
  {
    id: 3,
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services for modern businesses.',
    price: 'Custom Pricing',
    duration: '2-4 weeks',
    features: ['AWS/Azure/GCP', 'Scalable Architecture', 'Cost Optimization', '24/7 Monitoring'],
    color: 'from-green-500 to-teal-500',
    category: 'Infrastructure'
  },
  {
    id: 4,
    icon: Database,
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights with advanced analytics and visualization.',
    price: 'Starting at $3,000',
    duration: '3-6 weeks',
    features: ['Data Visualization', 'Real-time Analytics', 'Custom Dashboards', 'Predictive Modeling'],
    color: 'from-orange-500 to-red-500',
    category: 'Analytics'
  },
  {
    id: 5,
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets and data.',
    price: 'Starting at $2,500',
    duration: '2-4 weeks',
    features: ['Security Audit', 'Threat Protection', 'Compliance', 'Incident Response'],
    color: 'from-amber-500 to-yellow-500',
    category: 'Security'
  },
  {
    id: 6,
    icon: Zap,
    title: 'Digital Transformation',
    description: 'End-to-end digital transformation services to modernize your business operations.',
    price: 'Custom Pricing',
    duration: '8-16 weeks',
    features: ['Process Automation', 'System Integration', 'Change Management', 'Training'],
    color: 'from-indigo-500 to-purple-500',
    category: 'Consulting'
  }
]

export default function ServicesGrid() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

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

  return (
    <section ref={ref} className="py-20 bg-transparent">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-primary">Service Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group"
              >
                <Card className="h-full border-2 border-border/50 bg-background/80 hover:border-primary/30 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 overflow-hidden">
                  {/* Header with Gradient */}
                  <div className={`h-2 bg-gradient-to-r ${service.color}`} />
                  
                  <CardContent className="p-6">
                    {/* Service Icon & Title */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-full">
                        {service.category}
                      </span>
                    </div>

                    {/* Service Title & Description */}
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Pricing & Duration */}
                    <div className="flex items-center justify-between mb-6 p-3 bg-muted/30 rounded-lg">
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-foreground">{service.price}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {service.duration}
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="space-y-2 mb-6">
                      <h4 className="text-sm font-semibold text-foreground mb-3">{`What's Included:`}</h4>
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="p-6 pt-0">
                    <Button className="w-full group/btn" size="lg">
                      Get Quote
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8 }}
          className="mt-16 bg-background/80 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-lg"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '50+', label: 'Projects Completed' },
              { value: '30+', label: 'Happy Clients' },
              { value: '24/7', label: 'Support' },
              { value: '100%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="group"
              >
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}