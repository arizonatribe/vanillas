import has from "./has"

/**
 * Takes a snapshot of the input args and the output result for a provided function, and on repeated usage will shortcut invoking the function and return the cached output instead, whenever the same input args are supplied to the function.
 *
 * @function
 * @param {Function} fn A function whose input values (supplied later) will be cached with its output result, so that the invoking the function can be skipped the next time the same values are passed to it
 * @returns {Function} A memoized version of the original function. It will cache the input values supplied to it each time it is used
 */
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

export default memoize
