import _ from 'lodash'
import R from 'ramda'
import { pick } from '../../src'

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
  ['Vanillas "pick"', () => pick(['lorem', 'consectetur', 'ipsum'], val)],
  ['Lodash "pick"', () => _.pick(val, ['lorem', 'consectetur', 'ipsum'])],
  ['Ramda "pick"', () => R.pick(['lorem', 'consectetur', 'ipsum'], val)],
  ['(native) "Array.prototype.reduce"', () =>
    ['lorem', 'consectetur', 'ipsum'].reduce((newObj, key) => ({ ...newObj, [key]: val[key] }), {})
  ]
]

export default { tests }
