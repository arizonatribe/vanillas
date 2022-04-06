import { test } from "reality-check"
import _ from "lodash"
import R from "ramda"
import * as Fx from "fxjs"
import { uniqBy } from "../../src"
import { profiles } from "../__mocks__"

test("uniqBy", benchmark => {
  benchmark(
    () => uniqBy("age", profiles),
    "Vanillas \"uniqBy\" (top-level prop)"
  )
  benchmark(
    () => _.uniqBy(profiles, "age"),
    "Lodash \"uniqBy\" (top-level prop)"
  )
  benchmark(
    () => R.uniqBy(R.prop("age"), profiles),
    "Ramda \"uniqBy\" (top-level prop)"
  )
  benchmark(
    () => Fx.uniqBy(obj => obj.age, profiles),
    "FxJs \"uniqBy\" (top-level prop)"
  )
})

test("deeplyUniqBy", benchmark => {
  benchmark(
    () => uniqBy("favorites.color", profiles),
    "Vanillas \"uniqBy\" (nested prop)"
  )
  benchmark(
    () => _.uniqBy(profiles, "favorites.color"),
    "Lodash \"uniqBy\" (nested prop)"
  )
  benchmark(
    () => R.uniqBy(R.path(["favorites", "color"]), profiles),
    "Ramda \"uniqBy\" (nested prop)"
  )
  benchmark(
    () => Fx.uniqBy(obj => obj.favorites.color, profiles),
    "FxJs \"uniqBy\" (nested prop)"
  )
})
