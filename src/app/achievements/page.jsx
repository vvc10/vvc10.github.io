'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Trophy, Star } from 'lucide-react'

const achievements = [
  {
    id: 1,
    title: '1000 STARS ON MY PROJECT',
    description: 'I HAVE CONTRIBUTED TO DATABASE, MOMENT.JS AND REACT REPOSITORIES ON GITHUB',
    rarity: 'LEGENDARY',
    achieved: '24/02/2022',
    icon: '/achievement-1.svg'
  },
  {
    id: 2,
    title: 'RELEASED PERSONAL WEBSITE',
    description: 'THE SITE YOU ARE LOOKING AT RIGHT NOW - YES, I DID IT! MADE IT FROM ME FEW MONTHS.',
    rarity: 'EPIC',
    achieved: '15/02/2022',
    icon: '/achievement-2.svg'
  },
  {
    id: 3,
    title: 'DEVELOPED MY OPEN SOURCE PLUGIN',
    description: 'I HAVE CREATED A JS LIBRARY FOR HANDLING ABSOLUTE POSITIONED ELEMENTS',
    rarity: 'EPIC',
    achieved: '10/03/2022',
    icon: '/achievement-3.svg'
  },
]

export default function Achievements() {
  return (
    <div className="min-h-screen p-4 pb-20">
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-[300px_1fr] gap-8">
        {/* Profile Section */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-4"
        >
          <div className="relative aspect-square">
            <Image
              src="/placeholder.svg"
              alt="Profile"
              fill
              className="object-cover border border-red-500"
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="text-green-500">48 LEVEL</div>
              <div className="text-yellow-500">1,425 COINS AWARDED</div>
            </div>
            <h1 className="text-2xl text-red-500">WEB DEVELOPER</h1>
            <div className="text-sm text-gray-400">LEGACY.AI</div>
          </div>
        </motion.div>

        {/* Achievements Section */}
        <div className="space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4"
          >
            <div className="relative h-24 w-24">
              <div className="absolute inset-0 border-4 border-red-500 rounded-full" />
              <div 
                className="absolute inset-0 border-4 border-red-500 rounded-full"
                style={{ 
                  clipPath: 'polygon(0 0, 100% 0, 100% 59%, 0 59%)',
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-red-500">13/22</span>
              </div>
            </div>
            <div className="text-sm text-gray-400">
              I HAVE CREATED A SET OF ACHIEVEMENTS FOR MYSELF<br />
              AND I USE THIS PAGE TO TRACK THEM
            </div>
          </motion.div>

          <div className="space-y-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border border-red-500/20 bg-black/50 p-4 space-y-2"
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-red-500/10 flex items-center justify-center">
                    {achievement.rarity === 'LEGENDARY' ? (
                      <Trophy className="text-yellow-500" />
                    ) : (
                      <Star className="text-red-500" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-red-500">{achievement.title}</h3>
                    <div className="text-xs text-gray-400">
                      {achievement.description}
                    </div>
                  </div>
                  <div className="ml-auto text-xs">
                    <div className={`
                      ${achievement.rarity === 'LEGENDARY' ? 'text-yellow-500' : 'text-red-500'}
                    `}>
                      {achievement.rarity}
                    </div>
                    <div className="text-gray-400">{achievement.achieved}</div>
                  </div>
                </div></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

