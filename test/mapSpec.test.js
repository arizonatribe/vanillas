import tape from 'tape'
import mapSpec from '../src/mapSpec'
import toTitleCase from '../src/toTitleCase'
import { sphere } from './__mocks__'

tape('"mapSpec" will run any function it finds', t => {
  const transforms = {
    Hoffman: toTitleCase,
    Jackson: toTitleCase,
    Stone: toTitleCase,
    Schreiber: 'Liev',
    Latifah: alias => `Dana (aka "${toTitleCase(alias)}")`
  }
  t.deepEqual(
    mapSpec(transforms, sphere), {
      Hoffman: 'Dustin',
      Jackson: 'Samuel',
      Stone: 'Sharon',
      Schreiber: 'Liev',
      Latifah: 'Dana (aka "Queen")'
    },
    'maps function transforms over props'
  )
  t.deepEqual(
    sphere, {
      Hoffman: 'dustin',
      Jackson: 'samuel',
      Stone: 'sharon',
      Latifah: 'queen'
    },
    'does not mutate original object'
  )
  t.deepEqual(
    mapSpec(toTitleCase, sphere), {
      Hoffman: 'Dustin',
      Jackson: 'Samuel',
      Stone: 'Sharon',
      Latifah: 'Queen'
    },
    'will run mapObject() under-the-hood if the spec itself is a function'
  )
  t.end()
})
