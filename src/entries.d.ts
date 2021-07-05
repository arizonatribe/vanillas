import { AnyObject } from "./types"

/**
 * Extracts an Array of key/value pairs from an Object.
 * @param obj - The input object from which to extract prop keys and values
 * @returns An Array of key/value pairs corresponding to those on the input object
 */
export default function entries(obj: AnyObject): (typeof obj[(keyof typeof obj)])[] | (keyof typeof obj)[]
