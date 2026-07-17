import { useReducer } from 'react'
import { createInitialState, gameReducer } from './game/engine'
import { IntroScreen } from './screens/IntroScreen'
import { PlayingScreen } from './screens/PlayingScreen'
import { GameOverScreen } from './screens/GameOverScreen'
import { PrizeScreen } from './screens/PrizeScreen'
import './App.css'

export default function App() {
  const [state, dispatch] = useReducer(gameReducer, undefined, createInitialState)

  if (state.screen === 'intro') {
    return <IntroScreen onStart={() => dispatch({ type: 'START' })} />
  }

  if (state.screen === 'gameover' && state.defeatReason) {
    return (
      <GameOverScreen
        reason={state.defeatReason}
        onRestart={() => dispatch({ type: 'RESTART' })}
      />
    )
  }

  if (state.screen === 'prize') {
    return <PrizeScreen onRestart={() => dispatch({ type: 'RESTART' })} />
  }

  return (
    <PlayingScreen
      state={state}
      onChoose={(side) => dispatch({ type: 'CHOOSE', side })}
    />
  )
}
