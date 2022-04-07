/**
 * Creates a numeric hash code (integer) between 1 and the specified `limit`.
 * The sum of all the string char codes is the dividend and the limit is the divisor, but the _remainder_ (integer) will be the actual hash code.
 *
 * @function
 * @name toHashCode
 * @param {string|number} val A string or numeric value for which to generate the hash code
 * @param {number} [limit=26] The limit of the range of hash code values (this will be the divisor in the modulus division)
 * @returns {number} A numeric representation of the characters in the provided string (will return zero if a string|number is not provided as input)
 */
function toHashCode(val, limit = 26) {
  let sum = 0
  const strVal = typeof val === "string"
    ? val
    : typeof val === "number"
      ? `${val}`
      : ""

  for (let i = 0, len = strVal.length; i < len; i++) {
    sum += strVal.charCodeAt(i)
  }

  return sum % limit
}

export default toHashCode
