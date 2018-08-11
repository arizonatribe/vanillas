const tape = require('tape');
const { isArrayish, isEmpty, isObject, isObjectish } = require('../lib/is');

tape('"isObjectish" can inspect any array-like object in JavaScript', t => {
  t.equal(isObjectish(null), false, 'Null is not objectish');
  t.equal(isObjectish(undefined), false, 'Undefined is not objectish');
  t.equal(isObjectish(false), false, 'Booleans are not objectish');
  t.equal(isObjectish(Symbol('Ƭ̵̬̊')), false, 'Symbols are not objectish');
  t.equal(isObjectish(0), false, 'Numbers are not objectish');
  t.equal(isObjectish(' '), false, 'Strings are not objectish');
  t.equal(isObjectish(new Int8Array()), false, 'Int8Arrays are not objectish');
  t.equal(isObjectish(new Uint8Array()), false, 'Uint8Arrays are not objectish');
  t.equal(isObjectish(new Uint8ClampedArray()), false, 'Uint8clampedArrays are not objectish');
  t.equal(isObjectish(new Int16Array()), false, 'Int16Arrays are not objectish');
  t.equal(isObjectish(new Uint16Array()), false, 'Uint16Arrays are not objectish');
  t.equal(isObjectish(new Int32Array()), false, 'Int32Arrays are not objectish');
  t.equal(isObjectish(new Float32Array()), false, 'Float32Arrays are not objectish');
  t.equal(isObjectish(new Float64Array()), false, 'Float64Arrays are not objectish');
  t.equal(isObjectish(new Set()), false, 'Sets are not objectish');
  t.equal(isObjectish(new WeakSet()), false, 'WeakSets are not objectish');

  t.equal(isObjectish(Object.create(null)), true, 'old-school hashmaps are objectish');
  t.equal(isObjectish({}), true, 'Objects hashmaps are objectish');
  t.equal(isObjectish(new Map()), true, 'Maps are objectish');
  t.equal(isObjectish(new WeakMap()), true, 'WeakMaps are objectish');
  t.end();
});

tape('"isArrayish" can inspect any array-like object in JavaScript', t => {
  t.equal(isArrayish(null), false, 'Null is not an object');
  t.equal(isArrayish(undefined), false, 'Undefined is not arrayish');
  t.equal(isArrayish(false), false, 'Booleans are not arrayish');
  t.equal(isArrayish(Symbol('Ƭ̵̬̊')), false, 'Symbols are not arrayish');
  t.equal(isArrayish(0), false, 'Numbers are not arrayish');
  t.equal(isArrayish(' '), false, 'Strings are not arrayish');
  t.equal(isArrayish({}), false, 'Objects are not arrayish');
  t.equal(isArrayish(Object.create(null)), false, 'old-school hashmaps are not arrayish');
  t.equal(isArrayish(new Map()), false, 'Maps are not arrayish');
  t.equal(isArrayish(new WeakMap()), false, 'WeakMaps are not arrayish');
  t.equal(isArrayish(new Int8Array()), true, 'Int8Arrays are arrayish');
  t.equal(isArrayish(new Uint8Array()), true, 'Uint8Arrays are arrayish');
  t.equal(isArrayish(new Uint8ClampedArray()), true, 'Uint8clampedArrays are arrayish');
  t.equal(isArrayish(new Int16Array()), true, 'Int16Arrays are arrayish');
  t.equal(isArrayish(new Uint16Array()), true, 'Uint16Arrays are arrayish');
  t.equal(isArrayish(new Int32Array()), true, 'Int32Arrays are arrayish');
  t.equal(isArrayish(new Float32Array()), true, 'Float32Arrays are arrayish');
  t.equal(isArrayish(new Float64Array()), true, 'Float64Arrays are arrayish');
  t.equal(isArrayish(new Set()), true, 'Sets are arrayish');
  t.equal(isArrayish(new WeakSet()), true, 'WeakSets are arrayish');
  t.end();
});

