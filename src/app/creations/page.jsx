'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const creations = [
  { title: 'Project Alpha', description: 'A revolutionary AI-powered chatbot', image: '/placeholder.svg' },
  { title: 'Beta App', description: 'Mobile app for productivity enhancement', image: '/placeholder.svg' },
  { title: 'Gamma Website', description: 'E-commerce platform with advanced features', image: '/placeholder.svg' },
  { title: 'Delta Tool', description: 'Developer tool for code optimization', image: '/placeholder.svg' },
]

export default function Creations() {
  return (
    <div className="min-h-screen p-4 pb-20">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl text-red-500 mb-8"
      >
        CREATIONS
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {creations.map((creation, index) => (
          <motion.div
            key={creation.title}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="border border-red-500/20 p-4 space-y-4"
          >
            <Image src={creation.image} alt={creation.title} width={300} height={200} className="w-full object-cover" />
            <h2 className="text-xl text-red-500">{creation.title}</h2>
            <p className="text-gray-400">{creation.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

