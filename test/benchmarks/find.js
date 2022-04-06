import { test } from "reality-check"
import _ from "lodash"
import R from "ramda"
import * as Fx from "fxjs"
import { find } from "../../src"
import { hook } from "../__mocks__"

const arr = Object.values(hook)
const predicate = val => /uli/.test(val)

test("find", benchmark => {
  benchmark(
    () => find(predicate, arr),
    "Vanillas \"find\""
  )
  benchmark(
    () => _.find(arr, predicate),
    "Lodash \"find\""
  )
  benchmark(
    () => R.find(predicate, arr),
    "Ramda \"find\""
  )
  benchmark(
    () => Fx.find(predicate, arr),
    "FxJs \"find\""
  )
  benchmark(
    () => arr.find(predicate),
    "(native) \"Array.find()\""
  )
})
