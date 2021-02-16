import propAt from "./propAt"
import isUndefined from "./isUndefined"

/**
 * Attempts to find a specified key on an Object you provide, and if not found will fall back to an additional value you specify.
 *
 * @function
 * @name propOr
 * @param {*} fallback A value to fall back on if the requested key does not exist on the provided Object
 * @param {String} prop A key to search for on the Object
 * @param {object} obj An object which may contain a specified prop
 * @returns {*} Either the requested prop (from the Object) or the fallback value
 */
function propOr(fallback, prop, obj) {
  const val = propAt(prop, obj)
  return isUndefined(val) ? fallback : val
}

export default propOr
