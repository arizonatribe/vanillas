import { test } from "reality-check"
import _ from "lodash"
import * as raw from "radash"
import R from "ramda"
import * as Fx from "fxjs"
import { uniq } from "../../src"

const nums = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9]
const strs = ["abc", "abcdefg", "abc", "def", "defg", "def", "ghi", "klm", "nop", "eee", "eee", "nop"]

test("uniqNumbers", (benchmark) => {
  benchmark(() => uniq(nums), 'Vanillas "uniq" (list of nums)')
  benchmark(() => _.uniq(nums), 'Lodash "uniq" (list of nums)')
  benchmark(() => raw.unique(nums), 'Radash "unique" (list of nums)')
  benchmark(() => R.uniq(nums), 'Ramda "uniq" (list of nums)')
  benchmark(() => Fx.uniq(nums), 'FxJs "uniq" (list of nums)')
})

test("uniqStrings", (benchmark) => {
  benchmark(() => uniq(strs), 'Vanillas "uniq" (list of strings)')
  benchmark(() => _.uniq(strs), 'Lodash "uniq" (list of strings)')
  benchmark(() => R.uniq(strs), 'Ramda "uniq" (list of strings)')
  benchmark(() => Fx.uniq(strs), 'FxJs "uniq" (list of strings)')
})
