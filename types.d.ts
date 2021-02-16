/**
 * Check an Array of items (of any type) to see if any item satisfies a given predicate function.
 * Exits when the first match is found.
 * @param pred - A predicate function to evaluate against each item in a given array
 * @param arr - An array of items to evaluate against the predicate function
 * @returns Whether or not any items in the array matched the predicate function
 */
export function any(pred: (...params: any[]) => any, arr: any[]): boolean

/**
 * Blends two values together based on their type.
 * If both are objects this would result in a new object with the second value's props merged onto the first's.
 * If the first value is an array, this would result in a new array with the second value concatenated onto the first value.
 * If both values are strings or numbers, a new string will be returned with the second value added onto the first.
 * @param firstVal - A value that will have another appended onto
 * @param secondVal - A value to append to the first value
 * @returns A new Array, Object, or String that has the characters/values from the second provided value merged _after_ those from the first provided value
 */
export function append(firstVal: string | number | object | any[], secondVal: string | number | object | any[]): any[] | object | number | string

/**
 * Assigns the values from one or more Objects onto another Object.
 * This mutates the original Object.
 * @param obj - An Object to mutate with the values from one (or more) additionally supplied Objects
 * @param ...resOfObjects - One or more Objects to extract from and assign onto the first Object
 * @returns The first object mutated with the values from any other object passed in
 */
export function assign(obj: object): object

/**
 * Recursively copies the content of an Object into a new Object
 * @param obj - An Object (or Array) from which to create a deep copy
 * @returns The new (cloned) Object (or Array)
 */
export function clone(obj: object | object[]): object | object[]

/**
 * Combines two values of the same type (if it makes sense to combine them).
 * Numbers are summarized, strings and arrays are concatenated together, and true objects are merged (the second value merged on top of the first).
 * In any other case only the first value is returned.
 * @param val1 - The base value to be combined with
 * @param val2 - The value to combine
 * @returns If the values are of the same type, this represents the combined value of the two of them. Otherwise only the first value is returned
 */
export function combine(val1: any, val2: any): any

/**
 * Creates a chain of Functions that will be executed in sequnce (from right to left), with the value from the previous Function fed into the next Function.
 * The value that the chain of functions will executed on can be provided later.
 * @param ...fns - One or more function to execute (in sequential order) on a value that will be supplied later
 * @returns A single Function that is ready to receive a value and pass it through the composed chain of Functions
 */
export function compose(): (...params: any[]) => any

/**
 * Adds the values from one Array onto another Array, returned as a new Array (ie, it does not mutate the first Array).
 * This operation is recursive, so you can supply as many arrays as you wish.
 * @param firstArr - An Array of values (of any type)
 * @param secondArr - An Array of values (of any type)
 * @returns A new Array with the values from the second array concatenated onto those from the first
 */
export function concat(firstArr: any[], secondArr: any[]): any[]

/**
 * Several pieces of conditional logic to apply against a value and the _first_ one which matches will have a corresponding transformation applied to it.
 *
 * Supply an Array of pairs:
 *   - the first value is the conditional logic (`Function`) to match against the value
 *   - the second value is the transformation (`Function`) to apply to the value if the condition was matched
 *
 * __Note__: if your tranformation is _not_ a function then it will returned as-is in response to a succesfully met condition
 * @param conditionalTransforms - An array of arrays (which have two values: the condition function and the transformation function)
 * @param val - A value of any type that will be transformed according to the appropriate condition.
 * @returns The provided value transformed by the appropriate matching conditional transformation
 */
export function cond(conditionalTransforms: ((...params: any[]) => void)[][], val: any): any

/**
 * Checks if a given value is present in a String OR Array
 * @param val - A value which may be present in the String/Array
 * @param arr - An Array or String which may contain the provided value
 * @returns Whether or not the String|Array contains the provided value
 */
export function contains(val: string | number, arr: any[] | string): boolean

