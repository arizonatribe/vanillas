import { AnyObject } from "./types"

/**
 * Checks if a given Object contains a (potentially) nested property of a specified path
 * @param prop - A prop name, a dot-separated prop path, or an array of prop path "pieces" to look for in the object
 * @param obj - An Object to inspect for a given prop at the specified path
 * @returns Whether the object contains the specified prop path
 */
export default function hasNestedProp(prop: string[] | string, obj: AnyObject): boolean
