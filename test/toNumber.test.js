import tape from "tape"
import toNumber from "../src/toNumber"

tape("\"toNumber\" can convert a numeric string value to a number", t => {
  t.equal(toNumber("0"), 0, "0")
  t.equal(toNumber(undefined), undefined, "undefined")
  t.equal(toNumber(null), undefined, "null")
  t.equal(toNumber(""), undefined, "blank string")
  t.equal(toNumber("0.00"), 0, "0.00")
  t.equal(toNumber("1"), 1, "1")
  t.equal(toNumber("-1"), -1, "-1")

  const randomPositiveNumber = Math.floor(Math.random() * 1000)
  t.equal(
    toNumber(`${randomPositiveNumber}`),
    randomPositiveNumber,
    `random positive number: ${randomPositiveNumber}`
  )

  const randomNegativeNumber = -Math.floor(Math.random() * 1000)
  t.equal(
    toNumber(`${randomNegativeNumber}`),
    randomNegativeNumber,
    `random negative number: ${randomNegativeNumber}`
  )

  t.end()
})
