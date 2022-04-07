import { AnyObject } from "./types"

/**
 * Renames a set of keys in a given object (removing the old ones)
 * @param {object} keyMap - An object whose keys are the _current_ key names and whose values are the _new_ key names
 * @param {object} obj - An Object whose keys will be renamed
 * @returns {object} A new Object that has all the specified keys renamed to their new names
 */
export function renameKeys<
  T extends AnyObject,
  KM extends { [S in keyof T]: string }
>(
  keyMap: KM,
  obj: T
): {
  [k in (KM[keyof KM])]: T[keyof T]
} & T
