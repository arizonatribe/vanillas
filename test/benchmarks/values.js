import { test } from "reality-check"
import _ from "lodash"
import R from "ramda"
import * as Fx from "fxjs"
import { values } from "../../src"
import { hook } from "../__mocks__"

test("values", benchmark => {
  benchmark(
    () => values(hook),
    "Vanillas \"values\""
  )
  benchmark(
    () => _.values(hook),
    "Lodash \"values\""
  )
  benchmark(
    () => R.values(hook),
    "Ramda \"values\""
  )
  benchmark(
    () => Fx.values(hook),
    "FxJs \"values\""
  )
  benchmark(
    () => Object.values(hook),
    "(native) \"Object.values()\""
  )
})
