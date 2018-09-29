function chainRequests(requests) {
  const len = requests.length
  const promisesPromises = new Array(len)
  const getNext = req => (typeof req === 'function' ? req() : req)

  let chain = Promise.resolve()
  for (let i = 0; i < len; i++) {
    promisesPromises[i] = (
      chain = chain.then(() => getNext(requests[i], i, requests))
    )
  }

  return Promise.all(promisesPromises)
}

export default chainRequests
