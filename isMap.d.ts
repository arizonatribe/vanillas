/**
 * Checks to see if a value is a Map or WeakMap
 * @param {*} val - A value (of any type)
 * @returns {boolean} Whether or not the value is a Map or WeakMap
 */
export default function isMap(val: any): val is Map<string, any>
