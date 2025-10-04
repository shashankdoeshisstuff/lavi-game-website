// app/careers/components/OpenPositions.tsx
'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { MapPin, Clock, ArrowRight, Code, Palette, Zap, Users } from 'lucide-react'

export default function OpenPositions() {
  const positions = [
    {
      id: 1,
      title: 'Senior Unity Developer',
      department: 'Engineering',
      type: 'Full-time',
      location: 'Remote',
      experience: '5+ years',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      description: 'Lead development of cutting-edge mobile and VR games using Unity engine.',
      skills: ['Unity', 'C#', '3D Graphics', 'Mobile Optimization']
    },
    {
      id: 2,
      title: 'Game Artist',
      department: 'Design',
      type: 'Full-time',
      location: 'Remote',
      experience: '3+ years',
      icon: Palette,
      color: 'from-purple-500 to-pink-500',
      description: 'Create stunning 2D and 3D assets for our upcoming game titles.',
      skills: ['Blender', 'Photoshop', 'Substance', 'Character Design']
    },
    {
      id: 3,
      title: 'DevOps Engineer',
      department: 'Engineering',
      type: 'Full-time',
      location: 'Remote',
      experience: '4+ years',
      icon: Zap,
      color: 'from-green-500 to-teal-500',
      description: 'Build and maintain our cloud infrastructure and CI/CD pipelines.',
      skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform']
    },
    {
      id: 4,
      title: 'Community Manager',
      department: 'Marketing',
      type: 'Full-time',
      location: 'Remote',
      experience: '2+ years',
      icon: Users,
      color: 'from-orange-500 to-red-500',
      description: 'Engage with our player community and build strong relationships.',
      skills: ['Social Media', 'Discord', 'Content Creation', 'Community Events']
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
            Open <span className="text-primary">Positions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to level up your career? Explore our current openings and join our mission to create unforgettable gaming experiences.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {positions.map((position, index) => {
            const IconComponent = position.icon
            return (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="border-2 border-border/50 bg-background/80 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${position.color} flex items-center justify-center text-white flex-shrink-0`}>
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-foreground mb-2">
                            {position.title}
                          </h3>
                          <p className="text-muted-foreground mb-3">
                            {position.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {position.skills.map((skill, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {position.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {position.type}
                            </div>
                            <div>
                              {position.experience} experience
                            </div>
                          </div>
                        </div>
                      </div>
                      <Button className="rounded-full group">
                        Apply Now
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 rounded-2xl p-8 border border-border/50">
            <h3 className="text-2xl font-bold mb-4">Don't See the Perfect Role?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're always looking for talented people to join our team. Even if you don't see an exact match, 
              we'd love to hear from you and discuss how you can contribute to our mission.
            </p>
            <Button variant="outline" size="lg" className="rounded-full px-8">
              Send Open Application
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}