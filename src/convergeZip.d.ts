/**
 * Run several Functions (or composed chains of Functions) onto the same input and converges their results as arguments to another Function.
 * Compare to "converge" however the difference is that this is _always_ intended to be used with multiple input values _and_ each of those values corresponds to one of the forked functions.
 * They all still converge into one Function, but the forked function just don't receive the same input values.
 * @param fn - A Function to converge the results (from executing all the others) into
 * @param ...forkedFunctions - Two or more Functions (should be at least two, otherwise you're using the wrong util; use compose instead) that will later receive the same input
 * @returns A wrapped Function that is ready to receive multiple values that each correspond to one of the fork functions, converging those results as _arguments_ to the first Function you supplied
 */
export default function convergeZip(fn: (...params: any[]) => any): (...params: any[]) => any
