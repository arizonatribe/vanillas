import { test } from "reality-check"
import _ from "lodash"
import R from "ramda"
import * as Fx from "fxjs"
import { findIndex } from "../../src"
import { hook } from "../__mocks__"

const arr = Object.values(hook)
const predicate = val => /uli/.test(val)

test("findIndex", benchmark => {
  benchmark(
    () => findIndex(predicate, arr),
    "Vanillas \"findIndex\""
  )
  benchmark(
    () => _.findIndex(arr, predicate),
    "Lodash \"findIndex\""
  )
  benchmark(
    () => R.findIndex(predicate, arr),
    "Ramda \"findIndex\""
  )
  benchmark(
    () => Fx.findIndex(predicate, arr),
    "FxJs \"findIndex\""
  )
  benchmark(
    () => arr.findIndex(predicate),
    "(native) \"Array.findIndex()\""
  )
})
