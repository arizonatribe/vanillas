import { AnyObject } from "./types"

/**
 * Applies a mapping function you provide over every value in a given Object.
 * @param {function} fn - A mapping function that is invoked on every value in the provided Object
 * @param {object} obj - An Object whose values will be mapped over
 * @returns {object} A new Object that is the result of the mapping operation over all the values in the original Object
 */
export default function mapObject<T extends AnyObject>(fn: (...params: any[]) => any, obj: T): T
