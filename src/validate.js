import forIn from "./forIn"

const defaultErrorHandler = (val, key) => `"${val}" is not valid for "${key}"`

/**
 * Handles error validation messages with either a pre-supplied validator or a default which catches the key and value.
 *
 * @function
 * @private
 * @name _handleMessage
 * @param {function|string|undefined} message A message or message handler function
 * @param {*} val A value being validated
 * @param {string} key The name of the property being validated
 * @returns {string} The validation error message
 */
function _handleMessage(message, val, key) {
  if (typeof message === "function") {
    return message(val, key)
  } else if (typeof message === "string" && message.trim().length > 0) {
    return message
  }
  return defaultErrorHandler(val, key)
}

/**
 * A function which ensures the input is either a singel validator, a list of validators, or possible just the validator function.
 * This is essentially a tuple whose first indexed value is the actual function which validates the input and whose second indexed value is the error message which is display (or a function which returns the error message) when the validation fails.
 *
 * @function
 * @private
 * @name _createValidator
 * @param {Array<function|string>|Array<Array<function|string>>|function} rawValidators A single validator, a list of validators or possibly just a validation function.
 * @returns {object} An object of validation functions which are ready to receive the value to validate
 */
function _createValidator(rawValidators) {
  if (typeof rawValidators === "function") {
    return (v, k) => {
      const validationResults = []

      const result = rawValidators(v, k)
      if (!result) {
        validationResults.push(defaultErrorHandler(v, k))
      }

      return validationResults
    }
  } else if (Array.isArray(rawValidators)) {
    if (rawValidators.length <= 2 && typeof rawValidators[0] === "function") {
      return (v, k) => {
        const validationResults = []

        const result = rawValidators[0](v, k)
        if (!result) {
          validationResults.push(_handleMessage(rawValidators[1], v, k))
        }

        return validationResults
      }
    } else if (rawValidators.every((kv) => typeof kv === "function" || Array.isArray(kv))) {
      return (v, k) => {
        const validationResults = []

        for (let i = 0, len = rawValidators.length; i < len; i++) {
          if (typeof rawValidators[i] === "function") {
            const result = rawValidators[i](v, k)
            if (!result) {
              validationResults.push(defaultErrorHandler(v, k))
            }
          } else {
            const result = rawValidators[i][0](v, k)
            if (!result) {
              validationResults.push(_handleMessage(rawValidators[i][1], v, k))
            }
          }
        }

        return validationResults
      }
    }
  }

  return (_val, key) => `Validations for "${key}" are broken`
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
  const validators = {}
  forIn((key, val) => {
    validators[key] = _createValidator(val)
  }, validations)

  const invalids = {}
  forIn((key, val) => {
    const validationResults = val(values[key], key)
    if (validationResults.length > 0) {
      invalids[key] = validationResults
    }
  }, validators)

  return invalids
}

export default validate
