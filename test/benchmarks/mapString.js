import { test } from "reality-check"
import { mapString } from "../../src"

const val = "lorem ipsum dolor sit amet. consectetur adipiscing elit."

/* eslint-disable-next-line jsdoc/require-jsdoc */
function mapStringArr(fn, str) {
  const len = str.length
  const strArr = Array(len)
  for (let i = 0; i < len; i++) {
    strArr[i] = fn(str[i], i, str)
  }
  return strArr.join("")
}

test("mapString", benchmark => {
  benchmark(
    () => mapString(str => str.toUpperCase(), val),
    "Vanillas \"mapString\""
  )
  benchmark(
    () => mapStringArr(str => str.toUpperCase(), val),
    "Char array"
  )
  benchmark(
    () => val.split("")
      .map(str => str.toUpperCase())
      .join(""),
    "(native) \"String.split().map().join()\""
  )
})
