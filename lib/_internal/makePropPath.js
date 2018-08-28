function makePropPath(prop) {
  return Array.isArray(prop) ? prop : prop.split('.')
}

module.exports = makePropPath
