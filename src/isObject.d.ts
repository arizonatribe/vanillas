import { AnyObject } from "./types"

/**
 * A high-speed, mostly adequate check of a value which may be an Object.
 * This excludes values that are _technically_ an Object but in practice are not what you _really_ mean when you speak of Objects.
 * @param val - A value (of any type)
 * @returns Whether or not the value is an Object
 */
export default function isObject(val: any): val is AnyObject
