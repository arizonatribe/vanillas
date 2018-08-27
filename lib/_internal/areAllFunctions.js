const isFunction = require('../isFunction')

function areAllFunctions(fns) {
  return fns.some((f, idx) => {
    if (!isFunction(f)) {
      throw new Error(`Argument #${idx + 1} passed to "compose()" is not a function:\n"${JSON.stringify(f)}"`)
    }
    return true
  }) 
}

module.exports = areAllFunctions
