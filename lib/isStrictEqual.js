const curry = require('./curry')

function isStrictEqual(firstVal, secondVal) {
  return firstVal === secondVal
}

module.exports = curry(isStrictEqual)
