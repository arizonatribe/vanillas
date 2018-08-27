const curry = require('./curry')
const merge = require('./merge')
const isString = require('./isString')
const isNumber = require('./isNumber')

function append(firstVal, secondVal) {
  if ([firstVal, secondVal].every(val => isString(val) || isNumber(val))) {
    return `${firstVal}${secondVal}`
  }
  return merge(firstVal, secondVal)
}

module.exports = curry(append)
