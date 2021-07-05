import areAllFunctions from "./_internal/areAllFunctions"
import identity from "./identity"

/**
 * Creates a chain of Functions that will be executed in sequnce (from right to left), with the value from the previous Function fed into the next Function.
 * The value that the chain of functions will executed on can be provided later.
 *
 * @function
 * @name compose
 * @param {function} ...fns One or more function to execute (in sequential order) on a value that will be supplied later
 * @returns {function} A single Function that is ready to receive a value and pass it through the composed chain of Functions
 */
function compose(...fns) {
  let fnlen = fns.length
  if (fnlen === 0 || !areAllFunctions(fns)) return identity
  /* eslint-disable-next-line jsdoc/require-jsdoc */
  function inner(...args) {
    let result = fns[--fnlen](...args)
    while (--fnlen >= 0) {
      result = fns[fnlen](result)
    }
    return result
  }
  return inner
}

export default compose
