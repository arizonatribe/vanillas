import { test } from "reality-check"
import _ from "lodash"
import R from "ramda"
import * as Fx from "fxjs"
import { filter } from "../../src"
import { filter as filterCurried } from "../../src/curried"
import { hook } from "../__mocks__"

const pred = str => /n$/.test(str)
const arr = Object.values(hook)

test("filter", benchmark => {
  benchmark(
    () => filter(str => pred(str), arr),
    "Vanillas \"filter\""
  )
  benchmark(
    () => _.filter(arr, str => pred(str)),
    "Lodash \"filter\""
  )
  benchmark(
    () => R.filter(str => pred(str), arr),
    "Ramda \"filter\""
  )
  benchmark(
    () => Fx.filter(str => pred(str), arr),
    "FxJs \"filter\""
  )
  benchmark(
    () => arr.filter(str => pred(str)),
    "(native) \"Array.filter()\""
  )
})

test("curriedFilterTests", benchmark => {
  benchmark(
    () => filterCurried(str => pred(str))(arr),
    "Vanillas (curried) \"filter\""
  )
  benchmark(
    () => R.filter(str => pred(str))(arr),
    "Ramda (curried) \"filter\""
  )
  benchmark(
    () => Fx.filter(str => pred(str))(arr),
    "FxJs (curried) \"filter\""
  )
})
