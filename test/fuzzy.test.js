import tape from "tape"
import fuzzy from "../src/fuzzy"
import { fuzzy as fuzzyCurried } from "../src/curried"
import { companies } from "./__mocks__"

tape("\"filter\" can apply a function to an Object, String, or something that is Array-like", t => {
  const needle = "dickinson"

  const expectedMatches = [
    { name: "Dickinson, Orn and Gerlach", uri: "http://rosella.com" },
    { name: "Dickinson Group", uri: "http://wilford.biz" },
    { name: "Wehner - Dickinson", uri: "https://mariana.net" },
    { name: "Dickinson Inc", uri: "https://bette.biz" }
  ]
  t.deepEqual(
    fuzzy(s => s.name, needle, true, companies),
    [],
    "no matches when case-sensitive"
  )
  t.deepEqual(
    fuzzy(s => s.name, needle, false, companies),
    expectedMatches,
    "can be case insensitive"
  )
  t.deepEqual(
    fuzzy(null, needle, false, companies.map(c => c.name)),
    expectedMatches.map(c => c.name),
    "can be a string list"
  )
  t.deepEqual(
    fuzzyCurried(s => s.name)(needle, false)(companies),
    expectedMatches,
    "can also be curried"
  )
  t.end()
})
