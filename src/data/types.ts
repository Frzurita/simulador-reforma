export type CharacterId =
  | 'coral'
  | 'fran'
  | 'jesus'
  | 'emilio'
  | 'eugenio'
  | 'ventanas'
  | 'cocinas'
  | 'marmolista'
  | 'abraham'
  | 'mariaisabel'
  | 'perros'
  | 'gema'
  | 'pili'

export type Stage =
  | 'planos'
  | 'demolicion'
  | 'bano'
  | 'cocina'
  | 'suelo'
  | 'ventanas'
  | 'imprevistos'
  | 'final'

export interface Resources {
  presupuesto: number
  progreso: number
  cordura: number
}

export interface ChoiceEffects {
  presupuesto?: number
  progreso?: number
  cordura?: number
  /** Instant game over on cordura (Emilio traps) */
  instantCorduraKill?: boolean
}

export interface CardChoice {
  label: string
  effects: ChoiceEffects
}

export interface GameCard {
  id: string
  character: CharacterId
  text: string
  stage: Stage
  left: CardChoice
  right: CardChoice
}

export type Screen = 'intro' | 'playing' | 'gameover' | 'prize'

export type DefeatReason = 'presupuesto' | 'cordura' | 'progreso'

export interface GameState {
  screen: Screen
  resources: Resources
  deck: GameCard[]
  cardIndex: number
  defeatReason: DefeatReason | null
  rejectedEmilio: number
}
