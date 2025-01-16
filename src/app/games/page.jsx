'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const games = [
  { title: 'Cyber Puzzle', description: 'Test your logical thinking' },
  { title: 'Code Breaker', description: 'Decrypt complex algorithms' },
  { title: 'AI Showdown', description: 'Compete against an AI opponent' },
  { title: 'Network Navigator', description: 'Explore virtual networks' },
]

export default function Games() {
  const [selectedGame, setSelectedGame] = useState(null)

  return (
    <div className="min-h-screen p-4 pb-20">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl text-red-500 mb-8"
      >
        GAMES
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {games.map((game, index) => (
          <motion.div
            key={game.title}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className={`border ${selectedGame === game.title ? 'border-red-500' : 'border-red-500/20'} p-4 cursor-pointer`}
            onClick={() => setSelectedGame(game.title)}
          >
            <h2 className="text-xl text-red-500">{game.title}</h2>
            <p className="text-gray-400">{game.description}</p>
          </motion.div>
        ))}
      </div>
      {selectedGame && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 p-4 border border-red-500"
        >
          <h3 className="text-2xl text-red-500 mb-4">LAUNCHING: {selectedGame}</h3>
          <p className="text-gray-400">Game interface would be implemented here.</p>
        </motion.div>
      )}
    </div>
  )
}

