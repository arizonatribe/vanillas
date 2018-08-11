const isString = require('../is/isString')
const isInteger = require('../is/isInteger')

function makePropPath(prop) {
  return (
    Array.isArray(prop) ? prop : prop.split('.')
  ).filter(p => isString(p) || isInteger(p))
}

module.exports = makePropPath
