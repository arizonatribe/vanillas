import { AnyObject, Spec, StringMap } from "./src/types"
/**
 * Check an Array of items (of any type) to see if any item satisfies a given predicate function.
 * Exits when the first match is found.
 * @param {function} pred - A predicate function to evaluate against each item in a given array
 * @param {Array<*>} arr - An array of items to evaluate against the predicate function
 * @returns {boolean} Whether or not any items in the array matched the predicate function
 */
export function any(
  pred: (...params: any[]) => any,
  arr: readonly any[]
): boolean


/**
 * Blends two values together based on their type.
 * If both are objects this would result in a new object with the second value's props merged onto the first's.
 * If the first value is an array, this would result in a new array with the second value concatenated onto the first value.
 * If both values are strings or numbers, a new string will be returned with the second value added onto the first.
 * @param {string|number|object|Array<*>} firstVal - A value that will have another appended onto
 * @param {string|number|object|Array<*>} secondVal - A value to append to the first value
 * @returns {string|number|object|Array<*>} A new Array, Object, or String that has the characters/values from the second provided value merged _after_ those from the first provided value
 */
export function append<T extends string | number | AnyObject | any[]>(
  firstVal: T,
  secondVal: T
): T


/**
 * Assigns the values from one or more Objects onto another Object.
 * This mutates the original Object.
 * @param {object} obj - An Object to mutate with the values from one (or more) additionally supplied Objects
 * @param {Array<object>} ...resOfObjects - One or more Objects to extract from and assign onto the first Object
 * @returns {object} The first object mutated with the values from any other object passed in
 */
export function assign(
  obj: AnyObject,
  ...resOfObjects: AnyObject[]
): AnyObject


/**
 * Recursively copies the content of an Object into a new Object
 * @param {object} obj - An Object (or Array) from which to create a deep copy
 * @returns {object} The new (cloned) Object (or Array)
 */
export function clone<T extends AnyObject>(obj: T | T[]): T | T[]


/**
 * Combines two values of the same type (if it makes sense to combine them).
 * Numbers are summarized, strings and arrays are concatenated together, and true objects are merged (the second value merged on top of the first).
 * In any other case only the first value is returned.
 * @param {object|Array<*>|number} val1 - The base value to be combined with
 * @param {object|Array<*>|number} val2 - The value to combine
 * @returns {object|Array<*>|number} If the values are of the same type, this represents the combined value of the two of them. Otherwise only the first value is returned
 */
export function combine<T extends AnyObject | number | any[]>(
  val1: T,
  val2: T
): T

/**
 * Creates a chain of Functions that will be executed in sequnce (from right to left), with the value from the previous Function fed into the next Function.
 * The value that the chain of functions will executed on can be provided later.
 * @param {Array<function>} ...fns - One or more function to execute (in sequential order) on a value that will be supplied later
 * @returns {function} A single Function that is ready to receive a value and pass it through the composed chain of Functions
 */
export function compose(
  ...fns: ((...params: any[]) => any)[]
): (...params: any[]) => any

/**
 * Adds the values from one Array onto another Array, returned as a new Array (ie, it does not mutate the first Array).
 * This operation is recursive, so you can supply as many arrays as you wish.
 * @param {Array<*>} firstArr - An Array of values (of any type)
 * @param {Array<*>} secondArr - An Array of values (of any type)
 * @returns {Array<*>} A new Array with the values from the second array concatenated onto those from the first
 */
export function concat<T extends any[]>(firstArr: T, secondArr: T): T

/**
 * Several pieces of conditional logic to apply against a value and the _first_ one which matches will have a corresponding transformation applied to it.
 *
 * Supply an Array of pairs:
 *   - the first value is the conditional logic (`Function`) to match against the value
 *   - the second value is the transformation (`Function`) to apply to the value if the condition was matched
 *
 * __Note__: if your tranformation is _not_ a function then it will returned as-is in response to a succesfully met condition
 * @param {Array<Array<function>>} conditionalTransforms - An array of arrays (which have two values: the condition function and the transformation function)
 * @param {*} val - A value of any type that will be transformed according to the appropriate condition.
 * @returns {*} The provided value transformed by the appropriate matching conditional transformation
 */
export function cond(conditionalTransforms: ((...params: any[]) => void)[][], val: any): any

/**
 * Checks if a given value is present in a String OR Array
 * @param {string|number} val - A value which may be present in the String/Array
 * @param {Array<string|number>|string} arr - An Array or String which may contain the provided value
 * @returns {boolean} Whether or not the String|Array contains the provided value
 */
