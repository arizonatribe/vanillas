import curry from "./curry"

/**
 * A function that accepts two functions and a value and will return the first result which is "truthy".
 * This function is curried because it doesn't make any sense to even have it unless you have the functions ahead of time but not the value.
 *
 * @function
 * @name eitherOr
 * @param {function} fnA The first function to be executed on the value
 * @param {function} fnB The second function to be executed on the value
 * @param {*} val A value to be passed into the functions
 * @returns {*} The result of executing value passed in
 */
function eitherOr(fnA, fnB, val) {
  if (typeof fnA !== "function") {
    throw new TypeError(`${fnA} is not a function`)
  }
  if (typeof fnB !== "function") {
    throw new TypeError(`${fnB} is not a function`)
  }
  return fnA(val) || fnB(val)
}

export default curry(eitherOr)
