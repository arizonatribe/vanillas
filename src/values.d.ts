import { AnyObject } from "./types"

/**
 * A simple polyfill for Object.values()
 * @param obj - An Object whose values need to be retrieved
 * @returns A list of all the values in the provided Object, ordered by keys
 */
export default function values(obj: AnyObject): (typeof obj[(keyof typeof obj)])[]
