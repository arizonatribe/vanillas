import getConstructorName from './_internal/getConstructorName'

function isNumber(val) {
  return typeof val === 'number' || getConstructorName(val) === 'Number'
}

export default isNumber
