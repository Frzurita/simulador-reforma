import { GameFrame } from "../components/GameFrame";
import "./screens.css";

interface Props {
  onStart: () => void;
  muted: boolean;
  onToggleMute: () => void;
}

export function IntroScreen({ onStart, muted, onToggleMute }: Props) {
  return (
    <GameFrame muted={muted} onToggleMute={onToggleMute}>
      <div className="panel">
        <p className="panel__eyebrow">Una simulación absurda</p>
        <h2 className="panel__heading">La casa no se reforma sola</h2>
        <p className="panel__body">
          Gestiona el <strong>presupuesto</strong>, avanza el{" "}
          <strong>progreso</strong> y protege tu <strong>cordura</strong>.
          Cada partida elige ~25 situaciones al azar. Desliza a izquierda o
          derecha para decidir.
        </p>
        <p className="panel__warn">Si sobrevives, te espera una sorpresa.</p>
        <button type="button" className="btn" onClick={onStart}>
          Empezar la obra
        </button>
      </div>
    </GameFrame>
  );
}
