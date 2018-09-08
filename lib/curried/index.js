const curry = require('../curry')
const append = require('../append')
const has = require('../has')
const isEqual = require('../isEqual')
const isSameType = require('../isSameType')
const isStrictEqual = require('../isStrictEqual')
const map = require('../map')
const mapObject = require('../mapObject')
const mapString = require('../mapString')
const omit = require('../omit')
const pick = require('../pick')
const prepend = require('../prepend')
const propAt = require('../propAt')
const propIs = require('../propIs')
const propOr = require('../propOr')
const merge = require('../merge')

module.exports = {
  append: curry(append),
  has: curry(has),
  isEqual: curry(isEqual),
  isSameType: curry(isSameType),
  isStrictEqual: curry(isStrictEqual),
  map: curry(map),
  mapObject: curry(mapObject),
  mapString: curry(mapString),
  omit: curry(omit),
  pick: curry(pick),
  prepend: curry(prepend),
  propAt: curry(propAt),
  propIs: curry(propIs),
  propOr: curry(propOr),
  merge: curry(merge)
}