export function contains(
  val: string | number,
  arr: readonly string[] | readonly number[] | string
): boolean

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
export function converge(
  fn: (...params: any[]) => any,
  ...forkedFunctions: ((...params: any[]) => any)[]
): (...params: any[]) => any

/**
 * Run several Functions (or composed chains of Functions) onto the same input and converges their results as arguments to another Function.
 * Compare to "converge" however the difference is that this is _always_ intended to be used with multiple input values _and_ each of those values corresponds to one of the forked functions.
 * They all still converge into one Function, but the forked function just don't receive the same input values.
 * @param {function} fn - A Function to converge the results (from executing all the others) into
 * @param {Array<function>} ...forkedFunctions - Two or more Functions (should be at least two, otherwise you're using the wrong util; use compose instead) that will later receive the same input
 * @returns {function} A wrapped Function that is ready to receive multiple values that each correspond to one of the fork functions, converging those results as _arguments_ to the first Function you supplied
 */
export function convergeZip(
  fn: (...params: any[]) => any,
  ...forkedFunctions: ((...params: any[]) => any)[]
): (...params: any[]) => any

/**
 * Takes a Function whose params are meant to be supplied all at once and changes it so they can be supplied one at a time.
 * As each argument is supplied a new Function is returned that is ready to receive the next argument.
 * This continues until all arguments for your origianl function have been supplied and then the actual result is returned.
 *
 * Note: you cannot set default values for curried function params (again, you _cannot_ set default values for curried function params)
 * @param {function} fn - A Function whose signature needs to changed from requiring all at once to providing them one (or more) at a time.
 * @returns {function} A new Function that will wait until all arguments have been supplied before returning a result (otherwise it will continue to return a new Function that is ready to receive the next argument)
 */
export function curry(fn: (...params: any[]) => any): (...params: any[]) => any

/**
 * Same as the regular curry function, but you must also specify the number of arguments that the curried function will take before being fully executed.
 * You would use this in cases where it cannot be inferred from the curried function itself.
 * @param {number} arity - The number of arguments the curried function will received before being executed
 * @param {function} fn - A Function whose signature needs to changed from requiring all at once to providing them one (or more) at a time.
 * @returns {function} A new Function that will wait until all (arity) arguments have been supplied before returning a result (otherwise it will continue to return a new Function that is ready to receive the next argument)
 */
export function curryN(
  arity: number,
  fn: (...params: any[]) => any
): (...params: any[]) => any

/**
 * Compares two lists of Strings/Numbers and returns the values that are different between the two lists
 * @param {Array<string|number>} arr1 - An Array of Strings/Numbers
 * @param {Array<string|number>} arr2 - An Array of Strings/Numbers
 * @returns {Array<string|number>} An array of values that are different between the two lists
 */
export function difference<T extends (string|number[])>(
  arr1: T,
  arr2: T
): T

/**
 * A faster forEach that provides the same API as native.
 * @param {function} fn - A Function to execute for each iteration. It will receive the value, index and full array (respectively) as args
 * @param {Array<*>} arr - An Array to iterate over (any value will be passed into the iterate Function)
 */
export function each(fn: (...params: any[]) => any, arr: any[]): void

/**
 * A function that accepts two functions and a value and will return the first result which is "truthy".
 * This function is curried because it doesn't make any sense to even have it unless you have the functions ahead of time but not the value.
 * @param {function} fnA - The first function to be executed on the value
 * @param {function} fnB - The second function to be executed on the value
 * @param {*} val - A value to be passed into the functions
 * @returns {*} The result of executing value passed in
 */
export function eitherOr(fnA: (...params: any[]) => any, fnB: (...params: any[]) => any, val: any): any


/**
 * Extracts an Array of key/value pairs from an Object.
 * @param {object} obj - The input object from which to extract prop keys and values
 * @returns {Array<string|*>} An Array of key/value pairs corresponding to those on the input object
 */
export function entries<T extends AnyObject>(obj: T): (keyof T | T[keyof T])[]


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
export function filter<T extends AnyObject | any[] | string>(
  fn: (...params: any[]) => any,
  val: T
): T


/**
 * Applies a filtering function you provide over every value in a given Object.
 * @param {function} fn - A filtering function that is invoked on every value in the provided Object
 * @param {object} obj - An Object whose values will be filtered
 * @returns {object} A new Object that is the result of the filtering operation over all the values in the original Object
 */
export function filterObject<T extends AnyObject>(fn: (...params: any[]) => any, obj: T): T

/**
 * Applies a filtering function you provide over every character in a given string.
 * @param {function} fn - A filtering function that is invoked on every char in the provided String value
 * @param {string} str - A string value to filter over
 * @returns {string} A new String value that is the result of the filtering operation over the original string
 */
export function filterString(fn: (...params: any[]) => any, str: string): string

