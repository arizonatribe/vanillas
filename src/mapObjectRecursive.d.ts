/**
 * Applies a mapping function you provide over every value in a given Object (recursively).
 * @param fn - A mapping function that is invoked on every value in the provided Object
 * @param obj - An Object whose values will be mapped over (recursively)
 * @returns A new Object that is the result of the mapping operation over all the values in the original Object
 */
export default function mapObjectRecursive(fn: (...params: any[]) => any, obj: object): object
