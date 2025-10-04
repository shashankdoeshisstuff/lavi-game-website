'use client'

import Branding, { CompactBranding, IconBranding, WatermarkBranding } from '@/components/branding'

export default function BrandShowcase() {
  return (
    <div className="min-h-screen bg-background p-8">
      {/* Watermark Background */}
      <WatermarkBranding opacity={3} />

      {/* Navigation */}
      <nav className="flex justify-between items-center mb-16">
        <CompactBranding size="md" />
        <div className="flex gap-4">
          <button className="text-sm text-muted-foreground hover:text-foreground">Home</button>
          <button className="text-sm text-muted-foreground hover:text-foreground">About</button>
          <button className="text-sm text-muted-foreground hover:text-foreground">Contact</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center mb-20">
        <Branding size="2xl" variant="gradient" showTagline animated />
      </section>

      {/* Size Variations */}
      <section className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-16">
        <div className="text-center">
          <Branding size="xs" />
          <p className="text-sm text-muted-foreground mt-2">Extra Small</p>
        </div>
        <div className="text-center">
          <Branding size="sm" />
          <p className="text-sm text-muted-foreground mt-2">Small</p>
        </div>
        <div className="text-center">
          <Branding size="md" />
          <p className="text-sm text-muted-foreground mt-2">Medium</p>
        </div>
        <div className="text-center">
          <Branding size="lg" />
          <p className="text-sm text-muted-foreground mt-2">Large</p>
        </div>
        <div className="text-center">
          <Branding size="xl" />
          <p className="text-sm text-muted-foreground mt-2">Extra Large</p>
        </div>
        <div className="text-center">
          <Branding size="2xl" />
          <p className="text-sm text-muted-foreground mt-2">2X Large</p>
        </div>
      </section>

      {/* Variant Showcase */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <div className="text-center p-6 border rounded-lg">
          <Branding size="lg" variant="default" />
          <p className="text-sm text-muted-foreground mt-2">Default</p>
        </div>
        <div className="text-center p-6 border rounded-lg">
          <Branding size="lg" variant="gradient" />
          <p className="text-sm text-muted-foreground mt-2">Gradient</p>
        </div>
        <div className="text-center p-6 border rounded-lg">
          <Branding size="lg" variant="minimal" />
          <p className="text-sm text-muted-foreground mt-2">Minimal</p>
        </div>
        <div className="text-center p-6 border rounded-lg">
          <IconBranding size="lg" iconSize="lg" />
          <p className="text-sm text-muted-foreground mt-2">With Icon</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t pt-8 text-center">
        <Branding size="sm" variant="minimal" showTagline />
        <p className="text-xs text-muted-foreground mt-2">
          © 2024 Axenet Studios. All rights reserved.
        </p>
      </footer>
    </div>
  )
}