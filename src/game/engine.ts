import { CARDS, STAGE_ORDER } from '../data/cards'
import type {
  ChoiceEffects,
  DefeatReason,
  GameCard,
  GameState,
  Resources,
  Screen,
  Stage,
} from '../data/types'

export const INITIAL_RESOURCES: Resources = {
  presupuesto: 70,
  progreso: 20,
  cordura: 75,
}

/** Cupos por etapa (24) + carta final = 25 cartas por partida */
const STAGE_QUOTA: Record<Exclude<Stage, 'final'>, number> = {
  planos: 3,
  demolicion: 4,
  bano: 3,
  cocina: 4,
  suelo: 3,
  ventanas: 3,
  imprevistos: 4,
}

function shuffle<T>(items: T[]): T[] {
  const arr = [...items]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

function pickN<T>(items: T[], n: number): T[] {
  return shuffle(items).slice(0, Math.min(n, items.length))
}

/** Si no salió Emilio, cuela al menos una de sus cartas (misma etapa si puede). */
function ensureEmilio(deck: GameCard[]): void {
  if (deck.some((c) => c.character === 'emilio')) return

  const emilios = CARDS.filter((c) => c.character === 'emilio')
  if (emilios.length === 0) return

  const emilio = emilios[Math.floor(Math.random() * emilios.length)]!
  const sameStageIdx = deck.findIndex(
    (c) => c.stage === emilio.stage && c.stage !== 'final',
  )
  if (sameStageIdx >= 0) {
    deck[sameStageIdx] = emilio
    return
  }

  const anyIdx = deck.findIndex((c) => c.stage !== 'final')
  if (anyIdx >= 0) deck[anyIdx] = emilio
}

export function buildDeck(): GameCard[] {
  const deck: GameCard[] = []

  for (const stage of STAGE_ORDER) {
    if (stage === 'final') {
      deck.push(...CARDS.filter((c) => c.stage === 'final'))
      continue
    }

    const pool = CARDS.filter((c) => c.stage === stage)
    deck.push(...pickN(pool, STAGE_QUOTA[stage]))
  }

  ensureEmilio(deck)
  return deck
}

export function createInitialState(): GameState {
  return {
    screen: 'intro',
    resources: { ...INITIAL_RESOURCES },
    deck: buildDeck(),
    cardIndex: 0,
    defeatReason: null,
    rejectedEmilio: 0,
  }
}

function clamp(n: number, min = 0, max = 100) {
  return Math.max(min, Math.min(max, n))
}

export function applyEffects(
  resources: Resources,
  effects: ChoiceEffects,
): { resources: Resources; instantKill: boolean } {
  if (effects.instantCorduraKill) {
    return {
      resources: { ...resources, cordura: 0 },
      instantKill: true,
    }
  }

  return {
    resources: {
      presupuesto: clamp(resources.presupuesto + (effects.presupuesto ?? 0)),
      progreso: clamp(resources.progreso + (effects.progreso ?? 0)),
      cordura: clamp(resources.cordura + (effects.cordura ?? 0)),
    },
    instantKill: false,
  }
}

export function checkOutcome(resources: Resources): {
  screen: Screen
  defeatReason: DefeatReason | null
} {
  if (resources.cordura <= 0) {
    return { screen: 'gameover', defeatReason: 'cordura' }
  }
  if (resources.presupuesto <= 0) {
    return { screen: 'gameover', defeatReason: 'presupuesto' }
  }
  if (resources.progreso >= 100) {
    return { screen: 'prize', defeatReason: null }
  }
  return { screen: 'playing', defeatReason: null }
}

export type GameAction =
  | { type: 'START' }
  | { type: 'CHOOSE'; side: 'left' | 'right' }
  | { type: 'RESTART' }

export function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'START':
      return {
        ...createInitialState(),
        screen: 'playing',
      }

    case 'RESTART':
      return createInitialState()

    case 'CHOOSE': {
      if (state.screen !== 'playing') return state
      const card = state.deck[state.cardIndex]
      if (!card) return state

      const choice = action.side === 'left' ? card.left : card.right
      const { resources } = applyEffects(state.resources, choice.effects)

      let rejectedEmilio = state.rejectedEmilio
      if (card.character === 'emilio' && !choice.effects.instantCorduraKill) {
        rejectedEmilio += 1
      }

      const outcome = checkOutcome(resources)

      if (outcome.screen !== 'playing') {
        return {
          ...state,
          resources,
          rejectedEmilio,
          screen: outcome.screen,
          defeatReason: outcome.defeatReason,
        }
      }

      const nextIndex = state.cardIndex + 1
      if (nextIndex >= state.deck.length) {
        // Fin del mazo: progreso > 60 → victoria; si no → final malo de progreso
        if (resources.progreso > 60) {
          return {
            ...state,
            resources: { ...resources, progreso: 100 },
            rejectedEmilio,
            screen: 'prize',
            defeatReason: null,
          }
        }
        return {
          ...state,
          resources,
          rejectedEmilio,
          screen: 'gameover',
          defeatReason: 'progreso',
        }
      }

      return {
        ...state,
        resources,
        rejectedEmilio,
        cardIndex: nextIndex,
      }
    }

    default:
      return state
  }
}

export function previewImpacts(effects: ChoiceEffects): {
  presupuesto: number
  progreso: number
  cordura: number
} {
  if (effects.instantCorduraKill) {
    return { presupuesto: 0, progreso: 0, cordura: -100 }
  }
  return {
    presupuesto: effects.presupuesto ?? 0,
    progreso: effects.progreso ?? 0,
    cordura: effects.cordura ?? 0,
  }
}
