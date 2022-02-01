"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

// Tell cell that browser support sticky
var StickyContext = /*#__PURE__*/React.createContext(false);
var _default = StickyContext;
exports.default = _default;