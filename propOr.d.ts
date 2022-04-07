import { AnyObject } from "./types"

/**
 * Attempts to find a specified key on an Object you provide, and if not found will fall back to an additional value you specify.
 * @param {*} fallback - A value to fall back on if the requested key does not exist on the provided Object
 * @param {string|Array<string>} prop - A key to search for on the Object
 * @param {object} obj - An object which may contain a specified prop
 * @returns {*} Either the requested prop (from the Object) or the fallback value
 */
export default function propOr(fallback: any, prop: string | string[], obj: AnyObject): any
