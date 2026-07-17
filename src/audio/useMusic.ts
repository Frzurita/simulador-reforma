import { useCallback, useEffect, useState } from 'react'
import { music } from '../audio/music'

export function useMusic(screen: 'intro' | 'playing' | 'gameover' | 'prize') {
  const [muted, setMuted] = useState(() => music.isMuted())

  useEffect(() => {
    if (screen === 'prize') music.setMood('prize')
    else if (screen === 'gameover') music.setMood('gameover')
    else if (screen === 'playing') music.setMood('play')
  }, [screen])

  const start = useCallback(async () => {
    await music.start()
    setMuted(music.isMuted())
  }, [])

  const toggleMute = useCallback(async () => {
    const next = await music.toggleMute()
    setMuted(next)
  }, [])

  return { muted, start, toggleMute }
}
