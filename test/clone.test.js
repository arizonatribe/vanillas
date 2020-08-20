import tape from "tape"
import clone from "../src/clone"
import { magic, magicWithoutKids } from "./__mocks__"

tape("\"clone\" copies an object from another", t => {
  const { Malfoy, Potter, Weasley } = magic
  const { Snape, Dumbledore, Black } = magicWithoutKids
  const magicClone = clone(magic)

  t.deepEqual(magicClone, magic)

  Object.assign(magicClone, magicWithoutKids)
  t.deepEqual(magicClone, { Malfoy, Potter, Weasley, Snape, Dumbledore, Black })
  t.deepEqual(magic, { Malfoy, Potter, Weasley }, "original source object is unaltered")
  t.end()
})
