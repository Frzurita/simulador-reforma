import { useReducer } from 'react'
import { useMusic } from './audio/useMusic'
import { createInitialState, gameReducer } from './game/engine'
import { IntroScreen } from './screens/IntroScreen'
import { PlayingScreen } from './screens/PlayingScreen'
import { GameOverScreen } from './screens/GameOverScreen'
import { PrizeScreen } from './screens/PrizeScreen'
import './App.css'

export default function App() {
  const [state, dispatch] = useReducer(gameReducer, undefined, createInitialState)
  const { muted, start, toggleMute } = useMusic(state.screen)

  const muteProps = { muted, onToggleMute: () => void toggleMute() }

  if (state.screen === 'intro') {
    return (
      <IntroScreen
        {...muteProps}
        onStart={() => {
          void start()
          dispatch({ type: 'START' })
        }}
      />
    )
  }

  if (state.screen === 'gameover' && state.defeatReason) {
    return (
      <GameOverScreen
        {...muteProps}
        reason={state.defeatReason}
        onRestart={() => dispatch({ type: 'RESTART' })}
      />
    )
  }

  if (state.screen === 'prize') {
    return (
      <PrizeScreen
        {...muteProps}
        onRestart={() => dispatch({ type: 'RESTART' })}
      />
    )
  }

  return (
    <PlayingScreen
      {...muteProps}
      state={state}
      onChoose={(side) => dispatch({ type: 'CHOOSE', side })}
    />
  )
}
