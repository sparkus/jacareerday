'use client'

import Link from 'next/link';
import DynamicBackground from '@/components/DynamicBackground';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiBook, FiAward, FiTarget, FiCompass, FiTrendingUp, FiLayers } from 'react-icons/fi';

export default function HighSchoolerAdvice() {
  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <div className="fixed inset-0">
        <DynamicBackground />
      </div>

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <div className="max-w-4xl mx-auto p-8">
          {/* Back Button */}
          <Link 
            href="/" 
            className="inline-flex items-center text-white mb-8 hover:text-blue-400 transition-colors"
          >
            <FiArrowLeft className="mr-2" />
            Back to Presentation
          </Link>

          {/* Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl font-bold mb-8 text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          >
            Preparing for Your Future in the AI Era
          </motion.h1>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <div className="glass-card p-8 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-500/20 rounded-xl">
                  <FiTrendingUp className="w-8 h-8 text-blue-400" />
                </div>
                <h2 className="text-3xl font-bold text-white ml-4">The Changing Landscape</h2>
              </div>
              <p className="text-xl text-gray-300">
                By 2030, an estimated 14% of the global workforce may need to change careers due to AI and automation. This shift isn't just about job displacement—it's about the transformation of existing roles and the creation of entirely new ones.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-card p-8 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-purple-500/20 rounded-xl">
                    <FiBook className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white ml-4">Essential Learning</h3>
                </div>
                <ul className="text-gray-300 space-y-2">
                  <li>• Develop AI literacy and understanding</li>
                  <li>• Learn programming fundamentals</li>
                  <li>• Study data analysis techniques</li>
                  <li>• Combine STEM with humanities</li>
                </ul>
              </div>

              <div className="glass-card p-8 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-pink-500/20 rounded-xl">
                    <FiAward className="w-8 h-8 text-pink-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white ml-4">Human Skills</h3>
                </div>
                <ul className="text-gray-300 space-y-2">
                  <li>• Emotional intelligence</li>
                  <li>• Creative problem-solving</li>
                  <li>• Ethical reasoning</li>
                  <li>• Interpersonal communication</li>
                </ul>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-green-500/20 rounded-xl">
                  <FiLayers className="w-8 h-8 text-green-400" />
                </div>
                <h2 className="text-3xl font-bold text-white ml-4">Most Affected Sectors</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-blue-400 mb-2">High Impact Areas</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Finance & insurance</li>
                    <li>• ICT & professional services</li>
                    <li>• Software development</li>
                    <li>• Creative & technical fields</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-pink-400 mb-2">Growth Opportunities</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• AI specialists & trainers</li>
                    <li>• Data scientists & analysts</li>
                    <li>• AI-human collaboration experts</li>
                    <li>• AI ethics specialists</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-500/20 rounded-xl">
                  <FiTarget className="w-8 h-8 text-blue-400" />
                </div>
                <h2 className="text-3xl font-bold text-white ml-4">Action Steps</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-blue-400 mb-2">Start Now</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Join coding clubs & competitions</li>
                    <li>• Take online AI courses</li>
                    <li>• Build personal projects</li>
                    <li>• Explore AI tools hands-on</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-pink-400 mb-2">Long-term Focus</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Cultivate lifelong learning</li>
                    <li>• Develop interdisciplinary skills</li>
                    <li>• Stay informed on AI trends</li>
                    <li>• Build ethical awareness</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6">
                <Link 
                  href="/future-of-work" 
                  className="inline-block bg-white/10 hover:bg-white/20 px-6 py-3 rounded-xl text-white transition-colors"
                >
                  Explore Future Career Paths →
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
} 