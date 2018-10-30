import test from 'tape'
import { merge } from '../src'
import {
  initialState,
  switchReducer,
  customerSpec,
  shipmentsSpec,
  ordersSpec
} from './__mocks__/reducers'

function createReducer(spec) {
  return function inner(state, action) {
    return (spec[action.type] || (s => s))(state, action)
  }
}
// function createReducer(spec) {
//   return function inner(state, action) {
//     const { type } = action
//     const reduce = spec[type]
//     return (typeof reduce === 'function')
//       ? reduce(state, action)
//       : state
//   }
// }

test('"reducer"', t => {
  const reducer = createReducer({ ...customerSpec, ...ordersSpec, ...shipmentsSpec })

  const vanillaCustomer = {
    id: 11111,
    name: 'Vanillin Lignin',
    country: 'Madagascar'
  }

  const stateOne = merge(initialState, {
    customer: vanillaCustomer,
    requests: { customer: { status: 'pending' } }
  })

  t.deepEqual(
    switchReducer(stateOne, { type: 'reset_customer' }),
    initialState,
    'traditional reducer (with a switch statement'
  )

  t.deepEqual(
    reducer(stateOne, { type: 'reset_customer' }),
    initialState,
    'reducer written as an object'
  )
  t.end()
})
