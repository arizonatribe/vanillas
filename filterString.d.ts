/**
 * Applies a filtering function you provide over every character in a given string.
 * @param {function} fn - A filtering function that is invoked on every char in the provided String value
 * @param {string} str - A string value to filter over
 * @returns {string} A new String value that is the result of the filtering operation over the original string
 */
export default function filterString(fn: (...params: any[]) => any, str: string): string
