// components/sections/home/background-videos.tsx
'use client'

import { useEffect, useState } from 'react'

const getYouTubeId = (url: string) => {
  const regExp = /^.*(?:youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/
  const match = url.match(regExp)
  return match && match[1].length === 11 ? match[1] : null
}

interface BackgroundVideosProps {
  videoUrls: string[]
}

export default function BackgroundVideos({ videoUrls }: BackgroundVideosProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const videoIds = videoUrls.map(getYouTubeId).filter(Boolean) as string[]

  useEffect(() => {
    if (videoIds.length <= 1) return
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % videoIds.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [videoIds.length])

  return (
    <div className="absolute inset-0 z-0">
      {videoIds.map((id, idx) => (
        <div
          key={id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            idx === activeIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="relative h-full w-full overflow-hidden">
            <iframe
              className="absolute top-1/2 left-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 scale-105"
              src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1&controls=0&loop=1&playlist=${id}&modestbranding=1&disablekb=1`}
              allow="autoplay; fullscreen"
              style={{ pointerEvents: 'none' }}
              title="Hero background video"
            />
          </div>
        </div>
      ))}
      {/* Overlays */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
    </div>
  )
}