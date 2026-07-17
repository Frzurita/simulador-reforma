import type { CharacterId } from '../data/types'
import { CHARACTERS } from '../data/characters'
import './CharacterSprite.css'

interface Props {
  characterId: CharacterId
  variant?: 'default' | 'pamper'
}

function shade(hex: string, amount: number): string {
  const n = hex.replace('#', '')
  const num = parseInt(n.length === 3 ? n.split('').map((c) => c + c).join('') : n, 16)
  const r = Math.min(255, Math.max(0, ((num >> 16) & 255) + amount))
  const g = Math.min(255, Math.max(0, ((num >> 8) & 255) + amount))
  const b = Math.min(255, Math.max(0, (num & 255) + amount))
  return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`
}

/** Shared bust portrait with per-character flair */
function BustPortrait({
  characterId,
}: {
  characterId: CharacterId
}) {
  const c = CHARACTERS[characterId]
  const skin = c.skin
  const skinDark = shade(c.skin, -28)
  const skinLight = shade(c.skin, 22)
  const hair = c.hair
  const hairDark = shade(c.hair, -30)
  const hairLight = shade(c.hair, 25)
  const shirt = c.shirt
  const shirtDark = shade(c.shirt, -35)
  const shirtLight = shade(c.shirt, 30)
  const accent = c.accent

  const longHair = ['coral', 'mariaisabel', 'gema', 'pili'].includes(characterId)
  const shortHair = ['fran', 'jesus', 'emilio', 'eugenio', 'ventanas', 'cocinas', 'marmolista', 'abraham'].includes(characterId)
  const greyHair = characterId === 'abraham'

  return (
    <svg
      className="pixel-svg"
      viewBox="0 0 64 72"
      width="168"
      height="189"
      shapeRendering="crispEdges"
      aria-hidden
    >
      {/* ground shadow */}
      <ellipse cx="32" cy="68" rx="18" ry="3" fill="#3d2e1e" opacity="0.22" />

      {/* torso */}
      <rect x="18" y="42" width="28" height="22" fill={shirt} />
      <rect x="18" y="42" width="6" height="22" fill={shirtDark} />
      <rect x="40" y="42" width="6" height="10" fill={shirtLight} />
      <rect x="30" y="42" width="4" height="22" fill={shirtDark} opacity="0.35" />

      {/* arms */}
      <rect x="10" y="44" width="8" height="8" fill={skin} />
      <rect x="10" y="44" width="3" height="8" fill={skinDark} />
      <rect x="46" y="44" width="8" height="8" fill={skin} />
      <rect x="51" y="44" width="3" height="8" fill={skinLight} />

      {/* neck */}
      <rect x="28" y="38" width="8" height="6" fill={skin} />
      <rect x="28" y="38" width="2" height="6" fill={skinDark} />

      {/* head */}
      {characterId === 'gema' ? (
        <>
          <rect x="20" y="14" width="24" height="22" fill={skin} />
          <rect x="20" y="14" width="4" height="22" fill={skinDark} />
          <rect x="40" y="14" width="4" height="12" fill={skinLight} />
          {/* mandíbula afilada */}
          <rect x="22" y="36" width="20" height="4" fill={skin} />
          <rect x="24" y="40" width="16" height="2" fill={skin} />
          <rect x="26" y="42" width="12" height="2" fill={skinDark} />
          <rect x="22" y="36" width="2" height="4" fill={skinDark} />
          <rect x="40" y="36" width="2" height="4" fill={skinLight} />
        </>
      ) : (
        <>
          <rect x="20" y="14" width="24" height="26" fill={skin} />
          <rect x="20" y="14" width="4" height="26" fill={skinDark} />
          <rect x="40" y="14" width="4" height="12" fill={skinLight} />
          <rect x="22" y="36" width="20" height="4" fill={skinDark} opacity="0.45" />
        </>
      )}

      {/* ears */}
      <rect x="16" y="24" width="4" height="6" fill={skin} />
      <rect x="44" y="24" width="4" height="6" fill={skinLight} />

      {/* hair back / long */}
      {longHair && (
        <>
          <rect x="14" y="18" width="6" height="28" fill={hair} />
          <rect x="44" y="18" width="6" height="28" fill={hair} />
          <rect x="14" y="40" width="6" height="8" fill={hairDark} />
          <rect x="44" y="40" width="6" height="8" fill={hairDark} />
        </>
      )}

      {/* hair top */}
      {(longHair || shortHair || greyHair) && (
        <>
          <rect x="18" y="8" width="28" height="12" fill={hair} />
          <rect x="16" y="12" width="4" height="10" fill={hair} />
          <rect x="44" y="12" width="4" height="10" fill={hair} />
          <rect x="20" y="6" width="24" height="4" fill={hairLight} />
          <rect x="18" y="14" width="6" height="4" fill={hairDark} />
        </>
      )}

      {/* bangs variants */}
      {characterId === 'coral' && (
        <>
          <rect x="22" y="16" width="8" height="6" fill={hair} />
          <rect x="34" y="16" width="8" height="6" fill={hair} />
        </>
      )}
      {characterId === 'gema' && (
        <rect x="24" y="16" width="16" height="4" fill={hair} />
      )}
      {characterId === 'pili' && (
        <>
          <rect x="20" y="16" width="6" height="8" fill={hair} />
          <rect x="38" y="16" width="6" height="8" fill={hair} />
        </>
      )}
      {characterId === 'fran' && (
        <rect x="22" y="16" width="20" height="4" fill={hair} />
      )}
      {characterId === 'mariaisabel' && (
        <>
          <rect x="22" y="16" width="6" height="6" fill={hair} />
          <rect x="36" y="16" width="6" height="6" fill={hair} />
          <rect x="16" y="22" width="4" height="18" fill={hairLight} />
          <rect x="44" y="22" width="4" height="18" fill={hairDark} />
        </>
      )}

      {/* eyes */}
      <rect x="24" y="24" width="4" height="4" fill="#1a120b" />
      <rect x="36" y="24" width="4" height="4" fill="#1a120b" />
      <rect x="25" y="24" width="1" height="1" fill="#fff" />
      <rect x="37" y="24" width="1" height="1" fill="#fff" />

      {/* brows */}
      <rect x="23" y="22" width="6" height="2" fill={hairDark} />
      <rect x="35" y="22" width="6" height="2" fill={hairDark} />

      {/* blush */}
      <rect x="22" y="30" width="4" height="2" fill="#e89a8a" opacity="0.55" />
      <rect x="38" y="30" width="4" height="2" fill="#e89a8a" opacity="0.55" />

      {/* nose */}
      <rect x="31" y="28" width="2" height="3" fill={skinDark} />

      {/* mouth */}
      {characterId === 'emilio' ? (
        <rect x="28" y="34" width="8" height="2" fill="#5d4037" />
      ) : characterId === 'abraham' ? (
        <>
          <rect x="27" y="33" width="2" height="2" fill="#8b4513" />
          <rect x="29" y="34" width="6" height="2" fill="#8b4513" />
          <rect x="35" y="33" width="2" height="2" fill="#8b4513" />
          <rect x="30" y="35" width="4" height="1" fill="#c0392b" opacity="0.45" />
        </>
      ) : (
        <>
          <rect x="28" y="34" width="8" height="2" fill="#8b4513" />
          <rect x="30" y="35" width="4" height="1" fill="#c0392b" opacity="0.5" />
        </>
      )}

      {/* Fran - barba corta + bigote */}
      {characterId === 'fran' && (
        <>
          <rect x="26" y="32" width="12" height="3" fill={hair} />
          <rect x="28" y="33" width="8" height="2" fill={hairDark} />
          <rect x="20" y="32" width="4" height="8" fill={hair} />
          <rect x="40" y="32" width="4" height="8" fill={hair} />
          <rect x="22" y="36" width="20" height="4" fill={hair} />
          <rect x="24" y="38" width="16" height="2" fill={hairDark} />
        </>
      )}

      {/* glasses - Abraham */}
      {c.accessory === 'glasses' && (
        <>
          <rect x="22" y="23" width="8" height="2" fill="#2c1810" />
          <rect x="22" y="28" width="8" height="2" fill="#2c1810" />
          <rect x="22" y="23" width="2" height="7" fill="#2c1810" />
          <rect x="28" y="23" width="2" height="7" fill="#2c1810" />
          <rect x="34" y="23" width="8" height="2" fill="#2c1810" />
          <rect x="34" y="28" width="8" height="2" fill="#2c1810" />
          <rect x="34" y="23" width="2" height="7" fill="#2c1810" />
          <rect x="40" y="23" width="2" height="7" fill="#2c1810" />
          <rect x="30" y="25" width="4" height="2" fill="#2c1810" />
        </>
      )}

      {/* hardhat / helmet */}
      {(c.accessory === 'hardhat' || c.accessory === 'helmet') && (
        <>
          <rect x="16" y="4" width="32" height="10" fill={accent} />
          <rect x="14" y="10" width="36" height="6" fill={accent} />
          <rect x="18" y="4" width="28" height="3" fill={shade(accent, 40)} />
          <rect x="16" y="12" width="8" height="4" fill={shade(accent, -40)} />
          {c.accessory === 'hardhat' && (
            <rect x="28" y="6" width="8" height="4" fill="#fff" opacity="0.35" />
          )}
        </>
      )}

      {/* plans - Jesus */}
      {c.accessory === 'plans' && (
        <>
          <rect x="48" y="38" width="12" height="16" fill={accent} />
          <rect x="48" y="38" width="12" height="2" fill="#8b7355" />
          <rect x="48" y="52" width="12" height="2" fill="#8b7355" />
          <rect x="48" y="38" width="2" height="16" fill="#8b7355" />
          <rect x="58" y="38" width="2" height="16" fill="#8b7355" />
          <rect x="50" y="42" width="8" height="2" fill="#8b7355" />
          <rect x="50" y="46" width="8" height="2" fill="#8b7355" />
          <rect x="50" y="50" width="5" height="2" fill="#8b7355" />
        </>
      )}

      {/* tool accents */}
      {characterId === 'eugenio' && (
        <rect x="8" y="48" width="4" height="14" fill="#5d4037" />
      )}
      {characterId === 'ventanas' && (
        <>
          <rect x="50" y="40" width="10" height="14" fill="#87ceeb" />
          <rect x="50" y="40" width="10" height="2" fill="#2c3e50" />
          <rect x="50" y="52" width="10" height="2" fill="#2c3e50" />
          <rect x="50" y="40" width="2" height="14" fill="#2c3e50" />
          <rect x="58" y="40" width="2" height="14" fill="#2c3e50" />
          <rect x="54" y="40" width="2" height="14" fill="#2c3e50" />
        </>
      )}
      {characterId === 'cocinas' && (
        <>
          <rect x="48" y="46" width="12" height="8" fill="#ecf0f1" />
          <rect x="48" y="46" width="12" height="2" fill="#7f8c8d" />
          <rect x="48" y="52" width="12" height="2" fill="#7f8c8d" />
          <rect x="48" y="46" width="2" height="8" fill="#7f8c8d" />
          <rect x="58" y="46" width="2" height="8" fill="#7f8c8d" />
        </>
      )}
      {characterId === 'marmolista' && (
        <>
          <rect x="48" y="44" width="12" height="10" fill="#d5d8dc" />
          <rect x="50" y="46" width="8" height="2" fill="#aab0b6" />
          <rect x="49" y="50" width="3" height="2" fill="#922b21" opacity="0.7" />
        </>
      )}
      {characterId === 'emilio' && (
        <rect x="6" y="50" width="10" height="4" fill="#f1c40f" />
      )}
    </svg>
  )
}

function DogsPortrait() {
  // Pomeranians, both sable: fluffy body, pointed ears, fox face, plumed tail
  const sable = '#c4a06a'
  const sableMid = '#a67c52'
  const sableDark = '#6b4423'
  const sableLight = '#e0c090'
  const cream = '#f0e0c0'

  return (
    <svg
      className="pixel-svg"
      viewBox="0 0 72 60"
      width="188"
      height="156"
      shapeRendering="crispEdges"
      aria-hidden
    >
      <ellipse cx="36" cy="56" rx="24" ry="3" fill="#3d2e1e" opacity="0.2" />

      {/* —— Chewie (left) —— */}
      <rect x="24" y="28" width="6" height="10" fill={sable} />
      <rect x="26" y="24" width="4" height="8" fill={sableLight} />
      <rect x="6" y="32" width="20" height="16" fill={sable} />
      <rect x="4" y="34" width="4" height="12" fill={sableDark} />
      <rect x="8" y="30" width="16" height="4" fill={sableLight} />
      <rect x="12" y="38" width="8" height="6" fill={cream} />
      <rect x="8" y="46" width="5" height="8" fill={sableMid} />
      <rect x="19" y="46" width="5" height="8" fill={sableMid} />
      <rect x="8" y="52" width="5" height="2" fill={sableDark} />
      <rect x="19" y="52" width="5" height="2" fill={sableDark} />
      <rect x="8" y="14" width="16" height="18" fill={sable} />
      <rect x="6" y="16" width="4" height="14" fill={sableDark} />
      <rect x="10" y="12" width="12" height="4" fill={sableLight} />
      <rect x="4" y="22" width="6" height="8" fill={sable} />
      <rect x="22" y="22" width="6" height="8" fill={sable} />
      <rect x="8" y="6" width="5" height="10" fill={sableMid} />
      <rect x="9" y="8" width="3" height="6" fill={cream} />
      <rect x="19" y="6" width="5" height="10" fill={sableMid} />
      <rect x="20" y="8" width="3" height="6" fill={cream} />
      <rect x="8" y="4" width="5" height="2" fill={sableDark} />
      <rect x="19" y="4" width="5" height="2" fill={sableDark} />
      <rect x="12" y="24" width="8" height="6" fill={cream} />
      <rect x="14" y="28" width="4" height="3" fill={sableDark} />
      <rect x="12" y="20" width="3" height="3" fill="#1a120b" />
      <rect x="17" y="20" width="3" height="3" fill="#1a120b" />
      <rect x="12" y="20" width="1" height="1" fill="#fff" />
      <rect x="17" y="20" width="1" height="1" fill="#fff" />

      {/* —— Tyrion (right) —— */}
      <rect x="62" y="28" width="6" height="10" fill={sable} />
      <rect x="64" y="24" width="4" height="8" fill={sableLight} />
      <rect x="44" y="32" width="20" height="16" fill={sable} />
      <rect x="42" y="34" width="4" height="12" fill={sableDark} />
      <rect x="46" y="30" width="16" height="4" fill={sableLight} />
      <rect x="50" y="38" width="8" height="6" fill={cream} />
      <rect x="46" y="46" width="5" height="8" fill={sableMid} />
      <rect x="57" y="46" width="5" height="8" fill={sableMid} />
      <rect x="46" y="52" width="5" height="2" fill={sableDark} />
      <rect x="57" y="52" width="5" height="2" fill={sableDark} />
      <rect x="46" y="14" width="16" height="18" fill={sable} />
      <rect x="44" y="16" width="4" height="14" fill={sableDark} />
      <rect x="48" y="12" width="12" height="4" fill={sableLight} />
      <rect x="42" y="22" width="6" height="8" fill={sable} />
      <rect x="60" y="22" width="6" height="8" fill={sable} />
      <rect x="46" y="6" width="5" height="10" fill={sableMid} />
      <rect x="47" y="8" width="3" height="6" fill={cream} />
      <rect x="57" y="6" width="5" height="10" fill={sableMid} />
      <rect x="58" y="8" width="3" height="6" fill={cream} />
      <rect x="46" y="4" width="5" height="2" fill={sableDark} />
      <rect x="57" y="4" width="5" height="2" fill={sableDark} />
      <rect x="50" y="24" width="8" height="6" fill={cream} />
      <rect x="52" y="28" width="4" height="3" fill={sableDark} />
      <rect x="50" y="20" width="3" height="3" fill="#1a120b" />
      <rect x="55" y="20" width="3" height="3" fill="#1a120b" />
      <rect x="50" y="20" width="1" height="1" fill="#fff" />
      <rect x="55" y="20" width="1" height="1" fill="#fff" />

      {/* bone */}
      <rect x="30" y="42" width="12" height="4" fill="#f5f0e6" />
      <rect x="28" y="40" width="4" height="8" fill="#f5f0e6" />
      <rect x="40" y="40" width="4" height="8" fill="#f5f0e6" />
    </svg>
  )
}

function CoralPamperPortrait() {
  // Coral mimándose + cara sonriente de la médica estética
  const skin = '#e8b896'
  const skinDark = '#d4a074'
  const skinLight = '#f0c8a8'
  const hair = '#3d2314'
  const robe = '#f3e6d8'
  const robeDark = '#e0d0bc'
  const towel = '#f7f1e8'
  const towelShade = '#e8dfd2'

  return (
    <svg
      className="pixel-svg"
      viewBox="0 0 64 72"
      width="168"
      height="189"
      shapeRendering="crispEdges"
      aria-hidden
    >
      <ellipse cx="32" cy="68" rx="18" ry="3" fill="#3d2e1e" opacity="0.2" />

      {/* brillos */}
      <rect x="6" y="16" width="2" height="2" fill="#f0c419" />
      <rect x="56" y="20" width="2" height="2" fill="#f0c419" />
      <rect x="8" y="38" width="2" height="2" fill="#fff8e0" />
      <rect x="54" y="34" width="2" height="2" fill="#fff8e0" />
      <rect x="4" y="28" width="2" height="2" fill="#fce4ec" />
      <rect x="58" y="42" width="2" height="2" fill="#fce4ec" />

      {/* bata / albornoz */}
      <rect x="14" y="44" width="36" height="20" fill={robe} />
      <rect x="14" y="44" width="6" height="20" fill={robeDark} />
      <rect x="30" y="44" width="4" height="20" fill={robeDark} opacity="0.55" />
      <rect x="18" y="44" width="10" height="6" fill="#fff" />
      <rect x="36" y="44" width="10" height="6" fill="#fff" />
      <rect x="20" y="54" width="24" height="3" fill={robeDark} />

      {/* cuello */}
      <rect x="28" y="40" width="8" height="6" fill={skin} />

      {/* cabeza */}
      <rect x="20" y="18" width="24" height="24" fill={skin} />
      <rect x="20" y="18" width="4" height="24" fill={skinDark} />
      <rect x="40" y="18" width="4" height="10" fill={skinLight} />

      {/* toalla en la cabeza */}
      <rect x="16" y="8" width="32" height="14" fill={towel} />
      <rect x="14" y="12" width="6" height="12" fill={towel} />
      <rect x="44" y="12" width="6" height="12" fill={towel} />
      <rect x="18" y="6" width="28" height="4" fill="#fff" />
      <rect x="22" y="14" width="20" height="4" fill={towelShade} />
      <rect x="40" y="4" width="10" height="8" fill={towel} />
      <rect x="44" y="2" width="6" height="4" fill="#fff" />

      {/* mechón */}
      <rect x="22" y="18" width="6" height="4" fill={hair} />
      <rect x="36" y="18" width="6" height="4" fill={hair} />

      {/* ojos sonrientes (cara de la médica) */}
      <rect x="24" y="28" width="2" height="2" fill="#1a120b" />
      <rect x="26" y="27" width="2" height="2" fill="#1a120b" />
      <rect x="28" y="28" width="2" height="2" fill="#1a120b" />
      <rect x="36" y="28" width="2" height="2" fill="#1a120b" />
      <rect x="38" y="27" width="2" height="2" fill="#1a120b" />
      <rect x="40" y="28" width="2" height="2" fill="#1a120b" />

      {/* rubor */}
      <rect x="22" y="32" width="5" height="2" fill="#e89a8a" opacity="0.7" />
      <rect x="37" y="32" width="5" height="2" fill="#e89a8a" opacity="0.7" />

      {/* sonrisa abierta de la médica */}
      <rect x="27" y="35" width="2" height="2" fill="#8b4513" />
      <rect x="29" y="36" width="6" height="2" fill="#8b4513" />
      <rect x="35" y="35" width="2" height="2" fill="#8b4513" />
      <rect x="30" y="37" width="4" height="1" fill="#c0392b" opacity="0.45" />

      {/* tarrito de crema */}
      <rect x="48" y="48" width="8" height="8" fill="#fce4ec" />
      <rect x="48" y="48" width="8" height="2" fill="#f8bbd0" />
      <rect x="50" y="52" width="4" height="2" fill="#e91e63" opacity="0.5" />
    </svg>
  )
}

export function CharacterSprite({ characterId, variant = 'default' }: Props) {
  if (variant === 'pamper') {
    return (
      <div className="sprite sprite--float" aria-hidden>
        <CoralPamperPortrait />
      </div>
    )
  }

  if (characterId === 'perros') {
    return (
      <div className="sprite sprite--float" aria-hidden>
        <DogsPortrait />
      </div>
    )
  }

  return (
    <div className="sprite sprite--float" aria-hidden>
      <BustPortrait characterId={characterId} />
    </div>
  )
}
