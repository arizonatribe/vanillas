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
export default function fuzzy<T extends string[] | object[]>(
  propFn: (...params: any[]) => any,
  needle: string,
  caseSensitive: boolean,
  arr: T
): T
