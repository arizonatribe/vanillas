import forIn from "./forIn"
import isPrimitive from "./isPrimitive"

/**
 * Transforms an object's key/value pairs into an encoded URI string, delimited by ampersands &
 *
 * @function
 * @name toUriEncoded
 * @param {object} obj An object whose key/value pairs need to be serialized into a single string.
 * @returns {string} A new string that represents the key/value pairs on the originating object
 */
function toUriEncoded(obj = {}) {
  let strUri = ""

  forIn((key, val) => {
    if (isPrimitive(val)) {
      strUri += `&${key}=${val}`
    } else if (Array.isArray(val)) {
      strUri += `&${key}=${val.filter(isPrimitive).join(",")}`
    }
  }, obj)

  return encodeURI(strUri.slice(1))
}

export default toUriEncoded
