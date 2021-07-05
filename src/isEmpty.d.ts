/**
 * Checks if a value is empty. Arrays, Objects, Strings, Sets, and Null/Undefined values are considered empty if their length (or size) prop is zero (or if they are Null or Undefined).
 * Whitespace-only strings are NOT considered empty (use `isBlankString` instead).
 * @param {*} val - A value of any type which may be considered empty
 * @returns {boolean} Whether or not the value is empty
 */
export default function isEmpty(val: any): val is null | undefined | {} | []
