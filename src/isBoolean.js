import getConstructorName from './_internal/getConstructorName'

function isBoolean(val) {
  return typeof val === 'boolean' || getConstructorName(val) === 'Boolean'
}

export default isBoolean
