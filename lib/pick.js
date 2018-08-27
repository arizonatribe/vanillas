const curry = require('./curry');

function pick(keys, obj) {
  return keys.reduce((newObj, key) => ({ ...newObj, [key]: obj[key] }), {})
}

module.exports = curry(pick)
