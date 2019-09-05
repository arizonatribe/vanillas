/**
 * Inspects two values to see if they are strictly equal,
 * meaning no type coercion or deepyly nested equality checks are performed.
 * A very simple triple equals is all that is used.
 *
 * @function
 * @sig * -> Boolean
 * @param {*} val1 A value (of any type)
 * @param {*} val2 A value (of any type)
 * @returns {Boolean} Whether or not the two values are strictly equal
 */
function isStrictEqual(firstVal, secondVal) {
  return firstVal === secondVal
}

export default isStrictEqual
