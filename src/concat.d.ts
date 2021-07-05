/**
 * Adds the values from one Array onto another Array, returned as a new Array (ie, it does not mutate the first Array).
 * This operation is recursive, so you can supply as many arrays as you wish.
 * @param {Array<*>} firstArr - An Array of values (of any type)
 * @param {Array<*>} secondArr - An Array of values (of any type)
 * @returns {Array<*>} A new Array with the values from the second array concatenated onto those from the first
 */
export default function concat<T extends any[]>(firstArr: T, secondArr: T): T
