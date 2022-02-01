"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Item = _interopRequireDefault(require("./Item"));

var _Overflow = require("./Overflow");

var InternalRawItem = function InternalRawItem(props, ref) {
  var context = React.useContext(_Overflow.OverflowContext); // Render directly when context not provided

  if (!context) {
    var _props$component = props.component,
        Component = _props$component === void 0 ? 'div' : _props$component,
        _restProps = (0, _objectWithoutProperties2.default)(props, ["component"]);

    return /*#__PURE__*/React.createElement(Component, (0, _extends2.default)({}, _restProps, {
      ref: ref
    }));
  }

  var contextClassName = context.className,
      restContext = (0, _objectWithoutProperties2.default)(context, ["className"]);
  var className = props.className,
      restProps = (0, _objectWithoutProperties2.default)(props, ["className"]); // Do not pass context to sub item to avoid multiple measure

  return /*#__PURE__*/React.createElement(_Overflow.OverflowContext.Provider, {
    value: null
  }, /*#__PURE__*/React.createElement(_Item.default, (0, _extends2.default)({
    ref: ref,
    className: (0, _classnames.default)(contextClassName, className)
  }, restContext, restProps)));
};

var RawItem = /*#__PURE__*/React.forwardRef(InternalRawItem);
RawItem.displayName = 'RawItem';
var _default = RawItem;
exports.default = _default;