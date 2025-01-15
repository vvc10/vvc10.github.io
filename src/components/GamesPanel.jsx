'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '../components/ui/button'

const games = [
    { title: 'Cyber Puzzle', description: 'Test your logical thinking' },
    { title: 'Code Breaker', description: 'Decrypt complex algorithms' },
    { title: 'AI Showdown', description: 'Compete against an AI opponent' },
    { title: 'Network Navigator', description: 'Explore virtual networks' },
]

const CyberPuzzle = () => {
    const [sequence, setSequence] = useState([])
    const [userSequence, setUserSequence] = useState([])
    const [level, setLevel] = useState(1)
    const [gameState, setGameState] = useState('ready') // 'ready', 'playing', 'won', 'lost'

    useEffect(() => {
        if (gameState === 'playing') {
            const newSequence = Array.from({ length: level + 2 }, () => Math.floor(Math.random() * 4))
            setSequence(newSequence)
            setUserSequence([])
        }
    }, [level, gameState])

    const handleButtonClick = (index) => {
        if (gameState !== 'playing') return

        const newUserSequence = [...userSequence, index]
        setUserSequence(newUserSequence)

        if (newUserSequence.length === sequence.length) {
            if (JSON.stringify(newUserSequence) === JSON.stringify(sequence)) {
                if (level === 5) {
                    setGameState('won')
                } else {
                    setLevel(level + 1)
                    setGameState('playing')
                }
            } else {
                setGameState('lost')
            }
        }
    }

    const startGame = () => {
        setLevel(1)
        setGameState('playing')
    }

    return (
        <div className="space-y-4">
            <h2 className="text-2xl text-primary mb-4">Cyber Puzzle</h2>
            <p className="text-muted-foreground mb-4">
                {gameState === 'ready' && "Click 'Start Game' to begin. Remember the sequence and repeat it!"}
                {gameState === 'playing' && `Level ${level}: Remember the sequence!`}
                {gameState === 'won' && "Congratulations! You've completed all levels!"}
                {gameState === 'lost' && "Game Over. Try again!"}
            </p>
            <div className="grid grid-cols-2 gap-4">
                {[0, 1, 2, 3].map((index) => (
                    <Button
                        key={index}
                        className={`h-24 ${sequence[userSequence.length] === index ? 'bg-primary' : 'bg-muted'}`}
                        onClick={() => handleButtonClick(index)}
                        disabled={gameState !== 'playing'}
                    />
                ))}
            </div>
            {gameState !== 'playing' && (
                <Button onClick={startGame} className="mt-4">
                    {gameState === 'ready' ? 'Start Game' : 'Play Again'}
                </Button>
            )}
        </div>
    )
}

export default function GamesPanel() {
    const [selectedGame, setSelectedGame] = useState(null)

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
            >GAMES
            </motion.h1>

            <div className='flex flex-row gap-10'>
                <p>

                </p>

            </div>
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 w-[40%] mx-auto">
            <p className='absolute w-[170px] opacity-60 top-0 left-[-60%] text-[14px]'>
                Here you will see a few mini games I implemented in React or in Canvas. 
<br/>
Have fun!
                </p>
                {games.map((game, index) => (
                    <motion.div
                        key={game.title}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className={`border-[2px] ${selectedGame === game.title ? 'bg-[#E84A4A] border-[#E84A4A]' : 'border-[#E84A4A]'} p-4 cursor-pointer`}
                        onClick={() => setSelectedGame(game.title)}
                    >
                        <h2 className="text-xl text-primary big-shoulders">{game.title}</h2>
                        <p className="text-muted-foreground">{game.description}</p>
                    </motion.div>
                ))}
            </div>
            {selectedGame && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-8 p-4 border border-[#E84A4A]/20"
                >
                    {selectedGame === 'Cyber Puzzle' ? (
                        <CyberPuzzle />
                    ) : (
                        <>
                            <h3 className="text-2xl text-primary mb-4 big-shoulders text-[#E84A4A]">LAUNCHING: {selectedGame}</h3>
                            <p className="text-muted-foreground">soon.</p>
                        </>
                    )}
                </motion.div>
            )}
        </div>
    )
}

