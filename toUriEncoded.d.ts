import { AnyObject } from "./types"

/**
 * Transforms an object's key/value pairs into an encoded URI string, delimited by ampersands &
 * @param {object} obj - An object whose key/value pairs need to be serialized into a single string.
 * @returns {string} A new string that represents the key/value pairs on the originating object
 */
export default function toUriEncoded(obj: AnyObject): string
