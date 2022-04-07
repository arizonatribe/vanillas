/**
 * Extracts nested arrays (of any depth) from a provided array, placing them onto on single new array.
 * @param {Array<Array<*>|*>} arr - An array of values that may or may not be nested arrays themselves
 * @returns {Array<*>} A new array of values, but with any nested arrays from the original input extracted onto one single (flat) array
 */
export default function flatten<T extends any[]>(arr: T | T[]): T