/**
 * Find a single value from an array of values, based on criteria defined in a predicate function.
 * @param {function} pred - A predicate function to apply to the array of values (It should take a val as input and return a Boolean as output).
 * @param {Array<*>} arr - An array of values from which to find one particular matching value
 * @returns {*} Either a value from the array that matched the predicate function or undefined (if no match)
 */
export function find(pred: (...params: any[]) => any, arr: any[]): any

/**
 * Find the index of a single value from an array of values, based on criteria defined in a predicate function.
 * @param {function} pred - A predicate function to apply to the array of values (It should take a val as input and return a Boolean as output).
 * @param {Array<*>} arr - An array of values from which to find the index of one particular matching value
 * @returns {number} Either the index of the value from the array that matched the predicate function or negative one (-1, if no match).
 */
export function findIndex(pred: (...params: any[]) => any, arr: any[]): number

/**
 * Extracts the first value of an array of values.
 * @param {Array<*>} arr - An array of values from which to extract the first value
 * @returns {*} The value at the first index of the supplied array (which may be undefined)
 */
export function first(arr: any[]): any

/**
 * Extracts nested arrays (of any depth) from a provided array, placing them onto on single new array.
 * @param {Array<Array<*>|*>} arr - An array of values that may or may not be nested arrays themselves
 * @returns {Array<*>} A new array of values, but with any nested arrays from the original input extracted onto one single (flat) array
 */
export function flatten<T extends any[]>(arr: T | T[]): T


/**
 * A light wrapper around native `for .. in`, but will only iterate over an Object's own properties.
 * @param {function} fn - A function to execute iteratively, which will receive the `key`, `value`, and `object` (respectively)
 * @param {object} obj - An object whose keys will be iterated over
 */
export function forIn(fn: (...params: any[]) => any, obj: AnyObject): void

/**
 * Performs a fuzzy search on a list of strings or objects.
 * If a list of objects, provided the prop extraction function so the search can find the correct field(s)
 * This is heavily inspired by (most of) the algorithm used by [Matt York's](https://github.com/myork/fuzzy) fuzzy search function,
 * however several features were not carried over and his implementation of that alrgorithm has been significantly changed to achieve a 25% speed improvement.
 * Please see his original work - called [fuzzy](https://www.npmjs.com/package/fuzzy) MIT - if you need some of his additional options.
 * @param {function} propFn - A function which will extract all the fields which you wish to fuzzy search on. Omit if the list is a list of strings
 * @param {string} needle - The search value itself
 * @param {boolean} [caseSensitive = false] - Whether or not to perform a case-sensitive search
 * @param {Array<string|object>} arr - An array of string values or objects which have string values to be searched on
 * @returns {Array<string|object>} The filtered list of search results
 */
export function fuzzy<T extends string[] | object[]>(
  propFn: (...params: any[]) => any,
  needle: string,
  caseSensitive: boolean,
  arr: T
): T

/**
 * Gets the type for any value. If available will inspect the constructor name, otherwise will use the typeof
 * @param {*} val - A value of any kind
 * @returns {string} The stringified representation of the value's type
 */
export function getType(val: any): typeof val


/**
 * Checks if a given Object contains a specified prop name
 * @param {string} key - A prop name to look for in the object
 * @param {object} obj - An Object to inspect for a given prop
 * @returns {boolean} Whether the object contains the specified prop
 */
export function has<T extends AnyObject, K extends keyof T>(key: string | number | Symbol, obj: T): key is K


/**
 * Checks if a given Object contains a (potentially) nested property of a specified path
 * @param {string|Array<string>} prop - A prop name, a dot-separated prop path, or an array of prop path "pieces" to look for in the object
 * @param {object} obj - An Object to inspect for a given prop at the specified path
 * @returns {boolean} Whether the object contains the specified prop path
 */
export function hasNestedProp<T extends AnyObject>(
  prop: string[] | string,
  obj: T
): boolean

/**
 * A function that always returns the value passed to it
 * @param {*} v - A value to be returned
 * @returns {*} The value passed in
 */
export function identity<T>(v: T): T

/**
 * Compares two lists of Strings/Numbers and returns the values that are in common (intersect) between the two lists
 * @param {Array<string|number>} arr1 - An Array of Strings/Numbers
 * @param {Array<string|number>} arr2 - An Array of Strings/Numbers
 * @returns {Array<string|number>} The values in common between the two lists
 */
export function intersection<T extends (string|number[])>(arr1: T, arr2: T): T


/**
 * Swaps the values for keys in a given object. So the values in that object should be the kind that _can_ be converted to unique string values
 * @param {object} obj - An object whose values _can_ be swapped for keys
 * @returns {object} A new object whose keys were the values from the original object
 */
