import _ from 'lodash'
import R from 'ramda'
import { clone } from '../../src'

const data = {
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
  ['Futilities "clone"', clone],
  ['Lodash "cloneDeep"', _.cloneDeep],
  ['Ramda "clone"', R.clone],
  ['(native) "clone by destructuring"', val => {
    const newObj = {
      ...val,
      hook: { ...val.hook },
      sphere: { ...val.sphere },
      jurrassicPark: { ...val.jurrassicPark }
    }
    return newObj
  }]
]

export default { tests, data }
