import { AnyObject } from "./types"

/**
 * Applies a mapping function you provide over a value you provide, according to its type.
 * String values will have the mapping function applied over every character in the String.
 * Objects will have the mapping function applied to every value in the Object.
 * Arrays (or Array-like values) will have the mapping function applied to every value in the Array.
 * If the type of your value is none of the above, the value will be returned as-is.
 * Also, this mapping operation does _not_ mutate the original value.
 * @param {function} fn - A mapping function that is invoked on the provided value
 * @param {object|string|Array<*>} val - An Object/Array/String whose values/chars will be mapped over
 * @returns {object|string|Array<*>} A new value that is the result of the mapping operation over all the chars or values in the original String/Object/Array
 */
export default function map<T extends AnyObject | any[] | string> (
  fn: (...params: any[]) => any,
  val: T
): T
