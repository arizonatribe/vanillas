import {
  switchReducer,
  customerSpec,
  shipmentsSpec,
  ordersSpec
} from '../../test/__mocks__/reducers'

function createReducer(spec) {
  return function inner(state, action) {
    return (spec[action.type] || (s => s))(state, action)
  }
}
const reducer = createReducer({ ...customerSpec, ...ordersSpec, ...shipmentsSpec })

const state = {
  customer: {
    id: 11111,
    name: 'Vanillin Lignin',
    country: 'Madagascar'
  },
  orders: {},
  shipments: {},
  requests: { customer: { status: 'pending' } }
}

const tests = [
  ['Traditional Reducer (switch statement)', () => switchReducer(state, { type: 'reset_customer' })],
  ['Object Literal Reducer', () => reducer(state, { type: 'reset_customer' })]
]

export default { tests }
