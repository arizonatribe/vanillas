import tape from "tape"
import { escapeHtml } from "../src"

const val = "don't take my <insert_name_of_thing_here> & mis-use it for \"evil\""

tape("\"escapeHtml\" will html-escape certain values that pose a risk for XSS and SQL injection", t => {
  t.equal(escapeHtml(), "", "empty args means empty string returned")
  t.equal(escapeHtml(null), "", "null means empty string returned")
  t.equal(escapeHtml(999), "999", "numbers are returned as-is")
  t.equal(escapeHtml(["abc &", "def's"]), "abc &amp;,def&#39;s", "can handle arrays too")
  t.equal(
    escapeHtml(val),
    "don&#39;t take my &lt;insert_name_of_thing_here&gt; &amp; mis-use it for &quot;evil&quot;",
    "converts apostrophes, blockquotes, ampersands and angle brackets"
  )
  t.equal(
    escapeHtml("lorem ipsum dolor sit amet"),
    "lorem ipsum dolor sit amet",
    "strings not needing to be escaped are returned as-is"
  )

  t.end()
})
