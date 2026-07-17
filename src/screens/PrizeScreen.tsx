import { CharacterSprite } from '../components/CharacterSprite'
import { GameFrame } from '../components/GameFrame'
import { PRIZE } from '../data/endings'
import './screens.css'

interface Props {
  onRestart: () => void
}

export function PrizeScreen({ onRestart }: Props) {
  return (
    <GameFrame title={PRIZE.title}>
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
