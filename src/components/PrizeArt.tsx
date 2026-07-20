import { CharacterSprite } from './CharacterSprite'
import './PrizeArt.css'

interface Props {
  art: 'dinner' | 'pamper'
}

function DinnerTablePortrait() {
  const wood = '#8b5e3c'
  const woodDark = '#6d4c2f'
  const woodLight = '#a67c52'
  const cloth = '#f5f0e6'
  const clothShade = '#e8dfd2'
  const clothEdge = '#c0392b'
  const chair = '#5d4037'
  const chairLight = '#6d4c41'

  return (
    <svg
      className="pixel-svg"
      viewBox="0 0 64 72"
      width="168"
      height="189"
      shapeRendering="crispEdges"
      aria-hidden
    >
      <ellipse cx="32" cy="68" rx="20" ry="3" fill="#3d2e1e" opacity="0.2" />

      {/* floor hint */}
      <rect x="8" y="58" width="48" height="6" fill="#c4a882" />
      <rect x="8" y="58" width="48" height="2" fill="#a88868" />

      {/* left chair */}
      <rect x="6" y="34" width="12" height="4" fill={chairLight} />
      <rect x="8" y="38" width="8" height="16" fill={chair} />
      <rect x="8" y="28" width="8" height="10" fill={chair} />
      <rect x="8" y="28" width="8" height="2" fill={chairLight} />
      <rect x="8" y="52" width="3" height="8" fill={woodDark} />
      <rect x="13" y="52" width="3" height="8" fill={woodDark} />

      {/* right chair */}
      <rect x="46" y="34" width="12" height="4" fill={chairLight} />
      <rect x="48" y="38" width="8" height="16" fill={chair} />
      <rect x="48" y="28" width="8" height="10" fill={chair} />
      <rect x="48" y="28" width="8" height="2" fill={chairLight} />
      <rect x="48" y="52" width="3" height="8" fill={woodDark} />
      <rect x="53" y="52" width="3" height="8" fill={woodDark} />

      {/* table legs */}
      <rect x="16" y="48" width="4" height="12" fill={woodDark} />
      <rect x="44" y="48" width="4" height="12" fill={woodDark} />

      {/* table top */}
      <rect x="12" y="40" width="40" height="10" fill={wood} />
      <rect x="12" y="40" width="40" height="3" fill={woodLight} />
      <rect x="12" y="47" width="40" height="3" fill={woodDark} />

      {/* mantel / tablecloth */}
      <rect x="14" y="38" width="36" height="8" fill={cloth} />
      <rect x="14" y="38" width="36" height="2" fill="#fff" />
      <rect x="14" y="44" width="36" height="2" fill={clothShade} />
      <rect x="14" y="46" width="4" height="10" fill={cloth} />
      <rect x="46" y="46" width="4" height="10" fill={cloth} />
      <rect x="14" y="54" width="4" height="2" fill={clothEdge} />
      <rect x="46" y="54" width="4" height="2" fill={clothEdge} />
      {/* stripe on cloth */}
      <rect x="14" y="41" width="36" height="2" fill={clothEdge} opacity="0.55" />

      {/* plates */}
      <rect x="18" y="40" width="8" height="5" fill="#ecf0f1" />
      <rect x="20" y="41" width="4" height="3" fill="#d5d8dc" />
      <rect x="38" y="40" width="8" height="5" fill="#ecf0f1" />
      <rect x="40" y="41" width="4" height="3" fill="#d5d8dc" />

      {/* candle center */}
      <rect x="30" y="34" width="4" height="6" fill="#f5f0e6" />
      <rect x="30" y="34" width="1" height="6" fill="#e8dfd2" />
      <rect x="29" y="39" width="6" height="2" fill={woodDark} />
      {/* flame */}
      <rect x="31" y="30" width="2" height="4" fill="#f39c12" />
      <rect x="31" y="28" width="2" height="3" fill="#f1c40f" />
      <rect x="31" y="27" width="2" height="2" fill="#fff8e0" />
      {/* glow */}
      <rect x="28" y="26" width="2" height="2" fill="#f0c419" opacity="0.5" />
      <rect x="34" y="26" width="2" height="2" fill="#f0c419" opacity="0.5" />
    </svg>
  )
}

export function PrizeArt({ art }: Props) {
  if (art === 'dinner') {
    return (
      <div className="sprite sprite--float prize-art-wrap" aria-hidden>
        <DinnerTablePortrait />
      </div>
    )
  }

  return (
    <div className="prize-art-wrap">
      <CharacterSprite characterId="coral" variant="pamper" />
    </div>
  )
}
