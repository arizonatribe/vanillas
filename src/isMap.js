import getConstructorName from "./_internal/getConstructorName"

/**
 * Checks to see if a value is a Map or WeakMap
 *
 * @function
 * @param {*} val A value (of any type)
 * @returns {Boolean} Whether or not the value is a Map or WeakMap
 */
function isMap(val) {
  return getConstructorName(val) === "Map" || getConstructorName(val) === "WeakMap"
}

export default isMap
