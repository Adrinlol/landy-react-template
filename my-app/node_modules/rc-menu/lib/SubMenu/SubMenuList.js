"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _MenuContext = require("../context/MenuContext");

var _excluded = ["className", "children"];

var InternalSubMenuList = function InternalSubMenuList(_ref, ref) {
  var className = _ref.className,
      children = _ref.children,
      restProps = (0, _objectWithoutProperties2.default)(_ref, _excluded);

  var _React$useContext = React.useContext(_MenuContext.MenuContext),
      prefixCls = _React$useContext.prefixCls,
      mode = _React$useContext.mode,
      rtl = _React$useContext.rtl;

  return /*#__PURE__*/React.createElement("ul", (0, _extends2.default)({
    className: (0, _classnames.default)(prefixCls, rtl && "".concat(prefixCls, "-rtl"), "".concat(prefixCls, "-sub"), "".concat(prefixCls, "-").concat(mode === 'inline' ? 'inline' : 'vertical'), className)
  }, restProps, {
    "data-menu-list": true,
    ref: ref
  }), children);
};

var SubMenuList = /*#__PURE__*/React.forwardRef(InternalSubMenuList);
SubMenuList.displayName = 'SubMenuList';
var _default = SubMenuList;
exports.default = _default;