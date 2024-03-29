import { test } from "reality-check"
import R from "ramda"
import * as raw from "radash"
import { filterObject } from "../../src"
import { hook } from "../__mocks__"

const pred = (str) => /n$/.test(str)

test("filterObject", (benchmark) => {
  benchmark(() => filterObject((str) => pred(str), hook), "Vanillas \"filterObject\"")
  benchmark(() => raw.shake(hook, (str) => !pred(str)), "Radash \"shake\"")
  benchmark(() => R.filter((str) => pred(str), hook), "Ramda \"filter\"")
  benchmark(
    () =>
      Object.entries(hook)
        .filter(([_, val]) => pred(val))
        .reduce((o, [key, v]) => ({ ...o, [key]: v }), {}),
    "(native) \"Object.entries().filter().reduce()\""
  )
})
