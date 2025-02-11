'use client'

import DynamicBackground from '@/components/DynamicBackground'
import { motion, AnimatePresence } from 'framer-motion'
import { FiZap, FiTrendingUp, FiBriefcase, FiChevronLeft, FiChevronRight, FiMaximize, FiMinimize, FiShare2, FiCpu, FiUsers, FiBookOpen } from 'react-icons/fi'
import { useState, useEffect } from 'react'
import QRCode from '@/components/QRCode'
import Link from 'next/link'

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showQR, setShowQR] = useState(false)
  const [expandedSlide, setExpandedSlide] = useState<number | null>(null)

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        setCurrentSlide(prev => Math.min(prev + 1, slides.length - 1))
      } else if (e.key === 'ArrowLeft') {
        setCurrentSlide(prev => Math.max(prev - 1, 0))
      } else if (e.key === 'f') {
        toggleFullscreen()
      } else if (e.key === 'q') {
        setShowQR(prev => !prev)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

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
              We're experiencing a revolution like the Industrial Revolution and Computer Revolution before it. <span className="text-pink-500 font-semibold">But this one is happening much faster.</span>
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
                <h3 className="text-2xl font-bold text-white ml-4">Industrial Revolution</h3>
              </div>
              <p className="text-xl text-gray-300">Master weavers and blacksmiths lost their jobs to machines. Those who adapted thrived, those who didn't were left behind.</p>
            </div>
            
            <div className="glass-card p-8 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-purple-500/20 rounded-xl">
                  <FiCpu className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white ml-4">Computer Revolution</h3>
              </div>
              <p className="text-xl text-gray-300">Typists and switchboard operators disappeared. Again, adaptation was key to success.</p>
            </div>
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
          <div className="text-center mb-16 pt-16">
            <h2 className="text-6xl font-bold mb-8 text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              AI's Rapid Progress
            </h2>
            <div className="max-w-4xl mx-auto glass-card p-8 rounded-2xl mb-8">
              <div className="text-3xl text-gray-300 mb-8">
                In 2019, AI couldn't write essays or create art.<br/>
                By 2023, tools like ChatGPT and DALL·E were mainstream.
              </div>
              <div className="text-2xl text-gray-300">
                Now, AI can build websites, diagnose diseases, and compose music.<br/>
                <span className="text-pink-500 font-semibold">This isn't decades — it's happening in just a few years.</span>
              </div>
            </div>
            <div className="text-4xl text-gray-300 font-light mt-12">
              If AI is growing this fast, how will the world of work look when you graduate?<br/>
              <span className="text-blue-400 font-semibold">What skills will matter?</span>
            </div>
          </div>
          {/* Add Learn More Section */}
          {expandedSlide === 2 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-12 glass-card p-8 rounded-2xl"
            >
              <h3 className="text-3xl font-bold text-white mb-4">Deep Dive: AI's Progress</h3>
              <div className="grid grid-cols-2 gap-8 text-left">
                <div>
                  <h4 className="text-xl text-blue-400 mb-2">Healthcare Impact</h4>
                  <p className="text-gray-300">AI diagnostics achieving 95% accuracy in cancer detection</p>
                </div>
                <div>
                  <h4 className="text-xl text-purple-400 mb-2">Financial Impact</h4>
                  <p className="text-gray-300">60-73% of US equity trading now AI-driven</p>
                </div>
              </div>
              <Link href="/future-of-work" className="mt-6 inline-block text-blue-400 hover:text-blue-300 text-xl">
                Explore Full Report →
              </Link>
            </motion.div>
          )}
          <button 
            onClick={() => setExpandedSlide(prev => prev === 2 ? null : 2)}
            className="mt-8 bg-white/10 hover:bg-white/20 px-8 py-3 rounded-xl text-xl text-white transition-colors"
          >
            {expandedSlide === 2 ? 'Collapse' : 'Learn More'}
          </button>
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
                    <li>• Write essays</li>
                    <li>• Solve routine problems</li>
                    <li>• Generate code</li>
                    <li>• Create content</li>
                  </ul>
                </div>
                <div className="text-left">
                  <h4 className="text-2xl font-bold text-blue-400 mb-4">What AI Can't Do</h4>
                  <ul className="text-xl text-gray-300 space-y-4">
                    <li>• Think critically</li>
                    <li>• Solve big problems</li>
                    <li>• Make ethical decisions</li>
                    <li>• Show true creativity</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="text-3xl text-gray-300">
              Use AI to learn faster, but <span className="text-pink-500 font-semibold">don't skip the hard work</span>.<br/>
              The people who succeed will know how to work <span className="text-blue-400 font-semibold">with AI</span>, not just rely on it.
            </div>
          </div>
          {/* Add Career Advice */}
          {expandedSlide === 3 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 glass-card p-8 rounded-2xl"
            >
              <h3 className="text-3xl font-bold text-white mb-4">Future-Proof Your Career</h3>
              <div className="grid grid-cols-2 gap-8 text-left">
                <div>
                  <h4 className="text-xl text-pink-400 mb-2">Essential Skills</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Critical thinking</li>
                    <li>• Emotional intelligence</li>
                    <li>• AI collaboration</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl text-blue-400 mb-2">Emerging Roles</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• AI Ethics Specialist</li>
                    <li>• Human-Machine Team Manager</li>
                    <li>• AI Trainer</li>
                  </ul>
                </div>
              </div>
              <Link href="/high-schooler-advice" className="mt-6 inline-block text-pink-400 hover:text-pink-300 text-xl">
                Full Career Guide →
              </Link>
            </motion.div>
          )}
          <button 
            onClick={() => setExpandedSlide(prev => prev === 3 ? null : 3)}
            className="mt-6 bg-white/10 hover:bg-white/20 px-8 py-3 rounded-xl text-xl text-white transition-colors"
          >
            {expandedSlide === 3 ? 'Collapse' : 'Get Career Advice'}
          </button>
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
          onClick={() => currentSlide > 0 && setCurrentSlide(prev => prev - 1)}
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
          onClick={() => currentSlide < slides.length - 1 && setCurrentSlide(prev => prev + 1)}
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

      {/* Document Button */}
      <div className="fixed bottom-8 left-8 z-50">
        <Link 
          href="/asi-impact-society"
          className="glass-card p-4 rounded-xl hover:bg-white/20 transition-colors flex items-center gap-2"
        >
          <FiBookOpen className="w-6 h-6 text-white" />
          <span className="text-white">Full Research</span>
        </Link>
      </div>
    </div>
  )
} 