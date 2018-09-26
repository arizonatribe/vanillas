import getConstructorName from './_internal/getConstructorName'

function isPrimitive(val) {
  switch (getConstructorName(val)) {
  case 'Boolean':
  case 'Number':
  case 'String':
  case 'Symbol':
    return true
  default:
    return false
  }
}

export default isPrimitive
