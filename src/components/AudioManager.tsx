import { useState, useEffect, useCallback } from 'react'

interface AudioFile {
  hover: string
  click: string
  background: string
}

const audioFiles: AudioFile = {
  hover: '/sounds/hover.wav',
  click: '/sounds/click.wav',
  background: '/sounds/background.mp3'
}

export function useAudioManager() {
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null)
  const [audioBuffers, setAudioBuffers] = useState<{ [key: string]: AudioBuffer }>({})
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMuted, setIsMuted] = useState(true)

  useEffect(() => {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)()
    setAudioContext(ctx)

    const loadAudio = async () => {
      try {
        const buffers: { [key: string]: AudioBuffer } = {}
        await Promise.all(
          Object.entries(audioFiles).map(async ([key, url]) => {
            try {
              const response = await fetch(url)
              if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
              }
              const arrayBuffer = await response.arrayBuffer()
              buffers[key] = await ctx.decodeAudioData(arrayBuffer)
            } catch (error) {
              console.error(`Failed to load audio file ${key} (${url}):`, error)
            }
          })
        )
        setAudioBuffers(buffers)
        setIsLoaded(true)
      } catch (error) {
        console.error('Failed to load audio files:', error)
      }
    }

    loadAudio()

    return () => {
      ctx.close().catch(error => {
        console.error('Failed to close audio context:', error)
      })
    }
  }, [])

  const playAudio = useCallback((key: keyof AudioFile) => {
    if (!isMuted && isLoaded && audioContext && audioContext.state === 'running' && audioBuffers[key]) {
      const source = audioContext.createBufferSource()
      source.buffer = audioBuffers[key]
      source.connect(audioContext.destination)
      source.start(0)
    }
  }, [isMuted, isLoaded, audioContext, audioBuffers])

  const toggleMute = useCallback(() => {
    setIsMuted(prev => !prev)
    if (isMuted && audioContext) {
      audioContext.resume().catch(error => {
        console.error('Failed to resume audio context:', error)
      })
    }
  }, [isMuted, audioContext])

  const playBackgroundMusic = useCallback(() => {
    if (!isMuted && isLoaded && audioContext && audioContext.state === 'running' && audioBuffers.background) {
      const source = audioContext.createBufferSource()
      source.buffer = audioBuffers.background
      source.loop = true
      source.connect(audioContext.destination)
      source.start(0)
      return source
    }
    return null
  }, [isMuted, isLoaded, audioContext, audioBuffers])

  return { playAudio, toggleMute, playBackgroundMusic, isLoaded, isMuted }
}

