"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuContext = void 0;
exports.default = InheritableContextProvider;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var React = _interopRequireWildcard(require("react"));

var _useMemo = _interopRequireDefault(require("rc-util/lib/hooks/useMemo"));

var _shallowequal = _interopRequireDefault(require("shallowequal"));

var _excluded = ["children", "locked"];
var MenuContext = /*#__PURE__*/React.createContext(null);
exports.MenuContext = MenuContext;

function mergeProps(origin, target) {
  var clone = (0, _objectSpread2.default)({}, origin);
  Object.keys(target).forEach(function (key) {
    var value = target[key];

    if (value !== undefined) {
      clone[key] = value;
    }
  });
  return clone;
}

function InheritableContextProvider(_ref) {
  var children = _ref.children,
      locked = _ref.locked,
      restProps = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var context = React.useContext(MenuContext);
  var inheritableContext = (0, _useMemo.default)(function () {
    return mergeProps(context, restProps);
  }, [context, restProps], function (prev, next) {
    return !locked && (prev[0] !== next[0] || !(0, _shallowequal.default)(prev[1], next[1]));
  });
  return /*#__PURE__*/React.createElement(MenuContext.Provider, {
    value: inheritableContext
  }, children);
}