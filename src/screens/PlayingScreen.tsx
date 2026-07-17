import { useState } from 'react'
import { GameFrame } from '../components/GameFrame'
import { ResourceBars } from '../components/ResourceBars'
import { SwipeCard } from '../components/SwipeCard'
import type { GameState } from '../data/types'
import { previewImpacts } from '../game/engine'
import './screens.css'

interface Props {
  state: GameState
  onChoose: (side: 'left' | 'right') => void
}

export function PlayingScreen({ state, onChoose }: Props) {
  const card = state.deck[state.cardIndex]
  const [side, setSide] = useState<'left' | 'right' | null>(null)
  const [preview, setPreview] = useState<ReturnType<
    typeof previewImpacts
  > | null>(null)

  if (!card) return null

  return (
    <GameFrame>
      <ResourceBars
        resources={state.resources}
        preview={preview ?? undefined}
        side={side}
      />
      <p className="stage-pill">
        Carta {state.cardIndex + 1}/{state.deck.length}
      </p>
      <SwipeCard
        key={card.id}
        card={card}
        onChoose={(side) => {
          setSide(null)
          setPreview(null)
          onChoose(side)
        }}
        onPreview={(s, impacts) => {
          setSide(s)
          setPreview(impacts)
        }}
      />
    </GameFrame>
  )
}
