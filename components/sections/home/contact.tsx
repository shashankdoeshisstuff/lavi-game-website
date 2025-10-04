'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative h-screen snap-start flex items-center py-20 px-4 sm:px-6 lg:px-12 overflow-hidden bg-transparent"
    >
      {/* Content */}
      <div className="w-full max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4"
          >
            Get <span className="text-primary">In Touch</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Have questions about our games or want to partner with us? We’d love to hear from you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 px-4 sm:px-6 lg:px-0">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 rounded-2xl bg-background/70 backdrop-blur border border-border shadow-lg"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-6">Contact Us</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Your email address" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input id="subject" placeholder="What is this regarding?" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea id="message" placeholder="Your message" rows={5} />
              </div>
              <Button
                type="submit"
                className="w-full rounded-full px-6 shadow-lg hover:scale-105 transition"
              >
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 rounded-2xl bg-background/70 backdrop-blur border border-border shadow-lg flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-6">Visit Our Studio</h3>
              <div className="bg-muted h-56 sm:h-64 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-center p-6 text-muted-foreground">
                  <MapPin className="mx-auto mb-4 h-8 w-8 sm:h-10 sm:w-10 text-primary" />
                  <p>123 Game Dev Avenue</p>
                  <p>San Francisco, CA 94103</p>
                  <p>United States</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center text-sm sm:text-base">
                <Mail className="mr-3 sm:mr-4 text-primary h-5 w-5" />
                <span>contact@nexusgames.com</span>
              </div>
              <div className="flex items-center text-sm sm:text-base">
                <Phone className="mr-3 sm:mr-4 text-primary h-5 w-5" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
