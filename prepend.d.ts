import { AnyObject } from "./types"

/**
 * Merges two values together, placing the characters (or values) from one before those from the other.
 * @param {string|number|object|Array<*>} firstVal - An Array, Object, String or Number that the will have a new value(s) merged before its own characters/values
 * @param {string|number|object|Array<*>} secondVal - An Array, Object, String or Number that the will merge _before_ those from the first provided value
 * @returns {string|number|object|Array<*>} A new Array, Object, or String that has the characters/values from the second provided value merged _before_ those from the first provided value
 */
export default function prepend<T extends string | number | AnyObject | any[]>(
  firstVal: T,
  secondVal: T
): T
