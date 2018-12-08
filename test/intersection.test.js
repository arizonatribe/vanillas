import tape from 'tape'
import intersection from '../src/intersection'
import { intersection as intersectionCurried } from '../src/curried'

tape('"intersection" gets the values in common between two arrays', t => {
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
    intersection(hook, sphere),
    ['dustin']
  )
  t.deepEqual(
    intersection([1, 2, 3, 4, 5, 6, 7, 8, 9], [2, 4, 6, 8, 10, 12]),
    [2, 4, 6, 8],
    'numbers'
  )
  t.deepEqual(
    intersectionCurried(hook)(sphere),
    ['dustin'],
    'can be curried'
  )
  t.deepEqual(
    intersection([], sphere),
    [],
    'empty arrays behave as expected'
  )
  t.end()
})
