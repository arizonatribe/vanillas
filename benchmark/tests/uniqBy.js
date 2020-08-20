import _ from "lodash"
import R from "ramda"
import { uniqBy } from "../../src"
import { profiles } from "../../test/__mocks__"

const uniqByTests = [
  ["Vanillas \"uniqBy\" (top-level prop)", () => uniqBy("age", profiles)],
  ["Lodash \"uniqBy\" (top-level prop)", () => _.uniqBy(profiles, "age")],
  ["Ramda \"uniqBy\" (top-level prop)", () => R.uniqBy(R.prop("age"), profiles)]
]

const deeplyUniqByTests = [
  ["Vanillas \"uniqBy\" (nested prop)", () => uniqBy("favorites.color", profiles)],
  ["Lodash \"uniqBy\" (nested prop)", () => _.uniqBy(profiles, "favorites.color")],
  ["Ramda \"uniqBy\" (nested prop)", () => R.uniqBy(R.path(["favorites", "color"]), profiles)]
]

export default { uniqByTests, deeplyUniqByTests }
