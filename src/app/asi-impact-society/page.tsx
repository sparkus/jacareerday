'use client'

import Link from 'next/link';
import DynamicBackground from '@/components/DynamicBackground';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiCpu, FiTrendingUp, FiShield, FiGlobe } from 'react-icons/fi';

export default function ASIImpactSociety() {
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
            href="/?slide=2" 
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
            The AI Revolution: From Narrow Intelligence to Superintelligence
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
                  <FiCpu className="w-8 h-8 text-blue-400" />
                </div>
                <h2 className="text-3xl font-bold text-white ml-4">Current State: Artificial Narrow Intelligence (ANI)</h2>
              </div>
              <p className="text-xl text-gray-300">
                ANI is already ubiquitous in our daily lives, with applications ranging from automotive systems to smartphone applications, email spam filters, recommendation systems, and language translation tools. While ANI systems are not inherently dangerous, they serve as precursors to more advanced forms of AI.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-card p-8 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-purple-500/20 rounded-xl">
                    <FiTrendingUp className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white ml-4">Industry Impact</h3>
                </div>
                <ul className="text-gray-300 space-y-2">
                  <li>• Healthcare: AI diagnostic tools match human expert accuracy</li>
                  <li>• Finance: AI handles 60-73% of US equity trading</li>
                  <li>• Education: 30% improvement in student performance</li>
                  <li>• Legal: Contract review 60x faster than humans</li>
                </ul>
              </div>

              <div className="glass-card p-8 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-pink-500/20 rounded-xl">
                    <FiShield className="w-8 h-8 text-pink-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white ml-4">Key Challenges</h3>
                </div>
                <ul className="text-gray-300 space-y-2">
                  <li>• 85% of AI projects face bias issues</li>
                  <li>• 28% of adopters cite regulatory concerns</li>
                  <li>• 54% of employees experience role disruption</li>
                  <li>• Privacy and security considerations</li>
                </ul>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-green-500/20 rounded-xl">
                  <FiGlobe className="w-8 h-8 text-green-400" />
                </div>
                <h2 className="text-3xl font-bold text-white ml-4">The Path to AGI and ASI</h2>
              </div>
              <p className="text-xl text-gray-300 mb-4">
                By 2025, we're projected to have affordable, human brain-level computing power. The transition from AGI to ASI could happen rapidly, driven by faster information processing, continuous self-improvement, and advantages in memory capacity.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="bg-white/5 p-4 rounded-xl">
                  <h4 className="text-xl font-bold text-blue-400 mb-2">Development Factors</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Reverse-engineering the brain</li>
                    <li>• Genetic algorithms</li>
                    <li>• Self-improving systems</li>
                    <li>• Computational advances</li>
                  </ul>
                </div>
                <div className="bg-white/5 p-4 rounded-xl">
                  <h4 className="text-xl font-bold text-pink-400 mb-2">Workforce Impact</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• 75M jobs displaced by 2025</li>
                    <li>• 133M new positions created</li>
                    <li>• Net increase of 58M jobs</li>
                    <li>• Focus on AI-human collaboration</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10">
              <h2 className="text-3xl font-bold mb-4 text-white">Looking Ahead</h2>
              <p className="text-xl text-gray-300">
                The AI revolution is not a distant future scenario but a present reality. Success lies in viewing AI not as a replacement for human capabilities, but as a powerful tool to augment and enhance human potential. The key is developing complementary skills and ensuring AI development aligns with human values.
              </p>
              <div className="mt-6">
                <Link 
                  href="/future-of-work" 
                  className="inline-block bg-white/10 hover:bg-white/20 px-6 py-3 rounded-xl text-white transition-colors"
                >
                  Explore the Future of Work →
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
} 