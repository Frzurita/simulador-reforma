import { CARDS, STAGE_ORDER } from '../data/cards'
import type {
  ChoiceEffects,
  DefeatReason,
  GameCard,
  GameState,
  Resources,
  Screen,
} from '../data/types'

export const INITIAL_RESOURCES: Resources = {
  presupuesto: 70,
  progreso: 15,
  cordura: 75,
}

function shuffle<T>(items: T[]): T[] {
  const arr = [...items]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

export function buildDeck(): GameCard[] {
  const byStage = STAGE_ORDER.flatMap((stage) => {
    const stageCards = CARDS.filter((c) => c.stage === stage)
    if (stage === 'final') return stageCards
    return shuffle(stageCards)
  })
  return byStage
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
