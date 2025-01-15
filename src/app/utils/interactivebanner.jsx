'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { RiNextjsFill } from "react-icons/ri"
import { FaReact } from "react-icons/fa"
import { FaBootstrap } from "react-icons/fa"
import { SiTypescript } from "react-icons/si"
import ReactDOMServer from 'react-dom/server'

const InteractiveBanner = () => {
  const bannerRef = useRef(null)
  const emojis = [<RiNextjsFill />, <FaReact />, <FaBootstrap />, <SiTypescript />]

  useEffect(() => {
    const banner = bannerRef.current
    if (!banner) return

    const createEmoji = (x, y) => {
      const emoji = document.createElement('div')
      const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)]
      emoji.innerHTML = ReactDOMServer.renderToString(randomEmoji) // Convert React element to string
      emoji.className = 'absolute text-3xl transition-all duration-300 ease-out'
      emoji.style.left = `${x}px`
      emoji.style.top = `${y}px`
      emoji.style.opacity = '0'
      emoji.style.transform = 'scale(0.5) translateY(20px)'
      banner.appendChild(emoji)

      setTimeout(() => {
        emoji.style.opacity = '1'
        emoji.style.transform = 'scale(1) translateY(0)'
      }, 50)

      setTimeout(() => {
        emoji.style.opacity = '0'
        emoji.style.transform = 'scale(0.5) translateY(-20px)'
        setTimeout(() => emoji.remove(), 300)
      }, 2000)
    }

    const handleMouseMove = (e) => {
      const rect = banner.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      if (Math.random() > 0.9) {
        createEmoji(x, y)
      }
    }

    banner.addEventListener('mousemove', handleMouseMove)
    return () => banner.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <motion.div
      ref={bannerRef}
      className="relative h-full w-full overflow-hidden rounded-lg"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 opacity-75" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-white">
        <h1 className="mb-4 text-7xl font-[900] opacity-[.2]">Independent Developer</h1>
      </div>
    </motion.div>
  )
}

export default InteractiveBanner