/**
 * Run several Functions (or composed chains of Functions) onto the same input and converges their results as arguments to another Function.
 *
 * A common example might be to take an Object that needs to be transformed in several different ways and then merged into one final Object.
 * In that case you can supply a "merge" (or "assign") Function as the convergence Function, and then pass all your Object transforming Functions as additional arguments.
 * When you're ready to receive the actual input Object it will be forked into all the transform Functions and their results will converge into the merge/assign Function you supplied first.
 * @param fn - A Function to converge the results (from executing all the others) into
 * @param ...forkedFunctions - Two or more Functions (should be at least two, otherwise you're using the wrong util; use compose instead) that will later receive the same input
 * @returns A wrapped Function that is ready to receive a value(s) and pass it (in parallel) into the other Functions, converging those results as _arguments_ to the first Function you supplied
 */
export function converge(fn: (...params: any[]) => any): (...params: any[]) => any

/**
 * Run several Functions (or composed chains of Functions) onto the same input and converges their results as arguments to another Function.
 * Compare to "converge" however the difference is that this is _always_ intended to be used with multiple input values _and_ each of those values corresponds to one of the forked functions.
 * They all still converge into one Function, but the forked function just don't receive the same input values.
 * @param fn - A Function to converge the results (from executing all the others) into
 * @param ...forkedFunctions - Two or more Functions (should be at least two, otherwise you're using the wrong util; use compose instead) that will later receive the same input
 * @returns A wrapped Function that is ready to receive multiple values that each correspond to one of the fork functions, converging those results as _arguments_ to the first Function you supplied
 */
export function convergeZip(fn: (...params: any[]) => any): (...params: any[]) => any

/**
 * Takes a Function whose params are meant to be supplied all at once and changes it so they can be supplied one at a time.
 * As each argument is supplied a new Function is returned that is ready to receive the next argument.
 * This continues until all arguments for your origianl function have been supplied and then the actual result is returned.
 *
 * Note: you cannot set default values for curried function params (again, you _cannot_ set default values for curried function params)
 * @param fn - A Function whose signature needs to changed from requiring all at once to providing them one (or more) at a time.
 * @returns A new Function that will wait until all arguments have been supplied before returning a result (otherwise it will continue to return a new Function that is ready to receive the next argument)
 */
export function curry(fn: (...params: any[]) => any): (...params: any[]) => any

/**
 * Same as the regular curry function, but you must also specify the number of arguments that the curried function will take before being fully executed.
 * You would use this in cases where it cannot be inferred from the curried function itself.
 * @param arity - The number of arguments the curried function will received before being executed
 * @param fn - A Function whose signature needs to changed from requiring all at once to providing them one (or more) at a time.
 * @returns A new Function that will wait until all (arity) arguments have been supplied before returning a result (otherwise it will continue to return a new Function that is ready to receive the next argument)
 */
export function curryN(arity: number, fn: (...params: any[]) => any): (...params: any[]) => any

/**
 * Compares two lists of Strings/Numbers and returns the values that are different between the two lists
 * @param arr1 - An Array of Strings
 * @param arr2 - An Array of Strings
 * @returns An array of values that are different between the two lists
 */
export function difference(arr1: string[] | number[], arr2: string[] | number[]): string[] | number[]

/**
 * A faster forEach that provides the same API as native.
 * @param fn - A Function to execute for each iteration. It will receive the value, index and full array (respectively) as args
 * @param arr - An Array to iterate over (any value will be passed into the iterate Function)
 */
export function each(fn: (...params: any[]) => any, arr: any[]): void

/**
 * A function that accepts two functions and a value and will return the first result which is "truthy".
 * This function is curried because it doesn't make any sense to even have it unless you have the functions ahead of time but not the value.
 * @param fnA - The first function to be executed on the value
 * @param fnB - The second function to be executed on the value
 * @param val - A value to be passed into the functions
 * @returns The result of executing value passed in
 */
export function eitherOr(fnA: (...params: any[]) => any, fnB: (...params: any[]) => any, val: any): any

/**
 * Extracts an Array of key/value pairs from an Object.
 * @param obj - The input object from which to extract prop keys and values
 * @returns An Array of key/value pairs corresponding to those on the input object
 */
export function entries(obj: object): string[]

