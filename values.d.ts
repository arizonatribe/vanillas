import { AnyObject } from "./types"

/**
 * A simple polyfill for Object.values()
 * @param {object} obj - An Object whose values need to be retrieved
 * @returns {Array<*>} A list of all the values in the provided Object, ordered by keys
 */
export default function values<T extends AnyObject>(obj: T): T[keyof T][]
