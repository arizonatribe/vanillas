import _ from "lodash"
import R from "ramda"
import * as Fx from "fxjs"
import { test } from "reality-check"

import { any } from "../../src"

const arr = ["dustin", "robin", "julia", "bob"]
const predicate = val => /uli/.test(val)

test("Any", benchmark => {
  benchmark(() => any(predicate, arr), "Vanillas \"any\"")
  benchmark(() => _.some(arr, predicate), "Lodash \"some\"")
  benchmark(() => Fx.some(predicate, arr), "FxJs \"some\"")
  benchmark(() => R.any(predicate, arr), "Ramda \"any\"")
  benchmark(() => arr.some(predicate), "(native) \"Array.some()\"")
})