/**
 * Applies a filtering function you provide over a value you provide, according to its type.
 * String values will have the filtering function applied over every character in the String.
 * Objects will have the filtering function applied to every value in the Object.
 * Arrays (or Array-like values) will have the filtering function applied to every value in the Array.
 * If the type of your value is none of the above, the value will be returned as-is.
 * @param fn - A filtering function that is invoked on the provided value
 * @param val - An Object/Array/String whose values/chars will be filtered
 * @returns A new value that is the result of the filtering operation over all the chars or values in the original String/Object/Array
 */
export function filter(fn: (...params: any[]) => any, val: object | any[] | string): object | any[] | string

/**
 * Applies a filtering function you provide over every value in a given Object.
 * @param fn - A filtering function that is invoked on every value in the provided Object
 * @param obj - An Object whose values will be filtered
 * @returns A new Object that is the result of the filtering operation over all the values in the original Object
 */
export function filterObject(fn: (...params: any[]) => any, obj: object): object

/**
 * Applies a filtering function you provide over every character in a given string.
 * @param fn - A filtering function that is invoked on every char in the provided String value
 * @param str - A string value to filter over
 * @returns A new String value that is the result of the filtering operation over the original string
 */
export function filterString(fn: (...params: any[]) => any, str: string): string

/**
 * Find a single value from an array of values, based on criteria defined in a predicate function.
 * @param pred - A predicate function to apply to the array of values (It should take a val as input and return a Boolean as output).
 * @param arr - An array of values from which to find one particular matching value
 * @returns Either a value from the array that matched the predicate function or undefined (if no match)
 */
export function find(pred: (...params: any[]) => any, arr: any[]): any

/**
 * Find the index of a single value from an array of values, based on criteria defined in a predicate function.
 * @param pred - A predicate function to apply to the array of values (It should take a val as input and return a Boolean as output).
 * @param arr - An array of values from which to find the index of one particular matching value
 * @returns Either the index of the value from the array that matched the predicate function or negative one (-1, if no match).
 */
export function findIndex(pred: (...params: any[]) => any, arr: any[]): number

/**
 * Extracts the first value of an array of values.
 * @param arr - An array of values from which to extract the first value
 * @returns The value at the first index of the supplied array (which may be undefined)
 */
export function first(arr: any[]): any

/**
 * Extracts nested arrays (of any depth) from a provided array, placing them onto on single new array.
 * @param arr - An array of values that may or may not be nested arrays themselves
 * @returns A new array of values, but with any nested arrays from the original input extracted onto one single (flat) array
 */
export function flatten(arr: any[][] | any[]): any[]

/**
 * A light wrapper around native `for .. in`, but will only iterate over an Object's own properties.
 * @param fn - A function to execute iteratively, which will receive the `key`, `value`, and `object` (respectively)
 * @param obj - An object whose keys will be iterated over
 */
export function forIn(fn: (...params: any[]) => any, obj: object): void

/**
 * Performs a fuzzy search on a list of strings or objects.
 * If a list of objects, provided the prop extraction function so the search can find the correct field(s)
 * This is heavily inspired by (most of) the algorithm used by [Matt York's](https://github.com/myork/fuzzy) fuzzy search function,
 * however several features were not carried over and his implementation of that alrgorithm has been significantly changed to achieve a 25% speed improvement.
 * Please see his original work - called [fuzzy](https://www.npmjs.com/package/fuzzy) MIT - if you need some of his additional options.
 * @param propFn - A function which will extract all the fields which you wish to fuzzy search on. Omit if the list is a list of strings
 * @param needle - The search value itself
 * @param [caseSensitive = false] - Whether or not to perform a case-sensitive search
 * @param arr - An array of string values or objects which have string values to be searched on
 * @returns The filtered list of search results
 */
export function fuzzy(propFn: (...params: any[]) => any, needle: string, caseSensitive: boolean, arr: string[] | object[]): string[] | object[]

/**
 * Gets the type for any value. If available will inspect the constructor name, otherwise will use the typeof
 * @param val - A value of any kind
 * @returns The stringified representation of the value's type
 */
export function getType(val: any): string

