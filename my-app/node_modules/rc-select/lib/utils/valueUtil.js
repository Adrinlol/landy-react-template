"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fillFieldNames = fillFieldNames;
exports.flattenOptions = flattenOptions;
exports.getSeparatedContent = getSeparatedContent;
exports.injectPropsWithOption = injectPropsWithOption;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _toArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toArray"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _warning = _interopRequireDefault(require("rc-util/lib/warning"));

function getKey(data, index) {
  var key = data.key;
  var value;

  if ('value' in data) {
    value = data.value;
  }

  if (key !== null && key !== undefined) {
    return key;
  }

  if (value !== undefined) {
    return value;
  }

  return "rc-index-key-".concat(index);
}

function fillFieldNames(fieldNames, childrenAsData) {
  var _ref = fieldNames || {},
      label = _ref.label,
      value = _ref.value,
      options = _ref.options;

  return {
    label: label || (childrenAsData ? 'children' : 'label'),
    value: value || 'value',
    options: options || 'options'
  };
}
/**
 * Flat options into flatten list.
 * We use `optionOnly` here is aim to avoid user use nested option group.
 * Here is simply set `key` to the index if not provided.
 */


function flattenOptions(options) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      fieldNames = _ref2.fieldNames,
      childrenAsData = _ref2.childrenAsData;

  var flattenList = [];

  var _fillFieldNames = fillFieldNames(fieldNames, false),
      fieldLabel = _fillFieldNames.label,
      fieldValue = _fillFieldNames.value,
      fieldOptions = _fillFieldNames.options;

  function dig(list, isGroupOption) {
    list.forEach(function (data) {
      var label = data[fieldLabel];

      if (isGroupOption || !(fieldOptions in data)) {
        var value = data[fieldValue]; // Option

        flattenList.push({
          key: getKey(data, flattenList.length),
          groupOption: isGroupOption,
          data: data,
          label: label,
          value: value
        });
      } else {
        var grpLabel = label;

        if (grpLabel === undefined && childrenAsData) {
          grpLabel = data.label;
        } // Option Group


        flattenList.push({
          key: getKey(data, flattenList.length),
          group: true,
          data: data,
          label: grpLabel
        });
        dig(data[fieldOptions], true);
      }
    });
  }

  dig(options, false);
  return flattenList;
}
/**
 * Inject `props` into `option` for legacy usage
 */


function injectPropsWithOption(option) {
  var newOption = (0, _objectSpread2.default)({}, option);

  if (!('props' in newOption)) {
    Object.defineProperty(newOption, 'props', {
      get: function get() {
        (0, _warning.default)(false, 'Return type is option instead of Option instance. Please read value directly instead of reading from `props`.');
        return newOption;
      }
    });
  }

  return newOption;
}

function getSeparatedContent(text, tokens) {
  if (!tokens || !tokens.length) {
    return null;
  }

  var match = false;

  function separate(str, _ref3) {
    var _ref4 = (0, _toArray2.default)(_ref3),
        token = _ref4[0],
        restTokens = _ref4.slice(1);

    if (!token) {
      return [str];
    }

    var list = str.split(token);
    match = match || list.length > 1;
    return list.reduce(function (prevList, unitStr) {
      return [].concat((0, _toConsumableArray2.default)(prevList), (0, _toConsumableArray2.default)(separate(unitStr, restTokens)));
    }, []).filter(function (unit) {
      return unit;
    });
  }

  var list = separate(text, tokens);
  return match ? list : null;
}