import makePropPath from './_internal/makePropPath'

/**
 * Looks for a specified key on an Object you provide. The is performed safely
 * and will not throw an error if somethign on the prop path chain you specify doesn't exist.
 * Will always return `undefined` if a prop path cannot be resolved (rather than throwing).
 *
 * @func
 * @sig String -> {k: v} -> *|undefined
 * @param {String} prop A top-level key OR a deeply nested prop path (which may
 * be represented as an array or as a single dot-delimited string)
 * @param {Object} obj An object which may contain a specified prop
 * @returns {*|undefined} The value associated with the nested prop path OR undefined if
 * it does not exist
 */
function propAt(prop, obj) {
  try {
    const paths = makePropPath(prop)
    const len = paths.length
    if (len === 0) return undefined
    let idx = len
    let val = obj[paths[0]]
    while (--idx) {
      val = val[paths[len - idx]]
    }
    return val
  } catch (err) {
    // Prop wasn't found; returning undefined
  }
}

export default propAt
