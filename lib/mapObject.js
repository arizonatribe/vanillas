const forIn = require('./forIn')

function mapObject(fn, obj) {
  const newObj = {}
  forIn((key, ob) => {
    newObj[key] = fn(ob[key], key, ob)
  }, obj)
  return newObj
}

module.exports = mapObject
