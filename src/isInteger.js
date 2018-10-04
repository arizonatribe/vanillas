function isInteger(val) {
  // eslint-disable-next-line no-restricted-globals
  return typeof val === 'number' && isFinite(val) && Math.floor(val) === val
}

export default isInteger
