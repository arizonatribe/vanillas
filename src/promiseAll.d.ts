/**
 * Gathers an Array of Functions that return Promises and returns an Array of results, once they have all completed.
 * The only difference between this and native Promise.all() is that these promises will _all_ be resolved/rejected before the final Promise (containing all the results) is returned. With native Promise.all(), the first unhandled rejection will cause the whole endeavor to be terminated.
 * Addtionally you can pass in a flag to force caught errors to be ignored entirely.
 * @param {Array<function>} requests - An array of Functions that return Promises
 * @param {boolean} ignoreErrors - Whether or not to ignore errors entirely (this will cause all the results to be returned and any Errors will be returned in place of the results)
 * @returns {Promise<*>} A Promise that will resolve once all of the Promises are resolved/rejected
 */
export default function promiseAll(requests: ((...params: any[]) => void)[], ignoreErrors: boolean): Promise<any>
