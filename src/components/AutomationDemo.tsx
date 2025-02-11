'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface AutomationDemoProps {
  type: 'code' | 'website' | 'image' | 'analysis'
}

const codeExample = `function createAIWebsite() {
  // Initialize AI model
  const ai = new AIBuilder();
  
  // Generate website structure
  const layout = ai.generateLayout();
  const components = ai.createComponents();
  
  // Add dynamic features
  ai.addInteractivity();
  ai.optimizePerformance();
  
  // Deploy website
  ai.deployToCloud();
}`

const AutomationDemo = ({ type }: AutomationDemoProps) => {
  const [currentLine, setCurrentLine] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const lines = codeExample.split('\n')

  useEffect(() => {
    if (currentLine < lines.length) {
      const timer = setTimeout(() => {
        setCurrentLine(prev => prev + 1)
      }, 150)
      return () => clearTimeout(timer)
    } else {
      const timer = setTimeout(() => {
        setShowResult(true)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [currentLine, lines.length])

  const renderDemo = () => {
    switch (type) {
      case 'code':
        return (
          <div className="automation-demo p-6">
            <div className="code-generation">
              {lines.slice(0, currentLine).map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="code-line"
                  style={{ 
                    color: line.includes('//') ? '#6B7280' : '#E5E7EB',
                    paddingLeft: line.includes('  ') ? '1rem' : '0'
                  }}
                >
                  {line}
                </motion.div>
              ))}
            </div>
            {showResult && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-4 p-4 bg-green-500 bg-opacity-20 rounded-lg"
              >
                <div className="text-green-400 font-semibold">✓ Website created successfully!</div>
                <div className="text-sm text-green-300">Deployed in 2.3 seconds</div>
              </motion.div>
            )}
          </div>
        )
      case 'website':
        return (
          <div className="automation-demo p-6">
            <div className="relative h-64 bg-gray-900 rounded-lg overflow-hidden">
              <div className="absolute inset-0 neural-network">
                {Array.from({ length: 20 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="neuron"
                    initial={{ scale: 0, x: Math.random() * 100, y: Math.random() * 100 }}
                    animate={{ 
                      scale: 1,
                      x: Math.random() * 400,
                      y: Math.random() * 200
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: i * 0.1
                    }}
                  />
                ))}
              </div>
              {showResult && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">Website Generated!</div>
                    <div className="text-gray-400">AI-powered, responsive, and optimized</div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-2xl mx-auto"
    >
      {renderDemo()}
    </motion.div>
  )
}

export default AutomationDemo 