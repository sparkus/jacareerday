import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { FiPlay, FiPause, FiSkipForward } from 'react-icons/fi'

interface VideoOverlayProps {
  isVisible: boolean
  onStartPresentation: () => void
}

// Video sections with timestamps (in seconds)
const VIDEO_SECTIONS = [
  { time: 0, label: 'Deep Robotics', endTime: 49 },
  { time: 49, label: 'Boston Dynamics', endTime: 113 },
  { time: 113, label: 'Tesla Optimus', endTime: 191 },
  { time: 192, label: 'Boston Dynamics 2', endTime: 219 },
  { time: 219, label: 'Figure Robotics', endTime: 248 }
]

export default function VideoOverlay({ isVisible, onStartPresentation }: VideoOverlayProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [showControls, setShowControls] = useState(true)

  // Handle video initialization and cleanup
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Set initial duration once metadata is loaded
    const handleLoadedMetadata = () => {
      setDuration(video.duration)
    }

    // Update progress
    const handleTimeUpdate = () => {
      setProgress((video.currentTime / video.duration) * 100)
    }

    // Handle video end
    const handleEnded = () => {
      video.currentTime = 0
      video.play()
    }

    video.addEventListener('loadedmetadata', handleLoadedMetadata)
    video.addEventListener('timeupdate', handleTimeUpdate)
    video.addEventListener('ended', handleEnded)

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata)
      video.removeEventListener('timeupdate', handleTimeUpdate)
      video.removeEventListener('ended', handleEnded)
    }
  }, [])

  // Handle visibility changes
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (isVisible) {
      // Reset video position when overlay becomes visible
      video.currentTime = 0
      if (isPlaying) {
        video.play()
      }
    }
  }, [isVisible])

  // Handle play state changes
  useEffect(() => {
    const video = videoRef.current
    if (!video || !isVisible) return

    if (isPlaying) {
      video.play()
    } else {
      video.pause()
    }
  }, [isPlaying, isVisible])

  // Handle controls visibility
  useEffect(() => {
    if (!isVisible) return

    let timeout: NodeJS.Timeout
    const handleMouseMove = () => {
      setShowControls(true)
      clearTimeout(timeout)
      timeout = setTimeout(() => setShowControls(false), 3000)
    }

    document.addEventListener('mousemove', handleMouseMove)
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      clearTimeout(timeout)
    }
  }, [isVisible])

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return

    if (isPlaying) {
      video.pause()
    } else {
      video.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current
    if (!video) return

    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = (x / rect.width) * 100
    const newTime = (percentage / 100) * video.duration
    video.currentTime = newTime
  }

  const jumpToSection = (time: number) => {
    const video = videoRef.current
    if (!video) return

    video.currentTime = time
    if (!isPlaying) {
      video.play()
      setIsPlaying(true)
    }
  }

  const getCurrentSection = () => {
    const video = videoRef.current
    if (!video) return null

    const currentTime = video.currentTime
    return VIDEO_SECTIONS.find((section, index) => {
      const nextSection = VIDEO_SECTIONS[index + 1]
      return currentTime >= section.time && currentTime < (nextSection?.time ?? section.endTime)
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black"
        >
          {/* Video */}
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            playsInline
            loop
            onClick={togglePlay}
          >
            <source src="https://images-jacareerday.agw3.org/careerday-low.mp4" type="video/mp4" />
          </video>

          {/* Controls Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: showControls ? 1 : 0 }}
            className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4"
          >
            {/* Progress Bar */}
            <div 
              className="w-full h-1 bg-white/30 rounded-full mb-4 cursor-pointer relative"
              onClick={handleProgressClick}
            >
              <div 
                className="h-full bg-blue-500 rounded-full"
                style={{ width: `${progress}%` }}
              />
              {/* Section markers */}
              {VIDEO_SECTIONS.map((section, index) => (
                <div
                  key={index}
                  className="absolute top-1/2 -translate-y-1/2 w-0.5 h-3 bg-white/50"
                  style={{ left: `${(section.time / duration) * 100}%` }}
                />
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={togglePlay}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  {isPlaying ? <FiPause className="w-6 h-6" /> : <FiPlay className="w-6 h-6" />}
                </button>
                <div className="text-sm text-white/80">
                  {Math.floor(duration * (progress / 100))}s / {Math.floor(duration)}s
                </div>
              </div>

              <button
                onClick={onStartPresentation}
                className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 transition-colors text-white flex items-center gap-2"
              >
                <FiSkipForward className="w-5 h-5" />
                Skip to Presentation
              </button>
            </div>

            {/* Section Navigation */}
            <div className="flex gap-2 mt-4 flex-wrap">
              {VIDEO_SECTIONS.map((section, index) => {
                const currentSection = getCurrentSection()
                const isActive = currentSection?.time === section.time
                return (
                  <button
                    key={index}
                    onClick={() => jumpToSection(section.time)}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                      isActive
                        ? 'bg-blue-500 text-white'
                        : 'bg-white/10 hover:bg-white/20 text-white/80'
                    }`}
                  >
                    {section.label}
                  </button>
                )
              })}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 