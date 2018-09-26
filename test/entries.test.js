import tape from 'tape'
import entries from '../src/entries'

tape('"entries" extracts key/value pairs from an object and returns them as an Array of key/value pairs', t => {
  const hook = {
    Hoffman: 'dustin',
    Williams: 'robin',
    Roberts: 'julia',
    Hoskins: 'bob'
  }
  t.deepEqual(
    entries(hook), [
      ['Hoffman', 'dustin'],
      ['Williams', 'robin'],
      ['Roberts', 'julia'],
      ['Hoskins', 'bob']
    ]
  )
  const movies = {
    hook: {
      Hoffman: 'dustin',
      Williams: 'robin',
      Roberts: 'julia',
      Hoskins: 'bob'
    },
    sphere: {
      Hoffman: 'dustin',
      Jackson: 'samuel',
      Stone: 'sharon',
      Latifah: 'queen'
    }
  }
  const pairs = entries(movies)
  pairs[1].Smith = 'maggie'

  t.deepEqual(
    movies, {
      hook: {
        Hoffman: 'dustin',
        Williams: 'robin',
        Roberts: 'julia',
        Hoskins: 'bob'
      },
      sphere: {
        Hoffman: 'dustin',
        Jackson: 'samuel',
        Stone: 'sharon',
        Latifah: 'queen'
      }
    },
    'mutating members of the new key/val array does not mutate the sub-objects on the original object'
  )
  t.end()
})
