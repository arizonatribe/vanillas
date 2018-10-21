import _ from 'lodash'
import R from 'ramda'
import { propAt } from '../../src'

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
  ['Vanillas "propAt"', () => propAt(['lorem', 'consectetur', 'adipiscing'], val)],
  ['Lodash "get"', () => _.get(val, ['lorem', 'consectetur', 'adipiscing'])],
  ['Ramda "path"', () => R.path(['lorem', 'consectetur', 'adipiscing'], val)],
  ['(native) "&& until you find it"', () =>
    val && val.lorem && val.lorem.consectetur && val.lorem.consectetur.adipiscing]
]

export default { tests }
