'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Volume2, VolumeX, Settings } from 'lucide-react'
import { Button } from '@/components/ui/button'
import LoadingScreen from '@/components/LoadingScreen'
import { useAudioManager } from '@/components/AudioManager'

export default function RootLayout({ children }) {
  const pathname = usePathname()
  const { playAudio, toggleMute, playBackgroundMusic, isLoaded, isMuted } = useAudioManager()

  useEffect(() => {
    if (isLoaded) {
      const handleUserInteraction = () => {
        playBackgroundMusic()
        document.removeEventListener('click', handleUserInteraction)
      }
      document.addEventListener('click', handleUserInteraction)

      const buttons = document.querySelectorAll('button, a')
      buttons.forEach(button => {
        button.addEventListener('mouseenter', () => playAudio('hover'))
        button.addEventListener('click', () => playAudio('click'))
      })

      return () => {
        document.removeEventListener('click', handleUserInteraction)
        buttons.forEach(button => {
          button.removeEventListener('mouseenter', () => playAudio('hover'))
          button.removeEventListener('click', () => playAudio('click'))
        })
      }
    }
  }, [isLoaded, playAudio, playBackgroundMusic])

  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen font-mono">
        {!isLoaded && <LoadingScreen />}
        <div className="fixed top-4 right-4 flex gap-2 z-50">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMute}
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
        </div>

        <main className="min-h-screen">{children}</main>

        <nav className="fixed bottom-0 left-0 right-0 bg-black/90 border-t border-red-500/20">
          <div className="max-w-screen-xl mx-auto flex justify-between px-4 py-2">
            {['beginning', 'logs', 'achievements', 'creations', 'games'].map((item) => (
              <Button
                key={item}
                variant="ghost"
                className={`text-xs uppercase ${
                  pathname === `/${item}` 
                    ? 'text-red-500' 
                    : 'text-gray-400 hover:text-red-400'
                }`}
              >
                {item}
              </Button>
            ))}
          </div>
        </nav>
      </body>
    </html>
  )
}

