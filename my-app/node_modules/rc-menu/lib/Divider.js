"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Divider;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _MenuContext = require("./context/MenuContext");

var _PathContext = require("./context/PathContext");

function Divider(_ref) {
  var className = _ref.className,
      style = _ref.style;

  var _React$useContext = React.useContext(_MenuContext.MenuContext),
      prefixCls = _React$useContext.prefixCls;

  var measure = (0, _PathContext.useMeasure)();

  if (measure) {
    return null;
  }

  return /*#__PURE__*/React.createElement("li", {
    className: (0, _classnames.default)("".concat(prefixCls, "-item-divider"), className),
    style: style
  });
}