export function flipKeyValues<T extends StringMap>(obj: T): { [k in T[keyof T]]: keyof T }

/**
 * Checks to see if a value is a certain type.
 * You may specify that type as a case-insensitive string
 * (ie, 'string', 'boolean', 'object', 'function', 'array', 'regexp', 'date', 'set, 'map'), OR a JavaScript type constructor function (ie, String, Function, Boolean, Array, RegExp, Date, Set, Map).
 * @example
 * is('boolean', true)
 * is('array', [1, 2, 3])
 * is(RegExp, /[a-z0-9]/)
 * is(Function, () => null)
 * @param {function} ofType - A JavaScript type constructor function (like `Function`, `String`, `RegExp`, `Boolean`, `Array`, `Object`, etc.) or a string value matching the name of one
 * @param {*} val - A value (of any type)
 * @returns {boolean} Whether or not the value matches the specified type
 */
export function is(ofType: ((...params: any[]) => any) | string, val: any): boolean

/**
 * Checks if a given value is "array-like".
 *
 * This includes:
 * - Array
 * - Set
 * - WeakSet
 * - Float64Array
 * - Float32Array
 * - Int32Array
 * - Uint16Array
 * - Int16Array
 * - Uint8ClampedArray
 * - Uint8Array
 * - Int8Array
 * @param {*} val - A value to check as being an array
 * @returns {boolean} Whether the value is an array-like type
 */
export function isArrayish(val: any): val is (Set<any>|WeakSet<any>|Float32Array|Float64Array|Int32Array|Uint8Array|Int16Array|Uint8ClampedArray|Uint8Array|Int8Array|any[])

/**
 * Checks a value to see if it is a String containing either no characters OR no characters _except_ for whitespace.
 * @param {*} val - A value of any type
 * @returns {boolean} Whether or not the value is a blank string
 */
export function isBlankString(val: any): val is string

/**
 * Checks if a value is empty. Arrays, Objects, Strings, Sets, and Null/Undefined values are considered empty if their length (or size) prop is zero (or if they are Null or Undefined).
 * Whitespace-only strings are NOT considered empty (use `isBlankString` instead).
 * @param {*} val - A value of any type which may be considered empty
 * @returns {boolean} Whether or not the value is empty
 */
export function isEmpty(val: any): val is null | undefined

/**
 * Checks if two provided values are deeply equal.
 * If Objects or Arrays (or Array-like values) are provided, they are inspected recursively.
 * Primitive values are checked to see if they are stricly equal (ie triple equals; no type coercion).
 * @param {*} firstVal - A value which may be null, undefined, a JavaScript primitive value, an array of values, an array-like value, or an object
 * @param {*} secondVal - A value which may be null, undefined, a JavaScript
 * @returns {boolean} Whether or not the two values are deeply equal
 */
export function isEqual(firstVal: any, secondVal: any): boolean

/**
 * Checks a value to see if it is an integer.
 * @param {*} val - A value (of any type)
 * @returns {boolean} Whether or not the value is an integer
 */
export function isInteger(val: any): val is number

/**
 * Checks to see if a value is a Map or WeakMap
 * @param {*} val - A value (of any type)
 * @returns {boolean} Whether or not the value is a Map or WeakMap
 */
export function isMap(val: any): val is Map<string, any>

/**
 * Checks to see if a value is null OR undefined
 * @param {*} val - A value (of any type)
 * @returns {boolean} Whether or not the value is null or undefined
 */
export function isNil(val: any): val is null | undefined


/**
 * A high-speed, mostly adequate check of a value which may be an Object.
 * This excludes values that are _technically_ an Object but in practice are not what you _really_ mean when you speak of Objects.
 * @param val - A value (of any type)
 * @returns Whether or not the value is an Object
 */
export function isObject(val: any): val is AnyObject | {}

/**
 * Tests whether or not a given value is object-like
 * This means a hashmap, map, weak map, object literal, instantiated custom class,
 * but _not_ some of the kinds of constructs which JavaScript considers to be technically an object (Error, Array, Null, Function, Date, etc.)
 * @param {*} val - A value that may or may not be object-like
 * @returns {boolean} Whether or not the value is object-like
 */
export function isObjectish(val: any): boolean

/**
 * Checks if a given value is of a primitive type (ie, Boolean, String, Number, or Symbol).
 * @param {*} val - A value which may be of a primitive type
 * @returns {boolean} Whether or not the value is primitive
 */
export function isPrimitive(val: any): val is boolean | number | string | Symbol

/**
 * Checks if a value is a JavaScript Promise. This just means a deferred object/function with a method named `then`.
 * @param {*} val - A value of any type which may be a promise
 * @returns {boolean} Whether or not the value is a promise
 */
