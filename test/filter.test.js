import tape from "tape"
import filter from "../src/filter"
import { filter as filterCurried } from "../src/curried"

tape("\"filter\" can apply a function to an Object, String, or something that is Array-like", t => {
  t.deepEqual(
    filter(str => /n$/.test(str), {
      Hoffman: "dustin",
      Williams: "robin",
      Roberts: "julia",
      Hoskins: "bob"
    }), {
      Hoffman: "dustin",
      Williams: "robin"
    },
    "filter the values in an object"
  )
  const actors = ["dustin", "robin", "julia", "bob"]
  const actresses = filter(str => str === "julia", actors)
  t.deepEqual(
    actresses,
    ["julia"],
    "filter the contents of an array"
  )
  t.deepEqual(
    filter(
      i => i < 20,
      new Int8Array([18, 19, 20, 21])
    ), [18, 19],
    "filter the contents of an Int8Array"
  )
  t.deepEqual(
    filter(
      i => i < 2000,
      new Int16Array([1800, 1900, 2000, 2100])
    ), [1800, 1900],
    "filter the contents of an Int16Array"
  )
  t.deepEqual(
    filter(
      i => i <= 13390,
      new Int32Array([13384, 13389, 13391, 13395])
    ), [13384, 13389],
    "filter the contents of an Int32Array"
  )
  t.deepEqual(
    filter(
      i => Math.ceil(i) < 70,
      new Float32Array([902.1, 89.1, 22.5, 743.7])
    ), [22.5],
    "filter the contents of a Float32Array"
  )
  t.deepEqual(
    filter(
      i => Math.floor(i) % 7 === 0,
      new Float64Array([7000.12038, 6999.19292929])
    ), [7000.12038],
    "filter the contents of a Float64Array"
  )
  t.deepEqual(
    filter(
      v => v % 7 === 0,
      new Uint8Array([7, 21, 49, 60])
    ), [7, 21, 49],
    "filter the contents of a Uint8Array"
  )
  t.deepEqual(
    filter(
      v => v % 7 === 0,
      new Uint16Array([700, 2100, 4900, 6000])
    ), [700, 2100, 4900],
    "filter the contents of a Uint16Array"
  )
  t.equal(
    filter(str => /[a-z]/i.test(str), "user_name"),
    "username",
    "filter the chars in a string"
  )
  t.equal(
    filterCurried(str => /[a-z]/i.test(str))("user_name"),
    "username",
    "can also be curried"
  )
  t.end()
})
