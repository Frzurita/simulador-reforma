import type { DefeatReason } from '../data/types'
import './EndingArt.css'

interface Props {
  reason: DefeatReason
}

/** Same pixel grid & display size as CharacterSprite busts */
const SVG_PROPS = {
  className: 'ending-svg ending-svg--pixel',
  viewBox: '0 0 64 72',
  width: 168,
  height: 189,
  shapeRendering: 'crispEdges' as const,
  'aria-hidden': true,
}

function CoralAngry() {
  const skin = '#e8b896'
  const skinDark = '#d4a074'
  const skinLight = '#f0c8a8'
  const hair = '#3d2314'
  const hairDark = '#2a1810'
  const hairLight = '#4a3020'
  const shirt = '#c4a484'
  const shirtDark = '#a88868'
  const shirtLight = '#d4b494'

  return (
    <svg {...SVG_PROPS}>
      <ellipse cx="32" cy="68" rx="18" ry="3" fill="#3d2e1e" opacity="0.22" />

      {/* torso */}
      <rect x="18" y="42" width="28" height="22" fill={shirt} />
      <rect x="18" y="42" width="6" height="22" fill={shirtDark} />
      <rect x="40" y="42" width="6" height="10" fill={shirtLight} />
      <rect x="30" y="42" width="4" height="22" fill={shirtDark} opacity="0.35" />

      {/* arms crossed-ish */}
      <rect x="10" y="44" width="8" height="8" fill={skin} />
      <rect x="10" y="44" width="3" height="8" fill={skinDark} />
      <rect x="46" y="44" width="8" height="8" fill={skin} />
      <rect x="51" y="44" width="3" height="8" fill={skinLight} />

      {/* long hair back */}
      <rect x="14" y="18" width="6" height="28" fill={hair} />
      <rect x="44" y="18" width="6" height="28" fill={hair} />
      <rect x="14" y="40" width="6" height="8" fill={hairDark} />
      <rect x="44" y="40" width="6" height="8" fill={hairDark} />

      {/* neck + head */}
      <rect x="28" y="38" width="8" height="6" fill={skin} />
      <rect x="28" y="38" width="2" height="6" fill={skinDark} />
      <rect x="20" y="14" width="24" height="26" fill={skin} />
      <rect x="20" y="14" width="4" height="26" fill={skinDark} />
      <rect x="40" y="14" width="4" height="12" fill={skinLight} />
      <rect x="22" y="36" width="20" height="4" fill={skinDark} opacity="0.45" />

      {/* ears */}
      <rect x="16" y="24" width="4" height="6" fill={skin} />
      <rect x="44" y="24" width="4" height="6" fill={skinLight} />

      {/* hair top + bangs */}
      <rect x="18" y="8" width="28" height="12" fill={hair} />
      <rect x="16" y="12" width="4" height="10" fill={hair} />
      <rect x="44" y="12" width="4" height="10" fill={hair} />
      <rect x="20" y="6" width="24" height="4" fill={hairLight} />
      <rect x="18" y="14" width="6" height="4" fill={hairDark} />
      <rect x="22" y="16" width="8" height="6" fill={hair} />
      <rect x="34" y="16" width="8" height="6" fill={hair} />

      {/* cejas enfadadas hacia adentro: \ / */}
      <rect x="22" y="19" width="2" height="2" fill={hairDark} />
      <rect x="24" y="20" width="2" height="2" fill={hairDark} />
      <rect x="26" y="21" width="2" height="2" fill={hairDark} />
      <rect x="28" y="22" width="2" height="2" fill={hairDark} />
      <rect x="34" y="22" width="2" height="2" fill={hairDark} />
      <rect x="36" y="21" width="2" height="2" fill={hairDark} />
      <rect x="38" y="20" width="2" height="2" fill={hairDark} />
      <rect x="40" y="19" width="2" height="2" fill={hairDark} />

      {/* eyes */}
      <rect x="24" y="24" width="4" height="4" fill="#1a120b" />
      <rect x="36" y="24" width="4" height="4" fill="#1a120b" />
      <rect x="25" y="24" width="1" height="1" fill="#fff" />
      <rect x="37" y="24" width="1" height="1" fill="#fff" />

      {/* cara más roja / rubor de rabia */}
      <rect x="20" y="28" width="6" height="6" fill="#e74c3c" opacity="0.45" />
      <rect x="38" y="28" width="6" height="6" fill="#e74c3c" opacity="0.45" />
      <rect x="22" y="30" width="4" height="3" fill="#c0392b" opacity="0.55" />
      <rect x="38" y="30" width="4" height="3" fill="#c0392b" opacity="0.55" />
      <rect x="26" y="32" width="12" height="2" fill="#e74c3c" opacity="0.25" />

      {/* nariz */}
      <rect x="31" y="28" width="2" height="3" fill={skinDark} />

      {/* boca enfadada */}
      <rect x="28" y="34" width="8" height="2" fill="#5d4037" />
      <rect x="30" y="32" width="4" height="2" fill="#5d4037" />
    </svg>
  )
}

