import isNil from "./isNil"
import toTitleCase from "./toTitleCase"
import getConstructorName from "./_internal/getConstructorName"

/**
 * Gets the type for any value. If available will inspect the constructor name, otherwise will use the typeof
 *
 * @function
 * @name getType
 * @param {*} val A value of any kind
 * @returns {string} The stringified representation of the value's type
 */
function getType(val) {
  if (isNil(val)) {
    return `${val}`
  }
  return getConstructorName(val) || toTitleCase(typeof val)
}

export default getType
