"use strict";

exports.__esModule = true;
exports.default = void 0;

var _cond = _interopRequireDefault(require("./cond"));

var _forIn = _interopRequireDefault(require("./forIn"));

var _mapObject = _interopRequireDefault(require("./mapObject"));

var _coerce = require("./_internal/coerce");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isFunction = function isFunction(v) {
  return typeof v === "function";
};

var brokenValidator = function brokenValidator(val, key) {
  return "Validations for \"" + key + "\" are broken";
};

var defaultMessageHandler = function defaultMessageHandler(val, key) {
  return "\"" + val + "\" is not valid for \"" + key + "\"";
};
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
  var validators = (0, _cond.default)([[isFunction, [[rawValidators, defaultMessageHandler]]], [function (v) {
    return Array.isArray(v) && v.length <= 2 && isFunction(v[0]);
  }, function (_ref) {
    var validator = _ref[0],
        _ref$ = _ref[1],
        message = _ref$ === void 0 ? defaultMessageHandler : _ref$;
    return [[validator, (0, _coerce.toFunction)(message)]];
  }], [function (v) {
    return Array.isArray(v) && v.every(function (kv) {
      return Array.isArray(kv);
    });
  }, function (v) {
    return v.map(function (_ref2) {
      var validator = _ref2[0],
          _ref2$ = _ref2[1],
          message = _ref2$ === void 0 ? defaultMessageHandler : _ref2$;
      return [validator, (0, _coerce.toFunction)(message)];
    });
  }], [function (v) {
    return Array.isArray(v);
  }, function (v) {
    return v.map(function (validator) {
      if (Array.isArray(validator) && isFunction(validator[0])) {
        return [validator[0], (0, _coerce.toFunction)(validator[1] || defaultMessageHandler)];
      } else if (isFunction(validator)) {
        return [validator, defaultMessageHandler];
      }

      return [function () {
        return true;
      }, brokenValidator];
    });
  }], [function () {
    return true;
  }, [[function () {
    return false;
  }, brokenValidator]]]], rawValidators);
  return function (v, k) {
    return validators.map(function (_ref3) {
      var validator = _ref3[0],
          createErrorMessage = _ref3[1];
      return validator(v, k) || createErrorMessage(v, k);
    }).filter(function (kv) {
      return kv !== true;
    });
  };
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
  var validators = (0, _mapObject.default)(_unpackValidator, validations);
  var invalids = {};
  (0, _forIn.default)(function (key, val) {
    var validationResults = val(values[key], key);

    if (validationResults.length) {
      invalids[key] = validationResults;
    }
  }, validators);
  return invalids;
}

var _default = validate;
exports.default = _default;