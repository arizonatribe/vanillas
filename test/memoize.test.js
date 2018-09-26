import tape from 'tape'
import memoize from '../src/memoize'

tape('"memoize" can apply a function to an Object, String, or something that is Array-like', t => {
  let numOfCalls = 0

  /* function to memoize (with a side-effect that helps us to unit test it) */
  function addWithLogging(a, b) {
    numOfCalls++
    return a + b
  }

  /* Now an inner cache has been created and each time "memoizedAdd()" is
   * invoked, the cache will be used when the function is invoked with the same
   * args that was called with previously, otherwise will re-invoke
   * "addWithLogging" and cache and then return the result */
  const memoizedAdd = memoize(addWithLogging)

  t.equal(memoizedAdd(2, 3), 5, 'the memoized function is being called when the cache is empty')
  t.equal(numOfCalls, 1, 'confirm that "addWithLogging" was called')
  t.equal(memoizedAdd(2, 3), 5, 'the cached value is being returned')
  t.equal(numOfCalls, 1, 'config that "addWithLogging" was NOT called again')
  t.equal(memoizedAdd(2, 2), 4, 'the non-cached new value is being returned')
  t.equal(numOfCalls, 2, 'confirm the non-memoized args trigger "addWithLogging" to be called again')
  t.equal(memoizedAdd(2, 2), 4, 'the cached value is being returned')
  t.equal(numOfCalls, 2, 'config that "addWithLogging" was NOT called again')
  t.deepEqual()
  t.end()
})
