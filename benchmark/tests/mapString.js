import { map } from '../../src'

const data = 'lorem ipsum dolor sit amet. consectetur adipiscing elit.'

const tests = [
  ['Futilities "map"', val => map(str => str.toUpperCase(), val)],
  ['(native) "String.split().map().join()"',
    val => val.split('')
      .map(str => str.toUpperCase())
      .join('')
  ]
]

export default { tests, data }
