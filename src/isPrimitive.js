import getConstructorName from './_internal/getConstructorName'

function _isPrimitiveName(typeName) {
  switch (typeName) {
  case 'boolean':
  case 'number':
  case 'string':
  case 'Boolean':
  case 'Number':
  case 'String':
  case 'Symbol':
    return true
  default:
    return false
  }
}

/**
 * Checks if a given value is of a primitive type (ie, Boolean, String, Number,
 * or Symbol).
 *
 * @func
 * @sig * -> Boolean
 * @param {*} val A value which may be of a primitive type
 * @returns {Boolean} Whether or not the value is primitive
 */
function isPrimitive(val) {
  return _isPrimitiveName(typeof val) || _isPrimitiveName(getConstructorName(val))
}

export default isPrimitive
