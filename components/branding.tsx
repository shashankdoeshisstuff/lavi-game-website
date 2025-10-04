'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface BrandingProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  variant?: 'default' | 'gradient' | 'outline' | 'minimal'
  animated?: boolean
  className?: string
  showTagline?: boolean
  uppercase?: boolean
}

export default function Branding({
  size = 'md',
  variant = 'default',
  animated = true,
  className,
  showTagline = false,
  uppercase = true
}: BrandingProps) {
  const sizeClasses = {
    xs: 'text-lg tracking-wider',
    sm: 'text-xl md:text-2xl tracking-wider',
    md: 'text-2xl md:text-3xl lg:text-4xl tracking-wide',
    lg: 'text-4xl md:text-5xl lg:text-6xl tracking-wide',
    xl: 'text-5xl md:text-6xl lg:text-7xl tracking-wide',
    '2xl': 'text-6xl md:text-7xl lg:text-8xl tracking-wide'
  }

  const variantClasses = {
    default: 'text-foreground',
    gradient: 'bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent',
    outline: 'text-transparent stroke-2 stroke-foreground',
    minimal: 'text-muted-foreground'
  }

  const taglineSize = {
    xs: 'text-xs tracking-widest',
    sm: 'text-xs tracking-widest',
    md: 'text-sm tracking-widest',
    lg: 'text-base tracking-widest',
    xl: 'text-lg tracking-widest',
    '2xl': 'text-xl tracking-widest'
  }

  const BrandText = animated ? motion.span : 'span'

  return (
    <div className={cn('flex flex-col items-center justify-center', className)}>
      <div className="relative">
        {/* Main Brand Text */}
        <BrandText
          className={cn(
            'font-proxima-nova font-bold select-none',
            uppercase && 'uppercase',
            sizeClasses[size],
            variantClasses[variant]
          )}
          style={{
            fontFamily: "'Proxima Nova', 'Montserrat', 'Gotham', -apple-system, BlinkMacSystemFont, sans-serif",
            fontWeight: 700
          }}
          initial={animated ? { opacity: 0, y: 20 } : undefined}
          animate={animated ? { opacity: 1, y: 0 } : undefined}
          transition={animated ? { duration: 0.6, ease: 'easeOut' } : undefined}
        >
          {uppercase ? 'AXENET' : 'Axenet'}
        </BrandText>

        {/* Decorative Elements */}
        {variant === 'default' && (
          <motion.div
            className="absolute -inset-4 -z-10 bg-primary/5 rounded-full blur-xl opacity-0 hover:opacity-100 transition-opacity duration-500"
            whileHover={{ scale: 1.1 }}
          />
        )}
      </div>

      {/* Optional Tagline */}
      {showTagline && (
        <motion.p
          className={cn(
            'text-muted-foreground font-proxima-nova font-semibold mt-2',
            uppercase && 'uppercase',
            taglineSize[size]
          )}
          style={{
            fontFamily: "'Proxima Nova', 'Montserrat', 'Gotham', -apple-system, BlinkMacSystemFont, sans-serif"
          }}
          initial={animated ? { opacity: 0, y: 10 } : undefined}
          animate={animated ? { opacity: 1, y: 0 } : undefined}
          transition={animated ? { duration: 0.6, delay: 0.2, ease: 'easeOut' } : undefined}
        >
          Building the Future of Gaming
        </motion.p>
      )}
    </div>
  )
}

// Compact version for headers/navigation
export function CompactBranding({ 
  size = 'sm', 
  className, 
  uppercase = true 
}: { 
  size?: 'sm' | 'md', 
  className?: string,
  uppercase?: boolean 
}) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <div className="w-6 h-6 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center">
        <span className="text-white text-xs font-bold">A</span>
      </div>
      <span 
        className={cn(
          'font-proxima-nova font-bold tracking-wide',
          uppercase && 'uppercase',
          size === 'sm' ? 'text-lg' : 'text-xl'
        )}
        style={{
          fontFamily: "'Proxima Nova', 'Montserrat', 'Gotham', -apple-system, BlinkMacSystemFont, sans-serif",
          fontWeight: 700
        }}
      >
        {uppercase ? 'AXENET' : 'Axenet'}
      </span>
    </div>
  )
}

// Branding with icon
export function IconBranding({ 
  size = 'md', 
  iconSize = 'md',
  className,
  uppercase = true
}: { 
  size?: 'sm' | 'md' | 'lg'
  iconSize?: 'sm' | 'md' | 'lg'
  className?: string
  uppercase?: boolean
}) {
  const textSizes = {
    sm: 'text-lg tracking-wider',
    md: 'text-xl tracking-wide',
    lg: 'text-2xl tracking-wide'
  }

  const iconSizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }

  return (
    <div className={cn('flex items-center gap-3', className)}>
      <div className={cn(
        'bg-gradient-to-br from-primary to-purple-600 rounded-xl flex items-center justify-center text-white font-bold',
        iconSizes[iconSize]
      )}>
        <span className={iconSize === 'sm' ? 'text-xs' : iconSize === 'md' ? 'text-sm' : 'text-lg'}>
          A
        </span>
      </div>
      <span 
        className={cn(
          'font-proxima-nova font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent',
          uppercase && 'uppercase',
          textSizes[size]
        )}
        style={{
          fontFamily: "'Proxima Nova', 'Montserrat', 'Gotham', -apple-system, BlinkMacSystemFont, sans-serif",
          fontWeight: 700
        }}
      >
        {uppercase ? 'AXENET' : 'Axenet'}
      </span>
    </div>
  )
}

// Watermark version for backgrounds
export function WatermarkBranding({ 
  opacity = 10, 
  className, 
  uppercase = true 
}: { 
  opacity?: number, 
  className?: string,
  uppercase?: boolean 
}) {
  return (
    <div className={cn('fixed inset-0 pointer-events-none -z-10 flex items-center justify-center', className)}>
      <div 
        className="text-foreground/10 font-proxima-nova font-black tracking-wider select-none text-9xl md:text-[20rem] lg:text-[30rem]"
        style={{ 
          opacity: opacity / 100,
          fontFamily: "'Proxima Nova', 'Montserrat', 'Gotham', -apple-system, BlinkMacSystemFont, sans-serif",
          fontWeight: 700
        }}
      >
        {uppercase ? 'AXENET' : 'Axenet'}
      </div>
    </div>
  )
}