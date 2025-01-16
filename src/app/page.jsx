'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Home() {
  const [isEntering, setIsEntering] = useState(false)
  const [typedText, setTypedText] = useState('')
  const fullText = "I HAVE CREATED THIS WEBSITE TO FEEL LIKE A GAME/SCI-FI INTERFACE. ALL TEXT INSIDE TRIES TO REFLECT THIS."

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 50)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 gap-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-[20rem] font-bold text-red-500 leading-none"
      >
        HI!
      </motion.div>

      <div className="text-center max-w-xl space-y-4">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl tracking-wider"
        >
          WELCOME TO MY PERSONAL WEBSITE.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-gray-400 text-sm"
        >
          {typedText}
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <Link
          href="/achievements"
          className="relative group"
          onMouseEnter={() => setIsEntering(true)}
          onMouseLeave={() => setIsEntering(false)}
        >
          <div className="absolute inset-0 bg-red-500/20 blur-xl group-hover:bg-red-500/30 transition-colors" />
          <button className="relative px-8 py-3 bg-black border border-red-500 text-red-500 hover:text-red-400 transition-colors">
            ENTER THE SYSTEM
          </button>
        </Link>
      </motion.div>
    </div>
  )
}

