import { test } from "reality-check"
import _ from "lodash"
import { size } from "../../src"
import { solarSystem } from "../__mocks__"

test("sizeObject", benchmark => {
  benchmark(
    () => size(solarSystem),
    "Vanillas \"size\""
  )
  benchmark(
    () => _.size(solarSystem),
    "Lodash \"size\""
  )
})
