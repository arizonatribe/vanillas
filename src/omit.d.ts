import { AnyObject } from "./types"

/**
 * Removes specified keys from an object (after cloning the Object).
 * @param {Array<string>} keys - An array of keys to search for in the Object and exclude from the output
 * @param {object} obj - An Object from which to copy and remove keys
 * @returns {object} A copy of the original Object, but without the specified keys
 */
export default function omit<T extends AnyObject, K extends keyof T>(keys: K[], obj: T): Partial<T>
