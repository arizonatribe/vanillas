import { test } from "reality-check"
import * as raw from "radash"
import { toCamelCase } from "../../src"

const val = "LoremIpsum dolor-sit_amet"

test("camelcase", (benchmark) => {
  benchmark(() => toCamelCase(val), 'Vanillas "toCamelCase"')
  benchmark(() => raw.camal(val), 'Radash "camal"')
})
