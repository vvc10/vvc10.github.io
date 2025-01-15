'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Volume2, VolumeX, Settings } from 'lucide-react'
import { Button } from '../components/ui/button'

export default function RootLayout({ children }) {
  const [isMuted, setIsMuted] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const audioFiles = {
      hover: new Audio('/sounds/hover.wav'),
      click: new Audio('/sounds/click.wav'),
      background: new Audio('/sounds/background.mp3')
    }

    const loadAudio = async () => {
      try {
        await Promise.all(
          Object.values(audioFiles).map(audio => 
            audio.load()
          )
        )
        setIsLoaded(true)
      } catch (error) {
        console.error('Failed to load audio files:', error)
      }
    }
    loadAudio()

    const playAudio = (audio) => {
      if (!isMuted && isLoaded) {
        audio.currentTime = 0
        const playPromise = audio.play()
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            if (error.name === "NotAllowedError") {
              console.log("Audio playback was not allowed")
            } else {
              console.error('Audio play failed:', error)
            }
          })
        }
      }
    }

    const handleHover = () => playAudio(audioFiles.hover)
    const handleClick = () => playAudio(audioFiles.click)

    const playBackgroundMusic = () => {
      if (!isMuted && isLoaded) {
        audioFiles.background.loop = true
        playAudio(audioFiles.background)
      }
    }

    const handleUserInteraction = () => {
      playBackgroundMusic()
      document.removeEventListener('click', handleUserInteraction)
    }
    document.addEventListener('click', handleUserInteraction)

    const buttons = document.querySelectorAll('button, a')
    buttons.forEach(button => {
      button.addEventListener('mouseenter', handleHover)
      button.addEventListener('click', handleClick)
    })

    return () => {
      buttons.forEach(button => {
        button.removeEventListener('mouseenter', handleHover)
        button.removeEventListener('click', handleClick)
      })
      document.removeEventListener('click', handleUserInteraction)
      Object.values(audioFiles).forEach(audio => {
        audio.pause()
        audio.currentTime = 0
      })
    }
  }, [isMuted, isLoaded])

  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen font-mono">
        {isLoaded ? null : (
          <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
            <div className="text-red-500 inter">Loading...</div>
          </div>
        )}
        {/* <div className="fixed top-4 right-4 flex gap-2 z-50">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              setIsMuted(!isMuted)
              if (!isMuted) {
                const bgMusic = new Audio('/sounds/background.mp3')
                bgMusic.loop = true
                bgMusic.play().catch(e => console.error('Background audio play failed:', e))
              }
            }}
            className="text-red-500 hover:text-red-400"
          >
            {isMuted ? <VolumeX /> : <Volume2 />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-red-500 hover:text-red-400"
          >
            <Settings />
          </Button>
        </div> */}

        <main className="min-h-screen">{children}</main>

     
      </body>
    </html>
  )
}
