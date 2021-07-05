import test from "tape"
import uniqBy from "../src/uniqBy"
import { profiles } from "./__mocks__"

test("\"uniqBy\" makes sure a list contains only unique values based on a supplied predicate function", t => {
  t.deepEqual(
    uniqBy("age", profiles), [
      { name: "john", age: 82, favorites: { color: "red", timeOfDay: "mornings" } },
      { name: "jim", age: 72, favorites: { color: "red", timeOfDay: "naptime" } },
      { name: "jeff", age: 62, favorites: { color: "blue", timeOfDay: "naptime" } },
      { name: "giovanni", age: 52, favorites: { color: "green", timeOfDay: "evening" } },
      { name: "giancarlo", age: 42, favorites: { color: "red", timeOfDay: "evening" } },
      { name: "josef", age: 32, favorites: { color: "red", timeOfDay: "mornings" } },
      { name: "johnson", age: 22, favorites: { color: "blue", timeOfDay: "evening" } }
    ],
    "can't have twins"
  )
  t.deepEqual(
    uniqBy("favorites.color", profiles), [
      { name: "john", age: 82, favorites: { color: "red", timeOfDay: "mornings" } },
      { name: "jeff", age: 62, favorites: { color: "blue", timeOfDay: "naptime" } },
      { name: "giovanni", age: 52, favorites: { color: "green", timeOfDay: "evening" } },
      { name: "jan", age: 32, favorites: { color: "yellow", timeOfDay: "mornings" } }
    ],
    "red, blue, green and yellow"
  )
  t.deepEqual(
    uniqBy(Math.floor, [2.1, 1.2]),
    [2.1, 1.2],
    "from Lodash example (#1)"
  )
  t.deepEqual(
    uniqBy("x", [{ x: 1, id: 1 }, { x: 2, id: 2 }, { x: 1, id: 3 }, { x: 2, id: 4 }, { x: 2, id: 5 }]),
    [{ x: 1, id: 1 }, { x: 2, id: 2 }],
    "from Lodash example (#2)"
  )
  t.deepEqual(
    uniqBy(Math.abs, [-1, -5, 2, 10, 1, 2]),
    [-1, -5, 2, 10],
    "from Ramda example"
  )
  t.deepEqual(
    uniqBy(
      ["x", 0],
      [
        { x: ["one", "two"], id: 1 },
        { x: ["one", "three"], id: 2 },
        { x: ["one", "three"], id: 3 },
        { x: ["two", "three"], id: 4 },
        { x: [], id: 5 }
      ]
    ),
    [{ x: ["one", "two"], id: 1 }, { x: ["two", "three"], id: 4 }, { x: [], id: 5 }],
    "prop path (as an array)"
  )
  t.deepEqual(
    uniqBy(
      "x.one",
      [
        { x: {one: "two"}, id: 1 },
        { x: {one: "three"}, id: 2 },
        { x: {one: "three"}, id: 3 },
        { x: {two: "three"}, id: 4 },
        { x: {}, id: 5 }
      ]
    ),
    [{ x: {one: "two"}, id: 1 }, { x: {one: "three"}, id: 2 }, { x: {two: "three"}, id: 4 }],
    "prop path as a dot-separated string"
  )
  t.end()
})
