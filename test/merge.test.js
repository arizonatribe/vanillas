import tape from 'tape'
import merge from '../src/merge'

tape('"merge" can blend two or more Objects together', t => {
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
  const jurrassicPark = {
    Neill: 'sam',
    Jackson: 'samuel',
    Knight: 'wayne',
    Goldblum: 'jeff'
  }
  t.deepEqual(
    merge(hook, sphere, jurrassicPark), {
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
      Latifah: 'queen',
      Neill: 'sam',
      Knight: 'wayne',
      Goldblum: 'jeff'
    },
    'merge can blend three (or more) objects'
  )
  t.deepEqual(
    merge({}, {
      NODE_ENV: 'development',
      SOME_API: 'http://localhost',
      SOME_POORLY_NAMED_VAR: 0
    }), {
      NODE_ENV: 'development',
      SOME_API: 'http://localhost',
      SOME_POORLY_NAMED_VAR: 0
    }
  )
  t.end()
})
