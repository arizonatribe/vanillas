import getConstructorName from './_internal/getConstructorName'

function isFunction(val) {
  return typeof val === 'function' || /^function/i.test(getConstructorName(val))
}

export default isFunction
