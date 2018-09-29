import _ from 'lodash'
import R from 'ramda'
import { omit } from '../../src'

const data = {
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
  ['Futilities "omit"', val => omit(['lorem', 'consectetur', 'ipsum'], val)],
  ['Lodash "omit"', val => _.omit(val, ['lorem', 'consectetur', 'ipsum'])],
  ['Ramda "omit"', val => R.omit(['lorem', 'consectetur', 'ipsum'], val)],
  ['(native) "Object.keys().filter().reduce() (native)', val =>
    Object.keys(val).reduce((newObj, key) => ({ ...newObj, [key]: val[key] }), {})
  ]
]

export default { tests, data }
