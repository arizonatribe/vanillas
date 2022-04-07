import { AnyObject } from "./types"

/**
 * Looks for a specified key on an Object you provide and sets it to the provided value.
 * If the path does not exist, it will be created (you can check for the path via `propIs` or `propAt` or `propEquals` first if you don't wish to create the path every time).
 * The is performed safely and will not throw an error if somethign on the prop path chain you specify doesn't exist.
 * @param {string|Array<string>} prop - A top-level key OR a deeply nested prop path (which may be represented as an array or as a single dot-delimited string)
 * @param {*} val - A value to be placed at the provided property path
 * @param {object} obj - An object which onto which the value will be placed
 * @returns {object} The original object, but modified to have the provided value placed at the specified path it does not exist
 */
export default function propSet(prop: string | string[], val: any, obj: AnyObject): any