function ChristmasBlocked() {
  return (
    <div className="ending-scene">
      <svg
        className="ending-svg ending-svg--pixel"
        viewBox="0 0 64 72"
        width={168}
        height={189}
        shapeRendering="crispEdges"
        aria-hidden
      >
        <ellipse cx="32" cy="68" rx="18" ry="3" fill="#3d2e1e" opacity="0.22" />

        {/* suelo */}
        <rect x="8" y="58" width="48" height="6" fill="#c4a882" />
        <rect x="8" y="58" width="48" height="2" fill="#a88868" />

        {/* cuerpo chimenea */}
        <rect x="14" y="30" width="36" height="28" fill="#8b5e3c" />
        <rect x="14" y="30" width="6" height="28" fill="#6d4c2f" />
        <rect x="44" y="30" width="6" height="14" fill="#a67c52" />
        <rect x="16" y="32" width="2" height="2" fill="#a67c52" />
        <rect x="20" y="36" width="2" height="2" fill="#6d4c2f" />
        <rect x="40" y="40" width="2" height="2" fill="#6d4c2f" />

        {/* boca de fuego */}
        <rect x="22" y="38" width="20" height="14" fill="#2c1810" />
        <rect x="24" y="40" width="16" height="6" fill="#e67e22" />
        <rect x="26" y="42" width="12" height="6" fill="#f39c12" />
        <rect x="28" y="44" width="4" height="4" fill="#f1c40f" />
        <rect x="34" y="46" width="4" height="2" fill="#e74c3c" opacity="0.7" />

        {/* repisa */}
        <rect x="12" y="26" width="40" height="5" fill="#6d4c2f" />
        <rect x="12" y="26" width="40" height="2" fill="#a67c52" />

        {/* mantel navideño */}
        <rect x="12" y="24" width="40" height="4" fill="#c0392b" />
        <rect x="14" y="24" width="4" height="4" fill="#27ae60" />
        <rect x="22" y="24" width="4" height="4" fill="#27ae60" />
        <rect x="30" y="24" width="4" height="4" fill="#27ae60" />
        <rect x="38" y="24" width="4" height="4" fill="#27ae60" />
        <rect x="46" y="24" width="4" height="4" fill="#27ae60" />

        {/* calcetines */}
        <rect x="24" y="30" width="5" height="10" fill="#e74c3c" />
        <rect x="24" y="30" width="5" height="2" fill="#ecf0f1" />
        <rect x="25" y="38" width="4" height="2" fill="#e74c3c" />
        <rect x="35" y="30" width="5" height="10" fill="#27ae60" />
        <rect x="35" y="30" width="5" height="2" fill="#ecf0f1" />
        <rect x="36" y="38" width="4" height="2" fill="#27ae60" />

        {/* guirnalda + luces */}
        <rect x="16" y="20" width="32" height="3" fill="#27ae60" />
        <rect x="18" y="18" width="2" height="2" fill="#f1c40f" />
        <rect x="24" y="18" width="2" height="2" fill="#e74c3c" />
        <rect x="30" y="18" width="2" height="2" fill="#3498db" />
        <rect x="36" y="18" width="2" height="2" fill="#f1c40f" />
        <rect x="42" y="18" width="2" height="2" fill="#e74c3c" />
      </svg>

      {/* Badge circular fuera del grid pixel — se ve nítido */}
      <div className="ban-badge" aria-hidden>
        <span className="ban-badge__slash" />
      </div>
    </div>
  )
}

