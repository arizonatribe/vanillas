import has from './has'
import isObject from './isObject'
import clone from './clone'

/**
 * Looks for a specified key on an Object you provide and sets it to the provided value.
 * If the path does not exist, it will be created (you can check for the path via `propIs` or `propAt` or `propEquals` first if you don't wish to create the path every time).
 * The is performed safely and will not throw an error if somethign on the prop path chain you specify doesn't exist.
 *
 * @function
 * @sig String -> * -> {k: v} -> {k: v}
 * @param {String|String[]} prop A top-level key OR a deeply nested prop path (which may
 * be represented as an array or as a single dot-delimited string)
 * @param {*} val A value to be placed at the provided property path
 * @param {Object} obj An object which onto which the value will be placed
 * @returns {Object} The original object, but modified to have the provided value placed at the specified path
 * it does not exist
 */
function propSet(prop, val, obj) {
  const paths = typeof prop === 'string' ? prop.split('.') : prop
  const len = paths.length
  if (len === 0) return obj
  const newObj = clone(obj)
  if (len > 1) {
    newObj[paths[0]] = propSet(
      paths.slice(1),
      val,
      !has(paths[0], newObj) || !isObject(newObj[paths[0]])
        ? {}
        : newObj[paths[0]]
    )
  } else {
    newObj[paths[0]] = val
  }

  return newObj
}

export default propSet
