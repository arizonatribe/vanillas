import { test } from "reality-check"
import _ from "lodash"
import R from "ramda"
import * as Fx from "fxjs"
import { isEmpty } from "../../src"
import { hook } from "../__mocks__"

const val = Object.values(hook)

test("isEmpty", benchmark => {
  benchmark(
    () => isEmpty(val),
    "Vanillas \"isEmpty\""
  )
  benchmark(
    () => _.isEmpty(val),
    "Lodash \"isEmpty\""
  )
  benchmark(
    () => R.isEmpty(val),
    "Ramda \"isEmpty\""
  )
  benchmark(
    () => Fx.isEmpty(val),
    "FxJs \"isEmpty\""
  )
})
