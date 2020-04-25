import tape from 'tape'
import isArrayish from '../src/isArrayish'
import is from '../src/is'
import isEmpty from '../src/isEmpty'
import isPromise from '../src/isPromise'
import isEqual from '../src/isEqual'
import isObject from '../src/isObject'
import isObjectish from '../src/isObjectish'
import { pantheon, solarSystem } from './__mocks__'


tape('"is" checks a value is of a certain type', t => {
  t.equal(is(Function, () => 42), true, 'functions')
  t.equal(is(String, 'lorem ipsum'), true, 'strings')
  t.equal(is(Boolean, false), true, 'booleans')
  t.equal(is(Date, new Date()), true, 'dates')
  t.equal(is(RegExp, new RegExp()), true, 'regexes')
  t.equal(is('function', () => 42), true, 'functions')
  t.equal(is('Function', () => 42), true, 'functions (case-insensitive)')
  t.equal(is('string', 'lorem ipsum'), true, 'strings')
  t.equal(is('String', 'lorem ipsum'), true, 'strings (case-insensitive)')
  t.equal(is('boolean', false), true, 'booleans')
  t.equal(is('Boolean', false), true, 'booleans (case-insensitive)')
  t.equal(is('date', new Date()), true, 'dates')
  t.equal(is('Date', new Date()), true, 'dates (case-insensitive)')
  t.equal(is('regexp', new RegExp()), true, 'regexes')
  t.equal(is('RegExp', new RegExp()), true, 'regexes (case-insensitive)')
  t.end()
})

tape('"isObjectish" can inspect any array-like object in JavaScript', t => {
  t.equal(isObjectish(null), false, 'Null is not objectish')
  t.equal(isObjectish(undefined), false, 'Undefined is not objectish')
  t.equal(isObjectish(false), false, 'Booleans are not objectish')
  t.equal(isObjectish(Symbol('Ƭ̵̬̊')), false, 'Symbols are not objectish')
  t.equal(isObjectish(0), false, 'Numbers are not objectish')
  t.equal(isObjectish(' '), false, 'Strings are not objectish')
  t.equal(isObjectish(new Int8Array()), false, 'Int8Arrays are not objectish')
  t.equal(isObjectish(new Uint8Array()), false, 'Uint8Arrays are not objectish')
  t.equal(isObjectish(new Uint8ClampedArray()), false, 'Uint8clampedArrays are not objectish')
  t.equal(isObjectish(new Int16Array()), false, 'Int16Arrays are not objectish')
  t.equal(isObjectish(new Uint16Array()), false, 'Uint16Arrays are not objectish')
  t.equal(isObjectish(new Int32Array()), false, 'Int32Arrays are not objectish')
  t.equal(isObjectish(new Float32Array()), false, 'Float32Arrays are not objectish')
  t.equal(isObjectish(new Float64Array()), false, 'Float64Arrays are not objectish')
  t.equal(isObjectish(new Set()), false, 'Sets are not objectish')
  t.equal(isObjectish(new WeakSet()), false, 'WeakSets are not objectish')

  t.equal(isObjectish(Object.create(null)), true, 'old-school hashmaps are objectish')
  t.equal(isObjectish({}), true, 'Objects hashmaps are objectish')
  t.equal(isObjectish(new Map()), true, 'Maps are objectish')
  t.equal(isObjectish(new WeakMap()), true, 'WeakMaps are objectish')
  t.end()
})

tape('"isArrayish" can inspect any array-like object in JavaScript', t => {
  t.equal(isArrayish(null), false, 'Null is not an object')
  t.equal(isArrayish(undefined), false, 'Undefined is not arrayish')
  t.equal(isArrayish(false), false, 'Booleans are not arrayish')
  t.equal(isArrayish(Symbol('Ƭ̵̬̊')), false, 'Symbols are not arrayish')
  t.equal(isArrayish(0), false, 'Numbers are not arrayish')
  t.equal(isArrayish(' '), false, 'Strings are not arrayish')
  t.equal(isArrayish({}), false, 'Objects are not arrayish')
  t.equal(isArrayish(Object.create(null)), false, 'old-school hashmaps are not arrayish')
  t.equal(isArrayish(new Map()), false, 'Maps are not arrayish')
  t.equal(isArrayish(new WeakMap()), false, 'WeakMaps are not arrayish')
  t.equal(isArrayish(new Int8Array()), true, 'Int8Arrays are arrayish')
  t.equal(isArrayish(new Uint8Array()), true, 'Uint8Arrays are arrayish')
  t.equal(isArrayish(new Uint8ClampedArray()), true, 'Uint8clampedArrays are arrayish')
  t.equal(isArrayish(new Int16Array()), true, 'Int16Arrays are arrayish')
  t.equal(isArrayish(new Uint16Array()), true, 'Uint16Arrays are arrayish')
  t.equal(isArrayish(new Int32Array()), true, 'Int32Arrays are arrayish')
  t.equal(isArrayish(new Float32Array()), true, 'Float32Arrays are arrayish')
  t.equal(isArrayish(new Float64Array()), true, 'Float64Arrays are arrayish')
  t.equal(isArrayish(new Set()), true, 'Sets are arrayish')
  t.equal(isArrayish(new WeakSet()), true, 'WeakSets are arrayish')
  t.end()
})

