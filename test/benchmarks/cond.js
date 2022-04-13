/* eslint-disable consistent-return, jsdoc/require-jsdoc */
import { test } from "reality-check"
import R from "ramda"
import _ from "lodash"
import * as Fx from "fxjs"
import { cond } from "../../src"
import { composers } from "../__mocks__"

const conditionalTransforms = [
  [v => v.Hoffman === "dustin" || v.Williams === "robin", () => "Hook was released in 1991"],
  [v => v.Hoffman === "albert", () => "Strange discoveries can happen when researching obstetrics"],
  [v => /^ralph/.test(v.Williams),
    comp => Object.keys(comp).map(key => `${comp[key]} ${key.toLowerCase()}`).join(", ")
  ]
]

function nativeIfElsey(v) {
  if (v.Hoffman === "dustin" || v.Williams === "robin") {
    return "Hook was released in 1991"
  } else if (v.Hoffman === "albert") {
    return "Strange discoveries can happen when researching obstetrics"
  } else if (/^ralph/.test(v.Williams)) {
    return Object.keys(v).map(key => `${v[key]} ${key.toLowerCase()}`).join(", ")
  }
}

test("cond", benchmark => {
  benchmark(
    () => cond(conditionalTransforms, composers),
    "Vanillas \"cond\""
  )
  benchmark(
    () => _.cond(conditionalTransforms)(composers),
    "Lodash \"cond\""
  )
  benchmark(
    () => R.cond(conditionalTransforms)(composers),
    "Ramda \"cond\""
  )
  benchmark(
    () => Fx.cond(...conditionalTransforms)(composers),
    "FxJs \"cond\""
  )
  benchmark(
    () => nativeIfElsey(composers),
    "(native) \"If/Else/ElseIf\""
  )
})
