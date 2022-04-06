import { test } from "reality-check"
import _ from "lodash"
import R from "ramda"
import * as Fx from "fxjs"
import { intersection } from "../../src"
import { intersection as curriedIntersection } from "../../src/curried"
import { composers, hook } from "../__mocks__"

const movie = Object.keys(hook)
const music = Object.keys(composers)

test("intersection", benchmark => {
  benchmark(
    () => intersection(movie, music),
    "Vanillas \"intersection\""
  )
  benchmark(
    () => _.intersection(movie, music),
    "Lodash \"intersection\""
  )
  benchmark(
    () => R.intersection(movie, music),
    "Ramda \"intersection\""
  )
  benchmark(
    () => Fx.intersection(movie, music),
    "FxJs \"intersection\""
  )
})

test("curriedIntersectionTests", benchmark => {
  benchmark(
    () => curriedIntersection(movie)(music),
    "Vanillas \"intersection\" (curried)"
  )
  benchmark(
    () => R.intersection(movie)(music),
    "Ramda \"intersection\" (curried)"
  )
  benchmark(
    () => Fx.intersection(movie)(music),
    "FxJs \"intersection\" (curried)"
  )
})
