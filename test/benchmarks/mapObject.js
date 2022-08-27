import { test } from "reality-check"
import _ from "lodash"
import * as raw from "radash"
import R from "ramda"
import { mapObject as FxMap } from "fxjs"
import { mapObject } from "../../src"
import { hook } from "../__mocks__"

test("mapObject", (benchmark) => {
  benchmark(() => mapObject((str) => str.toUpperCase(), hook), 'Vanillas "mapObject"')
  benchmark(() => _.mapValues(hook, (str) => str.toUpperCase()), 'Lodash "mapValues"')
  benchmark(() => raw.mapValues(hook, (str) => str.toUpperCase()), 'Radash "mapValues"')
  benchmark(() => FxMap((str) => str.toUpperCase(), hook), 'FxJs "map"')
  benchmark(() => R.map((str) => str.toUpperCase(), hook), 'Ramda "map"')
  benchmark(
    () => Object.keys(hook).reduce((o, key) => ({ ...o, [key]: hook[key].toUpperCase() }), {}),
    '(native) "Object.keys( ).reduce()"'
  )
  benchmark(
    () => Object.entries(hook).reduce((o, [key, v]) => ({ ...o, [key]: v.toUpperCase() }), {}),
    '(native) "Object.entries().reduce()"'
  )
})
