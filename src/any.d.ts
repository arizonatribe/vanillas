/**
 * Check an Array of items (of any type) to see if any item satisfies a given predicate function.
 * Exits when the first match is found.
 * @param pred - A predicate function to evaluate against each item in a given array
 * @param arr - An array of items to evaluate against the predicate function
 * @returns Whether or not any items in the array matched the predicate function
 */
export default function any(pred: (...params: any[]) => any, arr: any[]): boolean
