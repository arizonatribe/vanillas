import { test } from "reality-check"
import _ from "lodash"
import R from "ramda"
import { concat } from "../../src"
import { hook, sphere } from "../__mocks__"

const hookFirstNames = Object.values(hook)
const sphereFirstNames = Object.values(sphere)

test("concat", benchmark => {
  benchmark(
    () => concat(hookFirstNames, sphereFirstNames),
    "Vanillas \"concat\""
  )
  benchmark(
    () => _.concat(hookFirstNames, sphereFirstNames),
    "Lodash \"concat\""
  )
  benchmark(
    () => R.concat(hookFirstNames, sphereFirstNames),
    "Ramda \"concat\""
  )
  benchmark(
    () => hookFirstNames.concat(sphereFirstNames),
    "(native) \"Array.concat()\""
  )
  benchmark(
    () => [...hookFirstNames, ...sphereFirstNames],
    "(native) \"[ ...val1, ...val2 ]\""
  )
})
