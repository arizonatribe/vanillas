/**
 * Filters an array of values down to only those which are unique, based on a provided predicate function (or shorthand for retrieving a prop inside an object)
 * @param {function} pred - A predicate function
 * @param {Array<*>} list - An array of values which may or may not contain duplicates
 * @returns {Array<*>} A new list containing only the unique values from the original array
 */
export default function uniqBy<T extends any[]>(pred: ((...params: any[]) => any) | string, list: T): T