export function isPromise(val: any): val is Promise<any>

/**
 * Inspects two values to see if they are the same type.
 * The typeof and (if necessary) constructor names are inspected during this check.
 * @param {*} val1 - A value (of any type)
 * @param {*} val2 - A value (of any type)
 * @returns {boolean} Whether or not the two values are of the same type
 */
export function isSameType(val1: any, val2: any): boolean

/**
 * Checks to see if a value is a Set or WeakSet
 * @param {*} val - A value (of any type)
 * @returns {boolean} Whether or not the value is a Set or WeakSet
 */
export function isSet(val: any): val is Set<any> | WeakSet<any>

/**
 * Inspects two values to see if they are strictly equal, meaning no type coercion or deepyly nested equality checks are performed.
 * A very simple triple equals is all that is used.
 * @param {*} val1 - A value (of any type)
 * @param {*} val2 - A value (of any type)
 * @returns {boolean} Whether or not the two values are strictly equal
 */
export function isStrictEqual(val1: any, val2: any): boolean

/**
 * Checks to see if a value is undefined
 * @param {*} val - A value (of any type)
 * @returns {boolean} Whether or not the value is undefined
 */
export function isUndefined(val: any): val is undefined

/**
 * Retrieves the last value from an Array
 * @param {Array<*>} arr - An array of any kind of values
 * @returns {*} The last value from a given array
 */
export function last(arr: any[]): any


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
export function map<T extends AnyObject | any[] | string> (
  fn: (...params: any[]) => any,
  val: T
): T


/**
 * Applies a mapping function you provide over every value in a given Object.
 * @param {function} fn - A mapping function that is invoked on every value in the provided Object
 * @param {object} obj - An Object whose values will be mapped over
 * @returns {object} A new Object that is the result of the mapping operation over all the values in the original Object
 */
export function mapObject<T extends AnyObject>(fn: (...params: any[]) => any, obj: T): T


/**
 * Applies a mapping function you provide over every value in a given Object (recursively).
 * @param {function} fn - A mapping function that is invoked on every value in the provided Object
 * @param {object} obj - An Object whose values will be mapped over (recursively)
 * @returns {object} A new Object that is the result of the mapping operation over all the values in the original Object
 */
export function mapObjectRecursive<T extends AnyObject>(
  fn: (...params: any[]) => any,
  obj: T
): T


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
export function mapSpec<T extends AnyObject, S extends Spec>(
  spec: S,
  inputObj: T
): T

/**
 * Applies a mapping function you provide over every character in a given string.
 * @param {function} fn - A mapping function that is invoked on every char in the provided String value
 * @param {string} str - A string value to map over
 * @returns {string} A new String value that is the result of the mapping operation over the original string
 */
export function mapString(fn: (...params: any[]) => any, str: string): string

/**
 * Takes a snapshot of the input args and the output result for a provided function, and on repeated usage will shortcut invoking the function and return the cached output instead, whenever the same input args are supplied to the function.
 * @param {function} fn - A function whose input values (supplied later) will be cached with its output result, so that the invoking the function can be skipped the next time the same values are passed to it
 * @returns {function} A memoized version of the original function. It will cache the input values supplied to it each time it is used
 */
export function memoize(fn: (...params: any[]) => any): (...params: any[]) => any


/**
 * Merges the values from 2 or more Objects together into a new Object.
 * Null and Undefined values are handled gracefully, and if the second value is a primitive it will be returned as-is, instead of trying to merge it onto the first.
 * @param {object} val - The first value to merge onto (will not get mutated though)
 * @param {object} val2 - A value to merge onto the first
 * @returns {object} A new value that contains the combined values from all the values passed in
 */
export function merge(
  val: AnyObject | AnyObject[],
  val2: AnyObject | AnyObject[]
): AnyObject | AnyObject[]


/**
 * Removes specified keys from an object (after cloning the Object).
 * @param {Array<string>} keys - An array of keys to search for in the Object and exclude from the output
 * @param {object} obj - An Object from which to copy and remove keys
 * @returns {object} A copy of the original Object, but without the specified keys
 */
export function omit<T extends AnyObject, K extends keyof T>(keys: K[], obj: T): Partial<T>

/**
 * Removes all `null` or `undefined` values from a given object
 * @param obj - An Object from which to copy and remove null/undefined
 * @returns A copy of the original Object, but without any `null` or `undefined` values
 */
export function omitNull(obj: object): object

/**
 * Removes all `undefined` values from a given object
 * @param obj - An Object from which to copy and remove undefined
 * @returns A copy of the original Object, but without any `undefined` values
 */
