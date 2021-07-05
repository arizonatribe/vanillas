/**
 * Run several Functions (or composed chains of Functions) onto the same input and converges their results as arguments to another Function.
 *
 * A common example might be to take an Object that needs to be transformed in several different ways and then merged into one final Object.
 * In that case you can supply a "merge" (or "assign") Function as the convergence Function, and then pass all your Object transforming Functions as additional arguments.
 * When you're ready to receive the actual input Object it will be forked into all the transform Functions and their results will converge into the merge/assign Function you supplied first.
 * @param {function} fn - A Function to converge the results (from executing all the others) into
 * @param {Array<function>} ...forkedFunctions - Two or more Functions (should be at least two, otherwise you're using the wrong util; use compose instead) that will later receive the same input
 * @returns {function} A wrapped Function that is ready to receive a value(s) and pass it (in parallel) into the other Functions, converging those results as _arguments_ to the first Function you supplied
 */
export default function converge(
  fn: (...params: any[]) => any,
  ...forkedFunctions: ((...params: any[]) => any)[]
): (...params: any[]) => any
