import merge from "./merge"

/**
 * Blends two values together based on their type.
 * If both are objects this would result in a new object with the second value's props merged onto the first's.
 * If the first value is an array, this would result in a new array with the second value concatenated onto the first value.
 * If both values are strings or numbers, a new string will be returned with the second value added onto the first.
 *
 * @function
 * @param {String|Number|Object<string, any>|Array<*>} firstVal A value that will have another appended onto
 * @param {String|Number|Object<string, any>|Array<*>} secondVal A value to append to the first value
 * @returns {Array<*>|Object<string, any>|String} A new Array, Object, or String that has the characters/values from the second provided value merged _after_ those from the first provided value
 */
function append(firstVal, secondVal) {
  if ([firstVal, secondVal].every(val => typeof val === "string" || typeof val === "number")) {
    return `${firstVal}${secondVal}`
  }
  if (Array.isArray(firstVal) && Array.isArray(secondVal)) {
    return [...firstVal, ...secondVal]
  }
  return merge(firstVal, secondVal)
}

export default append
