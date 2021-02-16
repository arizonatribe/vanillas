/**
 * Gathers an Array of Functions that return Promises and returns an Array of results, once they have all completed.
 * The only difference between this and native Promise.all() is that these promises will _all_ be resolved/rejected before the final Promise (containing all the results) is returned. With native Promise.all(), the first unhandled rejection will cause the whole endeavor to be terminated.
 * Addtionally you can pass in a flag to force caught errors to be ignored entirely.
 *
 * @function
 * @name promiseAll
 * @param {Array<Function>} requests An array of Functions that return Promises
 * @param {Boolean} ignoreErrors Whether or not to ignore errors entirely (this will cause all the results to be returned and any Errors will be returned in place of the results)
 * @returns {Promise<*>} A Promise that will resolve once all of the Promises are resolved/rejected
 */
function promiseAll(requests, ignoreErrors) {
  const errors = []
  const len = requests.length
  let resolvedRejectedCount = 0
  const results = new Array(len)

  return new Promise((resolve, reject) => {
    function checkForFinalPromise() {
      if (resolvedRejectedCount === len) {
        if (ignoreErrors || !errors.length) {
          resolve(results)
        } else {
          reject(errors)
        }
      }
    }
    function handleResult(result, index) {
      resolvedRejectedCount++
      results[index] = result
      checkForFinalPromise()
    }
    function handleError(err, index) {
      resolvedRejectedCount++
      if (ignoreErrors) results[index] = err
      errors.push(err)
      checkForFinalPromise()
    }

    for (let i = 0; i < len; i++) {
      requests[i]
        .then(result => handleResult(result, i))
        .catch(err => handleError(err, i))
    }
  })
}

export default promiseAll
