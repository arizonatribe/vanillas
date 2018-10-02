/**
 * Find the index of a single value from an array of values, based on criteria defined in a
 * predicate function.
 *
 * @func
 * @sig (* -> Boolean) -> [*,*,..] -> Number
 * @param {Function} pred A predicate function to apply to the array of values
 * (It should take a val as input and return a Boolean as output).
 * @param {Array} arr An array of values from which to find the index of one particular matching value
 * @returns {Number} Either the index of the value from the array that matched the predicate
 * function or negative one (-1, if no match).
 */
function findIndex(pred, arr) {
  const len = arr.length
  for (let i = 0; i < len; i++) {
    if (pred(arr[i])) return i
  }
  return -1
}

export default findIndex
