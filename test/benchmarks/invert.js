import { test } from "reality-check"
import _ from "lodash"
import R from "ramda"
import * as raw from "radash"
import { invert } from "../../src"
import { hook } from "../__mocks__"

test("invert", (benchmark) => {
  benchmark(() => invert(hook), "Vanillas \"invert\"")
  benchmark(() => _.invert(hook), "Lodash \"invert\"")
  benchmark(() => raw.invert(hook), "Radash \"invert\"")
  benchmark(() => R.invertObj(hook), "Ramda \"invertObj\"")
})
