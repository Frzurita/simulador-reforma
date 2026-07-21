/** Feature flags vía variables VITE_* (Vite solo expone las que empiezan por VITE_). */

export const SHOW_BAR_DELTAS =
  import.meta.env.VITE_SHOW_BAR_DELTAS === 'true'
