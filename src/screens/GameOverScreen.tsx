import { EndingArt } from '../components/EndingArt'
import { GameFrame } from '../components/GameFrame'
import { ENDINGS } from '../data/endings'
import type { DefeatReason } from '../data/types'
import './screens.css'

interface Props {
  reason: DefeatReason
  onRestart: () => void
  muted: boolean
  onToggleMute: () => void
}

export function GameOverScreen({
  reason,
  onRestart,
  muted,
  onToggleMute,
}: Props) {
  const ending = ENDINGS[reason]
  return (
    <GameFrame title="Obra paralizada" muted={muted} onToggleMute={onToggleMute}>
      <div className="panel panel--danger">
        <p className="panel__eyebrow">Game over</p>
        <EndingArt reason={reason} />
        <h2 className="panel__heading">{ending.title}</h2>
        <p className="panel__body">{ending.text}</p>
        <button type="button" className="btn" onClick={onRestart}>
          Reintentar reforma
        </button>
      </div>
    </GameFrame>
  )
}
