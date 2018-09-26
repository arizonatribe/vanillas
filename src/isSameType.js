import getType from './getType'

function isSameType(val1, val2) {
  return getType(val1) === getType(val2)
}

export default isSameType
