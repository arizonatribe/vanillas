function mapString(fn, str) {
  return str.split('').map(fn).join('')
}

module.exports = mapString
