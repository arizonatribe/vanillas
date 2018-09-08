const merge = require('./merge')
const isString = require('./isString')
const isNumber = require('./isNumber')

function prepend(firstVal, secondVal) {
  if ([firstVal, secondVal].every(val => isString(val) || isNumber(val))) {
    return `${secondVal}${firstVal}`
  }
  return merge(secondVal, firstVal)
}

module.exports = prepend
