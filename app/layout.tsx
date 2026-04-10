import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { fetchBrandsSSR } from '@/lib/fetchBrands'
import BrandsProvider from '@/components/BrandsProvider'
import { Metadata } from 'next'

// Fonts
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Axenet IT Services | Creating Immersive Gaming Experiences', 
  description: 'Axenet IT Services is a premier game development studio creating cutting-edge gaming experiences for players worldwide.', 
  icons: { 
    icon: [ 
      { url: '/images/logo.png', sizes: '32x32', type: 'image/png', }, 
      { url: '/images/logo.png', sizes: '64x64', type: 'image/png', }, 
    ], 
    apple: [ 
      { url: '/images/logo.png', sizes: '180x180', type: 'image/png', }, 
    ], 
  }, 
  openGraph: { 
    title: 'Axenet IT Services  | Creating Immersive Gaming Experiences', 
    description: 'Axenet IT Services is a premier game development studio creating cutting-edge gaming experiences for players worldwide.', 
    images: [ 
      { url: '/images/logo.png', width: 1200, height: 630, }, 
    ], 
    type: 'website', 
  }, 
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const brands = await fetchBrandsSSR();

  return (
    <html lang="en" className='dark'>
      <body className={`font-sans relative`}>
        <BrandsProvider brands={brands} />

        {/* Premium Capsule Pattern Background (Visible Version) */}
        <div className="fixed inset-0 -z-20 opacity-[0.20]">

          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="capsule-pattern"
                width="70"
                height="140"
                patternUnits="userSpaceOnUse"
              >
                {/* Left Capsule */}
                <rect
                  x="8"
                  y="0"
                  width="18"
                  height="120"
                  rx="12"
                  fill="none"
                  stroke="white"
                  strokeWidth="1"
                  opacity="0.5"
                />

                {/* Right Capsule */}
                <rect
                  x="40"
                  y="20"
                  width="18"
                  height="120"
                  rx="12"
                  fill="none"
                  stroke="white"
                  strokeWidth="1"
                  opacity="0.5"
                />
              </pattern>
            </defs>

            <rect width="100%" height="100%" fill="url(#capsule-pattern)" />
          </svg>
        </div>

{/* Premium Multi-Directional Fade */}
<div className="fixed inset-0 -z-10 pointer-events-none">

  {/* Top Fade */}
  <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black to-transparent" />

  {/* Bottom Fade */}
  <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black to-transparent" />

  {/* Left Fade */}
  <div className="absolute top-0 left-0 h-full w-64 bg-gradient-to-r from-black to-transparent" />

  {/* Right Fade */}
  <div className="absolute top-0 right-0 h-full w-64 bg-gradient-to-l from-black to-transparent" />

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