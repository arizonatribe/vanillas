const curry = require('../curry')
const makePropPath = require('../_internal/makePropPath')

function propAt(prop, obj) {
  try {
    return makePropPath(prop).reduce(
      (nestedObject, nestedProp) => nestedObject[nestedProp],
      obj || {}
    )
  } catch (err) {
    // Prop wasn't found; returning undefined
  }
}


module.exports = curry(propAt)
