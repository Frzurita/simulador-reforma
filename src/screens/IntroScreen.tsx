import { GameFrame } from '../components/GameFrame'
import './screens.css'

interface Props {
  onStart: () => void
}

export function IntroScreen({ onStart }: Props) {
  return (
    <GameFrame>
      <div className="panel">
        <p className="panel__eyebrow">Cumpleaños de Coral</p>
        <h2 className="panel__heading">La casa no se reforma sola</h2>
        <p className="panel__body">
          Gestiona el <strong>presupuesto</strong>, avanza el{' '}
          <strong>progreso</strong> y protege tu <strong>cordura</strong>.
          Desliza a izquierda o derecha para decidir.
        </p>
        <p className="panel__warn">
          Si Emilio ofrece 20 eurillos… piénsatelo muy, muy bien.
        </p>
        <button type="button" className="btn" onClick={onStart}>
          Empezar la obra
        </button>
      </div>
    </GameFrame>
  )
}
