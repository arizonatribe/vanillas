import getConstructorName from './_internal/getConstructorName'
import getType from './getType'

/**
 * Checks to see if a value is a certain type.
 * You may specify that type as a case-insensitive string
 * (ie, 'string', 'boolean', 'object', 'function', 'array', 'regexp', 'date', 'set, 'map'),
 * OR a constructor function
 * (ie, String, Function, Boolean, Array, RegExp, Date, Set, Map).
 *
 * @example is('boolean', true)
 * @example is('array', [1, 2, 3])
 * @example is(RegExp, /[a-z0-9]/)
 * @example is(Function, () => null)
 *
 * @func
 * @sig String|Function -> * -> Boolean
 * @param {Function|String} ofType
 * @param {*} val A value (of any type)
 * @returns {Boolean} Whether or not the value matches the specified type
 */
function is(ofType, val) {
  return (typeof ofType === 'string' && getType(val).toLowerCase() === ofType.toLowerCase()) ||
    (!ofType.name && getType(ofType) === getType(val)) ||
    (ofType.name && getConstructorName(ofType) === 'Function' && getType(val) === ofType.name)
}

export default is
