import propAt from "./propAt"
import { _includes } from "./_internal/_includes"

/**
 * Filters an array of values down to only those which are unique, based on a provided predicate function (or shorthand for retrieving a prop inside an object)
 *
 * @function
 * @param {Function|String} pred A predicate function
 * @param {Array<*>} list An array of values which may or may not contain duplicates
 * @returns {Array<*>} A new list containing only the unique values from the original array
 */
function uniqBy(pred, list) {
  let fn
  if (typeof pred === "string" && pred.split(".").length === 1) {
    fn = o => o[pred]
  } else if (Array.isArray(pred) && pred.length === 1) {
    fn = o => o[pred[0]]
  } else if (typeof pred === "function") {
    fn = pred
  } else {
    fn = o => propAt(pred, o)
  }

  let idx = -1
  const newArr = []
  const compared = []
  const len = list.length

  while (++idx < len) {
    const val = list[idx]
    const valley = fn(val)
    if (!_includes(valley, compared)) {
      newArr.push(val)
      compared.push(valley)
    }
  }
  return newArr
}

export default uniqBy
