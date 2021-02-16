/**
 * Renames a set of keys in a given object (removing the old ones)
 * @param keyMap - An object whose keys are the _current_ key names and whose values are the _new_ key names
 * @param obj - An Object whose keys will be renamed
 * @returns A new Object that has all the specified keys renamed to their new names
 */
export default function renameKeys(keyMap: object, obj: object): object
