import R from 'ramda'
import { propEquals } from '../../src'

const val = {
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
  ['Vanillas "propEquals"', () => propEquals(['lorem', 'consectetur', 'adipiscing'], 'elit', val)],
  ['Ramda "pathEq"', () => R.pathEq(['lorem', 'consectetur', 'adipiscing'], 'elit', val)],
  ['(native) "&& until you find it"', () =>
    val && val.lorem && val.lorem.consectetur && val.lorem.consectetur.adipiscing === 'elit']
]

export default { tests }
