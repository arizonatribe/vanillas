const any = require('./any')
const append = require('./append')
const assign = require('./assign')
const clone = require('./clone')
const compose = require('./compose')
const concat = require('./concat')
const converge = require('./converge')
const convergeZip = require('./convergeZip')
const curry = require('./curry')
const each = require('./each')
const entries = require('./entries')
const find = require('./find')
const findIndex = require('./findIndex')
const first = require('./first')
const forIn = require('./forIn')
const getType = require('./getType')
const has = require('./has')
const identity = require('./identity')
const isArrayish = require('./isArrayish')
const isBoolean = require('./isBoolean')
const isEmpty = require('./isEmpty')
const isEqual = require('./isEqual')
const isFunction = require('./isFunction')
const isInteger = require('./isInteger')
const isMap = require('./isMap')
const isNil = require('./isNil')
const isNull = require('./isNull')
const isNumber = require('./isNumber')
const isObject = require('./isObject')
const isObjectish = require('./isObjectish')
const isPrimitive = require('./isPrimitive')
const isSameType = require('./isSameType')
const isSet = require('./isSet')
const isStrictEqual = require('./isStrictEqual')
const isString = require('./isString')
const isUndefined = require('./isUndefined')
const last = require('./last')
const map = require('./map')
const mapObject = require('./mapObject')
const mapString = require('./mapString')
const memoize = require('./memoize')
const merge = require('./merge')
const omit = require('./omit')
const pick = require('./pick')
const pipe = require('./pipe')
const prepend = require('./prepend')
const propAt = require('./propAt')
const propIs = require('./propIs')
const propOr = require('./propOr')
const reduce = require('./reduce')
const shim = require('./shim')
const size = require('./size')
const toCamelCase = require('./toCamelCase')
const toLowerCase = require('./toLowerCase')
const toTitleCase = require('./toTitleCase')
const toUpperCase = require('./toUpperCase')
const uniq = require('./uniq')
const unthunk = require('./unthunk')
const values = require('./values')

module.exports = {
  values,
  unthunk,
  uniq,
  toUpperCase,
  toTitleCase,
  toLowerCase,
  toCamelCase,
  size,
  shim,
  reduce,
  propOr,
  propIs,
  propAt,
  prepend,
  pipe,
  pick,
  omit,
  merge,
  memoize,
  mapString,
  mapObject,
  map,
  last,
  isUndefined,
  isString,
  isStrictEqual,
  isSet,
  isSameType,
  isPrimitive,
  isObjectish,
  isObject,
  isNumber,
  isNull,
  isNil,
  isMap,
  isInteger,
  isFunction,
  isEqual,
  isEmpty,
  isBoolean,
  isArrayish,
  identity,
  has,
  getType,
  forIn,
  first,
  findIndex,
  find,
  entries,
  each,
  curry,
  convergeZip,
  converge,
  concat,
  compose,
  clone,
  assign,
  append,
  any
}