tape('"isObject" can properly identify a wide range of types as Object or not', t => {
  t.equal(isObject(null), false, 'Null is not an object');
  t.equal(isObject(undefined), false, 'Undefined is not an object');
  t.equal(isObject(false), false, 'Booleans are not objects');
  t.equal(isObject(Symbol('Ƭ̵̬̊')), false, 'Symbols are not objects');
  t.equal(isObject(new Boolean('true')), false, 'not even ugly Booleans are objects');
  t.equal(isObject(0), false, 'Numbers are not objects');
  t.equal(isObject(new Number('1')), false, 'not even ugly Numbers are objects');
  t.equal(isObject(' '), false, 'Strings are not objects');
  t.equal(isObject(new String('stringie')), false, 'not even ugly Strings are objects');
  t.equal(isObject(new Date()), false, 'Dates are not objects');
  t.equal(isObject(new RegExp()), false, 'RegExps are not objects');
  t.equal(isObject([1, 2, 3]), false, 'Arrays are not objects');
  t.equal(isObject(new Int8Array()), false, 'Int8Arrays are not objects');
  t.equal(isObject(new Uint8Array()), false, 'Uint8Arrays are not objects');
  t.equal(isObject(new Uint8ClampedArray()), false, 'Uint8clampedArrays are not objects');
  t.equal(isObject(new Int16Array()), false, 'Int16Arrays are not objects');
  t.equal(isObject(new Uint16Array()), false, 'Uint16Arrays are not objects');
  t.equal(isObject(new Int32Array()), false, 'Int32Arrays are not objects');
  t.equal(isObject(new Float32Array()), false, 'Float32Arrays are not objects');
  t.equal(isObject(new Float64Array()), false, 'Float64Arrays are not objects');
  t.equal(isObject(new Map()), false, 'Maps are not objects');
  t.equal(isObject(new WeakMap()), false, 'WeakMaps are not objects');
  t.equal(isObject(new Set()), false, 'Sets are not objects');
  t.equal(isObject(new WeakSet()), false, 'WeakSets are not objects');
  t.equal(isObject(new Error()), false, 'Errors are not objects');

  class Classy {
    constructor() {
      this.name = 'helper';
    }
  }

  t.equal(isObject({}), true, 'empty curlies is an object');
  t.equal(isObject({help: 'helpity'}), true, 'this is usually what you\'re checking for');
  t.equal(isObject(Object.create(null)), true, 'old-school maps are objects');
  t.equal(isObject(new Classy()), true, 'an object with a custom constructor name is an object');

  t.end();
});

tape('"isEmpty" checks a value to see if it is empty (null, undefined, or empty Array or Object)', t => {
  t.equal(isEmpty(), true, 'undefined is considered empty');
  t.equal(isEmpty(null), true, 'null is considered empty');
  t.equal(isEmpty(''), true, 'empty strings are considered empty');
  t.equal(isEmpty('  '), true, 'strings with only whitespace are considered empty');
  t.equal(isEmpty(), true, 'undefined is considered empty');
  t.equal(isEmpty({}), true, 'empty objects');
  t.equal(isEmpty([]), true, 'empty arrays');
  t.equal(isEmpty({lorem: 'ipsum'}), false, 'catches non-empty objects');
  t.equal(isEmpty(['lorem', 'ipsum']), false, 'catches non-empty arrays');
  t.equal(isEmpty(' lorem '), false, 'catches non-empty strings');
  t.equal(isEmpty(0), false, 'numbers are never considered empty');
  t.equal(isEmpty(new Int8Array()), true, 'Int8Arrays can be checked');
  t.equal(isEmpty(new Uint8Array()), true, 'Uint8Arrays can be checked');
  t.equal(isEmpty(new Uint8ClampedArray()), true, 'Uint8clampedArrays can be checked');
  t.equal(isEmpty(new Int16Array()), true, 'Int16Arrays can be checked');
  t.equal(isEmpty(new Uint16Array()), true, 'Uint16Arrays can be checked');
  t.equal(isEmpty(new Int32Array()), true, 'Int32Arrays can be checked');
  t.equal(isEmpty(new Float32Array()), true, 'Float32Arrays can be checked');
  t.equal(isEmpty(new Float64Array()), true, 'Float64Arrays can be checked');
  t.equal(isEmpty(new Map()), true, 'Maps can be checked');
  t.equal(isEmpty(new Set()), true, 'Sets can be checked');
  t.equal(isEmpty(new WeakSet()), true, 'WeakSets can be checked');
  t.end();
});
