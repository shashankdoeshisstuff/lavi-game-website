// app/careers/components/Benefits.tsx
'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { 
  Heart, 
  DollarSign, 
  Calendar, 
  GraduationCap, 
  Home, 
  Zap,
  Users,
  Globe
} from 'lucide-react'

export default function Benefits() {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Competitive Salary',
      description: 'Industry-leading compensation with regular reviews and bonuses',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive medical, dental, and vision insurance for you and your family',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Calendar,
      title: 'Flexible Time Off',
      description: 'Unlimited PTO with mandatory minimums to ensure you recharge',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: GraduationCap,
      title: 'Learning Budget',
      description: '$3,000 annual budget for conferences, courses, and skill development',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Home,
      title: 'Remote First',
      description: 'Work from anywhere with home office setup stipend and co-working memberships',
      color: 'from-orange-500 to-amber-500'
    },
    {
      icon: Zap,
      title: 'Latest Equipment',
      description: 'Top-tier hardware and software to do your best work',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Users,
      title: 'Team Events',
      description: 'Annual company retreats and regular virtual team-building activities',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Work on projects that reach millions of players worldwide',
      color: 'from-emerald-500 to-green-500'
    }
  ]

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
            Perks & <span className="text-primary">Benefits</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We invest in our team's well-being and growth because we believe happy developers create amazing games.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full border-2 border-border/50 bg-background/80 hover:border-primary/30 hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${benefit.color} flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}