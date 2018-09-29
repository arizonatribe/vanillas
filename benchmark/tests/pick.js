import _ from 'lodash'
import R from 'ramda'
import { pick } from '../../src'

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
  ['Futilities "pick"', val => pick(['lorem', 'consectetur', 'ipsum'], val)],
  ['Lodash "pick"', val => _.pick(val, ['lorem', 'consectetur', 'ipsum'])],
  ['Ramda "pick"', val => R.pick(['lorem', 'consectetur', 'ipsum'], val)],
  ['(native) "Array.prototype.reduce"', val =>
    ['lorem', 'consectetur', 'ipsum'].reduce((newObj, key) => ({ ...newObj, [key]: val[key] }), {})
  ]
]

export default { tests, data }
