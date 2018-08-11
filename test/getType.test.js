const tape = require('tape');
const getType = require('../lib/getType');

tape('"getType" can handle native and non-native type lookup', t => {
  t.equal(getType(null), 'null');
  t.equal(getType(undefined), 'undefined');
  t.equal(getType(false), 'Boolean');
  t.equal(getType(Symbol('Ƭ̵̬̊')), 'Symbol');
  t.equal(getType(0), 'Number');
  t.equal(getType(' '), 'String');
  t.equal(getType(new Int8Array()), 'Int8Array');
  t.equal(getType(new Uint8Array()), 'Uint8Array');
  t.equal(getType(new Uint8ClampedArray()), 'Uint8ClampedArray');
  t.equal(getType(new Int16Array()), 'Int16Array');
  t.equal(getType(new Uint16Array()), 'Uint16Array');
  t.equal(getType(new Int32Array()), 'Int32Array');
  t.equal(getType(new Float32Array()), 'Float32Array');
  t.equal(getType(new Float64Array()), 'Float64Array');
  t.equal(getType(new Set()), 'Set');
  t.equal(getType(new WeakSet()), 'WeakSet');
  t.equal(getType(Object.create(null)), 'Object');
  t.equal(getType({}), 'Object');
  t.equal(getType(new Map()), 'Map');
  t.equal(getType(new WeakMap()), 'WeakMap');
  t.end();
});

