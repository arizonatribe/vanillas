function uniq(list) {
  return Array.from(new Set(list.map(JSON.stringify))).map(JSON.parse)
}

export default uniq
