import isObject from './isObject'

/**
 * Checks if a value is a JavaScript Promise. This just means a deferred object/function with a method named `then`.
 *
 * @function
 * @isg * -> Boolean
 * @param {*} val A value of any type which may be a promise
 * @returns {Boolean} Whether or not the value is a promise
 */
function isPromise(val) {
  return (typeof val === 'function' || isObject(val)) && typeof val.then === 'function'
}

export default isPromise
