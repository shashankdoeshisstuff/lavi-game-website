// app/about/components/TeamSection.tsx
'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { MapPin } from 'lucide-react'

const team = [
  { 
    name: 'Alex Johnson', 
    role: 'CEO & Founder', 
    image: '/images/team/alex.jpg',
    bio: 'Visionary leader with 15+ years in technology and business innovation',
    joinDate: '2020'
  },
  { 
    name: 'Samantha Lee', 
    role: 'CTO', 
    image: '/images/team/samantha.jpg',
    bio: 'Technology expert driving our technical strategy and innovation',
    joinDate: '2020'
  },
  { 
    name: 'David Chen', 
    role: 'Lead Developer', 
    image: '/images/team/david.jpg',
    bio: 'Technical wizard who transforms complex ideas into scalable solutions',
    joinDate: '2021'
  },
  { 
    name: 'Maria Rodriguez', 
    role: 'Project Director', 
    image: '/images/team/maria.jpg',
    bio: 'Ensures seamless project delivery and client satisfaction',
    joinDate: '2021'
  },
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

export default function TeamSection() {
  return (
    <section className="py-20 bg-muted/30 dark:bg-muted/10">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          Meet Our Team
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-16"
        >
          Talented professionals dedicated to delivering exceptional technology solutions
        </motion.p>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <Card className="h-full overflow-hidden border-0 bg-background hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                <div className="relative h-60 bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Avatar className="h-32 w-32 border-4 border-background shadow-lg">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback className="bg-primary/20 text-primary text-xl font-semibold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                  </motion.div>
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-3">{member.bio}</p>
                  <div className="flex items-center justify-center text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span>Member since {member.joinDate}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}