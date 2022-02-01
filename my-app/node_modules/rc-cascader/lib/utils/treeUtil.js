"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatStrategyValues = formatStrategyValues;
exports.toPathOptions = toPathOptions;

function formatStrategyValues(pathKeys, getKeyPathEntities) {
  var valueSet = new Set(pathKeys);
  var keyPathEntities = getKeyPathEntities();
  return pathKeys.filter(function (key) {
    var entity = keyPathEntities[key];
    var parent = entity ? entity.parent : null;

    if (parent && !parent.node.disabled && valueSet.has(parent.key)) {
      return false;
    }

    return true;
  });
}

function toPathOptions(valueCells, options, fieldNames) {
  var stringMode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var currentList = options;
  var valueOptions = [];

  var _loop = function _loop(i) {
    var _currentList, _currentList2, _foundOption$fieldNam;

    var valueCell = valueCells[i];
    var foundIndex = (_currentList = currentList) === null || _currentList === void 0 ? void 0 : _currentList.findIndex(function (option) {
      var val = option[fieldNames.value];
      return stringMode ? String(val) === String(valueCell) : val === valueCell;
    });
    var foundOption = foundIndex !== -1 ? (_currentList2 = currentList) === null || _currentList2 === void 0 ? void 0 : _currentList2[foundIndex] : null;
    valueOptions.push({
      value: (_foundOption$fieldNam = foundOption === null || foundOption === void 0 ? void 0 : foundOption[fieldNames.value]) !== null && _foundOption$fieldNam !== void 0 ? _foundOption$fieldNam : valueCell,
      index: foundIndex,
      option: foundOption
    });
    currentList = foundOption === null || foundOption === void 0 ? void 0 : foundOption[fieldNames.children];
  };

  for (var i = 0; i < valueCells.length; i += 1) {
    _loop(i);
  }

  return valueOptions;
}