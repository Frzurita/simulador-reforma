import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import './LandingPage.css'

/** Código secreto (cambia esto para testear; en prod: 1995/07/21) */
const SECRET = '19950721'

type Phase = 'locked' | 'surprise' | 'unlocked'

const SPARKS = [
  { x: -120, y: -40, d: 0 },
  { x: 110, y: -55, d: 0.05 },
  { x: -60, y: 50, d: 0.1 },
  { x: 90, y: 35, d: 0.08 },
  { x: -140, y: 10, d: 0.12 },
  { x: 40, y: -80, d: 0.04 },
  { x: 130, y: 5, d: 0.15 },
  { x: -20, y: 70, d: 0.07 },
  { x: 70, y: 65, d: 0.11 },
  { x: -90, y: -70, d: 0.09 },
]

export function LandingPage() {
  const [phase, setPhase] = useState<Phase>('locked')
  const bufferRef = useRef('')
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    rootRef.current?.focus()
  }, [])

  useEffect(() => {
    if (phase !== 'locked') return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return

      const char = event.key.length === 1 ? event.key : null
      if (!char) return

      const next = (bufferRef.current + char).slice(-SECRET.length)
      bufferRef.current = next

      if (next === SECRET) {
        bufferRef.current = ''
        setPhase('surprise')
      }
    }

    document.addEventListener('keydown', onKeyDown, true)
    return () => document.removeEventListener('keydown', onKeyDown, true)
  }, [phase])

  useEffect(() => {
    if (phase !== 'surprise') return
    const id = window.setTimeout(() => setPhase('unlocked'), 1600)
    return () => window.clearTimeout(id)
  }, [phase])

  return (
    <div
      ref={rootRef}
      className={`landing ${phase !== 'locked' ? 'landing--unlocked' : ''}`}
      tabIndex={-1}
      onMouseDown={() => rootRef.current?.focus()}
    >
      <div className="landing__glow landing__glow--a" aria-hidden />
      <div className="landing__glow landing__glow--b" aria-hidden />
      <div className="landing__grain" aria-hidden />

      <AnimatePresence>
        {phase === 'surprise' && (
          <motion.div
            className="landing__flash"
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.85, 0.35, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, times: [0, 0.15, 0.45, 1] }}
          />
        )}
      </AnimatePresence>

      <main className="landing__main">
        <motion.p
          className="landing__eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Para ti
        </motion.p>

        <motion.h1
          className="landing__name"
          initial={{ opacity: 0, y: 24 }}
          animate={
            phase === 'surprise'
              ? { opacity: 1, y: 0, scale: [1, 1.03, 1] }
              : { opacity: 1, y: 0, scale: 1 }
          }
          transition={
            phase === 'surprise'
              ? { duration: 0.7, times: [0, 0.4, 1] }
              : { duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }
          }
        >
          Coral
        </motion.h1>

        <motion.p
          className="landing__age"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.35 }}
        >
          Feliz 31
        </motion.p>

        <motion.p
          className="landing__letter"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          Gracias por construir conmigo una vida que, incluso en los días más
          caóticos, se siente como un hogar.
          <br />
          <br />
          Te quiero.
          <span className="landing__sign">— Fran</span>
        </motion.p>

        <div className="landing__reveal">
          <AnimatePresence mode="wait">
            {phase === 'locked' && (
              <motion.div
                key="hint"
                className="landing__hint"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, filter: 'blur(6px)' }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <p className="landing__hint-title">Una pequeña cerradura</p>
                <p className="landing__hint-text">
                  Introduce el año, mes y día de la persona más fabulosa y
                  descubre el secreto.
                </p>
              </motion.div>
            )}

            {phase === 'surprise' && (
              <motion.div
                key="surprise"
                className="landing__surprise"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.15, filter: 'blur(8px)' }}
                transition={{ type: 'spring', stiffness: 260, damping: 18 }}
              >
                {SPARKS.map((spark, i) => (
                  <motion.span
                    key={i}
                    className="landing__spark"
                    initial={{ opacity: 0, x: 0, y: 0, scale: 0.4 }}
                    animate={{
                      opacity: [0, 1, 0],
                      x: spark.x,
                      y: spark.y,
                      scale: [0.4, 1.2, 0.2],
                    }}
                    transition={{
                      duration: 1.15,
                      delay: spark.d,
                      ease: 'easeOut',
                    }}
                  />
                ))}

                <motion.div
                  className="landing__lock"
                  initial={{ rotate: -8, scale: 0.8 }}
                  animate={{ rotate: [ -8, 10, -4, 0], scale: [0.8, 1.12, 1] }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="landing__lock-ring" />
                  <motion.span
                    className="landing__lock-shackle"
                    initial={{ y: 0, rotate: 0 }}
                    animate={{ y: -10, rotate: -28 }}
                    transition={{ delay: 0.35, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  />
                </motion.div>

                <motion.p
                  className="landing__surprise-text"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45, duration: 0.5 }}
                >
                  ¡Sorpresa!
                </motion.p>
              </motion.div>
            )}

            {phase === 'unlocked' && (
              <motion.div
                key="actions"
                className="landing__actions"
                initial={{ opacity: 0, y: 28, scale: 0.92 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 16 }}
              >
                <motion.div
                  initial={{ scale: 0.85, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.08, type: 'spring', stiffness: 240, damping: 14 }}
                >
                  <Link className="landing__cta landing__cta--reveal" to="/simulacion-reforma">
                    Empezar
                  </Link>
                </motion.div>
                <motion.p
                  className="landing__bridge"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.28, duration: 0.55 }}
                >
                  Y como no sabemos vivir sin un poco de caos… tendrás que superar
                  un pequeño desafío para ver tus regalos.
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  )
}
