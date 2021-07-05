import cond from "./cond"
import forIn from "./forIn"
import mapObject from "./mapObject"
import { toFunction } from "./_internal/coerce"

const isFunction = v => typeof v === "function"
const brokenValidator = (val, key) => `Validations for "${key}" are broken`
const defaultMessageHandler = (val, key) => `"${val}" is not valid for "${key}"`

/**
 * A function which ensures the input is either a singel validator, a list of validators, or possible just the validator function.
 * This is essentially a tuple whose first indexed value is the actual function which validates the input and whose second indexed value is the error message which is display (or a function which returns the error message) when the validation fails.
 *
 * @function
 * @private
 * @name _unpackValidator
 * @param {Array<function|string>|Array<Array<function|string>>|function} rawValidators A single validator, a list of validators or possibly just a validation function.
 * @returns {object} An object of validation functions which are ready to
 * receive the value to validate
 */
function _unpackValidator(rawValidators) {
  const validators = cond([
    [isFunction, [[rawValidators, defaultMessageHandler]]],
    [v => Array.isArray(v) && v.length <= 2 && isFunction(v[0]),
      ([validator, message = defaultMessageHandler]) => [[validator, toFunction(message)]]
    ],
    [v => Array.isArray(v) && v.every(kv => Array.isArray(kv)),
      v => v.map(([validator, message = defaultMessageHandler]) => [validator, toFunction(message)])
    ],
    [v => Array.isArray(v),
      v => v.map(validator => {
        if (Array.isArray(validator) && isFunction(validator[0])) {
          return [validator[0], toFunction(validator[1] || defaultMessageHandler)]
        } else if (isFunction(validator)) {
          return [validator, defaultMessageHandler]
        }
        return [() => true, brokenValidator]
      })
    ],
    [() => true, [[() => false, brokenValidator]]]
  ], rawValidators)

  return (v, k) => validators
    .map(([validator, createErrorMessage]) => validator(v, k) || createErrorMessage(v, k))
    .filter(kv => kv !== true)
}

/**
 * Applies many validations to an object of values.
 * Those validations are written as Arrays of pairs:
 *   - for the value at the first index supply your validation function that _must_ pass
 *   - for the value at the second index supply a corresponding error message (OR function returning an error message)
 *     should the validation fail.
 *
 * If you do not supply a validation error message, a default one will be built that looks like:
 *   `"${val}" is not valid for "${key}"`
 *
 * And of course, you can write your validation error message as a function that will receive the value and key name as its first and second params (you should return a message as a string).
 *
 * If you do not supply valid input (Array of validator function and validation error message), rather than throwing an error it will be replaced with a validation function that always returns `false` and a corresponding error message of:
 *   `Validations for "${key}" are broken`
 *
 * @function
 * @name validate
 * @param {Array<function>} validations An array of validator functions and their corresponding error message
 * @param {object} values An Object of key value pairs, the keys should correspond to validators and the values are that which is to be validated
 * @returns {object} An object containing the key names of the values and one or more validation error messages (Only key names whose values were found to be invalid will show up on this output Object; an empty Object means everything was valid)
 * @example
 * validate(isRequired, val)
 * validate([isRequired, 'field is required'], val)
 * validate([
 *   [isRequired, (_, key) => `${key} is required`],
 *   [isValidThing, val => `${val} is not a valid thing`],
 *   [mustBeBlue, 'Your favorite color must be blue'],
 *   [functionalOrObjectOriented]
 * ], val)
 */
function validate(validations, values) {
  const validators = mapObject(_unpackValidator, validations)
  const invalids = {}
  forIn((key, val) => {
    const validationResults = val(values[key], key)
    if (validationResults.length) {
      invalids[key] = validationResults
    }
  }, validators)
  return invalids
}

export default validate
