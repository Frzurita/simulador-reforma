import { useState } from 'react'
import { motion } from 'framer-motion'
import './GiftBox.css'

interface Props {
  label: string
  accent: string
  opened: boolean
  onOpen: () => void
}

export function GiftBox({ label, accent, opened, onOpen }: Props) {
  const [shaking, setShaking] = useState(false)

  const handleClick = () => {
    if (opened || shaking) {
      onOpen()
      return
    }
    setShaking(true)
    window.setTimeout(() => {
      setShaking(false)
      onOpen()
    }, 420)
  }

  return (
    <button
      type="button"
      className={`gift-box ${opened ? 'is-opened' : ''}`}
      onClick={handleClick}
      aria-label={opened ? `Ver regalo: ${label}` : `Abrir regalo: ${label}`}
    >
      <motion.div
        className="gift-box__sprite"
        animate={
          shaking
            ? { x: [0, -5, 5, -5, 5, -3, 3, 0], rotate: [0, -4, 4, -3, 3, 0] }
            : opened
              ? { y: 0 }
              : { y: [0, -3, 0] }
        }
        transition={
          shaking
            ? { duration: 0.4, ease: 'easeInOut' }
            : opened
              ? { duration: 0.2 }
              : { duration: 2.4, repeat: Infinity, ease: 'easeInOut' }
        }
      >
        <svg
          viewBox="0 0 48 52"
          width="96"
          height="104"
          shapeRendering="crispEdges"
          aria-hidden
        >
          {/* shadow */}
          <ellipse cx="24" cy="48" rx="14" ry="3" fill="#3d2e1e" opacity="0.2" />

          {/* box body */}
          <rect x="8" y="22" width="32" height="22" fill={accent} />
          <rect x="8" y="22" width="6" height="22" fill="#000" opacity="0.18" />
          <rect x="34" y="22" width="6" height="10" fill="#fff" opacity="0.15" />

          {/* vertical ribbon */}
          <rect x="21" y="22" width="6" height="22" fill="#f0c419" />
          <rect x="21" y="22" width="2" height="22" fill="#d4a017" />

          {/* lid */}
          <rect
            x="6"
            y={opened ? 8 : 16}
            width="36"
            height="10"
            fill={accent}
          />
          <rect
            x="6"
            y={opened ? 8 : 16}
            width="36"
            height="3"
            fill="#fff"
            opacity="0.2"
          />
          <rect
            x="20"
            y={opened ? 8 : 16}
            width="8"
            height="10"
            fill="#f0c419"
          />

          {/* bow */}
          {!opened && (
            <>
              <rect x="14" y="12" width="8" height="6" fill="#f0c419" />
              <rect x="26" y="12" width="8" height="6" fill="#f0c419" />
              <rect x="20" y="14" width="8" height="6" fill="#d4a017" />
            </>
          )}

          {opened && (
            <>
              <rect x="18" y="26" width="12" height="10" fill="#f5ecdc" />
              <rect x="20" y="28" width="8" height="6" fill="#e8dcc8" />
            </>
          )}
        </svg>
      </motion.div>
      <span className="gift-box__label">
        {opened ? label : '???'}
      </span>
      {opened ? <span className="gift-box__status">Abierto</span> : null}
    </button>
  )
}
