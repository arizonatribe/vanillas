import { test } from "reality-check"
import _ from "lodash"
import R from "ramda"
import * as Fx from "fxjs"
import { contains } from "../../src"
import { magic } from "../__mocks__"

const { sons } = magic.Weasley["Arthur and Molly"]

test("contains", benchmark => {
  benchmark(
    () => contains("Ronald", sons),
    "Vanillas \"contains\" (array)"
  )
  benchmark(
    () => _.includes(sons, "Ronald"),
    "Lodash \"includes\" (array)"
  )
  benchmark(
    () => R.contains("Ronald", sons),
    "Ramda \"contains\" (array)"
  )
  benchmark(
    () => Fx.includes("Ronald", sons),
    "FxJs \"includes\" (array)"
  )
  benchmark(
    () => sons.includes("Ronald"),
    "(native) \"Array.includes()\""
  )
})

test("containsStringTests", benchmark => {
  benchmark(
    () => contains("Ronald", "Ronald McDonald"),
    "Vanillas \"contains\" (string)"
  )
  benchmark(
    () => _.includes("Ronald McDonald", "Ronald"),
    "Lodash \"includes\" (string)"
  )
  benchmark(
    () => R.contains("Ronald", "Ronald McDonald"),
    "Ramda \"contains\" (string)"
  )
  benchmark(
    () => R.contains("Ronald", "Ronald McDonald"),
    "FxJs \"includes\" (string)"
  )
  benchmark(
    () => "Ronald McDonald".includes("Ronald"),
    "(native) \"String.includes()\""
  )
})
