import { AnyObject } from "./types"

/**
 * Checks if a given Object contains a specified prop name
 * @param {string} key - A prop name to look for in the object
 * @param {object} obj - An Object to inspect for a given prop
 * @returns {boolean} Whether the object contains the specified prop
 */
export function has<T extends AnyObject, K extends keyof T>(key: string | number | Symbol, obj: T): key is K
