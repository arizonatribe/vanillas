/**
 * Checks if a value is a JavaScript Promise. This just means a deferred object/function with a method named `then`.
 * @param val - A value of any type which may be a promise
 * @returns Whether or not the value is a promise
 */
export default function isPromise(val: any): val is Promise
