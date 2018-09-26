import getConstructorName from './_internal/getConstructorName'

function isMap(val) {
  return getConstructorName(val) === 'Map' || getConstructorName(val) === 'WeakMap'
}

export default isMap
