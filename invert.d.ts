import { StringMap } from "./types"

/**
 * Swaps the values for keys in a given object. So the values in that object should be the kind that _can_ be converted to unique string values
 * @param {object} obj - An object whose values _can_ be swapped for keys
 * @returns {object} A new object whose keys were the values from the original object
 */
export default function flipKeyValues<T extends StringMap>(obj: T): { [k in T[keyof T]]: keyof T }
