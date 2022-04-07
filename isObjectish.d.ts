/**
 * Tests whether or not a given value is object-like
 * This means a hashmap, map, weak map, object literal, instantiated custom class,
 * but _not_ some of the kinds of constructs which JavaScript considers to be technically an object (Error, Array, Null, Function, Date, etc.)
 * @param {*} val - A value that may or may not be object-like
 * @returns {boolean} Whether or not the value is object-like
 */
export default function isObjectish(val: any): boolean
