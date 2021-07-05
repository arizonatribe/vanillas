/* eslint-disable consistent-return */

/**
 * Find a single value from an array of values, based on criteria defined in a predicate function.
 *
 * @function
 * @name find
 * @param {function} pred A predicate function to apply to the array of values (It should take a val as input and return a Boolean as output).
 * @param {Array<*>} arr An array of values from which to find one particular matching value
 * @returns {*} Either a value from the array that matched the predicate function or undefined (if no match)
 */
function find(pred, arr) {
  const len = arr.length
  for (let i = 0; i < len; i++) {
    if (pred(arr[i])) return arr[i]
  }
}

export default find
