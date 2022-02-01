"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = normalizeBorder;

var _postcssValueParser = require("postcss-value-parser");

var _mathfunctions = _interopRequireDefault(require("../lib/mathfunctions.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// border: <line-width> || <line-style> || <color>
// outline: <outline-color> || <outline-style> || <outline-width>
const borderWidths = new Set(['thin', 'medium', 'thick']);
const borderStyles = new Set(['none', 'auto', // only in outline-style
'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset']);

function normalizeBorder(border) {
  const order = {
    width: '',
    style: '',
    color: ''
  };
  border.walk(node => {
    const {
      type,
      value
    } = node;

    if (type === 'word') {
      if (borderStyles.has(value.toLowerCase())) {
        order.style = value;
        return false;
      }

      if (borderWidths.has(value.toLowerCase()) || (0, _postcssValueParser.unit)(value.toLowerCase())) {
        if (order.width !== '') {
          order.width = `${order.width} ${value}`;
          return false;
        }

        order.width = value;
        return false;
      }

      order.color = value;
      return false;
    }

    if (type === 'function') {
      if (_mathfunctions.default.has(value.toLowerCase())) {
        order.width = (0, _postcssValueParser.stringify)(node);
      } else {
        order.color = (0, _postcssValueParser.stringify)(node);
      }

      return false;
    }
  });
  return `${order.width} ${order.style} ${order.color}`.trim();
}

module.exports = exports.default;