export function omitUndefined(obj: object): object


/**
 * Removes everything _except_ the specified keys from an object (after cloning the Object).
 * @param {Array<string>} keys - An array of keys to search for in the Object and include from the output
 * @param {object} obj - An Object from which to copy and remove keys
 * @returns {object} A copy of the original Object, but with _only_ the specified keys
 */
export function pick<T extends AnyObject, K extends keyof T>(keys: K[], obj: T): Partial<T>

/**
 * Creates a chain of Functions that will be executed in sequnce (from left to right), with the value from the previous Function fed into the next Function.
 * The value that the chain of functions will executed on can be provided later.
 * @param {Array<function>} ...fns - One or more function to execute (in sequential order) on a value that will be supplied later
 * @returns {function} A single Function that is ready to receive a value and pass it through the piped chain of Functions
 */
export function pipe(
  ...fns: ((...params: any[]) => any)[]
): (...params: any[]) => any



/**
 * Merges two values together, placing the characters (or values) from one before those from the other.
 * @param {string|number|object|Array<*>} firstVal - An Array, Object, String or Number that the will have a new value(s) merged before its own characters/values
 * @param {string|number|object|Array<*>} secondVal - An Array, Object, String or Number that the will merge _before_ those from the first provided value
 * @returns {string|number|object|Array<*>} A new Array, Object, or String that has the characters/values from the second provided value merged _before_ those from the first provided value
 */
export function prepend<T extends string | number | AnyObject | any[]>(
  firstVal: T,
  secondVal: T
): T

/**
 * Gathers an Array of Functions that return Promises and returns an Array of results, once they have all completed.
 * The only difference between this and native Promise.all() is that these promises will _all_ be resolved/rejected before the final Promise (containing all the results) is returned. With native Promise.all(), the first unhandled rejection will cause the whole endeavor to be terminated.
 * Addtionally you can pass in a flag to force caught errors to be ignored entirely.
 * @param {Array<function>} requests - An array of Functions that return Promises
 * @param {boolean} ignoreErrors - Whether or not to ignore errors entirely (this will cause all the results to be returned and any Errors will be returned in place of the results)
 * @returns {Promise<*>} A Promise that will resolve once all of the Promises are resolved/rejected
 */
export function promiseAll(requests: ((...params: any[]) => void)[], ignoreErrors: boolean): Promise<any>

/**
 * Gathers an Array of Promises (or of Functions that return Promises) and executes them in sequential order they appear in the Array.
 * The value from the last will be supplied to the next (in case you need it).
 * @param {Array<function>} requests - An array of Promises (or of Functions that return Promises) which need to be executed in sequential order
 * @returns {Promise<*>} A Promise that will resolve when each of the requests completes
 */
export function promiseChain(...requests: (Promise<any>[] | ((...params: any[]) => void)[])[]): Promise<any>

/**
 * Gathers an Array of Promises (or of Functions that return Promises) and executes them from right to left.
 * You can pass them all together in either a single array, or one by one as arguments (ie, in the style of either `apply` or `call`).
 * @param {Array<function>} requests - An array of Promises (or of Functions that return Promises) which need to be executed in sequential order
 * @returns {Promise<*>} A Promise that will resolve when each of the requests completes
 */
export function promiseCompose(...requests: (Promise<any>[] | ((...params: any[]) => void)[])[]): Promise<any>


/**
 * Looks for a specified key on an Object you provide.
 * The is performed safely and will not throw an error if something on the prop path chain you specify doesn't exist.
 * Will always return `undefined` if a prop path cannot be resolved (rather than throwing).
 * @param {string|Array<string>} prop - A top-level key OR a deeply nested prop path (which may be represented as an array or as a single dot-delimited string)
 * @param {object} obj - An object which may contain a specified prop
 * @returns {*} The value associated with the nested prop path OR undefined if it does not exist
 */
export function propAt(prop: string | string[], obj: AnyObject): any | undefined


/**
 * Looks for a specified key on an Object you provide and checks to see if its corresponding value equals the value you specifiy.
 * @param {string|Array<string>} prop - A key to search for on the Object
 * @param {*} val - A value that the extracted prop will be compared against
 * @param {object} obj - An object which may contain a specified prop
 * @returns {boolean} Whether or not the requested prop equals the specified value
 */
export function propEquals(prop: string | string[], val: any, obj: AnyObject): boolean


/**
 * Looks for a specified key on an Object you provide and checks to see if its corresponding value is of the type you specifiy.
 * @param {function} type - A JavaScript type constructor function (ie `Boolean`, `RegExp`, `Date`, `Array`, `Object`, `Number`, `String`, etc) OR a string represention of the type (ie, "boolean", "regexp", "date", "array", "object", "number", "string", etc)
 * @param {string|Array<string>} prop - A key to search for on the Object
 * @param {object} obj - An object which may contain a specified prop
 * @returns {boolean} Whether or not the requested prop is of the type specified
 */
