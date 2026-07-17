import { CharacterSprite } from '../components/CharacterSprite'
import { GameFrame } from '../components/GameFrame'
import { PRIZE } from '../data/endings'
import './screens.css'

interface Props {
  onRestart: () => void
  muted: boolean
  onToggleMute: () => void
}

export function PrizeScreen({ onRestart, muted, onToggleMute }: Props) {
  return (
    <GameFrame title={PRIZE.title} muted={muted} onToggleMute={onToggleMute}>
      <div className="panel panel--prize">
        <div className="prize-art">
          <CharacterSprite characterId="coral" variant="pamper" />
        </div>
        <pre className="prize-message">{PRIZE.message}</pre>
        <button type="button" className="btn btn--soft" onClick={onRestart}>
          Jugar otra vez
        </button>
      </div>
    </GameFrame>
  )
}
