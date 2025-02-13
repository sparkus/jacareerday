'use client'

import Link from 'next/link';
import DynamicBackground from '@/components/DynamicBackground';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiTrendingUp, FiBriefcase, FiUsers, FiLayers, FiCompass } from 'react-icons/fi';

export default function FutureOfWork() {
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
            AI's Rapid Progress and the Future of Work
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
                <h2 className="text-3xl font-bold text-white ml-4">Unprecedented Change</h2>
              </div>
              <p className="text-xl text-gray-300">
                The World Economic Forum projects that AI and information-processing technologies will create 19 million jobs while displacing 9 million. Unlike previous revolutions that primarily affected manual labor, this transformation is uniquely impacting knowledge workers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-card p-8 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-purple-500/20 rounded-xl">
                    <FiBriefcase className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white ml-4">Most Exposed Roles</h3>
                </div>
                <ul className="text-gray-300 space-y-2">
                  <li>• Software & coding (95% skill overlap)</li>
                  <li>• Information technology</li>
                  <li>• Legal & accounting</li>
                  <li>• Remote-compatible positions</li>
                </ul>
              </div>

              <div className="glass-card p-8 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-pink-500/20 rounded-xl">
                    <FiUsers className="w-8 h-8 text-pink-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white ml-4">Industry Impact</h3>
                </div>
                <ul className="text-gray-300 space-y-2">
                  <li>• Healthcare: $150B annual savings by 2026</li>
                  <li>• Banking: $7.3B saved via AI chatbots</li>
                  <li>• 4,200+ generative AI roles open</li>
                  <li>• 77% employers prioritize reskilling</li>
                </ul>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-green-500/20 rounded-xl">
                  <FiLayers className="w-8 h-8 text-green-400" />
                </div>
                <h2 className="text-3xl font-bold text-white ml-4">Emerging Trends</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-blue-400 mb-2">Growing Sectors</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Healthcare AI integration</li>
                    <li>• AI system development</li>
                    <li>• Human-AI collaboration</li>
                    <li>• AI ethics and governance</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-pink-400 mb-2">Required Skills</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• AI literacy</li>
                    <li>• Adaptability</li>
                    <li>• Complex problem solving</li>
                    <li>• Ethical decision making</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-500/20 rounded-xl">
                  <FiCompass className="w-8 h-8 text-blue-400" />
                </div>
                <h2 className="text-3xl font-bold text-white ml-4">Looking Ahead</h2>
              </div>
              <p className="text-xl text-gray-300 mb-6">
                By 2030, work tasks are expected to be nearly evenly divided between human, machine, and hybrid approaches. Success lies in learning to work alongside AI rather than competing with it.
              </p>
              <div className="flex gap-4">
                <Link 
                  href="/high-schooler-advice" 
                  className="inline-block bg-white/10 hover:bg-white/20 px-6 py-3 rounded-xl text-white transition-colors"
                >
                  Advice for Students →
                </Link>
                <Link 
                  href="/asi-impact-society" 
                  className="inline-block bg-white/10 hover:bg-white/20 px-6 py-3 rounded-xl text-white transition-colors"
                >
                  Impact on Society →
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
} 