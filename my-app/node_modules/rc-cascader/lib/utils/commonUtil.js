"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VALUE_SPLIT = void 0;
exports.fillFieldNames = fillFieldNames;
exports.isLeaf = isLeaf;
exports.toPathKey = toPathKey;
exports.toPathKeys = toPathKeys;
exports.toPathValueStr = toPathValueStr;
var VALUE_SPLIT = '__RC_CASCADER_SPLIT__';
exports.VALUE_SPLIT = VALUE_SPLIT;

function toPathKey(value) {
  return value.join(VALUE_SPLIT);
}

function toPathKeys(value) {
  return value.map(toPathKey);
}

function toPathValueStr(pathKey) {
  return pathKey.split(VALUE_SPLIT);
}

function fillFieldNames(fieldNames) {
  var _ref = fieldNames || {},
      label = _ref.label,
      value = _ref.value,
      children = _ref.children;

  var val = value || 'value';
  return {
    label: label || 'label',
    value: val,
    key: val,
    children: children || 'children'
  };
}

function isLeaf(option, fieldNames) {
  var _option$isLeaf, _option$fieldNames$ch;

  return (_option$isLeaf = option.isLeaf) !== null && _option$isLeaf !== void 0 ? _option$isLeaf : !((_option$fieldNames$ch = option[fieldNames.children]) === null || _option$fieldNames$ch === void 0 ? void 0 : _option$fieldNames$ch.length);
}