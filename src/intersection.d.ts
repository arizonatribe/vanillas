/**
 * Compares two lists of Strings/Numbers and returns the values that are in common (intersect) between the two lists
 * @param {Array<string|number>} arr1 - An Array of Strings/Numbers
 * @param {Array<string|number>} arr2 - An Array of Strings/Numbers
 * @returns {Array<string|number>} The values in common between the two lists
 */
export default function intersection<T extends (string|number[])>(arr1: T, arr2: T): T
