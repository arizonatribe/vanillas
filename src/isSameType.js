import getType from "./getType"

/**
 * Inspects two values to see if they are the same type.
 * The typeof and (if necessary) constructor names are inspected during this check.
 *
 * @function
 * @param {*} val1 A value (of any type)
 * @param {*} val2 A value (of any type)
 * @returns {Boolean} Whether or not the two values are of the same type
 */
function isSameType(val1, val2) {
  return getType(val1) === getType(val2)
}

export default isSameType
