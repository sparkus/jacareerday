'use client'

import React, { useEffect, useRef } from 'react'

const CHARS = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'

const DynamicBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Matrix rain effect
    const fontSize = 16
    const columns = canvas.width / fontSize
    const drops: number[] = []

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100
    }

    const draw = () => {
      // Slower fade effect for more visibility
      ctx.fillStyle = 'rgba(0, 0, 0, 0.02)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Brighter green color
      ctx.fillStyle = '#00FF00'
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)]
        const x = i * fontSize
        const y = drops[i] * fontSize

        ctx.fillText(char, x, y)

        // Slow down the drop speed
        if (y > canvas.height && Math.random() > 0.99) {
          drops[i] = 0
        }

        drops[i] += 0.5 // Reduced speed from 1 to 0.5
      }
    }

    // Animation loop with slower timing
    let animationFrame: number
    const animate = () => {
      setTimeout(() => {
        draw()
        animationFrame = requestAnimationFrame(animate)
      }, 50) // Added delay between frames
    }
    animate()

    // Video background
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.3 // Slowed down from 0.5
    }

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/neural-network.mp4" type="video/mp4" />
      </video>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ mixBlendMode: 'lighten', opacity: 0.4 }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/60" />
    </div>
  )
}

export default DynamicBackground 