import { AnyObject } from "./types"

/**
 * Merges the values from 2 or more Objects together into a new Object.
 * Null and Undefined values are handled gracefully, and if the second value is a primitive it will be returned as-is, instead of trying to merge it onto the first.
 * @param {object} val - The first value to merge onto (will not get mutated though)
 * @param {object} val2 - A value to merge onto the first
 * @returns {object} A new value that contains the combined values from all the values passed in
 */
export default function merge<T extends AnyObject>(val: T, val2: T): T
