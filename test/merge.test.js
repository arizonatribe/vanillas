const tape = require('tape')
const merge = require('../lib/merge')
const { merge: mergeCurried } = require('../lib/curried')

tape('"merge" can apply a function to an Object, String, or something that is Array-like', t => {
  const hook = {
    Hoffman: 'dustin',
    Williams: 'robin',
    Roberts: 'julia',
    Hoskins: 'bob'
  }
  const sphere = {
    Hoffman: 'dustin',
    Jackson: 'samuel',
    Stone: 'sharon',
    Latifah: 'queen'
  }
  t.deepEqual(
    merge(hook, sphere), {
      Hoffman: 'dustin',
      Williams: 'robin',
      Roberts: 'julia',
      Hoskins: 'bob',
      Jackson: 'samuel',
      Stone: 'sharon',
      Latifah: 'queen'
    },
    'merge two objects together'
  )
  t.deepEqual(
    hook, {
      Hoffman: 'dustin',
      Williams: 'robin',
      Roberts: 'julia',
      Hoskins: 'bob'
    },
    'merge does not mutate the first object'
  )
  t.end()
})
