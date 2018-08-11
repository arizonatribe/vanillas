const areAllFunctions = require('./_internal/areAllFunctions')

function compose(...fns) {
  function inner(...args) {
    return fns.reverse().reduce((result, fn) => [fn(...result)], args)[0]
  }
  return (fns.length === 0 || areAllFunctions(fns)) && inner
}

module.exports = compose
