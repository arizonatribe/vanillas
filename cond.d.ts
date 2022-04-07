/**
 * Several pieces of conditional logic to apply against a value and the _first_ one which matches will have a corresponding transformation applied to it.
 *
 * Supply an Array of pairs:
 *   - the first value is the conditional logic (`Function`) to match against the value
 *   - the second value is the transformation (`Function`) to apply to the value if the condition was matched
 *
 * __Note__: if your tranformation is _not_ a function then it will returned as-is in response to a succesfully met condition
 * @param {Array<Array<function>>} conditionalTransforms - An array of arrays (which have two values: the condition function and the transformation function)
 * @param {*} val - A value of any type that will be transformed according to the appropriate condition.
 * @returns {*} The provided value transformed by the appropriate matching conditional transformation
 */
export default function cond(conditionalTransforms: ((...params: any[]) => void)[][], val: any): any
