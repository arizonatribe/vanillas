/**
 * Removes specified keys from an object (after cloning the Object).
 * @param keys - An array of keys to search for in the Object and exclude from the output
 * @param obj - An Object from which to copy and remove keys
 * @returns A copy of the original Object, but without the specified keys
 */
export default function omit(keys: string[], obj: object): object
