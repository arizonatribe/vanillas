const isString = require('../isString')
const isInteger = require('../isInteger')

function makePropPath(prop) {
  return (
    Array.isArray(prop) ? prop : prop.split('.')
  ).filter(p => isString(p) || isInteger(p))
}

module.exports = makePropPath
