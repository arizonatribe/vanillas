/**
 * Find the index of a single value from an array of values, based on criteria defined in a predicate function.
 * @param pred - A predicate function to apply to the array of values (It should take a val as input and return a Boolean as output).
 * @param arr - An array of values from which to find the index of one particular matching value
 * @returns Either the index of the value from the array that matched the predicate function or negative one (-1, if no match).
 */
export default function findIndex(pred: (...params: any[]) => any, arr: any[]): number
