const curry = require('../curry');

function mapObject(fn, obj) {
  return Object.keys(obj).reduce((acc, key) => ({ ...acc, [key]: fn(obj[key]) }), {})
}

module.exports = curry(mapObject)
