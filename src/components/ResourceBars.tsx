import type { Resources } from '../data/types'
import './ResourceBars.css'

interface Props {
  resources: Resources
  preview?: Partial<Resources> | null
  side?: 'left' | 'right' | null
}

function Bar({
  label,
  icon,
  value,
  delta,
  side,
}: {
  label: string
  icon: string
  value: number
  delta?: number
  side?: 'left' | 'right' | null
}) {
  const showDelta = side && delta !== undefined && delta !== 0
  return (
    <div className="bar">
      <div className="bar__meta">
        <span className="bar__icon" aria-hidden>
          {icon}
        </span>
        <span className="bar__label">{label}</span>
        {showDelta ? (
          <span
            className={`bar__delta ${delta! > 0 ? 'is-up' : 'is-down'}`}
          >
            {delta! > 0 ? '+' : ''}
            {delta}
          </span>
        ) : null}
      </div>
      <div className="bar__track">
        <div
          className="bar__fill"
          style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
        />
      </div>
    </div>
  )
}

export function ResourceBars({ resources, preview, side }: Props) {
  return (
    <div className="bars">
      <Bar
        label="Presupuesto"
        icon="💶"
        value={resources.presupuesto}
        delta={preview?.presupuesto}
        side={side}
      />
      <Bar
        label="Progreso"
        icon="🧱"
        value={resources.progreso}
        delta={preview?.progreso}
        side={side}
      />
      <Bar
        label="Cordura"
        icon="🧠"
        value={resources.cordura}
        delta={preview?.cordura}
        side={side}
      />
    </div>
  )
}
