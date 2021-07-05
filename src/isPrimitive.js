import getConstructorName from "./_internal/getConstructorName"

/**
 * Checks if a given type name is a primitve type
 *
 * @function
 * @private
 * @name _isPrimitiveName
 * @param {string} typeName The name of the type
 * @returns {boolean} Whether or not the type's name is a primitive type name
 */
function _isPrimitiveName(typeName) {
  switch (typeName) {
    case "boolean":
    case "number":
    case "string":
    case "Boolean":
    case "Number":
    case "String":
    case "Symbol":
      return true
    default:
      return false
  }
}

/**
 * Checks if a given value is of a primitive type (ie, Boolean, String, Number, or Symbol).
 *
 * @function
 * @name isPrimitive
 * @param {*} val A value which may be of a primitive type
 * @returns {boolean} Whether or not the value is primitive
 */
function isPrimitive(val) {
  return _isPrimitiveName(typeof val) || _isPrimitiveName(getConstructorName(val))
}

export default isPrimitive
