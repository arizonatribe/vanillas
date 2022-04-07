/**
 * Takes a Function whose params are meant to be supplied all at once and changes it so they can be supplied one at a time.
 * As each argument is supplied a new Function is returned that is ready to receive the next argument.
 * This continues until all arguments for your origianl function have been supplied and then the actual result is returned.
 *
 * Note: you cannot set default values for curried function params (again, you _cannot_ set default values for curried function params)
 * @param {function} fn - A Function whose signature needs to changed from requiring all at once to providing them one (or more) at a time.
 * @returns {function} A new Function that will wait until all arguments have been supplied before returning a result (otherwise it will continue to return a new Function that is ready to receive the next argument)
 */
export default function curry(fn: (...params: any[]) => any): (...params: any[]) => any
