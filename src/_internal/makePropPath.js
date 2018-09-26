function makePropPath(prop) {
  return Array.isArray(prop) ? prop : prop.split('.')
}

export default makePropPath
