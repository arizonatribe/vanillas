export const toFunction = v => typeof v === 'function' ? v : () => v
export const toArray = v => Array.isArray(v) ? v : [v]
