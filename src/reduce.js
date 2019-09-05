/**
 * A simple wrapper around native Array.prototype.reduce(), for use in a
 * compose/pipe chain of functions.
 *
 * @function
 * @sig Array -> *
 * @param {Function} fn A function to control the reducition of each item in the
 * arram into the single output value
 * @param {*} defaultVal A starting value for the reduction accumulator
 * @param {Array} arr An array of values of any type
 * @returns {*} The original Array somehow reduced to one value
 */
function reduce(fn, defaultVal, arr) {
  return arr.reduce(fn, defaultVal)
}

export default reduce
