import { useState } from 'react'
import { GiftBox } from '../components/GiftBox'
import { GameFrame } from '../components/GameFrame'
import { PrizeArt } from '../components/PrizeArt'
import { PRIZES, PRIZE_SCREEN, type PrizeId } from '../data/prizes'
import './screens.css'

interface Props {
  onRestart: () => void
  muted: boolean
  onToggleMute: () => void
}

export function PrizeScreen({ onRestart, muted, onToggleMute }: Props) {
  const [opened, setOpened] = useState<Set<PrizeId>>(() => new Set())
  const [activeId, setActiveId] = useState<PrizeId | null>(null)

  const active = PRIZES.find((p) => p.id === activeId) ?? null
  const allOpened = opened.size >= PRIZES.length

  const openPrize = (id: PrizeId) => {
    setOpened((prev) => new Set(prev).add(id))
    setActiveId(id)
  }

  return (
    <GameFrame title={PRIZE_SCREEN.title} muted={muted} onToggleMute={onToggleMute}>
      <div className="panel panel--prize">
        {active ? (
          <>
            <p className="panel__eyebrow">Regalo</p>
            <div className="prize-art">
              <PrizeArt art={active.art} />
            </div>
            <h2 className="panel__heading">{active.title}</h2>
            <pre className="prize-message">{active.message}</pre>
            <button
              type="button"
              className="btn btn--soft"
              onClick={() => setActiveId(null)}
            >
              {allOpened ? 'Ver cajas' : 'Abrir la otra caja'}
            </button>
          </>
        ) : (
          <>
            <p className="panel__eyebrow">Victoria</p>
            <h2 className="panel__heading">¡Obra terminada!</h2>
            <p className="panel__body">{PRIZE_SCREEN.intro}</p>

            <div className="prize-boxes">
              {PRIZES.map((prize) => (
                <GiftBox
                  key={prize.id}
                  label={prize.boxLabel}
                  accent={prize.boxAccent}
                  opened={opened.has(prize.id)}
                  onOpen={() => openPrize(prize.id)}
                />
              ))}
            </div>

            {allOpened ? (
              <>
                <p className="panel__body prize-both">
                  {PRIZE_SCREEN.bothOpened}
                </p>
                <pre className="prize-message prize-message--short">
                  {PRIZE_SCREEN.signOff}
                </pre>
                <button type="button" className="btn btn--soft" onClick={onRestart}>
                  Jugar otra vez
                </button>
              </>
            ) : (
              <p className="prize-hint">Toca una caja para abrirla</p>
            )}
          </>
        )}
      </div>
    </GameFrame>
  )
}
