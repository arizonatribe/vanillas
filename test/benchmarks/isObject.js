import { test } from "reality-check"
import _ from "lodash"
import * as Fx from "fxjs"
import { isObject } from "../../src"
import { hook } from "../__mocks__"

test("isObject", benchmark => {
  benchmark(
    () => isObject(hook),
    "Vanillas \"isObject\""
  )
  benchmark(
    () => Fx.isObject(hook),
    "FxJs \"isObject\""
  )
  benchmark(
    () => _.isPlainObject(hook),
    "Lodash \"isPlainObject\""
  )
})
