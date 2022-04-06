import { test } from "reality-check"
import _ from "lodash"
import R from "ramda"
import { isEqual } from "../../src"
import { isEqual as curriedIsEqual } from "../../src/curried"
import { pantheon, solarSystem } from "../__mocks__"

test("areObjectsEqualTests", benchmark => {
  benchmark(
    () => isEqual(solarSystem, pantheon),
    "Vanillas \"isEqual\" (object equality)"
  )
  benchmark(
    () => _.isEqual(solarSystem, pantheon),
    "Lodash \"isEqual\" (object equality)"
  )
  benchmark(
    () => R.equals(solarSystem, pantheon),
    "Ramda \"equals\" (object equality)"
  )
})

test("areArraysEqualTests", benchmark => {
  benchmark(
    () => isEqual(solarSystem.Jupiter.moons, pantheon.Jupiter.moons),
    "Vanillas \"isEqual\" (array equality)"
  )
  benchmark(
    () => _.isEqual(solarSystem.Jupiter.moons, pantheon.Jupiter.moons),
    "Lodash \"isEqual\" (array equality)"
  )
  benchmark(
    () => R.equals(solarSystem.Jupiter.moons, pantheon.Jupiter.moons),
    "Ramda \"equals\" (array equality)"
  )
})

test("curriedIsEqualTests", benchmark => {
  benchmark(
    () => curriedIsEqual(solarSystem)(pantheon),
    "Vanillas (curried) \"isEqual\""
  )
  benchmark(
    () => R.equals(solarSystem)(pantheon),
    "Ramda (curried) \"equals\""
  )
})
