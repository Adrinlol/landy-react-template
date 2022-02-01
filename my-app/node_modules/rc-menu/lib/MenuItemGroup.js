"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MenuItemGroup;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _omit = _interopRequireDefault(require("rc-util/lib/omit"));

var _nodeUtil = require("./utils/nodeUtil");

var _MenuContext = require("./context/MenuContext");

var _PathContext = require("./context/PathContext");

var _excluded = ["className", "title", "eventKey", "children"],
    _excluded2 = ["children"];

var InternalMenuItemGroup = function InternalMenuItemGroup(_ref) {
  var className = _ref.className,
      title = _ref.title,
      eventKey = _ref.eventKey,
      children = _ref.children,
      restProps = (0, _objectWithoutProperties2.default)(_ref, _excluded);

  var _React$useContext = React.useContext(_MenuContext.MenuContext),
      prefixCls = _React$useContext.prefixCls;

  var groupPrefixCls = "".concat(prefixCls, "-item-group");
  return /*#__PURE__*/React.createElement("li", (0, _extends2.default)({}, restProps, {
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    className: (0, _classnames.default)(groupPrefixCls, className)
  }), /*#__PURE__*/React.createElement("div", {
    className: "".concat(groupPrefixCls, "-title"),
    title: typeof title === 'string' ? title : undefined
  }, title), /*#__PURE__*/React.createElement("ul", {
    className: "".concat(groupPrefixCls, "-list")
  }, children));
};

function MenuItemGroup(_ref2) {
  var children = _ref2.children,
      props = (0, _objectWithoutProperties2.default)(_ref2, _excluded2);
  var connectedKeyPath = (0, _PathContext.useFullPath)(props.eventKey);
  var childList = (0, _nodeUtil.parseChildren)(children, connectedKeyPath);
  var measure = (0, _PathContext.useMeasure)();

  if (measure) {
    return childList;
  }

  return /*#__PURE__*/React.createElement(InternalMenuItemGroup, (0, _omit.default)(props, ['warnKey']), childList);
}