/**
 * Checks if a given Object contains a specified prop name
 * @param key - A prop name to look for in the object
 * @param obj - An Object to inspect for a given prop
 * @returns Whether the object contains the specified prop
 */
export function has(key: string, obj: object): boolean

/**
 * Checks if a given Object contains a (potentially) nested property of a specified path
 * @param prop - A prop name, a dot-separated prop path, or an array of prop path "pieces" to look for in the object
 * @param obj - An Object to inspect for a given prop at the specified path
 * @returns Whether the object contains the specified prop path
 */
export function hasNestedProp(prop: string[] | string, obj: object): boolean

/**
 * A function that always returns the value passed to it
 * @param v - A value to be returned
 * @returns The value passed in
 */
export function identity(v: any): any

/**
 * Compares two lists of Strings/Numbers and returns the values that are in common (intersect) between the two lists
 * @param arr1 - An Array of Strings/Numbers
 * @param arr2 - An Array of Strings/Numbers
 * @returns The values in common between the two lists
 */
export function intersection(arr1: string[] | number[], arr2: string[] | number[]): string[] | number[]

/**
 * Swaps the values for keys in a given object. So the values in that object should be the kind that _can_ be converted to unique string values
 * @param obj - An object whose values _can_ be swapped for keys
 * @returns A new object whose keys were the values from the original object
 */
export function flipKeyValues(obj: object): object

/**
 * Checks to see if a value is a certain type.
 * You may specify that type as a case-insensitive string
 * (ie, 'string', 'boolean', 'object', 'function', 'array', 'regexp', 'date', 'set, 'map'), OR a JavaScript type constructor function (ie, String, Function, Boolean, Array, RegExp, Date, Set, Map).
 * @example
 * is('boolean', true)
 * is('array', [1, 2, 3])
 * is(RegExp, /[a-z0-9]/)
 * is(Function, () => null)
 * @param ofType - A JavaScript type constructor function (like `Function`, `String`, `RegExp`, `Boolean`, `Array`, `Object`, etc.) or a string value matching the name of one
 * @param val - A value (of any type)
 * @returns Whether or not the value matches the specified type
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
 * @param val - A value to check as being an array
 * @returns Whether the value is an array-like type
 */
export function isArrayish(val: any): boolean

/**
 * Checks a value to see if it is a String containing either no characters OR no characters _except_ for whitespace.
 * @param val - A value of any type
 * @returns Whether or not the value is a blank string
 */
export function isBlankString(val: any): boolean

/**
 * Checks if a value is empty. Arrays, Objects, Strings, Sets, and Null/Undefined values are considered empty if their length (or size) prop is zero (or if they are Null or Undefined).
 * Whitespace-only strings are NOT considered empty (use `isBlankString` instead).
 * @param val - A value of any type which may be considered empty
 * @returns Whether or not the value is empty
 */
export function isEmpty(val: any): boolean

/**
 * Checks if two provided values are deeply equal.
 * If Objects or Arrays (or Array-like values) are provided, they are inspected recursively.
 * Primitive values are checked to see if they are stricly equal (ie triple equals; no type coercion).
 * @param firstVal - A value which may be null, undefined, a JavaScript primitive value, an array of values, an array-like value, or an object
 * @param secondVal - A value which may be null, undefined, a JavaScript
 * @returns Whether or not the two values are deeply equal
 */
export function isEqual(firstVal: any, secondVal: any): boolean

/**
 * Checks a value to see if it is an integer.
 * @param val - A value (of any type)
 * @returns Whether or not the value is an integer
 */
export function isInteger(val: any): boolean

/**
 * Checks to see if a value is a Map or WeakMap
 * @param val - A value (of any type)
 * @returns Whether or not the value is a Map or WeakMap
 */
export function isMap(val: any): boolean

/**
 * Checks to see if a value is null OR undefined
 * @param val - A value (of any type)
 * @returns Whether or not the value is null or undefined
 */
export function isNil(val: any): boolean

/**
 * A high-speed, mostly adequate check of a value which may be an Object.
 * This excludes values that are _technically_ an Object but in practice are not what you _really_ mean when you speak of Objects.
 * @param val - A value (of any type)
 * @returns Whether or not the value is an Object
 */
