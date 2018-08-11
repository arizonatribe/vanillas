const getConstructorName = require('../_internal/getConstructorName');
const { PRIMITIVES } = require('../_internal/constants')

const IS_PRIMITIVE = new RegExp(`^(${PRIMITIVES})$`, 'i')

function isPrimitive(val) {
  return IS_PRIMITIVE.test(getConstructorName(val))
}

module.exports = isPrimitive
