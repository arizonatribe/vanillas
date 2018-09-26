import getConstructorName from './_internal/getConstructorName'

function isSet(val) {
  return getConstructorName(val) === 'Set' || getConstructorName(val) === 'WeakSet'
}

export default isSet
