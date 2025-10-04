// app/contact/components/ContactInfo.tsx
'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { MapPin, Clock, Globe, MessageSquare } from 'lucide-react'

export default function ContactInfo() {
  const contactMethods = [
    {
      icon: MapPin,
      title: 'Visit Our Office',
      description: '123 Innovation Street, Tech District, San Francisco, CA 94103',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      description: 'Monday - Friday: 9:00 AM - 6:00 PM PST\nWeekend: Emergency Support Only',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients worldwide with remote development teams across multiple timezones',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: MessageSquare,
      title: 'Quick Response',
      description: 'We typically respond to all inquiries within 2-4 hours during business days',
      color: 'from-orange-500 to-red-500'
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
            Why Choose <span className="text-primary">Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing exceptional service and building lasting partnerships.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-2 border-border/50 bg-background/80 hover:border-primary/30 hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${method.color} flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{method.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                      {method.description}
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