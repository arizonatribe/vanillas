import areAllFunctions from './_internal/areAllFunctions'
import identity from './identity'

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
