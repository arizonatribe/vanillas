/**
 * Applies a mapping function you provide over every character in a given string.
 * @param fn - A mapping function that is invoked on every char in the provided String value
 * @param str - A string value to map over
 * @returns A new String value that is the result of the mapping operation over the original string
 */
export default function mapString(fn: (...params: any[]) => any, str: string): string
