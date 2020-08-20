import merge from "./merge"

/**
 * Merges two values together, placing the characters (or values) from one before those from the other.
 *
 * @function
 * @param {Array<*>|Object<string, any>|String|Number} firstVal An Array, Object, String or Number that the will have a new value(s) merged before its own characters/values
 * @param {Array<*>|Object<string, any>|String|Number} secondVal An Array, Object, String or Number that the will merge _before_ those from the first provided value
 * @returns {Array<*>|Object<string, any>|String} A new Array, Object, or String that has the characters/values from the second provided value merged _before_ those from the first provided value
 */
function prepend(firstVal, secondVal) {
  if ([firstVal, secondVal].every(val => typeof val === "string" || typeof val === "number")) {
    return `${secondVal}${firstVal}`
  }
  if (Array.isArray(firstVal) && Array.isArray(secondVal)) {
    return [...secondVal, ...firstVal]
  }
  return merge(secondVal, firstVal)
}

export default prepend
