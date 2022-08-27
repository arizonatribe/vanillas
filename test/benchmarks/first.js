import { test } from "reality-check"
import _ from "lodash"
import * as raw from "radash"
import R from "ramda"
import { first } from "../../src"
import { companies } from "../__mocks__"

test("first", (benchmark) => {
  benchmark(() => first(companies), 'Vanillas "first"')
  benchmark(() => _.first(companies), 'Lodash "first"')
  benchmark(() => R.head(companies), 'Ramda "first"')
  benchmark(() => raw.first(companies), 'Radash "first"')
})
