import { AnyObject } from "./types"

/**
 * Removes everything _except_ the specified keys from an object (after cloning the Object).
 * @param {Array<string>} keys - An array of keys to search for in the Object and include from the output
 * @param {object} obj - An Object from which to copy and remove keys
 * @returns {object} A copy of the original Object, but with _only_ the specified keys
 */
export default function pick<T extends AnyObject, K extends keyof T>(keys: K[], obj: T): Partial<T>
