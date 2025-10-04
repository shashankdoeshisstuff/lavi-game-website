// components/sections/home/hero-client.tsx
'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Volume2, VolumeX } from 'lucide-react'

interface HeroVideo {
  id: string;
  video_url: string;
  title?: string;
  thumbnail_url?: string;
  is_active: boolean;
  created_at: string;
}

interface HeroClientProps {
  heroVideos: HeroVideo[];
}

export default function HeroClient({ heroVideos }: HeroClientProps) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [isMuted, setIsMuted] = useState(true)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState<string | null>(null)

  // Filter only active videos and sort by creation date (newest first)
  const activeVideos = heroVideos
    .filter(video => video.is_active)
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())

  // Cycle through videos every 8 seconds
  useEffect(() => {
    if (activeVideos.length === 0) return
    
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % activeVideos.length)
      setIsVideoLoaded(false)
      setVideoError(null)
    }, 8000)
    return () => clearInterval(interval)
  }, [activeVideos.length])

  const handleVideoLoad = () => {
    setIsVideoLoaded(true)
    setVideoError(null)
  }

  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    const video = e.currentTarget
    const error = video.error
    let errorMsg = `Failed to load video: ${activeVideos[currentVideoIndex]?.video_url}`
    
    if (error) {
      switch (error.code) {
        case error.MEDIA_ERR_ABORTED:
          errorMsg = 'Video loading was aborted'
          break
        case error.MEDIA_ERR_NETWORK:
          errorMsg = 'Network error occurred while loading video'
          break
        case error.MEDIA_ERR_DECODE:
          errorMsg = 'Video format not supported or file corrupted'
          break
        case error.MEDIA_ERR_SRC_NOT_SUPPORTED:
          errorMsg = 'Video format not supported'
          break
      }
    }
    
    console.error(errorMsg)
    setVideoError(errorMsg)
    
    // Skip to next video on error after a short delay
    setTimeout(() => {
      if (activeVideos.length > 1) {
        setCurrentVideoIndex((prev) => (prev + 1) % activeVideos.length)
        setIsVideoLoaded(false)
      }
    }, 2000)
  }

  const currentVideo = activeVideos[currentVideoIndex]

  // If no active videos, don't render the hero section
  if (activeVideos.length === 0) {
    return null
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <video
            key={currentVideo.id}
            autoPlay
            muted={isMuted}
            loop
            playsInline
            className={`w-full h-full object-cover transition-opacity duration-1000 ${
              isVideoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoadedData={handleVideoLoad}
            onCanPlay={handleVideoLoad}
            onError={handleVideoError}
            preload="auto"
            poster={currentVideo.thumbnail_url || undefined}
          >
            <source src={currentVideo.video_url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Loading spinner */}
          {!isVideoLoaded && !videoError && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin" />
            </div>
          )}

          {/* Error message */}
          {videoError && (
            <div className="absolute inset-0 bg-black/70 flex items-center justify-center flex-col">
              <div className="text-white text-center max-w-md">
                <p className="text-lg mb-4">⚠️ Video playback issue</p>
                <p className="text-sm text-white/70 mb-4">Moving to next video...</p>
                <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto" />
              </div>
            </div>
          )}
        </div>

        {/* Video overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Hero Content */}
      <div className="container relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 fade-in-up">
          The Future of <span className="text-primary">Gaming</span>
        </h1>

        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-white/90 fade-in-up delay-200">
          Immerse yourself in worlds beyond imagination with our cutting-edge
          game development and revolutionary storytelling.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up delay-400">
          <Button size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-8 pulse-once">
            Explore Games
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-8">
            Learn More
          </Button>
        </div>
      </div>

      {/* Video Progress Indicator - Only show if we have multiple videos */}
      {activeVideos.length > 1 && (
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10 flex space-x-3">
          {activeVideos.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentVideoIndex(index)
                setIsVideoLoaded(false)
                setVideoError(null)
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentVideoIndex === index 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to video ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Mute Toggle */}
      <button
        onClick={() => setIsMuted(!isMuted)}
        className="absolute bottom-6 right-6 z-10 p-3 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 transition-all duration-300 hover:scale-110"
        aria-label={isMuted ? 'Unmute video' : 'Mute video'}
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>

      {/* CSS Animations */}
      <style jsx>{`
        .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
        .pulse-once {
          animation: pulseOnce 2s ease-in-out;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulseOnce {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
      `}</style>
    </section>
  )
}