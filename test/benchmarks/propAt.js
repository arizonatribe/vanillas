import { test } from "reality-check"
import _ from "lodash"
import R from "ramda"
import { propAt } from "../../src"
import { propAt as curriedPropAt } from "../../src/curried"
import val from "../__mocks__"

test("propAt", benchmark => {
  benchmark(
    () => propAt(["pantheon", "Jupiter", "moons"], val),
    "Vanillas \"propAt\""
  )
  benchmark(
    () => _.get(val, ["pantheon", "Jupiter", "moons"]),
    "Lodash \"get\""
  )
  benchmark(
    () => R.path(["pantheon", "Jupiter", "moons"], val),
    "Ramda \"path\""
  )
  benchmark(
    () => val && val.pantheon && val.pantheon.Jupiter && val.pantheon.Jupiter.moons,
    "(native) \"&& until you find it\""
  )
})

test("curriedPropAt", benchmark => {
  benchmark(
    () => curriedPropAt(["pantheon", "Jupiter", "moons"])(val),
    "Vanillas (curried) \"propAt\""
  )
  benchmark(
    () => R.path(["pantheon", "Jupiter", "moons"])(val),
    "Ramda (curried) \"path\""
  )
})
