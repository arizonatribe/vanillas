import { AnyObject } from "./types"

/**
 * Assigns the values from one or more Objects onto another Object.
 * This mutates the original Object.
 * @param {object} obj - An Object to mutate with the values from one (or more) additionally supplied Objects
 * @param {Array<object>} ...resOfObjects - One or more Objects to extract from and assign onto the first Object
 * @returns {object} The first object mutated with the values from any other object passed in
 */
export default function assign(
  obj: AnyObject,
  ...resOfObjects: AnyObject[]
): AnyObject
