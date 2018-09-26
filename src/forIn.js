import has from './has'

function forIn(fn, obj) {
  // eslint-disable-next-line no-restricted-syntax
  for (const key in obj) {
    if (has(key, obj)) {
      fn(key, obj)
    }
  }
}

export default forIn
