import { AnyObject } from "./types"

/**
 * Blends two values together based on their type.
 * If both are objects this would result in a new object with the second value's props merged onto the first's.
 * If the first value is an array, this would result in a new array with the second value concatenated onto the first value.
 * If both values are strings or numbers, a new string will be returned with the second value added onto the first.
 * @param {string|number|object|Array<*>} firstVal - A value that will have another appended onto
 * @param {string|number|object|Array<*>} secondVal - A value to append to the first value
 * @returns {string|number|object|Array<*>} A new Array, Object, or String that has the characters/values from the second provided value merged _after_ those from the first provided value
 */
export default function append<T extends string | number | AnyObject | any[]>(
  firstVal: T,
  secondVal: T
): T
