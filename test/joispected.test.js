import test from "tape"
import * as yup from "yup"
import Joi from "joi"
import spected from "spected"
import { validate } from "../src"

const formData = {
  Scary: "Melanie Brown",
  Sporty: "Melanie Chisolm",
  Baby: "Emma Burton",
  Ginger: "Geri Halliwell",
  Posh: "Victoria Beckham"
}

const nameIsNot = namenot => val => !(new RegExp(`${namenot}`, "i")).test(val)
const firstNameShouldBe = fName => val => (new RegExp(`^${fName}`, "i")).test(val)
const lastNameShouldBe = lName => val => (new RegExp(`${lName}$`, "i")).test(val)

const JoiEx = Joi.extend((joi) => ({
  base: joi.string(),
  name: "string",
  language: {
    lname: "name must not be \"{{q}}\"",
    fname: "First name must be \"{{q}}\"",
    namenot: "Last name must be \"{{q}}\""
  },
  rules: [{
    name: "fname",
    description: "first name",
    params: {
      q: joi.string().label("FirstName").required()
    },
    validate(params, value, state, options) {
      const fname = params.q
      return firstNameShouldBe(fname)(value)
        ? value
        : this.createError("string.fname", { fname }, state, options)
    }
  }, {
    name: "lname",
    description: "last name",
    params: {
      q: joi.string().label("LastName").required()
    },
    validate(params, value, state, options) {
      const lname = params.q
      return lastNameShouldBe(lname)(value)
        ? value
        : this.createError("string.lname", { lname }, state, options)
    }
  }, {
    name: "namenot",
    description: "name does not have",
    params: {
      q: joi.string().label("NameDoesNotHave").required()
    },
    validate(params, value, state, options) {
      const namenot = params.q
      return nameIsNot(namenot)(value)
        ? value
        : this.createError("string.namenot", { namenot }, state, options)
    }
  }]
}))

const joiRules = JoiEx.object().keys({
  Scary: [JoiEx.string().fname("Melanie"), JoiEx.string().lname("Brown")],
  Sporty: [JoiEx.string().fname("Melanie"), JoiEx.string().lname("Chisolm")],
  Baby: [JoiEx.string().namenot("Stephenson"), JoiEx.string().fname("Emma"), JoiEx.string().lname("Burton")],
  Ginger: [JoiEx.string().fname("Geri"), JoiEx.string().lname("Halliwell")],
  Posh: [JoiEx.string().fname("Victoria"), JoiEx.string().namenot("Adams"), JoiEx.string().lname("Beckham")]
})

const yupRules = yup.object().shape({
  Scary: yup.string()
    .test("is-melanie", "Only Melanies are scary", firstNameShouldBe("Melanie"))
    .test("is-brown", "Last name for \"Scary\" should be \"Brown\"", lastNameShouldBe("Brown")),
  Sporty: yup.string()
    .test("is-melanie", "Only Melanies are scary", firstNameShouldBe("Melanie"))
    .test("is-chisolm", "Last name for \"Sporty\" should be \"Chisolm\"", lastNameShouldBe("Chisolm")),
  Baby: yup.string()
    .test("is-emma", "First name for \"Baby\" should be \"Emma\"", firstNameShouldBe("Emma"))
    .test("is-burton", "Last name for \"Baby\" should be \"Burton\"", lastNameShouldBe("Burton"))
    .test("is-not-stephenson", "Michelle Stephenson was replaced by Emma Burton", nameIsNot("Stephenson")),
  Ginger: yup.string()
    .test("is-geri", "First name for \"Ginger\" should be \"Geri\"", firstNameShouldBe("Geri"))
    .test("is-halliwell", "Last name for \"Ginger\" should be \"Halliwell\"", lastNameShouldBe("Halliwell")),
  Posh: yup.string()
    .test("is-vicky", "First name for \"Posh\" should be \"Victoria\"", firstNameShouldBe("Victoria"))
    .test("is-beckham", "Last name for \"Posh\" should be \"Beckham\"", lastNameShouldBe("Beckham"))
    .test("is-not-adams", "Victoria Adams is now Victoria Beckham (she married David Beckham).", nameIsNot("Adams"))
})

const vanillaRules = {
  Scary: [
    [firstNameShouldBe("Melanie"), "Only Melanies are scary"],
    [lastNameShouldBe("Brown"), "Last name for \"Scary\" should be \"Brown\""]
  ],
  Sporty: [
    [firstNameShouldBe("Melanie"), "Only Melanies are sporty"],
    [lastNameShouldBe("Chisolm"), "Last name for \"Sporty\" should be \"Chisolm\""]
  ],
  Baby: [
    [nameIsNot("Stephenson"), "Michelle Stephenson was replaced by Emma Burton"],
    [firstNameShouldBe("Emma"), "First name for \"Baby\" should be \"Emma\""],
    [lastNameShouldBe("Burton"), "Last name for \"Baby\" should be \"Burton\""]
  ],
  Ginger: [
    [firstNameShouldBe("Geri"), "First name for \"Ginger\" should be \"Geri\""],
    [lastNameShouldBe("Halliwell"), "Last name for \"Ginger\" should be \"Halliwell\""]
  ],
  Posh: [
    [firstNameShouldBe("Victoria"), "First name for \"Posh\" should be \"Victoria\""],
    [nameIsNot("Adams"), "Victoria Adams is now Victoria Beckham (she married David Beckham)."],
    [lastNameShouldBe("Beckham"), "Last name for \"Posh\" should be \"Beckham\""]
  ]
}

test("\"yup\"", t => {
  t.doesNotThrow(() => yupRules.validateSync(formData, { abortEarly: false }), {})
  t.end()
})
test("\"joi\"", t => {
  t.equal(JoiEx.validate(formData, joiRules).error, null)
  t.end()
})
test("\"spected\"", t => {
  t.deepEqual(
    spected(vanillaRules, formData),
    {Scary: true, Sporty: true, Baby: true, Ginger: true, Posh: true},
    "spected"
  )
  t.end()
})
test("\"vanillas\"", t => {
  t.deepEqual(validate(vanillaRules, formData), {}, "vanillas")
  t.end()
})
