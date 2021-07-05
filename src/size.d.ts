import { AnyObject } from "./types"

/**
 * Checks the length (or size) of many different types of values:
 *   - Array
 *   - Set
 *   - Map
 *   - Object (num of keys)
 *   - String (num of chars)
 *   - Function (num of params)
 * @param {object|string|Map|Set|function|Array<*>} val - A value of type Object, String, Array or Function
 * @returns {number} The length of the String or Array, OR the number of keys in the Object
 */
export default function size(val: AnyObject | Set<any> | Map<string, any> | string | any[] | ((...params: any[]) => any)): number
