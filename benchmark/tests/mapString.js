import { mapString } from "../../src"

const val = "lorem ipsum dolor sit amet. consectetur adipiscing elit."

function mapStringArr(fn, str) {
  const len = str.length
  const strArr = Array(len)
  for (let i = 0; i < len; i++) {
    strArr[i] = fn(str[i], i, str)
  }
  return strArr.join("")
}

const tests = [
  ["Vanillas \"mapString\"", () => mapString(str => str.toUpperCase(), val)],
  ["Char array", () => mapStringArr(str => str.toUpperCase(), val)],
  ["(native) \"String.split().map().join()\"",
    () => val.split("")
      .map(str => str.toUpperCase())
      .join("")
  ]
]

export default { tests }
