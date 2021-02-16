/**
 * Same as the regular curry function, but you must also specify the number of arguments that the curried function will take before being fully executed.
 * You would use this in cases where it cannot be inferred from the curried function itself.
 * @param arity - The number of arguments the curried function will received before being executed
 * @param fn - A Function whose signature needs to changed from requiring all at once to providing them one (or more) at a time.
 * @returns A new Function that will wait until all (arity) arguments have been supplied before returning a result (otherwise it will continue to return a new Function that is ready to receive the next argument)
 */
export default function curryN(arity: number, fn: (...params: any[]) => any): (...params: any[]) => any
