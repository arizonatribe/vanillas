const curry = require('./curry')
const propAt = require('./propAt')
const isNull = require('./isNull')
const getType = require('./getType')

function propIs(type, prop, obj) {
  const val = propAt(prop, obj)
  let typeName = getType(type)
  if (/function/i.test(typeName)) {
    typeName = type.name || typeName
  }
  return getType(val) === typeName
}

module.exports = curry(propIs)
