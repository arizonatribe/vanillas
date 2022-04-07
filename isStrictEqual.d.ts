/**
 * Inspects two values to see if they are strictly equal, meaning no type coercion or deepyly nested equality checks are performed.
 * A very simple triple equals is all that is used.
 * @param {*} val1 - A value (of any type)
 * @param {*} val2 - A value (of any type)
 * @returns {boolean} Whether or not the two values are strictly equal
 */
export default function isStrictEqual(val1: any, val2: any): boolean
