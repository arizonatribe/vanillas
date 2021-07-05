/**
 * Gathers an Array of Promises (or of Functions that return Promises) and executes them from right to left.
 * You can pass them all together in either a single array, or one by one as arguments (ie, in the style of either `apply` or `call`).
 * @param {Array<function>} requests - An array of Promises (or of Functions that return Promises) which need to be executed in sequential order
 * @returns {Promise<*>} A Promise that will resolve when each of the requests completes
 */
export default function promiseCompose(...requests: (Promise<any>[] | ((...params: any[]) => void)[])[]): Promise<any>
