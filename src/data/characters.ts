import type { CharacterId } from './types'

export interface CharacterDef {
  id: CharacterId
  name: string
  role: string
  /** CSS color accents for pixel sprite */
  skin: string
  hair: string
  shirt: string
  accent: string
  accessory?: 'helmet' | 'glasses' | 'mask' | 'plans' | 'bone' | 'hardhat'
}

export const CHARACTERS: Record<CharacterId, CharacterDef> = {
  coral: {
    id: 'coral',
    name: 'Coral',
    role: 'Jefa de obra (emocional)',
    skin: '#e8b896',
    hair: '#3d2314',
    shirt: '#c4a484',
    accent: '#8b5e3c',
  },
  fran: {
    id: 'fran',
    name: 'Fran',
    role: 'Copiloto del presupuesto',
    skin: '#d4a574',
    hair: '#6b4423',
    shirt: '#5c7a6a',
    accent: '#3d5a4c',
  },
  jesus: {
    id: 'jesus',
    name: 'Jesús',
    role: 'Arquitecto',
    skin: '#e0b090',
    hair: '#4a3728',
    shirt: '#2c3e50',
    accent: '#f4e4bc',
    accessory: 'plans',
  },
  emilio: {
    id: 'emilio',
    name: 'Emilio',
    role: '20 eurillos',
    skin: '#c9956c',
    hair: '#1a1a1a',
    shirt: '#e67e22',
    accent: '#f1c40f',
    accessory: 'hardhat',
  },
  eugenio: {
    id: 'eugenio',
    name: 'Eugenio',
    role: 'Albañil de confianza',
    skin: '#c48a5c',
    hair: '#3b2f2f',
    shirt: '#7f8c8d',
    accent: '#f39c12',
    accessory: 'helmet',
  },
  ventanas: {
    id: 'ventanas',
    name: 'Chico ventanas',
    role: 'Persianas & maineles',
    skin: '#dbb08a',
    hair: '#5d4037',
    shirt: '#3498db',
    accent: '#ecf0f1',
  },
  cocinas: {
    id: 'cocinas',
    name: 'Chico cocinas',
    role: 'Cajones indestructibles (?)',
    skin: '#e0b090',
    hair: '#2c1810',
    shirt: '#27ae60',
    accent: '#f5f5f5',
  },
  marmolista: {
    id: 'marmolista',
    name: 'Marmolista',
    role: 'Piedra con rebaja',
    skin: '#d4a574',
    hair: '#6d4c41',
    shirt: '#95a5a6',
    accent: '#bdc3c7',
  },
  abraham: {
    id: 'abraham',
    name: 'Abraham',
    role: 'Suegro / supervisor',
    skin: '#d2a679',
    hair: '#f0ebe3',
    shirt: '#8d6e63',
    accent: '#5d4037',
  },
  mariaisabel: {
    id: 'mariaisabel',
    name: 'Mª Isabel',
    role: 'Suegra con opinión',
    skin: '#e8b896',
    hair: '#8b3a2a',
    shirt: '#ce93d8',
    accent: '#f8bbd0',
  },
  perros: {
    id: 'perros',
    name: 'Chewie & Tyrion',
    role: 'Supervisión peluda',
    skin: '#c4a06a',
    hair: '#8a6239',
    shirt: '#8d6e63',
    accent: '#efebe9',
    accessory: 'bone',
  },
  gema: {
    id: 'gema',
    name: 'Gema',
    role: 'Amiga con ideas',
    skin: '#e0b090',
    hair: '#d4a84b',
    shirt: '#e91e63',
    accent: '#fce4ec',
  },
  pili: {
    id: 'pili',
    name: 'Pili',
    role: 'Amiga realista',
    skin: '#dbb08a',
    hair: '#3e2723',
    shirt: '#9c27b0',
    accent: '#f3e5f5',
  },
}