export function isObject(val: any): boolean

/**
 * Tests whether or not a given value is object-like
 * @param val - A value that may or may not be object-like
 * @returns Whether or not the value is object-like
 */
export function isObjectish(val: any): boolean

/**
 * Checks if a given value is of a primitive type (ie, Boolean, String, Number, or Symbol).
 * @param val - A value which may be of a primitive type
 * @returns Whether or not the value is primitive
 */
export function isPrimitive(val: any): boolean

/**
 * Checks if a value is a JavaScript Promise. This just means a deferred object/function with a method named `then`.
 * @param val - A value of any type which may be a promise
 * @returns Whether or not the value is a promise
 */
export function isPromise(val: any): boolean

/**
 * Inspects two values to see if they are the same type.
 * The typeof and (if necessary) constructor names are inspected during this check.
 * @param val1 - A value (of any type)
 * @param val2 - A value (of any type)
 * @returns Whether or not the two values are of the same type
 */
export function isSameType(val1: any, val2: any): boolean

/**
 * Checks to see if a value is a Set or WeakSet
 * @param val - A value (of any type)
 * @returns Whether or not the value is a Set or WeakSet
 */
export function isSet(val: any): boolean

/**
 * Inspects two values to see if they are strictly equal, meaning no type coercion or deepyly nested equality checks are performed.
 * A very simple triple equals is all that is used.
 * @param val1 - A value (of any type)
 * @param val2 - A value (of any type)
 * @returns Whether or not the two values are strictly equal
 */
export function isStrictEqual(val1: any, val2: any): boolean

/**
 * Checks to see if a value is undefined
 * @param val - A value (of any type)
 * @returns Whether or not the value is undefined
 */
export function isUndefined(val: any): boolean

/**
 * Retrieves the last value from an Array
 * @param arr - An array of any kind of values
 * @returns The last value from a given array
 */
export function last(arr: any[]): any

/**
 * Applies a mapping function you provide over a value you provide, according to its type.
 * String values will have the mapping function applied over every character in the String.
 * Objects will have the mapping function applied to every value in the Object.
 * Arrays (or Array-like values) will have the mapping function applied to every value in the Array.
 * If the type of your value is none of the above, the value will be returned as-is.
 * Also, this mapping operation does _not_ mutate the original value.
 * @param fn - A mapping function that is invoked on the provided value
 * @param val - An Object/Array/String whose values/chars will be mapped over
 * @returns A new value that is the result of the mapping operation over all the chars or values in the original String/Object/Array
 */
export function map(fn: (...params: any[]) => any, val: any | any[] | string): any | any[] | string

/**
 * Applies a mapping function you provide over every value in a given Object.
 * @param fn - A mapping function that is invoked on every value in the provided Object
 * @param obj - An Object whose values will be mapped over
 * @returns A new Object that is the result of the mapping operation over all the values in the original Object
 */
export function mapObject(fn: (...params: any[]) => any, obj: object): object

/**
 * Applies a mapping function you provide over every value in a given Object (recursively).
 * @param fn - A mapping function that is invoked on every value in the provided Object
 * @param obj - An Object whose values will be mapped over (recursively)
 * @returns A new Object that is the result of the mapping operation over all the values in the original Object
 */
export function mapObjectRecursive(fn: (...params: any[]) => any, obj: object): object

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
 * @param spec - An Object whose keys should correspond to keys in the input Object and whose values are mapping functions that will receive the matching input Object's prop as input
 * @param inputObj - The actual input to map over and transform
 * @returns A new Object with all the mapping functions from the spec Object applied to the corresponding values in the input Object (if they exist)
 */
export function mapSpec(spec: object, inputObj: object): object

/**
 * Applies a mapping function you provide over every character in a given string.
 * @param fn - A mapping function that is invoked on every char in the provided String value
 * @param str - A string value to map over
 * @returns A new String value that is the result of the mapping operation over the original string
 */
export function mapString(fn: (...params: any[]) => any, str: string): string

