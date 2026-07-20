export type PrizeId = 'cena' | 'neuromoduladores'

export interface Prize {
  id: PrizeId
  boxLabel: string
  boxAccent: string
  title: string
  message: string
  art: 'dinner' | 'pamper'
}

export const PRIZE_SCREEN = {
  title: 'Reforma completada',
  intro: 'Has sobrevivido a la obra. Hay dos regalos para ti.',
  bothOpened:
    'Felicidades preciosa! Para la chica mas increíble, las aventuras mas increíbles.',
  signOff: 'Te quiero.\n— Fran',
}

export const PRIZES: Prize[] = [
  {
    id: 'cena',
    boxLabel: 'Cena',
    boxAccent: '#8b3a3a',
    title: 'Cena en La Voltereta',
    art: 'dinner',
    message: `Coral,

Reserva en La Voltereta: una mesa para dos, sin planos ni presupuestos encima. El 21/07/2026 a las 21:30.

Solo nosotros, una buena cena… y celebrar tus 31.

— Fran`,
  },
  {
    id: 'neuromoduladores',
    boxLabel: 'Mimo',
    boxAccent: '#6b8f71',
    title: 'Sesión de neuromoduladores',
    art: 'pamper',
    message: `Coral,

Has sobrevivido a maineles rebeldes y a los 20 eurillos.

Esta parte también era para ti: una sesión de neuromoduladores, para mimarte un rato sin pensar en presupuestos.

— Fran`,
  },
]
