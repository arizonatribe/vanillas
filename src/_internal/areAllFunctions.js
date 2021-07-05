/**
 * Checks if a list of values are all functions
 *
 * @function
 * @private
 * @name areAllFunctions
 * @param {Array<*>} fns A list of values which may or may not all be functions
 * @returns {boolean} Whether or not a list of functions was passed in
 */
function areAllFunctions(fns) {
  return fns.some((f, idx) => {
    if (typeof f !== "function") {
      throw new Error(`Argument #${idx + 1} passed to "compose()" is not a function:\n"${JSON.stringify(f)}"`)
    }
    return true
  })
}

export default areAllFunctions
