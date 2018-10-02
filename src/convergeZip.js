/**
 * Run several Functions (or composed chains of Functions) onto the same input
 * and converges their results as arguments to another Function. Compare to
 * "converge" however the difference is that this is _always_ intended to be
 * used with multiple input values _and_ each of those values corresponds to one
 * of the forked functions. They all still converge into one Function, but the
 * forked function just don't receive the same input values.
 *
 * @func
 * @sig
 * @param {Function} fn A Function to converge the results (from executing all the others) into
 * @param {Function} ...forkedFunctions Two or more Functions (should be at least two,
 * otherwise you're using the wrong util; use compose instead) that will later receive the same input
 * @returns {Function} A wrapped Function that is ready to receive multiple values that each correspond to one of the fork functions, converging those results as _arguments_ to the first Function you supplied
 */
function convergeZip(fn, ...forkedFunctions) {
  const isArrayUsage = Array.isArray(forkedFunctions[0])
  function inner(...args) {
    const ars = Array.isArray(args[0]) && isArrayUsage ? args[0] : args
    const fns = (isArrayUsage ? forkedFunctions[0] : forkedFunctions).slice(0, ars.length)
    return fn(...ars.map((a, i) => fns[i](a)))
  }
  return inner
}

export default convergeZip
