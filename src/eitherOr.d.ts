/**
 * A function that accepts two functions and a value and will return the first result which is "truthy".
 * This function is curried because it doesn't make any sense to even have it unless you have the functions ahead of time but not the value.
 * @param fnA - The first function to be executed on the value
 * @param fnB - The second function to be executed on the value
 * @param val - A value to be passed into the functions
 * @returns The result of executing value passed in
 */
export default function eitherOr(fnA: (...params: any[]) => any, fnB: (...params: any[]) => any, val: any): any
