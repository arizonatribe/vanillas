import { test } from "reality-check"
import _ from "lodash"
import R from "ramda"
import * as raw from "radash"
import * as Fx from "fxjs"
import { pick } from "../../src"
import { pick as curriedPick } from "../../src/curried"
import { solarSystem } from "../__mocks__"

test("pick", (benchmark) => {
  benchmark(() => pick(["Mercury", "Venus", "Mars"], solarSystem), 'Vanillas "pick"')
  benchmark(() => _.pick(solarSystem, ["Mercury", "Venus", "Mars"]), 'Lodash "pick"')
  benchmark(() => raw.pick(solarSystem, ["Mercury", "Venus", "Mars"]), 'Radash "pick"')
  benchmark(() => R.pick(["Mercury", "Venus", "Mars"], solarSystem), 'Ramda "pick"')
  benchmark(() => Fx.pick(["Mercury", "Venus", "Mars"], solarSystem), 'FxJs "pick"')
  benchmark(
    () => ["Mercury", "Venus", "Mars"].reduce((newObj, key) => ({ ...newObj, [key]: solarSystem[key] }), {}),
    '(native) "Array.prototype.reduce"'
  )
})

test("curriedPick", (benchmark) => {
  benchmark(() => curriedPick(["Mercury", "Venus", "Mars"])(solarSystem), 'Vanillas (curried) "pick"')
  benchmark(() => R.pick(["Mercury", "Venus", "Mars"])(solarSystem), 'Ramda (curried) "pick"')
  benchmark(() => Fx.pick(["Mercury", "Venus", "Mars"])(solarSystem), 'FxJs (curried) "pick"')
})
