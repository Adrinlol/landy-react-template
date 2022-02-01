"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isCustomProp = _interopRequireDefault(require("./isCustomProp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const globalKeywords = new Set(['inherit', 'initial', 'unset', 'revert']);

var _default = (prop, includeCustomProps = true) => {
  if (!prop.value || includeCustomProps && (0, _isCustomProp.default)(prop) || prop.value && globalKeywords.has(prop.value.toLowerCase())) {
    return false;
  }

  return true;
};

exports.default = _default;
module.exports = exports.default;