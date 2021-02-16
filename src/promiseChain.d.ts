/**
 * Gathers an Array of Promises (or of Functions that return Promises) and executes them in sequential order they appear in the Array.
 * The value from the last will be supplied to the next (in case you need it).
 * @param requests - An array of Promises (or of Functions that return Promises) which need to be executed in sequential order
 * @returns A Promise that will resolve when each of the requests completes
 */
export default function promiseChain(...requests: (Promise<any>[] | ((...params: any[]) => void)[])[]): Promise<any>
