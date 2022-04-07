/**
 * Checks to see if a value is a Set or WeakSet
 * @param {*} val - A value (of any type)
 * @returns {boolean} Whether or not the value is a Set or WeakSet
 */
export default function isSet(val: any): val is Set<any> | WeakSet<any>
