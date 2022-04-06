/* eslint-disable prefer-object-spread */
import { test } from "reality-check"
import _ from "lodash"
import R from "ramda"
import * as Fx from "fxjs"
import { clone } from "../../src"
import { hook } from "../__mocks__"

test("clone", benchmark => {
  benchmark(
    () => clone(hook),
    "Vanillas \"clone\""
  )
  benchmark(
    () => _.clone(hook),
    "Lodash \"clone\""
  )
  benchmark(
    () => R.clone(hook),
    "Ramda \"clone\""
  )
  benchmark(
    () => Fx.clone(hook),
    "FxJs \"clone\""
  )
  benchmark(
    () => {
      const newObj = { ...hook }
      return newObj
    },
    "(native) \"clone by destructuring\""
  )
  benchmark(
    () => Object.assign({}, hook),
    "(native) \"Object.assign({}, ..)\""
  )
})