/**
 * Takes a snapshot of the input args and the output result for a provided function, and on repeated usage will shortcut invoking the function and return the cached output instead, whenever the same input args are supplied to the function.
 * @param fn - A function whose input values (supplied later) will be cached with its output result, so that the invoking the function can be skipped the next time the same values are passed to it
 * @returns A memoized version of the original function. It will cache the input values supplied to it each time it is used
 */
export function memoize(fn: (...params: any[]) => any): (...params: any[]) => any

/**
 * Merges the values from 2 or more Objects or Arrays together into a new Object/Array.
 * Null and Undefined values are handled gracefully, and if the second value is a primitive it will be returned as-is, instead of trying to merge it onto the first.
 * @param val - The first value to merge onto (will not get mutated though)
 * @param val2 - A value to merge onto the first
 * @returns A new value that contains the combined values from all the values passed in
 */
export function merge(val: any | any[], val2: any | any[]): any | any[]

/**
 * Removes specified keys from an object (after cloning the Object).
 * @param keys - An array of keys to search for in the Object and exclude from the output
 * @param obj - An Object from which to copy and remove keys
 * @returns A copy of the original Object, but without the specified keys
 */
export function omit(keys: string[], obj: object): object

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
 * @param keys - An array of keys to search for in the Object and include from the output
 * @param obj - An Object from which to copy and remove keys
 * @returns A copy of the original Object, but with _only_ the specified keys
 */
export function pick(keys: string[], obj: object): object

/**
 * Creates a chain of Functions that will be executed in sequnce (from left to right), with the value from the previous Function fed into the next Function.
 * The value that the chain of functions will executed on can be provided later.
 * @param ...fns - One or more function to execute (in sequential order) on a value that will be supplied later
 * @returns A single Function that is ready to receive a value and pass it through the piped chain of Functions
 */
export function pipe(): (...params: any[]) => (val: any) => any

/**
 * Merges two values together, placing the characters (or values) from one before those from the other.
 * @param firstVal - An Array, Object, String or Number that the will have a new value(s) merged before its own characters/values
 * @param secondVal - An Array, Object, String or Number that the will merge _before_ those from the first provided value
 * @returns A new Array, Object, or String that has the characters/values from the second provided value merged _before_ those from the first provided value
 */
export function prepend(firstVal: any[] | any | string | number, secondVal: any[] | any | string | number): any[] | any | string

/**
 * Gathers an Array of Functions that return Promises and returns an Array of results, once they have all completed.
 * The only difference between this and native Promise.all() is that these promises will _all_ be resolved/rejected before the final Promise (containing all the results) is returned. With native Promise.all(), the first unhandled rejection will cause the whole endeavor to be terminated.
 * Addtionally you can pass in a flag to force caught errors to be ignored entirely.
 * @param requests - An array of Functions that return Promises
 * @param ignoreErrors - Whether or not to ignore errors entirely (this will cause all the results to be returned and any Errors will be returned in place of the results)
 * @returns A Promise that will resolve once all of the Promises are resolved/rejected
 */
export function promiseAll(requests: ((...params: any[]) => void)[], ignoreErrors: boolean): Promise<any>

/**
 * Gathers an Array of Promises (or of Functions that return Promises) and executes them in sequential order they appear in the Array.
 * The value from the last will be supplied to the next (in case you need it).
 * @param requests - An array of Promises (or of Functions that return Promises) which need to be executed in sequential order
 * @returns A Promise that will resolve when each of the requests completes
 */
export function promiseChain(...requests: (Promise<any>[] | ((...params: any[]) => void)[])[]): Promise<any>

/**
 * Gathers an Array of Promises (or of Functions that return Promises) and executes them from right to left.
 * You can pass them all together in either a single array, or one by one as arguments (ie, in the style of either `apply` or `call`).
 * @param requests - An array of Promises (or of Functions that return Promises) which need to be executed in sequential order
 * @returns A Promise that will resolve when each of the requests completes
 */
export function promiseCompose(...requests: (Promise<any>[] | ((...params: any[]) => void)[])[]): Promise<any>

