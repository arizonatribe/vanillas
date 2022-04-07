/**
 * Checks if a given value is "array-like".
 *
 * This includes:
 * - Array
 * - Set
 * - WeakSet
 * - Float64Array
 * - Float32Array
 * - Int32Array
 * - Uint16Array
 * - Int16Array
 * - Uint8ClampedArray
 * - Uint8Array
 * - Int8Array
 * @param {*} val - A value to check as being an array
 * @returns {boolean} Whether the value is an array-like type
 */
export default function isArrayish(val: any): val is (Set<any>|WeakSet<any>|Float32Array|Float64Array|Int32Array|Uint8Array|Int16Array|Uint8ClampedArray|Uint8Array|Int8Array|any[])
