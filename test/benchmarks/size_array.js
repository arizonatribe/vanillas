import { test } from "reality-check"
import _ from "lodash"
import R from "ramda"
import { size } from "../../src"

const val = [1, 2, 3, 4, 5, 6, 7, 8, 9]

test("size", benchmark => {
  benchmark(
    () => size(val),
    "Vanillas \"size\""
  )
  benchmark(
    () => _.size(val),
    "Lodash \"size\""
  )
  benchmark(
    () => R.length(val),
    "Ramda \"length\""
  )
})
