function uniq(list) {
  return Array.from(new Set(list.map(JSON.stringify))).map(JSON.parse)
}

module.exports = uniq
