/**
 * Filters an array of values down to only those which are unique, based on a provided predicate function (or shorthand for retrieving a prop inside an object)
 * @param pred - A predicate function
 * @param list - An array of values which may or may not contain duplicates
 * @returns A new list containing only the unique values from the original array
 */
export default function uniqBy(pred: ((...params: any[]) => any) | string, list: any[]): any[]
