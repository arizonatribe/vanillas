import { test } from "reality-check"
import _ from "lodash"
import R from "ramda"
import { size } from "../../src"

const val = "lorem ipsum dolor sit amet"

test("sizeString", benchmark => {
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
