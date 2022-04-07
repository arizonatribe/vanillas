/**
 * Filters an array of values down to only those which are unique
 * @param {Array<*>} list - An array of values which may or may not contain duplicates
 * @returns {Array<*>} A new list containing only the unique values from the original array
 */
export default function uniq<T extends any[]>(list: T): T
