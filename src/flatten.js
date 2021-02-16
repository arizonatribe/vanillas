import isArrayish from "./isArrayish"

/**
 * Extracts nested arrays (of any depth) from a provided array, placing them onto on single new array.
 *
 * @function
 * @name flatten
 * @param {Array<Array<*>>|Array<*>} arr An array of values that may or may not be nested arrays themselves
 * @returns {Array<*>} A new array of values, but with any nested arrays from the original input extracted onto one single (flat) array
 */
function flatten(arr) {
  const newArr = []
  let i = -1
  const len = arr.length
  while (++i < len) {
    const val = arr[i]
    if (isArrayish(val)) {
      let j = -1
      const nlen = val.length
      while (++j < nlen) {
        newArr.push(val[j])
      }
    } else {
      newArr.push(val)
    }
  }
  return newArr
}

export default flatten
