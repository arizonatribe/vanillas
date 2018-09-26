import isNil from './isNil'
import toTitleCase from './toTitleCase'
import getConstructorName from './_internal/getConstructorName'

function getType(val) {
  if (isNil(val)) {
    return `${val}`
  }
  return getConstructorName(val) || toTitleCase(typeof val)
}

export default getType