tape('"isObject" can properly identify a wide range of types as Object or not', t => {
  t.equal(isObject(null), false, 'Null is not an object')
  t.equal(isObject(undefined), false, 'Undefined is not an object')
  t.equal(isObject(false), false, 'Booleans are not objects')
  t.equal(isObject(Symbol('Ƭ̵̬̊')), false, 'Symbols are not objects')
  t.equal(isObject(Boolean('true')), false, 'not even ugly Booleans are objects')
  t.equal(isObject(0), false, 'Numbers are not objects')
  t.equal(isObject(Number('1')), false, 'not even ugly Numbers are objects')
  t.equal(isObject(' '), false, 'Strings are not objects')
  t.equal(isObject(String('stringie')), false, 'not even ugly Strings are objects')
  t.equal(isObject(new Date()), false, 'Dates are not objects')
  t.equal(isObject(new RegExp()), false, 'RegExps are not objects')
  t.equal(isObject([1, 2, 3]), false, 'Arrays are not objects')
  t.equal(isObject(new Int8Array()), false, 'Int8Arrays are not objects')
  t.equal(isObject(new Uint8Array()), false, 'Uint8Arrays are not objects')
  t.equal(isObject(new Uint8ClampedArray()), false, 'Uint8clampedArrays are not objects')
  t.equal(isObject(new Int16Array()), false, 'Int16Arrays are not objects')
  t.equal(isObject(new Uint16Array()), false, 'Uint16Arrays are not objects')
  t.equal(isObject(new Int32Array()), false, 'Int32Arrays are not objects')
  t.equal(isObject(new Float32Array()), false, 'Float32Arrays are not objects')
  t.equal(isObject(new Float64Array()), false, 'Float64Arrays are not objects')
  t.equal(isObject(new Map()), false, 'Maps are not objects')
  t.equal(isObject(new WeakMap()), false, 'WeakMaps are not objects')
  t.equal(isObject(new Set()), false, 'Sets are not objects')
  t.equal(isObject(new WeakSet()), false, 'WeakSets are not objects')
  t.equal(isObject(new Error()), false, 'Errors are not objects')

  class Classy {
    constructor() {
      this.name = 'helper'
    }
  }

  t.equal(isObject({}), true, 'empty curlies is an object')
  t.equal(isObject({help: 'helpity'}), true, 'this is usually what you\'re checking for')
  t.equal(isObject(Object.create(null)), true, 'old-school maps are objects')
  t.equal(isObject(new Classy()), true, 'an object with a custom constructor name is an object')

  t.end()
})

tape('"isEmpty" checks a value to see if it is empty (null, undefined, or empty Array or Object)', t => {
  t.equal(isEmpty(), true, 'undefined is considered empty')
  t.equal(isEmpty(null), true, 'null is considered empty')
  t.equal(isEmpty(''), true, 'empty strings are considered empty')
  t.equal(isEmpty('  '), false, 'strings with only whitespace are NOT considered empty (following behavior with Lodash and Ramda)')
  t.equal(isEmpty(), true, 'undefined is considered empty')
  t.equal(isEmpty({}), true, 'empty objects')
  t.equal(isEmpty([]), true, 'empty arrays')
  t.equal(isEmpty({lorem: 'ipsum'}), false, 'catches non-empty objects')
  t.equal(isEmpty(['lorem', 'ipsum']), false, 'catches non-empty arrays')
  t.equal(isEmpty(' lorem '), false, 'catches non-empty strings')
  t.equal(isEmpty(0), false, 'numbers are never considered empty')
  t.equal(isEmpty(new Int8Array()), true, 'Int8Arrays can be checked')
  t.equal(isEmpty(new Uint8Array()), true, 'Uint8Arrays can be checked')
  t.equal(isEmpty(new Uint8ClampedArray()), true, 'Uint8clampedArrays can be checked')
  t.equal(isEmpty(new Int16Array()), true, 'Int16Arrays can be checked')
  t.equal(isEmpty(new Uint16Array()), true, 'Uint16Arrays can be checked')
  t.equal(isEmpty(new Int32Array()), true, 'Int32Arrays can be checked')
  t.equal(isEmpty(new Float32Array()), true, 'Float32Arrays can be checked')
  t.equal(isEmpty(new Float64Array()), true, 'Float64Arrays can be checked')
  t.equal(isEmpty(new Map()), true, 'Maps can be checked')
  t.equal(isEmpty(new Set()), true, 'Sets can be checked')
  t.end()
})

