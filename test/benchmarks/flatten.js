import { test } from "reality-check"
import _ from "lodash"
import R from "ramda"
import * as Fx from "fxjs"
import { flatten } from "../../src"
import { solarSystem } from "../__mocks__"

const arr = Object.values(solarSystem).map(p => p.moons).filter(Boolean)

test("flatten", benchmark => {
  benchmark(
    () => flatten(arr),
    "Vanillas \"flatten\""
  )
  benchmark(
    () => _.flatten(arr),
    "Lodash \"flatten\""
  )
  benchmark(
    () => R.flatten(arr),
    "Ramda \"flatten\""
  )
  benchmark(
    () => R.flatten(arr),
    "FxJs \"flat\""
  )
})
