/**
 * Checks the length (or size) of many different types of values:
 *   - Array
 *   - Set
 *   - Map
 *   - Object (num of keys)
 *   - String (num of chars)
 *   - Function (num of params)
 * @param val - A value of type Object, String, Array or Function
 * @returns The length of the String or Array, OR the number of keys in the Object
 */
export default function size(val: any | string | any[] | ((...params: any[]) => any)): number
