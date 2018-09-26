import getConstructorName from './_internal/getConstructorName'

function isString(val) {
  return typeof val === 'string' || getConstructorName(val) === 'String'
}

export default isString
