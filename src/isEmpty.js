import isObject from "./isObject"

/**
 * Checks if a value is empty. Arrays, Objects, Strings, Sets, and Null/Undefined values are considered empty if their length (or size) prop is zero (or if they are Null or Undefined).
 * Whitespace-only strings are NOT considered empty (use `isBlankString` instead).
 *
 * @function
 * @name isEmpty
 * @param {*} val A value of any type which may be considered empty
 * @returns {boolean} Whether or not the value is empty
 */
function isEmpty(val) {
  return val == null ||
    val.length === 0 ||
    val.size === 0 ||
    (isObject(val) && Object.keys(val).length === 0)
}

export default isEmpty
