import { test } from "reality-check"
import * as raw from "radash"
import { toSnakeCase } from "../../src"

const val = "LoremIpsumDolorSitAmet"

test("snakecase", (benchmark) => {
  benchmark(() => toSnakeCase(val), 'Vanillas "toSnakeCase"')
  benchmark(() => raw.snake(val), 'Radash "snake"')
})
