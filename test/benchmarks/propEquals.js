import { test } from "reality-check"
import R from "ramda"
import { propEquals } from "../../src"
import { propEquals as curriedPropEquals } from "../../src/curried"
import val from "../__mocks__"

test("propEquals", benchmark => {
  benchmark(
    () => propEquals(["pantheon", "Mercury", "greek"], "Hermes", val),
    "Vanillas \"propEquals\""
  )
  benchmark(
    () => R.pathEq(["pantheon", "Mercury", "greek"], "Hermes", val),
    "Ramda \"pathEq\""
  )
  benchmark(
    () => val && val.pantheon && val.pantheon.Mercury && val.pantheon.Mercury.greek === "Hermes",
    "(native) \"&& until you find it\""
  )
})

test("curriedPropEquals", benchmark => {
  benchmark(
    () => curriedPropEquals(["pantheon", "Mercury", "greek"])("Hermes")(val),
    "Vanillas (curried) \"propEquals\""
  )
  benchmark(
    () => R.pathEq(["pantheon", "Mercury", "greek"])("Hermes")(val),
    "Ramda (curried) \"pathEq\""
  )
})
