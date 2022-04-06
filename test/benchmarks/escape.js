import { test } from "reality-check"
import _ from "lodash"
import { escapeHtml } from "../../src"

const val = "don't take my <insert_name_of_thing_here> & mis-use it for \"evil\""

test("escape", benchmark => {
  benchmark(
    () => escapeHtml(val),
    "Vanillas \"escapeHtml\""
  )
  benchmark(
    () => _.escape(val),
    "Lodash \"escape\""
  )
})
