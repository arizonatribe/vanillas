import has from "./has"

/**
 * A light wrapper around native `for .. in`, but will only iterate over an Object's own properties.
 *
 * @function
 * @name forIn
 * @param {function} fn A function to execute iteratively, which will receive the `key`, `value`, and `object` (respectively)
 * @param {object} obj An object whose keys will be iterated over
 */
function forIn(fn, obj) {
  // eslint-disable-next-line no-restricted-syntax
  for (const key in obj) {
    if (has(key, obj)) {
      fn(key, obj[key], obj)
    }
  }
}

export default forIn
