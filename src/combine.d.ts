import { AnyObject } from "./types"

/**
 * Combines two values of the same type (if it makes sense to combine them).
 * Numbers are summarized, strings and arrays are concatenated together, and true objects are merged (the second value merged on top of the first).
 * In any other case only the first value is returned.
 * @param val1 - The base value to be combined with
 * @param val2 - The value to combine
 * @returns If the values are of the same type, this represents the combined value of the two of them. Otherwise only the first value is returned
 */
export default function combine(
  val1: AnyObject | any[] | number,
  val2: AnyObject | any[] | number
): AnyObject | any[] | number