export function propIs(
  type: ((...params: any[]) => any) | string,
  prop: string | string[],
  obj: AnyObject
): boolean


/**
 * Attempts to find a specified key on an Object you provide, and if not found will fall back to an additional value you specify.
 * @param {*} fallback - A value to fall back on if the requested key does not exist on the provided Object
 * @param {string|Array<string>} prop - A key to search for on the Object
 * @param {object} obj - An object which may contain a specified prop
 * @returns {*} Either the requested prop (from the Object) or the fallback value
 */
export function propOr(fallback: any, prop: string | string[], obj: AnyObject): any


/**
 * Looks for a specified key on an Object you provide and sets it to the provided value.
 * If the path does not exist, it will be created (you can check for the path via `propIs` or `propAt` or `propEquals` first if you don't wish to create the path every time).
 * The is performed safely and will not throw an error if somethign on the prop path chain you specify doesn't exist.
 * @param {string|Array<string>} prop - A top-level key OR a deeply nested prop path (which may be represented as an array or as a single dot-delimited string)
 * @param {*} val - A value to be placed at the provided property path
 * @param {object} obj - An object which onto which the value will be placed
 * @returns {object} The original object, but modified to have the provided value placed at the specified path it does not exist
 */
export function propSet(prop: string | string[], val: any, obj: AnyObject): any


/**
 * A simple wrapper around native Array.prototype.reduce(), for use in a compose/pipe chain of functions.
 * Can also reduce the key/value pairs of an object, if one is supplied in place of an array.
 * @param {function} fn - A function to control the reduction of each item in the array|object into the single output value
 * @param {*} defaultVal - A starting value for the reduction accumulator
 * @param {Array<*>|object} arr - An array of values of any type OR an object containing key/value pairs
 * @returns {Array<*>|object} The original Array|Object somehow reduced to one value, according to the supplied function
 */
export function reduce<T extends AnyObject | any[]>(
  fn: (...params: any[]) => any,
  defaultVal: any,
  arr: T
): T


/**
 * Renames a set of keys in a given object (removing the old ones)
 * @param {object} keyMap - An object whose keys are the _current_ key names and whose values are the _new_ key names
 * @param {object} obj - An Object whose keys will be renamed
 * @returns {object} A new Object that has all the specified keys renamed to their new names
 */
export function renameKeys<
  T extends AnyObject,
  KM extends { [S in keyof T]: string }
>(
  keyMap: KM,
  obj: T
): {
  [k in (KM[keyof KM])]: T[keyof T]
} & T


/**
 * Recursively shims an Object.
 * Every time the getter is invoked (which happens whenever prop paths are referenced in the consuming code), the path is shimmed with another Proxy.
 * It is not a polyfill but rather a way to keep deep prop paths that may not exist on the source object from throwing an error.
 * @param {object} obj - An object that will be the Proxy's source
 * @returns {object} An Object that will return props on the source Object if they exist but safely handle missing prop paths without throwing errors.
 */
export function shim(obj: AnyObject): typeof Proxy


/**
 * Checks the length (or size) of many different types of values:
 *   - Array
 *   - Set
 *   - Map
 *   - Object (num of keys)
 *   - String (num of chars)
 *   - Function (num of params)
 * @param {object|string|Map|Set|function|Array<*>} val - A value of type Object, String, Array or Function
 * @returns {number} The length of the String or Array, OR the number of keys in the Object
 */
export function size(val: AnyObject | Set<any> | Map<string, any> | string | any[] | ((...params: any[]) => any)): number

/**
 * Transforms a string value into one which is hyphenated.
 * Hyphens and underscores are removed and interpred as the boundaries for new words.
 * The first letter of each new word - not preceded by whitespace - is capitalized.
 * @param {string} str - A string which may contain underscores and hyphens and/or may be title-cased.
 * @returns {string} A new string that is without hyphens and underscores and the first letter of every new word boundary is capitalized, unless preceded by whitespace
 */
export function toCamelCase(str: string): string

/**
 * Converts a given value to an Integer and rounds up or down floating point values appropriately.
 * If the values is a `Boolean`, then `true` will yield `1` and `false will yield `0`.
 * If `NaN` then zero will always be returned.
 * @param {string} str - A string which may be numeric
 * @returns {number} Either the successfully converted number or zero (if it was NaN)
 */
export function toInteger(str: string): number

