/**
 * Checks if a given value is present in a String OR Array
 * @param {string|number} val - A value which may be present in the String/Array
 * @param {Array<string|number>|string} arr - An Array or String which may contain the provided value
 * @returns {boolean} Whether or not the String|Array contains the provided value
 */
export default function contains(
  val: string | number,
  arr: readonly string[] | readonly number[] | string
): boolean
