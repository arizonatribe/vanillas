/**
 * Creates a chain of Functions that will be executed in sequnce (from right to left), with the value from the previous Function fed into the next Function.
 * The value that the chain of functions will executed on can be provided later.
 * @param ...fns - One or more function to execute (in sequential order) on a value that will be supplied later
 * @returns A single Function that is ready to receive a value and pass it through the composed chain of Functions
 */
export default function compose(): (...params: any[]) => any