/**
 * Transforms a string value into one which is hyphenated.
 * Whitespace and underscores are replaced with hyphens, and uppercase letters are interpreted as boundaries for new hyphenated words.
 * @param {string} str - A string which may contain uppercase characters
 * @returns {string} A new string that is a hyphenated representation of the original string
 */
export function toKebabCase(str: string): string

/**
 * Simple wrapper around String.prototype.toLowerCase() that is provided for consistency with the non-native string case methods (`toKebabCase()`, `toCamelCase()`, etc)
 * @param {string} str - A string which may contain uppercase characters
 * @returns {string} A new string that is an lowercase representation of the original string
 */
export function toLowerCase(str: string): string

/**
 * Transforms a string value into one which is separated by underscores.
 * Whitespace and hyphens are replaced with underscores, and uppercase letters are interpreted as boundaries for new underscore-separated words.
 * @param {string} str - A string which may contain uppercase characters or hyphens
 * @returns {string} A new string that is an lowercase representation of the original string
 */
export function toSnakeCase(str: string): string

/**
 * Transforms a string value into one which is title-cased. The first letter of any word is capitalized.
 * @param {string} str - A string which may contain uppercase characters
 * @returns {string} A new string that is an lowercase representation of the original string
 */
export function toTitleCase(str: string): string

/**
 * Simple wrapper around String.prototype.toUpperCase() that is provided for consistency with the non-native string case methods (`toKebabCase()`, `toCamelCase()`, etc)
 * @param {string} str - A string which may contain lowercase characters
 * @returns {string} A new string that is an uppercase representation of the original string
 */
export function toUpperCase(str: string): string


/**
 * Transforms an object's key/value pairs into an encoded URI string, delimited by ampersands &
 * @param {object} obj - An object whose key/value pairs need to be serialized into a single string.
 * @returns {string} A new string that represents the key/value pairs on the originating object
 */
export function toUriEncoded(obj: AnyObject): string

/**
 * Filters an array of values down to only those which are unique
 * @param {Array<*>} list - An array of values which may or may not contain duplicates
 * @returns {Array<*>} A new list containing only the unique values from the original array
 */
export function uniq<T extends any[]>(list: T): T

/**
 * Filters an array of values down to only those which are unique, based on a provided predicate function (or shorthand for retrieving a prop inside an object)
 * @param {function} pred - A predicate function
 * @param {Array<*>} list - An array of values which may or may not contain duplicates
 * @returns {Array<*>} A new list containing only the unique values from the original array
 */
export function uniqBy<T extends any[]>(pred: ((...params: any[]) => any) | string, list: T): T

/**
 * Transforms a thunk (of however many levels deep) into a single function that will received all the args at once
 * @param {function} thunk - A function that returns a function (which may return a function, and so on)
 * @returns {function} A single function that is ready to receive all the arguments at once
 */
export function unthunk(thunk: (...params: any[]) => any): (...params: any[]) => any


/**
 * Applies many validations to an object of values.
 * Those validations are written as Arrays of pairs:
 *   - for the value at the first index supply your validation function that _must_ pass
 *   - for the value at the second index supply a corresponding error message (OR function returning an error message)
 *     should the validation fail.
 *
 * If you do not supply a validation error message, a default one will be built that looks like:
 *   `"${val}" is not valid for "${key}"`
 *
 * And of course, you can write your validation error message as a function that will receive the value and key name as its first and second params (you should return a message as a string).
 *
 * If you do not supply valid input (Array of validator function and validation error message), rather than throwing an error it will be replaced with a validation function that always returns `false` and a corresponding error message of:
 *   `Validations for "${key}" are broken`
 * @example
 * validate(isRequired, val)
 * validate([isRequired, 'field is required'], val)
 * validate([
 *   [isRequired, (_, key) => `${key} is required`],
 *   [isValidThing, val => `${val} is not a valid thing`],
 *   [mustBeBlue, 'Your favorite color must be blue'],
 *   [functionalOrObjectOriented]
 * ], val)
 * @param {Array<function>} validations - An array of validator functions and their corresponding error message
 * @param {object} values - An Object of key value pairs, the keys should correspond to validators and the values are that which is to be validated
 * @returns {object} An object containing the key names of the values and one or more validation error messages (Only key names whose values were found to be invalid will show up on this output Object; an empty Object means everything was valid)
 */
export function validate<T extends AnyObject>(
  validations: ((...params: any[]) => void)[],
  values: T
): { [k in keyof T]?: string[] }


/**
 * A simple polyfill for Object.values()
 * @param {object} obj - An Object whose values need to be retrieved
 * @returns {Array<*>} A list of all the values in the provided Object, ordered by keys
 */
export function values<T extends AnyObject>(obj: T): T[keyof T][]
