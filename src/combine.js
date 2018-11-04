import merge from './merge'
import concat from './concat'
import isObject from './isObject'

/**
 * Combines two values of the same type (if it makes sense to combine them).
 * Numbers are summarized, strings and arrays are concatenated together, and
 * true objects are merged (the second value merged on top of the first).
 * In any other case only the first value is returned.
 *
 * @func
 * @sig a -> a -> a
 * @param {*} val1 The base value to be combined with
 * @param {*} val2 The value to combine
 * @returns {*} If the values are of the same type, this represents the combined
 * value of the two of them. Otherwise only the first value is returned
 */
function combine(val1, val2) {
  if ([val1, val2].every(v => typeof v === 'number' || typeof v === 'string')) {
    return val1 + val2
  }
  if (isObject(val1) && isObject(val2)) {
    return merge(val1, val2)
  }
  if (Array.isArray(val1) && Array.isArray(val2)) {
    return concat(val1, val2)
  }
  return val1
}

export default combine
