"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _configProvider = require("../config-provider");

var _utils = require("./utils");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Ribbon = function Ribbon(_ref) {
  var _classNames;

  var className = _ref.className,
      customizePrefixCls = _ref.prefixCls,
      style = _ref.style,
      color = _ref.color,
      children = _ref.children,
      text = _ref.text,
      _ref$placement = _ref.placement,
      placement = _ref$placement === void 0 ? 'end' : _ref$placement;

  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var prefixCls = getPrefixCls('ribbon', customizePrefixCls);
  var colorInPreset = (0, _utils.isPresetColor)(color);
  var ribbonCls = (0, _classnames["default"])(prefixCls, "".concat(prefixCls, "-placement-").concat(placement), (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-color-").concat(color), colorInPreset), _classNames), className);
  var colorStyle = {};
  var cornerColorStyle = {};

  if (color && !colorInPreset) {
    colorStyle.background = color;
    cornerColorStyle.color = color;
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-wrapper")
  }, children, /*#__PURE__*/React.createElement("div", {
    className: ribbonCls,
    style: (0, _extends2["default"])((0, _extends2["default"])({}, colorStyle), style)
  }, /*#__PURE__*/React.createElement("span", {
    className: "".concat(prefixCls, "-text")
  }, text), /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-corner"),
    style: cornerColorStyle
  })));
};

var _default = Ribbon;
exports["default"] = _default;