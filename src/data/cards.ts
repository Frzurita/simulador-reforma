import type { GameCard } from './types'

export const CARDS: GameCard[] = [
  // —— Planos ——
  {
    id: 'fran-bajar-presupuesto',
    character: 'fran',
    stage: 'planos',
    text: 'Tenemos que hablar con Jesús para bajar el presupuesto. Es muy caro, algo se podrá rascar.',
    left: {
      label: 'Llama tú, que se pone nervioso',
      effects: { presupuesto: 8, cordura: -5, progreso: 2 },
    },
    right: {
      label: 'Vamos los dos, frente común',
      effects: { presupuesto: 12, cordura: -2, progreso: 4 },
    },
  },
  {
    id: 'jesus-cocina-cuarto',
    character: 'jesus',
    stage: 'planos',
    text: 'Te mando otra planimetría con los cambios. He puesto la cocina al lado del cuarto, ¿te parece bien?',
    left: {
      label: 'Jesús. No.',
      effects: { cordura: 5, progreso: -3 },
    },
    right: {
      label: '…a ver el PDF',
      effects: { cordura: -10, progreso: 2, presupuesto: -5 },
    },
  },
  {
    id: 'jesus-sin-tabique',
    character: 'jesus',
    stage: 'planos',
    text: 'Te paso planimetría sin tabique entre el trastero y el cuarto.',
    left: {
      label: 'Eso no era el brief',
      effects: { cordura: 3, progreso: 1 },
    },
    right: {
      label: 'Open concept total',
      effects: { progreso: 8, cordura: -8, presupuesto: -6 },
    },
  },
  {
    id: 'jesus-pladur',
    character: 'jesus',
    stage: 'demolicion',
    text: 'Al final, ¿ponemos muros de pladur?',
    left: {
      label: 'Pladur y a correr',
      effects: { presupuesto: 5, progreso: 6, cordura: -2 },
    },
    right: {
      label: 'Ladrillo, como Dios manda',
      effects: { presupuesto: -10, progreso: 4, cordura: 4 },
    },
  },

  // —— Emilio traps ——
  {
    id: 'emilio-suelo',
    character: 'emilio',
    stage: 'suelo',
    text: 'Coral, yo te hago el suelo por 20 eurillos.',
    left: {
      label: 'Ni de broma',
      effects: { cordura: 8, progreso: -2 },
    },
    right: {
      label: 'Trato hecho',
      effects: { instantCorduraKill: true },
    },
  },
  {
    id: 'emilio-campana',
    character: 'emilio',
    stage: 'cocina',
    text: '¿Quieres que te mueva la campana de sitio? Eso es fácil, en un momentillo lo tenemos hecho.',
    left: {
      label: 'Eso lo hace Eugenio',
      effects: { presupuesto: -4, progreso: 3, cordura: 2 },
    },
    right: {
      label: 'Venga, Emilio',
      effects: { instantCorduraKill: true },
    },
  },
  {
    id: 'emilio-ventanas',
    character: 'emilio',
    stage: 'ventanas',
    text: 'Yo te pongo las ventanas por 20 eurillos, eso es rápido.',
    left: {
      label: 'Prefiero al de las ventanas',
      effects: { presupuesto: -8, progreso: 5, cordura: 3 },
    },
    right: {
      label: '20 eurillos es 20 eurillos',
      effects: { instantCorduraKill: true },
    },
  },

  // —— Cocina ——
  {
    id: 'cocinas-cajon',
    character: 'cocinas',
    stage: 'cocina',
    text: '¿Quieres que me suba a uno de los cajones? ¡Son bastante fuertes!',
    left: {
      label: 'Bájate ahora mismo',
      effects: { cordura: 5, progreso: 1 },
    },
    right: {
      label: 'Si aguanta, aguanta',
      effects: { cordura: -12, progreso: 2, presupuesto: -3 },
    },
  },
  {
    id: 'eugenio-campana',
    character: 'eugenio',
    stage: 'cocina',
    text: 'La campana… ¿la movemos de verdad o “ya se verá”?',
    left: {
      label: 'Se mueve. Es sagrado',
      effects: { presupuesto: -12, progreso: 10, cordura: -5 },
    },
    right: {
      label: 'La dejamos… de momento',
      effects: { presupuesto: 6, progreso: -6, cordura: -8 },
    },
  },
  {
    id: 'fran-cocina-salon',
    character: 'fran',
    stage: 'cocina',
    text: 'Cari, si abrimos cocina-salón va a entrar polvo al sofá durante meses.',
    left: {
      label: 'Sofá tapado y fe en el proceso',
      effects: { progreso: 8, cordura: -6, presupuesto: -4 },
    },
    right: {
      label: 'Fase 2, por sanidad mental',
      effects: { presupuesto: 5, progreso: -5, cordura: 8 },
    },
  },
  {
    id: 'marmol-roto',
    character: 'marmolista',
    stage: 'cocina',
    text: 'El mármol se ha roto de camino. ¿Quieres que te lo ponga con una rebajita?',
    left: {
      label: 'Otro nuevo, sin drama',
      effects: { presupuesto: -15, progreso: 4, cordura: 2 },
    },
    right: {
      label: 'Rebaja y a vivir con la grieta',
      effects: { presupuesto: 8, cordura: -15, progreso: 2 },
    },
  },

  // —— Baño / vestidor ——
  {
    id: 'jesus-desague',
    character: 'jesus',
    stage: 'bano',
    text: 'La toma de desagüe para el baño va a tener que costar un poco más.',
    left: {
      label: 'Ok, es crítico',
      effects: { presupuesto: -10, progreso: 8, cordura: -3 },
    },
    right: {
      label: '¿Y si… no?',
      effects: { presupuesto: 5, progreso: -8, cordura: -10 },
    },
  },
  {
    id: 'jesus-soleria',
    character: 'jesus',
    stage: 'bano',
    text: 'La solería es muy pequeña: el albañil tendrá que estar una semana más colocando azulejos… con su coste.',
    left: {
      label: 'Que siga, queremos ese acabado',
      effects: { presupuesto: -12, progreso: 9, cordura: -4 },
    },
    right: {
      label: 'Cambiamos a formato más grande',
      effects: { presupuesto: -4, progreso: 3, cordura: -2 },
    },
  },
  {
    id: 'eugenio-m2',
    character: 'eugenio',
    stage: 'suelo',
    text: '¿Hablamos del precio por metro cuadrado de la mano de obra para el suelo?',
    left: {
      label: 'Regateo amable',
      effects: { presupuesto: 10, progreso: 2, cordura: -3 },
    },
    right: {
      label: 'Pago lo que diga, pero que quede fino',
      effects: { presupuesto: -10, progreso: 8, cordura: 5 },
    },
  },
  {
    id: 'fran-suelo-tardes',
    character: 'fran',
    stage: 'suelo',
    text: 'Cari, yo creo que podríamos hacer el suelo en las tardes libres. ¿Qué me dices?',
    left: {
      label: 'Romántico y barato',
      effects: { presupuesto: 15, progreso: 4, cordura: -18 },
    },
    right: {
      label: 'Ni se te ocurra',
      effects: { presupuesto: -8, cordura: 10, progreso: 3 },
    },
  },
  {
    id: 'fran-ikea',
    character: 'fran',
    stage: 'bano',
    text: '¿Y si ponemos los armarios del vestidor de IKEA? Todavía estamos a tiempo.',
    left: {
      label: 'IKEA forever',
      effects: { presupuesto: 12, progreso: 5, cordura: -4 },
    },
    right: {
      label: 'A medida, dormimos tranquilos',
      effects: { presupuesto: -14, progreso: 6, cordura: 6 },
    },
  },
  {
    id: 'fran-recortar',
    character: 'fran',
    stage: 'imprevistos',
    text: 'Cari, creo que tenemos que quitar algo de la reforma porque no llegamos al presupuesto.',
    left: {
      label: 'Recortamos nice-to-have',
      effects: { presupuesto: 14, progreso: -6, cordura: -4 },
    },
    right: {
      label: 'Recortamos ocio, no la casa',
      effects: { presupuesto: 8, cordura: -12, progreso: 2 },
    },
  },

  // —— Ventanas & escalera ——
  {
    id: 'ventanas-persianas',
    character: 'ventanas',
    stage: 'ventanas',
    text: 'Las ventanas pueden hacerse para septiembre. Al final, ¿con persianas o sin ellas?',
    left: {
      label: 'Con persianas',
      effects: { presupuesto: -10, progreso: 6, cordura: 2 },
    },
    right: {
      label: 'Sin, más limpio',
      effects: { presupuesto: -4, progreso: 4, cordura: -3 },
    },
  },
  {
    id: 'ventanas-mainel',
    character: 'ventanas',
    stage: 'ventanas',
    text: 'Al final yo creo que se ve bien con el mainel un poco a la izquierda. ¿Qué te parece?',
    left: {
      label: 'Céntralo. Ya.',
      effects: { cordura: 4, progreso: 1 },
    },
    right: {
      label: 'Si tú lo ves…',
      effects: { cordura: -12, progreso: 2 },
    },
  },
  {
    id: 'eugenio-barandilla',
    character: 'eugenio',
    stage: 'ventanas',
    text: 'Barandilla nueva en la escalera: ¿hierro simple o “la bonita”?',
    left: {
      label: 'La que no mate el presupuesto',
      effects: { presupuesto: 6, progreso: 4, cordura: -2 },
    },
    right: {
      label: 'La bonita, es de recibidor',
      effects: { presupuesto: -12, progreso: 7, cordura: 5 },
    },
  },

  // —— Entorno cómico ——
  {
    id: 'abraham-epoca',
    character: 'abraham',
    stage: 'imprevistos',
    text: 'En mi época esto se hacía en un mes y con menos lío.',
    left: {
      label: 'Sonríe y respira',
      effects: { cordura: -5 },
    },
    right: {
      label: 'Explícale el pladur 20 minutos',
      effects: { cordura: -10, progreso: 1 },
    },
  },
  {
    id: 'mi-bano-izquierda',
    character: 'mariaisabel',
    stage: 'planos',
    text: '¿Segura que el baño a la izquierda? Yo lo veía mejor…',
    left: {
      label: 'Gracias, el plano ya está',
      effects: { cordura: 3 },
    },
    right: {
      label: '…¿lo comentamos con Jesús?',
      effects: { cordura: -8, progreso: -4, presupuesto: -3 },
    },
  },
  {
    id: 'perros-cemento',
    character: 'perros',
    stage: 'demolicion',
    text: 'Chewie y Tyrion han adoptado un saco de cemento como cama.',
    left: {
      label: 'Sacar perros de la zona de obra',
      effects: { cordura: 6, progreso: 2, presupuesto: -2 },
    },
    right: {
      label: 'Dejarles: supervisión de calidad',
      effects: { cordura: -8, progreso: -3 },
    },
  },
  {
    id: 'gema-isla',
    character: 'gema',
    stage: 'bano',
    text: 'Pili y yo pensamos que el vestidor necesita isla central.',
    left: {
      label: 'Amigas, no',
      effects: { cordura: 4, presupuesto: 2 },
    },
    right: {
      label: 'Islaaaaaaaaa',
      effects: { presupuesto: -16, progreso: 5, cordura: -6 },
    },
  },
  {
    id: 'pili-llorar',
    character: 'pili',
    stage: 'cocina',
    text: 'Si abrís cocina-salón, ¿dónde lloráis cuando se atrasa la obra?',
    left: {
      label: 'En el baño nuevo, con eco',
      effects: { cordura: 5 },
    },
    right: {
      label: 'En el coche, como adultos',
      effects: { cordura: 8, progreso: -1 },
    },
  },
  {
    id: 'jesus-15cm',
    character: 'jesus',
    stage: 'imprevistos',
    text: 'Pequeño cambio: el baño gira 15 cm. “Casi no se nota”.',
    left: {
      label: 'Casi no se nota = se nota',
      effects: { cordura: 2, progreso: 1 },
    },
    right: {
      label: 'Confío en ti',
      effects: { progreso: 6, cordura: -9, presupuesto: -5 },
    },
  },
  {
    id: 'eugenio-hueco',
    character: 'eugenio',
    stage: 'demolicion',
    text: 'Hay un tabique que “suena a hueco raro”.',
    left: {
      label: 'Investigar antes de seguir',
      effects: { presupuesto: -6, progreso: -2, cordura: 4 },
    },
    right: {
      label: 'Seguir y rezar',
      effects: { presupuesto: 3, progreso: 5, cordura: -10 },
    },
  },
  {
    id: 'coral-tres-presupuestos',
    character: 'coral',
    stage: 'suelo',
    text: 'Lleváis tres presupuestos distintos del mismo suelo.',
    left: {
      label: 'Excel + café',
      effects: { presupuesto: 6, cordura: -6, progreso: 2 },
    },
    right: {
      label: 'Eliges el del medio y punto',
      effects: { presupuesto: -2, cordura: 8, progreso: 3 },
    },
  },

  // —— Carta final ——
  {
    id: 'final-obra',
    character: 'fran',
    stage: 'final',
    text: 'Cari… ¿damos la obra por terminada? Queda polvo, pero también una casa.',
    left: {
      label: 'Un último retoque…',
      effects: { progreso: 12, presupuesto: -5, cordura: -4 },
    },
    right: {
      label: 'Sí. Hemos sobrevivido.',
      effects: { progreso: 25, cordura: 5 },
    },
  },
]

export const STAGE_ORDER = [
  'planos',
  'demolicion',
  'bano',
  'cocina',
  'suelo',
  'ventanas',
  'imprevistos',
  'final',
] as const
