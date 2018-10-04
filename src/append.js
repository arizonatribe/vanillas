import merge from './merge'
import concat from './concat'

/**
 * Blends two values together based on their type.
 * If both are objects this would result in a new object
 * with the second value's props merged onto the first's.
 * If the first value is an array, this would result in a new array with
 * the second value concatenated onto the first value.
 * If both values are strings or numbers, a new string will be returned with
 * the second value added onto the first.
 *
 * @func
 * @sig * -> * -> *
 * @param {String|Number|Object|Array} firstVal A value that will have another appended onto
 * @param {String|Number|Object|Array} secondVal A value to append to the first value
 * @returns {} A new value that blends the first and second values together.
 */
function append(firstVal, secondVal) {
  if ([firstVal, secondVal].every(val => typeof val === 'string' || typeof val === 'number')) {
    return `${firstVal}${secondVal}`
  }
  if (Array.isArray(firstVal)) {
    return concat(firstVal, Array.isArray(secondVal) ? secondVal : [secondVal])
  }
  return merge(firstVal, secondVal)
}

export default append
