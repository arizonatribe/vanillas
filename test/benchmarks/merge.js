/* eslint-disable prefer-object-spread */
import { test } from "reality-check"
import _ from "lodash"
import R from "ramda"
import * as Fx from "fxjs"
import { merge } from "../../src"
import { merge as curriedMerge } from "../../src/curried"
import { hook, sphere } from "../__mocks__"

test("merge", benchmark => {
  benchmark(
    () => merge(hook, sphere),
    "Vanillas \"merge\""
  )
  // Three arguments supplied here is because Lodash cheats: they mutate the first object
  benchmark(
    () => _.merge({}, hook, sphere),
    "Lodash \"merge\""
  )
  benchmark(
    () => R.mergeDeepLeft(hook, sphere),
    "Ramda \"merge\""
  )
  benchmark(
    () => Fx.merge(hook, sphere),
    "FxJs \"merge\""
  )
  benchmark(
    () => Object.assign({}, hook, sphere),
    "(native) \"Object.assign({}, ..)\""
  )
})

test("curriedMerge", benchmark => {
  benchmark(
    () => curriedMerge(hook)(sphere),
    "Vanillas (curried) \"merge\""
  )
  benchmark(
    () => R.merge(hook)(sphere),
    "Ramda (curried) \"merge\""
  )
  benchmark(
    () => Fx.merge(hook)(sphere),
    "FxJs (curried) \"merge\""
  )
})
