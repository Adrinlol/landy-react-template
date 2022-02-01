"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var UnreachableException = /*#__PURE__*/(0, _createClass2["default"])(function UnreachableException(value) {
  (0, _classCallCheck2["default"])(this, UnreachableException);
  this.error = new Error("unreachable case: ".concat(JSON.stringify(value)));
});
exports["default"] = UnreachableException;