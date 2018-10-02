import areAllFunctions from './_internal/areAllFunctions'
import identity from './identity'

/**
 * Creates a chain of Functions that will be executed in order (with the value
 * from the previous Function fed into the next Function) on a value that will
 * be supplied later by the user.
 *
 * @func
 * @sig Function,...Function -> *
 * @param {Function} ...fns One or more function to execute (in sequential
 * order) on a value that will be supplied later
 * @returns {Function} A single Function that is ready to receive a value and
 * pass it through the composed chain of Functions
 */
function compose(...fns) {
  let fnlen = fns.length
  if (fnlen === 0 || !areAllFunctions(fns)) return identity
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
