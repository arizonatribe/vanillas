/**
 * Checks if two provided values are deeply equal.
 * If Objects or Arrays (or Array-like values) are provided, they are inspected recursively.
 * Primitive values are checked to see if they are stricly equal (ie triple equals; no type coercion).
 * @param {*} firstVal - A value which may be null, undefined, a JavaScript primitive value, an array of values, an array-like value, or an object
 * @param {*} secondVal - A value which may be null, undefined, a JavaScript
 * @returns {boolean} Whether or not the two values are deeply equal
 */
export default function isEqual(firstVal: any, secondVal: any): boolean
