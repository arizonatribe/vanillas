import { mapString } from '../../src'

const val = 'lorem ipsum dolor sit amet. consectetur adipiscing elit.'

const tests = [
  ['Vanillas "mapString"', () => mapString(str => str.toUpperCase(), val)],
  ['(native) "String.split().map().join()"',
    () => val.split('')
      .map(str => str.toUpperCase())
      .join('')
  ]
]

export default { tests }