/**
 * Looks for a specified key on an Object you provide.
 * The is performed safely and will not throw an error if something on the prop path chain you specify doesn't exist.
 * Will always return `undefined` if a prop path cannot be resolved (rather than throwing).
 * @param prop - A top-level key OR a deeply nested prop path (which may be represented as an array or as a single dot-delimited string)
 * @param obj - An object which may contain a specified prop
 * @returns The value associated with the nested prop path OR undefined if it does not exist
 */
export function propAt(prop: string | string[], obj: any): any | undefined

/**
 * Looks for a specified key on an Object you provide and checks to see if its corresponding value equals the value you specifiy.
 * @param prop - A key to search for on the Object
 * @param val - A value that the extracted prop will be compared against
 * @param obj - An object which may contain a specified prop
 * @returns Whether or not the requested prop equals the specified value
 */
export function propEquals(prop: string, val: ((...params: any[]) => any) | string, obj: object): boolean

/**
 * Looks for a specified key on an Object you provide and checks to see if its corresponding value is of the type you specifiy.
 * @param type - A JavaScript type constructor function (ie `Boolean`, `RegExp`, `Date`, `Array`, `Object`, `Number`, `String`, etc) OR a string represention of the type (ie, "boolean", "regexp", "date", "array", "object", "number", "string", etc)
 * @param prop - A key to search for on the Object
 * @param obj - An object which may contain a specified prop
 * @returns Whether or not the requested prop is of the type specified
 */
export function propIs(type: ((...params: any[]) => any) | string, prop: string, obj: object): boolean

/**
 * Attempts to find a specified key on an Object you provide, and if not found will fall back to an additional value you specify.
 * @param fallback - A value to fall back on if the requested key does not exist on the provided Object
 * @param prop - A key to search for on the Object
 * @param obj - An object which may contain a specified prop
 * @returns Either the requested prop (from the Object) or the fallback value
 */
export function propOr(fallback: any, prop: string, obj: object): any

/**
 * Looks for a specified key on an Object you provide and sets it to the provided value.
 * If the path does not exist, it will be created (you can check for the path via `propIs` or `propAt` or `propEquals` first if you don't wish to create the path every time).
 * The is performed safely and will not throw an error if somethign on the prop path chain you specify doesn't exist.
 * @param prop - A top-level key OR a deeply nested prop path (which may be represented as an array or as a single dot-delimited string)
 * @param val - A value to be placed at the provided property path
 * @param obj - An object which onto which the value will be placed
 * @returns The original object, but modified to have the provided value placed at the specified path it does not exist
 */
export function propSet(prop: string | string[], val: any, obj: object): any

/**
 * A simple wrapper around native Array.prototype.reduce(), for use in a compose/pipe chain of functions.
 * Can also reduce the key/value pairs of an object, if one is supplied in place of an array.
 * @param fn - A function to control the reduction of each item in the array|object into the single output value
 * @param defaultVal - A starting value for the reduction accumulator
 * @param arr - An array of values of any type OR an object containing key/value pairs
 * @returns The original Array|Object somehow reduced to one value, according to the supplied function
 */
export function reduce(fn: (...params: any[]) => any, defaultVal: any, arr: any[] | any): any

/**
 * Renames a set of keys in a given object (removing the old ones)
 * @param keyMap - An object whose keys are the _current_ key names and whose values are the _new_ key names
 * @param obj - An Object whose keys will be renamed
 * @returns A new Object that has all the specified keys renamed to their new names
 */
export function renameKeys(keyMap: object, obj: object): object

/**
 * Recursively shims an Object.
 * Every time the getter is invoked (which happens whenever prop paths are referenced in the consuming code), the path is shimmed with another Proxy.
 * It is not a polyfill but rather a way to keep deep prop paths that may not exist on the source object from throwing an error.
 * @param obj - An object that will be the Proxy's source
 * @returns An Object that will return props on the source Object if they exist but safely handle missing prop paths without throwing errors.
 */
export function shim(obj: object): typeof Proxy

/**
 * Checks the length (or size) of many different types of values:
 *   - Array
 *   - Set
 *   - Map
 *   - Object (num of keys)
 *   - String (num of chars)
 *   - Function (num of params)
 * @param val - A value of type Object, String, Array or Function
 * @returns The length of the String or Array, OR the number of keys in the Object
 */
