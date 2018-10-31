import test from 'tape'
import uniq from '../src/uniq'

test('"uniq" makes sure a list contains only unique values', t => {
  t.deepEqual(uniq([1, 1, 1, 3, 3, 3, 5, 5, 5]), [1, 3, 5], 'duplicate numbers removed')
  t.deepEqual(uniq(['abc', 'abcdefg', 'abcdefg', 'hijklmnop', 'qrs', 'tuv', 'tuv', 'wxy&z']), ['abc', 'abcdefg', 'hijklmnop', 'qrs', 'tuv', 'wxy&z'], 'duplicate strings are removed')
  t.end()
})
