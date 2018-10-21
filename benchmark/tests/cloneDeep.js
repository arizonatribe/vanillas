import _ from 'lodash'
import R from 'ramda'
import { clone } from '../../src'

const val = {
  hook: {
    Hoffman: 'dustin',
    Williams: 'robin',
    Roberts: 'julia',
    Hoskins: 'bob'
  },
  sphere: {
    Hoffman: 'dustin',
    Jackson: 'samuel',
    Stone: 'sharon',
    Latifah: 'queen'
  },
  jurrassicPark: {
    Neill: 'sam',
    Jackson: 'samuel',
    Knight: 'wayne',
    Goldblum: 'jeff'
  }
}

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
