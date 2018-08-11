const areAllFunctions = require('./_internal/areAllFunctions')

function pipe(...fns) {
  function inner(...args) {
    return fns.reduce((result, fn) => [fn(...result)], args)[0]
  }
  return (fns.length === 0 || areAllFunctions(fns)) && inner
}

module.exports = pipe
