import tape from 'tape'
import concat from '../src/concat'

tape('"concat" can blend two Array-like objects together', t => {
  const hook = [
    'dustin',
    'robin',
    'julia',
    'bob'
  ]
  const sphere = [
    'dustin',
    'samuel',
    'sharon',
    'queen'
  ]
  t.deepEqual(
    concat(hook, sphere), [
      'dustin',
      'robin',
      'julia',
      'bob',
      'dustin',
      'samuel',
      'sharon',
      'queen'
    ],
    'concatenates two array-like objects'
  )
  t.deepEqual(
    hook, [
      'dustin',
      'robin',
      'julia',
      'bob'
    ],
    'concat does not mutate the first array'
  )
  t.end()
})
