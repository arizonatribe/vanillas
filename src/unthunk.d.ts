/**
 * Transforms a thunk (of however many levels deep) into a single function that will received all the args at once
 * @param {function} thunk - A function that returns a function (which may return a function, and so on)
 * @returns {function} A single function that is ready to receive all the arguments at once
 */
export default function unthunk(thunk: (...params: any[]) => any): (...params: any[]) => any
