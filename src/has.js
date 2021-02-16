/**
 * Checks if a given Object contains a specified prop name
 *
 * @function
 * @name has
 * @param {String} key A prop name to look for in the object
 * @param {object} obj An Object to inspect for a given prop
 * @returns {Boolean} Whether the object contains the specified prop
 */
function has(key, obj) {
  return Object.prototype.hasOwnProperty.call(obj, key)
}

export default has
