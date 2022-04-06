/* eslint-disable jsdoc/require-jsdoc */
import { test } from "reality-check"
import R from "ramda"
import { mapSpec, toTitleCase } from "../../src"
import { mapSpec as curriedMapSpec } from "../../src/curried"
import { hook } from "../__mocks__"

const yearOfHook = { ...hook, year: "1991" }

const spec = {
  Hoffman: toTitleCase,
  Williams: toTitleCase,
  Roberts: toTitleCase,
  Hoskins: toTitleCase,
  year: Number
}

test("mapSpec", benchmark => {
  benchmark(
    () => mapSpec(spec, yearOfHook),
    "Vanillas \"mapSpec\""
  )
  benchmark(
    () => R.evolve(spec, yearOfHook),
    "Ramda \"evolve\""
  )
  benchmark(() => {
    function mapDeeply(fns, val) {
      const newObj = {}
      Object.keys(fns).forEach(key => {
        if (typeof fns[key] === "function") {
          newObj[key] = fns[key](val[key])
        } else if (fns[key].constructor && fns[key].constructor.name === "Object") {
          newObj[key] = mapDeeply(fns[key])(val[key])
        } else {
          newObj[key] = val[key]
        }
      })
      return newObj
    }
    return mapDeeply(spec, yearOfHook)
  }, "(native) recursive \"Object.keys(spec).forEach()\"")
})

test("curriedMapSpec", benchmark => {
  benchmark(
    () => curriedMapSpec(spec)(yearOfHook),
    "Vanillas (curried) \"mapSpec\""
  )
  benchmark(
    () => R.evolve(spec)(yearOfHook),
    "Ramda (curried) \"evolve\""
  )
})
