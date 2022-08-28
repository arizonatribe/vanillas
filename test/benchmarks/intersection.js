import { test } from "reality-check"
import _ from "lodash"
import R from "ramda"
import * as Fx from "fxjs"
import { intersection } from "../../src"
import { intersection as curriedIntersection } from "../../src/curried"
import { composers, hook } from "../__mocks__"

const movie = Object.keys(hook)
const music = Object.keys(composers)

/* eslint-disable-next-line jsdoc/require-jsdoc */
function intersectionHashmap(arr1, arr2) {
  const obj = {}
  for (let i = 0, len = arr1.length; i < len; i++) {
    obj[arr1[i]] = true
  }

  const commonItems = []
  for (let i = 0, len = arr2.length; i < len; i++) {
    if (obj[arr2[i]]) {
      commonItems.push(arr2[i])
    }
  }
  return commonItems
}

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
  benchmark(
    () => intersectionHashmap(movie, music),
    "intersection (using a Hashmap)"
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
