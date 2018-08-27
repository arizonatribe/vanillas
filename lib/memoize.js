const has = require('./has')

function memoize(fn) {
  const cache = {}
  function inner(...args) {
    const key = JSON.stringify(args)
    return has(key, cache) ? cache[key] : (
      cache[key] = fn.apply(fn, args)
    )
  }
  return inner
}

module.exports = memoize
