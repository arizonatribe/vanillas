import propAt from './propAt'
import getType from './getType'

function propIs(type, prop, obj) {
  const val = propAt(prop, obj)
  let typeName = getType(type)
  if (/function/i.test(typeName)) {
    typeName = type.name || typeName
  }
  return getType(val) === typeName
}

export default propIs
