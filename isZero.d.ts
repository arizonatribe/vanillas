/**
 * Checks if a given value is zero or a string representing zero.
 * For string values, what we want is "0" or "0.0" but not "" or " " (which also coerce to zero).
 *
 * @function
 * @name isZero
 * @param {number|string} val A value to verify is zero or a zero-like string.
 * @returns {boolean} Whether or not the given value is zero or a zero-like string.
 */
export default function isZero(val: any): val is 0 | "0" | "0.0"
