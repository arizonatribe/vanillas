import { test } from "reality-check"
import _ from "lodash"
import * as raw from "radash"
import R from "ramda"
import * as Fx from "fxjs"
import { difference } from "../../src"
import { difference as curriedDifference } from "../../src/curried"
import { composers, hook } from "../__mocks__"

const movie = Object.keys(hook)
const music = Object.keys(composers)

test("difference", (benchmark) => {
  benchmark(() => difference(movie, music), "Vanillas \"difference\"")
  benchmark(() => _.difference(movie, music), "Lodash \"difference\"")
  benchmark(() => raw.diff(movie, music), "Radash \"diff\"")
  benchmark(() => Fx.difference(music, movie), "FxJs \"difference\"")
  benchmark(() => R.difference(movie, music), "Ramda \"difference\"")
})

test("curriedDifference", (benchmark) => {
  benchmark(() => curriedDifference(movie)(music), "Vanillas \"difference\" (curried)")
  benchmark(() => Fx.difference(music)(movie), "FxJs \"difference\" (curried)")
  benchmark(() => R.difference(movie)(music), "Ramda \"difference\" (curried)")
})
