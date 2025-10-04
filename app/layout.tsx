import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { fetchBrandsSSR } from '@/lib/fetchBrands'
import BrandsProvider from '@/components/BrandsProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Axenet Games | Creating Immersive Gaming Experiences',
  description: 'Axenet Games is a premier game development studio creating cutting-edge gaming experiences for players worldwide.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const brands = await fetchBrandsSSR();

  return (
    <html lang="en" className='dark'>
      <body className={`${inter.className} relative`}>
        <BrandsProvider brands={brands} />

        {/* Global Background Elements */}
        <div className="fixed inset-0 -z-20">
          {/* Grid Pattern */}
          <svg className="w-full h-full text-muted-foreground opacity-20" xmlns="http://www.w3.org/2000/svg" fill="none">
            <defs>
              <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M40 0H0V40" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>

        {/* Gradient Orbs */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-[blob_20s_infinite]" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-[blob_25s_infinite]" />
          {/* Additional orb for better coverage */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-[blob_30s_infinite]" />
        </div>

        {/* Particles */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <span
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-0">
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}