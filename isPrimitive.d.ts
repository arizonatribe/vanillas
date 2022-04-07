/**
 * Checks if a given value is of a primitive type (ie, Boolean, String, Number, or Symbol).
 * @param {*} val - A value which may be of a primitive type
 * @returns {boolean} Whether or not the value is primitive
 */
export default function isPrimitive(val: any): val is boolean | number | string | Symbol
