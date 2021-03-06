import has from "./has"

/**
 * Checks if a given Object contains a (potentially) nested property of a specified path
 *
 * @function
 * @name hasNestedProp
 * @param {Array<string> | string} prop A prop name, a dot-separated prop path, or an array of prop path "pieces" to look for in the object
 * @param {object} obj An Object to inspect for a given prop at the specified path
 * @returns {boolean} Whether the object contains the specified prop path
 */
function hasNestedProp(prop, obj) {
  const paths = typeof prop === "string" ? prop.split(".") : prop
  const len = paths.length
  if (len === 0) return false
  let idx = 0
  let val = obj[paths[idx]]
  let hasProp = has(paths[idx], obj)
  while (++idx < len && hasProp === true) {
    hasProp = has(paths[idx], val)
    if (hasProp) {
      val = val[paths[idx]]
    }
  }
  return hasProp
}

export default hasNestedProp
