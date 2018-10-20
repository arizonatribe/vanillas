import R from 'ramda'
import { propEquals } from '../../src'

const data = {
  lorem: {
    ipsum: '',
    dolor: '',
    sit: '',
    amet: '',
    consectetur: {
      adipiscing: 'elit'
    }
  }
}

const tests = [
  ['Futilities "propEquals"', val => propEquals(['lorem', 'consectetur', 'adipiscing'], 'elit', val)],
  ['Ramda "pathEq"', val => R.pathEq(['lorem', 'consectetur', 'adipiscing'], 'elit', val)],
  ['(native) "&& until you find it"', val =>
    val && val.lorem && val.lorem.consectetur && val.lorem.consectetur.adipiscing === 'elit']
]

export default { tests, data }
