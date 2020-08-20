import tape from "tape"
import validate from "../src/validate"
import { validate as validateCurried } from "../src/curried"

tape("\"validate\" can apply a function to an Object, String, or something that is Array-like", t => {
  const firstNameShouldBe = fName => val => (new RegExp(`^${fName}`, "i")).test(val)
  const lastNameShouldBe = lName => val => (new RegExp(`${lName}$`, "i")).test(val)
  const shouldBeMelanie = firstNameShouldBe("Melanie")
  const spiceSpec = {
    Scary: [
      [shouldBeMelanie, "Only Melanies are scary"],
      [lastNameShouldBe("Brown"), "Last name for \"Scary\" should be \"Brown\""]
    ],
    Sporty: [
      [shouldBeMelanie, "Only Melanies are sporty"],
      [lastNameShouldBe("Chisolm"), "Last name for \"Sporty\" should be \"Chisolm\""]
    ],
    Baby: [
      [val => !/stephenson/i.test(val), "Michelle Stephenson was replaced by Emma Burton"],
      [firstNameShouldBe("Emma"), "First name for \"Baby\" should be \"Emma\""],
      [lastNameShouldBe("Burton"), "Last name for \"Baby\" should be \"Burton\""]
    ],
    Ginger: [
      [firstNameShouldBe("Geri"), "First name for \"Ginger\" should be \"Geri\""],
      [lastNameShouldBe("Halliwell"), "Last name for \"Ginger\" should be \"Halliwell\""]
    ],
    Posh: [
      [firstNameShouldBe("Victoria"), "First name for \"Posh\" should be \"Victoria\""],
      [val => !/adams$/i.test(val), "Victoria Adams is now Victoria Beckham (she married David Beckham)."],
      [lastNameShouldBe("Beckham"), "Last name for \"Posh\" should be \"Beckham\""]
    ]
  }

  t.deepEqual(
    validate(spiceSpec, {
      Scary: "Melanie Brown",
      Sporty: "Melanie Chisolm",
      Baby: "Michelle Stephenson",
      Ginger: "Geri Halliwell",
      Posh: "Victoria Beckham"
    }), {
      Baby: [
        "Michelle Stephenson was replaced by Emma Burton",
        "First name for \"Baby\" should be \"Emma\"",
        "Last name for \"Baby\" should be \"Burton\""
      ]
    }
  )
  t.deepEqual(
    validate(spiceSpec, {
      Scary: "Melanie Melanie",
      Sporty: "Melanie Chisolm",
      Baby: "Emma Burton",
      Ginger: "Geri Halliwell",
      Posh: "Victoria Adams"
    }), {
      Scary: [
        "Last name for \"Scary\" should be \"Brown\""
      ],
      Posh: [
        "Victoria Adams is now Victoria Beckham (she married David Beckham).",
        "Last name for \"Posh\" should be \"Beckham\""
      ]
    }
  )
  t.deepEqual(
    validateCurried(spiceSpec)({
      Scary: "Melanie Brown",
      Sporty: "Melanie Chisolm",
      Baby: "Emma Burton",
      Ginger: "Geri Halliwell",
      Posh: "Victoria Beckham"
    }),
    {},
    "can also be curried"
  )
  t.end()
})
