import fuzzy from "fuzzy"
import FuzzySearch from "fuzzy-search"
import { filter as fuzzyJs } from "fuzzyjs"
import { fuzzy as f } from "../../src"
import { companies as arr } from "../../test/__mocks__"

const needle = "dickinson"

/**
 * Fuzzy usage:
 * @example
 * var list = ['baconing', 'narwhal', 'a mighty bear canoe'];
 * var options = { pre: '<', post: '>' };
 * var results = fuzzy.filter('bcn', list, options)
 * console.log(results);
 * // [
 * //   {string: '<b>a<c>o<n>ing'           , index: 0, score: 3, original: 'baconing'},
 * //   {string: 'a mighty <b>ear <c>a<n>oe', index: 2, score: 3, original: 'a mighty bear canoe'}
 * // ]
 */

/**
 * Fuzzy-Search usage:
 * @example
 * const searcher = new FuzzySearch(people, ['name.firstName', 'state'], {
 *  caseSensitive: true,
 * });
 * const result = searcher.search('ess');
 */

/**
 * FuzzyJs usage:
 * @example
 * import { filter as fuzzy } from 'fuzzyjs'
 *
 *  const sources = ['Set Syntax: JavaScript', 'Set Syntax: CSS', 'Set Syntax: HTML']
 *
 *  sources.filter(fuzzy('ssjs'))
 *  [ 'Set Syntax: JavaScript' ]
 *
 *  const sources = [
 *    { name: { foo: 'Set Syntax: JavaScript' } },
 *    { name: { foo: 'Set Syntax: CSS' } },
 *    { name: { foo: 'Set Syntax: HTML' } }
 *  ]
 *
 *  sources.filter(fuzzy('ssjs', { sourceAccessor: source => source.name.foo }))
 *  [ { name: { foo: 'Set Syntax: JavaScript' } } ]
 */

const fuzzySearch = new FuzzySearch(arr, ["name"])
const tests = [
  [`Vanillas Fuzzy (search for '${needle}')`, () => f(s => s.name, needle, false, arr)],
  [`Fuzzy (search for '${needle}')`, () => fuzzy.filter(needle, arr, { extract(s) { return s.name } })
    .map(r => r.original)
  ],
  [`Fuzzy-Search (search for '${needle}')`, () => fuzzySearch.search(needle)],
  [`FuzzyJs (search for '${needle}')`, () => arr.filter(fuzzyJs(needle, { sourceAccessor: s => s.name }))]
]

export default { tests }
