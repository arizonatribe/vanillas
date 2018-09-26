import areAllFunctions from './_internal/areAllFunctions'
import identity from './identity'

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
