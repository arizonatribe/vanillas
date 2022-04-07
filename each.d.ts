/**
 * A faster forEach that provides the same API as native.
 * @param {function} fn - A Function to execute for each iteration. It will receive the value, index and full array (respectively) as args
 * @param {Array<*>} arr - An Array to iterate over (any value will be passed into the iterate Function)
 */
export default function each(fn: (...params: any[]) => any, arr: any[]): void
