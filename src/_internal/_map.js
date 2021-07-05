/**
 * Applies a mapping function over a list of values
 *
 * @function
 * @private
 * @name _map
 * @param {function} fn A function to map over a list of values
 * @param {Array<*>} arr A list of values over which to apply a mapping function
 * @returns {Array<*>} The original list of values after the mapping function has been applied to (and potentially transform) them
 */
export function _map(fn, arr) {
  const len = arr.length
  const newArr = new Array(len)
  for (let i = 0; i < len; i++) {
    newArr[i] = fn(arr[i])
  }
  return newArr
}
