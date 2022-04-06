import { test } from "reality-check"
import R from "ramda"
import * as Fx from "fxjs"
import { pipe } from "../../src"

const val = 1.3
const add4 = a => a + 4
const subtract7 = a => a - 7
const divide3 = a => a / 3
const randomNumber = Math.random()
const random = () => randomNumber

test("pipe", benchmark => {
  benchmark(
    () => pipe(random, add4, subtract7, divide3)(val),
    "Vanillas \"pipe\""
  )
  benchmark(
    () => R.pipe(random, add4, subtract7, divide3)(val),
    "Ramda \"pipe\""
  )
  benchmark(
    () => Fx.pipe(random, add4, subtract7, divide3)(val),
    "FxJs \"pipe\""
  )
})
