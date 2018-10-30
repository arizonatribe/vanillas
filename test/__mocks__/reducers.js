export const initialState = {
  orders: {},
  customer: {},
  shipments: {},
  requests: {
    orders: { status: 'initial' },
    customer: { status: 'initial' },
    shipments: { status: 'initial' }
  }
}

export const customerSpec = {
  reset_customer(state) {
    return {
      ...state,
      customer: {},
      requests: {
        ...state.requests,
        customer: { status: 'initial' }
      }
    }
  },
  customer_request(state) {
    return {
      ...state,
      customer: {},
      requests: {
        ...state.requests,
        customer: { status: 'pending' }
      }
    }
  },
  customer_success(state, { payload: customer}) {
    return {
      ...state,
      customer,
      requests: {
        ...state.requests,
        customer: { status: 'received' }
      }
    }
  },
  customer_error(state, { payload: error }) {
    return {
      ...state,
      customer: {},
      requests: {
        ...state.requests,
        customer: { status: 'error', error }
      }
    }
  }
}

export const ordersSpec = {
  reset_orders(state) {
    return {
      ...state,
      orders: {},
      requests: {
        ...state.requests,
        orders: { status: 'initial' }
      }
    }
  },
  orders_request(state) {
    return {
      ...state,
      orders: {},
      requests: {
        ...state.requests,
        orders: { status: 'pending' }
      }
    }
  },
  orders_success(state, { payload: orders}) {
    return {
      ...state,
      orders,
      requests: {
        ...state.requests,
        orders: { status: 'received' }
      }
    }
  },
  orders_error(state, { payload: error }) {
    return {
      ...state,
      orders: {},
      requests: {
        ...state.requests,
        orders: { status: 'error', error }
      }
    }
  }
}

export const shipmentsSpec = {
  reset_shipments(state) {
    return {
      ...state,
      shipments: {},
      requests: {
        ...state.requests,
        shipments: { status: 'initial' }
      }
    }
  },
  shipments_request(state) {
    return {
      ...state,
      shipments: {},
      requests: {
        ...state.requests,
        shipments: { status: 'pending' }
      }
    }
  },
  shipments_success(state, { payload: shipments}) {
    return {
      ...state,
      shipments,
      requests: {
        ...state.requests,
        shipments: { status: 'received' }
      }
    }
  },
  shipments_error(state, { payload: error }) {
    return {
      ...state,
      shipments: {},
      requests: {
        ...state.requests,
        shipments: { status: 'error', error }
      }
    }
  }
}

export function switchReducer(state, action) {
  const { type, payload } = action
  switch (type) {
  case 'customer_request':
    return {
      ...state,
      customer: {},
      requests: {
        ...state.requests,
        customer: { status: 'pending' }
      }
    }
  case 'customer_success':
    return {
      ...state,
      customer: payload,
      requests: {
        ...state.requests,
        customer: { status: 'received' }
      }
    }
  case 'customer_error':
    return {
      ...state,
      customer: {},
      requests: {
        ...state.requests,
        customer: { status: 'error', error: payload }
      }
    }
  case 'reset_orders':
    return {
      ...state,
      orders: {},
      requests: {
        ...state.requests,
        orders: { status: 'initial' }
      }
    }
  case 'orders_request':
    return {
      ...state,
      orders: {},
      requests: {
        ...state.requests,
        orders: { status: 'pending' }
      }
    }
  case 'orders_success':
    return {
      ...state,
      orders: payload,
      requests: {
        ...state.requests,
        orders: { status: 'received' }
      }
    }
  case 'orders_error':
    return {
      ...state,
      orders: {},
      requests: {
        ...state.requests,
        orders: { status: 'error', error: payload }
      }
    }
  case 'reset_shipments':
    return {
      ...state,
      shipments: {},
      requests: {
        ...state.requests,
        shipments: { status: 'initial' }
      }
    }
  case 'shipments_request':
    return {
      ...state,
      shipments: {},
      requests: {
        ...state.requests,
        shipments: { status: 'pending' }
      }
    }
  case 'shipments_success':
    return {
      ...state,
      shipments: payload,
      requests: {
        ...state.requests,
        shipments: { status: 'received' }
      }
    }
  case 'shipments_error':
    return {
      ...state,
      shipments: {},
      requests: {
        ...state.requests,
        shipments: { status: 'error', error: payload }
      }
    }
  case 'reset_customer':
    return {
      ...state,
      customer: {},
      requests: {
        ...state.requests,
        customer: { status: 'initial' }
      }
    }
  default:
    return state
  }
}
