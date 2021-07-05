import { AnyObject } from "./types"

/**
 * Removes everything _except_ the specified keys from an object (after cloning the Object).
 * @param keys - An array of keys to search for in the Object and include from the output
 * @param obj - An Object from which to copy and remove keys
 * @returns A copy of the original Object, but with _only_ the specified keys
 */
export default function pick(keys: string[], obj: AnyObject): AnyObject
