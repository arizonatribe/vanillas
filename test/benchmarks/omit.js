import { test } from "reality-check"
import _ from "lodash"
import * as raw from "radash"
import R from "ramda"
import * as Fx from "fxjs"
import { omit } from "../../src"
import { omit as curriedOmit } from "../../src/curried"
import { pantheon } from "../__mocks__"

const exclude = ["Jupiter", "Saturn", "Neptune"]

test("omit", (benchmark) => {
  benchmark(() => omit(exclude, pantheon), "Vanillas \"omit\"")
  benchmark(() => _.omit(pantheon, exclude), "Lodash \"omit\"")
  benchmark(() => raw.omit(pantheon, exclude), "Radash \"omit\"")
  benchmark(() => R.omit(exclude, pantheon), "Ramda \"omit\"")
  benchmark(() => Fx.omit(exclude, pantheon), "FxJs \"omit\"")
  benchmark(
    () =>
      Object.keys(pantheon)
        .filter((key) => !exclude.includes(key))
        .reduce((newObj, key) => ({ ...newObj, [key]: pantheon[key] }), {}),
    "(native) \"Object.keys().filter().reduce()\""
  )
})

test("curriedOmit", (benchmark) => {
  benchmark(() => curriedOmit(["Jupiter", "Saturn", "Neptune"])(pantheon), "Vanillas (curried) \"omit\"")
  benchmark(() => R.omit(["Jupiter", "Saturn", "Neptune"])(pantheon), "Ramda (curried) \"omit\"")
  benchmark(() => Fx.omit(["Jupiter", "Saturn", "Neptune"])(pantheon), "FxJs (curried) \"omit\"")
})
