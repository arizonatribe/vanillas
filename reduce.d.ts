import { AnyObject } from "./types"

/**
 * A simple wrapper around native Array.prototype.reduce(), for use in a compose/pipe chain of functions.
 * Can also reduce the key/value pairs of an object, if one is supplied in place of an array.
 * @param {function} fn - A function to control the reduction of each item in the array|object into the single output value
 * @param {*} defaultVal - A starting value for the reduction accumulator
 * @param {Array<*>|object} arr - An array of values of any type OR an object containing key/value pairs
 * @returns {Array<*>|object} The original Array|Object somehow reduced to one value, according to the supplied function
 */
export default function reduce<T extends AnyObject | any[]>(
  fn: (...params: any[]) => any,
  defaultVal: any,
  arr: T
): T
