import propAt from "./propAt"

/**
 * Looks for a specified key on an Object you provide and checks to see if its corresponding value equals the value you specifiy.
 *
 * @function
 * @name propEquals
 * @param {string} prop A key to search for on the Object
 * @param {*} val A value that the extracted prop will be compared against
 * @param {object} obj An object which may contain a specified prop
 * @returns {boolean} Whether or not the requested prop equals the specified value
 */
function propEquals(prop, val, obj) {
  return propAt(prop, obj) === val
}

export default propEquals
