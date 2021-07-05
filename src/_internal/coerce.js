/**
 * Ensures a given value is wrapped in a function (leaves alone the value if it is already a function).
 *
 * @function
 * @private
 * @name toFunction
 * @param {function|*} v A value which may be a function or a value a function should return
 * @returns {function} Either the original value (if it was a function) or a function which returns the original value
 */
export const toFunction = v => (typeof v === "function" ? v : () => v)

/**
 * Ensures a given value is wrapped in an array (leaves alone the value if it is already an array).
 *
 * @function
 * @private
 * @name toArray
 * @param {Array<*>|*} v A value which may be an array or should be placed into an array
 * @returns {Array<*>} Either the original value (if it was an array) or an array containing the original value
 */
export const toArray = v => (Array.isArray(v) ? v : [v])