export function size(val: any | string | any[] | ((...params: any[]) => any)): number

/**
 * Transforms a string value into one which is hyphenated.
 * Hyphens and underscores are removed and interpred as the boundaries for new words.
 * The first letter of each new word - not preceded by whitespace - is capitalized.
 * @param str - A string which may contain underscores and hyphens and/or may be title-cased.
 * @returns A new string that is without hyphens and underscores and the first letter of every new word boundary is capitalized, unless preceded by whitespace
 */
export function toCamelCase(str: string): string

/**
 * Converts a given value to an Integer and rounds up or down floating point values appropriately.
 * If the values is a `Boolean`, then `true` will yield `1` and `false will yield `0`.
 * If `NaN` then zero will always be returned.
 * @param str - A string which may be numeric
 * @returns Either the successfully converted number or zero (if it was NaN)
 */
export function toInteger(str: string): number

/**
 * Transforms a string value into one which is hyphenated.
 * Whitespace and underscores are replaced with hyphens, and uppercase letters are interpreted as boundaries for new hyphenated words.
 * @param str - A string which may contain uppercase characters
 * @returns A new string that is a hyphenated representation of the original string
 */
export function toKebabCase(str: string): string

/**
 * Simple wrapper around String.prototype.toLowerCase() that is provided for consistency with the non-native string case methods (`toKebabCase()`, `toCamelCase()`, etc)
 * @param str - A string which may contain uppercase characters
 * @returns A new string that is an lowercase representation of the original string
 */
export function toLowerCase(str: string): string

/**
 * Transforms a string value into one which is separated by underscores.
 * Whitespace and hyphens are replaced with underscores, and uppercase letters are interpreted as boundaries for new underscore-separated words.
 * @param str - A string which may contain uppercase characters or hyphens
 * @returns A new string that is an lowercase representation of the original string
 */
export function toSnakeCase(str: string): string

/**
 * Transforms a string value into one which is title-cased. The first letter of any word is capitalized.
 * @param str - A string which may contain uppercase characters
 * @returns A new string that is an lowercase representation of the original string
 */
export function toTitleCase(str: string): string

/**
 * Simple wrapper around String.prototype.toUpperCase() that is provided for consistency with the non-native string case methods (`toKebabCase()`, `toCamelCase()`, etc)
 * @param str - A string which may contain lowercase characters
 * @returns A new string that is an uppercase representation of the original string
 */
export function toUpperCase(str: string): string

/**
 * Transforms an object's key/value pairs into an encoded URI string, delimited by ampersands &
 * @param obj - An object whose key/value pairs need to be serialized into a single string.
 * @returns A new string that represents the key/value pairs on the originating object
 */
export function toUriEncoded(obj: object | boolean | number): string

/**
 * Filters an array of values down to only those which are unique
 * @param list - An array of values which may or may not contain duplicates
 * @returns A new list containing only the unique values from the original array
 */
export function uniq(list: any[]): any[]

/**
 * Filters an array of values down to only those which are unique, based on a provided predicate function (or shorthand for retrieving a prop inside an object)
 * @param pred - A predicate function
 * @param list - An array of values which may or may not contain duplicates
 * @returns A new list containing only the unique values from the original array
 */
export function uniqBy(pred: ((...params: any[]) => any) | string, list: any[]): any[]

/**
 * Transforms a thunk (of however many levels deep) into a single function that will received all the args at once
 * @param thunk - A function that returns a function (which may return a function, and so on)
 * @returns A single function that is ready to receive all the arguments at once
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
 * @param validations - An array of validator functions and their corresponding error message
 * @param values - An Object of key value pairs, the keys should correspond to validators and the values are that which is to be validated
 * @returns An object containing the key names of the values and one or more validation error messages (Only key names whose values were found to be invalid will show up on this output Object; an empty Object means everything was valid)
 */
export function validate(validations: ((...params: any[]) => void)[], values: object): object

/**
 * A simple polyfill for Object.values()
 * @param obj - An Object whose values need to be retrieved
 * @returns A list of all the values in the provided Object, ordered by keys
 */
export function values(obj: object): any[]
