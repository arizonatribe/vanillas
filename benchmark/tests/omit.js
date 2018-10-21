import _ from 'lodash'
import R from 'ramda'
import { omit } from '../../src'

const val = {
  lorem: '',
  ipsum: '',
  dolor: '',
  sit: '',
  amet: '',
  consectetur: {
    adipiscing: 'elit'
  }
}

const tests = [
  ['Vanillas "omit"', () => omit(['lorem', 'consectetur', 'ipsum'], val)],
  ['Lodash "omit"', () => _.omit(val, ['lorem', 'consectetur', 'ipsum'])],
  ['Ramda "omit"', () => R.omit(['lorem', 'consectetur', 'ipsum'], val)],
  ['(native) "Object.keys().filter().reduce() (native)', () =>
    Object.keys(val).reduce((newObj, key) => ({ ...newObj, [key]: val[key] }), {})
  ]
]

export default { tests }
