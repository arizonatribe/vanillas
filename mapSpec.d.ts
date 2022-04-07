import { AnyObject, Spec } from "./types"

/**
 * Applies one or more mapping functions to the value in a given Object.
 * But rather than applying the same mapping function to every value in an Object, instead you use a "spec" object to link the appropriate mapping function to the key/val in the input Object.
 *
 * This is similar to Ramda's `evolve()` however you can also set values in your spec that are _not_ functions (which will just override whatever matching key there might be on the input object).
 * Addtionally, it supplies the key and the object as the 2nd and third params to your spec's transformation function, so that you can create props based on the entire input Object (with Ramda you'll need to also use `applySpec()` and in a separate operation to derived these kinds of values).
 *
 * As an example, If you want a mapping function to be applied to a prop called "name", then you would first pass in a spec object with a prop on it called "name" and the value would be the mapping function.
 * Then the actual input object (with the desciption field) will have the matching mapping function from your spec applied to it directly.
 * @example
 * mapSpec({
 *     age: Number,
 *     isAlive: Boolean,
 *     name: str => `${str.charAt(0).toUpperCase()}${str.slice(1)}`
 *   }, {
 *     age: '20',
 *     isAlive: 1,
 *     name: 'john'
 *   })
 * @param {object} spec - An Object whose keys should correspond to keys in the input Object and whose values are mapping functions that will receive the matching input Object's prop as input
 * @param {object} inputObj - The actual input to map over and transform
 * @returns {object} A new Object with all the mapping functions from the spec Object applied to the corresponding values in the input Object (if they exist)
 */
export default function mapSpec<T extends AnyObject, S extends Spec>(
  spec: S,
  inputObj: T
): T
