/**
 * Inspects two values to see if they are the same type.
 * The typeof and (if necessary) constructor names are inspected during this check.
 * @param {*} val1 - A value (of any type)
 * @param {*} val2 - A value (of any type)
 * @returns {boolean} Whether or not the two values are of the same type
 */
export default function isSameType(val1: any, val2: any): boolean
