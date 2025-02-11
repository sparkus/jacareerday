'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiArrowRight, FiBook, FiCpu, FiTrendingUp, FiUsers } from 'react-icons/fi'

const topics = [
  {
    id: 'ai-revolution',
    title: 'The AI Revolution',
    description: 'Understanding the rapid progress of AI and its impact on society',
    icon: FiTrendingUp,
    sections: [
      {
        title: 'Historical Context',
        description: 'From the first computers to modern AI systems'
      },
      {
        title: 'Current State of AI',
        description: 'Latest breakthroughs and capabilities'
      },
      {
        title: 'Future Predictions',
        description: 'Where experts think AI is heading'
      }
    ]
  },
  {
    id: 'ai-demos',
    title: 'AI in Action',
    description: 'Real-world examples of AI transforming different industries',
    icon: FiCpu,
    sections: [
      {
        title: 'Website Building',
        description: 'How AI automates web development'
      },
      {
        title: 'Content Creation',
        description: 'AI tools for writing, art, and music'
      },
      {
        title: 'Problem Solving',
        description: "AI's approach to complex challenges"
      }
    ]
  },
  {
    id: 'future-skills',
    title: 'Skills for the Future',
    description: 'Essential skills needed to thrive in an AI-powered world',
    icon: FiUsers,
    sections: [
      {
        title: 'Critical Thinking',
        description: 'Evaluating AI outputs and making decisions'
      },
      {
        title: 'AI Collaboration',
        description: 'Working effectively with AI tools'
      },
      {
        title: 'Problem-Solving',
        description: "Tackling challenges AI can't handle"
      }
    ]
  },
  {
    id: 'learning-path',
    title: 'Learning with AI',
    description: 'How to effectively use AI tools while developing real skills',
    icon: FiBook,
    sections: [
      {
        title: 'Smart Learning Strategies',
        description: 'Balancing AI assistance with skill development'
      },
      {
        title: 'AI Tools for Education',
        description: 'Best practices for using AI in learning'
      },
      {
        title: 'Avoiding Pitfalls',
        description: 'Common mistakes and how to avoid them'
      }
    ]
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function ExplorePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="gradient-blob w-[500px] h-[500px] -top-48 -right-24" />
      <div className="gradient-blob w-[600px] h-[600px] -bottom-48 -left-24" />

      <div className="max-w-6xl mx-auto p-8 relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-8 bg-gradient-to-r from-teal-400 to-pink-500 bg-clip-text text-transparent"
        >
          Explore AI Topics
        </motion.h1>
        
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-8 md:grid-cols-2"
        >
          {topics.map(topic => (
            <motion.div 
              key={topic.id}
              variants={item}
              className="glass-card p-6 hover-lift"
            >
              <div className="flex items-center gap-4 mb-4">
                <topic.icon className="w-8 h-8 text-teal-400" />
                <h2 className="text-2xl font-semibold text-white">
                  {topic.title}
                </h2>
              </div>
              <p className="text-gray-300 mb-6">
                {topic.description}
              </p>
              <div className="space-y-3">
                {topic.sections.map(section => (
                  <Link
                    key={section.title}
                    href={`/explore/${topic.id}#${section.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium text-white">
                          {section.title}
                        </h3>
                        <p className="text-sm text-gray-400">
                          {section.description}
                        </p>
                      </div>
                      <FiArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Link
            href="/presentation"
            className="btn-primary inline-flex items-center gap-2 group"
          >
            Back to Presentation
            <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </main>
  )
} 