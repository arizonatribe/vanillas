import _ from 'lodash'
import R from 'ramda'
import { clone } from '../../src'
import { hook, sphere, jurrassicPark } from '../../test/__mocks__'

const val = { hook, sphere, jurrassicPark }

const tests = [
  ['Vanillas "clone"', () => clone(val)],
  ['Lodash "cloneDeep"', () => _.cloneDeep(val)],
  ['Ramda "clone"', () => R.clone(val)],
  ['(native) "clone by destructuring"', () => {
    const newObj = {
      ...val,
      hook: { ...val.hook },
      sphere: { ...val.sphere },
      jurrassicPark: { ...val.jurrassicPark }
    }
    return newObj
  }]
]

export default { tests }
