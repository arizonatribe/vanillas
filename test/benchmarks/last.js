import { test } from "reality-check"
import _ from "lodash"
import * as raw from "radash"
import R from "ramda"
import { last } from "../../src"
import { companies } from "../__mocks__"

test("last", (benchmark) => {
  benchmark(() => last(companies), 'Vanillas "last"')
  benchmark(() => _.last(companies), 'Lodash "last"')
  benchmark(() => R.last(companies), 'Ramda "last"')
  benchmark(() => raw.last(companies), 'Radash "last"')
})
