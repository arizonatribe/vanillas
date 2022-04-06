import { test } from "reality-check"
import _ from "lodash"
import R from "ramda"
import { map as FxMap } from "fxjs"
import { map } from "../../src"
import { map as mapCurried } from "../../src/curried"
import { hook } from "../__mocks__"

const arr = Object.values(hook)

test("map", benchmark => {
  benchmark(
    () => map(str => str.toUpperCase(), arr),
    "Vanillas \"map\""
  )
  benchmark(
    () => _.map(arr, str => str.toUpperCase()),
    "Lodash \"map\""
  )
  benchmark(
    () => FxMap(str => str.toUpperCase(), arr),
    "FxJs \"map\""
  )
  benchmark(
    () => R.map(str => str.toUpperCase(), arr),
    "Ramda \"map\""
  )
  benchmark(
    () => arr.map(str => str.toUpperCase()),
    "(native) \"Array.map()\""
  )
})

test("curriedMap", benchmark => {
  benchmark(
    () => mapCurried(str => str.toUpperCase())(arr),
    "Vanillas (curried) \"map\""
  )
  benchmark(
    () => FxMap(str => str.toUpperCase())(arr),
    "FxJs (curried) \"map\""
  )
  benchmark(
    () => R.map(str => str.toUpperCase())(arr),
    "Ramda (curried) \"map\""
  )
})
