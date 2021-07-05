/**
 * A faster version of the native Array.includes.
 * It simply checks to see if a given list contains a given value
 *
 * @function
 * @private
 * @name _includes
 * @param {*} val A value (of any type) to search the array for
 * @param {Array<*>} arr A list of values which may or may not contain the specified value
 * @returns {boolean} Whether or not the provided value is in the provided list of values
 */
export function _includes(val, arr) {
  let idx = arr.length
  while (idx--) {
    if (arr[idx] === val) {
      return true
    }
  }
  return false
}
