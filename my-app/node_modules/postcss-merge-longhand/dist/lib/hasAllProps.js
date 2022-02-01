"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = (rule, ...props) => {
  return props.every(p => rule.some(({
    prop
  }) => prop && prop.toLowerCase().includes(p)));
};

exports.default = _default;
module.exports = exports.default;