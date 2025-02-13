'use client'

import DynamicBackground from '@/components/DynamicBackground'
import { motion, AnimatePresence } from 'framer-motion'
import { FiZap, FiTrendingUp, FiBriefcase, FiChevronLeft, FiChevronRight, FiMaximize, FiMinimize, FiShare2, FiCpu, FiUsers, FiBookOpen } from 'react-icons/fi'
import { useState, useEffect } from 'react'
import QRCode from '@/components/QRCode'
import Link from 'next/link'
import PresentationImage from '@/components/PresentationImage'

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showQR, setShowQR] = useState(false)
  const [expandedSlide, setExpandedSlide] = useState<number | null>(null)
  const [showRealityImage, setShowRealityImage] = useState(false)

  useEffect(() => {
    // Handle URL parameters for slide navigation
    const params = new URLSearchParams(window.location.search)
    const slideParam = params.get('slide')
    if (slideParam) {
      const slideIndex = parseInt(slideParam)
      if (!isNaN(slideIndex) && slideIndex >= 0 && slideIndex < slides.length) {
        setCurrentSlide(slideIndex)
      }
    }
  }, [])

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
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
  }, [currentSlide, showRealityImage])

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  const slides = [
    {
      id: 1,
      content: (
        <motion.div 
          className="max-w-7xl mx-auto p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Opening Hook */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-center mb-16 pt-16"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="inline-block mb-6"
            >
              <div className="text-3xl bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-2xl">
                🌍 → 🚀
              </div>
            </motion.div>
            <h1 className="text-7xl font-bold mb-8 text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              Living Through a Revolution
            </h1>
            <p className="text-4xl text-gray-300 font-light max-w-4xl mx-auto">
              We're experiencing a revolution like the Industrial Revolution and Computer Revolution before it.
            </p>
            <p className="text-4xl text-pink-500 font-semibold mt-4 max-w-4xl mx-auto">
              And it's transforming our world in months, not decades.
            </p>
          </motion.div>

          {/* Historical Context */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            <div className="glass-card p-8 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-500/20 rounded-xl">
                  <FiTrendingUp className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white ml-4">Your Parents' World</h3>
              </div>
              <p className="text-xl text-gray-300">
                When your parents were your age, the internet was just starting. Social media didn't exist. AI was science fiction. The most advanced tech in school was a calculator.
              </p>
              <div className="mt-4 text-lg text-gray-400">
                The world changed completely in just 20 years.
              </div>
            </div>
            
            <div className="glass-card p-8 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-purple-500/20 rounded-xl">
                  <FiCpu className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white ml-4">Your Future World</h3>
              </div>
              <p className="text-xl text-gray-300">
                By the time you graduate, AI will be as common as smartphones are today. The jobs you'll do might not even exist yet. The skills that matter will be completely different.
              </p>
              <div className="mt-4 text-lg text-gray-400">
                What took your parents 20 years, you'll see happen in 2.
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
            className="text-center text-2xl text-gray-300"
          >
            <p className="mb-4">
              Your generation will be the first to grow up alongside AI.<br/>
              <span className="text-pink-500 font-semibold">You'll shape how it changes the world.</span>
            </p>
            <p className="text-xl text-gray-400">
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
          className="max-w-7xl mx-auto p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="text-center mb-8 pt-16">
            <h2 className="text-6xl font-bold mb-4 text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              {showRealityImage ? "The Reality" : "Our View"}
            </h2>
            <div className="glass-card p-6 rounded-xl mb-8">
              <div className="text-2xl text-gray-300">
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
            <div className="grid grid-cols-2 gap-8">
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
                          className="w-full rounded-lg mb-2 max-h-[340px] object-contain"
                        />
                        <p className="text-gray-300 text-center">Early AI art: Basic style transfer</p>
                      </div>
                      <div className="glass-card p-4 rounded-xl">
                        <video 
                          autoPlay 
                          loop 
                          muted 
                          playsInline
                          className="w-full rounded-lg mb-2 max-h-[340px] object-contain"
                        >
                          <source src="https://images-jacareerday.agw3.org/will_smith_bad_spaghetti.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                        <p className="text-gray-300 text-center">Early AI video: Simple face swaps</p>
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
                          className="w-full rounded-lg mb-2 max-h-[340px] object-contain"
                        />
                        <p className="text-gray-300 text-center">Modern AI art: Complex style synthesis</p>
                      </div>
                      <div className="glass-card p-4 rounded-xl">
                        <img 
                          src="https://images-jacareerday.agw3.org/shrek_fashion.gif"
                          alt="Advanced AI-generated fashion Shrek"
                          className="w-full rounded-lg mb-2 max-h-[340px] object-contain"
                        />
                        <p className="text-gray-300 text-center">Modern AI video: Seamless style adaptation</p>
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
                className="text-4xl text-gray-300 font-light mt-8"
              >
                If we're this wrong about AI's progress today,<br/>
                <span className="text-blue-400 font-semibold">what are we missing about tomorrow?</span>
              </motion.div>
            )}
          </div>
        </motion.div>
      )
    },
    {
      id: 3,
      content: (
        <motion.div 
          className="max-w-7xl mx-auto p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="text-center mb-16 pt-16">
            <h2 className="text-6xl font-bold mb-8 text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              The Speed of Progress
            </h2>
            <div className="max-w-4xl mx-auto glass-card p-8 rounded-2xl mb-12">
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div className="text-left">
                  <h4 className="text-2xl font-bold text-pink-500 mb-4">2019</h4>
                  <ul className="text-xl text-gray-300 space-y-4">
                    <li>• Basic chatbots</li>
                    <li>• Simple image recognition</li>
                    <li>• Rule-based automation</li>
                    <li>• Limited language processing</li>
                  </ul>
                </div>
                <div className="text-left">
                  <h4 className="text-2xl font-bold text-blue-400 mb-4">2025</h4>
                  <ul className="text-xl text-gray-300 space-y-4">
                    <li>• Human-level conversations</li>
                    <li>• Creating art and music</li>
                    <li>• Writing code and essays</li>
                    <li>• Understanding context</li>
                  </ul>
                </div>
              </div>
              <div className="text-3xl text-gray-300 mt-8 mb-8 py-4 border-y border-white/20 bg-gradient-to-r from-transparent via-white/5 to-transparent">
                <span className="font-semibold text-blue-400">The impact</span> is already here:
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-left">
                  <h4 className="text-xl font-bold text-blue-400 mb-4">Healthcare & Finance</h4>
                  <ul className="text-xl text-gray-300 space-y-4">
                    <li>• AI matches expert diagnosis accuracy</li>
                    <li>• 60-73% of US trading is AI-driven</li>
                    <li>• $150B healthcare savings by 2025</li>
                  </ul>
                </div>
                <div className="text-left">
                  <h4 className="text-xl font-bold text-pink-400 mb-4">Legal & Education</h4>
                  <ul className="text-xl text-gray-300 space-y-4">
                    <li>• Contract review 60x faster</li>
                    <li>• 30% better student outcomes</li>
                    <li>• 85% faster research analysis</li>
                  </ul>
                </div>
              </div>
              <div className="text-3xl text-gray-300 mt-8">
                This isn't decades of progress.<br/>
                <span className="text-pink-500 font-semibold">This is just 5 years.</span>
              </div>
            </div>
            <div className="max-w-4xl mx-auto grid grid-cols-2 gap-8">
              <div className="glass-card p-6 rounded-xl hover:bg-white/5 transition-colors">
                <Link href="/asi-impact-society#impact" className="block">
                  <h3 className="text-2xl font-bold text-white mb-2">Impact on Society →</h3>
                  <p className="text-gray-300">
                    Explore how AI is fundamentally reshaping industries, jobs, and daily life. From healthcare to finance, see the full scope of the transformation.
                  </p>
                </Link>
              </div>
              <div className="glass-card p-6 rounded-xl hover:bg-white/5 transition-colors">
                <Link href="/future-of-work#opportunities" className="block">
                  <h3 className="text-2xl font-bold text-white mb-2">Future of Work →</h3>
                  <p className="text-gray-300">
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
          className="max-w-7xl mx-auto p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="text-center mb-16 pt-16">
            <h2 className="text-6xl font-bold mb-8 text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              See It In Action
            </h2>
            <div className="max-w-4xl mx-auto glass-card p-8 rounded-2xl mb-12">
              <h3 className="text-4xl font-bold text-white mb-6">
                "What used to take days now takes seconds"
              </h3>
              <div className="grid grid-cols-1 gap-6 text-left">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <FiCpu className="w-6 h-6 text-blue-400" />
                  </div>
                  <span className="text-2xl text-gray-300">AI can build entire websites from a description</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <FiUsers className="w-6 h-6 text-purple-400" />
                  </div>
                  <span className="text-2xl text-gray-300">Generate and edit images with natural language</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-pink-500/20 rounded-lg">
                    <FiZap className="w-6 h-6 text-pink-400" />
                  </div>
                  <span className="text-2xl text-gray-300">Write and debug code automatically</span>
                </div>
              </div>
              <div className="text-3xl text-gray-300 mt-8">
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
          className="max-w-7xl mx-auto p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="text-center mb-16 pt-16">
            <h2 className="text-6xl font-bold mb-8 text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              The Risk of Outsourcing Learning
            </h2>
            <div className="glass-card p-8 rounded-2xl mb-12">
              <h3 className="text-4xl font-bold text-white mb-6">
                "If I can use AI to write essays or solve problems,<br/>why do I need to hire you?"
              </h3>
              <div className="grid grid-cols-2 gap-8 mt-8">
                <div className="text-left">
                  <h4 className="text-2xl font-bold text-pink-500 mb-4">What AI Can Do</h4>
                  <ul className="text-xl text-gray-300 space-y-4">
                    <li>• Write essays & code</li>
                    <li>• Analyze data & patterns</li>
                    <li>• Generate content</li>
                    <li>• Basic reasoning tasks</li>
                  </ul>
                </div>
                <div className="text-left">
                  <h4 className="text-2xl font-bold text-blue-400 mb-4">What Humans Do Better</h4>
                  <ul className="text-xl text-gray-300 space-y-4">
                    <li>• Physical world interaction</li>
                    <li>• Novel problem solving</li>
                    <li>• Emotional intelligence</li>
                    <li>• Common sense reasoning</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 text-xl text-gray-300">
                <span className="text-pink-500 font-semibold">Key Point:</span> AI excels at processing information, but struggles with the physical world, emotional understanding, and truly novel situations that require common sense or real-world context.
              </div>
              <div className="mt-8 text-xl text-gray-300">
                Want to learn how to leverage AI while developing crucial human skills?<br/>
                <span className="text-blue-400">Get practical advice and strategies for high school students →</span>
              </div>
              <Link 
                href="/high-schooler-advice" 
                className="mt-4 inline-block bg-white/10 hover:bg-white/20 px-8 py-3 rounded-xl text-xl text-white transition-colors"
              >
                Learn More →
              </Link>
            </div>
            <div className="text-3xl text-gray-300">
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
          className="max-w-7xl mx-auto p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="text-center mb-16 pt-16">
            <h2 className="text-6xl font-bold mb-8 text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              Your Role in the Revolution
            </h2>
            <div className="max-w-4xl mx-auto glass-card p-8 rounded-2xl mb-12">
              <div className="text-3xl text-gray-300 mb-8">
                Think about how fast AI has grown.<br/>
                What will it look like when you graduate?
              </div>
              <div className="text-4xl font-bold text-white mb-8">
                What role will you play in shaping it?
              </div>
              <div className="grid grid-cols-1 gap-6 text-left">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <FiCpu className="w-6 h-6 text-blue-400" />
                  </div>
                  <span className="text-2xl text-gray-300">Learn to work alongside AI, not compete with it</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <FiUsers className="w-6 h-6 text-purple-400" />
                  </div>
                  <span className="text-2xl text-gray-300">Focus on developing uniquely human skills</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-pink-500/20 rounded-lg">
                    <FiZap className="w-6 h-6 text-pink-400" />
                  </div>
                  <span className="text-2xl text-gray-300">Be part of shaping how AI transforms work</span>
                </div>
              </div>
            </div>
            <div className="text-3xl text-gray-300 font-bold">
              This revolution is happening.<br/>
              <span className="text-pink-500">What will you create?</span>
            </div>
          </div>
        </motion.div>
      )
    }
  ]

  return (
    <div className="presentation-container">
      {/* Background Layer */}
      <div className="fixed inset-0">
        <DynamicBackground />
      </div>
      
      {/* Content Layer */}
      <div className="content-wrapper relative min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            {slides[currentSlide].content}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls Layer */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4 z-50">
        <button 
          onClick={() => {
            if (currentSlide === 1 && showRealityImage) {
              setShowRealityImage(false)
            } else {
              currentSlide > 0 && setCurrentSlide(prev => prev - 1)
            }
          }}
          className={`p-3 rounded-full transition-all duration-200 ${
            currentSlide === 0 
              ? 'bg-white/5 cursor-not-allowed' 
              : 'bg-white/10 hover:bg-white/20'
          }`}
          disabled={currentSlide === 0}
          aria-label="Previous slide"
        >
          <FiChevronLeft className={`w-6 h-6 ${currentSlide === 0 ? 'text-white/50' : 'text-white'}`} />
        </button>
        <button 
          onClick={() => {
            if (currentSlide === 1 && !showRealityImage) {
              setShowRealityImage(true)
            } else {
              currentSlide < slides.length - 1 && setCurrentSlide(prev => prev + 1)
            }
          }}
          className={`p-3 rounded-full transition-all duration-200 ${
            currentSlide === slides.length - 1 
              ? 'bg-white/5 cursor-not-allowed' 
              : 'bg-white/10 hover:bg-white/20'
          }`}
          disabled={currentSlide === slides.length - 1}
          aria-label="Next slide"
        >
          <FiChevronRight className={`w-6 h-6 ${currentSlide === slides.length - 1 ? 'text-white/50' : 'text-white'}`} />
        </button>
        <button 
          onClick={toggleFullscreen}
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          {isFullscreen ? <FiMinimize className="w-6 h-6 text-white" /> : <FiMaximize className="w-6 h-6 text-white" />}
        </button>
        <button 
          onClick={() => setShowQR(prev => !prev)}
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          <FiShare2 className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* QR Code Layer */}
      <AnimatePresence>
        {showQR && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="qr-container"
          >
            <QRCode url={typeof window !== 'undefined' ? window.location.href : ''} size={200} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="fixed bottom-24 left-1/2 transform -translate-x-1/2">
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
} 