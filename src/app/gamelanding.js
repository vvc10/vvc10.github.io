import { useState, useEffect, React } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import './globals.css'

const GameLanding = () => {
    const [isEntering, setIsEntering] = useState(false)
    const [typedText, setTypedText] = useState('')
    const [isCollapsing, setIsCollapsing] = useState(false)
    const router = useRouter()

    const fullText = "THIS IS MY SYSTEM WHERE YOU CAN FIND ALL THE INFORMATION ABOUT ME."

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

    const handleEnterClick = (e) => {
        e.preventDefault()
        setIsCollapsing(true)
        setTimeout(() => {
            router.push('/beginnings') // Navigate after animation
        }, 1000) // Match the animation duration
    }

    return (
        <div className=''>
            <motion.div
                initial={{ opacity: 1 }}
                animate={isCollapsing ? { scaleX: 0 } : { scaleX: 1 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                className="min-h-screen flex flex-col items-center overflow-hidden justify-center p-4 gap-8 origin-center"
            >
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
                        I'm Pankaj, a developer from India
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
                    <button
                        onClick={handleEnterClick}
                        className="relative group"
                        onMouseEnter={() => setIsEntering(true)}
                        onMouseLeave={() => setIsEntering(false)}
                    >
                        <div className="absolute inset-0 bg-red-500/20 blur-xl group-hover:bg-red-500/30 transition-colors" />
                        <div className="relative px-8 py-3 bg-black border border-red-500 text-red-500 hover:text-white hover:bg-[#E84A4A] transition-colors">
                            ENTER THE SYSTEM
                        </div>
                    </button>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default GameLanding
