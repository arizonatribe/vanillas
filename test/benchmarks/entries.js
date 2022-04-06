import { test } from "reality-check"
import _ from "lodash"
import R from "ramda"
import * as Fx from "fxjs"
import { entries } from "../../src"
import { hook } from "../__mocks__"

test("entries", benchmark => {
  benchmark(
    () => entries(hook),
    "Vanillas \"entries\""
  )
  benchmark(
    () => _.toPairs(hook),
    "Lodash \"toPairs\""
  )
  benchmark(
    () => R.toPairs(hook),
    "Ramda \"toPairs\""
  )
  benchmark(
    () => Fx.entries(hook),
    "FxJs \"entries\""
  )
  benchmark(
    () => Object.entries(hook),
    "(native) \"Object.entries( )\""
  )
})
