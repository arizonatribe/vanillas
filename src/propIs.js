import propAt from './propAt'
import is from './is'

/**
 * Looks for a specified key on an Object you provide and checks to see if its
 * corresponding value is of the type you specifiy.
 *
 * @function
 * @sig String -> String -> {k: v} -> Boolean
 * @param {Function|String} type A JavaScript type constructor function
 * (ie `Boolean`, `RegExp`, `Date`, `Array`, `Object`, `Number`, `String`, etc)
 * OR a string represention of the type (ie, "boolean", "regexp", "date",
 * "array", "object", "number", "string", etc)
 * @param {String} prop A key to search for on the Object
 * @param {Object} obj An object which may contain a specified prop
 * @returns {Boolean} Whether or not the requested prop is of the type specified
 */
function propIs(type, prop, obj) {
  return is(type, propAt(prop, obj))
}

export default propIs
