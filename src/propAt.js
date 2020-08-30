/**
 * Looks for a specified key on an Object you provide.
 * The is performed safely and will not throw an error if something on the prop path chain you specify doesn't exist.
 * Will always return `undefined` if a prop path cannot be resolved (rather than throwing).
 *
 * @function
 * @param {String|Array<String>} prop A top-level key OR a deeply nested prop path (which may be represented as an array or as a single dot-delimited string)
 * @param {Object<string, any>} obj An object which may contain a specified prop
 * @returns {*|undefined} The value associated with the nested prop path OR undefined if it does not exist
 */
function propAt(prop, obj) {
  try {
    const paths = typeof prop === "string" ? prop.split(".") : prop
    const len = paths.length
    if (len === 0) return undefined
    let idx = 0
    let val = obj[paths[idx]]
    while (++idx < len) {
      val = val[paths[idx]]
    }
    return val
  } catch (err) {
    // Prop wasn't found; returning undefined
  }
}

export default propAt
