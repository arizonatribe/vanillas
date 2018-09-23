const tape = require('tape')
const merge = require('../lib/merge')

tape('"merge" can blend two Object together', t => {
  const hook = {
    Hoffman: {
      Dustin: 'Captain',
      John: 'I dunno'
    },
    Williams: 'robin',
    Roberts: 'julia',
    Hoskins: 'bob'
  }
  const sphere = {
    Hoffman: {
      Albert: 'LSD',
      Dustin: 'Psychiatrist'
    },
    Jackson: 'samuel',
    Stone: 'sharon',
    Latifah: 'queen'
  }
  t.deepEqual(
    merge(hook, sphere), {
      Hoffman: {
        John: 'I dunno',
        Albert: 'LSD',
        Dustin: 'Psychiatrist'
      },
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
      Hoffman: {
        Dustin: 'Captain',
        John: 'I dunno'
      },
      Williams: 'robin',
      Roberts: 'julia',
      Hoskins: 'bob'
    },
    'merge does not mutate the first object'
  )
  t.end()
})
