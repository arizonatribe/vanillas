/**
 * Run several Functions (or composed chains of Functions) onto the same input
 * and converges their results as arguments to another Function.
 *
 * A common example might be to take an Object that needs to be transformed in
 * several different ways and then merged into one final Object. In that case
 * you can supply a "merge" (or "assign") Function as the convergence Function,
 * and then pass all your Object transforming Functions as additional arguments.
 * When you're ready to receive the actual input Object it will be forked into
 * all the transform Functions and their results will converge into the
 * merge/assign Function you supplied first.
 *
 *
 * @func
 * @sig
 * @param {Function} fn A Function to converge the results (from executing all the others) into
 * @param {Function} ...forkedFunctions Two or more Functions (should be at least two,
 * otherwise you're using the wrong util; use compose instead) that will later receive the same input
 * @returns {Function} A wrapped Function that is ready to receive a value(s) and pass it (in parallel) into the other Functions, converging those results as _arguments_ to the first Function you supplied
 */
function converge(fn, ...forkedFunctions) {
  function inner(...args) {
    return fn(
      ...(Array.isArray(forkedFunctions[0]) ? forkedFunctions[0] : forkedFunctions).map(f => f(...args))
    )
  }
  return inner
}

export default converge
