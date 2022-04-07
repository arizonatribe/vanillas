import { AnyObject } from "./types"

/**
 * Extracts an Array of key/value pairs from an Object.
 * @param {object} obj - The input object from which to extract prop keys and values
 * @returns {Array<string|*>} An Array of key/value pairs corresponding to those on the input object
 */
export default function entries<T extends AnyObject>(obj: T): (keyof T | T[keyof T])[]
