import { AnyObject } from "./types"

/**
 * A light wrapper around native `for .. in`, but will only iterate over an Object's own properties.
 * @param {function} fn - A function to execute iteratively, which will receive the `key`, `value`, and `object` (respectively)
 * @param {object} obj - An object whose keys will be iterated over
 */
export default function forIn(fn: (...params: any[]) => any, obj: AnyObject): void
