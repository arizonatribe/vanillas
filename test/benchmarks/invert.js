import { test } from "reality-check"
import _ from "lodash"
import R from "ramda"
import * as Fx from "fxjs"
import { invert } from "../../src"
import { hook } from "../__mocks__"

test("invert", benchmark => {
  benchmark(
    () => invert(hook),
    "Vanillas \"invert\""
  )
  benchmark(
    () => _.invert(hook),
    "Lodash \"invert\""
  )
  benchmark(
    () => R.invertObj(hook),
    "Ramda \"invertObj\""
  )
  benchmark(
    () => Fx.invert(hook),
    "FxJs \"invert\""
  )
  benchmark(
    () => Object.keys(hook).reduce((o, key) => ({ ...o, [String(hook[key])]: key }), {}),
    "(native) \"Object.keys( ).reduce()\""
  )
})
