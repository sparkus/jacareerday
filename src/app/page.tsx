'use client'

import DynamicBackground from '@/components/DynamicBackground'
import { motion, AnimatePresence } from 'framer-motion'
import { FiZap, FiTrendingUp, FiBriefcase, FiChevronLeft, FiChevronRight, FiMaximize, FiMinimize, FiShare2, FiCpu, FiUsers, FiBookOpen, FiPlay, FiFileText } from 'react-icons/fi'
import { useState, useEffect } from 'react'
import QRCode from '@/components/QRCode'
import Link from 'next/link'
import PresentationImage from '@/components/PresentationImage'
import VideoOverlay from '@/components/VideoOverlay'
import React from 'react'

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showQR, setShowQR] = useState(false)
  const [expandedSlide, setExpandedSlide] = useState<number | null>(null)
  const [showRealityImage, setShowRealityImage] = useState(false)
  const [isVerticalMode, setIsVerticalMode] = useState(false)
  const [showIntroVideo, setShowIntroVideo] = useState(true)
  const [presentationStarted, setPresentationStarted] = useState(false)

  useEffect(() => {
    // Handle URL parameters for slide navigation
    const params = new URLSearchParams(window.location.search)
    const slideParam = params.get('slide')
    if (slideParam) {
      const slideIndex = parseInt(slideParam)
      if (!isNaN(slideIndex) && slideIndex >= 0 && slideIndex < slides.length) {
        setCurrentSlide(slideIndex)
        setShowIntroVideo(false)
        setPresentationStarted(true)
      }
    }
  }, [])

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!presentationStarted) return // Disable keyboard navigation before presentation starts

      if (e.key === 'ArrowRight') {
        if (currentSlide === 1 && !showRealityImage) {
          setShowRealityImage(true)
        } else {
          setCurrentSlide(prev => Math.min(prev + 1, slides.length - 1))
        }
      } else if (e.key === 'ArrowLeft') {
        if (currentSlide === 1 && showRealityImage) {
          setShowRealityImage(false)
        } else {
          setCurrentSlide(prev => Math.max(prev - 1, 0))
        }
      } else if (e.key === 'f') {
        toggleFullscreen()
      } else if (e.key === 'q') {
        setShowQR(prev => !prev)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [currentSlide, showRealityImage, presentationStarted])

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  const startPresentation = () => {
    setShowIntroVideo(false)
    setPresentationStarted(true)
  }

  const slides = [
    {
      id: 1,
      content: (
        <motion.div 
          className="max-w-[90rem] mx-auto p-4 sm:p-6 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Opening Hook */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-center mb-8 sm:mb-12 md:mb-16 pt-8 sm:pt-12 md:pt-16"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="inline-block mb-4 sm:mb-6"
            >
              <div className="text-2xl sm:text-3xl bg-gradient-to-r from-blue-500 to-purple-600 p-3 sm:p-4 rounded-2xl">
                🌍 → 🚀
              </div>
            </motion.div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 md:mb-8 text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              Living Through a Revolution
            </h1>
            <p className="text-2xl sm:text-3xl md:text-4xl text-gray-300 font-light max-w-4xl mx-auto px-2 sm:px-4">
              We're experiencing a revolution like the Industrial Revolution and Computer Revolution.
            </p>
            <p className="text-2xl sm:text-3xl md:text-4xl text-pink-500 font-semibold mt-4 max-w-4xl mx-auto px-2 sm:px-4">
              And it's transforming our world in months, not decades.
            </p>
          </motion.div>

          {/* Historical Context */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 xl:gap-12 mb-8 sm:mb-12 md:mb-16 px-2 sm:px-4"
          >
            <div className="glass-card p-4 sm:p-6 md:p-8 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10">
              <div className="flex items-center mb-4">
                <div className="p-2 sm:p-3 bg-blue-500/20 rounded-xl">
                  <FiTrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white ml-4">Your Parents' World</h3>
              </div>
              <p className="text-base sm:text-lg md:text-xl text-gray-300">
                When your parents were your age, the internet was just starting. Social media didn't exist. AI was science fiction. The most advanced tech in school was a graphing calculator, or a computer in the computer lab.
              </p>
              <div className="mt-4 text-sm sm:text-base md:text-lg text-gray-400">
                The world changed completely in just 20 years.
              </div>
            </div>
            
            <div className="glass-card p-4 sm:p-6 md:p-8 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10">
              <div className="flex items-center mb-4">
                <div className="p-2 sm:p-3 bg-purple-500/20 rounded-xl">
                  <FiCpu className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white ml-4">Your Future World</h3>
              </div>
              <p className="text-base sm:text-lg md:text-xl text-gray-300">
                By the time you graduate, AI will be as common as smartphones are today. The jobs you'll do might not even exist yet. The skills that matter will be completely different.
              </p>
              <div className="mt-4 text-sm sm:text-base md:text-lg text-gray-400">
                What took your parents 20 years, you'll see happen in 2.
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
            className="text-center text-lg sm:text-xl md:text-2xl text-gray-300 px-2 sm:px-4"
          >
            <p className="mb-4">
              Your generation will be the first to grow up alongside AI.<br/>
              <span className="text-pink-500 font-semibold">You'll shape how it changes the world.</span>
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-400">
              The question isn't whether AI will transform everything.<br/>
              It's whether you'll be ready to lead that transformation.
            </p>
          </motion.div>
        </motion.div>
      ),
      details: {
        stats: "By 2030, 14% of global workforce may need career changes due to AI (WEF)",
        sectors: "High-risk sectors: Finance, IT, Legal (67% exposure)",
        link: "/asi-impact-society"
      }
    },
    {
      id: 2,
      content: (
        <motion.div 
          className="max-w-[90rem] mx-auto p-4 sm:p-6 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          key={showRealityImage ? 'reality' : 'view'}
        >
          <div className="text-center mb-4 sm:mb-6 md:mb-8 pt-8 sm:pt-12 md:pt-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              {showRealityImage ? "The Reality" : "Our View"}
            </h2>
            <div className="glass-card p-4 sm:p-6 rounded-xl mb-4 sm:mb-6 md:mb-8">
              <div className="text-lg sm:text-xl md:text-2xl text-gray-300">
                {showRealityImage ? (
                  <>
                    What seemed impossible in 2019 is now everyday reality.<br/>
                    <span className="text-pink-500 font-semibold">And each breakthrough is bigger than the last.</span>
                  </>
                ) : (
                  <>
                    "Look at its mistakes"<br/>
                    "A human would never make those errors"<br/>
                    <span className="text-pink-500 font-semibold">We focus on what makes us feel superior.</span>
                  </>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {/* Left Column - Intelligence Graph */}
              <div className="text-left">
                <AnimatePresence mode="wait" initial={false}>
                  {!showRealityImage && (
                    <motion.div
                      key="distorted"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="relative"
                    >
                      <PresentationImage
                        src="https://images-jacareerday.agw3.org/distorted_Intelligence.jpg"
                        alt="Graph showing our distorted view of AI intelligence over time"
                        width={600}
                        height={450}
                        priority
                        className="w-full h-auto"
                        caption="How we see AI: 'Haha that's adorable, the funny robot can do monkey tricks!'"
                      />
                    </motion.div>
                  )}
                  {showRealityImage && (
                    <motion.div
                      key="reality"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="relative"
                    >
                      <PresentationImage
                        src="https://images-jacareerday.agw3.org/Intelligence2.png"
                        alt="Graph showing the actual exponential growth of AI intelligence"
                        width={600}
                        height={450}
                        className="w-full h-auto"
                        caption="The Reality: AI's capabilities are growing exponentially"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Right Column - Examples */}
              <div className="text-left">
                <AnimatePresence mode="wait" initial={false}>
                  {!showRealityImage && (
                    <motion.div
                      key="simple-examples"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="space-y-4 relative"
                    >
                      <div className="glass-card p-4 rounded-xl">
                        <img 
                          src="https://images-jacareerday.agw3.org/shrek_simple.gif"
                          alt="Simple AI-generated Shrek"
                          className="w-full rounded-lg mb-2 max-h-[200px] sm:max-h-[250px] md:max-h-[340px] object-contain mx-auto"
                        />
                        <p className="text-gray-300 text-center text-sm sm:text-base">Early AI art: Basic style transfer</p>
                      </div>
                      <div className="glass-card p-4 rounded-xl">
                        <video 
                          autoPlay 
                          loop 
                          muted 
                          playsInline
                          className="w-full rounded-lg mb-2 max-h-[200px] sm:max-h-[250px] md:max-h-[340px] object-contain mx-auto"
                        >
                          <source src="https://images-jacareerday.agw3.org/will_smith_bad_spaghetti.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                        <p className="text-gray-300 text-center text-sm sm:text-base">Early AI video: Simple face swaps</p>
                      </div>
                    </motion.div>
                  )}
                  {showRealityImage && (
                    <motion.div
                      key="advanced-examples"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="space-y-4 relative"
                    >
                      <div className="glass-card p-4 rounded-xl">
                        <img 
                          src="https://images-jacareerday.agw3.org/shrek_knitted.gif"
                          alt="Advanced AI-generated Shrek"
                          className="w-full rounded-lg mb-2 max-h-[200px] sm:max-h-[250px] md:max-h-[340px] object-contain mx-auto"
                        />
                        <p className="text-gray-300 text-center text-sm sm:text-base">Modern AI art: Complex style synthesis</p>
                      </div>
                      <div className="glass-card p-4 rounded-xl">
                        <img 
                          src="https://images-jacareerday.agw3.org/shrek_fashion.gif"
                          alt="Advanced AI-generated fashion Shrek"
                          className="w-full rounded-lg mb-2 max-h-[200px] sm:max-h-[250px] md:max-h-[340px] object-contain mx-auto"
                        />
                        <p className="text-gray-300 text-center text-sm sm:text-base">Modern AI video: Seamless style adaptation</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
            {showRealityImage && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl sm:text-3xl md:text-4xl text-gray-300 font-light mt-6 sm:mt-8"
              >
                If we're this wrong about AI's progress today,<br/>
                <span className="text-blue-400 font-semibold">what are we missing about tomorrow?</span>
              </motion.div>
            )}
          </div>
        </motion.div>
      ),
      render: (props: { forceShowReality?: boolean }) => {
        const shouldShowReality = props.forceShowReality ?? showRealityImage;
        return (
          <motion.div 
            className="max-w-[90rem] mx-auto p-4 sm:p-6 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            key={shouldShowReality ? 'reality' : 'view'}
          >
            <div className="text-center mb-4 sm:mb-6 md:mb-8 pt-8 sm:pt-12 md:pt-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                {shouldShowReality ? "The Reality" : "Our View"}
              </h2>
              <div className="glass-card p-4 sm:p-6 rounded-xl mb-4 sm:mb-6 md:mb-8">
                <div className="text-lg sm:text-xl md:text-2xl text-gray-300">
                  {shouldShowReality ? (
                    <>
                      What seemed impossible in 2019 is now everyday reality.<br/>
                      <span className="text-pink-500 font-semibold">And each breakthrough is bigger than the last.</span>
                    </>
                  ) : (
                    <>
                      "Look at its mistakes"<br/>
                      "A human would never make those errors"<br/>
                      <span className="text-pink-500 font-semibold">We focus on what makes us feel superior.</span>
                    </>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                {/* Left Column - Intelligence Graph */}
                <div className="text-left">
                  <AnimatePresence mode="wait" initial={false}>
                    {!shouldShowReality && (
                      <motion.div
                        key="distorted"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                      >
                        <PresentationImage
                          src="https://images-jacareerday.agw3.org/distorted_Intelligence.jpg"
                          alt="Graph showing our distorted view of AI intelligence over time"
                          width={600}
                          height={450}
                          priority
                          className="w-full h-auto"
                          caption="How we see AI: 'Haha that's adorable, the funny robot can do monkey tricks!'"
                        />
                      </motion.div>
                    )}
                    {shouldShowReality && (
                      <motion.div
                        key="reality"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                      >
                        <PresentationImage
                          src="https://images-jacareerday.agw3.org/Intelligence2.png"
                          alt="Graph showing the actual exponential growth of AI intelligence"
                          width={600}
                          height={450}
                          className="w-full h-auto"
                          caption="The Reality: AI's capabilities are growing exponentially"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Right Column - Examples */}
                <div className="text-left">
                  <AnimatePresence mode="wait" initial={false}>
                    {!shouldShowReality && (
                      <motion.div
                        key="simple-examples"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4 relative"
                      >
                        <div className="glass-card p-4 rounded-xl">
                          <img 
                            src="https://images-jacareerday.agw3.org/shrek_simple.gif"
                            alt="Simple AI-generated Shrek"
                            className="w-full rounded-lg mb-2 max-h-[200px] sm:max-h-[250px] md:max-h-[340px] object-contain mx-auto"
                          />
                          <p className="text-gray-300 text-center text-sm sm:text-base">Early AI art: Basic style transfer</p>
                        </div>
                        <div className="glass-card p-4 rounded-xl">
                          <video 
                            autoPlay 
                            loop 
                            muted 
                            playsInline
                            className="w-full rounded-lg mb-2 max-h-[200px] sm:max-h-[250px] md:max-h-[340px] object-contain mx-auto"
                          >
                            <source src="https://images-jacareerday.agw3.org/will_smith_bad_spaghetti.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                          <p className="text-gray-300 text-center text-sm sm:text-base">Early AI video: Simple face swaps</p>
                        </div>
                      </motion.div>
                    )}
                    {shouldShowReality && (
                      <motion.div
                        key="advanced-examples"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4 relative"
                      >
                        <div className="glass-card p-4 rounded-xl">
                          <img 
                            src="https://images-jacareerday.agw3.org/shrek_knitted.gif"
                            alt="Advanced AI-generated Shrek"
                            className="w-full rounded-lg mb-2 max-h-[200px] sm:max-h-[250px] md:max-h-[340px] object-contain mx-auto"
                          />
                          <p className="text-gray-300 text-center text-sm sm:text-base">Modern AI art: Complex style synthesis</p>
                        </div>
                        <div className="glass-card p-4 rounded-xl">
                          <img 
                            src="https://images-jacareerday.agw3.org/shrek_fashion.gif"
                            alt="Advanced AI-generated fashion Shrek"
                            className="w-full rounded-lg mb-2 max-h-[200px] sm:max-h-[250px] md:max-h-[340px] object-contain mx-auto"
                          />
                          <p className="text-gray-300 text-center text-sm sm:text-base">Modern AI video: Seamless style adaptation</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              {shouldShowReality && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-2xl sm:text-3xl md:text-4xl text-gray-300 font-light mt-6 sm:mt-8"
                >
                  If we're this wrong about AI's progress today,<br/>
                  <span className="text-blue-400 font-semibold">what are we missing about tomorrow?</span>
                </motion.div>
              )}
            </div>
          </motion.div>
        )
      }
    },
    {
      id: 3,
      content: (
        <motion.div 
          className="max-w-[90rem] mx-auto p-4 sm:p-6 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="text-center mb-8 sm:mb-12 md:mb-16 pt-8 sm:pt-12 md:pt-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              The Speed of Progress
            </h2>
            <div className="max-w-6xl mx-auto glass-card p-4 sm:p-6 md:p-8 rounded-2xl mb-8 sm:mb-12">
              {/* AI Types Section */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
                <div className="text-left glass-card p-4 rounded-xl bg-blue-500/5">
                  <h4 className="text-xl sm:text-2xl font-bold text-blue-400 mb-2 sm:mb-4">ANI<br/>(Today)</h4>
                  <p className="text-sm sm:text-base text-gray-300">
                    <span className="font-semibold">Artificial Narrow Intelligence</span><br/>
                    Specialized AI that excels at specific tasks but can't transfer learning between domains. We've achieved this - it's what powers ChatGPT, image generation, and current AI tools.
                  </p>
                </div>
                <div className="text-left glass-card p-4 rounded-xl bg-purple-500/5">
                  <h4 className="text-xl sm:text-2xl font-bold text-purple-400 mb-2 sm:mb-4">AGI<br/>(Pursuing)</h4>
                  <p className="text-sm sm:text-base text-gray-300">
                    <span className="font-semibold">Artificial General Intelligence</span><br/>
                    AI that matches human-level intelligence across all domains. Can learn, reason, and adapt like humans. This is the current frontier of AI research.
                  </p>
                </div>
                <div className="text-left glass-card p-4 rounded-xl bg-pink-500/5">
                  <h4 className="text-xl sm:text-2xl font-bold text-pink-400 mb-2 sm:mb-4">ASI<br/>(Future)</h4>
                  <p className="text-sm sm:text-base text-gray-300">
                    <span className="font-semibold">Artificial Superintelligence</span><br/>
                    AI that surpasses human intelligence in every domain. Still theoretical, but represents the long-term potential of AI development.
                  </p>
                </div>
              </div>

              {/* Progress Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
                <div className="text-left">
                  <h4 className="text-xl sm:text-2xl font-bold text-pink-500 mb-2 sm:mb-4">2022</h4>
                  <ul className="text-base sm:text-lg md:text-xl text-gray-300 space-y-2 sm:space-y-4">
                    <li>• Basic chatbots</li>
                    <li>• Simple image recognition</li>
                    <li>• Rule-based automation</li>
                    <li>• Limited language processing</li>
                  </ul>
                </div>
                <div className="text-left">
                  <h4 className="text-xl sm:text-2xl font-bold text-blue-400 mb-2 sm:mb-4">2025</h4>
                  <ul className="text-base sm:text-lg md:text-xl text-gray-300 space-y-2 sm:space-y-4">
                    <li>• Advanced ANI systems</li>
                    <li>• Early AGI research breakthroughs</li>
                    <li>• Multi-domain learning</li>
                    <li>• Complex reasoning tasks</li>
                  </ul>
                </div>
              </div>

              <div className="text-xl sm:text-2xl md:text-3xl text-gray-300 mt-6 sm:mt-8 mb-6 sm:mb-8 py-3 sm:py-4 border-y border-white/20 bg-gradient-to-r from-transparent via-white/5 to-transparent">
                <span className="font-semibold text-blue-400">The impact</span> is already here:
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                <div className="text-left">
                  <h4 className="text-lg sm:text-xl font-bold text-blue-400 mb-2 sm:mb-4">Healthcare & Finance</h4>
                  <ul className="text-base sm:text-lg md:text-xl text-gray-300 space-y-2 sm:space-y-4">
                    <li>• AI matches expert diagnosis accuracy</li>
                    <li>• 60-73% of US trading is AI-driven</li>
                    <li>• $150B healthcare savings by 2025</li>
                  </ul>
                </div>
                <div className="text-left">
                  <h4 className="text-lg sm:text-xl font-bold text-pink-400 mb-2 sm:mb-4">Legal & Education</h4>
                  <ul className="text-base sm:text-lg md:text-xl text-gray-300 space-y-2 sm:space-y-4">
                    <li>• Contract review 60x faster</li>
                    <li>• 30% better student outcomes</li>
                    <li>• 85% faster research analysis</li>
                  </ul>
                </div>
              </div>

              <div className="text-xl sm:text-2xl md:text-3xl text-gray-300 mt-6 sm:mt-8">
                We've mastered ANI, but that's just the beginning.<br/>
                <span className="text-pink-500 font-semibold">The race to AGI will define the next decade.</span>
              </div>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              <div className="glass-card p-4 sm:p-6 rounded-xl hover:bg-white/5 transition-colors">
                <Link href="/asi-impact-society#impact" className="block">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Impact on Society →</h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-300">
                    Explore how AI is fundamentally reshaping industries, jobs, and daily life. From healthcare to finance, see the full scope of the transformation.
                  </p>
                </Link>
              </div>
              <div className="glass-card p-4 sm:p-6 rounded-xl hover:bg-white/5 transition-colors">
                <Link href="/future-of-work#opportunities" className="block">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Future of Work →</h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-300">
                    Discover what jobs will look like in an AI-powered world, which skills will matter most, and how to prepare for the changes ahead.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )
    },
    {
      id: 4,
      content: (
        <motion.div 
          className="max-w-[90rem] mx-auto p-4 sm:p-6 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="text-center mb-8 sm:mb-12 md:mb-16 pt-8 sm:pt-12 md:pt-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              See It In Action
            </h2>
            <div className="max-w-6xl mx-auto glass-card p-4 sm:p-6 md:p-8 rounded-2xl mb-8 sm:mb-12">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                "What used to take days now takes seconds"
              </h3>
              <div className="grid grid-cols-1 gap-4 sm:gap-6 text-left">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <FiCpu className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                  </div>
                  <span className="text-lg sm:text-xl md:text-2xl text-gray-300">AI can build entire websites from a description</span>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <FiUsers className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                  </div>
                  <span className="text-lg sm:text-xl md:text-2xl text-gray-300">Generate and edit images with natural language</span>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="p-2 bg-pink-500/20 rounded-lg">
                    <FiZap className="w-5 h-5 sm:w-6 sm:h-6 text-pink-400" />
                  </div>
                  <span className="text-lg sm:text-xl md:text-2xl text-gray-300">Write and debug code automatically</span>
                </div>
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl text-gray-300 mt-6 sm:mt-8">
                But here's the key question:<br/>
                <span className="text-pink-500 font-semibold">If AI can do all this, what role will humans play?</span>
              </div>
            </div>
          </div>
        </motion.div>
      )
    },
    {
      id: 5,
      content: (
        <motion.div 
          className="max-w-[90rem] mx-auto p-4 sm:p-6 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="text-center mb-8 sm:mb-12 md:mb-16 pt-8 sm:pt-12 md:pt-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              The Risk of Outsourcing Learning
            </h2>
            <div className="glass-card p-4 sm:p-6 md:p-8 rounded-2xl mb-8 sm:mb-12">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                "If I can use AI to write essays or solve problems,<br/>why do I need to hire you?"
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8">
                <div className="text-left">
                  <h4 className="text-xl sm:text-2xl font-bold text-pink-500 mb-2 sm:mb-4">What AI Can Do</h4>
                  <ul className="text-base sm:text-lg md:text-xl text-gray-300 space-y-2 sm:space-y-4">
                    <li>• Write essays & code</li>
                    <li>• Analyze data & patterns</li>
                    <li>• Generate content</li>
                    <li>• Basic reasoning tasks</li>
                  </ul>
                </div>
                <div className="text-left">
                  <h4 className="text-xl sm:text-2xl font-bold text-blue-400 mb-2 sm:mb-4">What Humans Do Better</h4>
                  <ul className="text-base sm:text-lg md:text-xl text-gray-300 space-y-2 sm:space-y-4">
                    <li>• Physical world interaction</li>
                    <li>• Novel problem solving</li>
                    <li>• Emotional intelligence</li>
                    <li>• Common sense reasoning</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-300">
                <span className="text-pink-500 font-semibold">Key Point:</span> AI excels at processing information, but struggles with the physical world, emotional understanding, and truly novel situations that require common sense or real-world context.
              </div>
              <div className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-gray-300">
                Want to learn how to leverage AI while developing crucial human skills?<br/>
                <span className="text-blue-400">Get practical advice and strategies for high school students →</span>
              </div>
              <Link 
                href="/high-schooler-advice" 
                className="mt-4 inline-block bg-white/10 hover:bg-white/20 px-6 sm:px-8 py-2 sm:py-3 rounded-xl text-base sm:text-lg md:text-xl text-white transition-colors"
              >
                Learn More →
              </Link>
            </div>
            <div className="text-xl sm:text-2xl md:text-3xl text-gray-300">
              Use AI to learn faster, but <span className="text-pink-500 font-semibold">don't skip the hard work</span>.<br/>
              The people who succeed will know how to work <span className="text-blue-400 font-semibold">with AI</span>, not just rely on it.
            </div>
          </div>
        </motion.div>
      )
    },
    {
      id: 6,
      content: (
        <motion.div 
          className="max-w-[90rem] mx-auto p-4 sm:p-6 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="text-center mb-8 sm:mb-12 md:mb-16 pt-8 sm:pt-12 md:pt-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              Your Role in the Revolution
            </h2>
            
            {/* Impact Overview */}
            <div className="max-w-6xl mx-auto glass-card p-4 sm:p-6 md:p-8 rounded-2xl mb-8 sm:mb-12">
              <div className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8 sm:mb-12">
                By 2030, work tasks will be nearly evenly divided between<br/>
                <span className="text-blue-400 font-semibold">humans, machines, and hybrid approaches</span>
              </div>

              {/* Job Impact Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left mb-8">
                <div className="glass-card p-6 rounded-xl backdrop-blur-lg bg-white/5">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-pink-500/20 rounded-lg">
                      <FiTrendingUp className="w-6 h-6 text-pink-400" />
                    </div>
                    <h4 className="text-xl font-bold text-white ml-3">Most Impacted Roles</h4>
                  </div>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Software & IT (95% overlap with AI)</li>
                    <li>• Legal & Accounting</li>
                    <li>• Data Analysis & Research</li>
                    <li>• Content Creation & Marketing</li>
                  </ul>
                </div>

                <div className="glass-card p-6 rounded-xl backdrop-blur-lg bg-white/5">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-blue-500/20 rounded-lg">
                      <FiUsers className="w-6 h-6 text-blue-400" />
                    </div>
                    <h4 className="text-xl font-bold text-white ml-3">Growth Areas</h4>
                  </div>
                  <ul className="text-gray-300 space-y-2">
                    <li>• AI-Human Collaboration Roles</li>
                    <li>• AI Ethics & Governance</li>
                    <li>• Healthcare AI Integration</li>
                    <li>• 4,200+ New AI Positions</li>
                  </ul>
                </div>
              </div>

              {/* Key Skills */}
              <div className="text-2xl sm:text-3xl font-bold text-white mb-6 py-3 border-y border-white/20 bg-gradient-to-r from-transparent via-white/5 to-transparent">
                Skills That Will Matter Most
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <FiCpu className="w-5 h-5 text-blue-400" />
                  </div>
                  <span className="text-lg text-gray-300">AI Literacy & Collaboration</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <FiUsers className="w-5 h-5 text-purple-400" />
                  </div>
                  <span className="text-lg text-gray-300">Complex Problem Solving</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-pink-500/20 rounded-lg">
                    <FiZap className="w-5 h-5 text-pink-400" />
                  </div>
                  <span className="text-lg text-gray-300">Ethical Decision Making</span>
                </div>
              </div>

              {/* Call to Action */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                <Link 
                  href="/future-of-work" 
                  className="inline-block bg-white/10 hover:bg-white/20 px-6 py-3 rounded-xl text-white transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <FiBriefcase className="w-5 h-5" />
                    <span>Explore Career Paths →</span>
                  </div>
                </Link>
                <Link 
                  href="/high-schooler-advice" 
                  className="inline-block bg-white/10 hover:bg-white/20 px-6 py-3 rounded-xl text-white transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <FiBookOpen className="w-5 h-5" />
                    <span>Get Started Guide →</span>
                  </div>
                </Link>
              </div>
            </div>

            <div className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-bold">
              77% of employers are prioritizing AI skills.<br/>
              <span className="text-pink-500">Will you be ready?</span>
            </div>
          </div>
        </motion.div>
      )
    },
    {
      id: 7,
      content: (
        <motion.div 
          className="max-w-[90rem] mx-auto p-4 sm:p-6 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="text-center mb-8 sm:mb-12 md:mb-16 pt-8 sm:pt-12 md:pt-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              Explore Further
            </h2>
            
            {/* Featured Resources */}
            <div className="max-w-6xl mx-auto glass-card p-4 sm:p-6 md:p-8 rounded-2xl mb-8 sm:mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">Featured Resources</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <a 
                  href="https://www.youtube.com/watch?v=7xTGNNLPyMI" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block glass-card p-4 rounded-xl hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-red-500/20 rounded-lg">
                      <FiPlay className="w-5 h-5 text-red-400" />
                    </div>
                    <div className="text-lg font-semibold text-blue-400">Introduction to AI Technology</div>
                  </div>
                  <p className="text-sm text-gray-300">
                    A comprehensive introduction by Andrej Karpathy, perfect for understanding AI fundamentals.
                  </p>
                </a>
                <a 
                  href="https://blogs.worldbank.org/en/education/From-chalkboards-to-chatbots-Transforming-learning-in-Nigeria" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block glass-card p-4 rounded-xl hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-green-500/20 rounded-lg">
                      <FiFileText className="w-5 h-5 text-green-400" />
                    </div>
                    <div className="text-lg font-semibold text-blue-400">Latest Research</div>
                  </div>
                  <p className="text-sm text-gray-300">
                    World Bank's groundbreaking study (2025) shows how AI tutoring helped Nigerian students achieve two years' worth of learning in just six weeks.
                  </p>
                </a>
              </div>
            </div>

            {/* Main Topics */}
            <div className="max-w-6xl mx-auto glass-card p-4 sm:p-6 md:p-8 rounded-2xl mb-8 sm:mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">Deep Dive Guides</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                <Link href="/asi-impact-society" className="block">
                  <div className="glass-card p-4 rounded-xl hover:bg-white/5 transition-colors h-full">
                    <div className="p-2 bg-blue-500/20 rounded-lg w-fit mb-3">
                      <FiCpu className="w-6 h-6 text-blue-400" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">AI & Society</h4>
                    <p className="text-sm text-gray-300">
                      Evolution from ANI to ASI and its transformative impact on society.
                    </p>
                  </div>
                </Link>
                <Link href="/future-of-work" className="block">
                  <div className="glass-card p-4 rounded-xl hover:bg-white/5 transition-colors h-full">
                    <div className="p-2 bg-purple-500/20 rounded-lg w-fit mb-3">
                      <FiBriefcase className="w-6 h-6 text-purple-400" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">Future of Work</h4>
                    <p className="text-sm text-gray-300">
                      How AI is reshaping careers and what skills will matter most.
                    </p>
                  </div>
                </Link>
                <Link href="/high-schooler-advice" className="block">
                  <div className="glass-card p-4 rounded-xl hover:bg-white/5 transition-colors h-full">
                    <div className="p-2 bg-pink-500/20 rounded-lg w-fit mb-3">
                      <FiBookOpen className="w-6 h-6 text-pink-400" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">Student Guide</h4>
                    <p className="text-sm text-gray-300">
                      Practical strategies for preparing for an AI-powered future.
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Resource Hub Link */}
            <div className="max-w-6xl mx-auto glass-card p-4 sm:p-6 md:p-8 rounded-2xl">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Want to Learn More?
              </h3>
              <p className="text-lg text-gray-300 mb-6">
                Visit our comprehensive resource hub for research papers, case studies, and learning materials.
              </p>
              <Link 
                href="/resources" 
                className="inline-block bg-white/10 hover:bg-white/20 px-8 py-3 rounded-xl text-white text-lg transition-colors"
              >
                Explore All Resources →
              </Link>
              <p className="mt-6 text-sm text-gray-400">
                Last updated: March 29th, 2025
              </p>
            </div>
          </div>
        </motion.div>
      )
    }
  ]

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <VideoOverlay 
        isVisible={showIntroVideo}
        onStartPresentation={startPresentation}
      />
      
      {/* Only show presentation content after video is dismissed */}
      {presentationStarted && (
        <>
          {/* Background Layer */}
          <div className="fixed inset-0 z-0">
            <DynamicBackground />
          </div>
          
          {/* View Mode Toggle */}
          <div className="fixed top-4 right-4 z-50 flex gap-2">
            <button
              onClick={() => {
                setShowIntroVideo(true)
                setPresentationStarted(false)
              }}
              className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl text-white backdrop-blur-sm transition-colors flex items-center gap-2"
            >
              <FiPlay className="w-4 h-4" />
              Watch Video
            </button>
            <button
              onClick={() => setIsVerticalMode(prev => !prev)}
              className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl text-white backdrop-blur-sm transition-colors"
            >
              {isVerticalMode ? "Switch to Slides" : "View All"}
            </button>
          </div>
          
          {/* Content Layer */}
          <div className="relative z-10 min-h-screen overflow-y-auto">
            {isVerticalMode ? (
              // Vertical Mode
              <div className="pb-32">
                {slides.map((slide, index) => (
                  <div 
                    key={slide.id}
                    className="border-b border-white/10 last:border-b-0"
                  >
                    {slide.render ? slide.render({}) : slide.content}
                    {/* Show reality image version for slide 2 */}
                    {index === 1 && slide.render && (
                      <div className="border-t border-white/10 pt-8">
                        <h3 className="text-2xl text-center mb-8 text-white">Alternative View</h3>
                        {slide.render({ forceShowReality: true })}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              // Slide Mode
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="relative pb-32"
                >
                  {slides[currentSlide].render 
                    ? slides[currentSlide].render({}) 
                    : slides[currentSlide].content}
                </motion.div>
              </AnimatePresence>
            )}
          </div>

          {/* Controls Layer - Only show in slide mode */}
          {!isVerticalMode && (
            <div className="fixed bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 sm:gap-4 z-50 bg-black/20 backdrop-blur-sm p-2 rounded-full">
              <button 
                onClick={() => {
                  if (currentSlide === 1 && showRealityImage) {
                    setShowRealityImage(false)
                  } else {
                    currentSlide > 0 && setCurrentSlide(prev => prev - 1)
                  }
                }}
                className={`p-2 sm:p-3 rounded-full transition-all duration-200 ${
                  currentSlide === 0 
                    ? 'bg-white/5 cursor-not-allowed' 
                    : 'bg-white/10 hover:bg-white/20'
                }`}
                disabled={currentSlide === 0}
                aria-label="Previous slide"
              >
                <FiChevronLeft className={`w-4 h-4 sm:w-6 sm:h-6 ${currentSlide === 0 ? 'text-white/50' : 'text-white'}`} />
              </button>
              <button 
                onClick={() => {
                  if (currentSlide === 1 && !showRealityImage) {
                    setShowRealityImage(true)
                  } else {
                    currentSlide < slides.length - 1 && setCurrentSlide(prev => prev + 1)
                  }
                }}
                className={`p-2 sm:p-3 rounded-full transition-all duration-200 ${
                  currentSlide === slides.length - 1 
                    ? 'bg-white/5 cursor-not-allowed' 
                    : 'bg-white/10 hover:bg-white/20'
                }`}
                disabled={currentSlide === slides.length - 1}
                aria-label="Next slide"
              >
                <FiChevronRight className={`w-4 h-4 sm:w-6 sm:h-6 ${currentSlide === slides.length - 1 ? 'text-white/50' : 'text-white'}`} />
              </button>
              <button 
                onClick={toggleFullscreen}
                className="p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                {isFullscreen ? <FiMinimize className="w-4 h-4 sm:w-6 sm:h-6 text-white" /> : <FiMaximize className="w-4 h-4 sm:w-6 sm:h-6 text-white" />}
              </button>
              <button 
                onClick={() => setShowQR(prev => !prev)}
                className="p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <FiShare2 className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </button>
            </div>
          )}

          {/* Navigation Dots - Only show in slide mode */}
          {!isVerticalMode && (
            <div className="fixed bottom-20 sm:bottom-24 left-1/2 transform -translate-x-1/2 z-50 bg-black/20 backdrop-blur-sm px-3 py-2 rounded-full">
              <div className="flex gap-1 sm:gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-white' : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* QR Code Layer */}
          <AnimatePresence>
            {showQR && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="fixed bottom-32 sm:bottom-40 right-4 sm:right-8 z-50 bg-white p-4 rounded-xl shadow-2xl"
              >
                <QRCode url={typeof window !== 'undefined' ? window.location.href : ''} size={200} />
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  )
} 