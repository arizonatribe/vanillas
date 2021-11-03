import _ from "lodash"
import { escapeHtml } from "../../src"

const val = "don't take my <insert_name_of_thing_here> & mis-use it for \"evil\""

const tests = [
  ["Vanillas \"escapeHtml\"", () => escapeHtml(val)],
  ["Lodash \"escape\"", () => _.escape(val)]
]

export default { tests }
