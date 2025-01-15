'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Trophy, Star, ChevronDown, ChevronUp } from 'lucide-react'

const achievements = [
  {
    id: 1,
    title: '1000 STARS ON MY PROJECT',
    description: 'I HAVE CONTRIBUTED TO GUTENBERG, MOMENT.JS AND REACT REPOSITORIES IN GITHUB.',
    rarity: 'LEGENDARY',
    achieved: '24/02/2022',
    icon: Trophy,
    progress: 66,
    status: 'ACHIEVED',
  },
  {
    id: 2,
    title: 'RELEASED PERSONAL WEBSITE',
    description: 'THE SITE YOU ARE LOOKING AT RIGHT NOW -- YES, I DID IT! MADE IT FROM ME A FEW MONTHS.',
    rarity: 'EPIC',
    achieved: '24/02/2022',
    icon: Star,
    progress: 100,
    status: 'ACHIEVED',
  },
  {
    id: 3,
    title: 'DEVELOPED MY OPEN SOURCE PLUGIN',
    description: 'I HAVE CREATED A JS LIBRARY FOR MANAGING ABSOLUTE POSITIONED ELEMENTS',
    rarity: 'EPIC',
    achieved: '24/02/2022',
    icon: Star,
    progress: 85,
    status: 'ACHIEVED',
  },
  {
    id: 4,
    title: 'GAIN 50 STARS ON MY REPOSITORY',
    description: 'MY MOST POPULAR EXTENSION IS GAINING TRACTION, I AM AIMING FOR AT LEAST 50 STARS',
    rarity: 'RARE',
    achieved: null,
    icon: Star,
    progress: 30,
    status: 'IN PROGRESS',
  },
  {
    id: 5,
    title: 'ACHIEVE 100 WPM WRITING SPEED',
    description: 'IMPROVING MY TYPING SPEED FOR BETTER PRODUCTIVITY',
    rarity: 'UNCOMMON',
    achieved: null,
    icon: Star,
    progress: 0,
    status: 'TODO',
  },
]

const ProgressRing = ({ progress }) => {
  const radius = 40
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <div className="relative">
      <svg width="100" height="100" className="progress-ring">
        <circle
          stroke="#2A2A2A"
          fill="transparent"
          strokeWidth="8"
          r={radius}
          cx="50"
          cy="50"
        />
        <circle
          stroke="#E84A4A"
          fill="transparent"
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          r={radius}
          cx="50"
          cy="50"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-[#E84A4A] text-lg font-bold big-shoulders tracking-[1px]">13/22</span>
      </div>
    </div>
  )
}

export default function AchievementPanel() {
  const [expandedAchievement, setExpandedAchievement] = useState(null)

  return (
    <div className="fixed top-16 bottom-2 left-[15%] w-[70%] mx-auto iceland border-[.1px] border-dashed border-[#E84A4A]/20 p-14 overflow-scroll">

    <div className="fixed w-2 h-2 top-16 left-[15%] border-2 border-transparent 
          border-t-[#E84A4A] border-l-[#E84A4A] animate-glow-border"></div>
    
        <div className="fixed w-2 h-2 top-16 right-[15%] border-2 border-transparent 
          border-t-[#E84A4A] border-r-[#E84A4A] animate-glow-border"></div>
    
        <div className="fixed w-2 h-2 bottom-2 left-[15%] border-2 border-transparent 
          border-b-[#E84A4A] border-l-[#E84A4A] animate-glow-border"></div>
    
        <div className="fixed w-2 h-2 bottom-2 right-[15%] border-2 border-transparent 
          border-b-[#E84A4A] border-r-[#E84A4A] animate-glow-border"></div>


      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-[18px] text-primary mb-8 text-center tracking-[2px]"
      >
        ACHIEVEMENTS
      </motion.h1>

      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6 "
        >
          <div className="achievement-border p-8 flex flex-col items-center border-zinc-500/50 border-[1px] ">
            <ProgressRing progress={59} />
            <p className="mt-4 text-gray-400">PROGRESS</p>
          </div>

          <div className="space-y-4">
            <p className="text-sm text-gray-400">
              I HAVE CREATED A SET OF ACHIEVEMENTS FOR MYSELF AND I USE THIS PAGE TO TRACK THEM
            </p>
            <button className="w-full py-2 px-4 border border-[#E84A4A] text-[#E84A4A] hover:bg-[#E84A4A] big-shoulders tracking-[1px] hover:text-white transition-colors">
              CHALLENGE ME
            </button>
          </div>
        </motion.div>

        <div className="space-y-4">
          <div className="flex gap-4 mb-8 text-[#E84A4A] px-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#E84A4A]" />
              <span className="text-sm">ACHIEVED</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#E84A4A]" />
              <span className="text-sm">IN PROGRESS</span>
            </div>
           
          </div>

          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="achievement-border"
            >
              <div
                className="p-4 cursor-pointer"
                onClick={() =>
                  setExpandedAchievement(
                    expandedAchievement === achievement.id ? null : achievement.id
                  )
                }
              >
                <div className={`flex ${
                        achievement.rarity === 'LEGENDARY' ? 'border-yellow-500/70' : 'border-zinc-500/50'
                      }  border-[1px] gap-0`}>
                  <div
                    className={`w-24 px-4 flex items-center justify-center relative ${
                      achievement.rarity === 'LEGENDARY' ? 'bg-yellow-500/10' : 'bg-red-500/10'
                    }`}
                  >
                    <achievement.icon
                      className={`w-8 h-8  ${
                        achievement.rarity === 'LEGENDARY' ? 'text-yellow-500' : 'text-red-500'
                      }`}
                    />
                    <div
                      className={`absolute bottom-0 left-0 right-0  ${
                        achievement.rarity === 'LEGENDARY' ? 'bg-yellow-500' : 'bg-red-500'
                      } text-center text-black py-1 text-xs ${
                        `rarity-${achievement.rarity.toLowerCase()}`
                      }`}
                    >
                      {achievement.rarity}
                    </div>
                  </div>

                  <div className="flex-1 relative pt-4 pb-8 px-4">
                    <h3 className={`text-lg font-bold big-shoulders  ${
                        achievement.rarity === 'LEGENDARY' ? 'text-yellow-500/100' : 'text-[#E84A4A]'
                      }`}>{achievement.title}</h3>
                    <p className="text-sm text-gray-400 mt-2 overflow-y-scroll">{achievement.description}</p>
                    {achievement.achieved && (
                      <p className={`text-xs tracking-[1px] text-gray-100 py-1 px-2 w-[100%] mt-2 absolute bottom-0 left-0 right-0 ${
                        achievement.rarity === 'LEGENDARY' ? 'bg-yellow-500/20' : 'bg-red-500/20'
                      }`
                      }>
                        ACHIEVED: {achievement.achieved}
                      </p>
                    )}
                  </div>

                  {/* <div className="flex items-center">
                    {expandedAchievement === achievement.id ? (
                      <ChevronUp className="w-6 h-6" />
                    ) : (
                      <ChevronDown className="w-6 h-6" />
                    )}
                  </div> */}
                </div>
              </div>

              {expandedAchievement === achievement.id && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  exit={{ height: 0 }}
                  className="px-4 pb-4"
                >
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#E84A4A]"
                      style={{ width: `${achievement.progress}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-sm mt-2 text-gray-400">
                    <span>Progress: {achievement.progress}%</span>
                    <span>
                      Next milestone: {Math.min(Math.ceil(achievement.progress / 25) * 25, 100)}%
                    </span>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
