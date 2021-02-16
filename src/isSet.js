import getConstructorName from "./_internal/getConstructorName"

/**
 * Checks to see if a value is a Set or WeakSet
 *
 * @function
 * @name isSet
 * @param {*} val A value (of any type)
 * @returns {Boolean} Whether or not the value is a Set or WeakSet
 */
function isSet(val) {
  return getConstructorName(val) === "Set" || getConstructorName(val) === "WeakSet"
}

export default isSet
