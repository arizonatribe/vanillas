import tape from "tape"
import toSnakeCase from "../src/toSnakeCase"

tape("\"toSnakeCase\" will convert the a given string to an underscore-separated value", t => {
  t.equal(toSnakeCase("lorem"), "lorem", "values without any case changes or hyphens are returned as-is")
  t.equal(toSnakeCase("loremIpsumDolorSitAmet"), "lorem_ipsum_dolor_sit_amet", "camel-case changed to snake case")
  t.equal(toSnakeCase("lorem-ipsum-dolor-sit-amet"), "lorem_ipsum_dolor_sit_amet", "kebab-case changed to snake case")
  t.equal(toSnakeCase("lorem-ipsumDolor-sitAmet"), "lorem_ipsum_dolor_sit_amet", "mixed case still changed to snake case")
  t.end()
})
