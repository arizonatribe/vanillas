/**
 * Gathers an Array of Promises (or of Functions that return Promises) and
 * executes them in sequential order they appear in the Array.
 * The value from the last will be supplied to the next (in case you need it).
 *
 * @function
 * @sig [Promise|(() -> Promise)] -> Promise
 * @param {Promise[]|Function[]} requests An array of Promises (or of Functions
 * that return Promises) which need to be executed in sequential order
 * @returns {Promise} A Promise that will resolve when each of the requests completes
 */
function promiseChain(...requests) {
  const reqs = Array.isArray(requests[0]) ? requests[0] : requests
  const len = reqs.length
  const promisesPromises = new Array(len)
  const getNext = (req, lastVal) => (typeof req === 'function' ? req(lastVal) : req)

  let chain = Promise.resolve()
  for (let i = 0; i < len; i++) {
    promisesPromises[i] = (
      chain = chain.then(val => getNext(reqs[i], val))
    )
  }

  return Promise.all(promisesPromises)
}

export default promiseChain
