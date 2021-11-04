import { AnyObject } from "./types"

/**
 * Removes all `null` or `undefined` values from a given object
 * @param obj - An Object from which to copy and remove null/undefined
 * @returns A copy of the original Object, but without any `null` or `undefined` values
 */
export default function omitNull<T extends AnyObject>(obj: T): T
