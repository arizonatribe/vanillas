import tape from "tape"
import curry from "../src/curry"
import { spices } from "./__mocks__"

tape("\"curry\" can transform a function of any arity into a function that can be partially applied until all arguments have been provided", t => {
  function fullName(first, last) {
    return `${first} ${last}`
  }
  const getFirstName = curry(fullName)
  const getLastName = getFirstName("George")
  t.equal(getLastName("Washington"), "George Washington", "two arg currying")
  t.equal(getFirstName("George", "Washington"), "George Washington", "two arg currying (both args at once)")

  function annualSalary(hours, weeks, rate) {
    return hours * weeks * rate
  }
  const getHoursPerWeek = curry(annualSalary)
  const getWeeksPerYear = getHoursPerWeek(40)
  const getRate = getWeeksPerYear(50)
  t.equal(getRate(2), 4000, "three arg currying")
  t.equal(getHoursPerWeek(40, 50, 2), 4000, "three arg currying (all args at once)")

  function combinedVolumes(width, height, depth, count) {
    return width * height * depth * count
  }
  const getWidth = curry(combinedVolumes)
  const getHeight = getWidth(12)
  const getDepth = getHeight(10)
  const getCount = getDepth(17)
  t.equal(getCount(4), 8160, "four arg currying")
  t.equal(getWidth(12, 10, 17, 4), 8160, "four arg currying (all args at once)")

  function whoAreThey(g1, g2, g3, g4, g5) {
    return [g1, g2, g3, g4, g5].every(girl => spices[girl])
      ? "The Spice Girls"
      : "who knows?"
  }
  const getScary = curry(whoAreThey)
  const getSporty = getScary("Brown")
  const getBaby = getSporty("Chisholm")
  const getGinger = getBaby("Bunton")
  const getPosh = getGinger("Halliwell")
  t.equal(getPosh("Beckham"), "The Spice Girls", "five+ arg currying")
  t.equal(getScary("Brown", "Chisholm", "Bunton", "Halliwell", "Beckham"), "The Spice Girls", "five+ arg currying (all args at once)")

  t.end()
})
