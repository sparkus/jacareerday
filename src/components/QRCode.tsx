'use client'

import React from 'react'
import { useEffect, useState } from 'react'
import { QRCodeSVG } from 'qrcode.react'

interface QRCodeProps {
  url: string
  size?: number
}

export default function QRCode({ url, size = 256 }: QRCodeProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg inline-block">
      <QRCodeSVG
        value={url}
        size={size}
        level="H"
        includeMargin
      />
    </div>
  )
} 