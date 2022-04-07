import { AnyObject } from "./types"

/**
 * Combines two values of the same type (if it makes sense to combine them).
 * Numbers are summarized, strings and arrays are concatenated together, and true objects are merged (the second value merged on top of the first).
 * In any other case only the first value is returned.
 * @param {object|Array<*>|number} val1 - The base value to be combined with
 * @param {object|Array<*>|number} val2 - The value to combine
 * @returns {object|Array<*>|number} If the values are of the same type, this represents the combined value of the two of them. Otherwise only the first value is returned
 */
export default function combine<T extends AnyObject | number | any[]>(
  val1: T,
  val2: T
): T
