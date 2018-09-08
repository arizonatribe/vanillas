/**
 * Checks if a given Object contains a specified prop name
 *
 * @category Object
 * @sig String -> Object -> Boolean
 * @param {String} key A prop name to look for in the object
 * @param {Object} obj An Object to inspect for a given prop
 * @returns {Boolean} Whether the object contains the specified prop
 */
function has(key, obj) {
  return Object.prototype.hasOwnProperty.call(obj, key)
}

module.exports = has
