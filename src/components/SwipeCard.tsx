import { useRef, useState } from 'react'
import {
  animate,
  motion,
  type PanInfo,
  useMotionValue,
  useTransform,
} from 'framer-motion'
import { CHARACTERS } from '../data/characters'
import type { GameCard } from '../data/types'
import { previewImpacts } from '../game/engine'
import { CharacterSprite } from './CharacterSprite'
import './SwipeCard.css'

interface Props {
  card: GameCard
  onChoose: (side: 'left' | 'right') => void
  onPreview: (
    side: 'left' | 'right' | null,
    impacts: ReturnType<typeof previewImpacts> | null,
  ) => void
}

const SWIPE_THRESHOLD = 100

export function SwipeCard({ card, onChoose, onPreview }: Props) {
  const character = CHARACTERS[card.character]
  const x = useMotionValue(0)
  const rotate = useTransform(x, [-200, 200], [-12, 12])
  const leftOpacity = useTransform(x, [-150, -40, 0], [1, 0.6, 0])
  const rightOpacity = useTransform(x, [0, 40, 150], [0, 0.6, 1])
  const locked = useRef(false)
  const [exiting, setExiting] = useState(false)

  const handleDrag = (_: unknown, info: PanInfo) => {
    if (locked.current) return
    if (info.offset.x < -40) {
      onPreview('left', previewImpacts(card.left.effects))
    } else if (info.offset.x > 40) {
      onPreview('right', previewImpacts(card.right.effects))
    } else {
      onPreview(null, null)
    }
  }

  const settle = (side: 'left' | 'right') => {
    if (locked.current) return
    locked.current = true
    setExiting(true)
    onPreview(null, null)

    const flyTo = side === 'left' ? -480 : 480
    void animate(x, flyTo, { duration: 0.22, ease: 'easeIn' }).then(() => {
      onChoose(side)
    })
  }

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (locked.current) return
    if (info.offset.x <= -SWIPE_THRESHOLD) {
      settle('left')
    } else if (info.offset.x >= SWIPE_THRESHOLD) {
      settle('right')
    } else {
      onPreview(null, null)
      void animate(x, 0, { type: 'spring', stiffness: 400, damping: 28 })
    }
  }

  return (
    <div className="swipe-stage">
      <motion.div
        className="choice-hint choice-hint--left"
        style={{ opacity: leftOpacity }}
      >
        {card.left.label}
      </motion.div>
      <motion.div
        className="choice-hint choice-hint--right"
        style={{ opacity: rightOpacity }}
      >
        {card.right.label}
      </motion.div>

      <motion.article
        className="card"
        style={{ x, rotate }}
        drag={exiting ? false : 'x'}
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.9}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        initial={{ scale: 0.92, opacity: 0, y: 16 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 320, damping: 24 }}
      >
        <header className="card__header">
          <p className="card__name">{character.name}</p>
          <p className="card__role">{character.role}</p>
        </header>

        <div className="card__art">
          <CharacterSprite characterId={card.character} />
        </div>

        <p className="card__text">{card.text}</p>

        <div className="card__actions">
          <button
            type="button"
            className="card__btn card__btn--left"
            disabled={exiting}
            onClick={() => settle('left')}
          >
            ← {card.left.label}
          </button>
          <button
            type="button"
            className="card__btn card__btn--right"
            disabled={exiting}
            onClick={() => settle('right')}
          >
            {card.right.label} →
          </button>
        </div>

        <p className="card__swipe-tip">Desliza o toca una opción</p>
      </motion.article>
    </div>
  )
}
