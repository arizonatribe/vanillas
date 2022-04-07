import { AnyObject } from "./types"

/**
 * Applies a filtering function you provide over every value in a given Object.
 * @param {function} fn - A filtering function that is invoked on every value in the provided Object
 * @param {object} obj - An Object whose values will be filtered
 * @returns {object} A new Object that is the result of the filtering operation over all the values in the original Object
 */
export default function filterObject<T extends AnyObject>(fn: (...params: any[]) => any, obj: T): T
