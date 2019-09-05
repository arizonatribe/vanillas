import areAllFunctions from './_internal/areAllFunctions'
import identity from './identity'

/**
 * Creates a chain of Functions that will be executed in sequnce (from left to
 * right), with the value from the previous Function fed into the next Function.
 * The value that the chain of functions will executed on can be provided later.
 *
 * @function
 * @sig Function,...Function -> *
 * @param {Function} ...fns One or more function to execute (in sequential
 * order) on a value that will be supplied later
 * @returns {Function} A single Function that is ready to receive a value and
 * pass it through the piped chain of Functions
 */
function pipe(...fns) {
  const fnlen = fns.length
  if (fnlen === 0 || !areAllFunctions(fns)) return identity
  function inner(...args) {
    let result = fns[0](...args)
    for (let i = 1; i < fnlen; i++) {
      result = fns[i](result)
    }
    return result
  }
  return inner
}

export default pipe
