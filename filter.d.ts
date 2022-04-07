import { AnyObject } from "./types"

/**
 * Applies a filtering function you provide over a value you provide, according to its type.
 * String values will have the filtering function applied over every character in the String.
 * Objects will have the filtering function applied to every value in the Object.
 * Arrays (or Array-like values) will have the filtering function applied to every value in the Array.
 * If the type of your value is none of the above, the value will be returned as-is.
 * @param {function} fn - A filtering function that is invoked on the provided value
 * @param {object|string|Array<*>} val - An Object/Array/String whose values/chars will be filtered
 * @returns {object|string|Array<*>} A new value that is the result of the filtering operation over all the chars or values in the original String/Object/Array
 */
export default function filter<T extends AnyObject | any[] | string>(
  fn: (...params: any[]) => any,
  val: T
): T
