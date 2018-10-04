import getConstructorName from './_internal/getConstructorName'
import getType from './getType'

function is(ofType, val) {
  return (typeof ofType === 'string' && getType(val).toLowerCase() === ofType.toLowerCase()) ||
    (!ofType.name && getType(ofType) === getType(val)) ||
    (ofType.name && getConstructorName(ofType) === 'Function' && getType(val) === ofType.name)
}

export default is
