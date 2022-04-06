/* eslint-disable prefer-object-spread */
import { test } from "reality-check"
import * as Fx from "fxjs"
import { assign } from "../../src"
import { hook, sphere, jurrassicPark } from "../__mocks__"

test("assign", benchmark => {
  benchmark(
    () => assign({}, hook, sphere, jurrassicPark),
    "Vanillas \"assign\""
  )

  benchmark(
    () => Fx.assign({}, hook, sphere, jurrassicPark),
    "FxJs \"assign\""
  )

  benchmark(
    () => Object.assign({}, hook, sphere, jurrassicPark),
    "(native) \"Object.assign()\""
  )
})
