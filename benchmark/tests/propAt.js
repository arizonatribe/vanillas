import _ from 'lodash'
import R from 'ramda'
import { propAt } from '../../src'

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
  ['Futilities "propAt"', val => propAt(['lorem', 'consectetur', 'adipiscing'], val)],
  ['Lodash "get"', val => _.get(val, ['lorem', 'consectetur', 'adipiscing'])],
  ['Ramda "path"', val => R.path(['lorem', 'consectetur', 'adipiscing'], val)],
  ['(native) "&& until you find it"', val =>
    val && val.lorem && val.lorem.consectetur && val.lorem.consectetur.adipiscing]
]

export default { tests, data }
