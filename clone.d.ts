import { AnyObject } from "./types"

/**
 * Recursively copies the content of an Object into a new Object
 * @param {object} obj - An Object (or Array) from which to create a deep copy
 * @returns {object} The new (cloned) Object (or Array)
 */
export default function clone<T extends AnyObject>(obj: T | T[]): T | T[]
