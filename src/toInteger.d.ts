/**
 * Converts a given value to an Integer and rounds up or down floating point values appropriately.
 * If the values is a `Boolean`, then `true` will yield `1` and `false will yield `0`.
 * If `NaN` then zero will always be returned.
 * @param {string} str - A string which may be numeric
 * @returns {number} Either the successfully converted number or zero (if it was NaN)
 */
export default function toInteger(str: string): number
