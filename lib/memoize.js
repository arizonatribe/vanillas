const has = require('./has')

function memoize(fn) {
  const cache = {}
  function inner(...args) {
    const key = JSON.stringify(args)
    if (!has(key, cache)) {
      cache[key] = fn.apply(fn, args)
    }
    return cache[key]
  }
  return inner
}

module.exports = memoize