function HouseTaped() {
  return (
    <svg {...SVG_PROPS}>
      <ellipse cx="32" cy="68" rx="18" ry="3" fill="#3d2e1e" opacity="0.18" />

      {/* fondo polvo */}
      <rect x="4" y="8" width="56" height="36" fill="#d9cbb8" />
      <rect x="6" y="10" width="2" height="2" fill="#c4b198" />
      <rect x="50" y="14" width="2" height="2" fill="#c4b198" />

      {/* tejado */}
      <rect x="18" y="10" width="28" height="8" fill="#6d4c2f" />
      <rect x="14" y="16" width="36" height="6" fill="#8b5e3c" />
      <rect x="12" y="20" width="40" height="4" fill="#6d4c2f" />
      <rect x="30" y="4" width="6" height="10" fill="#7f8c8d" />
      <rect x="30" y="2" width="6" height="2" fill="#95a5a6" />

      {/* fachada */}
      <rect x="16" y="24" width="32" height="28" fill="#c4a484" />
      <rect x="16" y="24" width="5" height="28" fill="#a88868" />
      <rect x="43" y="24" width="5" height="12" fill="#d4b494" />
      <rect x="20" y="28" width="2" height="2" fill="#a88868" />
      <rect x="36" y="34" width="2" height="2" fill="#a88868" />

      {/* puerta cerrada */}
      <rect x="28" y="36" width="10" height="16" fill="#5d4037" />
      <rect x="28" y="36" width="10" height="2" fill="#3e2723" />
      <rect x="35" y="44" width="2" height="2" fill="#f1c40f" />

      {/* ventanas tapadas */}
      <rect x="18" y="30" width="8" height="8" fill="#3d2e1e" />
      <rect x="20" y="32" width="4" height="4" fill="#2c1810" />
      <rect x="40" y="30" width="8" height="8" fill="#3d2e1e" />
      <rect x="42" y="32" width="4" height="4" fill="#2c1810" />

      {/* cinta amarilla */}
      <rect x="6" y="28" width="52" height="5" fill="#f0c419" />
      <rect x="8" y="28" width="5" height="5" fill="#1a1a1a" />
      <rect x="18" y="28" width="5" height="5" fill="#1a1a1a" />
      <rect x="28" y="28" width="5" height="5" fill="#1a1a1a" />
      <rect x="38" y="28" width="5" height="5" fill="#1a1a1a" />
      <rect x="48" y="28" width="5" height="5" fill="#1a1a1a" />

      <rect x="8" y="42" width="48" height="5" fill="#f0c419" />
      <rect x="10" y="42" width="5" height="5" fill="#1a1a1a" />
      <rect x="20" y="42" width="5" height="5" fill="#1a1a1a" />
      <rect x="30" y="42" width="5" height="5" fill="#1a1a1a" />
      <rect x="40" y="42" width="5" height="5" fill="#1a1a1a" />

      {/* suelo */}
      <rect x="4" y="52" width="56" height="10" fill="#b89b78" />
      <rect x="4" y="52" width="56" height="2" fill="#a67c52" />
    </svg>
  )
}

export function EndingArt({ reason }: Props) {
  return (
    <div className="ending-art">
      {reason === 'cordura' && <CoralAngry />}
      {reason === 'progreso' && <ChristmasBlocked />}
      {reason === 'presupuesto' && <HouseTaped />}
    </div>
  )
}
