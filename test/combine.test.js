import test from "tape"
import combine from "../src/combine"

test("\"combine\" will join, summarize, or merge two values together", (t) => {
  t.equal(combine(1, 2), 3, "Numeric combination")
  t.equal(combine("foo", "bar"), "foobar", "String combination")
  t.equal(combine(2, "two"), "2two", "Number and a String")
  t.equal(combine("two", 2), "two2", "String and a Number")
  t.deepEqual(
    combine([1, 2, 3], [4, 5, 6]),
    [1, 2, 3, 4, 5, 6],
    "Array combination"
  )
  t.deepEqual(
    combine({lorem: "ipsum"}, {dolor: "sit"}),
    {lorem: "ipsum", dolor: "sit"},
    "Object combination"
  )
  t.end()
})

test("\"combine\" will return the first value if it makes no sense to combine them", (t) => {
  t.equal(combine(true, false), true, "Boolean combination?")
  t.equal(combine(false, true), false, "Boolean combination?")
  t.equal(combine(false, {}), false, "Boolean and Object?")
  t.deepEqual(combine({}, false), {}, "Object and Boolean?")
  t.deepEqual(combine([1, 2, 3], {}), [1, 2, 3], "Array and Object?")
  t.deepEqual(combine({a: "b"}, [1, 2, 3]), {a: "b"}, "Object and Array?")
  t.equal(combine(null, null), null, "Null")
  t.equal(combine(undefined, null), undefined, "undefined")
  t.equal(combine(null, undefined), null, "undefined")
  t.end()
})