tape('"isPromise" checks a value to see if it is a promise (a deferred object/function with a .then method)', t => {
  t.equal(isPromise(), false, 'undefined is not a promise')
  t.equal(isPromise(null), false, 'null is not a promise')
  t.equal(isPromise(''), false, 'empty strings are not a promise')
  t.equal(isPromise(0), false, 'numbers are not a promise')
  t.equal(isPromise({}), false, 'empty objects are not promises')
  t.equal(isPromise([]), false, 'empty arrays are not a promise')
  t.equal(isPromise({finally() { }, catch() { }}), false, 'object with some of the methods expected on tha promise (but not the important one)')
  t.equal(isPromise({ then() { return true } }), true, 'an object with a .then method is enough')
  t.equal(isPromise({ then: 'return true' }), false, 'an object with a .then prop (which is not a method) is not a promise')
  const promise = new Promise(resolve => { resolve() })
  t.equal(isPromise(promise), true, 'a promise is a promise')
  t.end()
})

tape('"isEqual" performs deep equality testing of two values', t => {
  t.equal(isEqual(true, true), true)
  t.equal(isEqual(true, false), false)
  t.equal(isEqual(null, null), true)
  t.equal(isEqual(null, undefined), false, 'null and undefined are not the same')
  t.equal(isEqual(1, 1), true, 'two numeric values that are equal')
  t.equal(isEqual(1, 2), false, 'two numeric values that are not equal')
  t.equal(isEqual(1.01, 1), false, 'two numeric values that are not quite equal')
  t.equal(isEqual('abc', 'abc'), true, 'two string values that are equal')
  t.equal(isEqual('abc', 'xyz'), false, 'two string values that are not equal')
  t.equal(isEqual('abc', 'abcdefghijklmnop'), false, 'two string values that start out equal')
  t.equal(isEqual(' abc ', 'abc'), false, 'two string values that are equal except for whitespace')
  t.equal(isEqual([], []), true, 'two arrays are both empty')
  t.equal(isEqual(['lorem', 'ipsum'], ['lorem', 'ipsum']), true, 'two arrays that are equal')
  t.equal(isEqual(['lorem', 'ipsum'], ['dolor', 'sit']), false, 'two arrays that are not equal')
  t.equal(isEqual([], [1, 2, 3]), false, 'both values are inspected')
  t.equal(isEqual({}, {}), true, 'two objects are both empty')
  t.equal(isEqual({lorem: 'ipsum'}, {lorem: 'ipsum'}), true, 'two objects that are equal')
  t.equal(isEqual({lorem: 'ipsum'}, {dolor: 'sit'}), false, 'two objects that are not equal')
  t.equal(isEqual(pantheon, solarSystem), true, 'nested objects with re-arranged props')

  const cFamilyOfLanguages = {
    c: {
      year: 1972,
      descendants: {
        'c++': {year: 1985},
        java: {year: 1995},
        'c#': {year: 2000},
        golang: {year: 2009}
      }
    }
  }
  const lispFamilyOfLanguages = {
    lisp: {
      year: 1958,
      descendants: {
        scheme: {year: 1970},
        javascript: {year: 1995},
        clojure: {year: 2007}
      }
    }
  }

  t.equal(
    isEqual(
      cFamilyOfLanguages, {
        c: {...cFamilyOfLanguages.c, descendants: { ...cFamilyOfLanguages.c.descendants}}
      }
    ),
    true,
    'two objects (one cloned from the other) that are deeply nested and equal'
  )
  t.equal(
    isEqual(cFamilyOfLanguages, lispFamilyOfLanguages),
    false,
    'C and Lisp families of languages are not the same, even their names appear so'
  )
  t.equal(
    isEqual(
      cFamilyOfLanguages, {
        c: {descendants: { ...cFamilyOfLanguages.c.descendants}}
      }
    ),
    false,
    'two objects (one cloned from the other) that are almost equal'
  )
  t.equal(
    isEqual(
      ['lorem', 789, cFamilyOfLanguages],
      ['lorem', 789, cFamilyOfLanguages]
    ),
    true,
    'two arrays with nested objects that are equal'
  )
  t.equal(
    isEqual(
      ['lorem', 789, cFamilyOfLanguages],
      ['lorem', 789, lispFamilyOfLanguages]
    ),
    false,
    'two arrays with nested objects that are not equal'
  )
  t.end()
})
